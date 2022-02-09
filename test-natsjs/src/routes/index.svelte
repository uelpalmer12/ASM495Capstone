<script type="module">
	// import { connect, JSONCodec } from 'nats.ws';

	import TextView from '../compoents/TextView.svelte';

	let selected = 'ws://172.16.1.5:443';

	// 	async function doWork() {
	// 		console.log('connecting');
	// 		// Required step 1
	// 		const nc = await connect({ servers: 'ws://172.16.1.5:443' });
	// 		console.log(`connected to ${nc.getServer()}`);
	//
	// 		// create a codec
	// 		const jc = JSONCodec();
	//
	// 		// Required step 2
	// 		const s = nc.subscribe('j1939.EngFuelRate');
	//
	// 		// Required step 3
	// 		var lastTime = -999999;
	// 		for await (const m of s) {
	// 			let subj = s.getSubject();
	// 			let msg = jc.decode(m.data);
	//
	// 			if (msg.time <= lastTime + 1) {
	// 				continue;
	// 			}
	// 			lastTime = msg.time;
	//
	// 			console.log(`[${subj}] #${s.getProcessed()} - ${m.subject} `, msg);
	//
	// 			// Your task: figure out the what the `msg` variable is, update the right plot, profit
	// 		}
	// 	}

	// doWork();
</script>

<h1>Welcome to Avena Web Demo 1</h1>

<form>
	<select bind:value={selected}>
		<option value="ws://172.16.1.5:443">ISOBlue 5</option>
		<option value="ws://172.16.1.10:443">ISOBlue 10</option>
	</select>
</form>

<h1>Engine Fuel Rate</h1>
<TextView address={selected} subject="j1939.EngFuelRate" />

<h1>Engine Speed</h1>
<TextView address={selected} subject="j1939.EngSpeed" />

<h1>Wheel Based Vehicle Speed</h1>
<TextView address={selected} subject="j1939.WheelBasedVehicleSpeed" />
