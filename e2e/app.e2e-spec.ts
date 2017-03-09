import { Sqlinlistng2Page } from './app.po';

describe('sqlinlistng2 App', () => {
  let page: Sqlinlistng2Page;

  beforeEach(() => {
    page = new Sqlinlistng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
