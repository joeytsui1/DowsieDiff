/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_playerInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/playerInfo */ \"./src/scripts/playerInfo.js\");\n/* harmony import */ var _scripts_playerRank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/playerRank */ \"./src/scripts/playerRank.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  fetch(`https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/mínasrmy?api_key=RGAPI-14ffa171-3fe2-40cd-ab39-69fb9e5630aa`).then(response => response.json()).then(data => {\n    new _scripts_playerInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\n    return fetch(`https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/${data.id}?api_key=RGAPI-14ffa171-3fe2-40cd-ab39-69fb9e5630aa`).then(response => response.json()).then(data => {\n      new _scripts_playerRank__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data);\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTZDO0FBQ0E7QUFDN0NFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUM1Q0MsS0FBSyxDQUFFLDZIQUE0SCxDQUFDLENBQ25JQyxJQUFJLENBQUNDLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ2pDRixJQUFJLENBQUNHLElBQUksSUFBSTtJQUNWLElBQUlSLDJEQUFVLENBQUNRLElBQUksQ0FBQztJQUVwQixPQUFPSixLQUFLLENBQUUsbUVBQWtFSSxJQUFJLENBQUNDLEVBQUcscURBQW9ELENBQUMsQ0FDcElKLElBQUksQ0FBQ0MsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDakNGLElBQUksQ0FBQ0csSUFBSSxJQUFJO01BQ1YsSUFBSVAsMkRBQVUsQ0FBQ08sSUFBSSxDQUFDO0lBQ3hCLENBQUMsQ0FBQztFQUNkLENBQUMsQ0FBQztBQUNWLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RmdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXJJbmZvIGZyb20gXCIuL3NjcmlwdHMvcGxheWVySW5mb1wiXG5pbXBvcnQgUGxheWVyUmFuayBmcm9tIFwiLi9zY3JpcHRzL3BsYXllclJhbmtcIlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vbmExLmFwaS5yaW90Z2FtZXMuY29tL3RmdC9zdW1tb25lci92MS9zdW1tb25lcnMvYnktbmFtZS9tw61uYXNybXk/YXBpX2tleT1SR0FQSS0xNGZmYTE3MS0zZmUyLTQwY2QtYWIzOS02OWZiOWU1NjMwYWFgKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbmV3IFBsYXllckluZm8oZGF0YSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwczovL25hMS5hcGkucmlvdGdhbWVzLmNvbS90ZnQvbGVhZ3VlL3YxL2VudHJpZXMvYnktc3VtbW9uZXIvJHtkYXRhLmlkfT9hcGlfa2V5PVJHQVBJLTE0ZmZhMTcxLTNmZTItNDBjZC1hYjM5LTY5ZmI5ZTU2MzBhYWApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUGxheWVyUmFuayhkYXRhKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KVxufSkiXSwibmFtZXMiOlsiUGxheWVySW5mbyIsIlBsYXllclJhbmsiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/playerInfo.js":
/*!***********************************!*\
  !*** ./src/scripts/playerInfo.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass PlayerInfo {\n  constructor(data) {\n    this.data;\n    this.playerInfo(data);\n  }\n  playerInfo(data) {\n    console.log(data);\n    let iconId = data.profileIconId;\n    let image = document.querySelector('#icon-pic');\n    image.src = `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/${iconId}.png`;\n    const playerLevel = document.querySelector('#player-level');\n    console.log(playerLevel);\n    username.innerHTML = `${data.name}`;\n    playerLevel.innerHTML = `Level ${data.summonerLevel}`;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerInfo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXJJbmZvLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxVQUFVO0VBQ1pDLFdBQVdBLENBQUNDLElBQUksRUFBQztJQUNiLElBQUksQ0FBQ0EsSUFBSTtJQUNULElBQUksQ0FBQ0MsVUFBVSxDQUFDRCxJQUFJLENBQUM7RUFDekI7RUFFQUMsVUFBVUEsQ0FBQ0QsSUFBSSxFQUFDO0lBQ1pFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUM7SUFDakIsSUFBSUksTUFBTSxHQUFHSixJQUFJLENBQUNLLGFBQWE7SUFDL0IsSUFBSUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDL0NGLEtBQUssQ0FBQ0csR0FBRyxHQUFJLGtFQUFpRUwsTUFBTyxNQUFLO0lBRTFGLE1BQU1NLFdBQVcsR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0lBQzNETixPQUFPLENBQUNDLEdBQUcsQ0FBQ08sV0FBVyxDQUFDO0lBQ3hCQyxRQUFRLENBQUNDLFNBQVMsR0FBSSxHQUFFWixJQUFJLENBQUNhLElBQUssRUFBQztJQUNuQ0gsV0FBVyxDQUFDRSxTQUFTLEdBQUksU0FBUVosSUFBSSxDQUFDYyxhQUFjLEVBQUM7RUFDekQ7QUFDSjtBQUVBLCtEQUFlaEIsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RmdC8uL3NyYy9zY3JpcHRzL3BsYXllckluZm8uanM/NWE5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQbGF5ZXJJbmZve1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpe1xuICAgICAgICB0aGlzLmRhdGFcbiAgICAgICAgdGhpcy5wbGF5ZXJJbmZvKGRhdGEpXG4gICAgfVxuXG4gICAgcGxheWVySW5mbyhkYXRhKXtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgbGV0IGljb25JZCA9IGRhdGEucHJvZmlsZUljb25JZFxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWNvbi1waWMnKVxuICAgICAgICBpbWFnZS5zcmMgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzEzLjEuMS9pbWcvcHJvZmlsZWljb24vJHtpY29uSWR9LnBuZ2BcblxuICAgICAgICBjb25zdCBwbGF5ZXJMZXZlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItbGV2ZWwnKVxuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJMZXZlbClcbiAgICAgICAgdXNlcm5hbWUuaW5uZXJIVE1MID0gYCR7ZGF0YS5uYW1lfWBcbiAgICAgICAgcGxheWVyTGV2ZWwuaW5uZXJIVE1MID0gYExldmVsICR7ZGF0YS5zdW1tb25lckxldmVsfWBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllckluZm8iXSwibmFtZXMiOlsiUGxheWVySW5mbyIsImNvbnN0cnVjdG9yIiwiZGF0YSIsInBsYXllckluZm8iLCJjb25zb2xlIiwibG9nIiwiaWNvbklkIiwicHJvZmlsZUljb25JZCIsImltYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3JjIiwicGxheWVyTGV2ZWwiLCJ1c2VybmFtZSIsImlubmVySFRNTCIsIm5hbWUiLCJzdW1tb25lckxldmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/playerInfo.js\n");

/***/ }),

/***/ "./src/scripts/playerRank.js":
/*!***********************************!*\
  !*** ./src/scripts/playerRank.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass PlayerRank {\n  constructor(data) {\n    this.data = data;\n    this.summonerRankData(data);\n  }\n  summonerRankData(data) {\n    console.log(data);\n    let rankPic = document.querySelector(\"#rank-pic\");\n    let rank = data.length === 0 ? \"Provisional\" : data[0].tier.slice(0, 1) + data[0].tier.slice(1).toLowerCase();\n    if (data.length === 0) {\n      document.querySelector(\"#rank\").innerHTML = `Unranked`;\n      document.querySelector(\"#wins\").innerHTML = `Wins: 0`;\n      document.querySelector(\"#losses\").innerHTML = `Losses: 0`;\n      document.querySelector(\"#lp\").innerHTML = `LP: 0`;\n    } else {\n      if (data[0].tier === \"GRANDMASTER\") {\n        rank = data[0].tier.slice(0, 1) + data[0].tier.slice(1, 5).toLowerCase() + data[0].tier.slice(5, 6) + data[0].tier.slice(6).toLowerCase();\n      }\n      document.querySelector(\"#rank\").innerHTML = `${data[0].tier} ${data[0].rank}`;\n      document.querySelector(\"#wins\").innerHTML = `Wins: ${data[0].wins}`;\n      document.querySelector(\"#losses\").innerHTML = `Losses: ${data[0].losses}`;\n      document.querySelector(\"#lp\").innerHTML = `LP: ${data[0].leaguePoints}`;\n    }\n    rankPic.src = `/dragontail-13.21.1/13.21.1/img/tft-regalia/TFT_Regalia_${rank}.png`;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerRank);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXJSYW5rLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxVQUFVO0VBQ1pDLFdBQVdBLENBQUNDLElBQUksRUFBRTtJQUNkLElBQUksQ0FBQ0EsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNELElBQUksQ0FBQztFQUMvQjtFQUVBQyxnQkFBZ0JBLENBQUNELElBQUksRUFBRTtJQUNuQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQztJQUNqQixJQUFJSSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNqRCxJQUFJQyxJQUFJLEdBQUdQLElBQUksQ0FBQ1EsTUFBTSxLQUFLLENBQUMsR0FBRyxhQUFhLEdBQUdSLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ1MsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHVixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNTLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUM3RyxJQUFJWCxJQUFJLENBQUNRLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDbkJILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDTSxTQUFTLEdBQUksVUFBUztNQUN0RFAsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUNNLFNBQVMsR0FBSSxTQUFRO01BQ3JEUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQ00sU0FBUyxHQUFJLFdBQVU7TUFDekRQLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDTSxTQUFTLEdBQUksT0FBTTtJQUNyRCxDQUFDLE1BQU07TUFDSCxJQUFJWixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNTLElBQUksS0FBSyxhQUFhLEVBQUU7UUFDaENGLElBQUksR0FBR1AsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDUyxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUdWLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ1MsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQyxHQUFHWCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNTLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBR1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDUyxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUM7TUFDN0k7TUFDQU4sUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUNNLFNBQVMsR0FBSSxHQUFFWixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNTLElBQUssSUFBR1QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDTyxJQUFLLEVBQUM7TUFDN0VGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDTSxTQUFTLEdBQUksU0FBUVosSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDYSxJQUFLLEVBQUM7TUFDbkVSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDTSxTQUFTLEdBQUksV0FBVVosSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDYyxNQUFPLEVBQUM7TUFDekVULFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDTSxTQUFTLEdBQUksT0FBTVosSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDZSxZQUFhLEVBQUM7SUFDM0U7SUFDQVgsT0FBTyxDQUFDWSxHQUFHLEdBQUksMkRBQTBEVCxJQUFLLE1BQUs7RUFDdkY7QUFDSjtBQUVBLCtEQUFlVCxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGZ0Ly4vc3JjL3NjcmlwdHMvcGxheWVyUmFuay5qcz81NjAyIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXllclJhbmt7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgICAgIHRoaXMuc3VtbW9uZXJSYW5rRGF0YShkYXRhKVxuICAgIH1cblxuICAgIHN1bW1vbmVyUmFua0RhdGEoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBsZXQgcmFua1BpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFuay1waWNcIik7XG4gICAgICAgIGxldCByYW5rID0gZGF0YS5sZW5ndGggPT09IDAgPyBcIlByb3Zpc2lvbmFsXCIgOiBkYXRhWzBdLnRpZXIuc2xpY2UoMCwgMSkgKyBkYXRhWzBdLnRpZXIuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JhbmtcIikuaW5uZXJIVE1MID0gYFVucmFua2VkYDtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2luc1wiKS5pbm5lckhUTUwgPSBgV2luczogMGA7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvc3Nlc1wiKS5pbm5lckhUTUwgPSBgTG9zc2VzOiAwYDtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbHBcIikuaW5uZXJIVE1MID0gYExQOiAwYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkYXRhWzBdLnRpZXIgPT09IFwiR1JBTkRNQVNURVJcIikge1xuICAgICAgICAgICAgICAgIHJhbmsgPSBkYXRhWzBdLnRpZXIuc2xpY2UoMCwgMSkgKyBkYXRhWzBdLnRpZXIuc2xpY2UoMSwgNSkudG9Mb3dlckNhc2UoKSArIGRhdGFbMF0udGllci5zbGljZSg1LCA2KSArIGRhdGFbMF0udGllci5zbGljZSg2KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYW5rXCIpLmlubmVySFRNTCA9IGAke2RhdGFbMF0udGllcn0gJHtkYXRhWzBdLnJhbmt9YDtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2luc1wiKS5pbm5lckhUTUwgPSBgV2luczogJHtkYXRhWzBdLndpbnN9YDtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9zc2VzXCIpLmlubmVySFRNTCA9IGBMb3NzZXM6ICR7ZGF0YVswXS5sb3NzZXN9YDtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbHBcIikuaW5uZXJIVE1MID0gYExQOiAke2RhdGFbMF0ubGVhZ3VlUG9pbnRzfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmFua1BpYy5zcmMgPSBgL2RyYWdvbnRhaWwtMTMuMjEuMS8xMy4yMS4xL2ltZy90ZnQtcmVnYWxpYS9URlRfUmVnYWxpYV8ke3Jhbmt9LnBuZ2A7IFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyUmFuayJdLCJuYW1lcyI6WyJQbGF5ZXJSYW5rIiwiY29uc3RydWN0b3IiLCJkYXRhIiwic3VtbW9uZXJSYW5rRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyYW5rUGljIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmFuayIsImxlbmd0aCIsInRpZXIiLCJzbGljZSIsInRvTG93ZXJDYXNlIiwiaW5uZXJIVE1MIiwid2lucyIsImxvc3NlcyIsImxlYWd1ZVBvaW50cyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/playerRank.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZnQvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;