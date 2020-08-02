# html-ready [![devDependency Status](https://david-dm.org/1000ch/html-ready/dev-status.svg)](https://david-dm.org/1000ch/html-ready?type=dev)

The promise to ensure window/document is ready.

## Install

Using npm:

```bash
$ npm install html-ready
```

## Usage

```javascript
import { windowReady, documentReady } from 'https://unpkg.com/html-ready';

documentReady().then(() => {
  console.log('document DOMContentLoaded event is fired');
});

windowReady().then(() => {
  console.log('window load event is fired');
});
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
