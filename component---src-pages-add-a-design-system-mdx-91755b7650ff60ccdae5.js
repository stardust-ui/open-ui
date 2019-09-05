(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{363:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return o}),n.d(t,"default",function(){return b});n(5),n(6),n(4),n(9),n(23),n(0);var a=n(94),s=n(122),i=n(43);var o={},c={_frontmatter:o},r=s.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(a.b)(r,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"Add a Design System"),Object(a.b)("p",null,"Open UI uses design systems as one of its forms of evidence for cataloging emergent UI standards.\nDesign systems are documented in JSON5 format according a JSON schema.\nThis provides us with a consistent and machine readable way of documenting the design system."),Object(a.b)("h2",null,"Criteria"),Object(a.b)("p",null,"In order to succeed as an open standard, Open UI must collect the most useful ideas and patterns that exist.\nBecause of this, not all design systems are suitable to use as Open UI sources."),Object(a.b)("p",null,"We believe the most useful ideas are those that:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"✅ ",Object(a.b)("strong",{parentName:"li"},"support")," designers and developers"),Object(a.b)("li",{parentName:"ul"},"✅ ",Object(a.b)("strong",{parentName:"li"},"support")," multiple platforms and frameworks"),Object(a.b)("li",{parentName:"ul"},"✅ ",Object(a.b)("strong",{parentName:"li"},"support")," accessible users"),Object(a.b)("li",{parentName:"ul"},"✅ ",Object(a.b)("strong",{parentName:"li"},"support")," small and enterprise projects"),Object(a.b)("li",{parentName:"ul"},"✅ ",Object(a.b)("strong",{parentName:"li"},"demonstrate")," organic adoption in a wide community"),Object(a.b)("li",{parentName:"ul"},"✅ ",Object(a.b)("strong",{parentName:"li"},"demonstrate")," significant real-world usage"),Object(a.b)("li",{parentName:"ul"},"✅ ",Object(a.b)("strong",{parentName:"li"},"demonstrate")," deep thought and debate by many experienced minds")),Object(a.b)("p",null,"A design system does not need to meet all of these criteria but it should meet many of them.\nThe design systems we've launched with we believe are representative of these criteria.\nWe may not accept PRs contributing design systems that are lacking by these criteria."),Object(a.b)("h2",null,"Initial information"),Object(a.b)("p",null,"Create a JSON5 file in ",Object(a.b)("inlineCode",{parentName:"p"},"/research")," for the design system, like ",Object(a.b)("inlineCode",{parentName:"p"},"/specifications/antd.json5"),".\nAdd the ",Object(a.b)("inlineCode",{parentName:"p"},"$schema")," key pointing to our ",Object(a.b)("inlineCode",{parentName:"p"},"design-system.schema.json5")," schema and complete the required fields."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json5"}),"{\n  $schema: '../schemas/design-system.schema.json5',\n  name: 'Ant Design',\n  description: 'A design system with values of Nature and Determinacy for better user experience of enterprise applications.',\n  url: 'http://ant.design',\n  by: 'AFX',\n}\n")),Object(a.b)("h2",null,"Components"),Object(a.b)("p",null,"Every UI component in the design system should be added to the components array:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json5"}),"{\n  $schema: '../schemas/design-system.schema.json5',\n  name: 'Ant Design',\n  description: 'A design system with values of Nature and Determinacy for better user experience of enterprise applications.',\n  url: 'http://ant.design',\n  by: 'AFX',\n  components: [{ name: 'Button' }],\n}\n")),Object(a.b)("p",null,"Do not document utility components.\nOnly document components which render a user interface that can be experienced either visually, by keyboard, or narration."),Object(a.b)("h2",null,"Concepts"),Object(a.b)("p",null,"Component concepts are terms used to described the appearance and behavior of a component.\nThings like ",Object(a.b)("inlineCode",{parentName:"p"},"primary")," for a ",Object(a.b)("inlineCode",{parentName:"p"},"Button"),"."),Object(a.b)("p",null,"Concepts are surfaced in component APIs will vary by framework and platform conventions.\nSometimes concepts are grouped into categories.\nThe concepts themselves should be cataloged opposed to the categories the design system puts them in."),Object(a.b)("p",null,"Example, the concept of ",Object(a.b)("inlineCode",{parentName:"p"},"primary")," for a ",Object(a.b)("inlineCode",{parentName:"p"},"Button"),' might be surfaced in a design guide under the "Types" heading, in an CSS framework with the HTML ',Object(a.b)("inlineCode",{parentName:"p"},'class="primary"'),", or in a React component library as the prop ",Object(a.b)("inlineCode",{parentName:"p"},"type='primary'"),".\nOpen UI's job is to recognize that the concept ",Object(a.b)("inlineCode",{parentName:"p"},"primary")," exists within the scope of a ",Object(a.b)("inlineCode",{parentName:"p"},"Button")," component."),Object(a.b)("p",null,"When cataloging components in a design system, we record the concept ",Object(a.b)("inlineCode",{parentName:"p"},"primary"),".\nThe category ",Object(a.b)("inlineCode",{parentName:"p"},"type")," is not a concept but it should be noted that the design system categorized ",Object(a.b)("inlineCode",{parentName:"p"},"primary")," as a ",Object(a.b)("inlineCode",{parentName:"p"},"type"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json5"}),"...\n  components: [\n    {\n      name: 'Button',\n      concepts: [\n        { name: 'primary', category: 'type' },\n      ],\n    },\n  ],\n...\n")),Object(a.b)("p",null,"💡 Always use kebab-case for concept names."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"TODO:",Object(a.b)("br",null),"\nThe below guidance has changed already. Carbon for example has no ",Object(a.b)("inlineCode",{parentName:"p"},"size")," concept, just ",Object(a.b)("inlineCode",{parentName:"p"},"small"),'.\nLatest thinking says it is useful to know how many sizes are applied to each component, opposed to just "size".\nThe guidance for what should be a concept could be whether or not the component can "be" that concept.\nNo one says a Button can be "size".\nExample, Carbon says a Button can be "small", AntD says a Button can be "large", and Semantic says a Button can be "massive".\nPut another way, we would record "is" relationships which denote ',Object(a.b)("em",{parentName:"p"},"qualities"),', like "that button is small".\nWe would ignore "has a" relationships which denote ',Object(a.b)("em",{parentName:"p"},"properties"),', like "that button has a size".'),Object(a.b)("hr",{parentName:"blockquote"}),Object(a.b)("h2",{parentName:"blockquote"},"Concepts vs Categories"),Object(a.b)("p",{parentName:"blockquote"},"Above we reasoned to flatten the ",Object(a.b)("inlineCode",{parentName:"p"},"primary")," concept from within its ",Object(a.b)("inlineCode",{parentName:"p"},"type")," grouping.\nDo we do this for all enum values, such as flattening ",Object(a.b)("inlineCode",{parentName:"p"},"small")," from within the ",Object(a.b)("inlineCode",{parentName:"p"},"size")," grouping?\nNo, because ",Object(a.b)("inlineCode",{parentName:"p"},"size")," is already a concept with consensus as to its meaning and bounds."),Object(a.b)("p",{parentName:"blockquote"},"We can find ",Object(a.b)("inlineCode",{parentName:"p"},"size")," in an ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Size"}),"encyclopedia"),' with a definition, "Size is the magnitude or dimensions of a thing."\nIt is a concept that exists on its own.\nContrast this with ',Object(a.b)("inlineCode",{parentName:"p"},"type")," which is abstract and ambiguous.\nIt leads to a ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Type"}),"disambiguation page")," and does not stand on its own.\nWe can only talk about ",Object(a.b)("inlineCode",{parentName:"p"},"type"),"s in the context of some other thing."),Object(a.b)("p",{parentName:"blockquote"},"Another test is whether or not there is intuition and consensus about what this group contains.\nIf you asked a large diverse group of people to list items in this group, do you expect general consensus?\nList off ",Object(a.b)("inlineCode",{parentName:"p"},"size"),'s, did you think of "small", "medium", or "large"?\nList off ',Object(a.b)("inlineCode",{parentName:"p"},"type"),"s, can you think of anything that makes sense here?"),Object(a.b)("p",{parentName:"blockquote"},"This table can help you determine if a concept is in fact a concept itself or if it is a group of concepts whose items need to be flattened into many concepts:"),Object(a.b)("table",{parentName:"blockquote"},Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Might be a concept"),Object(a.b)("th",Object.assign({parentName:"tr"},{align:null}),"Might be a group of concepts"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"Well-known"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"Obscure")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"Concrete"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"Abstract")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"Stands alone"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"Requires specific context")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"Has consensus"),Object(a.b)("td",Object.assign({parentName:"tr"},{align:null}),"Little to no consensus"))))),Object(a.b)("h2",null,"Images"),Object(a.b)("p",null,"An image of the concept should be included with the concept.\nThis allows a visual aid to be shown when the concept might need to be clarified in the specifications."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json5"}),"...\n  components: [\n    {\n      name: 'Button',\n      concepts: [\n        { name: 'primary', group: 'type', image: 'antd-button-primary.png' },\n      ],\n    },\n  ],\n...\n")),Object(a.b)("p",null,"You can use a screenshot tool to capture these images directly from the design system.\nHere's an example image of the primary Button in Ant Design."),Object(a.b)(i.a,{src:"antd-button-primary.png",alt:"Ant Design Primary Button",mdxType:"Image"}),Object(a.b)("p",null,"If the image requires showing motion or interaction, considering using a gif tool."),Object(a.b)(i.a,{src:"sui-button-animated.gif",alt:"Semantic UI Animated Button",mdxType:"Image"}))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-add-a-design-system-mdx-91755b7650ff60ccdae5.js.map