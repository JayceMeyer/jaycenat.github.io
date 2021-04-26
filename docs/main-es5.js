function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutPageAboutPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"about-page\" class=\"about\"\n  style=\"transform: translateY(-100%)\"\n  [@slideDown]=\"openClose ? 'open' : 'close'\">\n    <!-- Resources -->\n    <div class=\"float-container\">\n      <div class=\"float-child\">\n        <img style=\"height: 150px; width: 150px; object-fit: cover;\" src=\"assets/images/head-shot.jpg\" alt=\"pic.jpg\">\n      </div>\n      \n      <div class=\"float-child\">\n        <div class=\"card-container\">\n          <a href='#' (click)=\"loadResumePage()\"><div class=\"button\">Resume</div><div class=\"arrow-right\"></div></a>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"float-container\">\n      \n      <div class=\"float-child\">\n        <div id=\"about-text\" data-testid=\"richTextElement\"><h2 class=\"font_2\" style=\"line-height:2em;font-size:16px\"><span>About</span></h2>\n          <p class=\"font_8\" style=\"line-height:1.5em;font-size:14px\"><span>Based in Denver, CO</span></p>\n          <p class=\"font_8\" style=\"line-height:1.5em;font-size:14px\">&nbsp;</p>\n          <p class=\"font_8\" style=\"line-height:1.5em;font-size:14px\"><span>I'm a driven Software Engineer with a passion for creating well-designed, user friendly software that customers love using. I love to learn new things and I'm not afraid to try something I've never done before. I'm a very personable, engaging, and hard working team player. I work best when I know my team is in sync and when I feel confident in my understanding of the platform.&nbsp;</span></p>\n          <p class=\"font_8\" style=\"line-height:1.5em;font-size:14px\"><span class=\"whitespace\">​</span></p>\n          <p class=\"font_8\" style=\"line-height:1.5em;font-size:14px\"><span>I'm experienced on both Mac and PC systems, and I code in C#, Python, and Angular. Currently, I'm learning .NET MAUI/Xamarin, React.js, and Flutter/Dart to allow me to make even better designed and more performant UI.&nbsp;</span></p>\n          <p class=\"font_8\" style=\"line-height:1.5em;font-size:14px\"><span class=\"whitespace\">​</span></p>\n          <p class=\"font_8\" style=\"line-height:1.5em;font-size:14px\"><span>I love playing with my dog, motorcycle riding, hiking, backpacking, mountain biking, traveling, and eating delicious food in my free time.</span></p>\n        </div>\n      </div>\n    \n      <div class=\"float-child\">  \n        <div id=\"cv-text\" data-testid=\"richTextElement\"><h2 class=\"font_2\" style=\"font-size:16px\">CV</h2>\n          <p class=\"font_7\" style=\"line-height:2em;font-size:16px\"><span style=\"text-decoration:underline;\">Experience</span></p>\n          <p class=\"font_7\" style=\"line-height:1em;font-size:16px\"><span>2018 - Present&nbsp;:&nbsp;<span style=\"font-style:italic;\">Vertafore, Inc.</span></span></p>\n          <p class=\"font_7\" style=\"font-size:16px\"><span>Software Engineer</span></p>\n          <p class=\"font_7\" style=\"font-size:16px\"><span><span class=\"whitespace\">​</span></span></p>\n          <p class=\"font_7\" style=\"font-size:16px\">2016&nbsp;- Present :&nbsp;<span style=\"font-style:italic;\">The Buff Restaurant</span></p>\n          <p class=\"font_7\" style=\"font-size:16px\">Payroll Specialist</p>\n          <p class=\"font_7\" style=\"font-size:16px\"><span><span class=\"whitespace\">​</span></span></p>\n          <p class=\"font_7\" style=\"font-size:16px\">May '16 - July '16 :&nbsp;<span style=\"font-style: italic;\">agent24, Inc.</span></p>\n          <p class=\"font_7\" style=\"font-size:16px\">Software &amp; Network Internship</p>\n          <p class=\"font_7\" style=\"font-size:16px\"><span class=\"whitespace\">​</span></p>\n          <p class=\"font_7\" style=\"font-size:16px\">2010&nbsp;- 2018 :&nbsp;<span style=\"font-style:italic;\">The Buff Restaurant</span></p>\n          <p class=\"font_7\" style=\"font-size:16px\">Manager &amp; Barista</p>\n          <h2 class=\"font_2\" style=\"font-size:16px\"><span class=\"whitespace\">​</span></h2>\n          <p class=\"font_7\" style=\"font-size:16px\"><span style=\"text-decoration:underline;\">Education</span></p>\n          <p class=\"font_8\" style=\"font-size:14px\">2012 - 2017 <span style=\"font-style:italic;\">University of Colorado at Boulder</span></p>\n          <p class=\"font_8\" style=\"font-size:14px\">Bachelor of Arts in Computer Science - Dean's List</p>\n        </div>\n      </div>\n\n    </div>\n    \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n  <div class=\"circle-card-container\">\n    <a class=\"circle-card\" title=\"Home\" (click)=\"loadPage('about')\">\n      <p class=\"circle-card-letter\">J</p>\n    </a>\n    <span class=\"toolbar-title\">\n      Jayce Meyer\n    </span>\n  </div>\n</div>\n\n<!-- Content -->\n<div class=\"content-container\" role=\"main\">\n  <div class=\"side-nav-container\" role=\"navigation\">\n    <a [ngClass]=\"{'side-nav-item': !displayAboutPage, 'selected-side-nav-item': displayAboutPage}\" (click)=\"loadPage('about')\">About</a>\n    <a [class]=\"displayPortfolioPage ? 'selected-side-nav-item' : 'side-nav-item'\" (click)=\"loadPage('portfolio')\">Portfolio</a>\n    <a [class]=\"displayContactPage ? 'selected-side-nav-item' : 'side-nav-item'\" (click)=\"loadPage('contact')\">Contact</a>\n  </div>\n\n  <!-- Page Components -->\n  <div class=\"content-detail\" id=\"content-detail\">\n    <about-page *ngIf='displayAboutPage' (showResumePage)='loadPage(\"resume\")'></about-page>\n    <portfolio-page *ngIf='displayPortfolioPage' (showResumePage)='loadPage(\"resume\")'></portfolio-page>\n    <contact-page *ngIf='displayContactPage'></contact-page>\n    <resume-page *ngIf='displayResumePage'></resume-page>\n  </div>\n\n</div>\n<!-- Footer -->\n<footer>© {{ date }} by Jayce Meyer</footer>\n\n<!-- <svg id=\"clouds\" alt=\"Gray Clouds Background\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2611.084\" height=\"485.677\" viewBox=\"0 0 2611.084 485.677\">\n  <path id=\"Path_39\" data-name=\"Path 39\" d=\"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z\" transform=\"translate(142.69 -634.312)\" fill=\"#zzz\"/>\n</svg> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-form/contact-form.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-form/contact-form.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactFormContactFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [hidden]=\"submitted\">\r\n      <form (ngSubmit)=\"onSubmit()\" #contactForm=\"ngForm\" action=\"https://formspree.io/meqpqwkq\" method=\"POST\">\r\n        <div class=\"form-group\">\r\n          <!-- <label for=\"name\">Name</label> -->\r\n          <input type=\"text\"\r\n                class=\"form-control\" \r\n                id=\"name\"\r\n                required\r\n                [(ngModel)]=\"model.name\" \r\n                name=\"name\"\r\n                placeholder=\"Your Name\"\r\n                #name=\"ngModel\">\r\n          <div [hidden]=\"name.valid || name.pristine\"\r\n               class=\"alert alert-danger\">\r\n            Name is required\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"form-group\">\r\n            <!-- <label for=\"email\">Email</label> -->\r\n            <input type=\"text\" class=\"form-control\" id=\"email\"\r\n                   required\r\n                   [(ngModel)]=\"model.email\"\r\n                   name=\"email\"\r\n                   placeholder=\"Your Email\"\r\n                   #email=\"ngModel\">\r\n            <div [hidden]=\"email.valid || email.pristine\"\r\n                 class=\"alert alert-danger\">\r\n              Email is required\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <!-- <label for=\"message\">Message</label> -->\r\n            <input type=\"text\" class=\"form-control\" id=\"message\"\r\n                  required\r\n                  [(ngModel)]=\"model.message\" \r\n                  name=\"message\"\r\n                  placeholder=\"Your Message\"\r\n                  #message=\"ngModel\">\r\n            <div [hidden]=\"message.valid || message.pristine\"\r\n                 class=\"alert alert-danger\">\r\n              Message is required\r\n            </div>\r\n        </div>\r\n  \r\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!contactForm.form.valid\">Send</button>\r\n      </form>\r\n</div>\r\n  \r\n<div [hidden]=\"!submitted\">\r\n      <span>Thank you! Your info will be sent to Jayce Meyer.</span>\r\n      <p></p>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-3\">Name:</div>\r\n        <div class=\"col-xs-9\">{{ model.name }}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-3\">Email:</div>\r\n        <div class=\"col-xs-9\">{{ model.email }}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-3\">Message:</div>\r\n        <div class=\"col-xs-9\">{{ model.message }}</div>\r\n      </div>\r\n      <br>\r\n      <button class=\"btn btn-primary\" (click)=\"newContact()\">Done</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactPageContactPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"contact-page\" class=\"contact\"\r\n  style=\"transform: translateY(-100%)\"\r\n  [@slideDown]=\"openClose ? 'open' : 'close'\">\r\n    \r\n  <div class=\"float-container\">\r\n    <div class=\"float-child\">\r\n\r\n      <div id=\"contact-text\" data-testid=\"richTextElement\">  \r\n        <h2 class=\"font_2\" style=\"line-height:2em;font-size:16px;\"><span>Get in Touch</span></h2>\r\n        <p style=\"padding-bottom: 1px;\"></p>          \r\n        <!-- linkedin -->\r\n        <a href=\"https://www.linkedin.com/in/jayce-meyer-6b5309141/\" target=\"_blank\" rel=\"noopener\">\r\n          <img style=\"padding-right: 8px; height: 28px; width: 28px; object-fit: cover;\" src=\"assets/images/linkedin.png\" alt=\"linkedin\">\r\n        </a>\r\n        <!-- facebook -->\r\n        <a href=\"https://www.facebook.com/jayce.meyer\" target=\"_blank\" rel=\"noopener\">\r\n          <img style=\"padding-right: 10px; height: 18px; width: 18px; object-fit: cover;\" src=\"assets/images/facebook.png\" alt=\"facebook\">\r\n        </a>\r\n        <!-- instagram -->\r\n        <a href=\"https://www.instagram.com/jaycenat/\" target=\"_blank\" rel=\"noopener\">\r\n          <img style=\"height: 20px; width: 20px; object-fit: cover;\" src=\"assets/images/instagram.png\" alt=\"instagram\">\r\n        </a>\r\n      </div>\r\n\r\n      <p style=\"padding-bottom: 20px;\"></p>\r\n\r\n      <contact-form></contact-form>\r\n\r\n    </div>\r\n  </div>\r\n    \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-page/portfolio-page.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-page/portfolio-page.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPortfolioPagePortfolioPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"portfolio-page\" class=\"portfolio\"\n  style=\"transform: translateY(-100%)\"\n  [@slideDown]=\"openClose ? 'open' : 'close'\">\n  \n  <div class=\"float-container\">\n    <div class=\"float-child\">\n      <div id=\"about-text\" data-testid=\"richTextElement\">\n        <h2 class=\"font_2\" style=\"line-height:2em;font-size:16px\"><span>Portfolio & Projects</span></h2>\n        <p class=\"font_8\" style=\"line-height:1.5em;font-size:14px\"><span>\n          Take a look at some of my fun side projects on <a href=\"https://github.com/JayceNat\" target=\"_blank\" style=\"color: rgb(210, 60, 15);\">Github</a>.\n        </span></p>\n        <p><span>Note: This website is written with Angular.</span></p>\n        <p><span class=\"whitespace\">​</span></p>\n      </div>\n    </div>\n    <div class=\"float-child\">\n      <div class=\"button-container\">\n        <a href='#' (click)=\"loadResumePage()\"><div class=\"button\">View Resume</div><div class=\"arrow-right\"></div></a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"float-container\">\n    <div class=\"float-child\">\n      <div id=\"about-text\" data-testid=\"richTextElement\">\n        <p class=\"font_8\" style=\"line-height:1.5em;font-size:16px;font-style: italic;\"><span>\n          The Yu-Gi-Oh! Duel Calculator:&nbsp;\n          </span></p>\n          <p class=\"font_8\" style=\"line-height:1.5em;font-size:16px;\"><span>\n            A fun way to battle your friends (and your enemies) with your most powerful playing card deck.\n            (Written in React.js)&nbsp;\n        </span></p>\n        <p><span class=\"whitespace\">​</span></p>\n      </div>\n    </div>\n\n    <div class=\"float-child\">\n      <div class=\"card-container\">\n        <a href='https://jaycenat.github.io/React-Duel-Calculator/' target=\"_blank\"><div class=\"arrow-left\"></div>\n          <div class=\"button-tile button-tile-duel-calc\">\n            <img style=\"height: 100%;\" src=\"assets/images/Duel_Calculator.png\" alt=\"duel-calc.png\">\n          </div></a>\n      </div>\n    </div>\n  </div>\n\n  <p><span class=\"whitespace\">​</span></p>\n\n  <div class=\"float-container\">\n    <div class=\"float-child\">\n      <div id=\"about-text\" data-testid=\"richTextElement\">\n        <p class=\"font_8\" style=\"line-height:1.5em;font-size:16px;font-style: italic;\"><span>\n          The Candy Gallery:&nbsp;\n          </span></p>\n          <p class=\"font_8\" style=\"line-height:1.5em;font-size:16px;\"><span>\n            A fun way to view your photos by picking a random image from a selected Picture folder hierarchy.\n            (Written in C# - Windows Forms)&nbsp;\n        </span></p>\n        <p><span class=\"whitespace\">​</span></p>\n      </div>\n    </div>\n\n    <div class=\"float-child\">\n      <div class=\"card-container\">\n        <a href='https://github.com/JayceNat/Candy-Gallery' target=\"_blank\"><div class=\"arrow-left\"></div>\n          <div class=\"button-tile button-tile-candy-gal\">\n            <img style=\"width: 100%;\" src=\"assets/images/Candy_Gallery.png\" alt=\"candy-gal.png\">\n          </div></a>\n      </div>\n    </div>\n  </div>\n\n  <p><span class=\"whitespace\">​</span></p>\n\n  <div class=\"float-container\">\n    <div class=\"float-child\">\n      <div id=\"about-text\" data-testid=\"richTextElement\">\n        <p class=\"font_8\" style=\"line-height:1.5em;font-size:16px;font-style: italic;\"><span>\n          The Joke & Excuse Generator:&nbsp;\n          </span></p>\n          <p class=\"font_8\" style=\"line-height:1.5em;font-size:16px;\"><span>\n            When you just need a little pick me up, this little app will lift your spirits. Need to\n            work from home, but just don't know the best way to break it to the team? Enter\n            the Joke & Excuse Generator. (Written in C# - Windows Forms)&nbsp;\n        </span></p>\n      </div>\n    </div>\n\n    <div class=\"float-child\">\n      <div class=\"card-container\">\n        <a href='https://github.com/JayceNat/Joke-Excuse-Generator-EXE' target=\"_blank\"><div class=\"arrow-left\"></div>\n          <div class=\"button-tile button-tile-joke-gen\">\n            <img style=\"width: 100%;\" src=\"assets/images/Joke_Generator.png\" alt=\"joke-gen.png\">\n          </div></a>\n      </div>\n    </div>\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/resume-page/resume-page.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume-page/resume-page.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResumePageResumePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"resume-page\" class=\"resume\"\n  style=\"transform: translateY(-100%)\"\n  [@slideDown]=\"openClose ? 'open' : 'close'\">\n        <div class=\"float-container\">\n          <div class=\"float-child\">\n            <a href='assets/Jayce Meyer Resume (Apr 2021).jpg' target=\"assets/Jayce Meyer Resume (Apr 2021).jpg\">\n              <img style=\"height: 1100px; width: 800px; object-fit: cover;\" src=\"assets/Jayce Meyer Resume (Apr 2021).jpg\" alt=\"pic.jpg\">\n            </a>\n          </div>\n        </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/about-page/about-page.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/about-page/about-page.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutPageAboutPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".about {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.float-child {\r\n    width: 50%;\r\n    float: left;\r\n    padding: 20px;\r\n    padding-top: 0px;\r\n    min-width: 165px;\r\n}\r\n\r\n.button {\r\n    float:left;\r\n    height:40px;\r\n    background:black;\r\n    width: 20vw;\r\n    max-width: 275px;\r\n    text-align: center;\r\n    color: white;\r\n    line-height:40px;\r\n    border-top-left-radius:8px;\r\n    border-bottom-left-radius:8px;\r\n}\r\n\r\n.arrow-right {\r\n    width:0; \r\n    height:0; \r\n    border-top:20px solid transparent;\r\n    border-bottom:20px solid transparent;\r\n    border-left:20px solid black; \r\n    float:right;\r\n}\r\n\r\n.button:hover {\r\n    font-weight:bold; \r\n    background-color: rgb(210, 60, 15);\r\n    border-color: rgb(210, 60, 15);\r\n}\r\n\r\n.button:hover + .arrow-right {\r\n    border-left:20px solid rgb(210, 60, 15) !important;\r\n}\r\n\r\n:host {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    margin: 8px 0;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6, header {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    background: transparent;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n}\r\n\r\n.spacer {\r\n    flex: 1;\r\n}\r\n\r\nsvg.material-icons {\r\n    height: 24px;\r\n    width: auto;\r\n}\r\n\r\nsvg.material-icons:not(:last-child) {\r\n    margin-right: 8px;\r\n}\r\n\r\n.card svg.material-icons path {\r\n    fill: #888;\r\n}\r\n\r\n.card-container {\r\n    padding-top: 55px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n}\r\n\r\n.card {\r\n    border-radius: 4px;\r\n    border: 1px solid #eee;\r\n    background-color: #fafafa;\r\n    height: 40px;\r\n    width: 200px;\r\n    margin: 0 8px 16px;\r\n    padding: 16px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: all 0.2s ease-in-out;\r\n    line-height: 24px;\r\n}\r\n\r\n.card.card-small {\r\n    height: 16px;\r\n    width: 168px;\r\n}\r\n\r\n.card.highlight-card {\r\n    background-color: #1976d2;\r\n    color: white;\r\n    font-weight: 600;\r\n    border: none;\r\n    width: auto;\r\n    min-width: 30%;\r\n    position: relative;\r\n}\r\n\r\n.card.card.highlight-card span {\r\n    margin-left: 60px;\r\n}\r\n\r\na,\r\na:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.github-star-badge {\r\n    color: #24292e;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    padding: 3px 10px;\r\n    border: 1px solid rgba(27,31,35,.2);\r\n    border-radius: 3px;\r\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\r\n    margin-left: 4px;\r\n    font-weight: 600;\r\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\r\n}\r\n\r\n.github-star-badge:hover {\r\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\r\n    border-color: rgba(27,31,35,.35);\r\n    background-position: -.5em;\r\n}\r\n\r\n.github-star-badge .material-icons {\r\n    height: 16px;\r\n    width: 16px;\r\n    margin-right: 4px;\r\n}\r\n\r\n/* Responsive Styles */\r\n\r\n/* @media screen and (max-width: 767px) {\r\n\r\n    .card-container > *:not(.circle-link) ,\r\n    .terminal {\r\n        width: 100%;\r\n    }\r\n\r\n    .card:not(.highlight-card) {\r\n        height: 16px;\r\n        margin: 8px 0;\r\n    }\r\n\r\n    .card.highlight-card span {\r\n        margin-left: 72px;\r\n    }\r\n\r\n    svg#rocket-smoke {\r\n        right: 120px;\r\n        transform: rotate(-5deg);\r\n    }\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLE9BQU87SUFDUCxRQUFRO0lBQ1IsaUNBQWlDO0lBQ2pDLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSwwSkFBMEo7SUFDMUosZUFBZTtJQUNmLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLGtDQUFrQztBQUN0Qzs7QUFFQTs7Ozs7O0lBTUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQiw4REFBOEQ7SUFDOUQsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrSUFBa0k7QUFDdEk7O0FBRUE7SUFDSSw4REFBOEQ7SUFDOUQsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUdBLHNCQUFzQjs7QUFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mbG9hdC1jaGlsZCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIG1pbi13aWR0aDogMTY1cHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIGhlaWdodDo0MHB4O1xyXG4gICAgYmFja2dyb3VuZDpibGFjaztcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgbWF4LXdpZHRoOiAyNzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OjQwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjhweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6OHB4O1xyXG59XHJcblxyXG4uYXJyb3ctcmlnaHQge1xyXG4gICAgd2lkdGg6MDsgXHJcbiAgICBoZWlnaHQ6MDsgXHJcbiAgICBib3JkZXItdG9wOjIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOjIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDoyMHB4IHNvbGlkIGJsYWNrOyBcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgNjAsIDE1KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxMCwgNjAsIDE1KTtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciArIC5hcnJvdy1yaWdodCB7XHJcbiAgICBib3JkZXItbGVmdDoyMHB4IHNvbGlkIHJnYigyMTAsIDYwLCAxNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2IHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIGhlYWRlciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG5zdmcubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbnN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgICBmaWxsOiAjODg4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDU1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgOHB4IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLXNtYWxsIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNjhweDtcclxufVxyXG5cclxuLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbmEsXHJcbmE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2Uge1xyXG4gICAgY29sb3I6ICMyNDI5MmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywzMSwzNSwuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZmFmYmZjLCNlZmYzZjYgOTAlKTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLEFwcGxlIENvbG9yIEVtb2ppLFNlZ29lIFVJIEVtb2ppLFNlZ29lIFVJIFN5bWJvbDtcclxufVxyXG5cclxuLmdpdGh1Yi1zdGFyLWJhZGdlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LC4zNSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtLjVlbTtcclxufVxyXG5cclxuLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcblxyXG5cclxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHJcbiAgICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICxcclxuICAgIC50ZXJtaW5hbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xyXG4gICAgfVxyXG5cclxuICAgIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgICAgIHJpZ2h0OiAxMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgICB9XHJcbn0gKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/about-page/about-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/about-page/about-page.component.ts ***!
    \****************************************************/

  /*! exports provided: AboutPageComponent */

  /***/
  function srcAppAboutPageAboutPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function () {
      return AboutPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_assets_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/assets/animations */
    "./src/assets/animations.ts");

    var AboutPageComponent = /*#__PURE__*/function () {
      function AboutPageComponent() {
        _classCallCheck(this, AboutPageComponent);

        this.showResumePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openClose = true;
      }

      _createClass(AboutPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          setTimeout(function () {
            document.getElementById("content-detail").style.zIndex = '1';
          }, 350);
        }
      }, {
        key: "loadResumePage",
        value: function loadResumePage() {
          this.showResumePage.emit();
        }
      }]);

      return AboutPageComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AboutPageComponent.prototype, "showResumePage", void 0);
    AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'about-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.component.html"))["default"],
      animations: [src_assets_animations__WEBPACK_IMPORTED_MODULE_2__["SlideDownAnimation"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-page.component.css */
      "./src/app/about-page/about-page.component.css"))["default"]]
    })], AboutPageComponent);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\r\n    margin: 0;\r\n}\r\n\r\n.toolbar {\r\n    height: 135px;\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: center;\r\n    align-content: center;\r\n    color: black;\r\n    background-color: white;\r\n    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);\r\n    font-weight: 600;\r\n}\r\n\r\n.circle-card-container {\r\n    display: flex;\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    margin-left: 8%;\r\n    padding-left: 10px;\r\n}\r\n\r\n.circle-card {\r\n    display: flex;\r\n    justify-content: center;\r\n    color: white;\r\n    background-color: black;\r\n    margin: 9px;\r\n    font-size: 60px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    height: 97px;\r\n    width: 97px;\r\n    border-radius: 97px;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    transition: .25s ease-out;\r\n}\r\n\r\n.circle-card-letter {\r\n    padding: 33px;\r\n}\r\n\r\n.circle-card:hover {\r\n    transform: translateY(-0.20rem);\r\n    background-color: rgb(210, 60, 15);\r\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);\r\n    text-decoration: none;\r\n}\r\n\r\n.toolbar-title {\r\n    font-size: 35px;\r\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    margin-left: 50px;\r\n    margin-top: 65px;\r\n}\r\n\r\n.content-container {\r\n    display: flex;\r\n    margin: 32px auto;\r\n    width: 100%;\r\n    margin-left: 8%;\r\n    /* padding: 0 62px; */\r\n    max-width: 1080px;\r\n    flex-direction: row;\r\n    align-items: center;\r\n}\r\n\r\n.side-nav-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-self: flex-start;\r\n    align-items: center;\r\n    order: -1;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n}\r\n\r\n.side-nav-item,\r\n.selected-side-nav-item {\r\n    padding: 10px;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    font-size: 16px;\r\n    color: silver;\r\n\r\n    position: relative;\r\n    text-decoration: none;\r\n}\r\n\r\n.selected-side-nav-item {\r\n    color: dimgray;\r\n}\r\n\r\n.side-nav-item:hover {\r\n    color: rgb(210, 60, 15);\r\n}\r\n\r\n.side-nav-item:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 2px;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: #000;\r\n    visibility: hidden;\r\n    transform: scaleX(0);\r\n    transition: all 0.3s ease-in-out 0s;\r\n}\r\n\r\n.side-nav-item:hover:before {\r\n    visibility: visible;\r\n    transform: scaleX(1);\r\n  }\r\n\r\n.content-detail {\r\n    float: left;\r\n    margin-left: 20px;\r\n    flex-direction: column;\r\n    align-self: flex-start;\r\n    order: 1;\r\n    z-index: -1;\r\n}\r\n\r\nfooter {\r\n    margin-top: 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    line-height: 20px;\r\n}\r\n\r\nsvg#clouds {\r\n    position: fixed;\r\n    bottom: -160px;\r\n    left: -230px;\r\n    z-index: -10;\r\n    width: 1920px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsMENBQTBDO0lBQzFDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGVBQWU7SUFDZixnREFBZ0Q7SUFDaEQsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix3RUFBd0U7SUFDeEUseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMsMkNBQTJDO0lBQzNDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1RUFBdUU7SUFDdkUsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0RBQWdEO0lBQ2hELGVBQWU7SUFDZixhQUFhOztJQUViLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFNBQVM7SUFDVCxPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUVsQixvQkFBb0I7SUFFcEIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksbUJBQW1CO0lBRW5CLG9CQUFvQjtFQUN0Qjs7QUFFRjtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG4gICAgaGVpZ2h0OiAxMzVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jaXJjbGUtY2FyZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLmNpcmNsZS1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luOiA5cHg7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDk3cHg7XHJcbiAgICB3aWR0aDogOTdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk3cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gICAgdHJhbnNpdGlvbjogLjI1cyBlYXNlLW91dDtcclxufVxyXG5cclxuLmNpcmNsZS1jYXJkLWxldHRlciB7XHJcbiAgICBwYWRkaW5nOiAzM3B4O1xyXG59XHJcblxyXG4uY2lyY2xlLWNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjIwcmVtKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDYwLCAxNSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4udG9vbGJhci10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTonRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNjVweDtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDMycHggYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gICAgLyogcGFkZGluZzogMCA2MnB4OyAqL1xyXG4gICAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNpZGUtbmF2LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3JkZXI6IC0xO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuLnNpZGUtbmF2LWl0ZW0sXHJcbi5zZWxlY3RlZC1zaWRlLW5hdi1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogc2lsdmVyO1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNlbGVjdGVkLXNpZGUtbmF2LWl0ZW0ge1xyXG4gICAgY29sb3I6IGRpbWdyYXk7XHJcbn1cclxuXHJcbi5zaWRlLW5hdi1pdGVtOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2IoMjEwLCA2MCwgMTUpO1xyXG59XHJcblxyXG4uc2lkZS1uYXYtaXRlbTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxufVxyXG5cclxuLnNpZGUtbmF2LWl0ZW06aG92ZXI6YmVmb3JlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgfVxyXG5cclxuLmNvbnRlbnQtZGV0YWlsIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIG9yZGVyOiAxO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbnN2ZyNjbG91ZHMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAtMTYwcHg7XHJcbiAgICBsZWZ0OiAtMjMwcHg7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgICB3aWR0aDogMTkyMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'jaycemeyer-website';
        this.date = new Date().getFullYear();
        this.displayAboutPage = true;
        this.displayPortfolioPage = false;
        this.displayContactPage = false;
        this.displayResumePage = false;
      }

      _createClass(AppComponent, [{
        key: "loadPage",
        value: function loadPage(pageName) {
          document.getElementById("content-detail").style.zIndex = '-1';
          setTimeout(function () {
            document.getElementById("content-detail").style.zIndex = '1';
          }, 350);

          switch (pageName) {
            case "about":
              {
                this.displayAboutPage = true;
                this.displayPortfolioPage = false;
                this.displayContactPage = false;
                this.displayResumePage = false;
                break;
              }

            case "portfolio":
              {
                this.displayAboutPage = false;
                this.displayPortfolioPage = true;
                this.displayContactPage = false;
                this.displayResumePage = false;
                break;
              }

            case "contact":
              {
                this.displayAboutPage = false;
                this.displayPortfolioPage = false;
                this.displayContactPage = true;
                this.displayResumePage = false;
                break;
              }

            case 'resume':
              {
                this.displayAboutPage = false;
                this.displayPortfolioPage = false;
                this.displayContactPage = false;
                this.displayResumePage = true;
                break;
              }
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about-page/about-page.component */
    "./src/app/about-page/about-page.component.ts");
    /* harmony import */


    var _portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./portfolio-page/portfolio-page.component */
    "./src/app/portfolio-page/portfolio-page.component.ts");
    /* harmony import */


    var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact-page/contact-page.component */
    "./src/app/contact-page/contact-page.component.ts");
    /* harmony import */


    var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contact-form/contact-form.component */
    "./src/app/contact-form/contact-form.component.ts");
    /* harmony import */


    var _resume_page_resume_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./resume-page/resume-page.component */
    "./src/app/resume-page/resume-page.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__["AboutPageComponent"], _portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioPageComponent"], _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__["ContactPageComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_7__["ContactFormComponent"], _resume_page_resume_page_component__WEBPACK_IMPORTED_MODULE_8__["ResumePageComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/contact-form/contact-form.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/contact-form/contact-form.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactFormContactFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n    width: 100%;\r\n    display: flex;\r\n    display: inline-flex;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    flex-basis: auto;\r\n}\r\n\r\n.form-control {\r\n    width: 100%;\r\n    display: flex;\r\n    display: inline-flex;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    flex-basis: auto;\r\n}\r\n\r\n.btn-success {\r\n    float: right;\r\n}\r\n\r\n.btn-success, .btn-primary {\r\n    background-color: black;\r\n    border-color: black;\r\n}\r\n\r\n.btn-success:hover, .btn-primary:hover {\r\n    background-color: rgb(210, 60, 15);\r\n    border-color: rgb(210, 60, 15);\r\n}\r\n\r\n.btn-success:disabled:hover, .btn-primary:disabled:hover {\r\n    background-color: black;\r\n    border-color: black;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDhCQUE4QixFQUFFLFVBQVU7QUFDOUM7O0FBRUE7SUFDSSw4QkFBOEIsRUFBRSxRQUFRO0FBQzVDIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGZsZXgtYmFzaXM6IGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBmbGV4LWJhc2lzOiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3MsIC5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5idG4tc3VjY2Vzczpob3ZlciwgLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDYwLCAxNSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTAsIDYwLCAxNSk7XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzczpkaXNhYmxlZDpob3ZlciwgLmJ0bi1wcmltYXJ5OmRpc2FibGVkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkICB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXHJcbn1cclxuICBcclxuLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/contact-form/contact-form.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/contact-form/contact-form.component.ts ***!
    \********************************************************/

  /*! exports provided: ContactFormComponent */

  /***/
  function srcAppContactFormContactFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function () {
      return ContactFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact */
    "./src/app/contact-form/contact.ts");

    var ContactFormComponent = /*#__PURE__*/function () {
      function ContactFormComponent(http) {
        _classCallCheck(this, ContactFormComponent);

        this.http = http;
        this.model = new _contact__WEBPACK_IMPORTED_MODULE_4__["Contact"]('', '', '');
        this.submitted = false;
      }

      _createClass(ContactFormComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true;
          this.http.post('https://formspree.io/meqpqwkq', {
            name: this.model.name,
            _replyto: this.model.email,
            message: this.model.message
          }).subscribe();
        }
      }, {
        key: "newContact",
        value: function newContact() {
          this.model = new _contact__WEBPACK_IMPORTED_MODULE_4__["Contact"]('', '', '');
          this.fields.forEach(function (model) {
            return model.control.reset();
          });
          this.submitted = false;
        }
      }]);

      return ContactFormComponent;
    }();

    ContactFormComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"])], ContactFormComponent.prototype, "fields", void 0);
    ContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'contact-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-form/contact-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-form.component.css */
      "./src/app/contact-form/contact-form.component.css"))["default"]]
    })], ContactFormComponent);
    /***/
  },

  /***/
  "./src/app/contact-form/contact.ts":
  /*!*****************************************!*\
    !*** ./src/app/contact-form/contact.ts ***!
    \*****************************************/

  /*! exports provided: Contact */

  /***/
  function srcAppContactFormContactTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Contact", function () {
      return Contact;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Contact = function Contact(name, email, message) {
      _classCallCheck(this, Contact);

      this.name = name;
      this.email = email;
      this.message = message;
    };
    /***/

  },

  /***/
  "./src/app/contact-page/contact-page.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/contact-page/contact-page.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactPageContactPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".contact {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.float-child {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 20px;\r\n    padding-top: 0px;\r\n}\r\n\r\n:host {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    margin: 8px 0;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6, header {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    background: transparent;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBKQUEwSjtJQUMxSixlQUFlO0lBQ2YsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsa0NBQWtDO0FBQ3RDOztBQUVBOzs7Ozs7SUFNSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLHdCQUF3QjtJQUN4Qix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXBhZ2UvY29udGFjdC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZsb2F0LWNoaWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2IHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIGhlYWRlciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/contact-page/contact-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/contact-page/contact-page.component.ts ***!
    \********************************************************/

  /*! exports provided: ContactPageComponent */

  /***/
  function srcAppContactPageContactPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function () {
      return ContactPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_assets_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/assets/animations */
    "./src/assets/animations.ts");

    var ContactPageComponent = /*#__PURE__*/function () {
      function ContactPageComponent() {
        _classCallCheck(this, ContactPageComponent);

        this.openClose = true;
      }

      _createClass(ContactPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          setTimeout(function () {
            document.getElementById("content-detail").style.zIndex = '1';
          }, 350);
        }
      }]);

      return ContactPageComponent;
    }();

    ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'contact-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html"))["default"],
      animations: [src_assets_animations__WEBPACK_IMPORTED_MODULE_2__["SlideDownAnimation"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-page.component.css */
      "./src/app/contact-page/contact-page.component.css"))["default"]]
    })], ContactPageComponent);
    /***/
  },

  /***/
  "./src/app/portfolio-page/portfolio-page.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/portfolio-page/portfolio-page.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPortfolioPagePortfolioPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".portfolio {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.float-child {\r\n    width: 50%;\r\n    float: left;\r\n    padding: 20px;\r\n    padding-top: 0px;\r\n    min-width: 175px;\r\n}\r\n\r\n.button {\r\n    float: left;\r\n    height: 30px;\r\n    background: black;\r\n    width: 12vw;\r\n    text-align: center;\r\n    color: white;\r\n    max-width: 200px;\r\n    min-width: 100px;\r\n    line-height: 30px;\r\n    border-top-left-radius: 8px;\r\n    border-bottom-left-radius: 8px;\r\n}\r\n\r\n.arrow-right {\r\n    width:0; \r\n    height:0; \r\n    border-top:15px solid transparent;\r\n    border-bottom:15px solid transparent;\r\n    border-left:15px solid black; \r\n    float:right;\r\n}\r\n\r\n.button:hover {\r\n    font-weight:bold;\r\n    background-color: rgb(210, 60, 15);\r\n    border-color: rgb(210, 60, 15);\r\n}\r\n\r\n.button:hover + .arrow-right {\r\n    border-left:15px solid rgb(210, 60, 15) !important;\r\n}\r\n\r\n.button-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.arrow-left {\r\n    width:0; \r\n    height:0; \r\n    border-top:20px solid transparent;\r\n    border-bottom:20px solid transparent;\r\n    border-right:20px solid black; \r\n    float:left;\r\n}\r\n\r\n.button-tile-duel-calc {\r\n    height: 19vw;\r\n    max-height: 250px;\r\n    max-width: 350px;\r\n}\r\n\r\n.button-tile-candy-gal {\r\n    height: 13.2vw;\r\n    width: 22vw;\r\n    max-height: 211px;\r\n    max-width: 350px;\r\n}\r\n\r\n.button-tile-joke-gen {\r\n    height: 15.2vw;\r\n    width: 22vw;\r\n    max-height: 190px;\r\n    max-width: 270px;\r\n}\r\n\r\n.button-tile {\r\n    float: right;\r\n    box-shadow: black 6px 6px 6px;\r\n}\r\n\r\n​\r\n\r\nimg {\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n}\r\n\r\n.button-tile:hover {\r\n    box-shadow: rgb(210, 60, 15) 6px 6px 6px;\r\n    background-color: rgb(210, 60, 15);\r\n    border-color: rgb(210, 60, 15);\r\n}\r\n\r\n.card-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.card-container:hover .arrow-left {\r\n    border-right:20px solid rgb(210, 60, 15) !important;\r\n}\r\n\r\n.card-container:hover .button-tile {\r\n    box-shadow: rgb(210, 60, 15) 6px 6px 6px;\r\n    background-color: rgb(210, 60, 15);\r\n    border-color: rgb(210, 60, 15);\r\n}\r\n\r\n:host {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    margin: 8px 0;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6, header {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    background: transparent;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvLXBhZ2UvcG9ydGZvbGlvLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLE9BQU87SUFDUCxRQUFRO0lBQ1IsaUNBQWlDO0lBQ2pDLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksT0FBTztJQUNQLFFBQVE7SUFDUixpQ0FBaUM7SUFDakMsb0NBQW9DO0lBQ3BDLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBQUM7OztJQUdHLHNCQUFtQjtPQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsa0NBQWtDO0lBQ2xDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsa0NBQWtDO0lBQ2xDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDBKQUEwSjtJQUMxSixlQUFlO0lBQ2YsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsa0NBQWtDO0FBQ3RDOztBQUVBOzs7Ozs7SUFNSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLHdCQUF3QjtJQUN4Qix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8tcGFnZS9wb3J0Zm9saW8tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcnRmb2xpbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZsb2F0LWNoaWxkIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxNzVweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDEydnc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uYXJyb3ctcmlnaHQge1xyXG4gICAgd2lkdGg6MDsgXHJcbiAgICBoZWlnaHQ6MDsgXHJcbiAgICBib3JkZXItdG9wOjE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOjE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDoxNXB4IHNvbGlkIGJsYWNrOyBcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCA2MCwgMTUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjEwLCA2MCwgMTUpO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyICsgLmFycm93LXJpZ2h0IHtcclxuICAgIGJvcmRlci1sZWZ0OjE1cHggc29saWQgcmdiKDIxMCwgNjAsIDE1KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFycm93LWxlZnQge1xyXG4gICAgd2lkdGg6MDsgXHJcbiAgICBoZWlnaHQ6MDsgXHJcbiAgICBib3JkZXItdG9wOjIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOjIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6MjBweCBzb2xpZCBibGFjazsgXHJcbiAgICBmbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4uYnV0dG9uLXRpbGUtZHVlbC1jYWxjIHtcclxuICAgIGhlaWdodDogMTl2dztcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuLmJ1dHRvbi10aWxlLWNhbmR5LWdhbCB7XHJcbiAgICBoZWlnaHQ6IDEzLjJ2dztcclxuICAgIHdpZHRoOiAyMnZ3O1xyXG4gICAgbWF4LWhlaWdodDogMjExcHg7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXRpbGUtam9rZS1nZW4ge1xyXG4gICAgaGVpZ2h0OiAxNS4ydnc7XHJcbiAgICB3aWR0aDogMjJ2dztcclxuICAgIG1heC1oZWlnaHQ6IDE5MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNzBweDtcclxufVxyXG5cclxuLmJ1dHRvbi10aWxlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJveC1zaGFkb3c6IGJsYWNrIDZweCA2cHggNnB4O1xyXG594oCLXHJcblxyXG5pbWcge1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLmJ1dHRvbi10aWxlOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IHJnYigyMTAsIDYwLCAxNSkgNnB4IDZweCA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCA2MCwgMTUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjEwLCA2MCwgMTUpO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lcjpob3ZlciAuYXJyb3ctbGVmdCB7XHJcbiAgICBib3JkZXItcmlnaHQ6MjBweCBzb2xpZCByZ2IoMjEwLCA2MCwgMTUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lcjpob3ZlciAuYnV0dG9uLXRpbGUge1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDIxMCwgNjAsIDE1KSA2cHggNnB4IDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDYwLCAxNSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTAsIDYwLCAxNSk7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBoZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/portfolio-page/portfolio-page.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/portfolio-page/portfolio-page.component.ts ***!
    \************************************************************/

  /*! exports provided: PortfolioPageComponent */

  /***/
  function srcAppPortfolioPagePortfolioPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioPageComponent", function () {
      return PortfolioPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_assets_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/assets/animations */
    "./src/assets/animations.ts");

    var PortfolioPageComponent = /*#__PURE__*/function () {
      function PortfolioPageComponent() {
        _classCallCheck(this, PortfolioPageComponent);

        this.showResumePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openClose = true;
      }

      _createClass(PortfolioPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          setTimeout(function () {
            document.getElementById("content-detail").style.zIndex = '1';
          }, 350);
        }
      }, {
        key: "loadResumePage",
        value: function loadResumePage() {
          this.showResumePage.emit();
        }
      }]);

      return PortfolioPageComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PortfolioPageComponent.prototype, "showResumePage", void 0);
    PortfolioPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'portfolio-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./portfolio-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio-page/portfolio-page.component.html"))["default"],
      animations: [src_assets_animations__WEBPACK_IMPORTED_MODULE_2__["SlideDownAnimation"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./portfolio-page.component.css */
      "./src/app/portfolio-page/portfolio-page.component.css"))["default"]]
    })], PortfolioPageComponent);
    /***/
  },

  /***/
  "./src/app/resume-page/resume-page.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/resume-page/resume-page.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppResumePageResumePageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".resume {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.float-child {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 0px;\r\n    padding-top: 0px;\r\n    padding-left: 20px;\r\n}\r\n\r\n:host {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    margin: 8px 0;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6, header {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    vertical-align: baseline;\r\n    background: transparent;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lLXBhZ2UvcmVzdW1lLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMEpBQTBKO0lBQzFKLGVBQWU7SUFDZixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxrQ0FBa0M7QUFDdEM7O0FBRUE7Ozs7OztJQU1JLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS1wYWdlL3Jlc3VtZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZmxvYXQtY2hpbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBoZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/resume-page/resume-page.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/resume-page/resume-page.component.ts ***!
    \******************************************************/

  /*! exports provided: ResumePageComponent */

  /***/
  function srcAppResumePageResumePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumePageComponent", function () {
      return ResumePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_assets_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/assets/animations */
    "./src/assets/animations.ts");

    var ResumePageComponent = /*#__PURE__*/function () {
      function ResumePageComponent() {
        _classCallCheck(this, ResumePageComponent);

        this.openClose = true;
      }

      _createClass(ResumePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          setTimeout(function () {
            document.getElementById("content-detail").style.zIndex = '1';
          }, 350);
        }
      }]);

      return ResumePageComponent;
    }();

    ResumePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'resume-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resume-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/resume-page/resume-page.component.html"))["default"],
      animations: [src_assets_animations__WEBPACK_IMPORTED_MODULE_2__["SlideDownAnimation"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resume-page.component.css */
      "./src/app/resume-page/resume-page.component.css"))["default"]]
    })], ResumePageComponent);
    /***/
  },

  /***/
  "./src/assets/animations.ts":
  /*!**********************************!*\
    !*** ./src/assets/animations.ts ***!
    \**********************************/

  /*! exports provided: SlideDownAnimation */

  /***/
  function srcAssetsAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlideDownAnimation", function () {
      return SlideDownAnimation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var SlideDownAnimation = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideDown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateY(0%)'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateY(-100%)'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')])])];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\meyerja\Documents\Side Projects\angular-personal-website\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map