/* global __ENABLE_SW__ */

(async () => {
  if (!("serviceWorker" in navigator)) return;

  const hasExistingSw = !!navigator.serviceWorker.controller;

  if (__ENABLE_SW__) {
    try {
      navigator.serviceWorker.register("/service-worker.js");
    } catch (error) {
      console.error("Error during service worker registration:", error);
    }
  } else if (hasExistingSw) {
    const registration = await navigator.serviceWorker.ready;
    registration.unregister();
  }
})();
