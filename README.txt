LINKS:
Material Color Picker:
https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors


- install and configure tailwind
- tsconfig.json changes:
  "baseUrl": "src",
    "paths": {
      "@app/*":[
        "app/*"
      ],
      "@src/*":[
        "./*"
      ]
    },
  "resolveJsonModule": true,
  "esModuleInterop": true
- setting up enviornments - https://www.telerik.com/blogs/angular-basics-using-environmental-variables-organize-build-configurations
- angular.json changes
  build options:
  outputPath": "dist",
  "styles": [
              "src/styles-o.scss"
            ],
  "production": {
              "fileReplacements": [{
                "replace": "src/environments/environment.ts",
                "with": "src/environments/environment.production.ts"
              }],
              "outputHashing": "all",
              "buildOptimizer": true,
              "optimization": true
      }
    "development": {
              "fileReplacements": [{
                "replace": "src/environments/environment.ts",
                "with": "src/environments/environment.development.ts"
              }],

    }

  "production": {
              "port": 5200
            },
            "development": {
              "port": 5200
            }
- scss and css cheat sheet
  https://dev.to/finallynero/scss-cheatsheet-7g6
  Global Styles:
  font + typography
  colors
  base elements
  --html
  --body
  --button
  --ul....

