webpackJsonp([11],{"5ttS":function(t,e,o){"use strict";function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}o.d(e,"a",function(){return u});var i=o("KM04"),c=(o.n(i),o("ZMjw")),a=o.n(c),l=Object(i.h)("img",{class:"footer_logo",crossorigin:"anonymous",alt:"GDG Kuala Lumpur Logo","data-src":"https://res.cloudinary.com/shangyilim/image/upload/v1554985776/new-gdgkl.svg"}),s=Object(i.h)("a",{href:"https://events.gdgkl.org/ioxkl19/"},"I/O Extended KL 2019"),u=function(t){function e(e){var o=n(this,t.call(this,e));return"undefined"!=typeof window&&(o.io=new IntersectionObserver(function(t){t.filter(function(t){return t.isIntersecting}).filter(function(t){return t.target instanceof HTMLImageElement}).forEach(function(t){t.target.src=t.target.dataset.src})},{})),o}return r(e,t),e.prototype.componentDidMount=function(){var t=document.querySelector(".footer_logo");this.io&&t&&this.io.observe(t)},e.prototype.componentWillUnmount=function(){this.io&&this.io.disconnect()},e.prototype.render=function(t){var e=t.rootPath;return Object(i.h)("div",{class:a.a.footer},Object(i.h)("div",{class:a.a.footer_logo},l),Object(i.h)("div",{class:a.a.footer_links},Object(i.h)("div",{class:a.a.footer_link},s,Object(i.h)("a",{href:e+"schedule"},"Schedule"),Object(i.h)("a",{href:e+"speakers"},"Speakers"),Object(i.h)("a",{href:e+"faq"},"FAQ"),Object(i.h)("a",{href:e+"faq/communityguidelines"},"Community Guidelines"))))},e}(i.Component)},"7LhK":function(t){t.exports={social_footer:"social_footer__Onedb",social_body:"social_body__1kBPM",social_gif:"social_gif__-O59R"}},"8MUK":function(t,e,o){"use strict";function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),o.d(e,"default",function(){return u});var i=o("KM04"),c=(o.n(i),o("jaA0")),a=o("5ttS"),l=o("Dg08"),s=o.n(l),u=function(t){function e(){return n(this,t.apply(this,arguments))}return r(e,t),e.prototype.handleScroll=function(){var t=document.querySelector(".topappbar.mdc-top-app-bar");document.documentElement.scrollTop<56?t.setAttribute("top",!0):t.removeAttribute("top")},e.prototype.componentDidMount=function(){document.title="Event Map - I/O Extended 2019 Kuala Lumpur",window.addEventListener("scroll",this.handleScroll,{passive:!0}),this.handleScroll()},e.prototype.componentWillUnmount=function(){document.querySelector(".topappbar.mdc-top-app-bar").removeAttribute("top")},e.prototype.render=function(t){var e=t.rootPath,o=t.info;return Object(i.h)("div",{class:s.a.scrollbar},o&&o.map_image&&Object(i.h)("img",{class:s.a.mapImage,crossorigin:"anonymous",src:o.map_image}),Object(i.h)("div",{class:s.a.footer},Object(i.h)(c.a,{rootPath:e}),Object(i.h)(a.a,{rootPath:e})))},e}(i.Component)},Dg08:function(t){t.exports={scrollbar:"scrollbar__1AR9d",mapImage:"mapImage__2RxRp",cfp:"cfp__Teipx",footer:"footer__9sNVj"}},ZMjw:function(t){t.exports={footer:"footer__14P9B",footer_logo:"footer_logo__1TGSI",footer_link:"footer_link__1Xgw_"}},jaA0:function(t,e,o){"use strict";function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}o.d(e,"a",function(){return f});var i=o("KM04"),c=(o.n(i),o("7LhK")),a=o.n(c),l=Object(i.h)("p",null,"Keep in touch with GDG Kuala Lumpur for the latest I/O announcements"),s=Object(i.h)("div",null,Object(i.h)("a",{alt:"",href:"https://facebook.com/GDGKualaLumpur",target:"_blank",rel:"noopener noreferrer"},Object(i.h)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg"},Object(i.h)("title",null,"GDG Kuala Lumpur Facebook Page"),Object(i.h)("g",{fill:"none","fill-rule":"evenodd",transform:"translate(-52)"},Object(i.h)("g",{transform:"translate(52)",fill:"#1a73e8"},Object(i.h)("path",{d:"M17.1766667,30.88 L21.6726667,30.88 L21.6726667,19.9986667 L24.672,19.9986667 L25.0693333,16.2493333 L21.6726667,16.2493333 L21.6773333,14.372 C21.6773333,13.3946667 21.7706667,12.87 23.1733333,12.87 L25.048,12.87 L25.048,9.12 L22.048,9.12 C18.4446667,9.12 17.1766667,10.9393333 17.1766667,13.998 L17.1766667,16.2493333 L14.9306667,16.2493333 L14.9306667,19.9993333 L17.1766667,19.9993333 L17.1766667,30.88 L17.1766667,30.88 Z M20,40 C8.95466667,40 0,31.0453333 0,20 C0,8.954 8.95466667,0 20,0 C31.0453333,0 40,8.954 40,20 C40,31.0453333 31.0453333,40 20,40 Z"}))))),Object(i.h)("a",{href:"https://meetup.com/GDGKualaLumpur/",target:"_blank",rel:"noopener noreferrer"},Object(i.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40"},Object(i.h)("title",null,"GDG Cloud Kuala Lumpur Meetup"),Object(i.h)("circle",{fill:"#1a73e8",cx:"20",cy:"20",r:"20"}),Object(i.h)("path",{fill:"#fff",d:"M32,28.24c-.31-1.93-3.88-.45-4.1-2.56-.31-3,4.15-9.46,3.8-12A2.92,2.92,0,0,0,28.51,11a3.09,3.09,0,0,0-2.05.44.79.79,0,0,1-1.12,0,11.49,11.49,0,0,0-.9-.82,1.84,1.84,0,0,0-1-.4A3.09,3.09,0,0,0,22,10.3a3.89,3.89,0,0,0-1,.75c-.33.28-1.15,1.2-1.92.86-.33-.15-1.45-.71-2.27-1.06-1.56-.68-3.82.42-4.63,1.87-1.22,2.15-3.6,10.6-4,11.71a3.32,3.32,0,0,0,3.51,4.43,2.61,2.61,0,0,0,2.41-1.64c.39-.69,4-10.09,4.25-10.54a1.17,1.17,0,0,1,1.39-.48,1.27,1.27,0,0,1,.58,1.42c-.13.9-2.67,6.63-2.77,7.28-.16,1.1.36,1.71,1.51,1.77a2.2,2.2,0,0,0,2.18-1.41c.35-.65,4.35-8.67,4.7-9.2s.71-.78,1.11-.76.8.1.68,1-3.35,6.78-3.68,8.22a4.26,4.26,0,0,0,2.34,4.73C27.51,29.81,32.37,30.74,32,28.24Z"}))),Object(i.h)("a",{href:"https://gdgmy-slack.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},Object(i.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24"},Object(i.h)("title",null,"GDG Malaysia Slack"),Object(i.h)("circle",{fill:"#1a73e8",cx:"12",cy:"12",r:"12"}),Object(i.h)("path",{fill:"#fff",d:"M18.82,14.06l-1.55.52.54,1.61A1.24,1.24,0,0,1,17,17.76,1.24,1.24,0,0,1,15.43,17l-.54-1.61-3.21,1.07.54,1.61a1.25,1.25,0,0,1-.79,1.58,1.34,1.34,0,0,1-.44.06,1.25,1.25,0,0,1-1.15-.85L9.3,17.22l-1.56.53a1.67,1.67,0,0,1-.44.06A1.28,1.28,0,0,1,6.15,17a1.22,1.22,0,0,1,.78-1.57l1.56-.53-1-3.09L6,12.29a1.07,1.07,0,0,1-.43.06,1.24,1.24,0,0,1-1.14-.84,1.26,1.26,0,0,1,.8-1.58l1.56-.52L6.2,7.81A1.25,1.25,0,0,1,8.57,7l.54,1.61L12.3,7.55l-.54-1.61a1.26,1.26,0,0,1,.79-1.57,1.24,1.24,0,0,1,1.57.79l.54,1.62,1.56-.51A1.24,1.24,0,0,1,17,8.63l-1.56.52,1,3.09L18,11.72a1.25,1.25,0,0,1,.8,2.37Z"}),Object(i.h)("path",{fill:"#1a73e8",d:"M9.88,11l1,3.08L14.12,13l-1-3.07L9.88,11Z"})))),u=Object(i.h)("img",{class:"social_gif",crossorigin:"anonymous",alt:"I/O 2019 Hashtag","data-src":"https://res.cloudinary.com/limhenry/image/upload/v1555595550/ioxkl19_pwa/io19_hashtag.gif"}),f=function(t){function e(e){var o=n(this,t.call(this,e));return"undefined"!=typeof window&&(o.io=new IntersectionObserver(function(t){t.filter(function(t){return t.isIntersecting}).filter(function(t){return t.target instanceof HTMLImageElement}).forEach(function(t){t.target.src=t.target.dataset.src})},{})),o}return r(e,t),e.prototype.componentDidMount=function(){var t=document.querySelector(".social_gif");this.io&&t&&this.io.observe(t)},e.prototype.componentWillUnmount=function(){this.io&&this.io.disconnect()},e.prototype.render=function(){return Object(i.h)("div",{class:a.a.social_footer},Object(i.h)("div",{class:a.a.social_body},l,s),Object(i.h)("div",{class:a.a.social_gif},u))},e}(i.Component)}});
//# sourceMappingURL=route-map.chunk.06285.js.map