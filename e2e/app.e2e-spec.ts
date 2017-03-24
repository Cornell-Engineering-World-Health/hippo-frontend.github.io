import { HippoFrontendPage } from './app.po';

describe('hippo-frontend App', function() {
  let page: HippoFrontendPage;

  beforeEach(() => {
    page = new HippoFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
