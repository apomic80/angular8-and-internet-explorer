((global: any) => {
  'use strict';

  const notInBrowser = !global.HTMLElement || !HTMLElement.prototype;
  const alreadyDefined = 'hidden' in HTMLElement.prototype;
  const notPossibleToImplement = typeof Object.defineProperty === 'undefined';

  if (notInBrowser || alreadyDefined || notPossibleToImplement) {
    return;
  }

  Object.defineProperty(HTMLElement.prototype, 'hidden', {
    get() {
      return this.hasAttribute('hidden');
    },
    set(value) {
      if (value) {
        this.setAttribute('hidden', '');
      } else {
        this.removeAttribute('hidden');
      }

      return value;
    },
  });
})(typeof window === 'undefined' ? this : window);
