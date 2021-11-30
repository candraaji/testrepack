import React from "react";
import { Text } from "react-native";
import { ChunkManager } from "@callstack/repack/client";

async function loadComponent(scope, module) {
  // Initializes the share scope. This fills it with known provided modules from this build and all remotes
  await __webpack_init_sharing__("default");
  // Download and execute container
  await ChunkManager.loadChunk(scope, "main");

  const container = self[scope];

  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);
  const factory = await container.get(module);
  const exports = factory();
  return exports;
}

const App1 = React.lazy(() => loadComponent("app1", "./App.js"));

export default AppOne = (props) => {
  return (
    <React.Suspense
      fallback={<Text style={{ textAlign: "center" }}>Loading...</Text>}
    >
      <App1 />
    </React.Suspense>
  );
};
