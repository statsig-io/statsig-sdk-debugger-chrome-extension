console.log("inject.ts", chrome);

const script = document.querySelector("#statsig-debugger-injected");
const extensionID = script?.getAttribute("data-id") ?? "";

const theWindow = window as any;

let instance = theWindow.__STATSIG_JS_SDK__?.instance;
if (!instance) {
  instance = theWindow.__STATSIG_SDK__?.instance;
}

if (!instance) {
  alert("Error: Unable to find Statsig SDK");
} else {
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
