import { searchTest as test } from './tests';

test.beforeEach(async ({ yaHomePage }) => {
  await yaHomePage.visit('/e2e-tests/site/page1.html');
});

test('Enter "Яндекс" in search bar, press "Найти" - should be opened search results', async ({ yaHomePage, yaResultsPage }) => {
  const testText:string = "Текст который надо найти";
  const searchButtonText:string = "Найти";

  await yaHomePage.clickOnSearchInput();
  await yaHomePage.fillSearchInput(testText);
  await yaHomePage.assertSearchButtonVisible(searchButtonText);
  await yaHomePage.clickOnSearchButton();

  await yaResultsPage.doubleClickOnArrowButton();
  await yaResultsPage.assertSearchResult(testText);
  
});
