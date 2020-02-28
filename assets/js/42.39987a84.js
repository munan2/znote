(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{422:function(s,t,a){"use strict";a.r(t);var e=a(3),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("Boxx"),s._v(" "),a("h2",{attrs:{id:"ajax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[s._v("#")]),s._v(" Ajax")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("1. Ajax支持几种数据传递的方式?")]),a("ol",[a("li",[a("strong",[s._v("字符串")]),s._v(" text/plain")]),s._v(" "),a("li",[a("strong",[s._v("xml")]),s._v("\t text/xml")]),s._v(" "),a("li",[a("strong",[s._v("json")]),s._v("\t text/plain")])])]),a("h2",{attrs:{id:"json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json"}},[s._v("#")]),s._v(" Json")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("1. json的格式?")]),a("ol",[a("li",[a("p",[a("strong",[s._v("键值对")]),s._v(" {key1:value1,key2:value2..}")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("数组")]),s._v("   [value1,value2..]")])])]),s._v(" "),a("blockquote",[a("p",[s._v("其中key必须是String类型,value支持null,Object,json等")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("2. json有哪几种封装方式?")]),a("ol",[a("li",[a("p",[s._v("可以封装"),a("strong",[s._v("任意类型的数据")])]),s._v(" "),a("p",[s._v('JSONObject jo1 = new JSONObject();\njo1.put("key",value);')])]),s._v(" "),a("li",[a("p",[s._v("用来封装"),a("strong",[s._v("自定义数据类型")]),s._v("和"),a("strong",[s._v("Map")])]),s._v(" "),a("p",[s._v("Map<Integer,String> map = new HashMap<>();"),a("br"),s._v('\nmap.put(1,"王者");\nmap.put(2,"荣耀");'),a("br"),s._v("\nJSONObject jo2 = JSONObject.fromObject(map);")])]),s._v(" "),a("li",[a("p",[s._v("专门用来封装"),a("strong",[s._v("集合")]),s._v("和"),a("strong",[s._v("数组")])]),s._v(" "),a("p",[s._v("List<String> list = new ArrayList<>();"),a("br"),s._v('\nlist.add("飞龙");list.add("在天");'),a("br"),s._v("\nJSONArray jo3 = JSONArray.fromObject(list);")])])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("3. json如何对自定义数据类型进行有选择性的封装?(hibernate中`防止`多表级联发生的`死循环`)")]),a("ul",[a("li",[a("p",[s._v("引入"),a("strong",[s._v("JsonConfig")])]),s._v(" "),a("p",[s._v('JsonConfig jc = new JsonConfig(new String[]{"不想要的属性1","不想要的属性2"..});'),a("br"),s._v("\nJSONObject jo = JSONObject.fromObject(对象,jc);")])])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("4. json的包名是?")]),a("p",[s._v("​    net.sf.json.JSONArray;"),a("br"),s._v("\n​\tnet.sf.json.JSONObject;")])]),a("h2",{attrs:{id:"jquery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery"}},[s._v("#")]),s._v(" jQuery")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("1. jQuery基本选择器")]),a("ul",[a("li",[s._v("#id、.class")]),s._v(" "),a("li",[s._v("查找所有未选中的input元素："),a("code",[s._v('$("input:not(:checked)");')])]),s._v(" "),a("li",[s._v("选中所有name属性是newsletter的input元素："),a("code",[s._v('$("input[name=\'newsletter\']").attr("checked",true);')])])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("2. attr和prop的区别")]),a("p",[a("em",[s._v("attr")]),s._v("：可以获取元素"),a("strong",[s._v("自定义属性")]),s._v("和"),a("strong",[s._v("本身自带的属性")]),a("br"),s._v(" "),a("em",[s._v("prop")]),s._v("：用来获取元素"),a("strong",[s._v("本身属性")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("3. disabled和readonly的区别")]),a("p",[a("em",[s._v("disabled")]),s._v("：样式 灰色，"),a("strong",[s._v("后台请求接收不到参数 始终为null")]),a("br"),s._v(" "),a("em",[s._v("readonly")]),s._v("：样式 白色，"),a("strong",[s._v("后台请求参数可以接收")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("3. 简述Css层叠特性与继承特性")]),a("ul",[a("li",[a("p",[s._v("层叠特性:\n当多种基本选择器出现冲突时优先级问题，"),a("code",[s._v("id选择器>类别选择器>标记选择器")])])]),s._v(" "),a("li",[a("p",[s._v("继承特性:\n当子元素与父元素没有任何冲突时，子元素会完全继承父元素的所有css渲染样式")])])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("4. 写出至少三种Js选择器的使用方式")]),a("p",[s._v('document.getElementById("idName");'),a("br"),s._v('\ndocument.getElementsByTagName("tagName");'),a("br"),s._v('\ndocument.getElementsByClassName("className");'),a("br"),s._v('\ndocument.getElementsByName("name");')])]),a("h2",{attrs:{id:"jsp-el表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsp-el表达式"}},[s._v("#")]),s._v(" Jsp el表达式")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("1. 请使用Js脚本在页面显示九九乘法表")]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"="')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\t"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<br />"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\t\t\t\t\t\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("2. el表达式取值")]),a("ol",[a("li",[a("p",[s._v("通过属性取值：${param.键}"),a("br"),s._v("\n拿取全局参数：${initParam.键}")])]),s._v(" "),a("li",[a("p",[s._v("四范围取值："),a("br"),s._v("\n${pageScope.elena} 当前页有效"),a("br"),s._v("\n${requestScope.elena} 跳转页面有效"),a("br"),s._v("\n${sessionScope.elena} session范围有效"),a("br"),s._v("\n${application.elena} 时间到期前一直有效")])])]),s._v(" "),a("blockquote",[a("p",[s._v("我们一般只写键,但是当有多个范围的键冲突时,默认拿取范围最小的键值")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("3. el表达式的缺陷")]),a("ol",[a("li",[s._v("EL表达式无法直接取值，必须通过key和提供的四范围取值，"),a("strong",[s._v("如果取值失败,什么都不显示")])]),s._v(" "),a("li",[s._v("解决：空验证，如果取不到值返回true，如果可以取值返回false"),a("br"),s._v("\n如："),a("code",[s._v("${empty sessionScope.key}")])])])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);