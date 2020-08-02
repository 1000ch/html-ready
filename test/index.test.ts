import { fireEvent } from '@testing-library/dom';
import { windowReady, documentReady } from '../src/index';

describe('documentReady', () => {
  test('should be function', () => {
    expect(documentReady).toBeDefined();
  });

  test('should not resolve after document DOMContentLoaded is fired', () => {
    expect(documentReady()).resolves.not.toBeCalled();
    expect(documentReady()).rejects.toBeCalled();
  });

  test('should resolve after document DOMContentLoaded is fired', () => {
    expect(documentReady()).resolves.toBeCalled();
    expect(documentReady()).rejects.not.toBeCalled();

    fireEvent(document, new Event('DOMContentLoaded', {
      bubbles: true,
      cancelable: true
    }));
  });
});


describe('windowReady', () => {
  test('should be function', () => {
    expect(windowReady).toBeDefined();
  });

  test('should not resolve after document load is fired', () => {
    expect(windowReady()).resolves.not.toBeCalled();
    expect(windowReady()).rejects.toBeCalled();
  });

  test('should resolve after document load is fired', () => {
    expect(windowReady()).resolves.toBeCalled();
    expect(windowReady()).rejects.not.toBeCalled();

    fireEvent(window, new Event('load', {
      bubbles: true,
      cancelable: true
    }));
  });
});
