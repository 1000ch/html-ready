export const windowReady = () => new Promise((resolve) => {
  if (document.readyState === 'complete') {
    resolve();
  } else {
    window.addEventListener('load', resolve);
  }
});

export const documentReady = () => new Promise((resolve) => {
  if (document.readyState === 'interactive') {
    resolve();
  } else {
    document.addEventListener('DOMContentLoaded', resolve);
  }
});
