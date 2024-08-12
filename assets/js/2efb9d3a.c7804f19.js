"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[2691],{4441:(e,t,o)=>{o.r(t),o.d(t,{CH:()=>d,assets:()=>i,chCodeConfig:()=>p,contentTitle:()=>a,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var n=o(4848),s=o(8453),c=o(4754);const r={title:"Data & Message",sidebar_position:2,slug:"/guides-data-message"},a=void 0,l={id:"Guides/guides-data-message",title:"Data & Message",description:"In Langflow, the\xa0Data\xa0and\xa0Message\xa0objects serve as structured, functional representations of data that enhance the capabilities and reliability of the platform.",source:"@site/docs/Guides/guides-data-message.md",sourceDirName:"Guides",slug:"/guides-data-message",permalink:"/guides-data-message",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Data & Message",sidebar_position:2,slug:"/guides-data-message"},sidebar:"defaultSidebar",previous:{title:"Chat Memory",permalink:"/guides-chat-memory"},next:{title:"Workspace Overview",permalink:"/workspace"}},i={},d={annotations:c.hk,Code:c.Cy},p={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},h=[{value:"The Data Object",id:"e0d56e463d2f483bb1b5df09d88bf309",level:2},{value:"Creating a Data Object",id:"3540b7e651f74b558febebbe43380660",level:3},{value:"The Message Object",id:"f4f17cad02a545068f407d515cbc2902",level:2}];function u(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return d||g("CH",!1),d.Code||g("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,n.jsxs)(t.p,{children:["In Langflow, the\xa0",(0,n.jsx)(t.code,{children:"Data"}),"\xa0and\xa0",(0,n.jsx)(t.code,{children:"Message"}),"\xa0objects serve as structured, functional representations of data that enhance the capabilities and reliability of the platform."]}),"\n",(0,n.jsx)(t.h2,{id:"e0d56e463d2f483bb1b5df09d88bf309",children:"The Data Object"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["The\xa0",(0,n.jsx)(t.code,{children:"Data"}),"\xa0object is a Pydantic model that serves as a container for storing and manipulating data. It carries\xa0",(0,n.jsx)(t.code,{children:"data"}),"\u2014a dictionary that can be accessed as attributes\u2014and uses\xa0",(0,n.jsx)(t.code,{children:"text_key"}),"\xa0to specify which key in the dictionary should be considered the primary text content."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Main Attributes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"text_key"}),": Specifies the key to retrieve the primary text data."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"data"}),": A dictionary to store additional data."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"default_value"}),":  default value when the\xa0",(0,n.jsx)(t.code,{children:"text_key"}),"\xa0is not present in the\xa0",(0,n.jsx)(t.code,{children:"data"}),"\xa0dictionary."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"3540b7e651f74b558febebbe43380660",children:"Creating a Data Object"}),"\n",(0,n.jsxs)(t.p,{children:["You can create a\xa0",(0,n.jsx)(t.code,{children:"Data"}),"\xa0object by directly assigning key-value pairs to it. For example:"]}),"\n",(0,n.jsx)(d.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"from",props:{style:{color:"#FF7B72"}}},{content:" langflow.schema ",props:{style:{color:"#C9D1D9"}}},{content:"import",props:{style:{color:"#FF7B72"}}},{content:" Data",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"# Creating a Data object with specified key-value pairs",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"data ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" Data(",props:{style:{color:"#C9D1D9"}}},{content:"text",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"my_string"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:"bar",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"3",props:{style:{color:"#79C0FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:"foo",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"another_string"',props:{style:{color:"#A5D6FF"}}},{content:")",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"# Outputs:",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"print",props:{style:{color:"#79C0FF"}}},{content:"(data.text)  ",props:{style:{color:"#C9D1D9"}}},{content:'# Outputs: "my_string"',props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"print",props:{style:{color:"#79C0FF"}}},{content:"(data.bar)   ",props:{style:{color:"#C9D1D9"}}},{content:"# Outputs: 3",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"print",props:{style:{color:"#79C0FF"}}},{content:"(data.foo)   ",props:{style:{color:"#C9D1D9"}}},{content:'# Outputs: "another_string"',props:{style:{color:"#8B949E"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,n.jsxs)(t.p,{children:["The\xa0",(0,n.jsx)(t.code,{children:"text_key"}),"\xa0specifies which key in the\xa0",(0,n.jsx)(t.code,{children:"data"}),"\xa0dictionary should be considered the primary text content. The\xa0",(0,n.jsx)(t.code,{children:"default_value"}),"\xa0provides a fallback if the\xa0",(0,n.jsx)(t.code,{children:"text_key"}),"\xa0is not present."]}),"\n",(0,n.jsx)(d.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"# Creating a Data object with a specific text_key and default_value",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"data ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" Data(",props:{style:{color:"#C9D1D9"}}},{content:"data",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"{",props:{style:{color:"#C9D1D9"}}},{content:'"title"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"Hello, World!"',props:{style:{color:"#A5D6FF"}}},{content:"}, ",props:{style:{color:"#C9D1D9"}}},{content:"text_key",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"content"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:"default_value",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"No content available"',props:{style:{color:"#A5D6FF"}}},{content:")",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"# Accessing the primary text using text_key and default_value",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"print",props:{style:{color:"#79C0FF"}}},{content:"(data.get_text())  ",props:{style:{color:"#C9D1D9"}}},{content:'# Outputs: "No content available" because "content" key is not in the data dictionary',props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"# Accessing data keys by calling the attribute directly",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"print",props:{style:{color:"#79C0FF"}}},{content:"(data.title)  ",props:{style:{color:"#C9D1D9"}}},{content:'# Outputs: "Hello, World!" because "title" key is in the data dictionary',props:{style:{color:"#8B949E"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Data"})," object is also convenient for visualization of outputs, since the output preview has visual elements to inspect data as a table and its cells as pop ups for basic types. The idea is to create a unified way to work and visualize complex information in Langflow."]}),"\n",(0,n.jsxs)(t.p,{children:["To receive ",(0,n.jsx)(t.code,{children:"Data"})," objects in a component input, you can use the ",(0,n.jsx)(t.code,{children:"DataInput"})," input type."]}),"\n",(0,n.jsx)(t.h2,{id:"f4f17cad02a545068f407d515cbc2902",children:"The Message Object"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["The\xa0",(0,n.jsx)(t.code,{children:"Message"}),"\xa0object extends the functionality of\xa0",(0,n.jsx)(t.code,{children:"Data"}),"\xa0and includes additional attributes and methods for chat interactions."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Main Attributes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"text_key"}),": Key to retrieve the primary text data."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"text"}),": The main text content of the message."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"sender"}),': Identifier for the sender (e.g., "User" or "AI").']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"sender_name"}),": Name of the sender."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"files"}),": List of files associated with the message."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"session_id"}),": Identifier for the chat session."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"timestamp"}),": Timestamp when the message was created."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"flow_id"}),": Identifier for the flow."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The\xa0",(0,n.jsx)(t.code,{children:"Message"}),"\xa0object can be used to send, store and manipulate chat messages within Langflow. You can create a\xa0",(0,n.jsx)(t.code,{children:"Message"}),"\xa0object by directly assigning key-value pairs to it. For example:"]}),"\n",(0,n.jsx)(d.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"from",props:{style:{color:"#FF7B72"}}},{content:" langflow.schema.message ",props:{style:{color:"#C9D1D9"}}},{content:"import",props:{style:{color:"#FF7B72"}}},{content:" Message",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"message ",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:" Message(",props:{style:{color:"#C9D1D9"}}},{content:"text",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"Hello, AI!"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:"sender",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"User"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:"sender_name",props:{style:{color:"#FFA657"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"John Doe"',props:{style:{color:"#A5D6FF"}}},{content:")",props:{style:{color:"#C9D1D9"}}}]}],lang:"python"},annotations:[]}]}),"\n",(0,n.jsxs)(t.p,{children:["To receive ",(0,n.jsx)(t.code,{children:"Message"})," objects in a component input, you can use the ",(0,n.jsx)(t.code,{children:"MessageInput"})," input type or ",(0,n.jsx)(t.code,{children:"MessageTextInput"})," when the goal is to extract just the ",(0,n.jsx)(t.code,{children:"text"})," field of the ",(0,n.jsx)(t.code,{children:"Message"})," object."]})]})}function y(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}function g(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);