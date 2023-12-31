"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[9501],{

/***/ 17502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95489);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28702);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41363);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97132);





const InternalErrorPage = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.useFocusWhenNavigate)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__.Main, { labelledBy: "title" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__.HeaderLayout,
    {
      id: "title",
      title: formatMessage({
        id: "content-manager.pageNotFound",
        defaultMessage: "Page not found"
      })
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__.ContentLayout, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__.EmptyStateLayout,
    {
      action: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.LinkButton, { variant: "secondary", endIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__.ArrowRight, null), to: "/" }, formatMessage({
        id: "app.components.NotFoundPage.back",
        defaultMessage: "Back to homepage"
      })),
      content: formatMessage({
        id: "notification.error",
        defaultMessage: "An error occured"
      }),
      hasRadius: true,
      icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__.EmptyPictures, { width: "10rem" }),
      shadow: "tableShadow"
    }
  )));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InternalErrorPage);


/***/ })

}]);