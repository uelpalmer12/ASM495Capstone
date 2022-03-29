<script type="javascript">

	import TextView from '../compoents/TextView.svelte';

  	import AutoComplete from "simple-svelte-autocomplete"

	let selected = 'ws://172.16.254.5:443'

  	const IPList = [
  	{ id: 1, name: "Combine", ip: '123.24.24.23' },
  	{ id: 2, name: "Tractor one", ip: 'ws://172.16.254.5:443' },
  	]
	const ObjectListOne = [
  	{ id: 1.1, name1: "Engine Fuel Rate", obj1: 'j1939.data.EngFuelRate' },
  	{ id: 2.1, name1: "Engine Speed", obj1: 'j1939.data.EngSpeed' },
	{ id: 3.1, name1: "Nav Based Vehicle Speed", obj1: 'j1939.data.NavigationBasedVehicleSpeed' },
	{ id: 3.1, name1: "Joystick", obj1: 'j1939.data.Joystick2Button9PressedStatus' },
	{ id: 3.1, name1: "Wheel Based Vehicle Speed", obj1: 'j1939.data.WheelBasedVehicleSpeed' },
	]

  	let selectedIP = {};
	let selectedOBJ1 = {};
	let selectedOBJ2 = {};
	let selectedOBJ3 = {};
	let selectedOBJ4 = {};
	let selectedOBJ5 = {};
	let selectedOBJ6 = {};

  	let ip;
	let obj1;
	let obj2;
	let obj3;
	let obj4;
	let obj5;
	let obj6;

	let name1
	let name2
	let name3
	let name4
	let name5
	let name6
	
	$: {
		ip = selectedIP.ip
		obj1 = selectedOBJ1.obj1
		obj2 = selectedOBJ2.obj1
		obj3 = selectedOBJ3.obj1
		obj4 = selectedOBJ4.obj1
		obj5 = selectedOBJ5.obj1
		obj6 = selectedOBJ6.obj1

		name1 = selectedOBJ1.name1
		name2 = selectedOBJ2.name1
		name3 = selectedOBJ3.name1
		name4 = selectedOBJ4.name1
		name5 = selectedOBJ5.name1
		name6 = selectedOBJ6.name1
	}

</script>

<style>
	h1{
		font-size: 150%;
	}
	h4{
		font-size: 400%;
		text-align: center;
		padding-top: 0%;
	}
	th{
		padding-bottom: 5.5%;
		width: 33.33%;
	}
	
	a{
		font-family: 'Times New Roman', Times, serif;
		background-color: black;
		color: white;
		border-color: black;
		border-style: solid;
		border-width: .005%;
		font-size: 100%;
	}
	body{
		border-style: solid;
		border-width: 1%;
		background-color: aqua;
	}
	.textview{
		font-size: 200%;

	}
	.cbo{
		width: 105%;
		font-size: 60%;

	}
	.cbo2{
		width: 20%;
		font-size: 150%;
		padding-left: 2%;
		padding-top: 2%;
		padding-bottom: 0%;
	}

</style>


<title>ISOBlue Main Page</title>
<body>
	<div class="cbo2">
		Select Machine:
		<AutoComplete items="{IPList}" bind:selectedItem="{selectedIP}" labelFieldName="name" /> 
	</div>
	
	<h4>ISOBlue Main Page</h4>
	<table style="width:100%">
		<tr>
		  <th>
			<h1>{name1}</h1>
			<div class="textview">
				<TextView address={selected} subject={obj1} />
				<div class = "cbo">
					<AutoComplete items="{ObjectListOne}" bind:selectedItem="{selectedOBJ1}" labelFieldName="name1" />
				</div>
			</div>
		  </th>
		  <th>
			<h1>{name2}</h1>
			<div class="textview">
				<TextView address={selected} subject="j1939.data.EngSpeed" />
				<div class = "cbo">
					<AutoComplete items="{ObjectListOne}" bind:selectedItem="{selectedOBJ2}" labelFieldName="name1" />
				</div>
			</div>
		  </th>
		  <th>
			<h1>{name3}</h1>
			<div class="textview">
				<TextView address={selected} subject="j1939.data.NavigationBasedVehicleSpeed" />
				<div class = "cbo">
					<AutoComplete items="{ObjectListOne}" bind:selectedItem="{selectedOBJ3}" labelFieldName="name1" />
				</div>
			</div>
		  </th>
		</tr>
		<tr>
		  <th>
			<h1>{name4}</h1>
			<div class="textview">
				<TextView address={selected} subject="j1939.data.Joystick2Button9PressedStatus" />
				<div class = "cbo">
					<AutoComplete items="{ObjectListOne}" bind:selectedItem="{selectedOBJ4}" labelFieldName="name1" />
				</div>
			</div>
		  </th>
		  <th>
			<h1>{name5}</h1>
			<div class="textview">
				<TextView address={selected} subject="j1939.data.EngSpeed" />
				<div class = "cbo">
					<AutoComplete items="{ObjectListOne}" bind:selectedItem="{selectedOBJ5}" labelFieldName="name1" />
				</div>
			</div>
		  </th>
		  <th>
			<h1>{name6}</h1>
			<div class="textview">
				<TextView address={selected} subject="j1939.data.WheelBasedVehicleSpeed" />
				<div class = "cbo">
					<AutoComplete items="{ObjectListOne}" bind:selectedItem="{selectedOBJ6}" labelFieldName="name1" />
				</div>
			</div>
		  </th>
		</tr>
		
	  </table>



</body>
<a href="/a/test">Go to debugger page</a>
<a href="/a/gps">Go to GPS Page</a>