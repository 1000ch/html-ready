const listenerOptions: AddEventListenerOptions = {
  capture: true,
  once: true,
  passive: true
};

export const documentReady: Promise<Event | undefined> = new Promise((resolve) => {
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    resolve(undefined);
  } else {
    document.addEventListener('DOMContentLoaded', event => resolve(event), listenerOptions);
  }
});

export const windowReady: Promise<Event | undefined> = new Promise((resolve) => {
  if (document.readyState === 'complete') {
    resolve(undefined);
  } else {
    window.addEventListener('load', event => resolve(event), listenerOptions);
  }
});
