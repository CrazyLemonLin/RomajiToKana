import { RomajiToKanaPage } from './app.po';

describe('romaji-to-kana App', () => {
  let page: RomajiToKanaPage;

  beforeEach(() => {
    page = new RomajiToKanaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to cyl!!'))
      .then(done, done.fail);
  });
});
