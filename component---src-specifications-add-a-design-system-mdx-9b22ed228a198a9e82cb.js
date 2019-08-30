(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1043:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return r}),n.d(t,"default",function(){return l});n(10),n(4),n(5),n(3),n(6),n(36),n(21),n(20);var a=n(1032),i=n(1033),o=n(1034);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/specifications/add-a-design-system.mdx"}});var c={_frontmatter:r},p=i.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.a)(p,s({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("h1",{id:"add-a-design-system"},"Add a Design System"),Object(a.a)("p",null,"Open UI uses design systems as one of its forms of evidence for cataloging emergent UI standards.\nDesign systems are documented in JSON5 format according a JSON schema.\nThis provides us with a consistent and machine readable way of documenting the design system."),Object(a.a)("h2",{id:"criteria"},"Criteria"),Object(a.a)("p",null,"In order to succeed as an open standard, Open UI must collect the most useful ideas and patterns that exist.\nBecause of this, not all design systems are suitable to use as Open UI sources."),Object(a.a)("p",null,"We believe the most useful ideas are those that:"),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},":white_check_mark: ",Object(a.a)("strong",{parentName:"li"},"support")," designers and developers"),Object(a.a)("li",{parentName:"ul"},":white_check_mark: ",Object(a.a)("strong",{parentName:"li"},"support")," multiple platforms and frameworks"),Object(a.a)("li",{parentName:"ul"},":white_check_mark: ",Object(a.a)("strong",{parentName:"li"},"support")," accessible users"),Object(a.a)("li",{parentName:"ul"},":white_check_mark: ",Object(a.a)("strong",{parentName:"li"},"support")," small and enterprise projects"),Object(a.a)("li",{parentName:"ul"},":white_check_mark: ",Object(a.a)("strong",{parentName:"li"},"demonstrate")," organic adoption in a wide community"),Object(a.a)("li",{parentName:"ul"},":white_check_mark: ",Object(a.a)("strong",{parentName:"li"},"demonstrate")," significant real-world usage"),Object(a.a)("li",{parentName:"ul"},":white_check_mark: ",Object(a.a)("strong",{parentName:"li"},"demonstrate")," deep thought and debate by many experienced minds")),Object(a.a)("p",null,"A design system does not need to meet all of these criteria but it should meet many of them.\nThe design systems we've launched with we believe are representative of these criteria.\nWe may not accept PRs contributing design systems that are lacking by these criteria."),Object(a.a)("h2",{id:"initial-information"},"Initial information"),Object(a.a)("p",null,"Create a JSON5 file in ",Object(a.a)("inlineCode",{parentName:"p"},"/research")," for the design system, like ",Object(a.a)("inlineCode",{parentName:"p"},"/specifications/antd.json5"),".\nAdd the ",Object(a.a)("inlineCode",{parentName:"p"},"$schema")," key pointing to our ",Object(a.a)("inlineCode",{parentName:"p"},"design-system.schema.json5")," schema and complete the required fields."),Object(a.a)("pre",null,Object(a.a)("code",s({parentName:"pre"},{className:"language-json5"}),"{\n  $schema: '../schemas/design-system.schema.json5',\n  name: 'Ant Design',\n  description: 'A design system with values of Nature and Determinacy for better user experience of enterprise applications.',\n  url: 'http://ant.design',\n  by: 'AFX',\n}\n")),Object(a.a)("h2",{id:"components"},"Components"),Object(a.a)("p",null,"Every UI component in the design system should be added to the components array:"),Object(a.a)("pre",null,Object(a.a)("code",s({parentName:"pre"},{className:"language-json5"}),"{\n  $schema: '../schemas/design-system.schema.json5',\n  name: 'Ant Design',\n  description: 'A design system with values of Nature and Determinacy for better user experience of enterprise applications.',\n  url: 'http://ant.design',\n  by: 'AFX',\n  components: [{ name: 'Button' }],\n}\n")),Object(a.a)("p",null,"Do not document utility components.\nOnly document components which render a user interface that can be experienced either visually, by keyboard, or narration."),Object(a.a)("h2",{id:"concepts"},"Concepts"),Object(a.a)("p",null,"Component concepts are terms used to described the appearance and behavior of a component.\nThings like ",Object(a.a)("inlineCode",{parentName:"p"},"primary")," for a ",Object(a.a)("inlineCode",{parentName:"p"},"Button"),"."),Object(a.a)("p",null,"Concepts are surfaced in component APIs will vary by framework and platform conventions.\nSometimes concepts are grouped into categories.\nThe concepts themselves should be cataloged opposed to the categories the design system puts them in."),Object(a.a)("p",null,"Example, the concept of ",Object(a.a)("inlineCode",{parentName:"p"},"primary")," for a ",Object(a.a)("inlineCode",{parentName:"p"},"Button"),' might be surfaced in a design guide under the "Types" heading, in an CSS framework with the HTML ',Object(a.a)("inlineCode",{parentName:"p"},'class="primary"'),", or in a React component library as the prop ",Object(a.a)("inlineCode",{parentName:"p"},"type='primary'"),".\nOpen UI's job is to recognize that the concept ",Object(a.a)("inlineCode",{parentName:"p"},"primary")," exists within the scope of a ",Object(a.a)("inlineCode",{parentName:"p"},"Button")," component."),Object(a.a)("p",null,"When cataloging components in a design system, we record the concept ",Object(a.a)("inlineCode",{parentName:"p"},"primary"),".\nThe category ",Object(a.a)("inlineCode",{parentName:"p"},"type")," is not a concept but it should be noted that the design system categorized ",Object(a.a)("inlineCode",{parentName:"p"},"primary")," as a ",Object(a.a)("inlineCode",{parentName:"p"},"type"),"."),Object(a.a)("pre",null,Object(a.a)("code",s({parentName:"pre"},{className:"language-json5"}),"...\n  components: [\n    {\n      name: 'Button',\n      concepts: [\n        { name: 'primary', category: 'type' },\n      ],\n    },\n  ],\n...\n")),Object(a.a)("p",null,":bulb: Always use kebab-case for concept names."),Object(a.a)("blockquote",null,Object(a.a)("p",{parentName:"blockquote"},"TODO:",Object(a.a)("br",null),"\nThe below guidance has changed already. Carbon for example has no ",Object(a.a)("inlineCode",{parentName:"p"},"size")," concept, just ",Object(a.a)("inlineCode",{parentName:"p"},"small"),'.\nLatest thinking says it is useful to know how many sizes are applied to each component, opposed to just "size".\nThe guidance for what should be a concept could be whether or not the component can "be" that concept.\nNo one says a Button can be "size".\nExample, Carbon says a Button can be "small", AntD says a Button can be "large", and Semantic says a Button can be "massive".\nPut another way, we would record "is" relationships which denote ',Object(a.a)("em",{parentName:"p"},"qualities"),', like "that button is small".\nWe would ignore "has a" relationships which denote ',Object(a.a)("em",{parentName:"p"},"properties"),', like "that button has a size".'),Object(a.a)("hr",{parentName:"blockquote"}),Object(a.a)("h2",s({parentName:"blockquote"},{id:"concepts-vs-categories"}),"Concepts vs Categories"),Object(a.a)("p",{parentName:"blockquote"},"Above we reasoned to flatten the ",Object(a.a)("inlineCode",{parentName:"p"},"primary")," concept from within its ",Object(a.a)("inlineCode",{parentName:"p"},"type")," grouping.\nDo we do this for all enum values, such as flattening ",Object(a.a)("inlineCode",{parentName:"p"},"small")," from within the ",Object(a.a)("inlineCode",{parentName:"p"},"size")," grouping?\nNo, because ",Object(a.a)("inlineCode",{parentName:"p"},"size")," is already a concept with consensus as to its meaning and bounds."),Object(a.a)("p",{parentName:"blockquote"},"We can find ",Object(a.a)("inlineCode",{parentName:"p"},"size")," in an ",Object(a.a)("a",s({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Size"}),"encyclopedia"),' with a definition, "Size is the magnitude or dimensions of a thing."\nIt is a concept that exists on its own.\nContrast this with ',Object(a.a)("inlineCode",{parentName:"p"},"type")," which is abstract and ambiguous.\nIt leads to a ",Object(a.a)("a",s({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Type"}),"disambiguation page")," and does not stand on its own.\nWe can only talk about ",Object(a.a)("inlineCode",{parentName:"p"},"type"),"s in the context of some other thing."),Object(a.a)("p",{parentName:"blockquote"},"Another test is whether or not there is intuition and consensus about what this group contains.\nIf you asked a large diverse group of people to list items in this group, do you expect general consensus?\nList off ",Object(a.a)("inlineCode",{parentName:"p"},"size"),'s, did you think of "small", "medium", or "large"?\nList off ',Object(a.a)("inlineCode",{parentName:"p"},"type"),"s, can you think of anything that makes sense here?"),Object(a.a)("p",{parentName:"blockquote"},"This table can help you determine if a concept is in fact a concept itself or if it is a group of concepts whose items need to be flattened into many concepts:"),Object(a.a)("table",{parentName:"blockquote"},Object(a.a)("thead",{parentName:"table"},Object(a.a)("tr",{parentName:"thead"},Object(a.a)("th",s({parentName:"tr"},{align:null}),"Might be a concept"),Object(a.a)("th",s({parentName:"tr"},{align:null}),"Might be a group of concepts"))),Object(a.a)("tbody",{parentName:"table"},Object(a.a)("tr",{parentName:"tbody"},Object(a.a)("td",s({parentName:"tr"},{align:null}),"Well-known"),Object(a.a)("td",s({parentName:"tr"},{align:null}),"Obscure")),Object(a.a)("tr",{parentName:"tbody"},Object(a.a)("td",s({parentName:"tr"},{align:null}),"Concrete"),Object(a.a)("td",s({parentName:"tr"},{align:null}),"Abstract")),Object(a.a)("tr",{parentName:"tbody"},Object(a.a)("td",s({parentName:"tr"},{align:null}),"Stands alone"),Object(a.a)("td",s({parentName:"tr"},{align:null}),"Requires specific context")),Object(a.a)("tr",{parentName:"tbody"},Object(a.a)("td",s({parentName:"tr"},{align:null}),"Has consensus"),Object(a.a)("td",s({parentName:"tr"},{align:null}),"Little to no consensus"))))),Object(a.a)("h2",{id:"images"},"Images"),Object(a.a)("p",null,"An image of the concept should be included with the concept.\nThis allows a visual aid to be shown when the concept might need to be clarified in the specifications."),Object(a.a)("pre",null,Object(a.a)("code",s({parentName:"pre"},{className:"language-json5"}),"...\n  components: [\n    {\n      name: 'Button',\n      concepts: [\n        { name: 'primary', group: 'type', image: 'antd-button-primary.png' },\n      ],\n    },\n  ],\n...\n")),Object(a.a)("p",null,"You can use a screenshot tool to capture these images directly from the design system.\nHere's an example image of the primary Button in Ant Design."),Object(a.a)(o.d,{src:"antd-button-primary.png",alt:"Ant Design Primary Button",mdxType:"Image"}),Object(a.a)("p",null,"If the image requires showing motion or interaction, considering using a gif tool."),Object(a.a)(o.d,{src:"sui-button-animated.gif",alt:"Semantic UI Animated Button",mdxType:"Image"}))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/specifications/add-a-design-system.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-specifications-add-a-design-system-mdx-9b22ed228a198a9e82cb.js.map