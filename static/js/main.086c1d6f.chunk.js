(this["webpackJsonpflight-speed-calc"]=this["webpackJsonpflight-speed-calc"]||[]).push([[0],{207:function(e,t,c){},284:function(e,t){},380:function(e,t,c){"use strict";c.r(t);var n=c(4),a=c.n(n),s=c(62),i=c.n(s),r=(c(207),c(28)),j=(c(208),c(385)),l=c(388),b=c(78),o=c(77),d=c(15);function O(e){var t=e.isShow,c=e.confirm,n=function(){window.close()};return Object(d.jsx)("div",{className:"",children:Object(d.jsxs)(l.a,{dialogClassName:"relative top-40",backdrop:"static",show:t,size:"sm",children:[Object(d.jsx)(l.a.Header,{closeButton:!1,onHide:n,children:Object(d.jsxs)(l.a.Title,{children:[Object(d.jsx)(b.a,{icon:"remind",style:{color:"#ffb300",fontSize:24}})," ","\u60a8\u9700\u8981\u5173\u6ce8\u7684\uff01"]})}),Object(d.jsx)(l.a.Body,{children:"\u60a8\u6b63\u5728\u5b66\u4e60\u98de\u884c? \u8fd9\u4e2a\u5de5\u5177\u4ec5\u53ef\u7528\u4e8e\u5b66\u4e60\u822a\u7a7a\u77e5\u8bc6\u6216\u6a21\u62df\u98de\u884c\uff0c\u4e0d\u80fd\u5728\u771f\u5b9e\u98de\u884c\u4e2d\u4f7f\u7528\uff0c\u5176\u8ba1\u7b97\u7ed3\u679c\u6709\u6709\u4e00\u5b9a\u8bef\u5dee\uff0c\u8bf7\u5207\u8bb0\uff01 \u5982\u60a8\u4f7f\u7528\u672c\u7f51\u7ad9\u63d0\u4f9b\u7684\u6570\u636e\u7528\u4e8e\u4e0d\u5408\u6cd5\u7684\u884c\u4e3a\u6216\u9519\u8bef\u4f7f\u7528\uff08\u4f8b\u5982\u5728\u5b9e\u9645\u98de\u884c\u4e2d\u4f7f\u7528\uff09\uff0c\u5176\u9020\u6210\u7684\u4e00\u5207\u540e\u679c\u5c06\u7531\u60a8\u672c\u4eba\u627f\u62c5."}),Object(d.jsxs)(l.a.Footer,{children:[Object(d.jsx)(o.a,{appearance:"primary",onClick:c,children:"\u597d\uff0c\u6211\u5df2\u77e5\u6653\u5e76\u540c\u610f"}),Object(d.jsx)(o.a,{appearance:"subtle",onClick:n,children:"\u4e0d\uff0c\u6211\u4e0d\u60f3\u4f7f\u7528\u4e86"})]})]})})}var u=c(387),x=c(2),f=function(e,t){return Object(x.Yb)(e,0)?0:Object(u.a)("60 / ".concat(e," * ").concat(t))},h=function(e,t,c){return Object(x.Yb)(e,0)?0:Object(u.a)("".concat(f(e,t)," * sin(").concat(c," deg)"))},v=function(e,t,c){return Object(u.a)("".concat(e," + ").concat(t," * sin(90 deg - ").concat(c," deg)"))},p=f,m=function(e,t){for(var c=Object(u.a)("".concat(e," - ").concat(t));Object(x.Sc)(c,180)||Object(x.Le)(c,-180);)Object(x.Sc)(c,180)?c=Object(u.a)("".concat(c," - 360")):Object(x.Le)(c,-180)&&(c=Object(u.a)("".concat(c," + 360")));return c};function y(e){var t=e.res;return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"rounded-lg max-w-full\t",style:{backgroundColor:"#6D7456"},children:t.map((function(e){return Object(d.jsxs)("div",{className:"truncate font-semibold text-xl text-gray-900 flex-col justify-between items-baseline px-5 py-2",children:[Object(d.jsx)("div",{children:e.label}),Object(d.jsx)("div",{className:"text-2xl tracking-widest",style:{fontFamily:"Open-24-Display-ST-LED"},children:Object(x.lc)(e.val,4)})]})}))})})}var g=c(393),S=c(382),w=c(390),k=c(389),A=c(384),N=c(394),C=c(198),D=function(e){return Object(d.jsx)(g.a,{children:e})},T=function(e,t,c,n,a){return Object(d.jsxs)(S.a,{className:"my-3",children:[Object(d.jsx)(S.a.Addon,{children:t}),Object(d.jsx)(w.a,{placement:"right",trigger:"hover",speaker:D(c),children:Object(d.jsx)(k.a,{min:-1e4,max:1e4,defaultValue:e,onChange:a,postfix:n})})]})};function F(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(r.a)(s,2),j=i[0],l=i[1],b=Object(n.useState)(0),o=Object(r.a)(b,2),O=o[0],f=o[1],g=Object(C.a)("nav","met"),F=Object(r.a)(g,2),L=F[0],K=F[1],W=Object(n.useState)(0),B=Object(r.a)(W,2),E=B[0],H=B[1],M=Object(n.useState)(0),P=Object(r.a)(M,2),z=P[0],I=P[1],J=Object(n.useState)(0),V=Object(r.a)(J,2),Y=V[0],_=V[1],G=Object(n.useState)(0),U=Object(r.a)(G,2),X=U[0],q=U[1],Q=Object(n.useState)(0),R=Object(r.a)(Q,2),Z=R[0],$=R[1];return Object(n.useEffect)((function(){_(v(c,j,m(z,O))),q(h(c,j,m(z,O)))}),[c,j,z,O]),Object(n.useEffect)((function(){$(p(c,j))}),[c,j]),Object(n.useEffect)((function(){I("nav"==L?E:Object(u.a)("".concat(E," + 180")))}),[L,E]),Object(d.jsxs)("div",{className:"flex-col justify-around items-center py-5",children:[Object(d.jsx)(y,{res:[{label:"\u5730\u901f(kts)",val:Y},{label:"\u504f\u6d41(\xb0)",val:X},{label:"\u6700\u5927\u504f\u6d41(\xb0)",val:Z}]}),Object(d.jsxs)("div",{className:"flex-col justify-between items-center",children:[T(0,"TAS","\u8f93\u5165\u771f\u7a7a\u901f","Kts",(function(e){return a(Object(x.yc)(e)?e:0)})),T(0,"WS","\u8f93\u5165\u98ce\u901f","Kts",(function(e){return l(Object(x.yc)(e)?e:0)})),T(0,"MH","\u8f93\u5165\u5f53\u524d\u78c1\u822a\u5411","\xb0",(function(e){return f(Object(x.yc)(e)?e:0)})),Object(d.jsxs)(S.a,{className:"my-3",children:[Object(d.jsx)(S.a.Addon,{children:Object(d.jsxs)(A.a,{style:{borderStyle:"none"},name:"radioList",inline:!0,appearance:"picker",value:L,onChange:function(e){return K.toggle(e)},children:[Object(d.jsxs)("span",{style:{padding:"8px 2px 8px 10px",display:"inline-block",verticalAlign:"middle"},children:["WD"," "]}),Object(d.jsx)(N.a,{value:"nav",children:"\u822a\u884c\u98ce"}),Object(d.jsx)(N.a,{value:"met",children:"\u6c14\u8c61\u98ce"})]})}),Object(d.jsx)(w.a,{placement:"right",trigger:"hover",speaker:D("\u8f93\u5165\u5f53\u524d".concat("nav"==L?"\u822a\u884c":"\u6c14\u8c61","\u98ce\u5411")),children:Object(d.jsx)(k.a,{min:-1e4,max:1e4,defaultValue:0,onChange:function(e){return H(Object(x.yc)(e)?e:0)},postfix:"\xb0"})})]})]})]})}var L=c(395),K=c(391),W=c(392);function B(){return Object(d.jsxs)("div",{children:["    ",Object(d.jsx)(L.a,{type:"info",description:"\u8fd9\u4e2a\u8ba1\u7b97\u5668\u662f\u4f9d\u8d56\u4e8e\u4ee5\u4e0b\u516c\u5f0f\u6216\u6982\u5ff5\u8fdb\u884c\u5de5\u4f5c\u7684\uff01"}),Object(d.jsxs)(K.a,{accordion:!0,defaultActiveKey:1,bordered:!0,children:[Object(d.jsx)(W.a,{header:"\u901a\u8fc7 \u771f\u7a7a\u901f\u3001\u98ce\u901f\u98ce\u89d2 \u8ba1\u7b97\u5f53\u524d\u5730\u901f",eventKey:1,children:"GS = TAS + WS \xd7 Sin(90\xb0 - WA)"}),Object(d.jsx)(W.a,{header:"\u901a\u8fc7 \u771f\u7a7a\u901f\u3001\u98ce\u901f \u4f30\u7b97\u5f53\u524d\u6700\u5927\u504f\u6d41(MAX)",eventKey:2,children:"DAmax \u2248 60/TAS \xd7 WS"}),Object(d.jsx)(W.a,{header:"\u901a\u8fc7 \u771f\u7a7a\u901f\u3001\u98ce\u901f\u98ce\u89d2 \u4f30\u7b97\u5f53\u524d\u504f\u6d41",eventKey:3,children:"DA = DAmax \xd7 Sin(WA)"})]})]})}var E=c(396);function H(e){var t=e.clickDisc;return Object(d.jsxs)("div",{className:"flex items-center p-3 text-gray-400 cursor-default",children:[Object(d.jsxs)("div",{className:"cursor-pointer",onClick:t,children:[" ","\u514d\u8d23\u58f0\u660e"]})," ",Object(d.jsx)(E.a,{vertical:!0}),Object(d.jsxs)("div",{children:["Powered By ",Object(d.jsx)("a",{href:"http://lrvinye.cn",target:"_blank",children:"Lrvinye"})]}),Object(d.jsx)(E.a,{vertical:!0}),Object(d.jsxs)("div",{children:["\u6765\u81ea ",Object(d.jsx)("a",{href:"http://www.cauc.edu.cn",target:"_blank",children:"\u4e2d\u56fd\u6c11\u822a\u5927\u5b66 CAUC"})," \u6821\u53cb"]})]})}function M(){var e=Object(j.a)(!0),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(d.jsxs)("div",{className:"App flex flex-col h-full w-screen justify-center items-center bg-blue-400 py-10",children:[Object(d.jsxs)("div",{className:"flex-col justify-between items-center rounded-lg ring-8 w-5/6 bg-white py-8 px-5",children:[Object(d.jsx)("div",{className:"flex justify-center",children:Object(d.jsx)("div",{className:" text-gray-100 max-w-max rounded-xl px-4 py-2 font-sans text-2xl font-extrabold bg-blue-400",children:"\u6c11 \u822a \u9886 \u822a \u8ba1 \u7b97 \u5668"})}),Object(d.jsx)(F,{}),Object(d.jsx)(B,{}),Object(d.jsx)(H,{clickDisc:n.setTrue})]}),Object(d.jsx)(O,{isShow:c,confirm:n.setFalse})]})}var P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,397)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))},z=c(386),I=c(199),J=c.n(I);i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(z.a,{locale:J.a,children:Object(d.jsx)(M,{})})}),document.getElementById("root")),P()}},[[380,1,2]]]);
//# sourceMappingURL=main.086c1d6f.chunk.js.map