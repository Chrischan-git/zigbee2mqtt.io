"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[21178],{840029:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-2ea77730","path":"/devices/AC0251100NJ_AC0251600NJ_AC0251700NJ.html","title":"OSRAM AC0251100NJ/AC0251600NJ/AC0251700NJ control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"OSRAM AC0251100NJ/AC0251600NJ/AC0251700NJ control via MQTT","description":"Integrate your OSRAM AC0251100NJ/AC0251600NJ/AC0251700NJ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-09-01T18:11:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Actions","slug":"actions","link":"#actions","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1716187247000},"filePathRelative":"devices/AC0251100NJ_AC0251600NJ_AC0251700NJ.md"}')},649887:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var o=i(166252);const a=(0,o._)("h1",{id:"osram-ac0251100nj-ac0251600nj-ac0251700nj",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#osram-ac0251100nj-ac0251600nj-ac0251700nj","aria-hidden":"true"},"#"),(0,o.Uk)(" OSRAM AC0251100NJ/AC0251600NJ/AC0251700NJ")],-1),n=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"AC0251100NJ/AC0251600NJ/AC0251700NJ")],-1),s=(0,o._)("td",null,"Vendor",-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Smart+ switch mini")],-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"battery, action, linkquality")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/AC0251100NJ-AC0251600NJ-AC0251700NJ.png",alt:"OSRAM AC0251100NJ/AC0251600NJ/AC0251700NJ"})])],-1),u=(0,o.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>For the OSRAM Smart+ Switch Mini (AC0251100NJ/AC0251600NJ/AC0251700NJ) hold the Middle and Arrow Down Buttons for 10 Seconds to Reset the Device. Hold the Middle and Arrow Up Buttons for 3 Seconds to connect. If the Switch is connected hold Middle and Arrow Up Buttons for 3 Seconds to disconnect.</p><h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> Actions</h3><h4 id="arrow-up" tabindex="-1"><a class="header-anchor" href="#arrow-up" aria-hidden="true">#</a> Arrow up</h4><p>causes &#39;on&#39; at short pressure; &#39;brightness_move_up&#39; at long pressure (&gt;1 sec); &#39;brightness_stop&#39; at long pressure release</p><h4 id="circle" tabindex="-1"><a class="header-anchor" href="#circle" aria-hidden="true">#</a> Circle</h4><p>causes &#39;brightness_move_to_level&#39; at short pressure; &#39;move_to_saturation&#39; at long pressure (&gt;1 sec); &#39;hue_stop&#39; at long pressure release</p><h4 id="arrow-down" tabindex="-1"><a class="header-anchor" href="#arrow-down" aria-hidden="true">#</a> Arrow down</h4><p>causes &#39;off&#39; at short pressure; &#39;brightness_move_down&#39; at long pressure (&gt;1 sec); &#39;brightness_stop&#39; at long pressure release</p>',10),h=(0,o._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,o.Uk)(" OTA updates")],-1),p=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),g=(0,o.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>color_temperature_move</code>, <code>hue_move</code>, <code>hue_stop</code>, <code>move_to_saturation</code>, <code>off</code>, <code>brightness_move_to_level</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),m={},_=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[n,(0,o._)("tbody",null,[r,(0,o._)("tr",null,[s,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=OSRAM"},{default:(0,o.w5)((()=>[(0,o.Uk)("OSRAM")])),_:1})])]),d,l,c])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,o.kq)(" Notes END: Do not edit below this line "),h,(0,o._)("p",null,[(0,o.Uk)("This device supports OTA updates, for more information see "),(0,o.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("OTA updates")])),_:1}),(0,o.Uk)(".")]),p,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),g])}]])}}]);