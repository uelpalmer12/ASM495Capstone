

<script type="module">
	
	import { connect, headers, JSONCodec } from 'nats.ws';

	import TextView from '../compoents/TextView.svelte';

	let selected = 'ws://172.16.254.5:443';

	 	async function doWork() {
	 		console.log('connecting');
	 		// Required step 1
	 		const nc = await connect({ servers: 'ws://172.16.1.5:443' });
	 		console.log(`connected to ${nc.getServer()}`);
	
	 		// create a codec
	 		const jc = JSONCodec();
	
	 		// Required step 2
	 		const s = nc.subscribe('j1939.EngFuelRate');
	
	 		// Required step 3
	 		var lastTime = -9999999;
	 		for await (const m of s) {
	 			let subj = s.getSubject();
	 			let msg = jc.decode(m.data);
	
	 			if (msg.time <= lastTime + 1) {
	 				continue;
	 			}
	 			lastTime = msg.time;
	
	 			console.log(`[${subj}] #${s.getProcessed()} - ${m.subject} `, msg);
	
	 		}
	 	}

	 doWork();
	 
</script>

<head>
	<link rel="stylesheet" href="routes/styles.css">
	
</head>
<style>
	h1{
		font-size: 150%;
	}
	h4{
		font-size: 400%;
		text-align: center;
	}
	th{
		padding-bottom: 10%;
		width: 33.33%;
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
	body{
		border-style: solid;
		border-width: 1%;
		background-color: aqua;
	}
	.textview{
		font-size: 200%;

	}
</style>

  
<body>
	<title>ISOBlue Main Page</title>
	<h4>ISOBlue Main Page</h4>
	<table style="width:100%">
		<tr>
		  <th>
			<h1>Engine Fuel Rate</h1>
			<div class="textview">
				<TextView address={selected} subject="j1939.data.EngFuelRate" />
			</div>
		  </th>
		  <th>
			<h1>Engine Speed</h1>
			<div class="textview">
				<TextView address={selected} subject="j1939.data.EngSpeed" />
			</div>
		  </th>
		  <th>
			<h1>Wheel Based Vehicle Speed</h1>
			<div class="textview">
				<TextView address={selected} subject="j1939.data.NavigationBasedVehicleSpeed" />
			</div>
		  </th>
		</tr>
		<tr>
		  <th>
			<h1>Joystick One</h1>
			<div class="textview">
				<TextView address={selected} subject="j1939.data.Joystick2Button9PressedStatus" />
			</div>
		  </th>
		  <th>
			<h1>Engine Speed</h1>
			<div class="textview">
				<TextView address={selected} subject="j1939.data.EngSpeed" />
			</div>
		  </th>
		  <th>
			<h1>Wheel Based Vehicle Speed</h1>
			<div class="textview">
				<TextView address={selected} subject="j1939.data.WheelBasedVehicleSpeed" />
			</div>
		  </th>
		</tr>
		
	  </table>

	<a href="/a/test">Go to debugger page</a>
</body>

