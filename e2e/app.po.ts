import { browser, by, element } from 'protractor';

export class RomajiToKanaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cyl-root h1')).getText();
  }
}
