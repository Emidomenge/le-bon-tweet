
  
  
# Le-bon-tweet  
    
Simple tweet app, build with [React 16](https://reactjs.org/) and [Redux](https://github.com/reduxjs/redux) . 
  
Project created by [Emilien Domenge-Heritier](https://www.domenge.fr/)  
## Demo  
  
- [Click here !](https://le-bon-tweet.web.app/)   
   
  
## Main features  
  
 - Welcome page if not connected
 - Ability to browse mocked pages as a signed in user (with "Scarlett Carr" fake account)
 - Watch + Create public tweets (="Actu' Tweets")
 - Watch + Create private tweets (="Secret Tweets")
 - Responsive Design
 - Full static design, with mocked API call
 - Storybook implementation, to see disassembled react components
 - App covered with some unit tests (just as example of how unit test covering looks like...)
 
## Nice to have features  
  
 - [TODO] - Display "dark mode" like, when browsing private tweets
 - [TODO] - Infinite Scroll when browsing tweets
 - [TODO] - Mock website when user not connected
 - [TODO] - Page loading optimizations
 - [DONE] - Improve responsive
  
 
## [Dev] Inspect the project   
  
**Prerequisites:**  
 - Clone the project  
 - Go to the project directory and install node package dependencies: `npm install` 
 - [Optional] Install [Redux dev tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) chrome plugin
  
**After prerequisites:**  
  
### `npm start`  
  
Runs the app in the development mode.<br>  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
  
  
### `npm run storybook`  
  
Starts storybook allowing to browse react component separately. 

### `npm run test`   

Runs unit tests powered with Jest and Enzyme. 
  
  
**Notes:**  
- All logs are available voluntary on production environment

## Framework/Librairies Used  
  
 - [Redux](https://github.com/reduxjs/redux)  
 - [Jest](https://jestjs.io/)  
 - [Enzyme](https://github.com/airbnb/enzyme)  
 - [Tachyons](https://github.com/tachyons-css/tachyons/)  
 - [AirBNB eslint](https://www.npmjs.com/package/eslint-config-airbnb)  
 - [React Fontawesome](https://github.com/FortAwesome/react-fontawesome)  
 - [React Bootstrap (using Bootstrap v4.3)](https://react-bootstrap.github.io/)  
 - [Storybook](https://www.learnstorybook.com/)  
 - [React v16](https://github.com/facebook/create-react-app)  
  
## Supported Browsers  
  
 - Chrome  
 - Firefox  
 - Safari  
 - Internet Explorer (IE10+)  
