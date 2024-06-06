import { BasePage } from './base-page';
import { Input } from '../page-factory/input';
import { Button } from '../page-factory/button';
import { Page } from '@playwright/test';

export class YaHomePage extends BasePage {
  private readonly searchInput: Input;
  private readonly searchButton: Button;

  constructor(page: Page) {
    super(page);
    this.searchInput = new Input({ page, locator: '.mini-suggest__input', name: 'Search Input' });
    this.searchButton = new Button({ page, locator: '.mini-suggest__button', name: 'Search Button' })
  }

  async clickOnSearchInput() {
    return this.searchInput.click();
  }

  async fillSearchInput(text) {
    return this.searchInput.fill(text);
  }  

  async clickOnSearchButton() {
    return this.searchButton.click();
  }

  async assertSearchInputText(text) {
    return this.searchInput.shouldHaveText(text);
  }

  async assertSearchButtonVisible(text) {
    await this.searchButton.shouldBeVisible();
    await this.searchButton.shouldHaveText(text);
  }

}
