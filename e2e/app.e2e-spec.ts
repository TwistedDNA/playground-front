import { PlaygroundFrontPage } from './app.po';

describe('playground-front App', function() {
  let page: PlaygroundFrontPage;

  beforeEach(() => {
    page = new PlaygroundFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
