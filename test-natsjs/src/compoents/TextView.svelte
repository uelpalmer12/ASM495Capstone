<script type="module">
	import { connect, JSONCodec } from 'nats.ws';

	export let address = '';
	export let subject = '';

	let value;
	let units;

	async function doWork() {
		// Required step 1
		// NOTE: This should be moved so it only happens once ... I can help later when your ready.
		const nc = await connect({ servers: address });

		// create a codec
		const jc = JSONCodec();

		// Required step 2
		const s = nc.subscribe(subject);

		// Required step 3
		var lastTime = -999999;
		for await (const m of s) {
			let msg = jc.decode(m.data);

			if (msg.time <= lastTime + 0.5) {
				continue;
			}
			lastTime = msg.time;

			value = msg.value;
			units = msg.units;
		}
	}

	doWork();
</script>

<p>{value} {units}</p>
