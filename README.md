# angular-personal-website
jaycemeyer.com

Make sure to install bootstrap ver. 3 when building with this project (npm install bootstrap@3).
"node_modules/bootstrap/dist/css/bootstrap.min.css" should also be included in the angular.json file under architect/build/styles.

Make sure to install PDF Viewer (npm i ngx-extended-pdf-viewer --save).
Include the following in the angular.json file under architect/build/styles:
"assets": [
  "src/favicon.ico",
  "src/assets",
  {
    "glob": "**/*",
    "input": "dist/ngx-extended-pdf-viewer/assets/",
    "output": "/assets/"
  }
],
"styles": [ ...
