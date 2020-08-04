const listenerOptions = {
  capture: true,
  once: true,
  passive: true
};

export const documentReady = new Promise((resolve) => {
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    resolve();
  } else {
    document.addEventListener('DOMContentLoaded', event => resolve(event), listenerOptions);
  }
});

export const windowReady = new Promise((resolve) => {
  if (document.readyState === 'complete') {
    resolve();
  } else {
    window.addEventListener('load', event => resolve(event), listenerOptions);
  }
});
