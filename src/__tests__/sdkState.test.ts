import { extractSdkState, SdkState } from "../sdkState";

const INITIALIZE_RESPONSE = {
  feature_gates: { a_gate: { name: "a_gate", value: true, rule_id: "rule" } },
  dynamic_configs: { a_config: { name: "a_config", value: {} } },
  layer_configs: { a_layer: { name: "a_layer", value: {} } },
  has_updates: true,
  time: 1700000000,
};

const USER = { userID: "a-user" };

/**
 * The console debugger reads gates/configs/layers off the top level of the
 * stored values, so mirror how content_script.tsx flattens `userValues` before
 * writing to chrome.storage.
 */
function toStoredValues(state: SdkState) {
  return { debugID: "abc123", ...state.userValues, user: state.user };
}

/** @statsig/js-client, which exposes everything through getContext(). */
function jsMonoClient() {
  return {
    _sdkKey: "client-js-mono",
    _user: USER,
    // Since 3.27.0 the store wraps the response in a V1/V2InitializeContainer.
    _store: {
      _values: { _values: INITIALIZE_RESPONSE },
      getValues: () => INITIALIZE_RESPONSE,
    },
    getContext: () => ({
      sdkKey: "client-js-mono",
      values: INITIALIZE_RESPONSE,
      user: USER,
    }),
  };
}

/** Legacy statsig-js / statsig-react. */
function legacyClient() {
  return {
    sdkKey: "client-legacy",
    store: { userValues: INITIALIZE_RESPONSE },
    identity: { user: USER },
  };
}

describe.each([
  ["js-client-monorepo", jsMonoClient(), true, "client-js-mono"],
  ["legacy statsig-js", legacyClient(), false, "client-legacy"],
])("extractSdkState: %s", (_name, instance, isJsMonoClient, expectedSdkKey) => {
  const state = extractSdkState(instance, isJsMonoClient);

  it("reports the sdk key", () => {
    expect(state.sdkKey).toBe(expectedSdkKey);
  });

  it("reports the user", () => {
    expect(state.user).toEqual(USER);
  });

  it("exposes evaluations the console debugger can read", () => {
    expect(toStoredValues(state)).toEqual({
      debugID: "abc123",
      ...INITIALIZE_RESPONSE,
      user: USER,
    });
  });
});
