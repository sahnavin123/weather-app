/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const API_KEY = `5801ae6e2df53735cd724377769f2447`;\r\nconst search = document.getElementById(\"search\");\r\nconst result = document.querySelector(\".result\");\r\n\r\nconst getWeather = async (city) => {\r\n  try {\r\n    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;\r\n    const response = await fetch(url);\r\n    const data = await response.json();\r\n    search.value = \"\";\r\n    return showResult(data);\r\n  } catch (err) {\r\n    console.log(err);\r\n  }\r\n};\r\n\r\nconst showResult = (data) => {\r\n  if (data.cod === \"404\") {\r\n    result.innerHTML = \"\";\r\n    const errorMsg = document.createElement(\"p\");\r\n    errorMsg.classList.add(\"errorMsg\");\r\n    errorMsg.innerText = \"City weather not found!!\";\r\n    result.appendChild(errorMsg);\r\n    return;\r\n  }\r\n\r\n  result.innerHTML = `\r\n    <div>\r\n        <img src=\"https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png\" alt=\"weather-icon\" />\r\n    </div>\r\n    <div>\r\n        <h2>${data.main.temp} ℃</h2>\r\n        <h4> ${data.weather[0].main} </h4>\r\n    </div>\r\n    `;\r\n};\r\n\r\ndocument.addEventListener(\"submit\", (e) => {\r\n  search.value !== \"\" ? getWeather(search.value) : null;\r\n  e.preventDefault();\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;