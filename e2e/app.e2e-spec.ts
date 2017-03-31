import { LifecycleHooksDoCheckPage } from './app.po';

describe('lifecycle-hooks-do-check App', function() {
  let page: LifecycleHooksDoCheckPage;

  beforeEach(() => {
    page = new LifecycleHooksDoCheckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
