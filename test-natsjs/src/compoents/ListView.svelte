<script type="javascript">
	import { connect, JSONCodec } from 'nats.ws';

	export let address = '';
	export let subject = '';

	let messages = []
	let nc;

	async function connect2(address) {
		if (nc) {
			nc.close();
		}

		// Required step 1
		// NOTE: This should be moved so it only happens once ... I can help later when your ready.
		nc = await connect({ servers: address });

		return nc;
	}

	async function subscribe(nc, subject) {
		// create a codec
		const jc = JSONCodec();

		// Required step 2
		const s = nc.subscribe(subject);

		// Required step 3
		for await (const m of s) {
			if (!pauased) {
				let msg = jc.decode(m.data);

				if (messages.length > 100) {
					messages.pop()
				}
				messages = [ ...messages, msg];
			}
		}
	}

	$: connect2(address).then((nc) => subscribe(nc, subject))
</script>

{#each messages.reverse() as msg}
	<p>{msg.timestamp} {msg.pgn} {msg.data} {JSON.stringify(msg)} </p>
{/each}