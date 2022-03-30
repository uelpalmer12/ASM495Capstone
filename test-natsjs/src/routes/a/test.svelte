<script>
import { connect } from 'nats.ws';

// import { NatsConnectionImpl } from 'nats.ws/lib/nats-base-client/nats';

    let name = ''
//     import ListView from '../../compoents/ListView.svelte';

    // let nc = connect(...);

    // let a = [];

    // nc.req('j1939.messages', function(msgs) => {
    //     for msg in msgs {
    //         a.push({ name: msgs.pgn, obj1: mgs.pgn })
    //     }
    // })

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
</style>

<title>Debugger</title>
<a href="/">Go to Main Page</a>
<body>

    <h4>Advanced Debugging Page</h4>
    <div class = search>
        <div class = al2>
            <h1>Search PGN Here</h1>
            <input bind:value={name} placeholder="enter png here">
                <p>PGN Search: {name || 'Null'}</p>

        </div>
        <h1>Output: </h1>
        <div class = box>
            <div>
            <ListView address = 'ws://172.16.254.5:443' subject = {name} paused={false}></ListView>
            </div>
        </div>
            
    </div>

</body>
<a href="/a/gps">Go to GPS Page</a>