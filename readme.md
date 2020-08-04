# html-ready ![test](https://github.com/1000ch/html-ready/workflows/test/badge.svg?branch=master) [![devDependency Status](https://david-dm.org/1000ch/html-ready/dev-status.svg)](https://david-dm.org/1000ch/html-ready?type=dev)

The promise to ensure window/document is ready.

## Install

Using npm:

```bash
$ npm install html-ready
```

## Usage

```javascript
import { documentReady, windowReady } from 'https://unpkg.com/html-ready';

documentReady.then(() => {
  console.log('document DOMContentLoaded event is fired');
});

windowReady.then(() => {
  console.log('window load event is fired');
});
```

## API

### documentReady: Promise<[Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) | undefined>

`documentReady` is a `Promise` that is resolved if the HTML document has been loaded and parsed. If the hole page has not loaded, the timing is equivalent to [the `DOMContentLoaded` event of document](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event).

### windowReady: Promise<[Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) | undefined>

`windowReady` is a `Promise` that is resolved if the hole page has been loaded. If the hole page has not been loaded, the timing is equivalent to [the `load` event of window](https://developer.mozilla.org/docs/Web/API/Window/load_event).

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
