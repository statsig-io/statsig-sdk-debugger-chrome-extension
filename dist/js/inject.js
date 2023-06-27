/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/inject.ts ***!
  \***********************/

var _a, _b, _c;
console.log("inject.ts", chrome);
const script = document.querySelector("#statsig-debugger-injected");
const extensionID = (_a = script === null || script === void 0 ? void 0 : script.getAttribute("data-id")) !== null && _a !== void 0 ? _a : "";
const theWindow = window;
let instance = (_b = theWindow.__STATSIG_JS_SDK__) === null || _b === void 0 ? void 0 : _b.instance;
if (!instance) {
    instance = (_c = theWindow.__STATSIG_SDK__) === null || _c === void 0 ? void 0 : _c.instance;
}
if (!instance) {
    alert("Error: Unable to find Statsig SDK");
}
else {
    const input = document.createElement("input");
    input.value = JSON.stringify({
        sdkKey: instance.sdkKey,
        userValues: instance.store.userValues,
        user: instance.identity.user,
    });
    input.id = "statsig-debugger-data";
    input.type = "hidden";
    document.body.appendChild(input);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhdHNpZy1zZGstZGVidWdnZXItZXh0ZW5zaW9uLy4vc3JjL2luamVjdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfYSwgX2IsIF9jO1xuY29uc29sZS5sb2coXCJpbmplY3QudHNcIiwgY2hyb21lKTtcbmNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhdHNpZy1kZWJ1Z2dlci1pbmplY3RlZFwiKTtcbmNvbnN0IGV4dGVuc2lvbklEID0gKF9hID0gc2NyaXB0ID09PSBudWxsIHx8IHNjcmlwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2NyaXB0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFwiXCI7XG5jb25zdCB0aGVXaW5kb3cgPSB3aW5kb3c7XG5sZXQgaW5zdGFuY2UgPSAoX2IgPSB0aGVXaW5kb3cuX19TVEFUU0lHX0pTX1NES19fKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaW5zdGFuY2U7XG5pZiAoIWluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UgPSAoX2MgPSB0aGVXaW5kb3cuX19TVEFUU0lHX1NES19fKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaW5zdGFuY2U7XG59XG5pZiAoIWluc3RhbmNlKSB7XG4gICAgYWxlcnQoXCJFcnJvcjogVW5hYmxlIHRvIGZpbmQgU3RhdHNpZyBTREtcIik7XG59XG5lbHNlIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc2RrS2V5OiBpbnN0YW5jZS5zZGtLZXksXG4gICAgICAgIHVzZXJWYWx1ZXM6IGluc3RhbmNlLnN0b3JlLnVzZXJWYWx1ZXMsXG4gICAgICAgIHVzZXI6IGluc3RhbmNlLmlkZW50aXR5LnVzZXIsXG4gICAgfSk7XG4gICAgaW5wdXQuaWQgPSBcInN0YXRzaWctZGVidWdnZXItZGF0YVwiO1xuICAgIGlucHV0LnR5cGUgPSBcImhpZGRlblwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9