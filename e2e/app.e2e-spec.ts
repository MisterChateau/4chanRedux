import { RdxPage } from './app.po';

describe('rdx App', function() {
  let page: RdxPage;

  beforeEach(() => {
    page = new RdxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
