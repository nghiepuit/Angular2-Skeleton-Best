import { ProjectRouterPage } from './app.po';

describe('project-router App', () => {
  let page: ProjectRouterPage;

  beforeEach(() => {
    page = new ProjectRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
