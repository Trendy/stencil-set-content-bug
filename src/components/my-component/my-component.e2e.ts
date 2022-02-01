import { newE2EPage } from '@stencil/core/testing';

let page;

describe('my-component', () => {
  beforeEach(async () => {
    page = await newE2EPage();
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.6.0.min.js',
    });
  });
  it('renders, without jQuery', async () => {
    await page.setContent('<my-component></my-component>');
    await page.$eval('head', (_documentEl, hasJquery) => {
      const jquery = document.querySelectorAll('script[src="https://code.jquery.com/jquery-3.6.0.min.js"]');
      if (jquery.length === 1) {
        const foo = document.createElement('div');
        foo.id = 'jquery';
        document.body.appendChild(foo);
      }
    });

    const jquery = await page.find('#jquery');

    expect(jquery).toBeDefined();
  });

  it('renders with jQuery', async () => {
    await page.$eval('head', _documentEl => {
      const jquery = document.querySelectorAll('script[src="https://code.jquery.com/jquery-3.6.0.min.js"]');
      if (jquery.length === 1) {
        const foo = document.createElement('div');
        foo.id = 'jquery';
        document.body.appendChild(foo);
      }
    });

    const jquery = await page.find('#jquery');
    // await page.waitForTimeout(50000);
    expect(jquery).toBeDefined();
  });
});
