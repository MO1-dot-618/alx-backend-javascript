!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"renderTable",(function(){return r}));var r=function(e){var t=document.createElement("table");t.style.width="500px",t.style.marginLeft="auto",t.style.marginRight="auto";var n=document.createElement("tr");n.style.backgroundColor="#f2f2f2",t.appendChild(n);var r=document.createElement("th");r.textContent="First Name",r.style.padding="8px",r.style.textAlign="center",n.appendChild(r);var o=document.createElement("th");o.textContent="Location",o.style.padding="8px",o.style.textAlign="center",n.appendChild(o);for(var a=0,l=e;a<l.length;a++){var d=l[a],i=document.createElement("tr");i.style.borderBottom="1px solid #ddd",t.appendChild(i);var u=document.createElement("td");u.textContent=d.firstName,i.appendChild(u);var c=document.createElement("td");c.textContent=d.location,i.appendChild(c)}document.body.appendChild(t)};r([{firstName:"rah",lastName:"dan",age:20,location:"zagreb"},{firstName:"sah",lastName:"san",age:22,location:"tagreb"}])}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsInJlbmRlclRhYmxlIiwic3R1ZGVudHNMaXN0IiwidGFibGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIndpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiaGVhZFJvdyIsImJhY2tncm91bmRDb2xvciIsImFwcGVuZENoaWxkIiwiZmlyc3ROYW1lSGVhZGVyIiwidGV4dENvbnRlbnQiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwibG9jYXRpb25IZWFkZXIiLCJzdHVkZW50Iiwic3R1ZGVudFJvdyIsImJvcmRlckJvdHRvbSIsImZpcnN0TmFtZUNlbGwiLCJmaXJzdE5hbWUiLCJsb2NhdGlvbkNlbGwiLCJsb2NhdGlvbiIsImJvZHkiLCJsYXN0TmFtZSIsImFnZSJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgs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Q0FDcEJxQixVQUFXLE1BQ1hJLFNBQVUsTUFDVkMsSUFBSyxHQUNMSCxTQUFVLFVBRVcsQ0FDckJGLFVBQVcsTUFDWEksU0FBVSxNQUNWQyxJQUFLLEdBQ0xILFNBQVUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGludGVyZmFjZSBTdHVkZW50IHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGFnZTogbnVtYmVyO1xuICBsb2NhdGlvbjogc3RyaW5nO1xufVxuY29uc3QgcmVkczogU3R1ZGVudCA9IHtcbiAgZmlyc3ROYW1lOiAncmFoJyxcbiAgbGFzdE5hbWU6ICdkYW4nLFxuICBhZ2U6IDIwLFxuICBsb2NhdGlvbjogJ3phZ3JlYicsXG59XG5jb25zdCByYWRhczogU3R1ZGVudCA9IHtcbiAgZmlyc3ROYW1lOiAnc2FoJyxcbiAgbGFzdE5hbWU6ICdzYW4nLFxuICBhZ2U6IDIyLFxuICBsb2NhdGlvbjogJ3RhZ3JlYicsXG59XG5jb25zdCBzdHVkZW50c0xpc3Q6IFN0dWRlbnRbXSA9IFtyZWRzICxyYWRhc107XG5cbmV4cG9ydCBjb25zdCByZW5kZXJUYWJsZSA9IChzdHVkZW50c0xpc3Q6IEFycmF5PFN0dWRlbnQ+KTogdm9pZCA9PiAge1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gIHRhYmxlLnN0eWxlLndpZHRoID0gJzUwMHB4JztcbiAgdGFibGUuc3R5bGUubWFyZ2luTGVmdCA9ICdhdXRvJztcbiAgdGFibGUuc3R5bGUubWFyZ2luUmlnaHQgPSAnYXV0byc7XG5cbiAgY29uc3QgaGVhZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gIGhlYWRSb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmMmYyZjInO1xuICB0YWJsZS5hcHBlbmRDaGlsZChoZWFkUm93KTtcblxuICAvLyBDcmVhdGUgdGFibGUgaGVhZGVycyB3aXRoIHN0eWxpbmdcbiAgY29uc3QgZmlyc3ROYW1lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgZmlyc3ROYW1lSGVhZGVyLnRleHRDb250ZW50ID0gJ0ZpcnN0IE5hbWUnO1xuICBmaXJzdE5hbWVIZWFkZXIuc3R5bGUucGFkZGluZyA9ICc4cHgnO1xuICBmaXJzdE5hbWVIZWFkZXIuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gIGhlYWRSb3cuYXBwZW5kQ2hpbGQoZmlyc3ROYW1lSGVhZGVyKTtcblxuICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcbiAgbG9jYXRpb25IZWFkZXIuc3R5bGUucGFkZGluZyA9ICc4cHgnO1xuICBsb2NhdGlvbkhlYWRlci5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgaGVhZFJvdy5hcHBlbmRDaGlsZChsb2NhdGlvbkhlYWRlcik7XG5cbiAgZm9yIChjb25zdCBzdHVkZW50IG9mIHN0dWRlbnRzTGlzdCkge1xuICAgIGNvbnN0IHN0dWRlbnRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIHN0dWRlbnRSb3cuc3R5bGUuYm9yZGVyQm90dG9tID0gJzFweCBzb2xpZCAjZGRkJztcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChzdHVkZW50Um93KTtcblxuICAgIGNvbnN0IGZpcnN0TmFtZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGZpcnN0TmFtZUNlbGwudGV4dENvbnRlbnQgPSBzdHVkZW50LmZpcnN0TmFtZTtcbiAgICBzdHVkZW50Um93LmFwcGVuZENoaWxkKGZpcnN0TmFtZUNlbGwpO1xuXG4gICAgY29uc3QgbG9jYXRpb25DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBsb2NhdGlvbkNlbGwudGV4dENvbnRlbnQgPSBzdHVkZW50LmxvY2F0aW9uO1xuICAgIHN0dWRlbnRSb3cuYXBwZW5kQ2hpbGQobG9jYXRpb25DZWxsKTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFibGUpO1xufVxuXG5yZW5kZXJUYWJsZShzdHVkZW50c0xpc3QpOyJdLCJzb3VyY2VSb290IjoiIn0=