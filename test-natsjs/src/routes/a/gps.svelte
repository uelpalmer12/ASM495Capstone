<script>
	import Map from '@anoram/leaflet-svelte'
	import { connect, JSONCodec } from 'nats.ws';
	let options={
	  center: [40.423727194627745, -86.91727366329326], // 
	  markers: [
		{
		  lat: 40.423727194627745, // this were we need to use the nats component to make it get the location
		  lng: -86.91727366329326
		}
	  ],
	  mapID: "map"
	}
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
</style>

<title>GPS Page</title>
<body>
    <a href="/a/test">Go to debugger page</a>
    <h4>GPS Tracking</h4>
	<div class="map">
		<Map {options} />
	 </div>
	<a href="/">Go to Main Page</a>
</body>