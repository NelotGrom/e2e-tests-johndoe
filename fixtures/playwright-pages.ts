import { Fixtures } from '@playwright/test';
import { YaHomePage } from '../pages/ya-home-page';
import { YaMenuPage } from '../pages/ya-menu-page';
import { YaResultsPage } from '../pages/ya-results-page';
import { ContextPagesFixture } from './context-pages';

export type PlaywrightPagesFixture = {
  yaHomePage: YaHomePage;
  yaMenuPage: YaMenuPage;
  yaResultsPage: YaResultsPage;
};

export const pagesFixture: Fixtures<PlaywrightPagesFixture, ContextPagesFixture> = {
  yaHomePage: async ({ contextPage }, use) => {
    const yaHomePage = new YaHomePage(contextPage);

    await use(yaHomePage);
  },
  yaMenuPage: async ({ contextPage }, use) => {
    const yaMenuPage = new YaMenuPage(contextPage);

    await use(yaMenuPage);
  },

  yaResultsPage: async ({ contextPage }, use) => {
    const yaResultsPage = new YaResultsPage(contextPage);

    await use(yaResultsPage);
  }
};
