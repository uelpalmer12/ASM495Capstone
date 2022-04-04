<script>
// import { connect } from 'nats.ws';

// import { NatsConnectionImpl } from 'nats.ws/lib/nats-base-client/nats';
  	import AutoComplete from "simple-svelte-autocomplete"
    let name = ''
    import ListView from '../../compoents/ListView.svelte';
    import Toggle from "svelte-toggle";

    let toggled;


    // let nc;

    // let a = [];

    // nc.req('j1939.messages', function(msgs) => {
    //     for msg in msgs {
    //         a.push({ name: msgs.pgn, obj1: mgs.pgn })
    //     }
    // })
    const IPList = [
  	{ id: 1, name: "Combine", ip: '123.24.24.23' },
  	{ id: 2, name: "Tractor one", ip: 'ws://172.16.254.5:443' },
  	]
    const PGNList = [
  	{ id: 1.1, name1: "j1939", pgn1: 'j1939.raw.' },
  	{ id: 2.1, name1: "j1939a", pgn1: 'j1939' },
	]
    const MSGList = [
  	{ id: 1.2, name2: "61444", msg1: '61444' },
  	{ id: 2.2, name2: "7382828", msg1: '7382828' },
	]

    let selectedIP = IPList[0];
    let selectedPGN = PGNList[0];
    let selectedMSG = MSGList[0];

    let ip;
    let pgn1;
    let name1;
    let msg1;
    let name2;
    let message_option;

    $: {
        if(name==''){
            message_option = pgn1+msg1;
        }
        else{
            message_option = name;
        }
        
		ip = selectedIP.ip
        pgn1 = selectedPGN.pgn1
        name1 = selectedPGN.name1
        msg1 = selectedMSG.msg1
        name2 = selectedMSG.name2
    }

</script>
<style>
    .box {
		width: 95%;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        text-align: left;
        padding-bottom: 30%;
        background-color: white;
        font-size: 100%;

	}
    
	h1{
		font-size: 150%;
	}

	h4{
		font-size: 400%;
		text-align: center;
	}

	body{
		border-style: solid;
		border-width: 1%;
		background-color: aqua;

	}

    .search{
        font-size: 50%;
        padding-left: 5%;
        font-size: 100%;
    }
    .al2{
        font-size: 100%;
        text-align: center;
        padding-right: 50%;
    }
    a{
		font-family: 'Times New Roman', Times, serif;
		background-color: black;
		color: white;
		border-color: black;
		border-style: solid;
		border-width: .005%;
		font-size: 150%;
	}
    .cbo2{
		width: 20%;
		font-size: 150%;
		padding-left: 2%;
		padding-top: 2%;
		padding-bottom: 0%;
	}
    th{
		width: 33.33%;
	}


</style>

<title>Debugger</title>
<a href="/">Go to Main Page</a>

<body>
    <div class= search>
        <div class="cbo2">
            Select Machine:
            <AutoComplete items="{IPList}" bind:selectedItem="{selectedIP}" labelFieldName="name" /> 
            <Toggle bind:toggled label="Start/ Stop Data Flow"/>
        </div>
    </div>
        
    <h4>Advanced Debugging Page</h4>

        <div>
            <table style="width:100%">
                <tr>
                    <th>
                        <h1>Select PGN</h1>
                        <AutoComplete items="{PGNList}" bind:selectedItem="{selectedPGN}" labelFieldName="name1" />
                    </th>
                    <th>
                        <h1>Select Message</h1>
                        <AutoComplete items="{MSGList}" bind:selectedItem="{selectedMSG}" labelFieldName="name2" />
                    </th>
                    <th>
                        <h1>Search PGN Here</h1>
                        <input bind:value={name} placeholder="enter png here">
                    </th>
                </tr>
            </table>
        <div class = search>
            <h1>Output: </h1>
            <div class = box>
                <div>
                <ListView address = {ip} subject = {message_option} paused={toggled}></ListView>
                </div>
            </div>
        </div>
    
    </div>

</body>
<a href="/a/gps">Go to GPS Page</a>