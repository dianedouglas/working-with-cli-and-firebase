import { CameronMusicPage } from './app.po';

describe('cameron-music App', function() {
  let page: CameronMusicPage;

  beforeEach(() => {
    page = new CameronMusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
