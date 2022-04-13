import asyncio
import nats
import json
import time


async def main():
    # Connect to NATS!
    nc = await nats.connect("172.16.254.5")  # change ip to connect to correct isoblue

    sub = await nc.subscribe("j1939.data.>") # .raw is raw from can bus| .data is decoded data | .filter is filtered data
	
    
            # Process the message
    subjects = {}
    msg = await sub.next_msg()   #waits for next message

    try:  
        async for msg in sub.messages:
            messageStr = msg.data.decode()  #decodes the data 
            message = json.loads(messageStr)   # turns the data into a json dictionary
            messageSubj = msg.subject   # takes the subject 
                    
            if message["value"] <= message["max_value"] and message["value"] >= message["min_value"] and message["value"] != "null":
                             
                if subjects.get(messageSubj) == None: 

                   subjects[messageSubj] = { 
                                           "sumVal": 0, 
                                            "number": 0,
                                            "average": 0,
                                            "sumOfSquares": 0,
                                            "max_value": message["max_value"],
                                            "min_value": message["min_value"],
                                            "name": message["name"],
                                            "pgn": message["pgn"],
                                            "units": message["units"],
                                            "from": 0,
                                            "to": 0,
                                            "lastSent": time.time()
                                            }
                   
                   
                t = subjects.get(messageSubj)

                t["sumVal"] = float(t["sumVal"])
                t["sumVal"] += message["value"]
                t["sumOfSquares"] = float(t["sumOfSquares"])
                t["sumOfSquares"] += (message["value"])**2
                
                if subjects[messageSubj]["number"] == 0:
                    subjects[messageSubj]["from"] = time.time()
          
                else:
                    subjects[messageSubj]["to"] = time.time()
                
                subjects[messageSubj]["number"] = float(subjects[messageSubj]["number"])
                subjects[messageSubj]["number"] += 1

                       
                if subjects[messageSubj]["lastSent"] + 1 <= time.time():
                    name = subjects[messageSubj]["name"]
                    subjects[messageSubj]["average"] = subjects[messageSubj]["sumVal"]/t["number"]
                    subjects[messageSubj]["lastSent"] = time.time()
                    await nc.publish("j1939.filter." + name, bytes(json.dumps(subjects[messageSubj]), 'utf-8'))
                    subjects[messageSubj]["sumVal"] = "0"
                    subjects[messageSubj]["number"] = "0"
                    subjects[messageSubj]["sumOfSquares"] = "0"

        
    except Exception as e:
       print(e)
    finally:
       print("closing loop")
       loop.close()

loop = asyncio.new_event_loop()
try:

    asyncio.run(main())
    loop.run_forever()
except KeyboardInterrupt:
    pass
finally:
    print("closing loop")
    loop.close()
