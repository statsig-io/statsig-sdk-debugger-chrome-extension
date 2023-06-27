/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/

console.log("background", chrome);
chrome.action.onClicked.addListener((tab) => {
    if (!tab.active || !tab.id) {
        throw new Error("Failed to get active tab ID.");
    }
    chrome.tabs.sendMessage(tab.id, {
        action: "open_debugger",
    });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGF0c2lnLXNkay1kZWJ1Z2dlci1leHRlbnNpb24vLi9zcmMvYmFja2dyb3VuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmNvbnNvbGUubG9nKFwiYmFja2dyb3VuZFwiLCBjaHJvbWUpO1xuY2hyb21lLmFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoKHRhYikgPT4ge1xuICAgIGlmICghdGFiLmFjdGl2ZSB8fCAhdGFiLmlkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgYWN0aXZlIHRhYiBJRC5cIik7XG4gICAgfVxuICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwge1xuICAgICAgICBhY3Rpb246IFwib3Blbl9kZWJ1Z2dlclwiLFxuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=