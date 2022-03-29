<script>
	import Map from '@anoram/leaflet-svelte'
	let options={
	  center: [13,80],
	  markers: [
		{
		  lat: 13,
		  lng: 80
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