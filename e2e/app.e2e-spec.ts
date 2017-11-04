import { MydnaproExtendPage } from './app.po';

describe('mydnapro-extend App', () => {
  let page: MydnaproExtendPage;

  beforeEach(() => {
    page = new MydnaproExtendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
