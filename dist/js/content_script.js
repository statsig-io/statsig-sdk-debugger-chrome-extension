/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content_script.tsx":
/*!********************************!*\
  !*** ./src/content_script.tsx ***!
  \********************************/
/***/ (function() {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
chrome.storage.local.get(["values"]).then((result) => {
    var _a;
    if (typeof ((_a = result === null || result === void 0 ? void 0 : result.values) === null || _a === void 0 ? void 0 : _a.debugID) !== "string" ||
        !location.search.includes(`debugID=${result.values.debugID}`)) {
        return;
    }
    const { feature_gates, dynamic_configs, layer_configs, user } = result.values;
    const input = document.createElement("input");
    input.value = JSON.stringify({
        gates: feature_gates,
        configs: dynamic_configs,
        layers: layer_configs,
        user,
    });
    input.id = "__statsig_client_debugger_state__";
    input.type = "hidden";
    document.body.appendChild(input);
});
function extractAndOpen(attempt) {
    setTimeout(() => {
        const input = document.querySelector("#statsig-debugger-data");
        if (input instanceof HTMLInputElement) {
            const data = JSON.parse(input.value);
            input.remove();
            console.log("Extracted Data", data);
            const debugID = (Math.random() + 1).toString(36).substring(2);
            chrome.storage.local
                .set({ values: Object.assign(Object.assign({ debugID }, data.userValues), { user: data.user }) })
                .then(() => {
                var _a;
                const url = `https://console.statsig.com/client_sdk_debugger_redirect?sdkKey=${data.sdkKey}&debugID=${debugID}`;
                // const url = `http://localhost:3000/client_sdk_debugger_redirect?sdkKey=${data.sdkKey}&debugID=${debugID}`;
                (_a = window
                    .open(url, `statsig-debugger-${debugID}`, "directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=400,height=600")) === null || _a === void 0 ? void 0 : _a.focus();
            });
            return;
        }
        if (attempt > 0) {
            extractAndOpen(attempt - 1);
        }
    }, 100);
}
chrome.runtime.onMessage.addListener((request) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (request.action !== "open_debugger") {
        return;
    }
    const url = chrome.runtime.getURL("js/inject.js");
    (_a = document.querySelector("#statsig-debugger-injected")) === null || _a === void 0 ? void 0 : _a.remove();
    const body = document.getElementsByTagName("body")[0];
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", url);
    script.setAttribute("id", "statsig-debugger-injected");
    script.setAttribute("data-id", chrome.runtime.id);
    body.appendChild(script);
    extractAndOpen(5);
}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/content_script.tsx"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudF9zY3JpcHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxzQkFBc0I7QUFDbkU7QUFDQTtBQUNBLFlBQVksc0RBQXNEO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNDQUFzQyxTQUFTLHNCQUFzQixpQkFBaUIsR0FBRztBQUNoSDtBQUNBO0FBQ0EsK0ZBQStGLFlBQVksV0FBVyxRQUFRO0FBQzlILDRGQUE0RixZQUFZLFdBQVcsUUFBUTtBQUMzSDtBQUNBLG1EQUFtRCxRQUFRO0FBQzNELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7VUVuRUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXRzaWctc2RrLWRlYnVnZ2VyLWV4dGVuc2lvbi8uL3NyYy9jb250ZW50X3NjcmlwdC50c3giLCJ3ZWJwYWNrOi8vc3RhdHNpZy1zZGstZGVidWdnZXItZXh0ZW5zaW9uL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3RhdHNpZy1zZGstZGVidWdnZXItZXh0ZW5zaW9uL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zdGF0c2lnLXNkay1kZWJ1Z2dlci1leHRlbnNpb24vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1widmFsdWVzXCJdKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHR5cGVvZiAoKF9hID0gcmVzdWx0ID09PSBudWxsIHx8IHJlc3VsdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzdWx0LnZhbHVlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRlYnVnSUQpICE9PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICFsb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoYGRlYnVnSUQ9JHtyZXN1bHQudmFsdWVzLmRlYnVnSUR9YCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGZlYXR1cmVfZ2F0ZXMsIGR5bmFtaWNfY29uZmlncywgbGF5ZXJfY29uZmlncywgdXNlciB9ID0gcmVzdWx0LnZhbHVlcztcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZ2F0ZXM6IGZlYXR1cmVfZ2F0ZXMsXG4gICAgICAgIGNvbmZpZ3M6IGR5bmFtaWNfY29uZmlncyxcbiAgICAgICAgbGF5ZXJzOiBsYXllcl9jb25maWdzLFxuICAgICAgICB1c2VyLFxuICAgIH0pO1xuICAgIGlucHV0LmlkID0gXCJfX3N0YXRzaWdfY2xpZW50X2RlYnVnZ2VyX3N0YXRlX19cIjtcbiAgICBpbnB1dC50eXBlID0gXCJoaWRkZW5cIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlucHV0KTtcbn0pO1xuZnVuY3Rpb24gZXh0cmFjdEFuZE9wZW4oYXR0ZW1wdCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhdHNpZy1kZWJ1Z2dlci1kYXRhXCIpO1xuICAgICAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXh0cmFjdGVkIERhdGFcIiwgZGF0YSk7XG4gICAgICAgICAgICBjb25zdCBkZWJ1Z0lEID0gKE1hdGgucmFuZG9tKCkgKyAxKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpO1xuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWxcbiAgICAgICAgICAgICAgICAuc2V0KHsgdmFsdWVzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBkZWJ1Z0lEIH0sIGRhdGEudXNlclZhbHVlcyksIHsgdXNlcjogZGF0YS51c2VyIH0pIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9jb25zb2xlLnN0YXRzaWcuY29tL2NsaWVudF9zZGtfZGVidWdnZXJfcmVkaXJlY3Q/c2RrS2V5PSR7ZGF0YS5zZGtLZXl9JmRlYnVnSUQ9JHtkZWJ1Z0lEfWA7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jbGllbnRfc2RrX2RlYnVnZ2VyX3JlZGlyZWN0P3Nka0tleT0ke2RhdGEuc2RrS2V5fSZkZWJ1Z0lEPSR7ZGVidWdJRH1gO1xuICAgICAgICAgICAgICAgIChfYSA9IHdpbmRvd1xuICAgICAgICAgICAgICAgICAgICAub3Blbih1cmwsIGBzdGF0c2lnLWRlYnVnZ2VyLSR7ZGVidWdJRH1gLCBcImRpcmVjdG9yaWVzPW5vLHRpdGxlYmFyPW5vLHRvb2xiYXI9bm8sbG9jYXRpb249bm8sc3RhdHVzPW5vLG1lbnViYXI9bm8sc2Nyb2xsYmFycz1ubyxyZXNpemFibGU9bm8sd2lkdGg9NDAwLGhlaWdodD02MDBcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb2N1cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dGVtcHQgPiAwKSB7XG4gICAgICAgICAgICBleHRyYWN0QW5kT3BlbihhdHRlbXB0IC0gMSk7XG4gICAgICAgIH1cbiAgICB9LCAxMDApO1xufVxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHJlcXVlc3QuYWN0aW9uICE9PSBcIm9wZW5fZGVidWdnZXJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHVybCA9IGNocm9tZS5ydW50aW1lLmdldFVSTChcImpzL2luamVjdC5qc1wiKTtcbiAgICAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXRzaWctZGVidWdnZXItaW5qZWN0ZWRcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUoKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2phdmFzY3JpcHRcIik7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZShcInNyY1wiLCB1cmwpO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN0YXRzaWctZGVidWdnZXItaW5qZWN0ZWRcIik7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgY2hyb21lLnJ1bnRpbWUuaWQpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICBleHRyYWN0QW5kT3Blbig1KTtcbn0pKTtcbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvY29udGVudF9zY3JpcHQudHN4XCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=