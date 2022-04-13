<script type="javascript">

	import TextView from '../compoents/TextView.svelte';

  	import AutoComplete from "simple-svelte-autocomplete"

	import { connect, Empty, JSONCodec } from 'nats.ws';

	let nc;
	  async function doWork(address) {
		if(!address) {
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
		
		await nc.request("j1939.keys", Empty, { timeout: 1000 })
		.then((m) => {
			let subjects = jc.decode(m.data);

			ObjectListOne = [];
			subjects.forEach(subject => {
				console.log(subject)
				ObjectListOne.push({
					name1: translate[subject] || subject,
					obj1:  subject
				})
			});
		// 	console.log(`got response: ${subjects}`);
		 })  
		.catch((err) => {
			console.log(`problem with request: ${err.message}`);
		});

		await nc.close();
	}

	$: doWork(ip);

	const translate = {
		"j1939.filter.EngFuelRate": "Engine Fuel Rate",
		"j1939.filter.EngSpeed": "Engine Speed",
		"j1939.filter.EngPercentLoadAtCurrentSpeed": "Engine Percent Load at Current Speed",
		"j1939.filter.ActualEngPercentTorque": "Actual Engine Percent Torque",
		"j1939.filter.EngTorqueMode": "Engine Torque Mode",
		"j1939.filter.MalfunctionIndicatorLampStatus": "Malfuction Indicator Lamp Status",
		"j1939.filter.AmberWarningLampStatus": "Amber Warning Lamp Status",
		"j1939.filter.ProtectLampStatus": "Protect Lamp Status",
		"j1939.filter.RedStopLampState": "Red Stop Lamp Status",
		"j1939.filter.EnginesDesiredOperatingSpeed": "Engines Desired Operating Speed",
		"j1939.filter.WheelBasedVehicleSpeed": "Wheel Based Vehicle Speed",
		"j1939.filter.Latitude": "Latitued",
		"j1939.filter.Longitude": "Longitude",
		"j1939.filter.EngIntakeManifold1Press": "Engine Intake Manifold 1 Press",
		"j1939.filter.EngIntakeManifold1Temp": "Engine Intake Manifold 1 Temp",
		"j1939.filter.TransCurrentGear": "Transmission Current Gear",
		"j1939.filter.NavigationBasedVehicleSpeed": "Navigation Based Vehicle Speed",
		"j1939.filter.FuelLevel1": "Fuel Level 1",
		"j1939.filter.EngFuelTemp1": "Engine Fuel Temperature",
		"j1939.filter.EngCoolantTemp": "Engine Coolant Temperature",
		"j1939.filter.KeyswitchBatteryPotential": "Key Switch Batter Potential",
		"j1939.filter.TotalPowerTakeoffHours": "Total Power Take Off Hours",
		"j1939.filter.BatteryPotential_PowerInput1": "Battery Potential Power Input 1",
		"j1939.filter.EngTotalFuelUsed": "Engine Total Fuel Used"
	}

  	const IPList = [
  	{ id: 1, name: "Combine", ip: '123.24.24.23' },
  	{ id: 2, name: "Tractor one", ip: 'ws://172.16.254.5:443' },
  	]
	let ObjectListOne = [
  	{ id: 1.1, name1: "Engine Fuel Rate", obj1: 'j1939.filter.EngFuelRate' },
	{ id: 2.1, name1: "Engine Speed", obj1: 'j1939.filter.EngSpeed' },
	{ id: 3.1, name1: "Nav Based Vehicle Speed", obj1: 'j1939.filter.NavigationBasedVehicleSpeed' },
	{ id: 3.1, name1: "Engine Total Fuel Used", obj1: 'j1939.filter.EngTotalFuelUsed' },
	{ id: 3.1, name1: "Engine Percent Load at Current Speed", obj1: 'j1939.filter.EngPercentLoadAtCurrentSpeed' },
	{ id: 3.1, name1: "Actual Engine Percent Torqued", obj1: 'j1939.filter.ActualEngPercentTorque' }

	]
 
  	let selectedIP = IPList[1];
	let selectedOBJ1 = ObjectListOne[0];
	let selectedOBJ2 = ObjectListOne[1];
	let selectedOBJ3 = ObjectListOne[2];
	let selectedOBJ4 = ObjectListOne[3];
	let selectedOBJ5 = ObjectListOne[4];
	let selectedOBJ6 = ObjectListOne[5];

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
				<TextView address={ip} subject={obj1} />
				<div class = "cbo">
					<AutoComplete items="{ObjectListOne}" bind:selectedItem="{selectedOBJ1}" labelFieldName="name1" />
				</div>
			</div>
		  </th>
		  <th>
			<h1>{name2}</h1>
			<div class="textview">
				<TextView address={ip} subject={obj2} />
				<div class = "cbo">
					<AutoComplete items="{ObjectListOne}" bind:selectedItem="{selectedOBJ2}" labelFieldName="name1" />
				</div>
			</div>
		  </th>
		  <th>
			<h1>{name3}</h1>
			<div class="textview">
				<TextView address={ip} subject={obj3} />
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
				<TextView address={ip} subject={obj4} />
				<div class = "cbo">
					<AutoComplete items="{ObjectListOne}" bind:selectedItem="{selectedOBJ4}" labelFieldName="name1" />
				</div>
			</div>
		  </th>
		  <th>
			<h1>{name5}</h1>
			<div class="textview">
				<TextView address={ip} subject={obj5} />
				<div class = "cbo">
					<AutoComplete items="{ObjectListOne}" bind:selectedItem="{selectedOBJ5}" labelFieldName="name1" />
				</div>
			</div>
		  </th>
		  <th>
			<h1>{name6}</h1>
			<div class="textview">
				<TextView address={ip} subject={obj6} />
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