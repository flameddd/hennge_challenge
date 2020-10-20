# Jacky's HENNGE Admission Challenge
- [REPORT.md](./REPORT.md)
- [IMPROVEMENTS.md](./IMPROVEMENTS.md)

## about this demo
- framework: `react` (`create-react-app`)
- style engine: css-in-js (`styled-components`)
- others
  - `storybook` for UI component develop

## Clone and Install
```
git clone https://github.com/flameddd/hennge_challenge
cd hennge_challenge
npm install
npm start
```

then visit `http://localhost:3000/`

## Date Set
- [dataset.js](./src/dataset.js)
- email date range from `2019/12/31 0:30` to `2020/1/3 0:20`
- filter **Out of above date range** to see **Empty Result** page.

## Folder structure and File 

```
\---src
  |   App.js            // App Entry, Layout
  |   colors.js         // define color palette
  |   constants.js      // define constant, enums
  |   dataset.js        // fake data set for demo 
  |   
  +---assets            // image asset from "frontend_resources.zip" 
  +---Components        // UI components
  |     EmptyResult.js
  |     ExtendMail.js
  |     Normalize.js
  |     ResultTitle.js
  |     DatePicker.js
  |     Table.js
  | 
  \---utils           // utility function
\---screenshots       // image for README, REPORT and IMPROVEMENTS present
```


# Screenshots  

|![05.jpg](./screenshots/05.jpg)|
|:----------:|
|desktop|

|![06.jpg](./screenshots/06.jpg)|
|:----------:|
|hover|

|![07.jpg](./screenshots/07.jpg)|
|:----------:|
|mail extended|

|![08.jpg](./screenshots/08.jpg)|
|:----------:|
|mail extended|

|![09.jpg](./screenshots/09.jpg)|
|:----------:|
|date picker|

|![10.jpg](./screenshots/10.jpg)|
|:----------:|
|result 0|


|![m01.jpg](./screenshots/m01.jpg)|![m02.jpg](./screenshots/m02.jpg)|![m03.jpg](./screenshots/m03.jpg)|
|:----------:|:----------:|:----------:|
|mobile|scroll|mail extended|
||||
|![m04.jpg](./screenshots/m04.jpg)|![m05.jpg](./screenshots/m05.jpg)|![m06.jpg](./screenshots/m06.jpg)|
|mail extended|date picker| result 0|
