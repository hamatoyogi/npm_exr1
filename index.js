var _ = require('underscore');
// console.log(underscore);

function html(content) {
	var createHtml = _.template("<html><head><title></title></head><body> <%=content %></body></html>");
	createHtml({content: content});
}


function h1(content) {
	var createH1 = _.template("<h1><%=content %></h1>");
	createH1({content: content});
}

function p(content) {
	var createP = _.template("<p> <%= content </p>");
	createP({content:content});
}

function ul(lisArr) {
	var createUl = _.template(`<ul> <% for (var i=0; i<lisArr.length; i++) { %>
		<li><%=lisArr[i] %></li>
		</ul>
		<% } %>`);
}

module.exports = {
	html:html,
	h1:h1,
	p:p,
	ul:ul
};
