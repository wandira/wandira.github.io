/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller/index.js":
/*!*********************************!*\
  !*** ./src/controller/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/app */ \"./src/model/app.js\");\n/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/view */ \"./src/view/view.js\");\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pubsub */ \"./src/pubsub.js\");\n\n\n\n\nvar controller = function ControllerModule() {\n  var pubsub = _pubsub__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  var model = (0,_model_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pubsub);\n  var view = (0,_view_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pubsub); // function log(event, data) {\n  //   console.log(`haii ini logg ${event}`);\n  //   console.log(data);\n  // }\n\n  pubsub.subscribe('skeletonRendered', model.updateData);\n  pubsub.subscribe('todoAdded', view.renderTodos);\n  pubsub.subscribe('projectAdded', model.updateData); // pubsub.subscribe('todoDeleted', model.updateData);\n  // pubsub.subscribe('projectDeleted', model.updateData);\n\n  pubsub.subscribe('dataUpdated', view.renderAll);\n  pubsub.subscribe('projectsUpdated', view.renderProjects); // pubsub.subscribe('addNewTodo', model.ad)\n\n  function run() {\n    view.skeletonRender();\n  }\n\n  return {\n    run: run\n  };\n}();\n\ncontroller.run();\n\n//# sourceURL=webpack://todolist/./src/controller/index.js?");

/***/ }),

/***/ "./src/model/app.js":
/*!**************************!*\
  !*** ./src/model/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/model/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/model/todo.js\");\n\n\n\nfunction getDummyProjects() {\n  var one = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Default title');\n  var two = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Default title2');\n\n  for (var x = 0; x < 4; x++) {\n    var data = {\n      title: \"Halo \".concat(x),\n      description: 'td desc',\n      dueDate: 'td duedate',\n      priority: 'td priority'\n    };\n    var data2 = {\n      title: \"Bandung \".concat(x),\n      description: 'td desc',\n      dueDate: 'td duedate',\n      priority: 'td priority'\n    };\n    var td = (0,_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n    one.addTodo(td);\n    var tdd = (0,_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data2);\n    two.addTodo(tdd);\n  }\n\n  return [one, two];\n}\n\nfunction App(pubsub) {\n  var projects = getDummyProjects();\n\n  function updateData() {\n    pubsub.publish('dataUpdated', {\n      projects: projects\n    });\n  }\n\n  function deleteProject(index) {\n    projects.splice(index, 1);\n  }\n\n  return {\n    updateData: updateData,\n    deleteProject: deleteProject\n  };\n}\n\n//# sourceURL=webpack://todolist/./src/model/app.js?");

/***/ }),

/***/ "./src/model/project.js":
/*!******************************!*\
  !*** ./src/model/project.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectFactory)\n/* harmony export */ });\nfunction ProjectFactory(t) {\n  var title = t;\n  var todos = [];\n\n  function getTitle() {\n    return title;\n  }\n\n  function getTodos() {\n    return todos;\n  }\n\n  function editTitle(newTitle) {\n    title = newTitle;\n  }\n\n  function addTodo(todo) {\n    todos.push(todo);\n  }\n\n  function deleteTodo(index) {\n    todos.splice(index, 1);\n  }\n\n  return {\n    getTitle: getTitle,\n    editTitle: editTitle,\n    getTodos: getTodos,\n    addTodo: addTodo,\n    deleteTodo: deleteTodo\n  };\n}\n\n//# sourceURL=webpack://todolist/./src/model/project.js?");

/***/ }),

/***/ "./src/model/todo.js":
/*!***************************!*\
  !*** ./src/model/todo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoFactory)\n/* harmony export */ });\nfunction TodoFactory(data) {\n  var title = data.title,\n      description = data.description,\n      dueDate = data.dueDate,\n      priority = data.priority;\n\n  function getTitle() {\n    return title;\n  }\n\n  function getDescription() {\n    return description;\n  }\n\n  function getDueDate() {\n    return dueDate;\n  }\n\n  function getPriority() {\n    return priority;\n  }\n\n  function editTitle(newTitle) {\n    title = newTitle;\n  }\n\n  function editDescription(newDescription) {\n    description = newDescription;\n  }\n\n  function editDueDate(newDate) {\n    dueDate = newDate;\n  }\n\n  function editPriority(newPriority) {\n    priority = newPriority;\n  }\n\n  return {\n    getTitle: getTitle,\n    getDescription: getDescription,\n    getDueDate: getDueDate,\n    getPriority: getPriority,\n    editTitle: editTitle,\n    editDescription: editDescription,\n    editDueDate: editDueDate,\n    editPriority: editPriority\n  };\n}\n\n//# sourceURL=webpack://todolist/./src/model/todo.js?");

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// https://hackernoon.com/how-to-use-publish-subscribe-pattern-with-javascript-t9123ui0\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function PubSubModule() {\n  var events = {};\n  var subscribersId = -1;\n\n  function publish(event, data) {\n    if (!events[event]) {\n      return false;\n    }\n\n    var subscribers = events[event];\n    subscribers.forEach(function (subscriber) {\n      subscriber.func(event, data);\n    });\n    return true;\n  }\n\n  function subscribe(event, func) {\n    if (!events[event]) {\n      events[event] = [];\n    }\n\n    subscribersId += 1;\n    var token = subscribersId.toString();\n    events[event].push({\n      token: token,\n      func: func\n    });\n    return token;\n  }\n\n  function unsubscribe(token) {\n    var found = Object.keys(events).some(function (event) {\n      return events[event].some(function (subscriber, index) {\n        var areEqual = subscriber.token === token.toString();\n\n        if (areEqual) {\n          events[event].splice(index, 1);\n        }\n\n        return areEqual;\n      });\n    });\n    return found ? token : null;\n  }\n\n  return {\n    publish: publish,\n    subscribe: subscribe,\n    unsubscribe: unsubscribe\n  };\n})());\n\n//# sourceURL=webpack://todolist/./src/pubsub.js?");

/***/ }),

/***/ "./src/view/todoForm.js":
/*!******************************!*\
  !*** ./src/view/todoForm.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todoForm)\n/* harmony export */ });\n/* harmony import */ var _model_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/todo */ \"./src/model/todo.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/view/style.css\");\n\n\nfunction todoForm(contentBody, project, pubsub) {\n  var addTodoDiv = document.createElement('div');\n  var addTodoBtn = document.createElement('button');\n  addTodoDiv.appendChild(addTodoBtn);\n  addTodoBtn.textContent = '+ ADD TODO';\n  addTodoBtn.className = _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todo;\n  addTodoBtn.addEventListener('click', function () {\n    var title = document.createElement('input');\n    var desc = document.createElement('input');\n    var dueDate = document.createElement('input');\n    var priority = document.createElement('input');\n    title.placeholder = 'title';\n    desc.placeholder = 'description';\n    dueDate.placeholder = 'dueDate';\n    priority.placeholder = 'priority';\n    addTodoDiv.appendChild(title);\n    addTodoDiv.appendChild(desc);\n    addTodoDiv.appendChild(dueDate);\n    addTodoDiv.appendChild(priority);\n    addTodoBtn.addEventListener('click', function (e) {\n      e.preventDefault();\n      var data = {\n        title: title.value,\n        description: desc.value,\n        dueDate: dueDate.value,\n        priority: priority.value\n      };\n      project.addTodo((0,_model_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data));\n      pubsub.publish('todoAdded', project);\n    });\n    addTodoDiv.appendChild(title);\n    addTodoDiv.appendChild(desc);\n    addTodoDiv.appendChild(dueDate);\n    addTodoDiv.appendChild(priority);\n  });\n  contentBody.appendChild(addTodoDiv);\n}\n\n//# sourceURL=webpack://todolist/./src/view/todoForm.js?");

/***/ }),

/***/ "./src/view/view.js":
/*!**************************!*\
  !*** ./src/view/view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ View)\n/* harmony export */ });\n/* harmony import */ var _model_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/project */ \"./src/model/project.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/view/style.css\");\n/* harmony import */ var _todoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoForm */ \"./src/view/todoForm.js\");\n\n\n\nfunction View(Pubsub) {\n  var btn = document.createElement('button');\n  btn.innerHTML = 'Click me and check the console!';\n\n  function skeletonRender() {\n    var root = document.createElement('div');\n    root.className = _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].root;\n    var sidebar = document.createElement('div');\n    var sidebarBody = document.createElement('div');\n    sidebar.className = _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sidebar;\n    sidebarBody.className = _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sidebarBody;\n    sidebarBody.id = 'sidebarBody';\n    var content = document.createElement('div');\n    var contentBody = document.createElement('div');\n    content.className = _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].content;\n    contentBody.className = _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].contentBody;\n    contentBody.id = 'contentBody';\n    sidebar.appendChild(sidebarBody);\n    content.appendChild(contentBody);\n    root.appendChild(sidebar);\n    root.appendChild(content);\n    document.body.appendChild(root);\n    Pubsub.publish('skeletonRendered', {\n      nama: 'hhah',\n      umur: 32\n    });\n  }\n\n  function renderTodos(event, project) {\n    console.log('rendertodos', project);\n    var contentBody = document.getElementById('contentBody');\n    contentBody.innerHTML = '';\n    (0,_todoForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(contentBody, project, Pubsub);\n    project.getTodos().forEach(function (t, idx) {\n      // console.log('t', t.getTitle());\n      var tddiv = document.createElement('div');\n      tddiv.textContent = t.getTitle();\n      tddiv.dataset.index = idx;\n      tddiv.className = _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todo;\n      contentBody.appendChild(tddiv);\n    });\n  }\n\n  function renderAll(event, data) {\n    // console.log('masuk rennder all', data.projects[0].getTodos());\n    var projects = data.projects;\n    var sidebarBody = document.getElementById('sidebarBody');\n    var contentBody = document.getElementById('contentBody');\n    sidebarBody.innerHTML = '';\n    contentBody.innerHTML = '';\n    var addProjectDiv = document.createElement('div');\n    var addProjectBtn = document.createElement('button');\n    addProjectDiv.appendChild(addProjectBtn);\n    addProjectBtn.textContent = '+ ADD PROJECT';\n    addProjectBtn.className = _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].project;\n    addProjectBtn.addEventListener('click', function () {\n      // addProjectDiv.innerHTML = '';\n      var addProjectInput = document.createElement('input');\n      addProjectInput.addEventListener('keyup', function (e) {\n        if (e.key === 'Enter') {\n          e.preventDefault();\n          projects.push((0,_model_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e.target.value));\n          Pubsub.publish('projectAdded');\n        }\n      });\n      addProjectDiv.appendChild(addProjectInput);\n    });\n    sidebarBody.appendChild(addProjectDiv);\n    projects.forEach(function (p, idx) {\n      var projTitle = document.createElement('div');\n      projTitle.textContent = p.getTitle();\n      projTitle.dataset.index = idx;\n      projTitle.className = _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].project;\n      projTitle.addEventListener('click', function (e) {\n        var index = e.target.dataset.index;\n        renderTodos(null, projects[index]);\n      });\n      sidebarBody.appendChild(projTitle);\n    });\n    renderTodos(null, projects[0]);\n  }\n\n  return {\n    skeletonRender: skeletonRender,\n    renderAll: renderAll,\n    renderTodos: renderTodos\n  };\n}\n\n//# sourceURL=webpack://todolist/./src/view/view.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/view/style.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/view/style.css ***!
  \**********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nbody{\\n    margin: 0;\\n    font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n.style_root__Mpuyw{\\n    background-color: bisque;\\n    display: flex;\\n}\\n\\n.style_sidebar__LmVY3{\\n    align-items: center;\\n    border: 1px solid red;\\n    display: flex;\\n    justify-content: center;\\n    height: 100vh;\\n    width: 20vw;\\n}\\n\\n.style_content__YU_Ut{\\n    align-items: center;\\n    border: 1px solid blue;\\n    display: flex;\\n    justify-content: center;\\n    height: 100vh;\\n    width: 80vw;\\n}\\n\\n.style_sidebarBody__a7ehi{\\n    border: 2px solid white;\\n    height: 80%;\\n    width: 80%;\\n}\\n\\n.style_contentBody__PgDGM{\\n    border: 2px solid white;\\n    height: 80%;\\n    width: 80%;\\n}\\n\\n.style_todo__EDvhb {\\n    border: 3px solid orange;\\n    margin: 5px;\\n    padding: 20px 4px;\\n}\\n\\n.style_project__khzxk {\\n    border: 2px solid whitesmoke;\\n    margin: 2px;\\n    padding: 15px 2px;\\n}\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"root\": \"style_root__Mpuyw\",\n\t\"sidebar\": \"style_sidebar__LmVY3\",\n\t\"content\": \"style_content__YU_Ut\",\n\t\"sidebarBody\": \"style_sidebarBody__a7ehi\",\n\t\"contentBody\": \"style_contentBody__PgDGM\",\n\t\"todo\": \"style_todo__EDvhb\",\n\t\"project\": \"style_project__khzxk\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/view/style.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/view/style.css":
/*!****************************!*\
  !*** ./src/view/style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./style.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/view/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/view/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/controller/index.js");
/******/ 	
/******/ })()
;