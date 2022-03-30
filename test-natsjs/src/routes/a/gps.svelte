<script>
	 import {LeafletMap, Marker, TileLayer} from 'svelte-leafletjs';
	 import 'leaflet/dist/leaflet.css';


const mapOptions = {
	center: [1.364917, 103.822872],
	zoom: 11,
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
</style>

<title>GPS Page</title>
<body>
    <a href="/a/test">Go to debugger page</a>
    <h4>GPS Tracking</h4>
	<div class="map">
		<LeafletMap options={mapOptions}>
			<TileLayer url={tileUrl} options={tileLayerOptions}/>
			<Marker latLng={[1.282375, 103.864273]}/>
			<Marker latLng={[1.359167, 103.989441]} rotationAngle={45}/>
		</LeafletMap>
	 </div>
	<a href="/">Go to Main Page</a>
</body>