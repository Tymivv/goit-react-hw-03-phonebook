(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{17:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(8),o=n.n(c),i=n(10),s=n(2),l=n(3),d=n(6),u=n(5),h=n(9),b=n(4),m=n(0),j=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(b.a)({},a,r))},t.handelSubmit=function(e){e.preventDefault(),t.props.onSubmit(Object(h.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:this.handelSubmit,children:[Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(m.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:this.state.number,onChange:this.handleChange}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]}),";"]})}}]),n}(a.Component),p=j,f=function(t){var e=t.filteredContacts,n=t.onDelete;return Object(m.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.nameContact,r=t.tel;return Object(m.jsxs)("li",{children:[a," : ",r,Object(m.jsxs)("button",{type:"button",onClick:n(e),children:["Delete ",a]})]},e)}))})},C=function(t){var e=t.value,n=t.onChange;return Object(m.jsxs)("label",{children:["Find contact by name",Object(m.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:e,onChange:n})]})},O=n(11),v=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",nameContact:"Rosie Simpson",tel:"459-12-56"},{id:"id-2",nameContact:"Hermione Kline",tel:"443-89-12"},{id:"id-3",nameContact:"Eden Clements",tel:"645-17-79"},{id:"id-4",nameContact:"Annie Copeland",tel:"227-91-26"}],filter:""},t.addContacts=function(e){var n=e.name,a=e.number;if(t.state.contacts.some((function(e){e.id;var n=e.nameContact;e.tel;return n===t.state.name})))alert('name "'.concat(t.state.name,'" is already in list'));else{var r={id:Object(O.a)(),nameContact:n,tel:a};console.log(r),t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[r])}}))}},t.handleFilterChange=function(e){return t.setState({filter:e})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.nameContact.toLowerCase().includes(a)}))},t.deleteContacts=function(e){return function(){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))}},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Phonebooc"}),Object(m.jsx)(p,{onSubmit:this.addContacts}),Object(m.jsx)(C,{value:this.state.filter,onChange:function(e){return t.handleFilterChange(e.target.value)}}),Object(m.jsx)(f,{onDelete:this.deleteContacts,filteredContacts:this.getFilteredContacts()})]})}}]),n}(a.Component),g=v;o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.735a0e69.chunk.js.map