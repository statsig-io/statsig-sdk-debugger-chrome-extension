export type SdkState = {
  sdkKey: string;
  userValues: Record<string, unknown>;
  user: Record<string, unknown>;
};

export function extractSdkState(
  instance: any,
  isJsMonoClient: boolean
): SdkState {
  if (isJsMonoClient) {
    // getContext() hands back the raw initialize response. Reading
    // _store._values directly broke in @statsig/js-client 3.27.0, where it
    // became a V1/V2InitializeContainer wrapping the response in its own
    // _values, hiding the evaluations the console debugger reads.
    const context = instance.getContext();
    return {
      sdkKey: context.sdkKey,
      userValues: context.values,
      user: context.user,
    };
  }

  return {
    sdkKey: instance.sdkKey,
    userValues: instance.store.userValues,
    user: instance.identity.user,
  };
}
