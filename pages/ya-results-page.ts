import { Page } from '@playwright/test';
import { BasePage } from './base-page';
import { Button } from '../page-factory/button';
import { ListItem } from '../page-factory/list-item';
import { Component } from '../page-factory/component';


export class YaResultsPage extends BasePage {
  private readonly arrowButton: Button;
  private readonly searchResult: ListItem;

  constructor(public page: Page) {
    super(page);

    this.arrowButton = new Button({ page, locator: '.arrow-button', name: 'Arrow Button' })
    this.searchResult = new ListItem({ page, locator: '#dynamicList', name: 'Search Result' })
  }

  async doubleClickOnArrowButton() {
    await this.arrowButton.shouldBeVisible();
    await this.arrowButton.doubleClick();
  }

  async assertSearchResult(text) {
    await this.searchResult.shouldHaveText(text);
  }

}
