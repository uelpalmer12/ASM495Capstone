<script type="javascript">
	import { connect, JSONCodec } from 'nats.ws';
	
	export let address = '';
	export let subject = '';
	
	let value;
	let units;
	let nc;
	
	async function doWork(address, subject) {
		if(!address || !subject) {
			return;
		}

		if (nc) {
			nc.close();
		}


		// Required step 1
		// NOTE: This should be moved so it only happens once ... I can help later when your ready.
		
		nc = await connect({ servers: address });
		

		// create a codec
		const jc = JSONCodec();

		// Required step 2
		const s = nc.subscribe(subject);

		// Required step 3
		var lastTime = -999999;
		for await (const m of s) {
			let msg = jc.decode(m.data);

			// if (msg.time <= lastTime + 0.5) {
			// 	continue;
			// }
			// lastTime = msg.time;

			
			value = (msg.sumVal/msg.number).toFixed(2); 
			units = msg.units;
		}
	}

	$: doWork(address, subject);
</script>
{#if value}
<p>{value} {units}</p>
{:else}
?
{/if}