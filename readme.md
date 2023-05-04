Test cases for https://rozetka.com.ua/ua/
Node js v18.7.0 or higher should be preinstalled
Framework: Playwright version 1.33.0
Reporter: Allure-playwright version 2.2.1
Start tests without failure screenshots use commandline:npx playwright test rozetka.spec.ts
Start tests with failure screenshots* use commandline:npx playwright test rozetka.spec.ts --headed
(* screenshots available in generated allure report)
Generate Allure report use commandline:npx allure generate ./allure-results --clean
Open Allure report use commandline:npx allure open ./allure-report

Test scenario ID: Functionality-1
Test case ID: Functionality-1A
Test case description: Checking basic functionality

ID:01
Title: Verify the price filter working corectly for the following marketplaces
Steps:
1.goto https://rozetka.com.ua/ua/
2. Click "Notebook &  PC" category
3. Click "Notebook" category
4. Click on some "Brand" checkbox
5. Click on some "OS" checkbox
6. Click on some "Screen type" checkbox
6. Choose sort type "from cheap to expensive"
Expected result: Selected items sorted from cheap to expensive.   

ID:02
Title: Add items to the basket
Steps:
1.goto https://rozetka.com.ua/ua/
2. Choose some category
3. Add item to basket
4. Change category 
5. Add item from it to basket
6. Click "Cart" button
7. Check that selected items available in basket
8. Check "Total price" to be correct
Expected result: Choosed items in basket & "Total price" is correct.   

ID:03
Title: Search the item
Steps:
1.goto https://rozetka.com.ua/ua/				 
2. Click "Search" field
3. Input some text in to search input field
4. Press "Enter" button
5. Check for all search results to contain searched text
Expected result: All search results to contain "Browser".   		

ID:04
Title: Add items to the basket & back to main page
Steps:
1.goto https://rozetka.com.ua/ua/				 
2. Choose some category
3. Add item to basket
4. Click to home link
Expected result: User back to start page.   					 

