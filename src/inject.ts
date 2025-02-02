console.log("inject.ts", chrome);

const script = document.querySelector("#statsig-debugger-injected");
const extensionID = script?.getAttribute("data-id") ?? "";

const theWindow = window as any;

let isJsMonoClient = false;

let instance = theWindow.__STATSIG_JS_SDK__?.instance;
if (!instance) {
  instance = theWindow.__STATSIG_SDK__?.instance;
}
if (!instance) {
  if (Object.keys(theWindow.__STATSIG__?.instances).length > 1) {
    const instanceKey = window.prompt("Multiple sdk instances found. Please enter the sdk key for the instance you are debugging for: (if left blank, will use the first instance)");
    instance = theWindow.__STATSIG__?.instance(instanceKey);
  } else {
    instance = theWindow.__STATSIG__?.instance();
  }
  instance && (isJsMonoClient = true);
}

if (!instance) {
  alert("Error: Unable to find Statsig SDK");
} else {
  const input = document.createElement("input");
  input.value = JSON.stringify({
    sdkKey: isJsMonoClient ? instance._sdkKey : instance.sdkKey,
    userValues: isJsMonoClient ? instance._store._values : instance.store.userValues,
    user: isJsMonoClient ? instance._user : instance.identity.user,
  });
  input.id = "statsig-debugger-data";
  input.type = "hidden";
  document.body.appendChild(input);
}
