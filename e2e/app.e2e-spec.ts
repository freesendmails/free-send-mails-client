import { FreeSendMailsClientPage } from './app.po';

describe('free-send-mails-client App', () => {
  let page: FreeSendMailsClientPage;

  beforeEach(() => {
    page = new FreeSendMailsClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
