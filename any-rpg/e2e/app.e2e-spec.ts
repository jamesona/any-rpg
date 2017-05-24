import { AnyRpgPage } from './app.po';

describe('any-rpg App', () => {
  let page: AnyRpgPage;

  beforeEach(() => {
    page = new AnyRpgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
