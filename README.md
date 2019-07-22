
  
  
# Le-bon-tweet  
    
Simple tweet app, build with [React 16](https://reactjs.org/) and [Redux](https://github.com/reduxjs/redux) . 
  
Project created by [Emilien Domenge-Heritier](https://www.domenge.fr/)  
## Demo  
  
- [lebontweet app](https://le-bon-tweet.web.app/)   
- [lebontweet storybook](https://le-bon-tweet.web.app/storybook)   
   
  
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
  
Runs the app in the development mode.
  
  
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
  
## Project Structure
 
  ```
project
|   README.md
|   .eslintrc (= eslint config) 
+---.enzyme
|   |   (=contains enzyme settings)
|   |   ...
+---.storybook
|   |   (=contains storybook settings)
|   |   ...
+---public
|   |   (=contains page template settings)
|   |   ...
|
+---src
    |   index.js        (= React input)
    |   app.js          (= first React component, main component)
    |   index.css       (= global css)
    |   setupTests.js   (= cra setup for unit tests)
    |
    +---assets          (= all static ressources)
    |   |   css
    |   |   img
    |   
    +---components      (= contains one or further React component(s))
    |   |   
    |   |   [...more details below] 
    |   
    +---lib             (= contains Javascript libs, useful anywhere in the project)
    |   |   
    |   |   *.js
    |   
    +---mockedData      (= contains all the static data in order to mock server & database behaviour)
    |   |   
    |   |   *.js
    |   
    +---Redux            (= contains all redux settings for the project)
        |   
        |   [...more details below] 
```

**"components" folder structure:**  
  ```
components [first level]
|   
+---myReactComponent
|   |   
|   |   index.js            (= contains definition of 'myReactComponent')
|   |   index.stories.js    (= contains storybook implementation of 'myReactComponent')
|   |   index.test.js       (= contains unit tests of 'myReactComponent')
|   |   index.css           (= contains css modules of 'myReactComponent')
|   |   
|   +---components          (= contains one or further child components of 'myReactComponent')
|       +---[... etc ...]
|
+---myReactComponent2
|   |   
|   |   index.js            (= contains definition of 'myReactComponent2')
|   |   index.stories.js    (= contains storybook implementation of 'myReactComponent2')
|   |   index.test.js       (= contains unit tests of 'myReactComponent2')
|   |   index.css           (= contains css modules of 'myReactComponent2')
|   |   
|   +---components          (= contains one or further child components of 'myReactComponent2')
|       +---[... etc ...]
|
+---[... etc ...]
|
+---myReactComponentN

```
**"redux" folder structure:**  
 ```
redux
|
|   glossary.js             (= contains all redux keys used for actions & reducers)
|   initialState.js         (= contains the json send as initial state to redux)
|   store.js                (= contains all redux configurations like reducers combination & middlewares)
|   
+---actions                 (= contains all redux actions)
|   |   
|   |   xxxxActions.js         
|   |   ...
|
+---reducers                (= contains all redux reducers)
   |   
   |   xxxxReducers.js      (= contains definition of 'myReactComponent2')
   |   ...

```

## Supported Browsers  
  
 - Chrome  
 - Firefox  
 - Safari  
 - Internet Explorer (IE10+)  
