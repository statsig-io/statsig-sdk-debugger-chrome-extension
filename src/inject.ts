console.log("inject.ts", chrome);

const script = document.querySelector("#statsig-debugger-injected");
const extensionID = script?.getAttribute("data-id") ?? "";

const theWindow = window as any;

let new_js_sdk = false;

let instance = theWindow.__STATSIG_JS_SDK__?.instance;
if (!instance) {
  instance = theWindow.__STATSIG_SDK__?.instance;
}
if (!instance) {
  instance = theWindow.__STATSIG__?.instance();
  new_js_sdk = true;
}

if (!instance) {
  alert("Error: Unable to find Statsig SDK");
} else {
  const input = document.createElement("input");
  input.value = getValues();
  input.id = "statsig-debugger-data";
  input.type = "hidden";
  document.body.appendChild(input);
}

function getValues() {
  if (new_js_sdk) {
    return JSON.stringify({
      sdkKey: instance._sdkKey,
      userValues: instance._store._values,
      user: instance._user,
    });
  } else {
    return JSON.stringify({
      sdkKey: instance.sdkKey,
      userValues: instance.store.userValues,
      user: instance.identity.user,
    });
  }
}
