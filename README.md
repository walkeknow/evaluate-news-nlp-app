# Project Features

This project implements the following:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls
- Running tests using jest

### Step 1: Signup for an API key
First, I created an API key from [here](https://developer.aylien.com/signup). 

### Step 2: Use the SDK
Next I used their SDK mentioned [here](https://docs.aylien.com/textapi/sdks/#sdks) to implement sentiment analysis with Express.js used for setting up server side routes.

### Step 3: Environment Variables
Next I declared the API keys in a .env file and used the npm package doetenv to make use of the credentials in the index.js on the server side.

### Step 4: Using Webpack and Node.js
Then I implemented the project's core functionality of taking an input url from the user and updating the DOM from the API response returned.

### Step 5: Styling using Sass
Then I made use of Sass's syntax to create easy to read stylesheets following the DRY principle.

### Step 6: Setting up the production environment
Next I optimized the project by making use of MiniCssExtractPlugin, TerserWebpackPlugin, and OptimizeCSSAssetsWebpackPlugin in Webpack's production environment.

### Step 7: Testing using Jest
Next I configured Jest to work with Webpack and created a branch 'add-test' to run Jest tests for each JS file in the src folder of the project. After sucessfully implementing the test, I merged the branch with Master with the --no-ff tag to maintain history of the feature branch.

### Step 8: Adding service workers
Finally, I added service workers to the project using WorkboxPlugin to allow viewing the page when offline.