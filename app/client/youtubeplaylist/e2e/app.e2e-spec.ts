import { YoutubeplaylistPage } from './app.po';

describe('youtubeplaylist App', () => {
  let page: YoutubeplaylistPage;

  beforeEach(() => {
    page = new YoutubeplaylistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
