;/*FB_PKG_DELIM*/

__d("useIGDSEntryPointDialog",["CometDialogContext","CometRelay","CometSuspendedDialogImpl.react","IGDSDialogPlaceholder.react","react","tracePolicyFromResource","useCometEntryPointPrerendererWithQueryTimeout"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useContext;function k(a){var b=a.onClose,c=a.onHide,e=a.otherProps;a=a.preloadedEntryPoint;e=babelHelpers["extends"]({},e,{onClose:b,onHide:c});return h.jsx(d("CometRelay").EntryPointContainer,{entryPointReference:a,props:e})}k.displayName=k.name+" [from "+f.id+"]";var l=function(a){return h.jsx(c("IGDSDialogPlaceholder.react"),{fixedHeight:!0,fixedWidth:!0,onClose:a})};function a(a,b,d,e,f){var g=j(c("CometDialogContext")),h=k;b=c("useCometEntryPointPrerendererWithQueryTimeout")(a,b,d,f);var m=b[0];f=b[1];var n=b[2];b=b[3];var o=i(function(b,f,i){m(function(f,j){g(c("CometSuspendedDialogImpl.react"),{dialog:h,dialogProps:{otherProps:b,preloadedEntryPoint:f},fallback:(f=e)!=null?f:l},{loadType:"entrypoint",preloadTrigger:d,tracePolicy:(f=i)!=null?f:c("tracePolicyFromResource")("igds.modal",a.root)},j)},f)},[g,h,a.root,e,d,m]);return[o,f,n,b]}g["default"]=a}),98);
__d("PolarisBoostRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisBoostRoot.react").__setRef("PolarisBoostRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisBoostScreenGlimmer.react",["IGDSBox.react","IGDSGlimmer.react","PolarisUA","react","useCurrentDisplayMode"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={baseGlimmer:{height:"xxk0z11",$$css:!0},header:{borderBottom:"x18oi6gw",display:"x78zum5",flexDirection:"x1q0g3np",justifyContent:"xl56j7k",alignItems:"x6s0dn4",height:"x11x8uw5",$$css:!0},heroContainer:{display:"x78zum5",justifyContent:"xl56j7k",marginTop:"xib59rt",marginBottom:"x1o9sqkb",$$css:!0},maxWidth:{maxWidth:"x193iq5w",$$css:!0},backgroundColorBlack:{backgroundColor:"x1hmx34t",$$css:!0}};function a(a){return h.jsxs(c("IGDSBox.react"),{height:"100%",children:[h.jsx(c("IGDSBox.react"),{xstyle:i.header,children:h.jsx(j,{index:0,width:156})}),h.jsx("div",{className:"x78zum5 xl56j7k xib59rt x1o9sqkb",children:h.jsx(j,{index:1,width:250})}),h.jsxs(c("IGDSBox.react"),{flex:"grow",marginBottom:4,marginEnd:4,marginStart:4,children:[h.jsx(j,{index:2,marginBottom:4,width:140}),h.jsx(j,{index:3,marginBottom:20,width:440}),h.jsx(j,{index:4,marginBottom:4,width:112}),h.jsx(j,{index:5,marginBottom:20,width:240}),h.jsx(j,{index:6,marginBottom:4,width:136}),h.jsx(j,{index:7,width:280})]})]})}a.displayName=a.name+" [from "+f.id+"]";function j(a){var b=a.index,e=a.marginBottom;a=a.width;var f=c("useCurrentDisplayMode")();f=f==="dark"&&d("PolarisUA").isDesktop();return h.jsx("div",{className:"x193iq5w",style:{width:a,marginBottom:e},children:h.jsx(c("IGDSGlimmer.react"),{index:b,xstyle:[i.baseGlimmer,f&&i.backgroundColorBlack]})})}j.displayName=j.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("usePolarisBoostDialog",["IGDSDialog.react","PolarisBoostRoot.entrypoint","PolarisBoostScreenGlimmer.react","react","useIGDSEntryPointDialog","uuid"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=c("useIGDSEntryPointDialog")(c("PolarisBoostRoot.entrypoint"),{routeParams:{},routeProps:{}},void 0,function(){return h.jsx(c("IGDSDialog.react"),{fixedHeight:!0,fixedWidth:!0,size:"large",children:h.jsx(c("PolarisBoostScreenGlimmer.react"),{})})}),d=b[0],e=a.get("media_id"),f=(b=a.get("flow_id"))!=null?b:c("uuid")(),g=a.get("context"),i=(b=a.get("return_path"))!=null?b:"/";return function(){e!=null&&g!=null&&d({routeParams:{media_id:e,flow_id:f,context:g,return_path:i},routeProps:{entryScreen:"objective"}})}}g["default"]=a}),98);
__d("usePolarisIsOnPostPage",["useTopMostRouteCometEntityKey"],(function(a,b,c,d,e,f,g){"use strict";var h="post";function a(){var a=c("useTopMostRouteCometEntityKey")();a=a==null?void 0:a.entity_type;return a===h}g["default"]=a}),98);
__d("PolarisPostActionLoadPostPageExtras",["PolarisAPIQuery","asyncToGeneratorRuntime","polarisPostSelectors","polarisUnexpected"],(function(a,b,c,d,e,f,g){"use strict";var h="6ff3f5c474a240353993056428fb851e";function a(a,e){return function(){var f=b("asyncToGeneratorRuntime").asyncToGenerator(function*(b,f){try{f=f();f=d("polarisPostSelectors").getPostById(f,a);f=(yield d("PolarisAPIQuery").query(h,{shortcode:f.code,include_reel:e.fetchReel,include_logged_out:e.fetchLoggedOutExtras}));f=f.data;b({type:"POST_PAGE_EXTRAS_LOADED",reel:f==null?void 0:(b=f.shortcode_media)==null?void 0:(b=b.owner)==null?void 0:b.reel,updatedUser:f==null?void 0:(b=f.shortcode_media)==null?void 0:b.owner});return}catch(a){c("polarisUnexpected")(a)}});return function(a,b){return f.apply(this,arguments)}}()}g.loadPostPageExtras=a}),98);/*FB_PKG_DELIM*/
__d("PolarisAboutThisAccountUtils",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.showAccountTransparencyDetails;a=a===void 0?!1:a;return a}f.getIsEligibleForATA=a}),66);
__d("PolarisReportUnderLawDialogItem.react",["fbt","IGCoreDialog","PolarisConfig","PolarisLinkBuilder","PolarisRoutes","polarisIsUserLoggedIn","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=h._("\u041f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435 NetzDG");c=h._("\u041f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435 CPA");var j={DE:b,AT:c},k={DE:d("PolarisRoutes").NETZDG_REPORT_CONTACT_FORM_PATH,AT:d("PolarisRoutes").CPA_REPORT_CONTACT_FORM_PATH};function l(a){return j[a]}function m(a,b){a=k[a];return d("PolarisLinkBuilder").buildLegalReportLink(a,b)}function n(){var a=d("PolarisConfig").getCountryCode();return a!=="DE"&&a!=="AT"?null:a}function a(a){var b=a.contentId;a=a.reportingUrl;var c=n();if(d("polarisIsUserLoggedIn").isUserLoggedIn()||c==null)return null;var e=(a=a)!=null?a:m(c,b);a=l(c);b=function(){window.open(e,"_blank")};return i.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-error-or-destructive",onClick:b,children:a})}a.displayName=a.name+" [from "+f.id+"]";g.ReportUnderLawDialogItem=a}),98);