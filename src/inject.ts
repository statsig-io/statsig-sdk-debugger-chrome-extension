console.log("inject.ts", chrome);

const script = document.querySelector("#statsig-debugger-injected");
const extensionID = script?.getAttribute("data-id") ?? "";

const theWindow = window as any;

// True if we're using the new JS SDK at
// https://github.com/statsig-io/js-client-monorepo
// vs the old deprecated libraries
let isJsClientV3 = false;

let instance = theWindow.__STATSIG_JS_SDK__?.instance;
if (!instance) {
  instance = theWindow.__STATSIG_SDK__?.instance;
}
if (!instance) {
  instance = theWindow.__STATSIG__?.instance();
  instance && (isJsClientV3 = true);
}

if (!instance) {
  alert("Error: Unable to find Statsig SDK");
} else {
  const input = document.createElement("input");
  input.value = JSON.stringify({
    sdkKey: isJsClientV3 ? instance._sdkKey : instance.sdkKey,
    userValues: isJsClientV3 ? instance._store._values : instance.store.userValues,
    user: isJsClientV3 ? instance._user : instance.identity.user,
  });
  input.id = "statsig-debugger-data";
  input.type = "hidden";
  document.body.appendChild(input);
}
