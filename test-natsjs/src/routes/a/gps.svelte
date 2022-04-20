<script>
	 import {LeafletMap, Marker, TileLayer} from 'svelte-leafletjs';
	 import 'leaflet/dist/leaflet.css';
	 import { connect, JSONCodec } from 'nats.ws';
	 import AutoComplete from "simple-svelte-autocomplete"


	export let address = 'ws://172.16.254.5:443';
	export let subject =  'gps.TPV';
	export let paused = false;
 
	let msg={};
	let messages = []
	let nc;
	let name = '';

	const IPList = [
	{ id: 1, name: "Skid Steer Local", ip: 'ws://192.168.10.1:443' },
  	{ id: 2, name: "Skid Steer Remote", ip: 'ws://172.16.1.12:443' },
	{ id: 3, name: "Tractor one", ip: 'ws://172.16.254.5:443' },
  	]

	
	let selectedIP = IPList[1];
	let ip;
	$: {
		ip = selectedIP.ip
		name =selectedIP.name
	}

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
			if (!paused) {
			 msg = jc.decode(m.data);
			}
		}
	}
 
	$: connect2(address).then((nc) => subscribe(nc, subject))





const mapOptions = {
	center: [40.42166999136725, -86.91662405049766],
	zoom: 14,
};
const tileUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
const tileLayerOptions = {
	minZoom: 0,
	maxZoom: 20,
	maxNativeZoom: 19,
	attribution: "© OpenStreetMap contributors",
};
	
	</script>

<style>
	h4{
		font-size: 400%;
		text-align: center;
	}
	body{
		border-style: solid;
		border-width: 1%;
		background-color: aqua;

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
	.map {
		height: 600px;
		width: auto;
	  }
	  .cbo2{
		width: 20%;
		font-size: 150%;
		padding-left: 2%;
		padding-top: 2%;
		padding-bottom: 0%;
	}
</style>

<title>GPS Page</title>
<body>
    <a href="/a/test">Go to debugger page</a>
	<div class="cbo2">
		Select Machine:
		<AutoComplete items="{IPList}" bind:selectedItem="{selectedIP}" labelFieldName="name" /> 
	</div>

    <h4>GPS Tracking</h4>
	<div class="map">
		<LeafletMap options={mapOptions}>
			<TileLayer url={tileUrl} options={tileLayerOptions}/>
			{#if  msg.lat == 0 || msg.lon == 0 || msg.lat === undefined || msg.lon === undefined }
			return null;
			{:else}
			{console.log([msg.lat, msg.lon])}
			<Marker latLng={[msg.lat, msg.lon]}/>	
			{/if}

			<!-- <Marker latLng={[1.359167, 103.989441]} rotationAngle={0}/> -->
		</LeafletMap>
	 </div>
	<a href="/">Go to Main Page</a>

</body>