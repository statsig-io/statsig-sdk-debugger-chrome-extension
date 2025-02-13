chrome.storage.local.get(["values"]).then((result) => {
  if (
    typeof result?.values?.debugID !== "string" ||
    !location.search.includes(`debugID=${result.values.debugID}`)
  ) {
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

function extractAndOpen(attempt: number) {
  setTimeout(() => {
    const input = document.querySelector("#statsig-debugger-data");
    if (input instanceof HTMLInputElement) {
      const data: {
        sdkKey: string;
        userValues: Record<string, unknown>;
        user: Record<string, unknown>;
      } = JSON.parse(input.value);
      input.remove();
      const debugID = (Math.random() + 1).toString(36).substring(2);

      chrome.storage.local
        .set({ values: { debugID, ...data.userValues, user: data.user } })
        .then(() => {
          const url = `https://console.statsig.com/client_sdk_debugger_redirect?sdkKey=${data.sdkKey}&debugID=${debugID}`;
          // const url = `http://localhost:3000/client_sdk_debugger_redirect?sdkKey=${data.sdkKey}&debugID=${debugID}`;
          window
            .open(
              url,
              `statsig-debugger-${debugID}`,
              "directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=400,height=600"
            )
            ?.focus();
        });

      return;
    }

    if (attempt > 0) {
      extractAndOpen(attempt - 1);
    }
  }, 100);
}

chrome.runtime.onMessage.addListener(
  async (request: Record<string, unknown>) => {
    if (request.action !== "open_debugger") {
      return;
    }

    const url = chrome.runtime.getURL("js/inject.js");

    document.querySelector("#statsig-debugger-injected")?.remove();

    const body = document.getElementsByTagName("body")[0];
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", url);
    script.setAttribute("id", "statsig-debugger-injected");
    script.setAttribute("data-id", chrome.runtime.id);
    body.appendChild(script);

    extractAndOpen(5);
  }
);
