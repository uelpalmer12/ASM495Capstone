import { c as create_ssr_component, d as each, e as escape, f as compute_rest_props, a as createEventDispatcher, v as validate_component, h as spread, i as escape_object, b as add_attribute } from "../../../chunks/index-f61de1dc.js";
import { S as SimpleAutocomplete } from "../../../chunks/SimpleAutocomplete-26851c59.js";
import { connect, JSONCodec } from "nats.ws";
const ListView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { address = "" } = $$props;
  let { subject = "" } = $$props;
  let { paused = false } = $$props;
  let messages = [];
  let nc;
  async function connect2(address2) {
    if (nc) {
      nc.close();
    }
    nc = await connect({ servers: address2 });
    return nc;
  }
  async function subscribe(nc2, subject2) {
    const jc = JSONCodec();
    const s = nc2.subscribe(subject2);
    for await (const m of s) {
      if (!paused) {
        let msg = jc.decode(m.data);
        if (messages.length > 100) {
          messages.pop();
        }
        messages = [...messages, msg];
      }
    }
  }
  if ($$props.address === void 0 && $$bindings.address && address !== void 0)
    $$bindings.address(address);
  if ($$props.subject === void 0 && $$bindings.subject && subject !== void 0)
    $$bindings.subject(subject);
  if ($$props.paused === void 0 && $$bindings.paused && paused !== void 0)
    $$bindings.paused(paused);
  {
    connect2(address).then((nc2) => subscribe(nc2, subject));
  }
  return `${each(messages.reverse(), (msg) => {
    return `<p>${escape(msg.timestamp)} ${escape(msg.pgn)} ${escape(msg.data)} ${escape(JSON.stringify(msg))} </p>`;
  })}`;
});
const ToggleCore = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let label;
  let button;
  let $$restProps = compute_rest_props($$props, ["id", "toggled", "disabled"]);
  let { id = "toggle" + Math.random().toString(36) } = $$props;
  let { toggled = true } = $$props;
  let { disabled = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.toggled === void 0 && $$bindings.toggled && toggled !== void 0)
    $$bindings.toggled(toggled);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  label = { for: id };
  button = {
    ...$$restProps,
    id,
    disabled,
    "aria-checked": toggled,
    type: "button",
    role: "switch"
  };
  return `${slots.default ? slots.default({ label, button }) : ``}`;
});
var Toggle_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'label.svelte-1y1be9d{display:block;margin-bottom:0.25rem;font-size:0.75rem}.hideLabel.svelte-1y1be9d{position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);white-space:nowrap}button.svelte-1y1be9d{position:relative;padding:0 0.25rem;border:0;border-radius:1rem;height:1.25rem;width:2.5rem;font:inherit;color:inherit;line-height:inherit}button.svelte-1y1be9d:not([disabled]){cursor:pointer}button[disabled].svelte-1y1be9d{cursor:not-allowed;opacity:0.6}button.svelte-1y1be9d:before{position:absolute;content:"";top:0;bottom:0;left:0.125rem;margin:auto;height:1rem;width:1rem;text-align:center;border-radius:50%;background-color:currentColor;transition:transform 150ms ease-out}button[aria-checked="true"].svelte-1y1be9d:before{transform:translateX(1.25rem)}button.small.svelte-1y1be9d{height:1rem;width:1.75rem}button.small.svelte-1y1be9d:before{height:0.75rem;width:0.75rem}button.small[aria-checked="true"].svelte-1y1be9d:before{transform:translateX(0.75rem)}div.svelte-1y1be9d{display:flex;align-items:center}span.svelte-1y1be9d{margin-left:0.5rem}',
  map: null
};
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "toggled",
    "label",
    "hideLabel",
    "small",
    "disabled",
    "on",
    "off",
    "switchColor",
    "toggledColor",
    "untoggledColor"
  ]);
  let { toggled = true } = $$props;
  let { label = "Label" } = $$props;
  let { hideLabel = false } = $$props;
  let { small = false } = $$props;
  let { disabled = false } = $$props;
  let { on = void 0 } = $$props;
  let { off = void 0 } = $$props;
  let { switchColor = "#fff" } = $$props;
  let { toggledColor = "#0f62fe" } = $$props;
  let { untoggledColor = "#8d8d8d" } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.toggled === void 0 && $$bindings.toggled && toggled !== void 0)
    $$bindings.toggled(toggled);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.on === void 0 && $$bindings.on && on !== void 0)
    $$bindings.on(on);
  if ($$props.off === void 0 && $$bindings.off && off !== void 0)
    $$bindings.off(off);
  if ($$props.switchColor === void 0 && $$bindings.switchColor && switchColor !== void 0)
    $$bindings.switchColor(switchColor);
  if ($$props.toggledColor === void 0 && $$bindings.toggledColor && toggledColor !== void 0)
    $$bindings.toggledColor(toggledColor);
  if ($$props.untoggledColor === void 0 && $$bindings.untoggledColor && untoggledColor !== void 0)
    $$bindings.untoggledColor(untoggledColor);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      dispatch("toggle", toggled);
    }
    $$rendered = `${validate_component(ToggleCore, "ToggleCore").$$render($$result, { toggled }, {
      toggled: ($$value) => {
        toggled = $$value;
        $$settled = false;
      }
    }, {
      default: ({ label: labelProps, button }) => {
        return `
  <label${spread([escape_object(labelProps)], {
          classes: (hideLabel ? "hideLabel" : "") + " svelte-1y1be9d"
        })}>${escape(label)}</label>
  <div class="${"svelte-1y1be9d"}"><button${spread([
          escape_object($$restProps),
          escape_object(button),
          {
            style: "color: " + escape(switchColor) + "; background-color: " + escape(toggled ? toggledColor : untoggledColor) + "; " + escape($$restProps.style)
          },
          { disabled: disabled || null }
        ], {
          classes: (small ? "small" : "") + " svelte-1y1be9d"
        })}></button>
    ${slots.default ? slots.default({ toggled }) : `
      ${on && off ? `<span class="${"svelte-1y1be9d"}">${escape(toggled ? on : off)}</span>` : ``}
    `}</div>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
var test_svelte_svelte_type_style_lang = "";
const css = {
  code: ".box.svelte-17crgcv{width:95%;border:1px solid #aaa;border-radius:2px;box-shadow:2px 2px 8px rgba(0,0,0,0.1);text-align:left;padding-bottom:30%;background-color:white;font-size:100%}h1.svelte-17crgcv{font-size:150%}h4.svelte-17crgcv{font-size:400%;text-align:center}body.svelte-17crgcv{border-style:solid;border-width:1%;background-color:aqua}.search.svelte-17crgcv{font-size:50%;padding-left:5%;font-size:100%}a.svelte-17crgcv{font-family:'Times New Roman', Times, serif;background-color:black;color:white;border-color:black;border-style:solid;border-width:.005%;font-size:150%}.cbo2.svelte-17crgcv{width:20%;font-size:150%;padding-left:2%;padding-top:2%;padding-bottom:0%}th.svelte-17crgcv{width:33.33%}",
  map: null
};
const Test = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let toggled;
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
  const PGNList = [
    {
      id: 1.1,
      name1: "j1939",
      pgn1: "j1939.raw."
    },
    { id: 2.1, name1: "j1939a", pgn1: "j1939" }
  ];
  const MSGList = [
    { id: 1.2, name2: "61444", msg1: "61444" },
    {
      id: 2.2,
      name2: "7382828",
      msg1: "7382828"
    }
  ];
  let selectedIP = IPList[0];
  let selectedPGN = PGNList[0];
  let selectedMSG = MSGList[0];
  let ip;
  let pgn1;
  let msg1;
  let message_option;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        {
          message_option = pgn1 + msg1;
        }
        ip = selectedIP.ip;
        pgn1 = selectedPGN.pgn1;
        msg1 = selectedMSG.msg1;
      }
    }
    $$rendered = `<title>Debugger</title>
<a href="${"/"}" class="${"svelte-17crgcv"}">Go to Main Page</a>

<body class="${"svelte-17crgcv"}"><div class="${"search svelte-17crgcv"}"><div class="${"cbo2 svelte-17crgcv"}">Select Machine:
            ${validate_component(SimpleAutocomplete, "AutoComplete").$$render($$result, {
      items: IPList,
      labelFieldName: "name",
      selectedItem: selectedIP
    }, {
      selectedItem: ($$value) => {
        selectedIP = $$value;
        $$settled = false;
      }
    }, {})} 
            ${validate_component(Toggle, "Toggle").$$render($$result, { label: "Start/ Stop Data Flow", toggled }, {
      toggled: ($$value) => {
        toggled = $$value;
        $$settled = false;
      }
    }, {})}</div></div>
        
    <h4 class="${"svelte-17crgcv"}">Advanced Debugging Page</h4>

        <div><table style="${"width:100%"}"><tr><th class="${"svelte-17crgcv"}"><h1 class="${"svelte-17crgcv"}">Select PGN</h1>
                        ${validate_component(SimpleAutocomplete, "AutoComplete").$$render($$result, {
      items: PGNList,
      labelFieldName: "name1",
      selectedItem: selectedPGN
    }, {
      selectedItem: ($$value) => {
        selectedPGN = $$value;
        $$settled = false;
      }
    }, {})}</th>
                    <th class="${"svelte-17crgcv"}"><h1 class="${"svelte-17crgcv"}">Select Message</h1>
                        ${validate_component(SimpleAutocomplete, "AutoComplete").$$render($$result, {
      items: MSGList,
      labelFieldName: "name2",
      selectedItem: selectedMSG
    }, {
      selectedItem: ($$value) => {
        selectedMSG = $$value;
        $$settled = false;
      }
    }, {})}</th>
                    <th class="${"svelte-17crgcv"}"><h1 class="${"svelte-17crgcv"}">Search PGN Here</h1>
                        <input placeholder="${"enter png here"}"${add_attribute("value", name, 0)}></th></tr></table>
        <div class="${"search svelte-17crgcv"}"><h1 class="${"svelte-17crgcv"}">Output: </h1>
            <div class="${"box svelte-17crgcv"}"><div>${validate_component(ListView, "ListView").$$render($$result, {
      address: ip,
      subject: message_option,
      paused: toggled
    }, {}, {})}</div></div></div></div></body>
<a href="${"/a/gps"}" class="${"svelte-17crgcv"}">Go to GPS Page</a>`;
  } while (!$$settled);
  return $$rendered;
});
export { Test as default };
