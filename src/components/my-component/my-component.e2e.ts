import { newE2EPage } from '@stencil/core/testing';

let page;

describe('my-component', () => {
  beforeEach(async () => {
    page = await newE2EPage();
    await page.addScriptTag({
      url: 'https://code.jquery.com/jquery-3.6.0.min.js',
      id: 'jquery',
    });
  });
  it('renders, without jQuery', async () => {
    await page.setContent('<my-component></my-component>');

    const jquery = await page.find('#jquery');

    expect(jquery).not.toEqual(null);
  });

  it('renders with jQuery', async () => {
    const jquery = await page.find('#jquery');

    expect(jquery).not.toEqual(null);
  });
});
