// main-page.ts
import { expect, Locator, Page } from '@playwright/test';


export class MainPage {
  readonly page: Page;
  readonly notebookPc: Locator;
  readonly notebook: Locator;
  readonly brand: Locator;
  readonly operatingSystem: Locator;
  readonly screenType: Locator;
  readonly sortMenu: Locator;
  readonly itemOne: Locator;
  readonly catalog: Locator;
  readonly homeTech: Locator;
  readonly freezers: Locator;
  readonly itemTwo: Locator;
  readonly cart: Locator;
  readonly openCart: Locator;
  readonly itemOnePrice: Locator;
  readonly itemTwoPrice: Locator;
  readonly totalPrice: Locator;
  readonly cartActionsOne: Locator;
  readonly cartActionsTwo: Locator;
  readonly deleteButton: Locator;
  readonly textOne: String;
  readonly textTwo: String;
  readonly searchText: String;
  readonly getSearch: Locator;
  readonly searchResult: Locator;
  readonly backToMain: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.notebookPc = page.locator('body > app-root > div > div > rz-main-page > div > aside > rz-main-page-sidebar > div.fat-wrap > rz-sidebar-fat-menu > div > ul > li:nth-child(1) > a');
    this.notebook = page.locator('body > app-root > div > div > rz-super-portal > div > main > section > div:nth-child(3) > rz-dynamic-widgets > rz-widget-list:nth-child(3) > section > ul > li:nth-child(1) > rz-list-tile > div > a.tile-cats__heading.tile-cats__heading_type_center.ng-star-inserted');
    this.brand = page.locator('[href="/ua/notebooks/c80004/producer=asus/"]');
    this.operatingSystem = page.locator('[href="/ua/notebooks/c80004/producer=asus;20886=8247/"]');
    this.screenType = page.locator('[href="/ua/notebooks/c80004/producer=asus;20886=8247;36519=ips/"]');
    this.sortMenu = page.locator('body > app-root > div > div > rz-category > div > main > rz-catalog > div > rz-catalog-settings > div > rz-sort > select');
    this.itemOne = page.locator('[data-goods-id="288376303"]>[class="goods-tile__prices"]>[class="goods-tile__price price--red ng-star-inserted"]>[class="toOrder ng-star-inserted"]>[class="buy-button goods-tile__buy-button ng-star-inserted"]');
    this.catalog = page.locator('[class="header-layout"]>[href="https://rozetka.com.ua/ua/"]');
    this.homeTech = page.locator('body > app-root > div > div > rz-main-page > div > aside > rz-main-page-sidebar > div.fat-wrap > rz-sidebar-fat-menu > div > ul > li:nth-child(4) > a');
    this.freezers = page.locator('body > app-root > div > div > rz-super-portal > div > main > section > div:nth-child(3) > rz-dynamic-widgets > rz-widget-list:nth-child(3) > section > ul > li:nth-child(1) > rz-list-tile > div > a.tile-cats__heading.tile-cats__heading_type_center.ng-star-inserted');
    this.itemTwo = page.locator('[data-goods-id="348120165"]>[class="goods-tile__prices"]>[class="goods-tile__price price--red ng-star-inserted"]>[class="toOrder ng-star-inserted"]>[class="buy-button goods-tile__buy-button ng-star-inserted"]');
    this.cart = page.locator('[class="header-actions__item header-actions__item--cart"]');
    this.openCart = page.locator('[class="modal__content"]');
    this.itemOnePrice = page.locator('body > app-root > rz-single-modal-window > div.modal__holder.modal__holder_show_animation.modal__holder--large > div.modal__content > rz-shopping-cart > div > rz-purchases > ul > li:nth-child(1) > rz-cart-product > div > div.cart-product__footer > div > p.cart-product__price.cart-product__price--red');
    this.itemTwoPrice = page.locator('body > app-root > rz-single-modal-window > div.modal__holder.modal__holder_show_animation.modal__holder--large > div.modal__content > rz-shopping-cart > div > rz-purchases > ul > li:nth-child(2) > rz-cart-product > div > div.cart-product__footer > div > p.cart-product__price.cart-product__price--red');
    this.totalPrice = page.locator('body > app-root > rz-single-modal-window > div.modal__holder.modal__holder_show_animation.modal__holder--large > div.modal__content > rz-shopping-cart > div > div.cart-footer.ng-star-inserted > div > div > div > span');
    this.cartActionsOne = page.locator('#cartProductActions0');
    this.cartActionsTwo = page.locator('#cartProductActions1');
    this.deleteButton = page.locator('[class="button button--medium button--with-icon button--link"]')
    this.textOne = 'холодильник Whirlpool W7X 82I K';
    this.textTwo = 'Ноутбук Acer Aspire 7 A715-42G-R3EZ';
    this.getSearch = page.locator('[name="search"]');
    this.searchText = 'телевізор';
    this.searchResult = page.locator('[class="catalog-grid ng-star-inserted"]'); 
    this.backToMain = page.locator('[href="https://rozetka.com.ua/ua/"]')   
  }

  async goto() {    
    await this.page.goto('/');
  }

  async addItemOne() {
    await this.itemOne.hover();
    await this.itemOne.click({ force: true });
  }

  async addItemTwo() {
    await this.catalog.click();    
    await this.homeTech.click({ force: true });
    await this.freezers.hover();
    await this.freezers.click({ force: true });
    await this.itemTwo.hover()
    await this.itemTwo.click({ force: true })
  }

  async checkTotalCost() {
    const price1 = ((await this.itemOnePrice.innerText()).valueOf());
    const price2 = ((await this.itemTwoPrice.innerText()).valueOf().replace(/ /g, ''));    
    const price1clear = price1.replace(/[^\d.,₴]/, '');
    const price1clear2 = parseFloat(price1clear.replace(/₴/, ''));
    const price2clear = price2.replace(/[^\d.,₴]/, '');
    const price2clear2 = parseFloat(price2clear.replace(/₴/, ''));
    const total = (price1clear2 + price2clear2)
    const total2 = total.toString();
    function addSpacesAtIndex(str, index, numSpaces) {
      return str.slice(0, index) + ' '.repeat(numSpaces) + str.slice(index);
    }
    const total3 = addSpacesAtIndex(total2, 2, 1)
    await expect(this.totalPrice).toContainText(total3);   
  }

  async moveToCart() {    
    await this.cart.click({ force: true });
  }

  async checkDelBtnOne() {
    await this.cartActionsOne.click();    
    await expect(this.deleteButton).toBeEnabled();    
  }  
  
  async checkItemOneText() {
    const text = (this.textOne).toString()
    await expect(this.openCart).toContainText(text);    
  }

  async checkItemTwoText() {
    const text = (this.textTwo).toString()
    await expect(this.openCart).toContainText(text);    
  }

  async fillSearchField() {
    const text = (this.searchText).toString()
    await this.getSearch.fill(text); 
    await this.getSearch.press('Enter');   
  }

  async checkSearchResult() {
    const countResults = await this.searchResult.getByRole('listitem').count();    
    const countText = await this.page.getByText((this.searchText).toString()).count();    
    expect(countResults).toBeLessThanOrEqual(countText);    
  }  
}