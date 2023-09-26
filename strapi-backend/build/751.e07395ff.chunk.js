"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[751],{

/***/ 60751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-import-export-entries/admin/src/pluginId.js
var pluginId = __webpack_require__(77575);
var pluginId_default = /*#__PURE__*/__webpack_require__.n(pluginId);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.js + 3 modules
var Checkbox = __webpack_require__(72204);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.js
var Link = __webpack_require__(23620);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js + 10 modules
var Select = __webpack_require__(46678);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js
var Option = __webpack_require__(82562);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/lodash/range.js
var range = __webpack_require__(96026);
var range_default = /*#__PURE__*/__webpack_require__.n(range);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-import-export-entries/admin/src/hooks/useI18n.js
var useI18n = __webpack_require__(51744);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-import-export-entries/admin/src/components/Header/Header.js




const Header = () => {
  const { i18n } = (0,useI18n/* useI18n */.Q)();
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral100" }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* BaseHeaderLayout */.A,
    {
      title: i18n("plugin.name", "Import Export"),
      subtitle: i18n("plugin.description", "Import/Export data from and to your database in just few clicks"),
      as: "h2"
    }
  ));
};

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-import-export-entries/admin/src/components/Header/index.js


// EXTERNAL MODULE: ./node_modules/strapi-plugin-import-export-entries/admin/src/components/InjectedExportButton/index.js + 10 modules
var InjectedExportButton = __webpack_require__(2851);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-import-export-entries/admin/src/components/InjectedImportButton/index.js + 13 modules
var InjectedImportButton = __webpack_require__(39687);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-import-export-entries/admin/src/hooks/useLocalStorage.js
var useLocalStorage = __webpack_require__(36462);
// EXTERNAL MODULE: ./node_modules/strapi-plugin-import-export-entries/admin/src/utils/dataFormats.js
var dataFormats = __webpack_require__(74837);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-import-export-entries/admin/src/pages/HomePage/HomePage.js















const HomePage = () => {
  const { i18n } = (0,useI18n/* useI18n */.Q)();
  const { getPreferences, updatePreferences } = (0,useLocalStorage/* useLocalStorage */._)();
  const [preferences, setPreferences] = (0,react.useState)(getPreferences());
  const handleUpdatePreferences = (key, value) => {
    updatePreferences({ [key]: value });
    setPreferences(getPreferences());
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Header, null), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "start", gap: 8 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { style: { alignSelf: "stretch" }, background: "neutral0", padding: "32px", hasRadius: true }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "start", gap: 6 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "alpha" }, i18n("plugin.page.homepage.section.quick-actions.title", "Quick Actions")), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "start", gap: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 4 }, /* @__PURE__ */ react.createElement(InjectedImportButton/* InjectedImportButton */.e, null), /* @__PURE__ */ react.createElement(InjectedExportButton/* InjectedExportButton */.M, { availableExportFormats: [dataFormats/* dataFormats.JSON_V2 */.g.JSON_V2] })))))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { style: { alignSelf: "stretch" }, background: "neutral0", padding: "32px", hasRadius: true }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "start", gap: 6 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "alpha" }, i18n("plugin.page.homepage.section.preferences.title", "Preferences")), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "start", gap: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Checkbox/* Checkbox */.X, { value: preferences.applyFilters, onValueChange: (value) => handleUpdatePreferences("applyFilters", value) }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, i18n("plugin.export.apply-filters-and-sort", "Apply filters and sort to exported data")))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(
    Select/* Select */.P,
    {
      label: i18n("plugin.export.deepness", "Deepness"),
      placeholder: i18n("plugin.export.deepness", "Deepness"),
      value: preferences.deepness,
      onChange: (value) => handleUpdatePreferences("deepness", value)
    },
    range_default()(1, 21).map((deepness) => /* @__PURE__ */ react.createElement(Option/* Option */.W, { key: deepness, value: deepness }, deepness))
  )))))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { style: { alignSelf: "stretch" }, background: "neutral0", padding: "32px", hasRadius: true }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "start", gap: 6 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "alpha" }, i18n("plugin.page.homepage.section.need-help.title", "Need Help?")), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "start", gap: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, i18n("plugin.page.homepage.section.need-help.description", "A feature to request? A bug to report? Feel free to reach out on discord or github \u270C\uFE0F")), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 4 }, /* @__PURE__ */ react.createElement(Link/* Link */.r, { href: "https://discord.gg/dcqCAFFdP8", isExternal: true }, "Discord"), /* @__PURE__ */ react.createElement(Link/* Link */.r, { href: "https://github.com/Baboo7/strapi-plugin-import-export-entries/issues", isExternal: true }, "GitHub")))))))));
};
/* harmony default export */ const HomePage_HomePage = ((0,react.memo)(HomePage));

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-import-export-entries/admin/src/pages/HomePage/index.js


;// CONCATENATED MODULE: ./node_modules/strapi-plugin-import-export-entries/admin/src/pages/App/index.js





const App = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: `/plugins/${(pluginId_default())}`, component: HomePage_HomePage, exact: true }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { component: helper_plugin.NotFound })));
};
/* harmony default export */ const pages_App = (App);


/***/ }),

/***/ 49066:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41580);



const p = ({ children: e }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .x, { paddingLeft: 10, paddingRight: 10 }, e);
p.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.node.isRequired
};



/***/ }),

/***/ 53979:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ s)
});

// UNUSED EXPORTS: HeaderLayout

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(27821);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useElementOnScreen.js

const b = (t) => {
  const e = (0,react.useRef)(null), [s, c] = (0,react.useState)(!0), i = ([n]) => {
    c(n.isIntersecting);
  };
  return (0,react.useEffect)(() => {
    const n = e.current, r = new IntersectionObserver(i, t);
    return n && r.observe(e.current), () => {
      n && r.disconnect();
    };
  }, [e, t]), [e, s];
};


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.js
var dist = __webpack_require__(98402);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useResizeObserver.js


const c = (e, i) => {
  const t = (0,dist.useCallbackRef)(i);
  (0,react.useLayoutEffect)(() => {
    const r = new ResizeObserver(t);
    return Array.isArray(e) ? e.forEach((n) => {
      n.current && r.observe(n.current);
    }) : e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e, t]);
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js








const L = () => {
  const n = (0,react.useRef)(null), [o, a] = (0,react.useState)(null), [r, d] = b({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  return c(r, () => {
    r.current && a(r.current.getBoundingClientRect());
  }), (0,react.useEffect)(() => {
    n.current && a(n.current.getBoundingClientRect());
  }, [n]), {
    containerRef: r,
    isVisible: d,
    baseHeaderLayoutRef: n,
    headerSize: o
  };
}, p = (n) => {
  const { containerRef: o, isVisible: a, baseHeaderLayoutRef: r, headerSize: d } = L();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", { style: { height: d?.height }, ref: o }, a && /* @__PURE__ */ react.createElement(s, { ref: r, ...n })), !a && /* @__PURE__ */ react.createElement(s, { ...n, sticky: !0, width: d?.width }));
};
p.displayName = "HeaderLayout";
const x = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  width: ${(n) => n.width}px;
`, s = react.forwardRef(
  ({ navigationAction: n, primaryAction: o, secondaryAction: a, subtitle: r, title: d, sticky: f, width: g, ...u }, y) => {
    const m = typeof r == "string";
    return f ? /* @__PURE__ */ react.createElement(
      x,
      {
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 3,
        paddingBottom: 3,
        position: "fixed",
        top: 0,
        right: 0,
        background: "neutral0",
        shadow: "tableShadow",
        width: g,
        zIndex: 4,
        "data-strapi-header-sticky": !0
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, n && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 3 }, n), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta", as: "h1", ...u }, d), m ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600" }, r) : r), a ? /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4 }, a) : null), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, o ? /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 2 }, o) : void 0))
    ) : /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        ref: y,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 8,
        paddingTop: n ? 6 : 8,
        background: "neutral100",
        "data-strapi-header": !0
      },
      n ? /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 2 }, n) : null,
      /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { minWidth: 0 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "h1", variant: "alpha", ...u }, d), a ? /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4 }, a) : null), o),
      m ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600", as: "p" }, r) : r
    );
  }
);
s.displayName = "BaseHeaderLayout";
s.defaultProps = {
  navigationAction: void 0,
  primaryAction: void 0,
  secondaryAction: void 0,
  subtitle: void 0,
  sticky: !1,
  width: void 0
};
s.propTypes = {
  navigationAction: prop_types.node,
  primaryAction: prop_types.node,
  secondaryAction: prop_types.node,
  sticky: prop_types.bool,
  subtitle: prop_types.oneOfType([prop_types.string, prop_types.node]),
  title: prop_types.string.isRequired,
  width: prop_types.number
};
p.defaultProps = {
  navigationAction: void 0,
  primaryAction: void 0,
  secondaryAction: void 0,
  subtitle: void 0
};
p.propTypes = {
  navigationAction: prop_types.node,
  primaryAction: prop_types.node,
  secondaryAction: prop_types.node,
  subtitle: prop_types.oneOfType([prop_types.string, prop_types.node]),
  title: prop_types.string.isRequired
};



/***/ }),

/***/ 23620:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ z)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41363);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49656);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27821);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41580);
/* harmony import */ var _themes_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15585);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75515);








const x = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({
  disabled: r
}) => r ? "none" : void 0};
  color: ${({
  disabled: r,
  theme: o
}) => r ? o.colors.neutral600 : o.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10 / 16}rem;
  }

  ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({
  theme: r
}) => r.colors.primary500};
  }

  &:active {
    color: ${({
  theme: r
}) => r.colors.primary700};
  }

  ${_themes_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .buttonFocusStyle */ .BF};
`, t = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_Box_Box_js__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .x)`
  display: flex;
`, z = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  children: r,
  href: o,
  to: i,
  disabled: n = !1,
  startIcon: a,
  endIcon: l,
  ...c
}, d) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(x, {
  as: i && !n ? react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink : "a",
  target: o ? "_blank" : void 0,
  rel: o ? "noreferrer noopener" : void 0,
  to: n ? void 0 : i,
  href: n ? "#" : o,
  disabled: n,
  ref: d,
  ...c,
  children: [a && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
    as: "span",
    "aria-hidden": !0,
    paddingRight: 2,
    children: a
  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
    children: r
  }), l && !o && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
    as: "span",
    "aria-hidden": !0,
    paddingLeft: 2,
    children: l
  }), o && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
    as: "span",
    "aria-hidden": !0,
    paddingLeft: 2,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_7__.ExternalLink, {})
  })]
}));



/***/ })

}]);