import asyncio
import nats
import json

async def main():

    nc = await nats.connect("172.16.254.5")  

    sub = await nc.subscribe("j1939.data.>")
    

    msg = await sub.next_msg()
    messageStr = msg.data.decode()
    message = json.loads(messageStr)
    messageSub = msg.subject


    messageSub = msg.subject	

    i = 1

    while i == 1: 
        if message["value"] > message["max_value"] or message["value"] < message["min_value"] or message["value"] == "null":
            print("test failed")
            i +=1
            break
        else:
            print("test works")
            await nc.publish("j1939.filter." + messageSub.split('.')[2], json.dumps(messageStr).encode())

            i +=1
 
    await nc.close()

asyncio.run(main())
