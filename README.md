## Pre-requisites
Please install below:
- Node version : v16.14.0
- Chromedriver : 108.0.0 - please check your local chrome version and update

## About Project
- Webdriverio framework with Javascript is used in this project.
- Page object model is implimented in this project.
- See all test cases under `test/specs` folder
- See all pages under `test/pages` folder
- I have addedone utility function located in `test/utility.js`
- All data and credentials located at `test/data/testData.js`

`Note` : I verified all category titles based on the ui because I dont have access to apis.
You may have a failure for TC2 if different categories are shown on the page.
That is why I needed to use apis for dynamic verification.

- create .env file with required variables 
## UI Automation Test Cases
User,
- `should sign up and redirect to discover home page - TC1`
- `should verify that the styles categories are presented - TC2`
These test cases are happy path scenarios based on the take home task
`Note` : TC = Test Case

## Run Automated Tests
- Put `npm install --force` to install all required packages located at `package.json`
- After give `npm run wdio` command to run all tests
- If you would like to see test result, put `npm run allure-report`

## Manual Test Scenarios for Categories Page
User,
- `should see category header and the table of categories - TC3`
- `should verify the number of categories - TC4`
- `should not see any broken tumbnails of categories - TC5`
- `should refresh and see the page loading properly - TC6`
- `should verify to access the categories without login - TC7`
- `should click each category and verify the title of specific category page - TC8`
- `should verify all hyper links work as expected - TC9`
- `should verify all social media links work as expected - TC10`
- `should verify that Category page is scrollable - TC11`
- `should choose different language options - TC12`
- `should verify the names of categories in each language - TC13`
- `should verify each category name in default language - TC14`
- `should see the content/pictures of each category after click - TC15`
 




