;/*FB_PKG_DELIM*/

__d("PolarisGuideStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a,b){b===void 0&&(b="posts");switch(b){case"locations":return a===1?h._("1 \u041c\u0415\u0421\u0422\u041e"):h._("{number of places} \u043c\u0435\u0441\u0442",[h._param("number of places",a)]);case"accounts":return a===1?h._("1 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"):h._("\u0410\u041a\u041a\u0410\u0423\u041d\u0422\u042b: {number of accounts}",[h._param("number of accounts",a)]);case"products":return a===1?h._("1 \u0422\u041e\u0412\u0410\u0420"):h._("\u0422\u041e\u0412\u0410\u0420\u042b: {number of products}",[h._param("number of products",a)]);default:return a===1?h._("1 \u041f\u0423\u0411\u041b\u0418\u041a\u0410\u0426\u0418\u042f"):h._("{number of posts} \u041f\u0423\u0411\u041b\u0418\u041a\u0410\u0426\u0418\u0419",[h._param("number of posts",a)])}}function b(a,b){return h._("{guide author full name} \u0432 Instagram: \"{guide title}\"",[h._param("guide author full name",a),h._param("guide title",b)])}function c(a){return h._("\u2116 {guide item number}",[h._param("guide item number",a)])}d=h._("\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430");e=h._("\u042d\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430.");f=h._("\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u0443\u0442\u0435\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c");var i=h._("\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b");g.getGuideNumberOfItemsText=a;g.getPageTitleForGuides=b;g.getGuideItemNumberLabel=c;g.GUIDE_ITEM_POST_UNAVAILABLE_HEADER=d;g.GUIDE_ITEM_POST_UNAVAILABLE_BODY=e;g.VIEW_GUIDE_STORY_CTA=f;g.OPTIONS_ALT_TEXT=i}),98);
__d("polarisWebReportSelectors",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.webReport.commentReportMode}function b(a){return a.webReport.userReportMode}function c(a){return a.webReport.category}function d(a){return a.webReport.isProcessing}f.getCommentReportMode=a;f.getUserReportMode=b;f.getReportCategory=c;f.getReportIsProcessing=d}),66);
__d("PolarisInternalBadge.react",["cx","fbt","IGDSText.react","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=i._("\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a");function a(){var a=j.jsx(c("IGDSText.react").Body2Emphasized,{color:"webAlwaysWhite",children:k});return j.jsx("div",{className:"_aars",children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisIgGuideEntryFalcoEvent",["PolarisFalcoLogger"],(function(a,b,c,d,e,f,g){"use strict";var h={falco:!0,pigeon:!1};a={log:function(a){d("PolarisFalcoLogger").FalcoLogger.log("guide_entry",a(),{},h)}};b=a;g["default"]=b}),98);
__d("PolarisGuideLogger",["PolarisIgGuideEntryFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.entryPoint,d=a.guideID;c("PolarisIgGuideEntryFalcoEvent").log(function(){return{module:"guide_detail",entry_point:b,guide_id:d}})}g.logGuideEntry=a}),98);