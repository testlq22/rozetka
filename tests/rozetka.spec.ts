import { test, expect } from '@playwright/test';
import { MainPage } from './pages/main-page';


test.describe("A few tests for https://rozetka.com.ua/ua/", () => {
    test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();    
  });


test('Verify the price filter working corectly for the following marketplaces', async ({ page }) => {
  const mainPage = new MainPage(page); 
  await expect(page).toHaveURL('https://rozetka.com.ua/ua/');
  await mainPage.notebookPc.click();
  await mainPage.notebook.click();
  await mainPage.brand.click();  
  await mainPage.operatingSystem.click();
  await mainPage.screenType.click();
  await mainPage.sortMenu.click();
  await mainPage.sortMenu.selectOption({value:"1: cheap"});
  await expect(page).toHaveURL(/sort=cheap/);  
});

test('Add items to the basket', async ({ page }) => {
  const mainPage = new MainPage(page); 
  await expect(page).toHaveURL('https://rozetka.com.ua/ua/');
  await mainPage.notebookPc.click();
  await mainPage.notebook.click();
  await page.waitForTimeout(2000);
  await mainPage.addItemOne();
  await page.waitForTimeout(2000);
  await mainPage.addItemTwo(); 
  await page.waitForTimeout(2000); 
  await mainPage.moveToCart();  
  await mainPage.checkItemOneText();  
  await mainPage.checkItemTwoText();
  await mainPage.checkTotalCost();
  await mainPage.checkDelBtnOne();  
});

test('Search the item', async ({ page }) => {
  const mainPage = new MainPage(page); 
  await expect(page).toHaveURL('https://rozetka.com.ua/ua/');
  await mainPage.getSearch.click();
  await mainPage.fillSearchField();
  await page.waitForTimeout(2000);  
  await mainPage.checkSearchResult();  
});

test('Add items to the basket & back to main page', async ({ page }) => {
  const mainPage = new MainPage(page); 
  await expect(page).toHaveURL('https://rozetka.com.ua/ua/');
  await mainPage.notebookPc.click();
  await mainPage.notebook.click();
  await page.waitForTimeout(2000);
  await mainPage.addItemOne();
  await expect(mainPage.backToMain).toBeVisible({timeout: 2000})  
  await mainPage.backToMain.click();  
});

});