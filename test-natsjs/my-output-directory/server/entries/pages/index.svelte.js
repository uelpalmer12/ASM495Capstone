import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index-f61de1dc.js";
import { connect, JSONCodec, Empty } from "nats.ws";
import { S as SimpleAutocomplete } from "../../chunks/SimpleAutocomplete-26851c59.js";
const TextView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { address = "" } = $$props;
  let { subject = "" } = $$props;
  let value;
  let units;
  let nc;
  async function doWork(address2, subject2) {
    if (!address2 || !subject2) {
      return;
    }
    if (nc) {
      nc.close();
    }
    nc = await connect({ servers: address2 });
    const jc = JSONCodec();
    const s = nc.subscribe(subject2);
    for await (const m of s) {
      let msg = jc.decode(m.data);
      value = (msg.sumVal / msg.number).toFixed(2);
      units = msg.units;
    }
  }
  if ($$props.address === void 0 && $$bindings.address && address !== void 0)
    $$bindings.address(address);
  if ($$props.subject === void 0 && $$bindings.subject && subject !== void 0)
    $$bindings.subject(subject);
  {
    doWork(address, subject);
  }
  return `${value ? `<p>${escape(value)} ${escape(units)}</p>` : `?`}`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-fkl0mc{font-size:150%}h4.svelte-fkl0mc{font-size:400%;text-align:center;padding-top:0%}th.svelte-fkl0mc{padding-bottom:5.5%;width:33.33%}a.svelte-fkl0mc{font-family:'Times New Roman', Times, serif;background-color:black;color:white;border-color:black;border-style:solid;border-width:.005%;font-size:100%}body.svelte-fkl0mc{border-style:solid;border-width:1%;background-color:aqua}.textview.svelte-fkl0mc{font-size:200%}.cbo.svelte-fkl0mc{width:105%;font-size:60%}.cbo2.svelte-fkl0mc{width:20%;font-size:150%;padding-left:2%;padding-top:2%;padding-bottom:0%}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nc;
  async function doWork(address) {
    if (!address) {
      return;
    }
    if (nc) {
      nc.close();
    }
    nc = await connect({ servers: address });
    const jc = JSONCodec();
    await nc.request("j1939.keys", Empty, { timeout: 1e3 }).then((m) => {
      let subjects = jc.decode(m.data);
      ObjectListOne = [];
      subjects.forEach((subject) => {
        console.log(subject);
        ObjectListOne.push({
          name1: translate[subject] || subject,
          obj1: subject
        });
      });
    }).catch((err) => {
      console.log(`problem with request: ${err.message}`);
    });
    await nc.close();
  }
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
  };
  const IPList = [
    {
      id: 1,
      name: "Skid Steer Local",
      ip: "ws://192.168.10.1:443"
    },
    {
      id: 2,
      name: "Skid Steer Remote",
      ip: "ws://172.16.1.12:443"
    },
    {
      id: 3,
      name: "Tractor one",
      ip: "ws://172.16.254.5:443"
    }
  ];
  let ObjectListOne = [
    {
      id: 1.1,
      name1: "Engine Fuel Rate",
      obj1: "j1939.filter.EngFuelRate"
    },
    {
      id: 2.1,
      name1: "Engine Speed",
      obj1: "j1939.filter.EngSpeed"
    },
    {
      id: 3.1,
      name1: "Throttle Position %",
      obj1: "j1939.filter.AccelPedalPos1"
    },
    {
      id: 3.1,
      name1: "Engine Total Fuel Used",
      obj1: "j1939.filter.EngTotalFuelUsed"
    },
    {
      id: 3.1,
      name1: "Engine Percent Load at Current Speed",
      obj1: "j1939.filter.EngPercentLoadAtCurrentSpeed"
    },
    {
      id: 3.1,
      name1: "Actual Engine Percent Torqued",
      obj1: "j1939.filter.ActualEngPercentTorque"
    }
  ];
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
  let name1;
  let name2;
  let name3;
  let name4;
  let name5;
  let name6;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        ip = selectedIP.ip;
        obj1 = selectedOBJ1.obj1;
        obj2 = selectedOBJ2.obj1;
        obj3 = selectedOBJ3.obj1;
        obj4 = selectedOBJ4.obj1;
        obj5 = selectedOBJ5.obj1;
        obj6 = selectedOBJ6.obj1;
        name1 = selectedOBJ1.name1;
        name2 = selectedOBJ2.name1;
        name3 = selectedOBJ3.name1;
        name4 = selectedOBJ4.name1;
        name5 = selectedOBJ5.name1;
        name6 = selectedOBJ6.name1;
      }
    }
    {
      doWork(ip);
    }
    $$rendered = `<title>ISOBlue Main Page</title>
<body class="${"svelte-fkl0mc"}"><div class="${"cbo2 svelte-fkl0mc"}">Select Machine:
		${validate_component(SimpleAutocomplete, "AutoComplete").$$render($$result, {
      items: IPList,
      labelFieldName: "name",
      selectedItem: selectedIP
    }, {
      selectedItem: ($$value) => {
        selectedIP = $$value;
        $$settled = false;
      }
    }, {})}</div>
	
	<h4 class="${"svelte-fkl0mc"}">ISOBlue Main Page</h4>
	<table style="${"width:100%"}"><tr><th class="${"svelte-fkl0mc"}"><h1 class="${"svelte-fkl0mc"}">${escape(name1)}</h1>
			<div class="${"textview svelte-fkl0mc"}">${validate_component(TextView, "TextView").$$render($$result, { address: ip, subject: obj1 }, {}, {})}
				<div class="${"cbo svelte-fkl0mc"}">${validate_component(SimpleAutocomplete, "AutoComplete").$$render($$result, {
      items: ObjectListOne,
      labelFieldName: "name1",
      selectedItem: selectedOBJ1
    }, {
      selectedItem: ($$value) => {
        selectedOBJ1 = $$value;
        $$settled = false;
      }
    }, {})}</div></div></th>
		  <th class="${"svelte-fkl0mc"}"><h1 class="${"svelte-fkl0mc"}">${escape(name2)}</h1>
			<div class="${"textview svelte-fkl0mc"}">${validate_component(TextView, "TextView").$$render($$result, { address: ip, subject: obj2 }, {}, {})}
				<div class="${"cbo svelte-fkl0mc"}">${validate_component(SimpleAutocomplete, "AutoComplete").$$render($$result, {
      items: ObjectListOne,
      labelFieldName: "name1",
      selectedItem: selectedOBJ2
    }, {
      selectedItem: ($$value) => {
        selectedOBJ2 = $$value;
        $$settled = false;
      }
    }, {})}</div></div></th>
		  <th class="${"svelte-fkl0mc"}"><h1 class="${"svelte-fkl0mc"}">${escape(name3)}</h1>
			<div class="${"textview svelte-fkl0mc"}">${validate_component(TextView, "TextView").$$render($$result, { address: ip, subject: obj3 }, {}, {})}
				<div class="${"cbo svelte-fkl0mc"}">${validate_component(SimpleAutocomplete, "AutoComplete").$$render($$result, {
      items: ObjectListOne,
      labelFieldName: "name1",
      selectedItem: selectedOBJ3
    }, {
      selectedItem: ($$value) => {
        selectedOBJ3 = $$value;
        $$settled = false;
      }
    }, {})}</div></div></th></tr>
		<tr><th class="${"svelte-fkl0mc"}"><h1 class="${"svelte-fkl0mc"}">${escape(name4)}</h1>
			<div class="${"textview svelte-fkl0mc"}">${validate_component(TextView, "TextView").$$render($$result, { address: ip, subject: obj4 }, {}, {})}
				<div class="${"cbo svelte-fkl0mc"}">${validate_component(SimpleAutocomplete, "AutoComplete").$$render($$result, {
      items: ObjectListOne,
      labelFieldName: "name1",
      selectedItem: selectedOBJ4
    }, {
      selectedItem: ($$value) => {
        selectedOBJ4 = $$value;
        $$settled = false;
      }
    }, {})}</div></div></th>
		  <th class="${"svelte-fkl0mc"}"><h1 class="${"svelte-fkl0mc"}">${escape(name5)}</h1>
			<div class="${"textview svelte-fkl0mc"}">${validate_component(TextView, "TextView").$$render($$result, { address: ip, subject: obj5 }, {}, {})}
				<div class="${"cbo svelte-fkl0mc"}">${validate_component(SimpleAutocomplete, "AutoComplete").$$render($$result, {
      items: ObjectListOne,
      labelFieldName: "name1",
      selectedItem: selectedOBJ5
    }, {
      selectedItem: ($$value) => {
        selectedOBJ5 = $$value;
        $$settled = false;
      }
    }, {})}</div></div></th>
		  <th class="${"svelte-fkl0mc"}"><h1 class="${"svelte-fkl0mc"}">${escape(name6)}</h1>
			<div class="${"textview svelte-fkl0mc"}">${validate_component(TextView, "TextView").$$render($$result, { address: ip, subject: obj6 }, {}, {})}
				<div class="${"cbo svelte-fkl0mc"}">${validate_component(SimpleAutocomplete, "AutoComplete").$$render($$result, {
      items: ObjectListOne,
      labelFieldName: "name1",
      selectedItem: selectedOBJ6
    }, {
      selectedItem: ($$value) => {
        selectedOBJ6 = $$value;
        $$settled = false;
      }
    }, {})}</div></div></th></tr></table></body>
<a href="${"/a/test"}" class="${"svelte-fkl0mc"}">Go to debugger page</a>
<a href="${"/a/gps"}" class="${"svelte-fkl0mc"}">Go to GPS Page</a>`;
  } while (!$$settled);
  return $$rendered;
});
export { Routes as default };
