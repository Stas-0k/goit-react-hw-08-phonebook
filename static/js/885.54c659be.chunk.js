"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[885],{2885:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var a="contact-list_list_contact__iXfzw",r="contact-list_listItem_contact__42pBK",s="contact-list_bttn_contactList__YkEUl",c="contact-list_name__eoDaX",i=n(9434),l=function(t){return t.contacts.items},o=function(t){return t.filter},u=function(t){var e=t.contacts,n=t.filter;if(!n)return e.items;var a=n.toLowerCase();return e.items.filter((function(t){var e=t.name,n=t.number;return e.toLowerCase().includes(a)||n.toLowerCase().includes(a)}))},m=n(208),d=n(2791),_=n(184),f=function(){var t=(0,i.v9)(u),e=(0,i.I0)();return(0,d.useEffect)((function(){e((0,m.yF)())}),[e]),(0,_.jsx)("ul",{className:a,children:0!==t.length?t.map((function(t){return(0,_.jsxs)("li",{className:r,children:[(0,_.jsxs)("p",{children:[(0,_.jsxs)("span",{className:c,children:[t.name,": "]}),t.number," "]}),(0,_.jsx)("button",{className:s,type:"button",onClick:function(){return e((0,m.GK)(t.id))},children:"Delete"})]},t.id)})):(0,_.jsx)("p",{children:"No data to display :("})})},h="filter_head_filter__RlIc+",p="filter_input_filter__VyUGQ",x=n(6895),b=function(){var t=(0,i.I0)(),e=(0,i.v9)(o);return(0,_.jsxs)("div",{children:[(0,_.jsx)("h3",{className:h,children:"Find contacts by name"}),(0,_.jsx)("input",{type:"text",name:"filter",value:e,className:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:function(e){t((0,x.M6)(e.target.value))}})]})},j="contact-form_input_contact__l828y",v="contact-form_form_contact__rOZrt",N="contact-form_label_contact__KqCrE",y="contact-form_bttn_contact__qYSNV";function C(){var t=(0,i.v9)(l),e=(0,i.I0)();return(0,_.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=n.target.elements;t.some((function(t){return t.name.toLowerCase().trim()===a.name.value.toLowerCase().trim()}))?(alert("".concat(a.name.value," is already in contacts")),n.currentTarget.reset()):(e((0,m.uK)({name:a.name.value,number:a.number.value})),n.currentTarget.reset())},className:v,children:[(0,_.jsx)("label",{className:N,children:"Name"}),(0,_.jsx)("input",{type:"text",name:"name",className:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,_.jsx)("label",{className:N,children:"Number"}),(0,_.jsx)("input",{type:"tel",name:"number",className:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,_.jsx)("button",{type:"submit",className:y,children:"Add contact"})]})}var w=function(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h1",{children:"Phonebook"}),(0,_.jsx)(C,{}),(0,_.jsx)("h2",{children:"Contacts"}),(0,_.jsx)(b,{}),(0,_.jsx)(f,{})]})}}}]);
//# sourceMappingURL=885.54c659be.chunk.js.map