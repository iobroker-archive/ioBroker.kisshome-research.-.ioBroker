"use strict";(self.webpackChunkiobroker_admin_component_telegram=self.webpackChunkiobroker_admin_component_telegram||[]).push([["src_ConfigCustomInstancesSelector_jsx"],{57460:(J,M,_)=>{_.d(M,{A:()=>H});var k=_(28437),n=_.n(k),$=_(95973),E=_.n($),d=_(67085),Q=_.n(d),A=_(21839),Y=_.n(A),f=_(60556),Z=_.n(f),b=_(37449),w=_.n(b),W=Object.defineProperty,U=Object.defineProperties,j=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,x=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,G=Reflect.get,P=(i,t,r)=>t in i?W(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r,L=(i,t)=>{for(var r in t||(t={}))B.call(t,r)&&P(i,r,t[r]);if(O)for(var r of O(t))V.call(t,r)&&P(i,r,t[r]);return i},K=(i,t)=>U(i,j(t)),F=(i,t,r)=>G(x(i),r,t),T=(i,t,r)=>new Promise((p,m)=>{var s=e=>{try{o(r.next(e))}catch(a){m(a)}},l=e=>{try{o(r.throw(e))}catch(a){m(a)}},o=e=>e.done?p(e.value):Promise.resolve(e.value).then(s,l);o((r=r.apply(i,t)).next())});const v={table:{minWidth:400},header:{fontSize:16,fontWeight:"bold"},td:{padding:"2px 16px"}};function S(i,t){return T(this,null,function*(){const r=yield i.getObjectViewSystem("state",`${t}.`,`${t}.\u9999`),p=[],m=Object.keys(r).filter(s=>s.endsWith(".hostname"));for(let s=0;s<m.length;s++){const l=m[s],o=yield i.getState(l);o!=null&&o.val&&p.push({ip:o.val,name:"shelly"})}return p})}function z(i,t){return T(this,null,function*(){var r,p;const m=yield i.getObjectViewSystem("state",`${t}.info.clients.`,`${t}.info.clients.\u9999`),s=[],l=Object.values(m);for(let o=0;o<l.length;o++)(p=(r=l[o])==null?void 0:r.native)!=null&&p.ip&&s.push({ip:l[o].native.ip,name:t.split(".")[0]});return s})}const q=[{adapter:"broadlink2",attr:"additional"},{adapter:"harmony",attr:"devices",arrayAttr:"ip"},{adapter:"hm-rpc",attr:"homematicAddress"},{adapter:"homeconnect"},{adapter:"homekit-controller",attr:"discoverIp"},{adapter:"hue",attr:"bridge"},{adapter:"knx",attr:"bind"},{adapter:"lgtv",attr:"ip"},{adapter:"loxone",attr:"host"},{adapter:"mihome-vacuum",attr:"ip"},{adapter:"modbus",attr:"params.bind",clients:!0},{adapter:"mqtt",attr:"url",clients:!0},{adapter:"mqtt-client",attr:"host"},{adapter:"onvif"},{adapter:"openknx",attr:"gwip"},{adapter:"proxmox",attr:"ip"},{adapter:"samsung",attr:"ip"},{adapter:"shelly",browse:S},{adapter:"sonoff",clients:!0},{adapter:"sonos",attr:"devices",arrayAttr:"ip"},{adapter:"tr-064",attr:"iporhost"},{adapter:"unify",attr:"controllerIp"},{adapter:"upnp"},{adapter:"wled",attr:"devices",arrayAttr:"ip"}];function R(i){return typeof i!="string"?!1:(i=i.trim().toUpperCase().replace(/\s/g,""),!i||i.match(/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/)?!0:!!i.match(/^([0-9A-F]{12})$/))}function D(i){return R(i)?(i=i.toUpperCase().trim().replace(/[\s:-]/g,""),i.replace(/(..)(..)(..)(..)(..)(..)/,"$1:$2:$3:$4:$5:$6")):i}function I(i){return typeof i!="string"?!1:(i=i.trim(),i?i.match(/^\d+\.\d+\.\d+\.\d+$/)?!i.trim().split(".").map(r=>parseInt(r,10)).find(r=>r<0||r>255):!1:!0)}function N(i){return I(i)?i.trim().split(".").map(r=>parseInt(r,10)).join("."):i}class g extends f.ConfigGeneric{componentDidMount(){return T(this,null,function*(){F(g.prototype,this,"componentDidMount").call(this);let t=[];const r=yield this.props.socket.getObject(`system.adapter.kisshome-research.${this.props.instance}`);r!=null&&r.common.host&&(t=(yield this.props.socket.getObject(`system.host.${r.common.host}`)).common.address);let p=yield this.props.socket.getAdapterInstances();p=p.filter(l=>{var o;return((o=l==null?void 0:l.common)==null?void 0:o.adminUI)&&(l.common.adminUI.config!=="none"||l.common.adminUI.tab)}).map(l=>({id:l._id.replace(/^system\.adapter\./,""),name:l.common.name,native:l.native})).sort((l,o)=>l.id>o.id?1:l.id<o.id?-1:0);const m=yield this.collectIpAddresses(p,t),s={instances:p,ips:m};if(this.props.alive){const l=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];s.runningRequest=!0,this.props.socket.sendTo(`kisshome-research.${this.props.instance}`,"getMacForIps",l).then(o=>{var e;let a=!1;const h={};(e=o==null?void 0:o.result)==null||e.forEach(c=>{const y=c.ip,C=m.findIndex(X=>X.ip===y);C!==-1&&(a=!0,m[C].mac=c.mac,h[c.mac]=c.vendor)});let u=!1;l.forEach(c=>{const y=m.findIndex(C=>C.ip===c.ip);y!==-1&&(c.mac!==m[y].mac&&(u=!0),h[c.mac]||(h[c.mac]=m[y].vendor,a=!0))}),a?this.setState({ips:m,vendors:h,runningRequest:!1}):this.setState({runningRequest:!1}),u&&this.onChange("devices",l)}).catch(o=>{o.toString()!=="no results"&&window.alert(`Cannot get MAC addresses: ${o}`),this.setState({runningRequest:!1})})}this.setState(s)})}static getAttr(t,r){if(Array.isArray(r)){const p=r.shift();return typeof t[p]=="object"?g.getAttr(t[p],r):r.length?null:t[p]}return g.getAttr(t,r.split("."))}static isIp(t){if(typeof t=="string"){if(t.match(/^\d+\.\d+\.\d+\.\d+$/))return"ipv4";if(t.match(/^[\da-fA-F:]+$/))return"ipv6"}return null}componentWillUnmount(){super.componentWillUnmount(),this.validateTimeout&&clearTimeout(this.validateTimeout),this.validateTimeout=null}validateAddresses(){this.validateTimeout&&clearTimeout(this.validateTimeout),this.validateTimeout=setTimeout(()=>{this.validateTimeout=null},1e3)}collectIpAddresses(t,r){return T(this,null,function*(){let p=[];t=t||this.state.instances;for(let s=0;s<t.length;s++){const l=q.find(o=>o.adapter===t[s].name);if(l&&t[s].native){const o=l.attr;if(l.attr&&t[s].native[o])if(l.arrayAttr){if(Array.isArray(t[s].native[o]))for(let e=0;e<t[s].native[o].length;e++){const a=t[s].native[o][e],h=g.getAttr(a,l.arrayAttr),u=g.isIp(h);u&&p.push({ip:h,type:u,desc:t[s].name})}}else{const e=g.getAttr(t[s].native,o),a=g.isIp(e);a&&p.push({ip:e,type:a,desc:t[s].name})}if(l.browse)try{(yield l.browse(this.props.socket,t[s]._id.replace("system.adapter.",""))).forEach(a=>{const h=g.isIp(a.ip);h&&p.push({ip:a.ip,type:h,desc:a.name||t[s].name})})}catch(e){console.error(`Cannot collect "${t[s]}": ${e}`)}if(l.clients)try{(yield z(this.props.socket,t[s]._id.replace("system.adapter.",""))).forEach(a=>{const h=g.isIp(a.ip);h&&p.push({ip:a.ip,type:h,desc:a.name||t[s].name})})}catch(e){console.error(`Cannot collect "${t[s]}": ${e}`)}}}p=p.filter(s=>!r.includes(s.ip)&&s.ip!=="0.0.0.0"&&s.ip!=="localhost"&&s.ip!=="127.0.0.1"&&s.ip!=="::1"&&s.type==="ipv4");const m=[];for(let s=0;s<p.length;s++)m.find(l=>l.ip===p[s].ip)||m.push(p[s]);return m})}renderItem(t,r,p){var m;const s=f.ConfigGeneric.getValue(this.props.data,"devices")||[],l=this.state.ips?s.filter(e=>!this.state.ips.find(a=>a.ip===e.ip)):s,o=s.every(e=>e.enabled)&&(this.state.ips?this.state.ips.every(e=>s.find(a=>a.ip===e.ip)):!0);return n().createElement(d.TableContainer,null,this.state.runningRequest?n().createElement(d.LinearProgress,null):n().createElement("div",{style:{height:2,width:"100%"}}),n().createElement(d.Table,{style:v.table,size:"small"},n().createElement(d.TableHead,null,n().createElement(d.TableRow,null,n().createElement(d.TableCell,{style:K(L({},v.header),{width:120})},n().createElement(d.Checkbox,{title:o?b.i18n.t("custom_kisshome_unselect_all"):b.i18n.t("custom_kisshome_select_all"),checked:o,indeterminate:!o&&s.length>0,disabled:this.state.runningRequest,onClick:()=>{const e=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];if(o){e.forEach(a=>a.enabled=!1);for(let a=e.length-1;a>=0;a--)this.state.ips.find(h=>h.ip===e[a].ip)&&e.splice(a,1)}else e.forEach(a=>a.enabled=!0),this.state.ips.forEach(a=>{e.find(h=>a.ip===h.ip)||e.push({ip:a.ip,mac:a.mac,desc:a.desc,enabled:!0})}),e.forEach(a=>a.enabled=!0);this.onChange("devices",e)}}),n().createElement(d.Fab,{onClick:()=>{const e=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];e.push({ip:"0.0.0.0",mac:"",desc:"",enabled:!0}),this.onChange("devices",e)},size:"small",disabled:this.state.runningRequest},n().createElement(A.Add,null))),n().createElement(d.TableCell,{style:v.header},b.i18n.t("custom_kisshome_ip")),n().createElement(d.TableCell,{style:v.header},b.i18n.t("custom_kisshome_mac")),n().createElement(d.TableCell,{style:v.header},b.i18n.t("custom_kisshome_vendor")),n().createElement(d.TableCell,{style:v.header},b.i18n.t("custom_kisshome_name")),n().createElement(d.TableCell,{style:v.header}))),n().createElement(d.TableBody,null,(m=this.state.ips)==null?void 0:m.map((e,a)=>{var h,u;return n().createElement(d.TableRow,{key:a},n().createElement(d.TableCell,{scope:"row",style:v.td},n().createElement(d.Checkbox,{checked:!!((h=s.find(c=>c.ip===e.ip))!=null&&h.enabled),disabled:this.state.runningRequest,onClick:()=>{const c=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]],y=c.findIndex(C=>C.ip===e.ip);y===-1?c.push({ip:e.ip,mac:e.mac,desc:e.desc,enabled:!0}):c.splice(y,1),this.onChange("devices",c)}})),n().createElement(d.TableCell,{style:v.td},e.ip),n().createElement(d.TableCell,{style:v.td},e.mac||""),n().createElement(d.TableCell,{style:v.td},((u=this.state.vendors)==null?void 0:u[e.mac])||""),n().createElement(d.TableCell,{style:v.td},e.desc),n().createElement(d.TableCell,{style:v.td}))}),l.map((e,a)=>{var h;return n().createElement(d.TableRow,{key:a},n().createElement(d.TableCell,{scope:"row",style:v.td},n().createElement(d.Checkbox,{checked:s.includes(e.ip),disabled:this.state.runningRequest,onClick:()=>{const u=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];u[a].enabled=!u[a].enabled,this.onChange("devices",u)}})),n().createElement(d.TableCell,{style:v.td},n().createElement(d.TextField,{fullWidth:!0,error:!I(e.ip),value:e.ip,disabled:this.state.runningRequest,onChange:u=>{const c=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];c[a].ip=u.target.value,this.onChange("devices",c),this.validateAddresses()},onBlur:()=>{if(e.ip.trim()){const u=N(e.ip);if(u!==e.ip){const c=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];c[a].ip=u,this.onChange("devices",c)}}},variant:"standard"})),n().createElement(d.TableCell,{style:v.td},n().createElement(d.TextField,{fullWidth:!0,value:e.mac,disabled:this.state.runningRequest,error:!R(e.mac),onChange:u=>{const c=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];c[a].mac=u.target.value,this.onChange("devices",c),this.validateAddresses()},onBlur:()=>{if(e.mac.trim()){const u=D(e.mac);if(u!==e.mac){const c=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];c[a].mac=u,this.onChange("devices",c)}}},variant:"standard"})),n().createElement(d.TableCell,{style:v.td},((h=this.state.vendors)==null?void 0:h[D(e.mac)])||""),n().createElement(d.TableCell,{style:v.td},n().createElement(d.TextField,{fullWidth:!0,value:e.desc,disabled:this.state.runningRequest,onChange:u=>{const c=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];c[a].desc=u.target.value,this.onChange("devices",c)},variant:"standard"})),n().createElement(d.TableCell,{style:v.td},n().createElement(d.IconButton,{disabled:this.state.runningRequest,onClick:()=>{const u=[...f.ConfigGeneric.getValue(this.props.data,"devices")||[]];u.splice(a,1),this.onChange("devices",u)}},n().createElement(A.Delete,null))))}))))}}g.propTypes={socket:E().object.isRequired,themeType:E().string,themeName:E().string,style:E().object,data:E().object.isRequired,schema:E().object,onError:E().func,onChange:E().func};const H=g}}]);

//# sourceMappingURL=src_ConfigCustomInstancesSelector_jsx.85d5516e.chunk.js.map