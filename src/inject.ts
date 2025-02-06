console.log("inject.ts", chrome);

const script = document.querySelector("#statsig-debugger-injected");
const extensionID = script?.getAttribute("data-id") ?? "";

const theWindow = window as any;

let isJsMonoClient = false;

let instance = theWindow.__STATSIG_JS_SDK__?.instance;
if (!instance) {
  instance = theWindow.__STATSIG_SDK__?.instance;
}
if (!instance && theWindow.__STATSIG__?.instances) {
  instance = attemptToSelectJsMonoInstances();
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

function attemptToSelectJsMonoInstances() {
  const instances = theWindow.__STATSIG__?.instances;
  const keys = Object.keys(instances);

  if (keys.length === 1) {
    return theWindow.__STATSIG__?.instance();
  }

  let message = "Multiple SDK instances found. Select an instance:\n\n";
  keys.forEach((key, index) => {
    message += `${index + 1}: ${key.slice(0,15)}...\n`;
  });

  message += "\nEnter the number of the instance you want to use, or leave blank to use the first one:";

  let selectedKey = null;
    
  const input = prompt(message)?.trim();

  if (!input) {
    selectedKey = keys[0];
  } else {
    const index = parseInt(input, 10) - 1;
    if (index >= 0 && index < keys.length && window.confirm(`Confirm selection: ${keys[index].slice(0, 15)}...?`)) {
      selectedKey = keys[index];
    } else {
      alert("Invalid selection. Defaulting to the first sdk Instance.");
      selectedKey = keys[0];
    }
  }

  return theWindow.__STATSIG__?.instance(selectedKey);
}