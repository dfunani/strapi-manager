(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[994],{

/***/ 79932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "App": () => (/* binding */ App),
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(15482);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(89734);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/getTrad.js
const getTrad = (id) => `content-manager.${id}`;
/* harmony default export */ const utils_getTrad = (getTrad);

// EXTERNAL MODULE: ./node_modules/react-dnd/dist/cjs/index.js
var cjs = __webpack_require__(99168);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/contexts/LayoutDnd.js

const LayoutDndContext = (0,react.createContext)();
/* harmony default export */ const LayoutDnd = (LayoutDndContext);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/LayoutDndProvider/index.js



function LayoutDndProvider({
  attributes,
  buttonData,
  children,
  goTo,
  layout,
  metadatas,
  moveItem,
  moveRow,
  onAddData,
  relationsLayout,
  removeField,
  selectedItemName,
  setEditFieldToSelect,
  ...rest
}) {
  return /* @__PURE__ */ react.createElement(
    LayoutDnd.Provider,
    {
      value: {
        attributes,
        buttonData,
        goTo,
        layout,
        metadatas,
        moveItem,
        moveRow,
        onAddData,
        relationsLayout,
        removeField,
        selectedItemName,
        setEditFieldToSelect,
        ...rest
      }
    },
    children
  );
}
LayoutDndProvider.defaultProps = {
  attributes: {},
  buttonData: [],
  goTo() {
  },
  layout: [],
  metadatas: {},
  moveItem() {
  },
  moveRow() {
  },
  onAddData() {
  },
  relationsLayout: [],
  removeField() {
  },
  selectedItemName: null,
  setEditFieldToSelect() {
  }
};
LayoutDndProvider.propTypes = {
  attributes: (prop_types_default()).object,
  buttonData: (prop_types_default()).array,
  children: (prop_types_default()).node.isRequired,
  goTo: (prop_types_default()).func,
  layout: (prop_types_default()).array,
  metadatas: (prop_types_default()).object,
  moveItem: (prop_types_default()).func,
  moveRow: (prop_types_default()).func,
  onAddData: (prop_types_default()).func,
  relationsLayout: (prop_types_default()).array,
  removeField: (prop_types_default()).func,
  selectedItemName: (prop_types_default()).string,
  setEditFieldToSelect: (prop_types_default()).func
};
/* harmony default export */ const components_LayoutDndProvider = (LayoutDndProvider);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/ItemTypes.js
/* harmony default export */ const ItemTypes = ({
  COMPONENT: "component",
  EDIT_FIELD: "editField",
  FIELD: "field",
  DYNAMIC_ZONE: "dynamicZone",
  RELATION: "relation"
});

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(27821);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/utils/ellipsisCardTitle.js
const ellipsisCardTitle = (title) => {
  const formatedTitle = title.length > 20 ? `${title.substring(0, 20)}...` : title;
  return formatedTitle;
};
/* harmony default export */ const utils_ellipsisCardTitle = (ellipsisCardTitle);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/components/CardPreview.js






const ActionBox = (0,styled_components_browser_esm["default"])(dist.Flex)`
  height: ${({ theme }) => theme.spaces[7]};

  &:last-child {
    padding: 0 ${({ theme }) => theme.spaces[3]};
  }
`;
const DragButton = (0,styled_components_browser_esm["default"])(ActionBox)`
  padding: 0 ${({ theme }) => theme.spaces[3]};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: ${12 / 16}rem;
    height: ${12 / 16}rem;
  }
`;
const FieldContainer = (0,styled_components_browser_esm["default"])(dist.Flex)`
  display: inline-flex;
  max-height: ${32 / 16}rem;
  opacity: ${({ transparent }) => transparent ? 0 : 1};
  background-color: ${({ theme, isSibling }) => isSibling ? theme.colors.neutral100 : theme.colors.primary100};
  border: 1px solid
    ${({ theme, isSibling }) => isSibling ? theme.colors.neutral150 : theme.colors.primary200};

  svg {
    width: ${10 / 16}rem;
    height: ${10 / 16}rem;

    path {
      fill: ${({ theme, isSibling }) => isSibling ? void 0 : theme.colors.primary600};
    }
  }

  ${dist.Typography} {
    color: ${({ theme, isSibling }) => isSibling ? void 0 : theme.colors.primary600};
  }

  ${DragButton} {
    border-right: 1px solid
      ${({ theme, isSibling }) => isSibling ? theme.colors.neutral150 : theme.colors.primary200};
  }
`;
const CardPreview = ({ labelField, transparent, isSibling }) => {
  const cardEllipsisTitle = utils_ellipsisCardTitle(labelField);
  return /* @__PURE__ */ react.createElement(
    FieldContainer,
    {
      hasRadius: true,
      justifyContent: "space-between",
      transparent,
      isSibling
    },
    /* @__PURE__ */ react.createElement(dist.Flex, { gap: 3 }, /* @__PURE__ */ react.createElement(DragButton, { alignItems: "center" }, /* @__PURE__ */ react.createElement(icons_dist.Drag, null)), /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "bold" }, cardEllipsisTitle)),
    /* @__PURE__ */ react.createElement(dist.Flex, { paddingLeft: 3 }, /* @__PURE__ */ react.createElement(ActionBox, { alignItems: "center" }, /* @__PURE__ */ react.createElement(icons_dist.Pencil, null)), /* @__PURE__ */ react.createElement(ActionBox, { alignItems: "center" }, /* @__PURE__ */ react.createElement(icons_dist.Cross, null)))
  );
};
CardPreview.defaultProps = {
  isSibling: false,
  transparent: false
};
CardPreview.propTypes = {
  isSibling: (prop_types_default()).bool,
  labelField: (prop_types_default()).string.isRequired,
  transparent: (prop_types_default()).bool
};
/* harmony default export */ const components_CardPreview = (CardPreview);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DragLayer/ComponentDragPreview.js






const DragPreviewBox = (0,styled_components_browser_esm["default"])(dist.Box)`
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
`;
const DropdownIconWrapper = (0,styled_components_browser_esm["default"])(dist.Box)`
  height: ${32 / 16}rem;
  width: ${32 / 16}rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: ${6 / 16}rem;
    width: ${11 / 16}rem;
    > path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }
`;
const ToggleButton = styled_components_browser_esm["default"].button`
  border: none;
  background: transparent;
  display: block;
  width: 100%;
  text-align: unset;
  padding: 0;
`;
const DragPreview = ({ displayedValue }) => {
  return /* @__PURE__ */ react.createElement(
    DragPreviewBox,
    {
      paddingLeft: 3,
      paddingRight: 3,
      paddingTop: 3,
      paddingBottom: 3,
      hasRadius: true,
      background: "neutral0",
      width: (0,helper_plugin.pxToRem)(300)
    },
    /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(ToggleButton, { type: "button" }, /* @__PURE__ */ react.createElement(dist.Flex, null, /* @__PURE__ */ react.createElement(DropdownIconWrapper, { background: "neutral200" }, /* @__PURE__ */ react.createElement(icons_dist.CarretDown, null)), /* @__PURE__ */ react.createElement(dist.Flex, { gap: 2, paddingLeft: 6, maxWidth: (0,helper_plugin.pxToRem)(150) }, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral700", ellipsis: true }, displayedValue)))), /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 3 }, /* @__PURE__ */ react.createElement(dist.Flex, null, /* @__PURE__ */ react.createElement(dist.IconButton, { noBorder: true }, /* @__PURE__ */ react.createElement(icons_dist.Trash, null)), /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 2 }, /* @__PURE__ */ react.createElement(dist.IconButton, { noBorder: true }, /* @__PURE__ */ react.createElement(icons_dist.Drag, null))))))
  );
};
DragPreview.propTypes = {
  displayedValue: (prop_types_default()).string.isRequired
};
/* harmony default export */ const ComponentDragPreview = (DragPreview);

// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(50361);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/arrayMoveItem.js

const arrayMoveItem = (arr, from, to) => {
  if (Array.isArray(arr) && from >= 0 && to >= 0 && from <= arr.length - 1 && to <= arr.length - 1) {
    const newArray = cloneDeep_default()(arr);
    const item = newArray.splice(from, 1);
    newArray.splice(to, 0, item[0]);
    return newArray;
  }
  return arr;
};
/* harmony default export */ const utils_arrayMoveItem = (arrayMoveItem);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/checkIfAttributeIsDisplayable.js

const checkIfAttributeIsDisplayable = (attribute) => {
  const type = attribute.type;
  if (type === "relation") {
    return !(0,lodash.toLower)(attribute.relationType).includes("morph");
  }
  return !["json", "dynamiczone", "richtext", "password"].includes(type) && !!type;
};
/* harmony default export */ const utils_checkIfAttributeIsDisplayable = (checkIfAttributeIsDisplayable);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/composeRefs.js
const setRef = (ref, value) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
};
const composeRefs = (...refs) => {
  return (node) => refs.forEach((ref) => setRef(ref, node));
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/createDefaultForm.js

const createDefaultForm = (attributes, allComponentsSchema) => {
  return Object.keys(attributes).reduce((acc, current) => {
    const attribute = (0,lodash.get)(attributes, [current], {});
    const { default: defaultValue, component, type, required, min, repeatable } = attribute;
    if (defaultValue !== void 0) {
      acc[current] = defaultValue;
    }
    if (type === "component") {
      const currentComponentSchema = (0,lodash.get)(allComponentsSchema, [component, "attributes"], {});
      const currentComponentDefaultForm = createDefaultForm(
        currentComponentSchema,
        allComponentsSchema
      );
      if (required === true) {
        acc[current] = repeatable === true ? [] : currentComponentDefaultForm;
      }
      if (min && repeatable === true && required) {
        acc[current] = [];
        for (let i = 0; i < min; i += 1) {
          acc[current].push(currentComponentDefaultForm);
        }
      }
    }
    if (type === "dynamiczone") {
      if (required === true) {
        acc[current] = [];
      }
    }
    return acc;
  }, {});
};
/* harmony default export */ const utils_createDefaultForm = (createDefaultForm);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/formatLayoutToApi.js

const formatLayoutToApi = ({ layouts, metadatas, ...rest }) => {
  const list = layouts.list.map((obj) => {
    if (obj.name) {
      return obj.name;
    }
    return obj;
  });
  const formattedMetadatas = Object.keys(metadatas).reduce((acc, current) => {
    const currentMetadatas = (0,lodash.get)(metadatas, [current], {});
    let editMetadatas = currentMetadatas.edit;
    if (editMetadatas.mainField) {
      editMetadatas = { ...editMetadatas, mainField: currentMetadatas.edit.mainField.name };
    }
    return {
      ...acc,
      [current]: {
        edit: editMetadatas,
        list: (0,lodash.omit)(currentMetadatas.list, ["mainField"])
      }
    };
  }, {});
  const edit = layouts.edit.map(
    (row) => row.map(({ name, size }) => ({
      name,
      size
    }))
  );
  return {
    ...rest,
    layouts: { edit, list },
    metadatas: formattedMetadatas
  };
};
/* harmony default export */ const utils_formatLayoutToApi = (formatLayoutToApi);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/generatePermissionsObject.js
const addSubjectToPermissionsArray = (array, uid) => array.map((data) => ({ ...data, subject: uid }));
const generatePermissionsObject = (uid) => {
  const permissions = {
    create: [{ action: "plugin::content-manager.explorer.create", subject: null }],
    delete: [{ action: "plugin::content-manager.explorer.delete", subject: null }],
    publish: [{ action: "plugin::content-manager.explorer.publish", subject: null }],
    read: [{ action: "plugin::content-manager.explorer.read", subject: null }],
    update: [{ action: "plugin::content-manager.explorer.update", subject: null }]
  };
  return Object.keys(permissions).reduce((acc, current) => {
    acc[current] = addSubjectToPermissionsArray(permissions[current], uid);
    return acc;
  }, {});
};
/* harmony default export */ const utils_generatePermissionsObject = (generatePermissionsObject);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/getFieldName.js

const getFieldName = (stringName) => stringName.split(".").filter((string) => (0,lodash.isNaN)(parseInt(string, 10)));
/* harmony default export */ const utils_getFieldName = (getFieldName);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/getMaxTempKey.js
const getMaxTempKey = (arr) => {
  if (arr.length === 0) {
    return -1;
  }
  const maxTempKey = Math.max.apply(
    Math,
    arr.map((o) => o.__temp_key__ ?? 0)
  );
  return Number.isNaN(maxTempKey) ? -1 : maxTempKey;
};
/* harmony default export */ const utils_getMaxTempKey = (getMaxTempKey);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/getRequestUrl.js
const getRequestUrl = (path) => `/content-manager/${path}`;
/* harmony default export */ const utils_getRequestUrl = (getRequestUrl);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/mergeMetasWithSchema.js

const mergeMetasWithSchema = (data, schemas, mainSchemaKey) => {
  const findSchema = (refUid) => schemas.find((obj) => obj.uid === refUid);
  const merged = Object.assign({}, data);
  const mainUID = data[mainSchemaKey].uid;
  const mainSchema = findSchema(mainUID);
  (0,lodash.set)(merged, [mainSchemaKey], { ...data[mainSchemaKey], ...mainSchema });
  Object.keys(data.components).forEach((compoUID) => {
    const compoSchema = findSchema(compoUID);
    (0,lodash.set)(merged, ["components", compoUID], { ...data.components[compoUID], ...compoSchema });
  });
  return merged;
};
/* harmony default export */ const utils_mergeMetasWithSchema = (mergeMetasWithSchema);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/removePasswordFieldsFromData.js


const removePasswordFieldsFromData = (data, contentTypeSchema, componentSchema) => {
  const recursiveCleanData = (data2, schema) => {
    return Object.keys(data2).reduce((acc, current) => {
      const attrType = (0,helper_plugin.getType)(schema, current);
      const value = (0,lodash.get)(data2, current);
      const component = (0,helper_plugin.getOtherInfos)(schema, [current, "component"]);
      const isRepeatable = (0,helper_plugin.getOtherInfos)(schema, [current, "repeatable"]);
      if (attrType === "dynamiczone") {
        acc[current] = value.map((componentValue) => {
          const subCleanedData = recursiveCleanData(
            componentValue,
            componentSchema[componentValue.__component]
          );
          return subCleanedData;
        });
        return acc;
      }
      if (attrType === "component") {
        if (isRepeatable) {
          acc[current] = value ? value.map((compoData) => {
            const subCleanedData = recursiveCleanData(compoData, componentSchema[component]);
            return subCleanedData;
          }) : value;
        } else {
          acc[current] = value ? recursiveCleanData(value, componentSchema[component]) : value;
        }
        return acc;
      }
      if (attrType !== "password") {
        acc[current] = value;
      }
      return acc;
    }, {});
  };
  return recursiveCleanData(data, contentTypeSchema);
};
/* harmony default export */ const utils_removePasswordFieldsFromData = (removePasswordFieldsFromData);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/index.js















;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/constants.js
const PUBLICATION_STATES = {
  DRAFT: "draft",
  PUBLISHED: "published"
};
const RELATIONS_TO_DISPLAY = 5;
const SEARCH_RESULTS_TO_DISPLAY = 10;

// EXTERNAL MODULE: ./node_modules/react-dnd-html5-backend/dist/cjs/index.js
var dist_cjs = __webpack_require__(61080);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useKeyboardDragAndDrop.js

const useKeyboardDragAndDrop = (active, index, { onCancel, onDropItem, onGrabItem, onMoveItem }) => {
  const [isSelected, setIsSelected] = (0,react.useState)(false);
  const handleMove = (movement) => {
    if (!isSelected) {
      return;
    }
    if (movement === "UP") {
      onMoveItem(index - 1, index);
    } else if (movement === "DOWN") {
      onMoveItem(index + 1, index);
    }
  };
  const handleDragClick = () => {
    if (isSelected) {
      if (onDropItem) {
        onDropItem(index);
      }
      setIsSelected(false);
    } else {
      if (onGrabItem) {
        onGrabItem(index);
      }
      setIsSelected(true);
    }
  };
  const handleCancel = () => {
    if (isSelected) {
      setIsSelected(false);
      if (onCancel) {
        onCancel(index);
      }
    }
  };
  const handleKeyDown = (e) => {
    if (!active) {
      return;
    }
    if (e.key === "Tab" && !isSelected) {
      return;
    }
    e.preventDefault();
    switch (e.key) {
      case " ":
      case "Enter":
        handleDragClick();
        break;
      case "Escape":
        handleCancel();
        break;
      case "ArrowDown":
      case "ArrowRight":
        handleMove("DOWN");
        break;
      case "ArrowUp":
      case "ArrowLeft":
        handleMove("UP");
        break;
      default:
    }
  };
  return handleKeyDown;
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useDragAndDrop.js



const useDragAndDrop = (active, {
  type = "STRAPI_DND",
  index,
  item = {},
  onStart,
  onEnd,
  onGrabItem,
  onDropItem,
  onCancel,
  onMoveItem,
  dropSensitivity = "regular"
}) => {
  const objectRef = (0,react.useRef)(null);
  const [{ handlerId }, dropRef] = (0,cjs.useDrop)({
    accept: type,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover(item2, monitor) {
      if (!objectRef.current) {
        return;
      }
      const dragIndex = item2.index;
      const newInd = index;
      if (dragIndex === newInd) {
        return;
      }
      if (dropSensitivity === "regular") {
        const hoverBoundingRect = objectRef.current.getBoundingClientRect();
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        if (dragIndex < newInd && hoverClientY < hoverMiddleY) {
          return;
        }
        if (dragIndex > newInd && hoverClientY > hoverMiddleY) {
          return;
        }
      }
      onMoveItem(newInd, dragIndex);
      item2.index = newInd;
    }
  });
  const [{ isDragging }, dragRef, dragPreviewRef] = (0,cjs.useDrag)({
    type,
    item() {
      if (onStart) {
        onStart();
      }
      const { width } = objectRef.current?.getBoundingClientRect() ?? {};
      return { index, width, ...item };
    },
    end() {
      if (onEnd) {
        onEnd();
      }
    },
    canDrag: active,
    /**
     * This is for useful when the item is in a virtualized list.
     * However, if we don't have an ID then we want the libraries
     * defaults to take care of this.
     */
    isDragging: item.id ? (monitor) => {
      return item.id === monitor.getItem().id;
    } : void 0,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });
  const handleKeyDown = useKeyboardDragAndDrop(active, index, {
    onGrabItem,
    onDropItem,
    onCancel,
    onMoveItem
  });
  return [{ handlerId, isDragging, handleKeyDown }, objectRef, dropRef, dragRef, dragPreviewRef];
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInput/constants.js
const RELATION_ITEM_HEIGHT = 50;
const RELATION_GUTTER = 4;

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInput/components/RelationItem.js









const FlexWrapper = (0,styled_components_browser_esm["default"])(dist.Flex)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;

  & > div[role='button'] {
    cursor: all-scroll;
  }
`;
const ChildrenWrapper = (0,styled_components_browser_esm["default"])(dist.Flex)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;
`;
const RelationItem = ({
  ariaDescribedBy,
  children,
  displayValue,
  canDrag,
  disabled,
  endAction,
  iconButtonAriaLabel,
  style,
  id,
  index,
  name,
  onCancel,
  onDropItem,
  onGrabItem,
  status,
  updatePositionOfRelation,
  ...props
}) => {
  const [{ handlerId, isDragging, handleKeyDown }, relationRef, dropRef, dragRef, dragPreviewRef] = useDragAndDrop(canDrag && !disabled, {
    type: `${ItemTypes.RELATION}_${name}`,
    index,
    item: {
      displayedValue: displayValue,
      status,
      id
    },
    onGrabItem,
    onDropItem,
    onCancel,
    onMoveItem: updatePositionOfRelation,
    dropSensitivity: "immediate"
  });
  const composedRefs = composeRefs(relationRef, dragRef);
  (0,react.useEffect)(() => {
    dragPreviewRef((0,dist_cjs/* getEmptyImage */.rX)());
  }, [dragPreviewRef]);
  return /* @__PURE__ */ react.createElement(
    dist.Box,
    {
      style,
      as: "li",
      ref: dropRef,
      "aria-describedby": ariaDescribedBy,
      cursor: canDrag ? "all-scroll" : "default"
    },
    isDragging ? /* @__PURE__ */ react.createElement(RelationItemPlaceholder, null) : /* @__PURE__ */ react.createElement(
      dist.Flex,
      {
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: canDrag ? 2 : 4,
        paddingRight: 4,
        hasRadius: true,
        borderSize: 1,
        borderColor: "neutral200",
        background: disabled ? "neutral150" : "neutral0",
        justifyContent: "space-between",
        ref: canDrag ? composedRefs : void 0,
        "data-handler-id": handlerId,
        ...props
      },
      /* @__PURE__ */ react.createElement(FlexWrapper, { gap: 1 }, canDrag ? /* @__PURE__ */ react.createElement(
        dist.IconButton,
        {
          forwardedAs: "div",
          role: "button",
          tabIndex: 0,
          "aria-label": iconButtonAriaLabel,
          noBorder: true,
          onKeyDown: handleKeyDown,
          disabled
        },
        /* @__PURE__ */ react.createElement(icons_dist.Drag, null)
      ) : null, /* @__PURE__ */ react.createElement(ChildrenWrapper, { justifyContent: "space-between" }, children)),
      endAction && /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 4 }, endAction)
    )
  );
};
const RelationItemPlaceholder = () => /* @__PURE__ */ react.createElement(
  dist.Box,
  {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
    hasRadius: true,
    borderStyle: "dashed",
    borderColor: "primary600",
    borderWidth: "1px",
    background: "primary100",
    height: `calc(100% - ${RELATION_GUTTER}px)`
  }
);
RelationItem.defaultProps = {
  ariaDescribedBy: "",
  canDrag: false,
  displayValue: "",
  disabled: false,
  endAction: void 0,
  onCancel: void 0,
  onDropItem: void 0,
  onGrabItem: void 0,
  style: void 0,
  status: void 0,
  updatePositionOfRelation: void 0
};
RelationItem.propTypes = {
  ariaDescribedBy: (prop_types_default()).string,
  canDrag: (prop_types_default()).bool,
  children: (prop_types_default()).node.isRequired,
  displayValue: (prop_types_default()).string,
  disabled: (prop_types_default()).bool,
  endAction: (prop_types_default()).node,
  iconButtonAriaLabel: (prop_types_default()).string.isRequired,
  id: (prop_types_default()).number.isRequired,
  index: (prop_types_default()).number.isRequired,
  name: (prop_types_default()).string.isRequired,
  onCancel: (prop_types_default()).func,
  onDropItem: (prop_types_default()).func,
  onGrabItem: (prop_types_default()).func,
  status: (prop_types_default()).string,
  style: prop_types_default().shape({
    height: (prop_types_default()).number,
    left: (prop_types_default()).number,
    position: (prop_types_default()).string,
    right: (prop_types_default()).number,
    width: (prop_types_default()).string
  }),
  updatePositionOfRelation: (prop_types_default()).func
};

// EXTERNAL MODULE: ./node_modules/react-window/dist/index.cjs.js
var index_cjs = __webpack_require__(88180);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInput/components/Relation.js



const Relation = ({
  children,
  loadMore,
  search,
  totalNumberOfRelations,
  size,
  ...props
}) => {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    dist.Flex,
    {
      paddingBottom: totalNumberOfRelations > 0 ? 3 : 0,
      gap: 2,
      justifyContent: "space-between",
      alignItems: "end",
      wrap: "wrap"
    },
    /* @__PURE__ */ react.createElement(
      dist.Flex,
      {
        direction: "column",
        alignItems: "stretch",
        basis: size <= 6 ? "100%" : "70%",
        gap: 1,
        ...props
      },
      search
    ),
    loadMore
  ), children);
};
Relation.defaultProps = {
  search: void 0,
  loadMore: void 0,
  totalNumberOfRelations: 0
};
Relation.propTypes = {
  children: (prop_types_default()).node.isRequired,
  search: (prop_types_default()).node,
  loadMore: (prop_types_default()).node,
  size: (prop_types_default()).number.isRequired,
  totalNumberOfRelations: (prop_types_default()).number
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInput/components/RelationList.js




const ShadowBox = (0,styled_components_browser_esm["default"])(dist.Box)`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

  &:before,
  &:after {
    position: absolute;
    width: 100%;
    height: 4px;
    z-index: 1;
  }

  &:before {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    top: 0;
    opacity: ${({ overflowDirection }) => overflowDirection === "top-bottom" || overflowDirection === "top" ? 1 : 0};
    transition: opacity 0.2s ease-in-out;
  }

  &:after {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(0deg, rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    bottom: 0;
    opacity: ${({ overflowDirection }) => overflowDirection === "top-bottom" || overflowDirection === "bottom" ? 1 : 0};
    transition: opacity 0.2s ease-in-out;
  }
`;
const RelationList = ({ children, overflow, ...props }) => {
  return /* @__PURE__ */ react.createElement(ShadowBox, { overflowDirection: overflow, ...props }, children);
};
RelationList.defaultProps = {
  overflow: ""
};
RelationList.propTypes = {
  children: (prop_types_default()).node.isRequired,
  overflow: prop_types_default().oneOf(["top-bottom", "bottom", "top", ""])
};

// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.cjs.prod.js
var react_select_cjs_prod = __webpack_require__(87583);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInput/components/Option.js








const StyledBullet = styled_components_browser_esm["default"].div`
  flex-shrink: 0;
  width: ${(0,helper_plugin.pxToRem)(6)};
  height: ${(0,helper_plugin.pxToRem)(6)};
  margin-right: ${({ theme }) => theme.spaces[2]};
  background-color: ${({ theme, isDraft }) => theme.colors[isDraft ? "secondary600" : "success600"]};
  border-radius: 50%;
`;
const Option = (props) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const Component = react_select_cjs_prod.components.Option;
  const { publicationState, mainField, id } = props.data;
  if (publicationState) {
    const isDraft = publicationState === "draft";
    const draftMessage = {
      id: utils_getTrad("components.Select.draft-info-title"),
      defaultMessage: "State: Draft"
    };
    const publishedMessage = {
      id: utils_getTrad("components.Select.publish-info-title"),
      defaultMessage: "State: Published"
    };
    const title = isDraft ? formatMessage(draftMessage) : formatMessage(publishedMessage);
    return /* @__PURE__ */ react.createElement(Component, { ...props }, /* @__PURE__ */ react.createElement(dist.Flex, null, /* @__PURE__ */ react.createElement(StyledBullet, { title, isDraft }), /* @__PURE__ */ react.createElement(dist.Typography, { ellipsis: true }, mainField ?? id)));
  }
  return /* @__PURE__ */ react.createElement(Component, { ...props }, mainField ?? id);
};
Option.propTypes = {
  isFocused: (prop_types_default()).bool.isRequired,
  data: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired,
    isDraft: (prop_types_default()).bool,
    mainField: (prop_types_default()).string,
    publicationState: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).bool])
  }).isRequired
};

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(37424);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditViewLayoutManager/selectors.js
const selectLayout = (state) => state["content-manager_editViewLayoutManager"].currentLayout;
/* harmony default export */ const selectors = (selectLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useContentTypeLayout/index.js




const useContentTypeLayout = () => {
  const currentLayout = (0,lib.useSelector)(selectors);
  const getComponentLayout = (0,react.useCallback)(
    (componentUid) => {
      return (0,lodash.get)(currentLayout, ["components", componentUid], {});
    },
    [currentLayout]
  );
  return { ...currentLayout, getComponentLayout };
};
/* harmony default export */ const hooks_useContentTypeLayout = (useContentTypeLayout);

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 40 modules
var axios = __webpack_require__(19325);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useFetchContentTypeLayout/utils/formatLayouts.js


const getRelationModel = (targetModel, models) => models.find((model) => model.uid === targetModel);
const formatLayouts = (initialData, models) => {
  const data = createMetasSchema(initialData, models);
  const formattedCTEditLayout = formatLayoutWithMetas(data.contentType, models);
  const formattedListLayout = formatListLayoutWithMetas(data.contentType, data.components);
  (0,lodash.set)(data, ["contentType", "layouts", "edit"], formattedCTEditLayout);
  (0,lodash.set)(data, ["contentType", "layouts", "list"], formattedListLayout);
  Object.keys(data.components).forEach((componentUid) => {
    const formattedComponentEditLayout = formatLayoutWithMetas(
      data.components[componentUid],
      models
    );
    (0,lodash.set)(data, ["components", componentUid, "layouts", "edit"], formattedComponentEditLayout);
  });
  return data;
};
const createMetasSchema = (initialData, models) => {
  const data = utils_mergeMetasWithSchema((0,lodash.cloneDeep)(initialData), models, "contentType");
  const { components, contentType } = data;
  const formatMetadatas = (targetSchema) => {
    return Object.keys(targetSchema.metadatas).reduce((acc, current) => {
      const schema = (0,lodash.get)(targetSchema, ["attributes", current], {});
      let metadatas = targetSchema.metadatas[current];
      if (schema.type === "relation") {
        const relationModel = getRelationModel(schema.targetModel, models);
        const mainFieldName = metadatas.edit.mainField;
        const mainField = {
          name: mainFieldName,
          schema: (0,lodash.get)(relationModel, ["attributes", mainFieldName])
        };
        metadatas = {
          list: {
            ...metadatas.list,
            mainField
          },
          edit: {
            ...metadatas.edit,
            mainField
          }
        };
      }
      acc[current] = metadatas;
      return acc;
    }, {});
  };
  (0,lodash.set)(data, ["contentType", "metadatas"], formatMetadatas(contentType));
  Object.keys(components).forEach((compoUID) => {
    const currentCompo = components[compoUID];
    const updatedMetas = formatMetadatas(currentCompo);
    (0,lodash.set)(data, ["components", compoUID, "metadatas"], updatedMetas);
  });
  return data;
};
const formatLayoutWithMetas = (contentTypeConfiguration, models) => contentTypeConfiguration.layouts.edit.reduce((acc, current) => {
  const row = current.map((attribute) => {
    const fieldSchema = (0,lodash.get)(contentTypeConfiguration, ["attributes", attribute.name], {});
    const data = {
      ...attribute,
      fieldSchema,
      metadatas: (0,lodash.get)(contentTypeConfiguration, ["metadatas", attribute.name, "edit"], {})
    };
    if (fieldSchema.type === "relation") {
      const targetModelSchema = getRelationModel(fieldSchema.targetModel, models);
      const targetModelPluginOptions = targetModelSchema.pluginOptions || {};
      (0,lodash.set)(data, "targetModelPluginOptions", targetModelPluginOptions);
      (0,lodash.set)(data, "queryInfos", {
        shouldDisplayRelationLink: shouldDisplayRelationLink(
          contentTypeConfiguration,
          attribute.name,
          models
        )
      });
    }
    return data;
  });
  acc.push(row);
  return acc;
}, []);
const formatListLayoutWithMetas = (contentTypeConfiguration, components) => {
  const formatted = contentTypeConfiguration.layouts.list.reduce((acc, current) => {
    const fieldSchema = (0,lodash.get)(contentTypeConfiguration, ["attributes", current], {});
    const metadatas = (0,lodash.get)(contentTypeConfiguration, ["metadatas", current, "list"], {});
    const type = fieldSchema.type;
    if (type === "relation") {
      acc.push({ key: `__${current}_key__`, name: current, fieldSchema, metadatas });
      return acc;
    }
    if (type === "component") {
      const component = components[fieldSchema.component];
      const mainFieldName = component.settings.mainField;
      const mainFieldAttribute = component.attributes[mainFieldName];
      acc.push({
        key: `__${current}_key__`,
        name: current,
        fieldSchema,
        metadatas: {
          ...metadatas,
          mainField: {
            ...mainFieldAttribute,
            name: mainFieldName
          }
        }
      });
      return acc;
    }
    acc.push({ key: `__${current}_key__`, name: current, fieldSchema, metadatas });
    return acc;
  }, []);
  return formatted;
};
const shouldDisplayRelationLink = (contentTypeConfiguration, fieldName, models) => {
  const targetModel = (0,lodash.get)(contentTypeConfiguration, ["attributes", fieldName, "targetModel"], "");
  return getDisplayedModels(models).includes(targetModel);
};
const getDisplayedModels = (models) => models.filter((model) => model.isDisplayed).map(({ uid }) => uid);
/* harmony default export */ const utils_formatLayouts = (formatLayouts);


// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useFetchContentTypeLayout/reducer.js

const initialState = {
  error: null,
  isLoading: true,
  layout: {},
  layouts: {}
};
const reducer = (state, action) => (0,immer_esm["default"])(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA": {
      draftState.isLoading = true;
      draftState.error = null;
      draftState.layout = {};
      break;
    }
    case "GET_DATA_SUCCEEDED": {
      const contentTypeUid = action.data.contentType.uid;
      draftState.layout = action.data;
      draftState.layouts[contentTypeUid] = action.data;
      draftState.isLoading = false;
      break;
    }
    case "GET_DATA_ERROR": {
      draftState.isLoading = false;
      draftState.error = action.error;
      break;
    }
    case "SET_LAYOUT_FROM_STATE": {
      draftState.error = null;
      draftState.layout = state.layouts[action.uid];
      break;
    }
    case "UPDATE_LAYOUT": {
      const oldLayout = state.layout;
      draftState.layout = {
        ...oldLayout,
        contentType: { uid: oldLayout.contentType.uid, ...action.newLayout.contentType }
      };
      draftState.layouts[oldLayout.contentType.uid] = {
        ...oldLayout,
        contentType: { uid: oldLayout.contentType.uid, ...action.newLayout.contentType }
      };
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const useFetchContentTypeLayout_reducer = (reducer);

// EXTERNAL MODULE: ./node_modules/reselect/es/index.js + 1 modules
var es = __webpack_require__(20573);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/App/reducer.js
var App_reducer = __webpack_require__(14506);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/selectors.js


const selectAppDomain = () => (state) => {
  return state["content-manager_app"] || App_reducer/* initialState */.E;
};
const makeSelectApp = () => createSelector(selectAppDomain(), (substate) => {
  return substate;
});
const makeSelectModels = () => createSelector(selectAppDomain(), (state) => state.models);
const makeSelectModelLinks = () => (0,es/* createSelector */.P1)(selectAppDomain(), (state) => ({
  collectionTypeLinks: state.collectionTypeLinks,
  singleTypeLinks: state.singleTypeLinks
}));
const makeSelectModelAndComponentSchemas = () => (0,es/* createSelector */.P1)(selectAppDomain(), ({ components, models }) => ({
  schemas: [...components, ...models]
}));
/* harmony default export */ const App_selectors = ((/* unused pure expression or super */ null && (makeSelectApp)));


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useFetchContentTypeLayout/index.js








const useFetchContentTypeLayout = (contentTypeUID) => {
  const [{ error, isLoading, layout, layouts }, dispatch] = (0,react.useReducer)(useFetchContentTypeLayout_reducer, initialState);
  const schemasSelector = (0,react.useMemo)(makeSelectModelAndComponentSchemas, []);
  const { schemas } = (0,lib.useSelector)((state) => schemasSelector(state), lib.shallowEqual);
  const isMounted = (0,react.useRef)(true);
  const { get } = (0,helper_plugin.useFetchClient)();
  const getData = (0,react.useCallback)(
    async (uid, source) => {
      if (layouts[uid]) {
        dispatch({ type: "SET_LAYOUT_FROM_STATE", uid });
        return;
      }
      dispatch({ type: "GET_DATA" });
      try {
        const endPoint = utils_getRequestUrl(`content-types/${uid}/configuration`);
        const {
          data: { data }
        } = await get(endPoint, { cancelToken: source.token });
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          data: utils_formatLayouts(data, schemas)
        });
      } catch (error2) {
        if (axios/* default.isCancel */.Z.isCancel(error2)) {
          return;
        }
        if (isMounted.current) {
          console.error(error2);
        }
        if (isMounted.current) {
          dispatch({ type: "GET_DATA_ERROR", error: error2 });
        }
      }
    },
    [layouts, schemas, get]
  );
  (0,react.useEffect)(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  (0,react.useEffect)(() => {
    const CancelToken = axios/* default.CancelToken */.Z.CancelToken;
    const source = CancelToken.source();
    getData(contentTypeUID, source);
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [contentTypeUID, getData]);
  const updateLayout = (0,react.useCallback)(
    (data) => {
      dispatch({
        type: "UPDATE_LAYOUT",
        newLayout: utils_formatLayouts(data, schemas)
      });
    },
    [schemas]
  );
  return {
    error,
    isLoading,
    layout,
    updateLayout
  };
};
/* harmony default export */ const hooks_useFetchContentTypeLayout = (useFetchContentTypeLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useFindRedirectionLink/selectors.js
const selectMenuLinks = (state) => {
  const cmState = state["content-manager_app"];
  return cmState.collectionTypeLinks;
};
/* harmony default export */ const useFindRedirectionLink_selectors = (selectMenuLinks);

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var qs_lib = __webpack_require__(80129);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/isObject.js
var isObject = __webpack_require__(13218);
var isObject_default = /*#__PURE__*/__webpack_require__.n(isObject);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useFindRedirectionLink/utils/getRedirectionLink.js



const mergeParams = (initialParams, params) => {
  return Object.keys(initialParams).reduce((acc, current) => {
    const intialValue = initialParams[current];
    const nextValue = get_default()(params, [current], intialValue);
    if (isObject_default()(intialValue)) {
      return { ...acc, [current]: mergeParams(intialValue, nextValue) };
    }
    acc[current] = nextValue;
    return acc;
  }, {});
};
const getRedirectionLink = (links, slug, rawQuery) => {
  const matchingLink = links.find(({ to: to2 }) => to2.includes(slug));
  if (!matchingLink) {
    return "/";
  }
  const { to, search } = matchingLink;
  const searchQueryParams = (0,qs_lib.parse)(search);
  const currentQueryParams = (0,qs_lib.parse)(rawQuery.substring(1));
  const mergedParams = mergeParams(searchQueryParams, currentQueryParams);
  const link = `${to}?${(0,qs_lib.stringify)(mergedParams, { encode: false })}`;
  return link;
};
/* harmony default export */ const utils_getRedirectionLink = (getRedirectionLink);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useFindRedirectionLink/index.js




const useFindRedirectionLink = (slug) => {
  const [{ rawQuery }] = (0,helper_plugin.useQueryParams)();
  const collectionTypesMenuLinks = (0,lib.useSelector)(useFindRedirectionLink_selectors);
  const redirectionLink = utils_getRedirectionLink(collectionTypesMenuLinks, slug, rawQuery);
  return redirectionLink;
};
/* harmony default export */ const hooks_useFindRedirectionLink = (useFindRedirectionLink);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useLayoutDnd.js


const useLayoutDnd = () => (0,react.useContext)(LayoutDnd);
/* harmony default export */ const hooks_useLayoutDnd = (useLayoutDnd);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/usePluginsQueryParams/index.js


const usePluginsQueryParams = () => {
  const { search } = (0,react_router_dom_min.useLocation)();
  const query = search ? (0,qs_lib.parse)(search.substring(1)) : {};
  return query.plugins ? (0,qs_lib.stringify)({ plugins: query.plugins }, { encode: false }) : "";
};
/* harmony default export */ const hooks_usePluginsQueryParams = (usePluginsQueryParams);

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/hooks/useSyncRbac/constants.js
var constants = __webpack_require__(80015);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useSyncRbac/actions.js

const setPermissions = (permissions, plugins, containerName) => {
  return {
    type: constants/* SET_PERMISSIONS */.m,
    permissions,
    __meta__: {
      plugins,
      containerName
    }
  };
};
const resetPermissions = () => ({ type: constants/* RESET_PERMISSIONS */.Q });

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useSyncRbac/selectors.js
const selectPermissions = (state) => state["content-manager_rbacManager"].permissions;
const selectCollectionTypePermissions = (state) => state.rbacProvider.collectionTypesRelatedPermissions;

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useSyncRbac/index.js




const useSyncRbac = (query, collectionTypeUID, containerName = "listView") => {
  const collectionTypesRelatedPermissions = (0,lib.useSelector)(selectCollectionTypePermissions);
  const permissions = (0,lib.useSelector)(selectPermissions);
  const dispatch = (0,lib.useDispatch)();
  const relatedPermissions = collectionTypesRelatedPermissions[collectionTypeUID];
  (0,react.useEffect)(() => {
    if (relatedPermissions) {
      dispatch(setPermissions(relatedPermissions, query ? query.plugins : null, containerName));
      return () => {
        dispatch(resetPermissions());
      };
    }
    return () => {
    };
  }, [relatedPermissions, dispatch, query, containerName]);
  return permissions;
};
/* harmony default export */ const hooks_useSyncRbac = (useSyncRbac);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/contexts/Wysiwyg.js

const Wysiwyg_WysiwygContext = (0,react.createContext)();
/* harmony default export */ const Wysiwyg = ((/* unused pure expression or super */ null && (Wysiwyg_WysiwygContext)));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useWysiwyg.js


const useWysiwyg = () => useContext(WysiwygContext);
/* harmony default export */ const hooks_useWysiwyg = ((/* unused pure expression or super */ null && (useWysiwyg)));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/usePrev.js

const usePrev = (value) => {
  const ref = (0,react.useRef)();
  (0,react.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/index.js











;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInput/RelationInput.js













const LinkEllipsis = (0,styled_components_browser_esm["default"])(dist.Link)`
  display: block;

  > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`;
const DisconnectButton = styled_components_browser_esm["default"].button`
  svg path {
    fill: ${({ theme, disabled }) => disabled ? theme.colors.neutral600 : theme.colors.neutral500};
  }

  &:hover svg path,
  &:focus svg path {
    fill: ${({ theme, disabled }) => !disabled && theme.colors.neutral600};
  }
`;
const RelationInput = ({
  canReorder,
  description,
  disabled,
  error,
  iconButtonAriaLabel,
  id,
  name,
  numberOfRelationsToDisplay,
  label,
  labelAction,
  labelLoadMore,
  labelDisconnectRelation,
  listAriaDescription,
  liveText,
  loadingMessage,
  onCancel,
  onDropItem,
  onGrabItem,
  noRelationsMessage,
  onRelationConnect,
  onRelationLoadMore,
  onRelationDisconnect,
  onRelationReorder,
  onSearchNextPage,
  onSearch,
  placeholder,
  publicationStateTranslations,
  required,
  relations: paginatedRelations,
  searchResults,
  size
}) => {
  const [value, setValue] = (0,react.useState)(null);
  const [overflow, setOverflow] = (0,react.useState)("");
  const listRef = (0,react.useRef)();
  const outerListRef = (0,react.useRef)();
  const { data } = searchResults;
  const relations = paginatedRelations.data;
  const totalNumberOfRelations = relations.length ?? 0;
  const dynamicListHeight = (0,react.useMemo)(
    () => totalNumberOfRelations > numberOfRelationsToDisplay ? Math.min(totalNumberOfRelations, numberOfRelationsToDisplay) * (RELATION_ITEM_HEIGHT + RELATION_GUTTER) + RELATION_ITEM_HEIGHT / 2 : Math.min(totalNumberOfRelations, numberOfRelationsToDisplay) * (RELATION_ITEM_HEIGHT + RELATION_GUTTER),
    [totalNumberOfRelations, numberOfRelationsToDisplay]
  );
  const shouldDisplayLoadMoreButton = !!labelLoadMore && paginatedRelations.hasNextPage;
  const options = (0,react.useMemo)(
    () => data.flat().filter(Boolean).map((result) => ({
      ...result,
      value: result.id,
      label: result.mainField
    })),
    [data]
  );
  (0,react.useEffect)(() => {
    if (totalNumberOfRelations <= numberOfRelationsToDisplay) {
      return setOverflow("");
    }
    const handleNativeScroll = (e) => {
      const parentScrollContainerHeight = e.target.parentNode.scrollHeight;
      const maxScrollBottom = e.target.scrollHeight - e.target.scrollTop;
      if (e.target.scrollTop === 0) {
        return setOverflow("bottom");
      }
      if (maxScrollBottom === parentScrollContainerHeight) {
        return setOverflow("top");
      }
      return setOverflow("top-bottom");
    };
    const outerListRefCurrent = outerListRef?.current;
    if (!paginatedRelations.isLoading && relations.length > 0 && outerListRefCurrent) {
      outerListRef.current.addEventListener("scroll", handleNativeScroll);
    }
    return () => {
      if (outerListRefCurrent) {
        outerListRefCurrent.removeEventListener("scroll", handleNativeScroll);
      }
    };
  }, [paginatedRelations, relations, numberOfRelationsToDisplay, totalNumberOfRelations]);
  const [isMenuOpen, setIsMenuOpen] = (0,react.useState)(false);
  const timeoutRef = (0,react.useRef)();
  const previousOptions = (0,react.useRef)([]);
  (0,react.useEffect)(() => {
    if (options.length > 0 && previousOptions.current.length === 0) {
      setIsMenuOpen((isCurrentlyOpened) => {
        if (isCurrentlyOpened) {
          timeoutRef.current = setTimeout(() => {
            setIsMenuOpen(true);
          }, 10);
          return false;
        }
        return false;
      });
    }
    return () => {
      previousOptions.current = options || [];
    };
  }, [options]);
  (0,react.useEffect)(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
    onSearch();
  };
  const handleUpdatePositionOfRelation = (newIndex, currentIndex) => {
    if (onRelationReorder && newIndex >= 0 && newIndex < relations.length) {
      onRelationReorder(currentIndex, newIndex);
    }
  };
  const previewRelationsLength = usePrev(relations.length);
  const updatedRelationsWith = (0,react.useRef)();
  const handleLoadMore = () => {
    updatedRelationsWith.current = "loadMore";
    onRelationLoadMore();
  };
  (0,react.useEffect)(() => {
    if (updatedRelationsWith.current === "onChange" && relations.length !== previewRelationsLength) {
      listRef.current.scrollToItem(relations.length, "end");
    } else if (updatedRelationsWith.current === "loadMore" && relations.length !== previewRelationsLength) {
      listRef.current.scrollToItem(0, "start");
    }
    updatedRelationsWith.current = void 0;
  }, [previewRelationsLength, relations]);
  const ariaDescriptionId = `${name}-item-instructions`;
  return /* @__PURE__ */ react.createElement(dist.Field, { error, name, hint: description, id, required }, /* @__PURE__ */ react.createElement(
    Relation,
    {
      totalNumberOfRelations,
      size,
      search: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(dist.FieldLabel, { action: labelAction }, label), /* @__PURE__ */ react.createElement(
        helper_plugin.ReactSelect,
        {
          menuPosition: "absolute",
          menuPlacement: "auto",
          components: { Option: Option },
          options,
          isDisabled: disabled,
          isLoading: searchResults.isLoading,
          error,
          inputId: id,
          isSearchable: true,
          isClear: true,
          loadingMessage: () => loadingMessage,
          onChange: (relation) => {
            setValue(null);
            onRelationConnect(relation);
            updatedRelationsWith.current = "onChange";
          },
          onInputChange: (value2) => {
            setValue(value2);
            onSearch(value2);
          },
          onMenuClose: handleMenuClose,
          onMenuOpen: handleMenuOpen,
          menuIsOpen: isMenuOpen,
          noOptionsMessage: () => noRelationsMessage,
          onMenuScrollToBottom: () => {
            if (searchResults.hasNextPage) {
              onSearchNextPage();
            }
          },
          placeholder,
          name,
          value
        }
      )),
      loadMore: shouldDisplayLoadMoreButton && /* @__PURE__ */ react.createElement(
        dist.TextButton,
        {
          disabled: paginatedRelations.isLoading || paginatedRelations.isFetchingNextPage,
          onClick: handleLoadMore,
          loading: paginatedRelations.isLoading || paginatedRelations.isFetchingNextPage,
          startIcon: /* @__PURE__ */ react.createElement(icons_dist.Refresh, null)
        },
        labelLoadMore
      )
    },
    relations.length > 0 && /* @__PURE__ */ react.createElement(RelationList, { overflow }, /* @__PURE__ */ react.createElement(dist.VisuallyHidden, { id: ariaDescriptionId }, listAriaDescription), /* @__PURE__ */ react.createElement(dist.VisuallyHidden, { "aria-live": "assertive" }, liveText), /* @__PURE__ */ react.createElement(
      index_cjs/* FixedSizeList */.t7,
      {
        height: dynamicListHeight,
        ref: listRef,
        outerRef: outerListRef,
        itemCount: totalNumberOfRelations,
        itemSize: RELATION_ITEM_HEIGHT + RELATION_GUTTER,
        itemData: {
          name,
          ariaDescribedBy: ariaDescriptionId,
          canDrag: canReorder,
          disabled,
          handleCancel: onCancel,
          handleDropItem: onDropItem,
          handleGrabItem: onGrabItem,
          iconButtonAriaLabel,
          labelDisconnectRelation,
          onRelationDisconnect,
          publicationStateTranslations,
          relations,
          updatePositionOfRelation: handleUpdatePositionOfRelation
        },
        itemKey: (index) => `${relations[index].mainField}_${relations[index].id}`,
        innerElementType: "ol"
      },
      ListItem
    )),
    (description || error) && /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 2 }, /* @__PURE__ */ react.createElement(dist.FieldHint, null), /* @__PURE__ */ react.createElement(dist.FieldError, null))
  ));
};
const RelationsResult = prop_types_default().shape({
  data: prop_types_default().arrayOf(
    prop_types_default().shape({
      href: (prop_types_default()).string,
      id: (prop_types_default()).number.isRequired,
      publicationState: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).bool]),
      mainField: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])
    })
  ),
  hasNextPage: (prop_types_default()).bool,
  isFetchingNextPage: (prop_types_default()).bool.isRequired,
  isLoading: (prop_types_default()).bool.isRequired,
  isSuccess: (prop_types_default()).bool.isRequired
});
const SearchResults = prop_types_default().shape({
  data: prop_types_default().arrayOf(
    prop_types_default().shape({
      id: (prop_types_default()).number.isRequired,
      href: (prop_types_default()).string,
      mainField: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
      publicationState: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).bool])
    })
  ),
  hasNextPage: (prop_types_default()).bool,
  isLoading: (prop_types_default()).bool.isRequired,
  isSuccess: (prop_types_default()).bool.isRequired
});
RelationInput.defaultProps = {
  canReorder: false,
  description: void 0,
  disabled: false,
  error: void 0,
  labelAction: null,
  labelLoadMore: null,
  liveText: void 0,
  onCancel: void 0,
  onDropItem: void 0,
  onGrabItem: void 0,
  required: false,
  relations: { data: [] },
  searchResults: { data: [] }
};
RelationInput.propTypes = {
  error: (prop_types_default()).string,
  canReorder: (prop_types_default()).bool,
  description: (prop_types_default()).string,
  disabled: (prop_types_default()).bool,
  iconButtonAriaLabel: (prop_types_default()).string.isRequired,
  id: (prop_types_default()).string.isRequired,
  label: (prop_types_default()).string.isRequired,
  labelAction: (prop_types_default()).element,
  labelLoadMore: (prop_types_default()).string,
  labelDisconnectRelation: (prop_types_default()).string.isRequired,
  listAriaDescription: (prop_types_default()).string.isRequired,
  liveText: (prop_types_default()).string,
  loadingMessage: (prop_types_default()).string.isRequired,
  name: (prop_types_default()).string.isRequired,
  noRelationsMessage: (prop_types_default()).string.isRequired,
  numberOfRelationsToDisplay: (prop_types_default()).number.isRequired,
  onCancel: (prop_types_default()).func,
  onDropItem: (prop_types_default()).func,
  onGrabItem: (prop_types_default()).func,
  onRelationConnect: (prop_types_default()).func.isRequired,
  onRelationDisconnect: (prop_types_default()).func.isRequired,
  onRelationLoadMore: (prop_types_default()).func.isRequired,
  onRelationReorder: (prop_types_default()).func.isRequired,
  onSearch: (prop_types_default()).func.isRequired,
  onSearchNextPage: (prop_types_default()).func.isRequired,
  placeholder: (prop_types_default()).string.isRequired,
  publicationStateTranslations: prop_types_default().shape({
    draft: (prop_types_default()).string.isRequired,
    published: (prop_types_default()).string.isRequired
  }).isRequired,
  required: (prop_types_default()).bool,
  searchResults: SearchResults,
  size: (prop_types_default()).number.isRequired,
  relations: RelationsResult
};
const ListItem = ({ data, index, style }) => {
  const {
    ariaDescribedBy,
    canDrag,
    disabled,
    handleCancel,
    handleDropItem,
    handleGrabItem,
    iconButtonAriaLabel,
    name,
    labelDisconnectRelation,
    onRelationDisconnect,
    publicationStateTranslations,
    relations,
    updatePositionOfRelation
  } = data;
  const { publicationState, href, mainField, id } = relations[index];
  const statusColor = publicationState === "draft" ? "secondary" : "success";
  return /* @__PURE__ */ react.createElement(
    RelationItem,
    {
      ariaDescribedBy,
      canDrag,
      disabled,
      displayValue: String(mainField ?? id),
      iconButtonAriaLabel,
      id,
      index,
      name,
      endAction: /* @__PURE__ */ react.createElement(
        DisconnectButton,
        {
          "data-testid": `remove-relation-${id}`,
          disabled,
          type: "button",
          onClick: () => onRelationDisconnect(relations[index]),
          "aria-label": labelDisconnectRelation
        },
        /* @__PURE__ */ react.createElement(dist.Icon, { width: "12px", as: icons_dist.Cross })
      ),
      onCancel: handleCancel,
      onDropItem: handleDropItem,
      onGrabItem: handleGrabItem,
      status: publicationState || void 0,
      style: {
        ...style,
        bottom: style.bottom ?? 0 + RELATION_GUTTER,
        height: style.height ?? 0 - RELATION_GUTTER
      },
      updatePositionOfRelation
    },
    /* @__PURE__ */ react.createElement(dist.Box, { minWidth: 0, paddingTop: 1, paddingBottom: 1, paddingRight: 4 }, /* @__PURE__ */ react.createElement(dist.Tooltip, { description: mainField ?? `${id}` }, href ? /* @__PURE__ */ react.createElement(LinkEllipsis, { to: href }, mainField ?? id) : /* @__PURE__ */ react.createElement(dist.Typography, { textColor: disabled ? "neutral600" : "primary600", ellipsis: true }, mainField ?? id))),
    publicationState && /* @__PURE__ */ react.createElement(dist.Status, { variant: statusColor, showBullet: false, size: "S" }, /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "bold", textColor: `${statusColor}700` }, publicationStateTranslations[publicationState]))
  );
};
ListItem.defaultProps = {
  data: {}
};
ListItem.propTypes = {
  data: prop_types_default().shape({
    ariaDescribedBy: (prop_types_default()).string.isRequired,
    canDrag: (prop_types_default()).bool.isRequired,
    disabled: (prop_types_default()).bool.isRequired,
    handleCancel: (prop_types_default()).func,
    handleDropItem: (prop_types_default()).func,
    handleGrabItem: (prop_types_default()).func,
    iconButtonAriaLabel: (prop_types_default()).string.isRequired,
    labelDisconnectRelation: (prop_types_default()).string.isRequired,
    name: (prop_types_default()).string.isRequired,
    onRelationDisconnect: (prop_types_default()).func.isRequired,
    publicationStateTranslations: prop_types_default().shape({
      draft: (prop_types_default()).string.isRequired,
      published: (prop_types_default()).string.isRequired
    }).isRequired,
    relations: prop_types_default().arrayOf(
      prop_types_default().shape({
        href: (prop_types_default()).string,
        id: (prop_types_default()).number.isRequired,
        publicationState: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).bool]),
        mainField: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])
      })
    ),
    updatePositionOfRelation: (prop_types_default()).func.isRequired
  }),
  index: (prop_types_default()).number.isRequired,
  style: (prop_types_default()).object.isRequired
};
/* harmony default export */ const RelationInput_RelationInput = (RelationInput);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInput/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DragLayer/RelationDragPreview.js









const RelationDragPreview = ({ status, displayedValue, width }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const stateMessage = {
    [PUBLICATION_STATES.DRAFT]: formatMessage({
      id: utils_getTrad("relation.publicationState.draft"),
      defaultMessage: "Draft"
    }),
    [PUBLICATION_STATES.PUBLISHED]: formatMessage({
      id: utils_getTrad("relation.publicationState.published"),
      defaultMessage: "Published"
    })
  };
  const statusColor = status === PUBLICATION_STATES.DRAFT ? "secondary" : "success";
  return /* @__PURE__ */ react.createElement(dist.Box, { style: { width } }, /* @__PURE__ */ react.createElement(
    dist.Flex,
    {
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 2,
      paddingRight: 4,
      hasRadius: true,
      borderSize: 1,
      background: "neutral0",
      borderColor: "neutral200",
      justifyContent: "space-between"
    },
    /* @__PURE__ */ react.createElement(FlexWrapper, { gap: 1 }, /* @__PURE__ */ react.createElement(dist.IconButton, { noBorder: true }, /* @__PURE__ */ react.createElement(icons_dist.Drag, null)), /* @__PURE__ */ react.createElement(ChildrenWrapper, { maxWidth: "100%", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(dist.Box, { minWidth: 0, paddingTop: 1, paddingBottom: 1, paddingRight: 4 }, /* @__PURE__ */ react.createElement(LinkEllipsis, null, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "primary600", ellipsis: true }, displayedValue))), status && /* @__PURE__ */ react.createElement(dist.Status, { variant: statusColor, showBullet: false, size: "S" }, /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "bold", textColor: `${statusColor}700` }, stateMessage[status])))),
    /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 4 }, /* @__PURE__ */ react.createElement(DisconnectButton, { type: "button" }, /* @__PURE__ */ react.createElement(dist.Icon, { width: "12px", as: icons_dist.Cross })))
  ));
};
RelationDragPreview.propTypes = {
  status: (prop_types_default()).string.isRequired,
  displayedValue: (prop_types_default()).string.isRequired,
  width: (prop_types_default()).number.isRequired
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DragLayer/index.js







const layerStyles = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%"
};
function getItemStyles(initialOffset, currentOffset, mouseOffset) {
  if (!initialOffset || !currentOffset) {
    return { display: "none" };
  }
  const { x, y } = mouseOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform
  };
}
const CustomDragLayer = () => {
  const { itemType, isDragging, item, initialOffset, currentOffset, mouseOffset } = (0,cjs.useDragLayer)(
    (monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
      mouseOffset: monitor.getClientOffset()
    })
  );
  if (!isDragging) {
    return null;
  }
  const [actualType] = itemType.split("_");
  return /* @__PURE__ */ react.createElement(components_LayoutDndProvider, null, /* @__PURE__ */ react.createElement("div", { style: layerStyles }, /* @__PURE__ */ react.createElement("div", { style: getItemStyles(initialOffset, currentOffset, mouseOffset), className: "col-md-2" }, [ItemTypes.EDIT_FIELD, ItemTypes.FIELD].includes(itemType) && /* @__PURE__ */ react.createElement(components_CardPreview, { labelField: item.labelField }), actualType === ItemTypes.COMPONENT && /* @__PURE__ */ react.createElement(ComponentDragPreview, { displayedValue: item.displayedValue }), actualType === ItemTypes.DYNAMIC_ZONE && /* @__PURE__ */ react.createElement(ComponentDragPreview, { displayedValue: item.displayedValue }), actualType === ItemTypes.RELATION && /* @__PURE__ */ react.createElement(
    RelationDragPreview,
    {
      displayedValue: item.displayedValue,
      status: item.status,
      width: item.width
    }
  ))));
};
/* harmony default export */ const DragLayer = (CustomDragLayer);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/contexts/ModelsContext.js

const ModelsContext = (0,react.createContext)();
/* harmony default export */ const contexts_ModelsContext = (ModelsContext);

// EXTERNAL MODULE: ./node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var react_error_boundary_umd = __webpack_require__(35800);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/contexts/ContentTypeLayout.js

const ContentTypeLayout = (0,react.createContext)();
/* harmony default export */ const contexts_ContentTypeLayout = (ContentTypeLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/contexts/index.js




// EXTERNAL MODULE: ./.cache/admin/src/exposedHooks.js
var exposedHooks = __webpack_require__(80660);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/EditViewLayoutManager/constants.js
var EditViewLayoutManager_constants = __webpack_require__(15113);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditViewLayoutManager/actions.js

const resetProps = () => ({ type: EditViewLayoutManager_constants/* RESET_PROPS */.c });
const setLayout = (layout, query) => ({
  type: EditViewLayoutManager_constants/* SET_LAYOUT */.O,
  layout,
  query
});

// EXTERNAL MODULE: ./node_modules/react-fast-compare/index.js
var react_fast_compare = __webpack_require__(69590);
var react_fast_compare_default = /*#__PURE__*/__webpack_require__.n(react_fast_compare);
// EXTERNAL MODULE: ./.cache/admin/src/contexts/index.js + 4 modules
var contexts = __webpack_require__(47713);
;// CONCATENATED MODULE: ./.cache/admin/src/shared/hooks/useAdminProvider/index.js


const useAdminProvider = () => {
  const context = (0,react.useContext)(contexts/* AdminContext */.ux);
  return context;
};
/* harmony default export */ const hooks_useAdminProvider = (useAdminProvider);

;// CONCATENATED MODULE: ./.cache/admin/src/shared/hooks/useInjectionZone/index.js

const useInjectionZone = (area) => {
  const { getAdminInjectedComponents } = hooks_useAdminProvider();
  const [moduleName, page, position] = area.split(".");
  return getAdminInjectedComponents(moduleName, page, position);
};
/* harmony default export */ const hooks_useInjectionZone = (useInjectionZone);

;// CONCATENATED MODULE: ./.cache/admin/src/shared/hooks/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/shared/components/InjectionZone/index.js



const InjectionZone = ({ area, ...props }) => {
  const compos = hooks_useInjectionZone(area);
  return compos.map((compo) => /* @__PURE__ */ react.createElement(compo.Component, { key: compo.name, ...props }));
};
InjectionZone.propTypes = {
  area: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_InjectionZone = (InjectionZone);

;// CONCATENATED MODULE: ./.cache/admin/src/shared/components/index.js


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/utils/connect.js

function connect(WrappedComponent, select) {
  return (props) => {
    const selectors = select(props.name);
    return /* @__PURE__ */ react.createElement(WrappedComponent, { ...props, ...selectors });
  };
}
/* harmony default export */ const utils_connect = (connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/utils/select.js



function useSelect(name) {
  const {
    addComponentToDynamicZone,
    createActionAllowedFields,
    isCreatingEntry,
    formErrors,
    modifiedData,
    moveComponentField,
    removeComponentFromDynamicZone,
    readActionAllowedFields,
    updateActionAllowedFields
  } = (0,helper_plugin.useCMEditViewDataManager)();
  const dynamicDisplayedComponents = (0,react.useMemo)(
    () => (0,lodash.get)(modifiedData, [name], []).map((data) => {
      return {
        componentUid: data.__component,
        id: data.id ?? data.__temp_key__
      };
    }),
    [modifiedData, name]
  );
  const isFieldAllowed = (0,react.useMemo)(() => {
    const allowedFields = isCreatingEntry ? createActionAllowedFields : updateActionAllowedFields;
    return allowedFields.includes(name);
  }, [name, isCreatingEntry, createActionAllowedFields, updateActionAllowedFields]);
  const isFieldReadable = (0,react.useMemo)(() => {
    const allowedFields = isCreatingEntry ? [] : readActionAllowedFields;
    return allowedFields.includes(name);
  }, [name, isCreatingEntry, readActionAllowedFields]);
  return {
    addComponentToDynamicZone,
    formErrors,
    isCreatingEntry,
    isFieldAllowed,
    isFieldReadable,
    moveComponentField,
    removeComponentFromDynamicZone,
    dynamicDisplayedComponents
  };
}
/* harmony default export */ const utils_select = (useSelect);

// EXTERNAL MODULE: ./node_modules/lodash/size.js
var size = __webpack_require__(84238);
var size_default = /*#__PURE__*/__webpack_require__.n(size);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/FieldComponent/utils/connect.js

function connect_connect(WrappedComponent, select) {
  return (props) => {
    const selectors = select(props);
    return /* @__PURE__ */ react.createElement(WrappedComponent, { ...props, ...selectors });
  };
}
/* harmony default export */ const FieldComponent_utils_connect = (connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/FieldComponent/utils/select.js





function select_useSelect({ isFromDynamicZone, name }) {
  const {
    addNonRepeatableComponentToField,
    createActionAllowedFields,
    isCreatingEntry,
    modifiedData,
    removeComponentFromField,
    readActionAllowedFields,
    updateActionAllowedFields,
    formErrors
  } = (0,helper_plugin.useCMEditViewDataManager)();
  const { contentType } = hooks_useContentTypeLayout();
  const allDynamicZoneFields = (0,react.useMemo)(() => {
    const attributes = (0,lodash.get)(contentType, ["attributes"], {});
    const dynamicZoneFields = Object.keys(attributes).filter((attrName) => {
      return (0,lodash.get)(attributes, [attrName, "type"], "") === "dynamiczone";
    });
    return dynamicZoneFields;
  }, [contentType]);
  const allowedFields = (0,react.useMemo)(() => {
    return isCreatingEntry ? createActionAllowedFields : updateActionAllowedFields;
  }, [isCreatingEntry, createActionAllowedFields, updateActionAllowedFields]);
  const componentValue = (0,lodash.get)(modifiedData, name, null);
  const compoName = (0,react.useMemo)(() => {
    return utils_getFieldName(name);
  }, [name]);
  const hasChildrenAllowedFields = (0,react.useMemo)(() => {
    if (isFromDynamicZone && isCreatingEntry) {
      return true;
    }
    const includedDynamicZoneFields = allowedFields.filter((name2) => name2 === compoName[0]);
    if (includedDynamicZoneFields.length > 0) {
      return true;
    }
    const relatedChildrenAllowedFields = allowedFields.map((fieldName) => {
      return fieldName.split(".");
    }).filter((fieldName) => {
      if (fieldName.length < compoName.length) {
        return false;
      }
      const joined = (0,lodash.take)(fieldName, compoName.length).join(".");
      return joined === compoName.join(".");
    });
    return relatedChildrenAllowedFields.length > 0;
  }, [isFromDynamicZone, isCreatingEntry, allowedFields, compoName]);
  const hasChildrenReadableFields = (0,react.useMemo)(() => {
    if (isFromDynamicZone) {
      return true;
    }
    if (allDynamicZoneFields.includes(compoName[0])) {
      return true;
    }
    const allowedFields2 = isCreatingEntry ? [] : readActionAllowedFields;
    const relatedChildrenAllowedFields = allowedFields2.map((fieldName) => {
      return fieldName.split(".");
    }).filter((fieldName) => {
      if (fieldName.length < compoName.length) {
        return false;
      }
      const joined = (0,lodash.take)(fieldName, compoName.length).join(".");
      return joined === compoName.join(".");
    });
    return relatedChildrenAllowedFields.length > 0;
  }, [
    isFromDynamicZone,
    allDynamicZoneFields,
    compoName,
    isCreatingEntry,
    readActionAllowedFields
  ]);
  const isReadOnly = (0,react.useMemo)(() => {
    if (isCreatingEntry) {
      return false;
    }
    if (hasChildrenAllowedFields) {
      return false;
    }
    return hasChildrenReadableFields;
  }, [hasChildrenAllowedFields, hasChildrenReadableFields, isCreatingEntry]);
  return {
    addNonRepeatableComponentToField,
    formErrors,
    hasChildrenAllowedFields,
    hasChildrenReadableFields,
    isCreatingEntry,
    isReadOnly,
    removeComponentFromField,
    componentValue
  };
}
/* harmony default export */ const FieldComponent_utils_select = (select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/FieldComponent/Label.js





const LabelAction = (0,styled_components_browser_esm["default"])(dist.Box)`
  svg path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }
`;
const Label = ({
  intlLabel,
  id,
  labelAction,
  name,
  numberOfEntries,
  showNumberOfEntries,
  required
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const label = intlLabel?.id ? formatMessage(intlLabel) : name;
  return /* @__PURE__ */ react.createElement(dist.Box, { paddingBottom: 1 }, /* @__PURE__ */ react.createElement(dist.Flex, null, /* @__PURE__ */ react.createElement(
    dist.Typography,
    {
      textColor: "neutral800",
      htmlFor: id || name,
      variant: "pi",
      fontWeight: "bold",
      as: "label"
    },
    label,
    showNumberOfEntries && /* @__PURE__ */ react.createElement(react.Fragment, null, "\xA0(", numberOfEntries, ")"),
    required && /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "danger600" }, "*")
  ), labelAction && /* @__PURE__ */ react.createElement(LabelAction, { paddingLeft: 1 }, labelAction)));
};
Label.defaultProps = {
  id: void 0,
  labelAction: void 0,
  numberOfEntries: 0,
  required: false,
  showNumberOfEntries: false
};
Label.propTypes = {
  id: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  labelAction: (prop_types_default()).element,
  name: (prop_types_default()).string.isRequired,
  numberOfEntries: (prop_types_default()).number,
  required: (prop_types_default()).bool,
  showNumberOfEntries: (prop_types_default()).bool
};
/* harmony default export */ const FieldComponent_Label = (Label);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/ComponentInitializer/index.js








const IconWrapper = styled_components_browser_esm["default"].span`
  > svg {
    width: ${(0,helper_plugin.pxToRem)(24)};
    height: ${(0,helper_plugin.pxToRem)(24)};
    > circle {
      fill: ${({ theme }) => theme.colors.primary200};
    }
    > path {
      fill: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const ComponentInitializer = ({ error, isReadOnly, onClick }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    dist.Box,
    {
      as: "button",
      background: "neutral100",
      borderColor: error ? "danger600" : "neutral200",
      disabled: isReadOnly,
      hasRadius: true,
      onClick,
      paddingTop: 9,
      paddingBottom: 9,
      type: "button"
    },
    /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", gap: 2 }, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "center", style: { cursor: isReadOnly ? "not-allowed" : "inherit" } }, /* @__PURE__ */ react.createElement(IconWrapper, null, /* @__PURE__ */ react.createElement(icons_dist.PlusCircle, null))), /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "primary600", variant: "pi", fontWeight: "bold" }, formatMessage({
      id: utils_getTrad("components.empty-repeatable"),
      defaultMessage: "No entry yet. Click on the button below to add one."
    }))))
  ), error?.id && /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "danger600", variant: "pi" }, formatMessage(error, { ...error.values })));
};
ComponentInitializer.defaultProps = {
  error: void 0,
  isReadOnly: false
};
ComponentInitializer.propTypes = {
  error: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  isReadOnly: (prop_types_default()).bool,
  onClick: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ComponentInitializer = (ComponentInitializer);

// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(57557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/lodash/take.js
var take = __webpack_require__(69572);
var take_default = /*#__PURE__*/__webpack_require__.n(take);
// EXTERNAL MODULE: ./node_modules/codemirror5/lib/codemirror.js
var codemirror = __webpack_require__(44823);
var codemirror_default = /*#__PURE__*/__webpack_require__.n(codemirror);
// EXTERNAL MODULE: ./node_modules/codemirror5/addon/display/placeholder.js
var placeholder = __webpack_require__(39961);
// EXTERNAL MODULE: ./node_modules/markdown-it/index.js
var markdown_it = __webpack_require__(9980);
var markdown_it_default = /*#__PURE__*/__webpack_require__.n(markdown_it);
// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var highlight_js_lib = __webpack_require__(25257);
// EXTERNAL MODULE: ./node_modules/markdown-it-abbr/index.js
var markdown_it_abbr = __webpack_require__(79411);
var markdown_it_abbr_default = /*#__PURE__*/__webpack_require__.n(markdown_it_abbr);
// EXTERNAL MODULE: ./node_modules/markdown-it-container/index.js
var markdown_it_container = __webpack_require__(40591);
var markdown_it_container_default = /*#__PURE__*/__webpack_require__.n(markdown_it_container);
// EXTERNAL MODULE: ./node_modules/markdown-it-deflist/index.js
var markdown_it_deflist = __webpack_require__(30645);
var markdown_it_deflist_default = /*#__PURE__*/__webpack_require__.n(markdown_it_deflist);
// EXTERNAL MODULE: ./node_modules/markdown-it-emoji/index.js
var markdown_it_emoji = __webpack_require__(46635);
var markdown_it_emoji_default = /*#__PURE__*/__webpack_require__.n(markdown_it_emoji);
// EXTERNAL MODULE: ./node_modules/markdown-it-footnote/index.js
var markdown_it_footnote = __webpack_require__(52384);
var markdown_it_footnote_default = /*#__PURE__*/__webpack_require__.n(markdown_it_footnote);
// EXTERNAL MODULE: ./node_modules/markdown-it-ins/index.js
var markdown_it_ins = __webpack_require__(44266);
var markdown_it_ins_default = /*#__PURE__*/__webpack_require__.n(markdown_it_ins);
// EXTERNAL MODULE: ./node_modules/markdown-it-mark/index.js
var markdown_it_mark = __webpack_require__(94574);
var markdown_it_mark_default = /*#__PURE__*/__webpack_require__.n(markdown_it_mark);
// EXTERNAL MODULE: ./node_modules/markdown-it-sub/index.js
var markdown_it_sub = __webpack_require__(40700);
var markdown_it_sub_default = /*#__PURE__*/__webpack_require__.n(markdown_it_sub);
// EXTERNAL MODULE: ./node_modules/markdown-it-sup/index.js
var markdown_it_sup = __webpack_require__(97003);
var markdown_it_sup_default = /*#__PURE__*/__webpack_require__.n(markdown_it_sup);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/PreviewWysiwyg/utils/mdRenderer.js











const loadCss = async () => {
  await __webpack_require__.e(/* import() | highlight.js */ 7347).then(__webpack_require__.bind(__webpack_require__, 24840));
};
loadCss();
const md = new (markdown_it_default())({
  html: true,
  // Enable HTML tags in source
  xhtmlOut: false,
  breaks: true,
  langPrefix: "language-",
  linkify: true,
  typographer: true,
  // Code from: https://github.com/markdown-it/markdown-it/blob/master/support/demo_template/index.js#L83
  highlight(str, lang) {
    if (lang && lang !== "auto" && (0,highlight_js_lib.getLanguage)(lang)) {
      return '<pre class="hljs language-' + md.utils.escapeHtml(lang.toLowerCase()) + '"><code>' + (0,highlight_js_lib.highlight)(lang, str, true).value + "</code></pre>";
    }
    if (lang === "auto") {
      const result = (0,highlight_js_lib.highlightAuto)(str);
      return '<pre class="hljs language-' + md.utils.escapeHtml(result.language) + '"><code>' + result.value + "</code></pre>";
    }
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>";
  }
}).use((markdown_it_abbr_default())).use((markdown_it_container_default()), "warning").use((markdown_it_container_default()), "tip").use((markdown_it_deflist_default())).use((markdown_it_emoji_default())).use((markdown_it_footnote_default())).use((markdown_it_ins_default())).use((markdown_it_mark_default())).use((markdown_it_sub_default())).use((markdown_it_sup_default()));
md.renderer.rules.footnote_ref = (tokens, idx, options, env, slf) => {
  const caption = slf.rules.footnote_caption(tokens, idx, options, env, slf);
  return '<sup class="footnote-ref"><span>' + caption + "</span></sup>";
};
md.renderer.rules.footnote_anchor = () => {
  return ' <span class="footnote-backref">\u21A9\uFE0E</span>';
};
/* harmony default export */ const mdRenderer = (md);

// EXTERNAL MODULE: ./node_modules/sanitize-html/index.js
var sanitize_html = __webpack_require__(91036);
var sanitize_html_default = /*#__PURE__*/__webpack_require__.n(sanitize_html);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/PreviewWysiwyg/utils/satinizeHtml.js

const options = {
  ...(sanitize_html_default()).defaults,
  allowedTags: false,
  allowedAttributes: {
    "*": ["href", "align", "alt", "center", "width", "height", "type", "controls", "target"],
    img: ["src", "alt"],
    source: ["src", "type"]
  }
};
const clean = (dirty) => sanitize_html_default()(dirty, options);
/* harmony default export */ const satinizeHtml = (clean);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/PreviewWysiwyg/Wrapper.js

const Wrapper = styled_components_browser_esm["default"].div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: ${({ theme }) => `${theme.spaces[3]} ${theme.spaces[4]}`};
  font-size: ${14 / 16}rem;
  background-color: ${({ theme }) => theme.colors.neutral0};
  color: ${({ theme }) => theme.colors.neutral800};
  line-height: ${({ theme }) => theme.lineHeights[6]};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block-start: ${({ theme }) => theme.spaces[2]};
    margin-block-end: ${({ theme }) => theme.spaces[2]};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spaces[2]};
  }

  h1 {
    font-size: ${36 / 16}rem;
    font-weight: 600;
  }

  h2 {
    font-size: ${30 / 16}rem;
    font-weight: 500;
  }

  h3 {
    font-size: ${24 / 16}rem;
    font-weight: 500;
  }

  h4 {
    font-size: ${20 / 16}rem;
    font-weight: 500;
  }

  strong {
    font-weight: 800;
  }

  em {
    font-style: italic;
  }

  blockquote {
    margin-top: ${({ theme }) => theme.spaces[8]};
    margin-bottom: ${({ theme }) => theme.spaces[7]};
    font-size: ${14 / 16}rem;
    font-weight: 400;
    border-left: 4px solid ${({ theme }) => theme.colors.neutral150};
    font-style: italic;
    padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[5]};
  }

  img {
    max-width: 100%;
  }

  table {
    thead {
      background: ${({ theme }) => theme.colors.neutral150};

      th {
        padding: ${({ theme }) => theme.spaces[4]};
      }
    }
    tr {
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
    }
    th,
    td {
      padding: ${({ theme }) => theme.spaces[4]};
      border: 1px solid ${({ theme }) => theme.colors.neutral200};
      border-bottom: 0;
      border-top: 0;
    }
  }

  pre,
  code {
    font-size: ${14 / 16}rem;
    border-radius: 4px;
    /* 
      Hard coded since the color is the same between themes,
      theme.colors.neutral800 changes between themes.

      Matches the color of the JSON Input component.
    */
    background-color: #32324d;
    max-width: 100%;
    overflow: auto;
    padding: ${({ theme }) => theme.spaces[2]};
  }

  /* Inline code */
  p,
  pre,
  td {
    > code {
      color: #839496;
    }
  }

  ol {
    list-style-type: decimal;
    margin-block-start: ${({ theme }) => theme.spaces[4]};
    margin-block-end: ${({ theme }) => theme.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({ theme }) => theme.spaces[4]};

    ol,
    ul {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }

  ul {
    list-style-type: disc;
    margin-block-start: ${({ theme }) => theme.spaces[4]};
    margin-block-end: ${({ theme }) => theme.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({ theme }) => theme.spaces[4]};

    ul,
    ol {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }
`;
/* harmony default export */ const PreviewWysiwyg_Wrapper = (Wrapper);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/PreviewWysiwyg/index.js





const PreviewWysiwyg = ({ data }) => {
  const html = (0,react.useMemo)(() => satinizeHtml(mdRenderer.render(data.replaceAll("\\n", "\n") || "")), [data]);
  return /* @__PURE__ */ react.createElement(PreviewWysiwyg_Wrapper, null, /* @__PURE__ */ react.createElement("div", { dangerouslySetInnerHTML: { __html: html } }));
};
PreviewWysiwyg.defaultProps = {
  data: ""
};
PreviewWysiwyg.propTypes = {
  data: (prop_types_default()).string
};
/* harmony default export */ const components_PreviewWysiwyg = ((0,react.memo)(PreviewWysiwyg));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/EditorStylesContainer.js

const EditorStylesContainer = styled_components_browser_esm["default"].div`
  cursor: ${({ disabled }) => disabled ? "not-allowed !important" : "auto"};
  height: 100%;
  /* BASICS */
  .CodeMirror-placeholder {
    color: ${({ theme }) => theme.colors.neutral600} !important;
  }

  .CodeMirror {
    /* Set height, width, borders, and global font properties here */
    font-size: ${14 / 16}rem;
    height: ${({ isExpandMode }) => isExpandMode ? "100%" : "290px"};
    color: ${({ theme }) => theme.colors.neutral800};
    direction: ltr;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* PADDING */

  .CodeMirror-lines {
    padding: ${({ theme }) => `${theme.spaces[3]} ${theme.spaces[4]}`};
    /* Vertical padding around content */
  }

  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    /* The little square between H and V scrollbars */
    background-color: ${({ theme }) => `${theme.colors.neutral0}`};
  }

  /* GUTTER */

  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap;
  }
  .CodeMirror-linenumbers {
  }
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap;
  }

  .CodeMirror-guttermarker {
    color: black;
  }
  .CodeMirror-guttermarker-subtle {
    color: #999;
  }

  /* CURSOR */

  .CodeMirror-cursor {
    border-left: 1px solid black;
    border-right: none;
    width: 0;
  }
  /* Shown when moving in bi-directional text */
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    /* z-index: 1; */
  }

  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }

  /* Can style cursor different in overwrite (non-insert) mode */
  .CodeMirror-overwrite .CodeMirror-cursor {
  }

  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }

  .CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: 0;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  /* DEFAULT THEME */

  .cm-header,
  .cm-strong {
    font-weight: bold;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }

  .CodeMirror-composing {
    border-bottom: 2px solid;
  }

  /* Default styles for common addons */

  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }

  /* STOP */

  /* The rest of this file contains styles related to the mechanics of
    the editor. You probably shouldn't touch them. */

  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => `${theme.colors.neutral0}`};
  }

  .CodeMirror-scroll {
    overflow: scroll !important; /* Things will break if this is overridden */
    /* 50px is the magic margin used to hide the element's real scrollbars */
    /* See overflow: hidden in .CodeMirror */
    margin-bottom: -50px;
    margin-right: -50px;
    padding-bottom: 50px;
    height: 100%;
    outline: none; /* Prevent dragging from highlighting the element */
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 50px solid transparent;
  }

  /* The fake, visible scrollbars. Used to force redraw during scrolling
    before actual scrolling happens, thus preventing shaking and
    flickering artifacts. */
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 1;
    display: none;
    outline: none;
  }

  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px; /* prevents collapsing before first draw */
  }
  /* Reset some styles that the rest of the page might have set */
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: 1.5;
    color: inherit;
    /* z-index: 2; */
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }

  .CodeMirror pre.CodeMirror-line-like {
    z-index: 2;
  }

  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    /* z-index: 2; */
    padding: 0.1px; /* Force widget margins to stay inside of the container */
  }

  .CodeMirror-widget {
  }

  .CodeMirror-rtl pre {
    direction: rtl;
  }

  .CodeMirror-code {
    outline: none;
  }

  /* Force content-box sizing for the elements where we expect it */
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
    border-color: ${({ theme }) => `${theme.colors.neutral800}`};
  }
  .CodeMirror-measure pre {
    position: static;
  }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    + div {
      z-index: 0 !important;
    }
  }

  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected {
    background: ${({ theme }) => theme.colors.neutral200};
    /* z-index: -10; */
  }
  .CodeMirror-crosshair {
    cursor: crosshair;
  }

  /* Used to force a border model for a node */
  .cm-force-border {
    padding-right: 0.1px;
  }

  /* See issue #2901 */
  .cm-tab-wrap-hack:after {
    content: '';
  }

  /* Help users use markselection to safely style text background */
  span.CodeMirror-selectedtext {
    background: none;
  }

  span {
    color: ${({ theme }) => theme.colors.neutral800} !important;
  }
`;

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/WysiwygStyles.js


const CustomIconButton = (0,styled_components_browser_esm["default"])(dist.IconButton)`
  padding: ${({ theme }) => theme.spaces[2]};
  /* Trick to prevent the outline from overflowing because of the general outline-offset */
  outline-offset: -2px !important;

  svg {
    width: ${18 / 16}rem;
    height: ${18 / 16}rem;
  }
`;
const CustomLinkIconButton = (0,styled_components_browser_esm["default"])(CustomIconButton)`
  svg {
    width: ${8 / 16}rem;
    height: ${8 / 16}rem;
  }
`;
const MainButtons = (0,styled_components_browser_esm["default"])(dist.IconButtonGroup)`
  margin-left: ${({ theme }) => theme.spaces[4]};
`;
const MoreButton = (0,styled_components_browser_esm["default"])(dist.IconButton)`
  margin: ${({ theme }) => `0 ${theme.spaces[2]}`};
  padding: ${({ theme }) => theme.spaces[2]};

  svg {
    width: ${18 / 16}rem;
    height: ${18 / 16}rem;
  }
`;
const IconButtonGroupMargin = (0,styled_components_browser_esm["default"])(dist.IconButtonGroup)`
  margin-right: ${({ theme }) => `${theme.spaces[2]}`};
`;
const EditorAndPreviewWrapper = styled_components_browser_esm["default"].div`
  position: relative;
  height: calc(100% - 48px);
`;
const ExpandButton = (0,styled_components_browser_esm["default"])(dist.BaseButton)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({ theme }) => `${theme.spaces[2]}`};
    path {
      fill: ${({ theme }) => theme.colors.neutral700};
      width: ${12 / 16}rem;
      height: ${12 / 16}rem;
    }
  }
`;

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/utils/continueList.js

var listRE = /^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/, emptyListRE = /^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/, unorderedListRE = /[*+-]\s/;
function newlineAndIndentContinueMarkdownList(cm) {
  if (cm.getOption("disableInput"))
    return (codemirror_default()).Pass;
  var ranges = cm.listSelections(), replacements = [];
  for (var i = 0; i < ranges.length; i++) {
    var pos = ranges[i].head;
    var eolState = cm.getStateAfter(pos.line);
    var inList = eolState.list !== false;
    var inQuote = eolState.quote !== 0;
    var line = cm.getLine(pos.line), match = listRE.exec(line);
    var cursorBeforeBullet = /^\s*$/.test(line.slice(0, pos.ch));
    if (!ranges[i].empty() || !inList && !inQuote || !match || cursorBeforeBullet) {
      cm.execCommand("newlineAndIndent");
      return;
    }
    if (emptyListRE.test(line)) {
      var endOfQuote = inQuote && />\s*$/.test(line);
      var endOfList = !/>\s*$/.test(line);
      if (endOfQuote || endOfList)
        cm.replaceRange(
          "",
          {
            line: pos.line,
            ch: 0
          },
          {
            line: pos.line,
            ch: pos.ch + 1
          }
        );
      replacements[i] = "\n";
    } else {
      var indent = match[1], after = match[5];
      var numbered = !(unorderedListRE.test(match[2]) || match[2].indexOf(">") >= 0);
      var bullet = numbered ? parseInt(match[3], 10) + 1 + match[4] : match[2].replace("x", " ");
      replacements[i] = "\n" + indent + bullet + after;
      if (numbered)
        incrementRemainingMarkdownListNumbers(cm, pos);
    }
  }
  cm.replaceSelections(replacements);
}
function incrementRemainingMarkdownListNumbers(cm, pos) {
  var startLine = pos.line, lookAhead = 0, skipCount = 0;
  var startItem = listRE.exec(cm.getLine(startLine)), startIndent = startItem[1];
  do {
    lookAhead += 1;
    var nextLineNumber = startLine + lookAhead;
    var nextLine = cm.getLine(nextLineNumber);
    var nextItem = listRE.exec(nextLine);
    if (nextItem) {
      var nextIndent = nextItem[1];
      var newNumber = parseInt(startItem[3], 10) + lookAhead - skipCount;
      var nextNumber = parseInt(nextItem[3], 10), itemNumber = nextNumber;
      if (startIndent === nextIndent && !isNaN(nextNumber)) {
        if (newNumber === nextNumber)
          itemNumber = nextNumber + 1;
        if (newNumber > nextNumber)
          itemNumber = newNumber + 1;
        cm.replaceRange(
          nextLine.replace(listRE, nextIndent + itemNumber + nextItem[4] + nextItem[5]),
          {
            line: nextLineNumber,
            ch: 0
          },
          {
            line: nextLineNumber,
            ch: nextLine.length
          }
        );
      } else {
        if (startIndent.length > nextIndent.length)
          return;
        if (startIndent.length < nextIndent.length && lookAhead === 1)
          return;
        skipCount += 1;
      }
    }
  } while (nextItem);
}
/* harmony default export */ const continueList = (newlineAndIndentContinueMarkdownList);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/Editor.js








const Editor = ({
  disabled,
  editorRef,
  error,
  isPreviewMode,
  isExpandMode,
  name,
  onChange,
  placeholder,
  textareaRef,
  value
}) => {
  const onChangeRef = (0,react.useRef)(onChange);
  (0,react.useEffect)(() => {
    editorRef.current = codemirror_default().fromTextArea(textareaRef.current, {
      lineWrapping: true,
      extraKeys: {
        Enter: "newlineAndIndentContinueMarkdownList",
        Tab: false,
        "Shift-Tab": false
      },
      readOnly: false,
      smartIndent: false,
      placeholder,
      spellcheck: true,
      inputStyle: "contenteditable"
    });
    (codemirror_default()).commands.newlineAndIndentContinueMarkdownList = continueList;
    editorRef.current.on("change", (doc) => {
      onChangeRef.current({ target: { name, value: doc.getValue(), type: "wysiwyg" } });
    });
  }, [editorRef, textareaRef, name, placeholder]);
  (0,react.useEffect)(() => {
    if (value && !editorRef.current.hasFocus()) {
      editorRef.current.setValue(value);
    }
  }, [editorRef, value]);
  (0,react.useEffect)(() => {
    if (isPreviewMode || disabled) {
      editorRef.current.setOption("readOnly", "nocursor");
    } else {
      editorRef.current.setOption("readOnly", false);
    }
  }, [disabled, isPreviewMode, editorRef]);
  (0,react.useEffect)(() => {
    if (error) {
      editorRef.current.setOption("screenReaderLabel", error);
    } else {
      editorRef.current.setOption("screenReaderLabel", "Editor");
    }
  }, [editorRef, error]);
  return /* @__PURE__ */ react.createElement(EditorAndPreviewWrapper, null, /* @__PURE__ */ react.createElement(EditorStylesContainer, { isExpandMode, disabled: disabled || isPreviewMode }, /* @__PURE__ */ react.createElement("textarea", { ref: textareaRef })), isPreviewMode && /* @__PURE__ */ react.createElement(components_PreviewWysiwyg, { data: value }));
};
Editor.defaultProps = {
  disabled: false,
  error: void 0,
  isPreviewMode: false,
  isExpandMode: false,
  placeholder: "",
  value: ""
};
Editor.propTypes = {
  disabled: (prop_types_default()).bool,
  editorRef: prop_types_default().shape({ current: (prop_types_default()).any }).isRequired,
  error: (prop_types_default()).string,
  isPreviewMode: (prop_types_default()).bool,
  isExpandMode: (prop_types_default()).bool,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  placeholder: (prop_types_default()).string,
  textareaRef: prop_types_default().shape({ current: (prop_types_default()).any }).isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const Wysiwyg_Editor = (Editor);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/WysiwygNav.js






const WysiwygNav = ({
  disabled,
  editorRef,
  isExpandMode,
  isPreviewMode,
  onActionClick,
  onToggleMediaLib,
  onTogglePreviewMode
}) => {
  const [visiblePopover, setVisiblePopover] = (0,react.useState)(false);
  const { formatMessage } = (0,react_intl.useIntl)();
  const selectPlaceholder = formatMessage({
    id: "components.Wysiwyg.selectOptions.title",
    defaultMessage: "Add a title"
  });
  const buttonMoreRef = (0,react.useRef)();
  const handleTogglePopover = () => {
    setVisiblePopover((prev) => !prev);
  };
  if (disabled || isPreviewMode) {
    return /* @__PURE__ */ react.createElement(dist.Box, { padding: 2, background: "neutral100" }, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(dist.Flex, null, /* @__PURE__ */ react.createElement(
      dist.Select,
      {
        disabled: true,
        id: "selectTitle",
        placeholder: selectPlaceholder,
        size: "S",
        "aria-label": selectPlaceholder
      },
      /* @__PURE__ */ react.createElement(dist.Option, { value: "h1" }, "h1"),
      /* @__PURE__ */ react.createElement(dist.Option, { value: "h2" }, "h2"),
      /* @__PURE__ */ react.createElement(dist.Option, { value: "h3" }, "h3"),
      /* @__PURE__ */ react.createElement(dist.Option, { value: "h4" }, "h4"),
      /* @__PURE__ */ react.createElement(dist.Option, { value: "h5" }, "h5"),
      /* @__PURE__ */ react.createElement(dist.Option, { value: "h6" }, "h6")
    ), /* @__PURE__ */ react.createElement(MainButtons, null, /* @__PURE__ */ react.createElement(CustomIconButton, { disabled: true, id: "Bold", label: "Bold", name: "Bold", icon: /* @__PURE__ */ react.createElement(icons_dist.Bold, null) }), /* @__PURE__ */ react.createElement(
      CustomIconButton,
      {
        disabled: true,
        id: "Italic",
        label: "Italic",
        name: "Italic",
        icon: /* @__PURE__ */ react.createElement(icons_dist.Italic, null)
      }
    ), /* @__PURE__ */ react.createElement(
      CustomIconButton,
      {
        disabled: true,
        id: "Underline",
        label: "Underline",
        name: "Underline",
        icon: /* @__PURE__ */ react.createElement(icons_dist.Underline, null)
      }
    )), /* @__PURE__ */ react.createElement(MoreButton, { disabled: true, id: "more", label: "More", icon: /* @__PURE__ */ react.createElement(icons_dist.More, null) })), !isExpandMode && /* @__PURE__ */ react.createElement(dist.Button, { onClick: onTogglePreviewMode, variant: "tertiary", id: "preview" }, formatMessage({
      id: "components.Wysiwyg.ToggleMode.markdown-mode",
      defaultMessage: "Markdown mode"
    }))));
  }
  return /* @__PURE__ */ react.createElement(dist.Box, { padding: 2, background: "neutral100" }, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(dist.Flex, null, /* @__PURE__ */ react.createElement(
    dist.Select,
    {
      id: "selectTitle",
      placeholder: selectPlaceholder,
      size: "S",
      onChange: (value) => onActionClick(value, editorRef)
    },
    /* @__PURE__ */ react.createElement(dist.Option, { value: "h1" }, "h1"),
    /* @__PURE__ */ react.createElement(dist.Option, { value: "h2" }, "h2"),
    /* @__PURE__ */ react.createElement(dist.Option, { value: "h3" }, "h3"),
    /* @__PURE__ */ react.createElement(dist.Option, { value: "h4" }, "h4"),
    /* @__PURE__ */ react.createElement(dist.Option, { value: "h5" }, "h5"),
    /* @__PURE__ */ react.createElement(dist.Option, { value: "h6" }, "h6")
  ), /* @__PURE__ */ react.createElement(MainButtons, null, /* @__PURE__ */ react.createElement(
    CustomIconButton,
    {
      onClick: () => onActionClick("Bold", editorRef),
      id: "Bold",
      label: "Bold",
      name: "Bold",
      icon: /* @__PURE__ */ react.createElement(icons_dist.Bold, null)
    }
  ), /* @__PURE__ */ react.createElement(
    CustomIconButton,
    {
      onClick: () => onActionClick("Italic", editorRef),
      id: "Italic",
      label: "Italic",
      name: "Italic",
      icon: /* @__PURE__ */ react.createElement(icons_dist.Italic, null)
    }
  ), /* @__PURE__ */ react.createElement(
    CustomIconButton,
    {
      onClick: () => onActionClick("Underline", editorRef),
      id: "Underline",
      label: "Underline",
      name: "Underline",
      icon: /* @__PURE__ */ react.createElement(icons_dist.Underline, null)
    }
  )), /* @__PURE__ */ react.createElement(
    MoreButton,
    {
      ref: buttonMoreRef,
      onClick: handleTogglePopover,
      id: "more",
      label: "More",
      icon: /* @__PURE__ */ react.createElement(icons_dist.More, null)
    }
  ), visiblePopover && /* @__PURE__ */ react.createElement(dist.Popover, { centered: true, source: buttonMoreRef, spacing: 4, id: "popover" }, /* @__PURE__ */ react.createElement(dist.FocusTrap, { onEscape: handleTogglePopover, restoreFocus: false }, /* @__PURE__ */ react.createElement(dist.Flex, null, /* @__PURE__ */ react.createElement(IconButtonGroupMargin, null, /* @__PURE__ */ react.createElement(
    CustomIconButton,
    {
      onClick: () => onActionClick("Strikethrough", editorRef, handleTogglePopover),
      id: "Strikethrough",
      label: "Strikethrough",
      name: "Strikethrough",
      icon: /* @__PURE__ */ react.createElement(icons_dist.StrikeThrough, null)
    }
  ), /* @__PURE__ */ react.createElement(
    CustomIconButton,
    {
      onClick: () => onActionClick("BulletList", editorRef, handleTogglePopover),
      id: "BulletList",
      label: "BulletList",
      name: "BulletList",
      icon: /* @__PURE__ */ react.createElement(icons_dist.BulletList, null)
    }
  ), /* @__PURE__ */ react.createElement(
    CustomIconButton,
    {
      onClick: () => onActionClick("NumberList", editorRef, handleTogglePopover),
      id: "NumberList",
      label: "NumberList",
      name: "NumberList",
      icon: /* @__PURE__ */ react.createElement(icons_dist.NumberList, null)
    }
  )), /* @__PURE__ */ react.createElement(dist.IconButtonGroup, null, /* @__PURE__ */ react.createElement(
    CustomIconButton,
    {
      onClick: () => onActionClick("Code", editorRef, handleTogglePopover),
      id: "Code",
      label: "Code",
      name: "Code",
      icon: /* @__PURE__ */ react.createElement(icons_dist.Code, null)
    }
  ), /* @__PURE__ */ react.createElement(
    CustomIconButton,
    {
      onClick: () => {
        handleTogglePopover();
        onToggleMediaLib();
      },
      id: "Image",
      label: "Image",
      name: "Image",
      icon: /* @__PURE__ */ react.createElement(icons_dist.Picture, null)
    }
  ), /* @__PURE__ */ react.createElement(
    CustomLinkIconButton,
    {
      onClick: () => onActionClick("Link", editorRef, handleTogglePopover),
      id: "Link",
      label: "Link",
      name: "Link",
      icon: /* @__PURE__ */ react.createElement(icons_dist.Link, null)
    }
  ), /* @__PURE__ */ react.createElement(
    CustomIconButton,
    {
      onClick: () => onActionClick("Quote", editorRef, handleTogglePopover),
      id: "Quote",
      label: "Quote",
      name: "Quote",
      icon: /* @__PURE__ */ react.createElement(icons_dist.Quote, null)
    }
  )))))), onTogglePreviewMode && /* @__PURE__ */ react.createElement(dist.Button, { onClick: onTogglePreviewMode, variant: "tertiary", id: "preview" }, formatMessage({
    id: "components.Wysiwyg.ToggleMode.preview-mode",
    defaultMessage: "Preview mode"
  }))));
};
WysiwygNav.defaultProps = {
  isPreviewMode: false,
  onActionClick() {
  },
  onToggleMediaLib() {
  },
  onTogglePreviewMode: void 0
};
WysiwygNav.propTypes = {
  disabled: (prop_types_default()).bool.isRequired,
  editorRef: prop_types_default().shape({ current: (prop_types_default()).any }).isRequired,
  isExpandMode: (prop_types_default()).bool.isRequired,
  isPreviewMode: (prop_types_default()).bool,
  onActionClick: (prop_types_default()).func,
  onToggleMediaLib: (prop_types_default()).func,
  onTogglePreviewMode: (prop_types_default()).func
};
/* harmony default export */ const Wysiwyg_WysiwygNav = (WysiwygNav);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/WysiwygFooter.js






const WysiwygFooter = ({ onToggleExpand }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.Box, { padding: 2, background: "neutral100", hasRadius: true }, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "flex-end", alignItems: "flex-end" }, /* @__PURE__ */ react.createElement(ExpandButton, { id: "expand", onClick: onToggleExpand }, /* @__PURE__ */ react.createElement(dist.Typography, null, formatMessage({
    id: "components.WysiwygBottomControls.fullscreen",
    defaultMessage: "Expand"
  })), /* @__PURE__ */ react.createElement(icons_dist.Expand, null))));
};
WysiwygFooter.defaultProps = {
  onToggleExpand() {
  }
};
WysiwygFooter.propTypes = {
  onToggleExpand: (prop_types_default()).func
};
/* harmony default export */ const Wysiwyg_WysiwygFooter = (WysiwygFooter);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Hint/index.js



const Hint = ({ id, error, name, hint }) => {
  if (hint.length === 0 || error) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(dist.Typography, { as: "p", variant: "pi", id: `${id || name}-hint`, textColor: "neutral600" }, hint);
};
Hint.defaultProps = {
  id: void 0,
  error: void 0,
  hint: ""
};
Hint.propTypes = {
  hint: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).array]),
  error: (prop_types_default()).string,
  id: (prop_types_default()).string,
  name: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_Hint = (Hint);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/utils/utils.js
const replaceText = (markdownName, textToChange) => {
  let editedText;
  switch (markdownName) {
    case "Strikethrough":
      editedText = `~~${textToChange}~~`;
      break;
    case "Bold":
      editedText = `**${textToChange}**`;
      break;
    case "Italic":
      editedText = `_${textToChange}_`;
      break;
    case "Underline":
      editedText = `<u>${textToChange}</u>`;
      break;
    case "Code":
      editedText = `\`\`\`
${textToChange}
\`\`\``;
      break;
    case "Link":
      editedText = `[${textToChange}](link)`;
      break;
    case "Quote":
      editedText = `>${textToChange}`;
      break;
    default:
      editedText = textToChange;
  }
  return editedText;
};
const insertText = (markdownName) => {
  let editedText;
  let selection = { start: markdownName.length, end: 0 };
  switch (markdownName) {
    case "Strikethrough":
      editedText = `~~${markdownName}~~`;
      selection.end = 2;
      break;
    case "Bold":
      editedText = `**${markdownName}**`;
      selection.end = 2;
      break;
    case "Italic":
      editedText = `_${markdownName}_`;
      selection.end = 1;
      break;
    case "alt":
      editedText = `[${markdownName}]()`;
      selection.end = 3;
      break;
    case "Underline":
      editedText = `<u>${markdownName}</u>`;
      selection.end = 4;
      break;
    case "Code":
      editedText = `\`\`\`
${markdownName}
\`\`\``;
      selection.end = 3;
      break;
    case "Link":
      editedText = `[${markdownName}](link)`;
      selection.end = 7;
      break;
    case "Quote":
      editedText = `>${markdownName}`;
      selection.end = 0;
      break;
    default:
      editedText = "";
  }
  return { editedText, selection };
};
const insertListOrTitle = (markdown) => {
  let textToInsert;
  switch (markdown) {
    case "BulletList":
      textToInsert = "- ";
      break;
    case "NumberList":
      textToInsert = "1. ";
      break;
    case "h1":
      textToInsert = "# ";
      break;
    case "h2":
      textToInsert = "## ";
      break;
    case "h3":
      textToInsert = "### ";
      break;
    case "h4":
      textToInsert = "#### ";
      break;
    case "h5":
      textToInsert = "##### ";
      break;
    case "h6":
      textToInsert = "###### ";
      break;
    default:
      return "";
  }
  return textToInsert;
};
const markdownHandler = (editor, markdownType) => {
  const textToEdit = editor.current.getSelection();
  let textToInsert;
  if (textToEdit) {
    const editedText = replaceText(markdownType, textToEdit);
    editor.current.replaceSelection(editedText);
    editor.current.focus();
  } else {
    textToInsert = insertText(markdownType);
    editor.current.replaceSelection(textToInsert.editedText);
    editor.current.focus();
    const { line, ch } = editor.current.getCursor();
    const endSelection = ch - textToInsert.selection.end;
    const startSelection = ch - textToInsert.selection.end - textToInsert.selection.start;
    editor.current.setSelection({ line, ch: startSelection }, { line, ch: endSelection });
  }
};
const listHandler = (editor, listType) => {
  const doc = editor.current.getDoc();
  const insertion = listType === "BulletList" ? "- " : "1. ";
  if (doc.somethingSelected()) {
    const selections = doc.listSelections();
    let remove = null;
    editor.current.operation(function() {
      selections.forEach(function(selection) {
        const pos = [selection.head.line, selection.anchor.line].sort();
        if (remove == null) {
          remove = doc.getLine(pos[0]).startsWith(insertion);
        }
        for (let i = pos[0]; i <= pos[1]; i++) {
          if (remove) {
            if (doc.getLine(i).startsWith(insertion)) {
              doc.replaceRange("", { line: i, ch: 0 }, { line: i, ch: insertion.length });
            }
          } else {
            const lineInsertion = listType === "BulletList" ? "- " : `${i + 1}. `;
            doc.replaceRange(lineInsertion, { line: i, ch: 0 });
          }
        }
      });
    });
  } else {
    let { line: currentLine } = doc.getCursor();
    const listToInsert = insertListOrTitle(listType);
    const lineContent = editor.current.getLine(currentLine);
    const textToInsert = listToInsert + lineContent;
    editor.current.setSelection(
      { line: currentLine, ch: 0 },
      { line: currentLine, ch: lineContent.length }
    );
    editor.current.replaceSelection(textToInsert);
  }
  editor.current.focus();
};
const titleHandler = (editor, titleType) => {
  let { line: currentLine } = editor.current.getCursor();
  const titleToInsert = insertListOrTitle(titleType);
  const lineContent = editor.current.getLine(currentLine);
  const lineWithNoTitle = lineContent.replace(/#{1,6}\s/g, "").trim();
  const textToInsert = titleToInsert + lineWithNoTitle;
  editor.current.setSelection(
    { line: currentLine, ch: 0 },
    { line: currentLine, ch: lineContent.length }
  );
  editor.current.replaceSelection(textToInsert);
  setTimeout(() => {
    const newLastLineLength = editor.current.getLine(currentLine).length;
    editor.current.focus();
    editor.current.setCursor({ line: currentLine, ch: newLastLineLength });
  }, 0);
};
const insertFile = (editor, files) => {
  let { line, ch } = editor.current.getCursor();
  files.forEach((file, i) => {
    let contentLength = editor.current.getLine(line).length;
    editor.current.setCursor({ line, ch: contentLength });
    if (i > 0 || i === 0 && ch !== 0) {
      contentLength = editor.current.getLine(line).length;
      editor.current.setCursor({ line, ch: contentLength });
      line++;
      editor.current.replaceSelection("\n");
    }
    if (file.mime.includes("image")) {
      editor.current.replaceSelection(`![${file.alt}](${file.url})`);
    } else {
      editor.current.replaceSelection(`[${file.alt}](${file.url})`);
    }
  });
  setTimeout(() => editor.current.focus(), 0);
};
const insertWithTextToEdit = (editor, markdownType, line, contentLength, textToEdit) => {
  const textToInsert = replaceText(markdownType, textToEdit);
  const contentToMove = editor.current.getRange(
    { line: line + 1, ch: 0 },
    { line: Infinity, ch: Infinity }
  );
  editor.current.replaceRange("", { line: line + 1, ch: 0 }, { line: Infinity, ch: Infinity });
  editor.current.replaceSelection("");
  editor.current.setCursor({ line, ch: contentLength });
  editor.current.replaceSelection("\n");
  editor.current.replaceSelection(textToInsert);
  if (markdownType === "Code") {
    let { line: newLine } = editor.current.getCursor();
    editor.current.setCursor({ line: newLine - 1, ch: textToEdit.length });
  }
  editor.current.replaceRange(
    contentToMove,
    { line: line + 4, ch: 0 },
    { line: Infinity, ch: Infinity }
  );
  editor.current.focus();
};
const insertWithoutTextToEdit = (editor, markdownType, line, contentLength) => {
  const textToInsert = insertText(markdownType);
  const contentToMove = editor.current.getRange(
    { line: line + 1, ch: 0 },
    { line: Infinity, ch: Infinity }
  );
  editor.current.replaceRange("", { line: line + 1, ch: 0 }, { line: Infinity, ch: Infinity });
  editor.current.setCursor({ line, ch: contentLength });
  editor.current.replaceSelection("\n");
  editor.current.replaceSelection(textToInsert.editedText);
  if (markdownType === "Code") {
    line += 2;
    editor.current.setSelection({ line, ch: 0 }, { line, ch: 4 });
  } else {
    line += 1;
    let { ch } = editor.current.getCursor();
    let endSelection = ch - textToInsert.selection.end;
    let startSelection = ch - textToInsert.selection.end - textToInsert.selection.start;
    editor.current.setSelection({ line, ch: startSelection }, { line, ch: endSelection });
  }
  editor.current.replaceRange(
    contentToMove,
    { line: line + 2, ch: 0 },
    { line: Infinity, ch: Infinity }
  );
  editor.current.focus();
};
const quoteAndCodeHandler = (editor, markdownType) => {
  const textToEdit = editor.current.getSelection();
  let { line } = editor.current.getCursor();
  let contentLength = editor.current.getLine(line).length;
  if (textToEdit) {
    insertWithTextToEdit(editor, markdownType, line, contentLength, textToEdit);
  } else {
    insertWithoutTextToEdit(editor, markdownType, line, contentLength);
  }
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/EditorLayout.js








const setOpacity = (hex, alpha) => `${hex}${Math.floor(alpha * 255).toString(16).padStart(2, 0)}`;
const ExpandWrapper = (0,styled_components_browser_esm["default"])(dist.Flex)`
  background: ${({ theme }) => setOpacity(theme.colors.neutral800, 0.2)};
`;
const BoxWithBorder = (0,styled_components_browser_esm["default"])(dist.Box)`
  border-right: 1px solid ${({ theme }) => theme.colors.neutral200};
`;
const EditorLayout_ExpandButton = (0,styled_components_browser_esm["default"])(dist.BaseButton)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({ theme }) => `${theme.spaces[2]}`};

    path {
      fill: ${({ theme }) => theme.colors.neutral700};
      width: ${12 / 16}rem;
      height: ${12 / 16}rem;
    }
  }
`;
const EditorLayout = ({ children, isExpandMode, error, previewContent, onCollapse }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,helper_plugin.useLockScroll)(isExpandMode);
  if (isExpandMode) {
    return /* @__PURE__ */ react.createElement(dist.Portal, { role: "dialog", "aria-modal": false }, /* @__PURE__ */ react.createElement(dist.FocusTrap, { onEscape: onCollapse }, /* @__PURE__ */ react.createElement(
      ExpandWrapper,
      {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 4,
        justifyContent: "center",
        onClick: onCollapse
      },
      /* @__PURE__ */ react.createElement(
        dist.Box,
        {
          background: "neutral0",
          hasRadius: true,
          shadow: "popupShadow",
          overflow: "hidden",
          width: "70%",
          height: "70%",
          onClick: (e) => e.stopPropagation()
        },
        /* @__PURE__ */ react.createElement(dist.Flex, { height: "100%", alignItems: "flex-start" }, /* @__PURE__ */ react.createElement(BoxWithBorder, { flex: "1", height: "100%" }, children), /* @__PURE__ */ react.createElement(dist.Flex, { alignItems: "start", direction: "column", flex: 1, height: "100%", width: "100%" }, /* @__PURE__ */ react.createElement(
          dist.Flex,
          {
            height: (0,helper_plugin.pxToRem)(48),
            background: "neutral100",
            justifyContent: "flex-end",
            shrink: 0,
            width: "100%"
          },
          /* @__PURE__ */ react.createElement(EditorLayout_ExpandButton, { onClick: onCollapse }, /* @__PURE__ */ react.createElement(dist.Typography, null, formatMessage({
            id: "components.Wysiwyg.collapse",
            defaultMessage: "Collapse"
          })), /* @__PURE__ */ react.createElement(icons_dist.Collapse, null))
        ), /* @__PURE__ */ react.createElement(dist.Box, { position: "relative", height: "100%", width: "100%" }, /* @__PURE__ */ react.createElement(components_PreviewWysiwyg, { data: previewContent }))))
      )
    )));
  }
  return /* @__PURE__ */ react.createElement(
    dist.Box,
    {
      borderColor: error ? "danger600" : "neutral200",
      borderStyle: "solid",
      borderWidth: "1px",
      hasRadius: true
    },
    children
  );
};
EditorLayout.defaultProps = {
  error: void 0,
  previewContent: ""
};
EditorLayout.propTypes = {
  children: (prop_types_default()).node.isRequired,
  error: (prop_types_default()).string,
  isExpandMode: (prop_types_default()).bool.isRequired,
  previewContent: (prop_types_default()).string,
  onCollapse: (prop_types_default()).func.isRequired
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Wysiwyg/index.js












const Wysiwyg_LabelAction = (0,styled_components_browser_esm["default"])(dist.Box)`
  svg path {
    fill: ${({ theme }) => theme.colors.neutral500};
  }
`;
const TypographyAsterisk = (0,styled_components_browser_esm["default"])(dist.Typography)`
  line-height: 0;
`;
const Wysiwyg_Wysiwyg = ({
  hint,
  disabled,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  placeholder,
  value,
  required
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const textareaRef = (0,react.useRef)(null);
  const editorRef = (0,react.useRef)(null);
  const [isPreviewMode, setIsPreviewMode] = (0,react.useState)(false);
  const [mediaLibVisible, setMediaLibVisible] = (0,react.useState)(false);
  const [isExpandMode, setIsExpandMode] = (0,react.useState)(false);
  const { components } = (0,helper_plugin.useLibrary)();
  const MediaLibraryDialog = components["media-library"];
  const handleToggleMediaLib = () => setMediaLibVisible((prev) => !prev);
  const handleTogglePreviewMode = () => setIsPreviewMode((prev) => !prev);
  const handleToggleExpand = () => {
    setIsPreviewMode(false);
    setIsExpandMode((prev) => !prev);
  };
  const handleActionClick = (value2, currentEditorRef, togglePopover) => {
    switch (value2) {
      case "Link":
      case "Strikethrough": {
        markdownHandler(currentEditorRef, value2);
        togglePopover();
        break;
      }
      case "Code":
      case "Quote": {
        quoteAndCodeHandler(currentEditorRef, value2);
        togglePopover();
        break;
      }
      case "Bold":
      case "Italic":
      case "Underline": {
        markdownHandler(currentEditorRef, value2);
        break;
      }
      case "BulletList":
      case "NumberList": {
        listHandler(currentEditorRef, value2);
        togglePopover();
        break;
      }
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6": {
        titleHandler(currentEditorRef, value2);
        break;
      }
      default: {
      }
    }
  };
  const handleSelectAssets = (files) => {
    const formattedFiles = files.map((f) => ({
      alt: f.alternativeText || f.name,
      url: (0,helper_plugin.prefixFileUrlWithBackendUrl)(f.url),
      mime: f.mime
    }));
    insertFile(editorRef, formattedFiles);
    setMediaLibVisible(false);
  };
  const formattedPlaceholder = placeholder ? formatMessage(
    { id: placeholder.id, defaultMessage: placeholder.defaultMessage },
    { ...placeholder.values }
  ) : "";
  const label = intlLabel.id ? formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    { ...intlLabel.values }
  ) : name;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(dist.Flex, { gap: 1 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "pi", fontWeight: "bold", textColor: "neutral800" }, label, required && /* @__PURE__ */ react.createElement(TypographyAsterisk, { textColor: "danger600" }, "*")), labelAction && /* @__PURE__ */ react.createElement(Wysiwyg_LabelAction, { paddingLeft: 1 }, labelAction)), /* @__PURE__ */ react.createElement(
    EditorLayout,
    {
      isExpandMode,
      error,
      previewContent: value,
      onCollapse: handleToggleExpand
    },
    /* @__PURE__ */ react.createElement(
      Wysiwyg_WysiwygNav,
      {
        isExpandMode,
        editorRef,
        isPreviewMode,
        onActionClick: handleActionClick,
        onToggleMediaLib: handleToggleMediaLib,
        onTogglePreviewMode: isExpandMode ? void 0 : handleTogglePreviewMode,
        disabled
      }
    ),
    /* @__PURE__ */ react.createElement(
      Wysiwyg_Editor,
      {
        disabled,
        isExpandMode,
        editorRef,
        error,
        isPreviewMode,
        name,
        onChange,
        placeholder: formattedPlaceholder,
        textareaRef,
        value
      }
    ),
    !isExpandMode && /* @__PURE__ */ react.createElement(Wysiwyg_WysiwygFooter, { onToggleExpand: handleToggleExpand })
  ), /* @__PURE__ */ react.createElement(components_Hint, { hint, name, error })), error && /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 1 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "pi", textColor: "danger600", "data-strapi-field-error": true }, error)), mediaLibVisible && /* @__PURE__ */ react.createElement(MediaLibraryDialog, { onClose: handleToggleMediaLib, onSelectAssets: handleSelectAssets }));
};
Wysiwyg_Wysiwyg.defaultProps = {
  disabled: false,
  error: "",
  labelAction: void 0,
  placeholder: null,
  required: false,
  value: "",
  hint: ""
};
Wysiwyg_Wysiwyg.propTypes = {
  hint: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).array]),
  disabled: (prop_types_default()).bool,
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  labelAction: (prop_types_default()).element,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  placeholder: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  required: (prop_types_default()).bool,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_Wysiwyg = (Wysiwyg_Wysiwyg);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/InputUID/useDebounce.js

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = (0,react.useState)(value);
  (0,react.useEffect)(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
/* harmony default export */ const InputUID_useDebounce = (useDebounce);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/InputUID/regex.js
const UID_REGEX = /^[A-Za-z0-9-_.~]*$/;
/* harmony default export */ const regex = (UID_REGEX);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/InputUID/endActionStyle.js


const EndActionWrapper = (0,styled_components_browser_esm["default"])(dist.Box)`
  position: relative;
`;
const FieldActionWrapper = (0,styled_components_browser_esm["default"])(dist.FieldAction)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral400};
    }
  }

  svg:hover {
    path {
      fill: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const TextValidation = (0,styled_components_browser_esm["default"])(dist.Flex)`
  position: absolute;
  right: ${({ theme }) => theme.spaces[6]};
  width: 100px;
  pointer-events: none;

  svg {
    margin-right: ${({ theme }) => theme.spaces[1]};
    height: ${12 / 16}rem;
    width: ${12 / 16}rem;
    path {
      fill: ${({ theme, notAvailable }) => !notAvailable ? theme.colors.success600 : theme.colors.danger600};
    }
  }
`;
const rotation = styled_components_browser_esm.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
const LoadingWrapper = (0,styled_components_browser_esm["default"])(dist.Flex)`
  animation: ${rotation} 2s infinite linear;
`;

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/InputUID/index.js











const InputUID = ({
  attribute,
  contentTypeUID,
  hint,
  disabled,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  value,
  placeholder,
  required
}) => {
  const { modifiedData, initialData, layout } = (0,helper_plugin.useCMEditViewDataManager)();
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const [availability, setAvailability] = (0,react.useState)(null);
  const debouncedValue = InputUID_useDebounce(value, 300);
  const generateUid = (0,react.useRef)();
  const initialValue = initialData[name];
  const { formatMessage } = (0,react_intl.useIntl)();
  const createdAtName = get_default()(layout, ["options", "timestamps", 0]);
  const isCreation = !initialData[createdAtName];
  const debouncedTargetFieldValue = InputUID_useDebounce(modifiedData[attribute.targetField], 300);
  const [isCustomized, setIsCustomized] = (0,react.useState)(false);
  const [regenerateLabel, setRegenerateLabel] = (0,react.useState)(null);
  const { post } = (0,helper_plugin.useFetchClient)();
  const label = intlLabel.id ? formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    { ...intlLabel.values }
  ) : name;
  const formattedPlaceholder = placeholder ? formatMessage(
    { id: placeholder.id, defaultMessage: placeholder.defaultMessage },
    { ...placeholder.values }
  ) : "";
  generateUid.current = async (shouldSetInitialValue = false) => {
    setIsLoading(true);
    const requestURL = utils_getRequestUrl("uid/generate");
    try {
      const {
        data: { data }
      } = await post(requestURL, {
        contentTypeUID,
        field: name,
        data: modifiedData
      });
      onChange({ target: { name, value: data, type: "text" } }, shouldSetInitialValue);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };
  const checkAvailability = async () => {
    setIsLoading(true);
    const requestURL = utils_getRequestUrl("uid/check-availability");
    if (!value) {
      return;
    }
    try {
      const { data } = await post(requestURL, {
        contentTypeUID,
        field: name,
        value: value ? value.trim() : ""
      });
      setAvailability(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };
  (0,react.useEffect)(() => {
    if (!value && attribute.required) {
      generateUid.current(true);
    }
  }, []);
  (0,react.useEffect)(() => {
    if (debouncedValue && debouncedValue.trim().match(regex) && debouncedValue !== initialValue) {
      checkAvailability();
    }
    if (!debouncedValue) {
      setAvailability(null);
    }
  }, [debouncedValue, initialValue]);
  (0,react.useEffect)(() => {
    let timer;
    if (availability && availability.isAvailable) {
      timer = setTimeout(() => {
        setAvailability(null);
      }, 4e3);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [availability]);
  (0,react.useEffect)(() => {
    if (!isCustomized && isCreation && debouncedTargetFieldValue && modifiedData[attribute.targetField] && !value) {
      generateUid.current(true);
    }
  }, [debouncedTargetFieldValue, isCustomized, isCreation]);
  const handleGenerateMouseEnter = () => {
    setRegenerateLabel(
      formatMessage({
        id: "content-manager.components.uid.regenerate",
        defaultMessage: "Regenerate"
      })
    );
  };
  const handleGenerateMouseLeave = () => {
    setRegenerateLabel(null);
  };
  const handleChange = (e) => {
    if (e.target.value && isCreation) {
      setIsCustomized(true);
    }
    onChange(e);
  };
  return /* @__PURE__ */ react.createElement(
    dist.TextInput,
    {
      disabled,
      error,
      endAction: /* @__PURE__ */ react.createElement(EndActionWrapper, null, availability && availability.isAvailable && !regenerateLabel && /* @__PURE__ */ react.createElement(TextValidation, { alignItems: "center", justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(icons_dist.CheckCircle, null), /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "success600", variant: "pi" }, formatMessage({
        id: "content-manager.components.uid.available",
        defaultMessage: "Available"
      }))), availability && !availability.isAvailable && !regenerateLabel && /* @__PURE__ */ react.createElement(TextValidation, { notAvailable: true, alignItems: "center", justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(icons_dist.ExclamationMarkCircle, null), /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "danger600", variant: "pi" }, formatMessage({
        id: "content-manager.components.uid.unavailable",
        defaultMessage: "Unavailable"
      }))), regenerateLabel && /* @__PURE__ */ react.createElement(TextValidation, { alignItems: "center", justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "primary600", variant: "pi" }, regenerateLabel)), /* @__PURE__ */ react.createElement(
        FieldActionWrapper,
        {
          onClick: () => generateUid.current(),
          label: "regenerate",
          onMouseEnter: handleGenerateMouseEnter,
          onMouseLeave: handleGenerateMouseLeave
        },
        isLoading ? /* @__PURE__ */ react.createElement(LoadingWrapper, null, /* @__PURE__ */ react.createElement(icons_dist.Loader, null)) : /* @__PURE__ */ react.createElement(icons_dist.Refresh, null)
      )),
      hint,
      label,
      labelAction,
      name,
      onChange: handleChange,
      placeholder: formattedPlaceholder,
      value: value || "",
      required
    }
  );
};
InputUID.propTypes = {
  attribute: prop_types_default().shape({
    targetField: (prop_types_default()).string,
    required: (prop_types_default()).bool
  }).isRequired,
  contentTypeUID: (prop_types_default()).string.isRequired,
  disabled: (prop_types_default()).bool,
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  labelAction: (prop_types_default()).element,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string,
  placeholder: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  required: (prop_types_default()).bool,
  hint: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).array])
};
InputUID.defaultProps = {
  disabled: false,
  error: void 0,
  labelAction: void 0,
  placeholder: void 0,
  value: "",
  required: false,
  hint: ""
};
/* harmony default export */ const components_InputUID = (InputUID);

// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(78718);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var react_query_lib = __webpack_require__(23724);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/utils/connect.js

function utils_connect_connect(WrappedComponent, select) {
  return (props) => {
    const selectors = select(props);
    return /* @__PURE__ */ react.createElement(WrappedComponent, { ...props, ...selectors });
  };
}
/* harmony default export */ const RelationInputDataManager_utils_connect = (utils_connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/utils/select.js




function utils_select_useSelect({
  componentUid,
  isUserAllowedToEditField,
  isUserAllowedToReadField,
  name,
  queryInfos
}) {
  const {
    isCreatingEntry,
    createActionAllowedFields,
    readActionAllowedFields,
    updateActionAllowedFields,
    slug,
    modifiedData
  } = (0,helper_plugin.useCMEditViewDataManager)();
  const isFieldAllowed = (0,react.useMemo)(() => {
    if (isUserAllowedToEditField === true) {
      return true;
    }
    const allowedFields = isCreatingEntry ? createActionAllowedFields : updateActionAllowedFields;
    return allowedFields.includes(name);
  }, [
    isCreatingEntry,
    createActionAllowedFields,
    name,
    isUserAllowedToEditField,
    updateActionAllowedFields
  ]);
  const isFieldReadable = (0,react.useMemo)(() => {
    if (isUserAllowedToReadField) {
      return true;
    }
    const allowedFields = isCreatingEntry ? [] : readActionAllowedFields;
    return allowedFields.includes(name);
  }, [isCreatingEntry, isUserAllowedToReadField, name, readActionAllowedFields]);
  const fieldNameKeys = name.split(".");
  let componentId;
  if (componentUid) {
    componentId = get_default()(modifiedData, fieldNameKeys.slice(0, -1))?.id;
  }
  const relationFetchEndpoint = (0,react.useMemo)(() => {
    if (isCreatingEntry) {
      return null;
    }
    if (componentUid) {
      return componentId ? utils_getRequestUrl(`relations/${componentUid}/${componentId}/${fieldNameKeys.at(-1)}`) : null;
    }
    return utils_getRequestUrl(`relations/${slug}/${modifiedData.id}/${name.split(".").at(-1)}`);
  }, [isCreatingEntry, componentUid, slug, modifiedData.id, name, componentId, fieldNameKeys]);
  const relationSearchEndpoint = (0,react.useMemo)(() => {
    if (componentUid) {
      return utils_getRequestUrl(`relations/${componentUid}/${name.split(".").at(-1)}`);
    }
    return utils_getRequestUrl(`relations/${slug}/${name.split(".").at(-1)}`);
  }, [componentUid, slug, name]);
  return {
    componentId,
    isComponentRelation: Boolean(componentUid),
    queryInfos: {
      ...queryInfos,
      endpoints: {
        search: relationSearchEndpoint,
        relation: relationFetchEndpoint
      }
    },
    isCreatingEntry,
    isFieldAllowed,
    isFieldReadable
  };
}
/* harmony default export */ const RelationInputDataManager_utils_select = (utils_select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/utils/getRelationLink.js

function getRelationLink(targetModel, id) {
  return `${utils_getRequestUrl(`collectionType/${targetModel}/${id ?? ""}`)}`;
}

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/utils/normalizeRelations.js


const normalizeRelation = (relation, { shouldAddLink, mainFieldName, targetModel }) => {
  const nextRelation = { ...relation };
  if (shouldAddLink) {
    nextRelation.href = getRelationLink(targetModel, nextRelation.id);
  }
  nextRelation.publicationState = false;
  if (nextRelation?.publishedAt !== void 0) {
    nextRelation.publicationState = nextRelation.publishedAt ? PUBLICATION_STATES.PUBLISHED : PUBLICATION_STATES.DRAFT;
  }
  nextRelation.mainField = nextRelation[mainFieldName];
  return nextRelation;
};
const normalizeRelations = (relations, { shouldAddLink = false, mainFieldName, targetModel } = {}) => {
  return [...relations].map(
    (relation) => normalizeRelation(relation, {
      shouldAddLink,
      mainFieldName,
      targetModel
    })
  );
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/utils/normalizeSearchResults.js

const normalizeSearchResults = (relations, { mainFieldName }) => {
  const { data } = relations;
  const { pages = [] } = data ?? {};
  return {
    ...relations,
    data: pages.map(
      (page) => page?.results.map((relation) => normalizeRelation(relation, { mainFieldName }))
    ).filter(Boolean).flat()
  };
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/utils/diffRelations.js
const diffRelations = (browserStateRelations = [], serverStateRelations = []) => {
  const connected = browserStateRelations.reduce((acc, relation) => {
    if (!serverStateRelations.find((oldRelation) => oldRelation.id === relation.id)) {
      return [...acc, relation.id];
    }
    return acc;
  }, []);
  const disconnected = serverStateRelations.reduce((acc, relation) => {
    if (!browserStateRelations.find((oldRelation) => oldRelation.id === relation.id)) {
      return [...acc, relation.id];
    }
    return acc;
  }, []);
  return [connected, disconnected];
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/utils/index.js






;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useCallbackRef.js

const useCallbackRef = (callback) => {
  const callbackRef = react.useRef(callback);
  react.useEffect(() => {
    callbackRef.current = callback;
  });
  return react.useMemo(
    () => (...args) => callbackRef.current?.(...args),
    []
  );
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useRelation/useRelation.js





const useRelation = (cacheKey, { relation, search }) => {
  const [searchParams, setSearchParams] = (0,react.useState)({});
  const [currentPage, setCurrentPage] = (0,react.useState)(0);
  const { get } = (0,helper_plugin.useFetchClient)();
  const fetchRelations = async ({ pageParam = 1 }) => {
    try {
      const { data: data2 } = await get(relation?.endpoint, {
        params: {
          ...relation.pageParams ?? {},
          page: pageParam
        }
      });
      setCurrentPage(pageParam);
      return data2;
    } catch (err) {
      return null;
    }
  };
  const fetchSearch = async ({ pageParam = 1 }) => {
    try {
      const { data: data2 } = await get(search.endpoint, {
        params: {
          ...search.pageParams ?? {},
          ...searchParams,
          page: pageParam
        }
      });
      return data2;
    } catch (err) {
      return null;
    }
  };
  const { onLoad: onLoadRelations, normalizeArguments = {} } = relation;
  const relationsRes = (0,react_query_lib.useInfiniteQuery)(["relation", ...cacheKey], fetchRelations, {
    cacheTime: 0,
    enabled: relation.enabled,
    /**
     * @type {(lastPage:
     * | { data: null }
     * | { results: any[],
     *     pagination: {
     *      page: number,
     *      pageCount: number,
     *      pageSize: number,
     *      total: number
     *     }
     *   }
     * ) => number}
     */
    getNextPageParam(lastPage) {
      const isXToOneRelation = !lastPage?.pagination;
      if (!lastPage || // the API may send an empty 204 response
      isXToOneRelation || // xToOne relations do not have a pagination
      lastPage?.pagination.page >= lastPage?.pagination.pageCount) {
        return void 0;
      }
      return lastPage.pagination.page + 1;
    },
    select: (data2) => ({
      ...data2,
      pages: data2.pages.map((page) => {
        if (!page) {
          return page;
        }
        const { data: data3, results, pagination } = page;
        const isXToOneRelation = !!data3;
        let normalizedResults = [];
        if (isXToOneRelation) {
          normalizedResults = [data3];
        } else if (results) {
          normalizedResults = [...results].reverse();
        }
        return {
          pagination,
          results: normalizedResults
        };
      })
    })
  });
  const { pageGoal } = relation;
  const { status, data, fetchNextPage, hasNextPage } = relationsRes;
  (0,react.useEffect)(() => {
    if (pageGoal > currentPage && hasNextPage && status === "success") {
      fetchNextPage({
        pageParam: currentPage + 1
      });
    }
  }, [pageGoal, currentPage, fetchNextPage, hasNextPage, status]);
  const onLoadRelationsCallback = useCallbackRef(onLoadRelations);
  (0,react.useEffect)(() => {
    if (status === "success" && data && data.pages?.at(-1)?.results && onLoadRelationsCallback) {
      const normalizedResults = normalizeRelations(data.pages.at(-1).results, normalizeArguments);
      onLoadRelationsCallback(normalizedResults);
    }
  }, [status, onLoadRelationsCallback, data]);
  const searchRes = (0,react_query_lib.useInfiniteQuery)(
    ["relation", ...cacheKey, "search", JSON.stringify(searchParams)],
    fetchSearch,
    {
      enabled: Object.keys(searchParams).length > 0,
      /**
       * @type {(lastPage:
       * | { data: null }
       * | { results: any[],
       *     pagination: {
       *      page: number,
       *      pageCount: number,
       *      pageSize: number,
       *      total: number
       *     }
       *   }
       * ) => number}
       */
      getNextPageParam(lastPage) {
        if (!lastPage?.pagination || lastPage.pagination.page >= lastPage.pagination.pageCount) {
          return void 0;
        }
        return lastPage.pagination.page + 1;
      }
    }
  );
  const searchFor = (term, options = {}) => {
    setSearchParams({
      ...options,
      _q: term
    });
  };
  return { relations: relationsRes, search: searchRes, searchFor };
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useRelation/index.js


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/paths.js

const getInitialDataPathUsingTempKeys = (initialData, modifiedData) => (currentPath) => {
  const splitPath = currentPath.split(".");
  return splitPath.reduce((acc, currentValue, index) => {
    const initialDataParent = (0,lodash.get)(initialData, acc);
    const modifiedDataTempKey = (0,lodash.get)(modifiedData, [
      ...splitPath.slice(0, index),
      currentValue,
      "__temp_key__"
    ]);
    if (Array.isArray(initialDataParent) && typeof modifiedDataTempKey === "number") {
      const initialDataIndex = initialDataParent.findIndex(
        (entry) => entry.__temp_key__ === modifiedDataTempKey
      );
      acc.push(initialDataIndex.toString());
      return acc;
    }
    acc.push(currentValue);
    return acc;
  }, []);
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/RelationInputDataManager.js












const RelationInputDataManager = ({
  error,
  componentId,
  isComponentRelation,
  editable,
  description,
  intlLabel,
  isCreatingEntry,
  isFieldAllowed,
  isFieldReadable,
  labelAction,
  mainField,
  name,
  queryInfos: { endpoints, defaultParams, shouldDisplayRelationLink },
  placeholder,
  required,
  relationType,
  size,
  targetModel
}) => {
  const [liveText, setLiveText] = (0,react.useState)("");
  const { formatMessage } = (0,react_intl.useIntl)();
  const {
    slug,
    initialData,
    modifiedData,
    relationConnect,
    relationDisconnect,
    relationLoad,
    relationReorder
  } = (0,helper_plugin.useCMEditViewDataManager)();
  const nameSplit = name.split(".");
  const initialDataPath = getInitialDataPathUsingTempKeys(initialData, modifiedData)(name);
  const relationsFromModifiedData = get_default()(modifiedData, name, []);
  const currentLastPage = Math.ceil(get_default()(initialData, name, []).length / RELATIONS_TO_DISPLAY);
  const { relations, search, searchFor } = useRelation(
    [slug, initialDataPath.join("."), modifiedData.id, defaultParams],
    {
      relation: {
        enabled: !!endpoints.relation,
        endpoint: endpoints.relation,
        pageGoal: currentLastPage,
        pageParams: {
          ...defaultParams,
          pageSize: RELATIONS_TO_DISPLAY
        },
        onLoad(value) {
          relationLoad({
            target: {
              initialDataPath: ["initialData", ...initialDataPath],
              modifiedDataPath: ["modifiedData", ...nameSplit],
              value
            }
          });
        },
        normalizeArguments: {
          mainFieldName: mainField.name,
          shouldAddLink: shouldDisplayRelationLink,
          targetModel
        }
      },
      search: {
        endpoint: endpoints.search,
        pageParams: {
          ...defaultParams,
          // eslint-disable-next-line no-nested-ternary
          entityId: isCreatingEntry ? void 0 : isComponentRelation ? componentId : initialData.id,
          pageSize: SEARCH_RESULTS_TO_DISPLAY
        }
      }
    }
  );
  const isMorph = (0,react.useMemo)(() => relationType.toLowerCase().includes("morph"), [relationType]);
  const toOneRelation = [
    "oneWay",
    "oneToOne",
    "manyToOne",
    "oneToManyMorph",
    "oneToOneMorph"
  ].includes(relationType);
  const isDisabled = (0,react.useMemo)(() => {
    if (isMorph) {
      return true;
    }
    if (!isCreatingEntry) {
      return !isFieldAllowed && isFieldReadable || !editable;
    }
    return !editable;
  }, [isMorph, isCreatingEntry, editable, isFieldAllowed, isFieldReadable]);
  const handleRelationConnect = (relation) => {
    const normalizedRelation = normalizeRelation(relation, {
      mainFieldName: mainField.name,
      shouldAddLink: shouldDisplayRelationLink,
      targetModel
    });
    relationConnect({ name, value: normalizedRelation, toOneRelation });
  };
  const handleRelationDisconnect = (relation) => {
    relationDisconnect({ name, id: relation.id });
  };
  const handleRelationLoadMore = () => {
    relations.fetchNextPage();
  };
  const handleSearch = (term = "") => {
    const [connected, disconnected] = diffRelations(
      relationsFromModifiedData,
      get_default()(initialData, name)
    );
    searchFor(term, {
      idsToInclude: disconnected,
      idsToOmit: connected
    });
  };
  const handleSearchMore = () => {
    search.fetchNextPage();
  };
  const getItemPos = (index) => `${index + 1} of ${relationsFromModifiedData.length}`;
  const handleRelationReorder = (oldIndex, newIndex) => {
    const item = relationsFromModifiedData[oldIndex];
    setLiveText(
      formatMessage(
        {
          id: utils_getTrad("dnd.reorder"),
          defaultMessage: "{item}, moved. New position in list: {position}."
        },
        {
          item: item.mainField ?? item.id,
          position: getItemPos(newIndex)
        }
      )
    );
    relationReorder({
      name,
      newIndex,
      oldIndex
    });
  };
  const handleGrabItem = (index) => {
    const item = relationsFromModifiedData[index];
    setLiveText(
      formatMessage(
        {
          id: utils_getTrad("dnd.grab-item"),
          defaultMessage: `{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel.`
        },
        {
          item: item.mainField ?? item.id,
          position: getItemPos(index)
        }
      )
    );
  };
  const handleDropItem = (index) => {
    const item = relationsFromModifiedData[index];
    setLiveText(
      formatMessage(
        {
          id: utils_getTrad("dnd.drop-item"),
          defaultMessage: `{item}, dropped. Final position in list: {position}.`
        },
        {
          item: item.mainField ?? item.id,
          position: getItemPos(index)
        }
      )
    );
  };
  const handleCancel = (index) => {
    const item = relationsFromModifiedData[index];
    setLiveText(
      formatMessage(
        {
          id: utils_getTrad("dnd.cancel-item"),
          defaultMessage: "{item}, dropped. Re-order cancelled."
        },
        {
          item: item.mainField ?? item.id
        }
      )
    );
  };
  if (!isFieldAllowed && isCreatingEntry || !isCreatingEntry && !isFieldAllowed && !isFieldReadable) {
    return /* @__PURE__ */ react.createElement(helper_plugin.NotAllowedInput, { name, intlLabel, labelAction });
  }
  const browserRelationsCount = relationsFromModifiedData.length;
  const serverRelationsCount = (get_default()(initialData, initialDataPath) ?? []).length;
  const realServerRelationsCount = relations.data?.pages[0]?.pagination?.total ?? 0;
  const totalRelations = !relations.data && browserRelationsCount === serverRelationsCount ? browserRelationsCount : browserRelationsCount - serverRelationsCount + realServerRelationsCount;
  return /* @__PURE__ */ react.createElement(
    RelationInput_RelationInput,
    {
      error,
      canReorder: !toOneRelation,
      description,
      disabled: isDisabled,
      iconButtonAriaLabel: formatMessage({
        id: utils_getTrad("components.RelationInput.icon-button-aria-label"),
        defaultMessage: "Drag"
      }),
      id: name,
      label: `${formatMessage({
        id: intlLabel.id,
        defaultMessage: intlLabel.defaultMessage
      })} ${totalRelations > 0 ? `(${totalRelations})` : ""}`,
      labelAction,
      labelLoadMore: !isCreatingEntry ? formatMessage({
        id: utils_getTrad("relation.loadMore"),
        defaultMessage: "Load More"
      }) : null,
      labelDisconnectRelation: formatMessage({
        id: utils_getTrad("relation.disconnect"),
        defaultMessage: "Remove"
      }),
      listAriaDescription: formatMessage({
        id: utils_getTrad("dnd.instructions"),
        defaultMessage: `Press spacebar to grab and re-order`
      }),
      listHeight: 320,
      liveText,
      loadingMessage: formatMessage({
        id: utils_getTrad("relation.isLoading"),
        defaultMessage: "Relations are loading"
      }),
      name,
      noRelationsMessage: formatMessage({
        id: utils_getTrad("relation.notAvailable"),
        defaultMessage: "No relations available"
      }),
      numberOfRelationsToDisplay: RELATIONS_TO_DISPLAY,
      onDropItem: handleDropItem,
      onGrabItem: handleGrabItem,
      onCancel: handleCancel,
      onRelationConnect: handleRelationConnect,
      onRelationDisconnect: handleRelationDisconnect,
      onRelationLoadMore: handleRelationLoadMore,
      onRelationReorder: handleRelationReorder,
      onSearch: (term) => handleSearch(term),
      onSearchNextPage: () => handleSearchMore(),
      placeholder: formatMessage(
        placeholder || {
          id: utils_getTrad("relation.add"),
          defaultMessage: "Add relation"
        }
      ),
      publicationStateTranslations: {
        [PUBLICATION_STATES.DRAFT]: formatMessage({
          id: utils_getTrad("relation.publicationState.draft"),
          defaultMessage: "Draft"
        }),
        [PUBLICATION_STATES.PUBLISHED]: formatMessage({
          id: utils_getTrad("relation.publicationState.published"),
          defaultMessage: "Published"
        })
      },
      relations: pick_default()(
        { ...relations, data: relationsFromModifiedData },
        "data",
        "hasNextPage",
        "isFetchingNextPage",
        "isLoading",
        "isSuccess"
      ),
      required,
      searchResults: normalizeSearchResults(search, {
        mainFieldName: mainField.name
      }),
      size
    }
  );
};
RelationInputDataManager.defaultProps = {
  componentId: void 0,
  editable: true,
  error: void 0,
  description: "",
  labelAction: null,
  isComponentRelation: false,
  isFieldAllowed: true,
  placeholder: null,
  required: false
};
RelationInputDataManager.propTypes = {
  componentId: (prop_types_default()).number,
  editable: (prop_types_default()).bool,
  error: (prop_types_default()).string,
  description: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  labelAction: (prop_types_default()).element,
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  isComponentRelation: (prop_types_default()).bool,
  isFieldAllowed: (prop_types_default()).bool,
  isFieldReadable: (prop_types_default()).bool.isRequired,
  mainField: prop_types_default().shape({
    name: (prop_types_default()).string.isRequired,
    schema: prop_types_default().shape({
      type: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  placeholder: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  required: (prop_types_default()).bool,
  relationType: (prop_types_default()).string.isRequired,
  size: (prop_types_default()).number.isRequired,
  targetModel: (prop_types_default()).string.isRequired,
  queryInfos: prop_types_default().shape({
    defaultParams: prop_types_default().shape({
      locale: (prop_types_default()).string
    }),
    endpoints: prop_types_default().shape({
      relation: (prop_types_default()).string,
      search: (prop_types_default()).string.isRequired
    }).isRequired,
    shouldDisplayRelationLink: (prop_types_default()).bool.isRequired
  }).isRequired
};
const Memoized = (0,react.memo)(RelationInputDataManager);
/* harmony default export */ const RelationInputDataManager_RelationInputDataManager = (RelationInputDataManager_utils_connect(Memoized, RelationInputDataManager_utils_select));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RelationInputDataManager/index.js


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/connect.js

function Inputs_utils_connect_connect(WrappedComponent, select) {
  return (props) => {
    const selectors = select(props.keys);
    return /* @__PURE__ */ react.createElement(WrappedComponent, { ...props, ...selectors });
  };
}
/* harmony default export */ const Inputs_utils_connect = (Inputs_utils_connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/generateOptions.js
const generateOptions = (options, isRequired = false) => {
  return [
    {
      metadatas: {
        intlLabel: {
          id: "components.InputSelect.option.placeholder",
          defaultMessage: "Choose here"
        },
        disabled: isRequired,
        hidden: isRequired
      },
      key: "__enum_option_null",
      value: ""
    },
    ...options.map((option) => {
      return {
        metadatas: {
          intlLabel: {
            id: option,
            defaultMessage: option
          },
          hidden: false,
          disabled: false
        },
        key: option,
        value: option
      };
    })
  ];
};
/* harmony default export */ const utils_generateOptions = (generateOptions);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/getInputType.js

const getInputType = (type = "") => {
  switch ((0,lodash.toLower)(type)) {
    case "boolean":
      return "bool";
    case "biginteger":
      return "text";
    case "decimal":
    case "float":
    case "integer":
      return "number";
    case "date":
    case "datetime":
    case "time":
      return type;
    case "email":
      return "email";
    case "enumeration":
      return "select";
    case "password":
      return "password";
    case "string":
      return "text";
    case "text":
      return "textarea";
    case "media":
    case "file":
    case "files":
      return "media";
    case "json":
      return "json";
    case "wysiwyg":
    case "WYSIWYG":
    case "richtext":
      return "wysiwyg";
    case "uid":
      return "uid";
    default:
      return type || "text";
  }
};
/* harmony default export */ const utils_getInputType = (getInputType);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/getStep.js
const getStep = (type) => {
  let step;
  if (type === "float" || type === "decimal") {
    step = 0.01;
  } else {
    step = 1;
  }
  return step;
};
/* harmony default export */ const utils_getStep = (getStep);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/select.js



function Inputs_utils_select_useSelect(keys) {
  const {
    createActionAllowedFields,
    formErrors,
    isCreatingEntry,
    modifiedData,
    onChange,
    readActionAllowedFields,
    shouldNotRunValidations,
    updateActionAllowedFields
  } = (0,helper_plugin.useCMEditViewDataManager)();
  const allowedFields = (0,react.useMemo)(() => {
    return isCreatingEntry ? createActionAllowedFields : updateActionAllowedFields;
  }, [isCreatingEntry, createActionAllowedFields, updateActionAllowedFields]);
  const readableFields = (0,react.useMemo)(() => {
    return isCreatingEntry ? [] : readActionAllowedFields;
  }, [isCreatingEntry, readActionAllowedFields]);
  const value = (0,lodash.get)(modifiedData, keys, null);
  return {
    allowedFields,
    formErrors,
    isCreatingEntry,
    onChange,
    readableFields,
    shouldNotRunValidations,
    value
  };
}
/* harmony default export */ const Inputs_utils_select = (Inputs_utils_select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/VALIDATIONS_TO_OMIT.js
const validationsToOmit = [
  "type",
  "model",
  "via",
  "collection",
  "default",
  "plugin",
  "enum",
  "regex",
  "pluginOptions"
];
/* harmony default export */ const VALIDATIONS_TO_OMIT = (validationsToOmit);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/utils/index.js







;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/Inputs/index.js














function Inputs({
  allowedFields,
  componentUid,
  fieldSchema,
  formErrors,
  isCreatingEntry,
  keys,
  labelAction,
  metadatas,
  onChange,
  readableFields,
  shouldNotRunValidations,
  queryInfos,
  value,
  size,
  customFieldInputs
}) {
  const { fields } = (0,helper_plugin.useLibrary)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { contentType: currentContentTypeLayout } = hooks_useContentTypeLayout();
  const disabled = (0,react.useMemo)(() => !get_default()(metadatas, "editable", true), [metadatas]);
  const { type, customField: customFieldUid } = fieldSchema;
  const error = get_default()(formErrors, [keys], null);
  const fieldName = (0,react.useMemo)(() => {
    return utils_getFieldName(keys);
  }, [keys]);
  const validations = (0,react.useMemo)(() => {
    const inputValidations = omit_default()(
      fieldSchema,
      shouldNotRunValidations ? [...VALIDATIONS_TO_OMIT, "required", "minLength"] : VALIDATIONS_TO_OMIT
    );
    const regexpString = fieldSchema.regex || null;
    if (regexpString) {
      const regexp = new RegExp(regexpString);
      if (regexp) {
        inputValidations.regex = regexp;
      }
    }
    return inputValidations;
  }, [fieldSchema, shouldNotRunValidations]);
  const isRequired = (0,react.useMemo)(() => get_default()(validations, ["required"], false), [validations]);
  const isChildOfDynamicZone = (0,react.useMemo)(() => {
    const attributes = get_default()(currentContentTypeLayout, ["attributes"], {});
    const foundAttributeType = get_default()(attributes, [fieldName[0], "type"], null);
    return foundAttributeType === "dynamiczone";
  }, [currentContentTypeLayout, fieldName]);
  const inputType = (0,react.useMemo)(() => {
    return utils_getInputType(type);
  }, [type]);
  const inputValue = (0,react.useMemo)(() => {
    if (type === "media" && !value) {
      return [];
    }
    return value;
  }, [type, value]);
  const step = (0,react.useMemo)(() => {
    return utils_getStep(type);
  }, [type]);
  const isUserAllowedToEditField = (0,react.useMemo)(() => {
    const joinedName = fieldName.join(".");
    if (allowedFields.includes(joinedName)) {
      return true;
    }
    if (isChildOfDynamicZone) {
      return allowedFields.includes(fieldName[0]);
    }
    const isChildOfComponent = fieldName.length > 1;
    if (isChildOfComponent) {
      const parentFieldName = take_default()(fieldName, fieldName.length - 1).join(".");
      return allowedFields.includes(parentFieldName);
    }
    return false;
  }, [allowedFields, fieldName, isChildOfDynamicZone]);
  const isUserAllowedToReadField = (0,react.useMemo)(() => {
    const joinedName = fieldName.join(".");
    if (readableFields.includes(joinedName)) {
      return true;
    }
    if (isChildOfDynamicZone) {
      return readableFields.includes(fieldName[0]);
    }
    const isChildOfComponent = fieldName.length > 1;
    if (isChildOfComponent) {
      const parentFieldName = take_default()(fieldName, fieldName.length - 1).join(".");
      return readableFields.includes(parentFieldName);
    }
    return false;
  }, [readableFields, fieldName, isChildOfDynamicZone]);
  const shouldDisplayNotAllowedInput = (0,react.useMemo)(() => {
    return isUserAllowedToReadField || isUserAllowedToEditField;
  }, [isUserAllowedToEditField, isUserAllowedToReadField]);
  const shouldDisableField = (0,react.useMemo)(() => {
    if (!isCreatingEntry) {
      const doesNotHaveRight = isUserAllowedToReadField && !isUserAllowedToEditField;
      if (doesNotHaveRight) {
        return true;
      }
      return disabled;
    }
    return disabled;
  }, [disabled, isCreatingEntry, isUserAllowedToEditField, isUserAllowedToReadField]);
  const options = (0,react.useMemo)(
    () => utils_generateOptions(fieldSchema.enum || [], isRequired),
    [fieldSchema, isRequired]
  );
  const { label, description, placeholder, visible } = metadatas;
  const inputStep = (0,react.useMemo)(() => {
    if (!metadatas.step || inputType !== "datetime" && inputType !== "time") {
      return step;
    }
    if (!inputValue) {
      return metadatas.step;
    }
    let minutes;
    if (inputType === "datetime") {
      minutes = parseInt(inputValue.substr(14, 2), 10);
    } else if (inputType === "time") {
      minutes = parseInt(inputValue.slice(-2), 10);
    }
    return minutes % metadatas.step === 0 ? metadatas.step : step;
  }, [inputType, inputValue, metadatas.step, step]);
  if (visible === false) {
    return null;
  }
  if (!shouldDisplayNotAllowedInput) {
    return /* @__PURE__ */ react.createElement(
      helper_plugin.NotAllowedInput,
      {
        description: description ? { id: description, defaultMessage: description } : null,
        intlLabel: { id: label, defaultMessage: label },
        labelAction,
        error: error && formatMessage(error),
        name: keys,
        required: isRequired
      }
    );
  }
  if (type === "relation") {
    return /* @__PURE__ */ react.createElement(
      RelationInputDataManager_RelationInputDataManager,
      {
        ...metadatas,
        ...fieldSchema,
        componentUid,
        description: metadatas.description ? formatMessage({
          id: metadatas.description,
          defaultMessage: metadatas.description
        }) : void 0,
        intlLabel: {
          id: metadatas.label,
          defaultMessage: metadatas.label
        },
        labelAction,
        isUserAllowedToEditField,
        isUserAllowedToReadField,
        name: keys,
        placeholder: metadatas.placeholder ? {
          id: metadatas.placeholder,
          defaultMessage: metadatas.placeholder
        } : null,
        queryInfos,
        size,
        value,
        error: error && formatMessage(error)
      }
    );
  }
  const customInputs = {
    uid: components_InputUID,
    media: fields.media,
    wysiwyg: components_Wysiwyg,
    ...fields,
    ...customFieldInputs
  };
  return /* @__PURE__ */ react.createElement(
    helper_plugin.GenericInput,
    {
      attribute: fieldSchema,
      autoComplete: "new-password",
      intlLabel: { id: label, defaultMessage: label },
      isNullable: inputType === "bool" && [null, void 0].includes(fieldSchema.default),
      description: description ? { id: description, defaultMessage: description } : null,
      disabled: shouldDisableField,
      error,
      labelAction,
      contentTypeUID: currentContentTypeLayout.uid,
      customInputs,
      multiple: fieldSchema.multiple || false,
      name: keys,
      onChange,
      options,
      placeholder: placeholder ? { id: placeholder, defaultMessage: placeholder } : null,
      required: fieldSchema.required || false,
      step: inputStep,
      type: customFieldUid || inputType,
      value: inputValue,
      withDefaultValue: false
    }
  );
}
Inputs.defaultProps = {
  componentUid: void 0,
  formErrors: {},
  labelAction: void 0,
  size: void 0,
  value: null,
  queryInfos: {},
  customFieldInputs: {}
};
Inputs.propTypes = {
  allowedFields: (prop_types_default()).array.isRequired,
  componentUid: (prop_types_default()).string,
  fieldSchema: (prop_types_default()).object.isRequired,
  formErrors: (prop_types_default()).object,
  keys: (prop_types_default()).string.isRequired,
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  labelAction: (prop_types_default()).element,
  metadatas: (prop_types_default()).object.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  readableFields: (prop_types_default()).array.isRequired,
  size: (prop_types_default()).number,
  shouldNotRunValidations: (prop_types_default()).bool.isRequired,
  value: (prop_types_default()).any,
  queryInfos: prop_types_default().shape({
    containsKey: (prop_types_default()).string,
    defaultParams: (prop_types_default()).object,
    endPoint: (prop_types_default()).string
  }),
  customFieldInputs: (prop_types_default()).object
};
const Inputs_Memoized = (0,react.memo)(Inputs, (react_fast_compare_default()));
/* harmony default export */ const components_Inputs = (Inputs_utils_connect(Inputs_Memoized, Inputs_utils_select));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/hooks/useLazyComponents/index.js


const componentStore = /* @__PURE__ */ new Map();
const useLazyComponents = (componentUids = []) => {
  const [lazyComponentStore, setLazyComponentStore] = (0,react.useState)(Object.fromEntries(componentStore));
  const newUids = componentUids.filter((uid) => !componentStore.get(uid));
  const [loading, setLoading] = (0,react.useState)(() => !!newUids.length);
  const customFieldsRegistry = (0,helper_plugin.useCustomFields)();
  (0,react.useEffect)(() => {
    const setStore = (store) => {
      setLazyComponentStore(store);
      setLoading(false);
    };
    const lazyLoadComponents = async (uids, components) => {
      const modules = await Promise.all(components);
      uids.forEach((uid, index) => {
        componentStore.set(uid, modules[index].default);
      });
      setStore(Object.fromEntries(componentStore));
    };
    if (newUids.length > 0) {
      setLoading(true);
      const componentPromises = newUids.map((uid) => {
        const customField = customFieldsRegistry.get(uid);
        return customField.components.Input();
      });
      if (componentPromises.length > 0) {
        lazyLoadComponents(newUids, componentPromises);
      }
    }
  }, [newUids, customFieldsRegistry]);
  const cleanup = (0,react.useCallback)(() => {
    componentStore.clear();
    setLazyComponentStore({});
  }, []);
  return { isLazyLoading: loading, lazyComponentStore, cleanup };
};
/* harmony default export */ const hooks_useLazyComponents = (useLazyComponents);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/NonRepeatableComponent/index.js







const NonRepeatableComponent = ({ componentUid, isFromDynamicZone, isNested, name }) => {
  const { getComponentLayout } = hooks_useContentTypeLayout();
  const componentLayoutData = (0,react.useMemo)(
    () => getComponentLayout(componentUid),
    [componentUid, getComponentLayout]
  );
  const fields = componentLayoutData.layouts.edit;
  const { lazyComponentStore } = hooks_useLazyComponents();
  return /* @__PURE__ */ react.createElement(
    dist.Box,
    {
      background: isFromDynamicZone ? "" : "neutral100",
      paddingLeft: 6,
      paddingRight: 6,
      paddingTop: 6,
      paddingBottom: 6,
      hasRadius: isNested,
      borderColor: isNested ? "neutral200" : ""
    },
    /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 6 }, fields.map((fieldRow, key) => {
      return /* @__PURE__ */ react.createElement(dist.Grid, { gap: 4, key }, fieldRow.map(({ name: fieldName, size, metadatas, fieldSchema, queryInfos }) => {
        const isComponent = fieldSchema.type === "component";
        const keys = `${name}.${fieldName}`;
        if (isComponent) {
          const compoUid = fieldSchema.component;
          return /* @__PURE__ */ react.createElement(dist.GridItem, { col: size, s: 12, xs: 12, key: fieldName }, /* @__PURE__ */ react.createElement(
            components_FieldComponent,
            {
              componentUid: compoUid,
              intlLabel: {
                id: metadatas.label,
                defaultMessage: metadatas.label
              },
              isNested: true,
              isRepeatable: fieldSchema.repeatable,
              max: fieldSchema.max,
              min: fieldSchema.min,
              name: keys,
              required: fieldSchema.required || false
            }
          ));
        }
        return /* @__PURE__ */ react.createElement(dist.GridItem, { col: size, key: fieldName, s: 12, xs: 12 }, /* @__PURE__ */ react.createElement(
          components_Inputs,
          {
            componentUid,
            keys,
            fieldSchema,
            metadatas,
            queryInfos,
            size,
            customFieldInputs: lazyComponentStore
          }
        ));
      }));
    }))
  );
};
NonRepeatableComponent.defaultProps = {
  isFromDynamicZone: false,
  isNested: false
};
NonRepeatableComponent.propTypes = {
  componentUid: (prop_types_default()).string.isRequired,
  isFromDynamicZone: (prop_types_default()).bool,
  isNested: (prop_types_default()).bool,
  name: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_NonRepeatableComponent = (NonRepeatableComponent);

// EXTERNAL MODULE: ./node_modules/lodash/toString.js
var lodash_toString = __webpack_require__(79833);
var toString_default = /*#__PURE__*/__webpack_require__.n(lodash_toString);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/components/Preview.js


const StyledSpan = styled_components_browser_esm["default"].span`
  display: block;
  background-color: ${({ theme }) => theme.colors.primary100};
  outline: 1px dashed ${({ theme }) => theme.colors.primary500};
  outline-offset: -1px;
  padding: ${({ theme }) => theme.spaces[6]};
`;
const Preview = () => {
  return /* @__PURE__ */ react.createElement(StyledSpan, { padding: 6, background: "primary100" });
};
/* harmony default export */ const components_Preview = (Preview);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/components/Component.js
















const Component_CustomIconButton = (0,styled_components_browser_esm["default"])(dist.IconButton)`
  background-color: transparent;

  svg {
    path {
      fill: ${({ theme, expanded }) => expanded ? theme.colors.primary600 : theme.colors.neutral600};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary600};
      }
    }
  }
`;
const ActionsFlex = (0,styled_components_browser_esm["default"])(dist.Flex)`
  & .drag-handle {
    background: unset;

    svg {
      path {
        fill: ${({ theme, expanded }) => expanded ? theme.colors.primary600 : void 0};
      }
    }

    &:hover {
      svg {
        path {
          /* keeps the hover style of the accordion */
          fill: ${({ theme }) => theme.colors.primary600};
        }
      }
    }
  }
`;
const DraggedItem = ({
  componentFieldName,
  componentUid,
  fields,
  index,
  isOpen,
  isReadOnly,
  mainField,
  moveComponentField,
  onClickToggle,
  toggleCollapses,
  onGrabItem,
  onDropItem,
  onCancel
}) => {
  const { modifiedData, removeRepeatableField, triggerFormValidation } = (0,helper_plugin.useCMEditViewDataManager)();
  const displayedValue = toString_default()(
    get_default()(modifiedData, [...componentFieldName.split("."), mainField], "")
  );
  const accordionRef = (0,react.useRef)(null);
  const { formatMessage } = (0,react_intl.useIntl)();
  const [parentFieldName] = componentFieldName.split(".");
  const [{ handlerId, isDragging, handleKeyDown }, boxRef, dropRef, dragRef, dragPreviewRef] = useDragAndDrop(!isReadOnly, {
    type: `${ItemTypes.COMPONENT}_${parentFieldName}`,
    index,
    item: {
      displayedValue
    },
    onMoveItem: moveComponentField,
    onStart() {
      toggleCollapses();
    },
    onEnd() {
      triggerFormValidation();
    },
    onGrabItem,
    onDropItem,
    onCancel
  });
  (0,react.useEffect)(() => {
    dragPreviewRef((0,dist_cjs/* getEmptyImage */.rX)(), { captureDraggingState: false });
  }, [dragPreviewRef, index]);
  const composedAccordionRefs = composeRefs(accordionRef, dragRef);
  const composedBoxRefs = composeRefs(boxRef, dropRef);
  const { lazyComponentStore } = hooks_useLazyComponents();
  return /* @__PURE__ */ react.createElement(dist.Box, { ref: composedBoxRefs }, isDragging ? /* @__PURE__ */ react.createElement(components_Preview, null) : /* @__PURE__ */ react.createElement(dist.Accordion, { expanded: isOpen, onToggle: onClickToggle, id: componentFieldName, size: "S" }, /* @__PURE__ */ react.createElement(
    dist.AccordionToggle,
    {
      action: isReadOnly ? null : /* @__PURE__ */ react.createElement(ActionsFlex, { gap: 0, expanded: isOpen }, /* @__PURE__ */ react.createElement(
        Component_CustomIconButton,
        {
          expanded: isOpen,
          noBorder: true,
          onClick: () => {
            removeRepeatableField(componentFieldName);
            toggleCollapses();
          },
          label: formatMessage({
            id: utils_getTrad("containers.Edit.delete"),
            defaultMessage: "Delete"
          }),
          icon: /* @__PURE__ */ react.createElement(icons_dist.Trash, null)
        }
      ), /* @__PURE__ */ react.createElement(
        dist.IconButton,
        {
          className: "drag-handle",
          ref: composedAccordionRefs,
          forwardedAs: "div",
          role: "button",
          noBorder: true,
          tabIndex: 0,
          onClick: (e) => e.stopPropagation(),
          "data-handler-id": handlerId,
          label: formatMessage({
            id: utils_getTrad("components.DragHandle-label"),
            defaultMessage: "Drag"
          }),
          onKeyDown: handleKeyDown
        },
        /* @__PURE__ */ react.createElement(icons_dist.Drag, null)
      )),
      title: displayedValue,
      togglePosition: "left"
    }
  ), /* @__PURE__ */ react.createElement(dist.AccordionContent, null, /* @__PURE__ */ react.createElement(
    dist.Flex,
    {
      direction: "column",
      alignItems: "stretch",
      background: "neutral100",
      padding: 6,
      gap: 6
    },
    fields.map((fieldRow, key) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ react.createElement(dist.Grid, { gap: 4, key }, fieldRow.map(({ name, fieldSchema, metadatas, queryInfos, size }) => {
          const isComponent = fieldSchema.type === "component";
          const keys = `${componentFieldName}.${name}`;
          if (isComponent) {
            const componentUid2 = fieldSchema.component;
            return /* @__PURE__ */ react.createElement(dist.GridItem, { col: size, s: 12, xs: 12, key: name }, /* @__PURE__ */ react.createElement(
              components_FieldComponent,
              {
                componentUid: componentUid2,
                intlLabel: {
                  id: metadatas.label,
                  defaultMessage: metadatas.label
                },
                isRepeatable: fieldSchema.repeatable,
                isNested: true,
                name: keys,
                max: fieldSchema.max,
                min: fieldSchema.min,
                required: fieldSchema.required
              }
            ));
          }
          return /* @__PURE__ */ react.createElement(dist.GridItem, { key: keys, col: size, s: 12, xs: 12 }, /* @__PURE__ */ react.createElement(
            components_Inputs,
            {
              componentUid,
              fieldSchema,
              keys,
              metadatas,
              queryInfos,
              size,
              customFieldInputs: lazyComponentStore
            }
          ));
        }))
      );
    })
  ))));
};
DraggedItem.defaultProps = {
  componentUid: void 0,
  fields: [],
  isReadOnly: false,
  isOpen: false,
  onGrabItem: void 0,
  onDropItem: void 0,
  onCancel: void 0,
  toggleCollapses() {
  }
};
DraggedItem.propTypes = {
  componentFieldName: (prop_types_default()).string.isRequired,
  componentUid: (prop_types_default()).string,
  fields: (prop_types_default()).array,
  index: (prop_types_default()).number.isRequired,
  isOpen: (prop_types_default()).bool,
  isReadOnly: (prop_types_default()).bool,
  mainField: (prop_types_default()).string.isRequired,
  moveComponentField: (prop_types_default()).func.isRequired,
  onGrabItem: (prop_types_default()).func,
  onDropItem: (prop_types_default()).func,
  onCancel: (prop_types_default()).func,
  onClickToggle: (prop_types_default()).func.isRequired,
  toggleCollapses: (prop_types_default()).func
};
/* harmony default export */ const Component = ((0,react.memo)(DraggedItem));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/components/Accordion.js





const Footer = (0,styled_components_browser_esm["default"])(dist.Box)`
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-left: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: 0 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius};
`;
const Content = (0,styled_components_browser_esm["default"])(dist.Box)`
  border-bottom: none;

  /* add the borders and make sure the top is transparent to avoid jumping with the hover effect  */
  & > div > div {
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
    border-top-color: transparent;
  }

  /* the top accordion _does_ need a border though */
  & > div:first-child > div {
    border-top: 1px solid ${({ theme }) => theme.colors.neutral200};
  }

  /* Reset all the border-radius' */
  & > div > div,
  & > div > div > div {
    border-radius: unset;
  }

  /* Give the border radius back to the first accordion */
  & > div:first-child > div,
  & > div:first-child > div > div {
    border-radius: ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0 0;
  }

  & > div > div[data-strapi-expanded='true'] {
    border: 1px solid ${({ theme }) => theme.colors.primary600};
  }
`;
const Group = ({ children, error }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.KeyboardNavigable, { attributeName: "data-strapi-accordion-toggle" }, children, error && /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 1 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "pi", textColor: "danger600" }, formatMessage(
    { id: error.id, defaultMessage: error.defaultMessage },
    { ...error.values }
  ))));
};
Group.defaultProps = {
  error: void 0
};
Group.propTypes = {
  children: (prop_types_default()).node.isRequired,
  error: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  })
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/utils/getComponentErrorKeys.js
function getComponentErrorKeys(name, formErrors = {}) {
  return Object.keys(formErrors).filter((errorKey) => errorKey.startsWith(name)).map(
    (errorKey) => errorKey.split(".").slice(0, name.split(".").length + 1).join(".")
  );
}

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/RepeatableComponent/index.js














const TextButtonCustom = (0,styled_components_browser_esm["default"])(dist.TextButton)`
  height: 100%;
  width: 100%;
  border-radius: 0 0 4px 4px;
  display: flex;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 14px;
  }
`;
const RepeatableComponent = ({
  componentUid,
  componentValue,
  componentValueLength,
  isReadOnly,
  max,
  min,
  name
}) => {
  const { addRepeatableComponentToField, formErrors, moveComponentField } = (0,helper_plugin.useCMEditViewDataManager)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const [collapseToOpen, setCollapseToOpen] = (0,react.useState)("");
  const [liveText, setLiveText] = (0,react.useState)("");
  const { getComponentLayout, components } = hooks_useContentTypeLayout();
  const componentLayoutData = (0,react.useMemo)(
    () => getComponentLayout(componentUid),
    [componentUid, getComponentLayout]
  );
  const nextTempKey = (0,react.useMemo)(() => utils_getMaxTempKey(componentValue || []) + 1, [componentValue]);
  const componentErrorKeys = getComponentErrorKeys(name, formErrors);
  const missingComponentsValue = min - componentValueLength;
  const hasMinError = get_default()(formErrors, name, { id: "" }).id.includes("min");
  const toggleCollapses = () => {
    setCollapseToOpen("");
  };
  const handleClick = () => {
    if (!isReadOnly) {
      if (componentValueLength < max) {
        const shouldCheckErrors = hasMinError;
        addRepeatableComponentToField(name, componentLayoutData, components, shouldCheckErrors);
        setCollapseToOpen(nextTempKey);
      } else if (componentValueLength >= max) {
        toggleNotification({
          type: "info",
          message: { id: utils_getTrad("components.notification.info.maximum-requirement") }
        });
      }
    }
  };
  const handleMoveComponentField = (newIndex, currentIndex) => {
    setLiveText(
      formatMessage(
        {
          id: utils_getTrad("dnd.reorder"),
          defaultMessage: "{item}, moved. New position in list: {position}."
        },
        {
          item: `${name}.${currentIndex}`,
          position: getItemPos(newIndex)
        }
      )
    );
    moveComponentField({
      name,
      newIndex,
      currentIndex
    });
  };
  const mainField = get_default()(componentLayoutData, ["settings", "mainField"], "id");
  const handleToggle = (key) => () => {
    if (collapseToOpen === key) {
      setCollapseToOpen("");
    } else {
      setCollapseToOpen(key);
    }
  };
  const getItemPos = (index) => `${index + 1} of ${componentValueLength}`;
  const handleCancel = (index) => {
    setLiveText(
      formatMessage(
        {
          id: utils_getTrad("dnd.cancel-item"),
          defaultMessage: "{item}, dropped. Re-order cancelled."
        },
        {
          item: `${name}.${index}`
        }
      )
    );
  };
  const handleGrabItem = (index) => {
    setLiveText(
      formatMessage(
        {
          id: utils_getTrad("dnd.grab-item"),
          defaultMessage: `{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel.`
        },
        {
          item: `${name}.${index}`,
          position: getItemPos(index)
        }
      )
    );
  };
  const handleDropItem = (index) => {
    setLiveText(
      formatMessage(
        {
          id: utils_getTrad("dnd.drop-item"),
          defaultMessage: `{item}, dropped. Final position in list: {position}.`
        },
        {
          item: `${name}.${index}`,
          position: getItemPos(index)
        }
      )
    );
  };
  let errorMessage = formErrors[name];
  if (hasMinError) {
    errorMessage = {
      id: utils_getTrad("components.DynamicZone.missing-components"),
      defaultMessage: "There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}",
      values: { number: missingComponentsValue }
    };
  } else if (componentErrorKeys.some((error) => error.split(".").length > 1) && !hasMinError) {
    errorMessage = {
      id: utils_getTrad("components.RepeatableComponent.error-message"),
      defaultMessage: "The component(s) contain error(s)"
    };
  }
  if (componentValueLength === 0) {
    return /* @__PURE__ */ react.createElement(components_ComponentInitializer, { error: errorMessage, isReadOnly, onClick: handleClick });
  }
  const ariaDescriptionId = `${name}-item-instructions`;
  return /* @__PURE__ */ react.createElement(dist.Box, { hasRadius: true }, /* @__PURE__ */ react.createElement(dist.VisuallyHidden, { id: ariaDescriptionId }, formatMessage({
    id: utils_getTrad("dnd.instructions"),
    defaultMessage: `Press spacebar to grab and re-order`
  })), /* @__PURE__ */ react.createElement(dist.VisuallyHidden, { "aria-live": "assertive" }, liveText), /* @__PURE__ */ react.createElement(Group, { error: errorMessage, ariaDescribedBy: ariaDescriptionId }, /* @__PURE__ */ react.createElement(Content, { "aria-describedby": ariaDescriptionId }, componentValue.map(({ __temp_key__: key }, index) => /* @__PURE__ */ react.createElement(
    Component,
    {
      componentFieldName: `${name}.${index}`,
      componentUid,
      fields: componentLayoutData.layouts.edit,
      key,
      index,
      isOpen: collapseToOpen === key,
      isReadOnly,
      mainField,
      moveComponentField: handleMoveComponentField,
      onClickToggle: handleToggle(key),
      toggleCollapses,
      onCancel: handleCancel,
      onDropItem: handleDropItem,
      onGrabItem: handleGrabItem
    }
  ))), /* @__PURE__ */ react.createElement(Footer, null, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "center", height: "48px", background: "neutral0" }, /* @__PURE__ */ react.createElement(TextButtonCustom, { disabled: isReadOnly, onClick: handleClick, startIcon: /* @__PURE__ */ react.createElement(icons_dist.Plus, null) }, formatMessage({
    id: utils_getTrad("containers.EditView.add.new-entry"),
    defaultMessage: "Add an entry"
  }))))));
};
RepeatableComponent.defaultProps = {
  componentValue: null,
  componentValueLength: 0,
  isReadOnly: false,
  max: Infinity,
  min: 0
};
RepeatableComponent.propTypes = {
  componentUid: (prop_types_default()).string.isRequired,
  componentValue: prop_types_default().oneOfType([(prop_types_default()).array, (prop_types_default()).object]),
  componentValueLength: (prop_types_default()).number,
  isReadOnly: (prop_types_default()).bool,
  max: (prop_types_default()).number,
  min: (prop_types_default()).number,
  name: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_RepeatableComponent = ((0,react.memo)(RepeatableComponent));


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/FieldComponent/index.js
















const FieldComponent = ({
  addNonRepeatableComponentToField,
  componentUid,
  // TODO add error state
  // formErrors,
  intlLabel,
  isCreatingEntry,
  isFromDynamicZone,
  isRepeatable,
  isNested,
  labelAction,
  max,
  min,
  name,
  // Passed thanks to the connect function
  hasChildrenAllowedFields,
  hasChildrenReadableFields,
  isReadOnly,
  componentValue,
  removeComponentFromField,
  required
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const componentValueLength = size_default()(componentValue);
  const isInitialized = componentValue !== null || isFromDynamicZone;
  const showResetComponent = !isRepeatable && isInitialized && !isFromDynamicZone && hasChildrenAllowedFields;
  const { getComponentLayout, components } = hooks_useContentTypeLayout();
  const componentLayoutData = (0,react.useMemo)(
    () => getComponentLayout(componentUid),
    [componentUid, getComponentLayout]
  );
  if (!hasChildrenAllowedFields && isCreatingEntry) {
    return /* @__PURE__ */ react.createElement(helper_plugin.NotAllowedInput, { labelAction, intlLabel, name });
  }
  if (!hasChildrenAllowedFields && !isCreatingEntry && !hasChildrenReadableFields) {
    return /* @__PURE__ */ react.createElement(helper_plugin.NotAllowedInput, { labelAction, intlLabel, name });
  }
  const handleClickAddNonRepeatableComponentToField = () => {
    addNonRepeatableComponentToField(name, componentLayoutData, components);
  };
  return /* @__PURE__ */ react.createElement(dist.Box, null, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "space-between" }, intlLabel && /* @__PURE__ */ react.createElement(
    FieldComponent_Label,
    {
      intlLabel,
      labelAction,
      name,
      numberOfEntries: componentValueLength,
      showNumberOfEntries: isRepeatable,
      required
    }
  ), showResetComponent && /* @__PURE__ */ react.createElement(
    dist.IconButton,
    {
      label: formatMessage({
        id: utils_getTrad("components.reset-entry"),
        defaultMessage: "Reset Entry"
      }),
      icon: /* @__PURE__ */ react.createElement(icons_dist.Trash, null),
      noBorder: true,
      onClick: () => {
        removeComponentFromField(name, componentUid);
      }
    }
  )), /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 1 }, !isRepeatable && !isInitialized && /* @__PURE__ */ react.createElement(
    components_ComponentInitializer,
    {
      isReadOnly,
      onClick: handleClickAddNonRepeatableComponentToField
    }
  ), !isRepeatable && isInitialized && /* @__PURE__ */ react.createElement(
    components_NonRepeatableComponent,
    {
      componentUid,
      isFromDynamicZone,
      isNested,
      name
    }
  ), isRepeatable && /* @__PURE__ */ react.createElement(
    components_RepeatableComponent,
    {
      componentValue,
      componentValueLength,
      componentUid,
      isReadOnly,
      max,
      min,
      name
    }
  )));
};
FieldComponent.defaultProps = {
  componentValue: null,
  hasChildrenAllowedFields: false,
  hasChildrenReadableFields: false,
  intlLabel: void 0,
  isFromDynamicZone: false,
  isReadOnly: false,
  isRepeatable: false,
  isNested: false,
  labelAction: void 0,
  max: Infinity,
  min: -Infinity,
  required: false
};
FieldComponent.propTypes = {
  addNonRepeatableComponentToField: (prop_types_default()).func.isRequired,
  componentUid: (prop_types_default()).string.isRequired,
  componentValue: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).array]),
  hasChildrenAllowedFields: (prop_types_default()).bool,
  hasChildrenReadableFields: (prop_types_default()).bool,
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  isFromDynamicZone: (prop_types_default()).bool,
  isReadOnly: (prop_types_default()).bool,
  isRepeatable: (prop_types_default()).bool,
  isNested: (prop_types_default()).bool,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  labelAction: (prop_types_default()).element,
  max: (prop_types_default()).number,
  min: (prop_types_default()).number,
  name: (prop_types_default()).string.isRequired,
  removeComponentFromField: (prop_types_default()).func.isRequired,
  required: (prop_types_default()).bool
};
const FieldComponent_Memoized = (0,react.memo)(FieldComponent, (react_fast_compare_default()));
/* harmony default export */ const components_FieldComponent = (FieldComponent_utils_connect(FieldComponent_Memoized, FieldComponent_utils_select));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/components/DynamicComponent.js












const DynamicComponent_ActionsFlex = (0,styled_components_browser_esm["default"])(dist.Flex)`
  /* 
    we need to remove the background from the button but we can't 
    wrap the element in styled because it breaks the forwardedAs which
    we need for drag handler to work on firefox
  */
  div[role='button'] {
    background: transparent;
  }
`;
const IconButtonCustom = (0,styled_components_browser_esm["default"])(dist.IconButton)`
  background-color: transparent;

  svg path {
    fill: ${({ theme, expanded }) => expanded ? theme.colors.primary600 : theme.colors.neutral600};
  }
`;
const StyledBox = (0,styled_components_browser_esm["default"])(dist.Box)`
  > div:first-child {
    box-shadow: ${({ theme }) => theme.shadows.tableShadow};
  }
`;
const AccordionContentRadius = (0,styled_components_browser_esm["default"])(dist.Box)`
  border-radius: 0 0 ${({ theme }) => theme.spaces[1]} ${({ theme }) => theme.spaces[1]};
`;
const Rectangle = (0,styled_components_browser_esm["default"])(dist.Box)`
  width: ${({ theme }) => theme.spaces[2]};
  height: ${({ theme }) => theme.spaces[4]};
`;
const DynamicComponent_Preview = styled_components_browser_esm["default"].span`
  display: block;
  background-color: ${({ theme }) => theme.colors.primary100};
  outline: 1px dashed ${({ theme }) => theme.colors.primary500};
  outline-offset: -1px;
  padding: ${({ theme }) => theme.spaces[6]};
`;
const ComponentContainer = (0,styled_components_browser_esm["default"])(dist.Box)`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const DynamicZoneComponent = ({
  componentUid,
  formErrors,
  index,
  isFieldAllowed,
  name,
  onRemoveComponentClick,
  onMoveComponent,
  onGrabItem,
  onDropItem,
  onCancel
}) => {
  const [isOpen, setIsOpen] = (0,react.useState)(true);
  const { formatMessage } = (0,react_intl.useIntl)();
  const { getComponentLayout } = hooks_useContentTypeLayout();
  const { modifiedData } = (0,helper_plugin.useCMEditViewDataManager)();
  const { icon, friendlyName, mainValue } = (0,react.useMemo)(() => {
    const componentLayoutData = getComponentLayout(componentUid);
    const {
      info: { icon: icon2, displayName }
    } = componentLayoutData;
    const mainFieldKey = get_default()(componentLayoutData, ["settings", "mainField"], "id");
    const mainField = get_default()(modifiedData, [name, index, mainFieldKey]) ?? "";
    const displayedValue = mainFieldKey === "id" ? "" : String(mainField).trim();
    const mainValue2 = displayedValue.length > 0 ? ` - ${displayedValue}` : displayedValue;
    return { friendlyName: displayName, icon: icon2, mainValue: mainValue2 };
  }, [componentUid, getComponentLayout, modifiedData, name, index]);
  const fieldsErrors = Object.keys(formErrors).filter((errorKey) => {
    const errorKeysArray = errorKey.split(".");
    if (`${errorKeysArray[0]}.${errorKeysArray[1]}` === `${name}.${index}`) {
      return true;
    }
    return false;
  });
  let errorMessage;
  if (fieldsErrors.length > 0) {
    errorMessage = formatMessage({
      id: utils_getTrad("components.DynamicZone.error-message"),
      defaultMessage: "The component contains error(s)"
    });
  }
  const handleToggle = () => {
    setIsOpen((s) => !s);
  };
  const [{ handlerId, isDragging, handleKeyDown }, boxRef, dropRef, dragRef, dragPreviewRef] = useDragAndDrop(isFieldAllowed, {
    type: `${ItemTypes.DYNAMIC_ZONE}_${name}`,
    index,
    item: {
      displayedValue: `${friendlyName}${mainValue}`,
      icon
    },
    onMoveItem: onMoveComponent,
    onGrabItem,
    onDropItem,
    onCancel
  });
  (0,react.useEffect)(() => {
    dragPreviewRef((0,dist_cjs/* getEmptyImage */.rX)(), { captureDraggingState: false });
  }, [dragPreviewRef, index]);
  const composedBoxRefs = composeRefs(boxRef, dropRef);
  const accordionActions = !isFieldAllowed ? null : /* @__PURE__ */ react.createElement(DynamicComponent_ActionsFlex, { gap: 0, expanded: isOpen }, /* @__PURE__ */ react.createElement(
    IconButtonCustom,
    {
      noBorder: true,
      label: formatMessage(
        {
          id: utils_getTrad("components.DynamicZone.delete-label"),
          defaultMessage: "Delete {name}"
        },
        { name: friendlyName }
      ),
      onClick: onRemoveComponentClick
    },
    /* @__PURE__ */ react.createElement(icons_dist.Trash, null)
  ), /* @__PURE__ */ react.createElement(
    dist.IconButton,
    {
      forwardedAs: "div",
      role: "button",
      noBorder: true,
      tabIndex: 0,
      onClick: (e) => e.stopPropagation(),
      "data-handler-id": handlerId,
      ref: dragRef,
      label: formatMessage({
        id: utils_getTrad("components.DragHandle-label"),
        defaultMessage: "Drag"
      }),
      onKeyDown: handleKeyDown
    },
    /* @__PURE__ */ react.createElement(icons_dist.Drag, null)
  ));
  return /* @__PURE__ */ react.createElement(ComponentContainer, { as: "li" }, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Rectangle, { background: "neutral200" })), /* @__PURE__ */ react.createElement(StyledBox, { ref: composedBoxRefs, hasRadius: true }, isDragging ? /* @__PURE__ */ react.createElement(DynamicComponent_Preview, { padding: 6, background: "primary100" }) : /* @__PURE__ */ react.createElement(dist.Accordion, { expanded: isOpen, onToggle: handleToggle, size: "S", error: errorMessage }, /* @__PURE__ */ react.createElement(
    dist.AccordionToggle,
    {
      action: accordionActions,
      title: `${friendlyName}${mainValue}`,
      togglePosition: "left"
    }
  ), /* @__PURE__ */ react.createElement(dist.AccordionContent, null, /* @__PURE__ */ react.createElement(AccordionContentRadius, { background: "neutral0" }, /* @__PURE__ */ react.createElement(
    components_FieldComponent,
    {
      componentUid,
      icon,
      name: `${name}.${index}`,
      isFromDynamicZone: true
    }
  ))))));
};
DynamicZoneComponent.defaultProps = {
  formErrors: {},
  index: 0,
  isFieldAllowed: true,
  onGrabItem: void 0,
  onDropItem: void 0,
  onCancel: void 0
};
DynamicZoneComponent.propTypes = {
  componentUid: (prop_types_default()).string.isRequired,
  formErrors: (prop_types_default()).object,
  index: (prop_types_default()).number,
  isFieldAllowed: (prop_types_default()).bool,
  name: (prop_types_default()).string.isRequired,
  onGrabItem: (prop_types_default()).func,
  onDropItem: (prop_types_default()).func,
  onCancel: (prop_types_default()).func,
  onMoveComponent: (prop_types_default()).func.isRequired,
  onRemoveComponentClick: (prop_types_default()).func.isRequired
};
/* harmony default export */ const DynamicComponent = (DynamicZoneComponent);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/components/AddComponentButton.js







const StyledAddIcon = (0,styled_components_browser_esm["default"])(icons_dist.PlusCircle)`
  transform: ${({ $isOpen }) => $isOpen ? "rotate(45deg)" : "rotate(0deg)"};
  > circle {
    fill: ${({ theme, $hasError }) => $hasError ? theme.colors.danger200 : theme.colors.neutral150};
  }
  > path {
    fill: ${({ theme, $hasError }) => $hasError ? theme.colors.danger600 : theme.colors.neutral600};
  }
`;
const StyledButton = (0,styled_components_browser_esm["default"])(dist.BaseButton)`
  border-radius: 26px;
  border-color: ${({ theme }) => theme.colors.neutral150};
  background: ${({ theme }) => theme.colors.neutral0};
  padding-top: ${({ theme }) => theme.spaces[3]};
  padding-right: ${({ theme }) => theme.spaces[4]};
  padding-bottom: ${({ theme }) => theme.spaces[3]};
  padding-left: ${({ theme }) => theme.spaces[4]};

  box-shadow: ${({ theme }) => theme.shadows.filterShadow};

  svg {
    height: ${({ theme }) => theme.spaces[6]};
    width: ${({ theme }) => theme.spaces[6]};
    > path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary600} !important;
    ${dist.Typography} {
      color: ${({ theme }) => theme.colors.primary600} !important;
    }

    ${StyledAddIcon} {
      > circle {
        fill: ${({ theme }) => theme.colors.primary600};
      }
      > path {
        fill: ${({ theme }) => theme.colors.neutral100};
      }
    }
  }
  &:active {
    ${dist.Typography} {
      color: ${({ theme }) => theme.colors.primary600};
    }
    ${StyledAddIcon} {
      > circle {
        fill: ${({ theme }) => theme.colors.primary600};
      }
      > path {
        fill: ${({ theme }) => theme.colors.neutral100};
      }
    }
  }
`;
const BoxFullHeight = (0,styled_components_browser_esm["default"])(dist.Box)`
  height: 100%;
`;
const AddComponentButton = ({
  hasError,
  hasMaxError,
  hasMinError,
  isDisabled,
  isOpen,
  label,
  missingComponentNumber,
  name,
  onClick
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const addLabel = formatMessage(
    {
      id: utils_getTrad("components.DynamicZone.add-component"),
      defaultMessage: "Add a component to {componentName}"
    },
    { componentName: label || name }
  );
  const closeLabel = formatMessage({ id: "app.utils.close-label", defaultMessage: "Close" });
  let buttonLabel = isOpen ? closeLabel : addLabel;
  if (hasMaxError && !isOpen) {
    buttonLabel = formatMessage({
      id: "components.Input.error.validation.max",
      defaultMessage: "The value is too high."
    });
  }
  if (hasMinError && !isOpen) {
    buttonLabel = formatMessage(
      {
        id: utils_getTrad(`components.DynamicZone.missing-components`),
        defaultMessage: "There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}"
      },
      { number: missingComponentNumber }
    );
  }
  return /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(dist.Box, { style: { cursor: isDisabled ? "not-allowed" : "pointer" } }, /* @__PURE__ */ react.createElement(StyledButton, { type: "button", onClick, disabled: isDisabled, hasError }, /* @__PURE__ */ react.createElement(dist.Flex, null, /* @__PURE__ */ react.createElement(BoxFullHeight, { "aria-hidden": true, paddingRight: 2 }, /* @__PURE__ */ react.createElement(StyledAddIcon, { $isOpen: isOpen, $hasError: hasError && !isOpen })), /* @__PURE__ */ react.createElement(
    dist.Typography,
    {
      variant: "pi",
      fontWeight: "bold",
      textColor: hasError && !isOpen ? "danger600" : "neutral500"
    },
    buttonLabel
  )))));
};
AddComponentButton.defaultProps = {
  hasError: false,
  hasMaxError: false,
  hasMinError: false,
  isDisabled: false,
  isOpen: false,
  label: "",
  missingComponentNumber: 0
};
AddComponentButton.propTypes = {
  label: (prop_types_default()).string,
  hasError: (prop_types_default()).bool,
  hasMaxError: (prop_types_default()).bool,
  hasMinError: (prop_types_default()).bool,
  isDisabled: (prop_types_default()).bool,
  isOpen: (prop_types_default()).bool,
  missingComponentNumber: (prop_types_default()).number,
  name: (prop_types_default()).string.isRequired,
  onClick: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_AddComponentButton = (AddComponentButton);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/components/DynamicZoneLabel.js






const DynamicZoneLabel_StyledBox = (0,styled_components_browser_esm["default"])(dist.Box)`
  border-radius: ${(0,helper_plugin.pxToRem)(26)};
`;
const DynamicZoneLabel = ({
  label,
  labelAction,
  name,
  numberOfComponents,
  required,
  intlDescription
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const intlLabel = formatMessage({ id: label || name, defaultMessage: label || name });
  return /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(dist.Box, null, /* @__PURE__ */ react.createElement(
    DynamicZoneLabel_StyledBox,
    {
      paddingTop: 3,
      paddingBottom: 3,
      paddingRight: 4,
      paddingLeft: 4,
      background: "neutral0",
      shadow: "filterShadow",
      color: "neutral500"
    },
    /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", justifyContent: "center" }, /* @__PURE__ */ react.createElement(dist.Flex, { maxWidth: (0,helper_plugin.pxToRem)(356) }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "pi", textColor: "neutral600", fontWeight: "bold", ellipsis: true }, intlLabel, "\xA0"), /* @__PURE__ */ react.createElement(dist.Typography, { variant: "pi", textColor: "neutral600", fontWeight: "bold" }, "(", numberOfComponents, ")"), required && /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "danger600" }, "*"), labelAction && /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 1 }, labelAction)), intlDescription && /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 1, maxWidth: (0,helper_plugin.pxToRem)(356) }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "pi", textColor: "neutral600", ellipsis: true }, formatMessage(intlDescription))))
  )));
};
DynamicZoneLabel.defaultProps = {
  intlDescription: void 0,
  label: "",
  labelAction: void 0,
  numberOfComponents: 0,
  required: false
};
DynamicZoneLabel.propTypes = {
  intlDescription: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired
  }),
  label: (prop_types_default()).string,
  labelAction: (prop_types_default()).element,
  name: (prop_types_default()).string.isRequired,
  numberOfComponents: (prop_types_default()).number,
  required: (prop_types_default()).bool
};
/* harmony default export */ const components_DynamicZoneLabel = (DynamicZoneLabel);

// EXTERNAL MODULE: ./node_modules/lodash/groupBy.js
var groupBy = __webpack_require__(7739);
var groupBy_default = /*#__PURE__*/__webpack_require__.n(groupBy);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/ComponentIcon/ComponentIcon.js




const WIDTH_S = 5;
const WIDTH_M = 8;
const ComponentIcon_Wrapper = (0,styled_components_browser_esm["default"])(dist.Flex)`
  border-radius: ${({ showBackground }) => showBackground ? `50%` : 0};
  color: ${({ theme }) => theme.colors.neutral600};
  height: ${({ theme, size }) => theme.spaces[size === "S" ? WIDTH_S : WIDTH_M]};
  width: ${({ theme, size }) => theme.spaces[size === "S" ? WIDTH_S : WIDTH_M]};

  svg {
    height: ${({ theme, size }) => theme.spaces[size === "S" ? WIDTH_S - 2 : WIDTH_M - 3]};
    width: ${({ theme, size }) => theme.spaces[size === "S" ? WIDTH_S - 2 : WIDTH_M - 3]};
  }
`;
function ComponentIcon({ showBackground = true, size = "M" }) {
  return /* @__PURE__ */ react.createElement(
    ComponentIcon_Wrapper,
    {
      alignItems: "center",
      background: showBackground ? "neutral200" : null,
      justifyContent: "center",
      size,
      showBackground
    },
    /* @__PURE__ */ react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ react.createElement(
      "path",
      {
        d: "M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",
        fill: "currentColor"
      }
    ))
  );
}
ComponentIcon.defaultProps = {
  showBackground: true,
  size: "M"
};
ComponentIcon.propTypes = {
  showBackground: (prop_types_default()).bool,
  size: (prop_types_default()).string
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/ComponentIcon/index.js


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/components/ComponentCard.js






const ComponentBox = (0,styled_components_browser_esm["default"])(dist.Box)`
  flex-shrink: 0;
  height: ${(0,helper_plugin.pxToRem)(84)};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.neutral100};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary200};
    background: ${({ theme }) => theme.colors.primary100};

    ${dist.Typography} {
      color: ${({ theme }) => theme.colors.primary600};
    }

    /* > Flex > ComponentIcon */
    > div > div:first-child {
      background: ${({ theme }) => theme.colors.primary200};
      color: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
function ComponentCard({ children, onClick }) {
  return /* @__PURE__ */ react.createElement(ComponentBox, { as: "button", type: "button", onClick, hasRadius: true }, /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", gap: 1, alignItems: "center", justifyContent: "center" }, /* @__PURE__ */ react.createElement(ComponentIcon, null), /* @__PURE__ */ react.createElement(dist.Typography, { variant: "pi", fontWeight: "bold", textColor: "neutral600" }, children)));
}
ComponentCard.defaultProps = {
  onClick() {
  }
};
ComponentCard.propTypes = {
  children: (prop_types_default()).node.isRequired,
  onClick: (prop_types_default()).func
};

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/components/ComponentCategory.js






const Grid = styled_components_browser_esm["default"].div`
  display: grid;
  grid-template-columns: repeat(auto-fit, ${140 / 16}rem);
  grid-gap: ${({ theme }) => theme.spaces[1]};
`;
const ComponentCategory = ({ category, components, variant, isOpen, onAddComponent, onToggle }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const handleToggle = () => {
    onToggle(category);
  };
  return /* @__PURE__ */ react.createElement(dist.Accordion, { expanded: isOpen, onToggle: handleToggle, size: "S" }, /* @__PURE__ */ react.createElement(
    dist.AccordionToggle,
    {
      variant,
      title: formatMessage({ id: category, defaultMessage: category }),
      togglePosition: "left"
    }
  ), /* @__PURE__ */ react.createElement(dist.AccordionContent, null, /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 4, paddingBottom: 4, paddingLeft: 3, paddingRight: 3 }, /* @__PURE__ */ react.createElement(Grid, null, components.map(({ componentUid, info: { displayName } }) => /* @__PURE__ */ react.createElement(ComponentCard, { key: componentUid, onClick: onAddComponent(componentUid) }, formatMessage({ id: displayName, defaultMessage: displayName })))))));
};
ComponentCategory.defaultProps = {
  components: [],
  isOpen: false,
  variant: "primary"
};
ComponentCategory.propTypes = {
  category: (prop_types_default()).string.isRequired,
  components: (prop_types_default()).array,
  isOpen: (prop_types_default()).bool,
  onAddComponent: (prop_types_default()).func.isRequired,
  onToggle: (prop_types_default()).func.isRequired,
  variant: prop_types_default().oneOf(["primary", "secondary"])
};
/* harmony default export */ const components_ComponentCategory = (ComponentCategory);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/components/ComponentPicker.js








const ComponentPicker = ({ components, isOpen, onClickAddComponent }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { getComponentLayout } = hooks_useContentTypeLayout();
  const [categoryToOpen, setCategoryToOpen] = (0,react.useState)("");
  const dynamicComponentCategories = (0,react.useMemo)(() => {
    const componentsWithInfo = components.map((componentUid) => {
      const { category, info } = getComponentLayout(componentUid);
      return { componentUid, category, info };
    });
    const categories = groupBy_default()(componentsWithInfo, "category");
    return Object.keys(categories).reduce((acc, current) => {
      acc.push({ category: current, components: categories[current] });
      return acc;
    }, []);
  }, [components, getComponentLayout]);
  (0,react.useEffect)(() => {
    if (isOpen && dynamicComponentCategories.length > 0) {
      setCategoryToOpen(dynamicComponentCategories[0].category);
    }
  }, [isOpen, dynamicComponentCategories]);
  const handleAddComponentToDz = (componentUid) => () => {
    onClickAddComponent(componentUid);
    setCategoryToOpen("");
  };
  const handleClickToggle = (categoryName) => {
    setCategoryToOpen((currentCat) => currentCat === categoryName ? "" : categoryName);
  };
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(dist.Box, { paddingBottom: 6 }, /* @__PURE__ */ react.createElement(
    dist.Box,
    {
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 5,
      paddingRight: 5,
      background: "neutral0",
      shadow: "tableShadow",
      borderColor: "neutral150",
      hasRadius: true
    },
    /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "bold", textColor: "neutral600" }, formatMessage({
      id: utils_getTrad("components.DynamicZone.ComponentPicker-label"),
      defaultMessage: "Pick one component"
    }))),
    /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 2 }, /* @__PURE__ */ react.createElement(dist.KeyboardNavigable, { attributeName: "data-strapi-accordion-toggle" }, dynamicComponentCategories.map(({ category, components: components2 }, index) => /* @__PURE__ */ react.createElement(
      components_ComponentCategory,
      {
        key: category,
        category,
        components: components2,
        onAddComponent: handleAddComponentToDz,
        isOpen: category === categoryToOpen,
        onToggle: handleClickToggle,
        variant: index % 2 === 1 ? "primary" : "secondary"
      }
    ))))
  ));
};
ComponentPicker.defaultProps = {
  components: [],
  isOpen: false
};
ComponentPicker.propTypes = {
  components: (prop_types_default()).array,
  isOpen: (prop_types_default()).bool,
  onClickAddComponent: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ComponentPicker = (ComponentPicker);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicZone/index.js















const DynamicZone = ({
  name,
  // Passed with the select function
  addComponentToDynamicZone,
  formErrors,
  isCreatingEntry,
  isFieldAllowed,
  isFieldReadable,
  labelAction,
  moveComponentField,
  removeComponentFromDynamicZone,
  dynamicDisplayedComponents,
  fieldSchema,
  metadatas
}) => {
  const [addComponentIsOpen, setAddComponentIsOpen] = (0,react.useState)(false);
  const [liveText, setLiveText] = (0,react.useState)("");
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const { getComponentLayout, components } = hooks_useContentTypeLayout();
  const dynamicDisplayedComponentsLength = dynamicDisplayedComponents.length;
  const intlDescription = metadatas.description ? { id: metadatas.description, defaultMessage: metadatas.description } : null;
  const { max = Infinity, min = -Infinity } = fieldSchema;
  const dynamicZoneErrors = (0,react.useMemo)(() => {
    return Object.keys(formErrors).filter((key) => {
      return key === name;
    }).map((key) => formErrors[key]);
  }, [formErrors, name]);
  const missingComponentNumber = min - dynamicDisplayedComponentsLength;
  const hasError = dynamicZoneErrors.length > 0;
  const hasMinError = dynamicZoneErrors.length > 0 && get_default()(dynamicZoneErrors, [0, "id"], "").includes("min");
  const hasMaxError = hasError && get_default()(dynamicZoneErrors, [0, "id"], "") === "components.Input.error.validation.max";
  const handleAddComponent = (componentUid) => {
    setAddComponentIsOpen(false);
    const componentLayoutData = getComponentLayout(componentUid);
    addComponentToDynamicZone(name, componentLayoutData, components, hasError);
  };
  const handleClickOpenPicker = () => {
    if (dynamicDisplayedComponentsLength < max) {
      setAddComponentIsOpen((prev) => !prev);
    } else {
      toggleNotification({
        type: "info",
        message: { id: utils_getTrad("components.notification.info.maximum-requirement") }
      });
    }
  };
  const handleMoveComponent = (newIndex, currentIndex) => {
    setLiveText(
      formatMessage(
        {
          id: utils_getTrad("dnd.reorder"),
          defaultMessage: "{item}, moved. New position in list: {position}."
        },
        {
          item: `${name}.${currentIndex}`,
          position: getItemPos(newIndex)
        }
      )
    );
    moveComponentField({
      name,
      newIndex,
      currentIndex
    });
  };
  const getItemPos = (index) => `${index + 1} of ${dynamicDisplayedComponents.length}`;
  const handleCancel = (index) => {
    setLiveText(
      formatMessage(
        {
          id: utils_getTrad("dnd.cancel-item"),
          defaultMessage: "{item}, dropped. Re-order cancelled."
        },
        {
          item: `${name}.${index}`
        }
      )
    );
  };
  const handleGrabItem = (index) => {
    setLiveText(
      formatMessage(
        {
          id: utils_getTrad("dnd.grab-item"),
          defaultMessage: `{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel.`
        },
        {
          item: `${name}.${index}`,
          position: getItemPos(index)
        }
      )
    );
  };
  const handleDropItem = (index) => {
    setLiveText(
      formatMessage(
        {
          id: utils_getTrad("dnd.drop-item"),
          defaultMessage: `{item}, dropped. Final position in list: {position}.`
        },
        {
          item: `${name}.${index}`,
          position: getItemPos(index)
        }
      )
    );
  };
  const handleRemoveComponent = (name2, currentIndex) => () => {
    removeComponentFromDynamicZone(name2, currentIndex);
  };
  if (!isFieldAllowed && (isCreatingEntry || !isFieldReadable && !isCreatingEntry)) {
    return /* @__PURE__ */ react.createElement(
      helper_plugin.NotAllowedInput,
      {
        description: intlDescription,
        intlLabel: { id: metadatas.label, defaultMessage: metadatas.label },
        labelAction,
        name
      }
    );
  }
  const ariaDescriptionId = `${name}-item-instructions`;
  return /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 6 }, dynamicDisplayedComponentsLength > 0 && /* @__PURE__ */ react.createElement(dist.Box, null, /* @__PURE__ */ react.createElement(
    components_DynamicZoneLabel,
    {
      intlDescription,
      label: metadatas.label,
      labelAction,
      name,
      numberOfComponents: dynamicDisplayedComponentsLength,
      required: fieldSchema.required || false
    }
  ), /* @__PURE__ */ react.createElement(dist.VisuallyHidden, { id: ariaDescriptionId }, formatMessage({
    id: utils_getTrad("dnd.instructions"),
    defaultMessage: `Press spacebar to grab and re-order`
  })), /* @__PURE__ */ react.createElement(dist.VisuallyHidden, { "aria-live": "assertive" }, liveText), /* @__PURE__ */ react.createElement("ol", { "aria-describedby": ariaDescriptionId }, dynamicDisplayedComponents.map(({ componentUid, id }, index) => /* @__PURE__ */ react.createElement(
    DynamicComponent,
    {
      componentUid,
      formErrors,
      key: `${componentUid}-${id}`,
      index,
      isFieldAllowed,
      name,
      onMoveComponent: handleMoveComponent,
      onRemoveComponentClick: handleRemoveComponent(name, index),
      onCancel: handleCancel,
      onDropItem: handleDropItem,
      onGrabItem: handleGrabItem
    }
  )))), /* @__PURE__ */ react.createElement(
    components_AddComponentButton,
    {
      hasError,
      hasMaxError,
      hasMinError,
      isDisabled: !isFieldAllowed,
      label: metadatas.label,
      missingComponentNumber,
      isOpen: addComponentIsOpen,
      name,
      onClick: handleClickOpenPicker
    }
  ), /* @__PURE__ */ react.createElement(
    components_ComponentPicker,
    {
      isOpen: addComponentIsOpen,
      components: fieldSchema.components ?? [],
      onClickAddComponent: handleAddComponent
    }
  ));
};
DynamicZone.defaultProps = {
  dynamicDisplayedComponents: [],
  fieldSchema: {
    max: Infinity,
    min: -Infinity
  },
  labelAction: null
};
DynamicZone.propTypes = {
  addComponentToDynamicZone: (prop_types_default()).func.isRequired,
  dynamicDisplayedComponents: prop_types_default().arrayOf(
    prop_types_default().shape({
      componentUid: (prop_types_default()).string.isRequired,
      id: (prop_types_default()).number.isRequired
    })
  ),
  fieldSchema: prop_types_default().shape({
    components: (prop_types_default()).array.isRequired,
    max: (prop_types_default()).number,
    min: (prop_types_default()).number,
    required: (prop_types_default()).bool
  }),
  formErrors: (prop_types_default()).object.isRequired,
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  isFieldAllowed: (prop_types_default()).bool.isRequired,
  isFieldReadable: (prop_types_default()).bool.isRequired,
  labelAction: (prop_types_default()).element,
  metadatas: prop_types_default().shape({
    description: (prop_types_default()).string,
    label: (prop_types_default()).string
  }).isRequired,
  moveComponentField: (prop_types_default()).func.isRequired,
  name: (prop_types_default()).string.isRequired,
  removeComponentFromDynamicZone: (prop_types_default()).func.isRequired
};
const DynamicZone_Memoized = (0,react.memo)(DynamicZone, (react_fast_compare_default()));
/* harmony default export */ const components_DynamicZone = (utils_connect(DynamicZone_Memoized, utils_select));


// EXTERNAL MODULE: ./.cache/admin/src/content-manager/sharedReducers/crudReducer/constants.js
var crudReducer_constants = __webpack_require__(46781);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/sharedReducers/crudReducer/actions.js

const getData = () => {
  return {
    type: crudReducer_constants/* GET_DATA */.ZA
  };
};
const getDataSucceeded = (data) => ({
  type: crudReducer_constants/* GET_DATA_SUCCEEDED */.Id,
  data
});
const initForm = (rawQuery, isSingleType = false) => ({
  type: crudReducer_constants/* INIT_FORM */.TP,
  rawQuery,
  isSingleType
});
const actions_resetProps = () => ({ type: crudReducer_constants/* RESET_PROPS */.c2 });
const setDataStructures = (componentsDataStructure, contentTypeDataStructure) => ({
  type: crudReducer_constants/* SET_DATA_STRUCTURES */.w7,
  componentsDataStructure,
  contentTypeDataStructure
});
const setStatus = (status) => ({
  type: crudReducer_constants/* SET_STATUS */.d0,
  status
});
const submitSucceeded = (data) => ({
  type: crudReducer_constants/* SUBMIT_SUCCEEDED */.t9,
  data
});
const clearSetModifiedDataOnly = () => ({
  type: crudReducer_constants/* CLEAR_SET_MODIFIED_DATA_ONLY */.tE
});

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/sharedReducers/crudReducer/selectors.js
const selectCrudReducer = (state) => state["content-manager_editViewCrudReducer"];
/* harmony default export */ const crudReducer_selectors = (selectCrudReducer);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/CollectionTypeFormWrapper/index.js













const CollectionTypeFormWrapper = ({ allLayoutData, children, slug, id, origin }) => {
  const queryClient = (0,react_query_lib.useQueryClient)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const { setCurrentStep } = (0,helper_plugin.useGuidedTour)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const { push, replace } = (0,react_router_dom_min.useHistory)();
  const [{ rawQuery }] = (0,helper_plugin.useQueryParams)();
  const dispatch = (0,lib.useDispatch)();
  const { componentsDataStructure, contentTypeDataStructure, data, isLoading, status } = (0,lib.useSelector)(crudReducer_selectors);
  const redirectionLink = hooks_useFindRedirectionLink(slug);
  const { formatAPIError } = (0,helper_plugin.useAPIErrorHandler)(utils_getTrad);
  const isMounted = (0,react.useRef)(true);
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const allLayoutDataRef = (0,react.useRef)(allLayoutData);
  const fetchClient = (0,helper_plugin.useFetchClient)();
  const { put, post, del } = fetchClient;
  const isCreatingEntry = id === null;
  const requestURL = (0,react.useMemo)(() => {
    if (isCreatingEntry && !origin) {
      return null;
    }
    return utils_getRequestUrl(`collection-types/${slug}/${origin || id}`);
  }, [slug, id, isCreatingEntry, origin]);
  const cleanClonedData = (0,react.useCallback)(
    (data2) => {
      if (!origin) {
        return data2;
      }
      const cleaned = (0,helper_plugin.contentManagementUtilRemoveFieldsFromData)(
        data2,
        allLayoutDataRef.current.contentType,
        allLayoutDataRef.current.components
      );
      return cleaned;
    },
    [origin]
  );
  const cleanReceivedData = (0,react.useCallback)((data2) => {
    const cleaned = utils_removePasswordFieldsFromData(
      data2,
      allLayoutDataRef.current.contentType,
      allLayoutDataRef.current.components
    );
    return (0,helper_plugin.formatContentTypeData)(
      cleaned,
      allLayoutDataRef.current.contentType,
      allLayoutDataRef.current.components
    );
  }, []);
  (0,react.useEffect)(() => {
    const componentsDataStructure2 = Object.keys(allLayoutData.components).reduce((acc, current) => {
      const defaultComponentForm = utils_createDefaultForm(
        get_default()(allLayoutData, ["components", current, "attributes"], {}),
        allLayoutData.components
      );
      acc[current] = (0,helper_plugin.formatContentTypeData)(
        defaultComponentForm,
        allLayoutData.components[current],
        allLayoutData.components
      );
      return acc;
    }, {});
    const contentTypeDataStructure2 = utils_createDefaultForm(
      allLayoutData.contentType.attributes,
      allLayoutData.components
    );
    const contentTypeDataStructureFormatted = (0,helper_plugin.formatContentTypeData)(
      contentTypeDataStructure2,
      allLayoutData.contentType,
      allLayoutData.components
    );
    dispatch(setDataStructures(componentsDataStructure2, contentTypeDataStructureFormatted));
  }, [allLayoutData, dispatch]);
  (0,react.useEffect)(() => {
    return () => {
      dispatch(actions_resetProps());
    };
  }, [dispatch]);
  (0,react.useEffect)(() => {
    const CancelToken = axios/* default.CancelToken */.Z.CancelToken;
    const source = CancelToken.source();
    const fetchData = async (source2) => {
      dispatch(getData());
      try {
        const { data: data2 } = await fetchClient.get(requestURL, { cancelToken: source2.token });
        dispatch(getDataSucceeded(cleanReceivedData(cleanClonedData(data2))));
      } catch (err) {
        if (axios/* default.isCancel */.Z.isCancel(err)) {
          return;
        }
        const resStatus = get_default()(err, "response.status", null);
        if (resStatus === 404) {
          push(redirectionLink);
          return;
        }
        if (resStatus === 403) {
          toggleNotification({
            type: "info",
            message: { id: utils_getTrad("permissions.not-allowed.update") }
          });
          push(redirectionLink);
        }
      }
    };
    const init = async () => {
      await dispatch(getData());
      await dispatch(initForm(rawQuery));
    };
    if (!isMounted.current) {
      return () => {
      };
    }
    if (requestURL) {
      fetchData(source);
    } else {
      init();
    }
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [
    fetchClient,
    cleanClonedData,
    cleanReceivedData,
    push,
    requestURL,
    dispatch,
    rawQuery,
    redirectionLink,
    toggleNotification
  ]);
  const displayErrors = (0,react.useCallback)(
    (err) => {
      toggleNotification({ type: "warning", message: formatAPIError(err) });
    },
    [toggleNotification, formatAPIError]
  );
  const onDelete = (0,react.useCallback)(
    async (trackerProperty) => {
      try {
        trackUsageRef.current("willDeleteEntry", trackerProperty);
        const { data: data2 } = await del(utils_getRequestUrl(`collection-types/${slug}/${id}`));
        toggleNotification({
          type: "success",
          message: { id: utils_getTrad("success.record.delete") }
        });
        trackUsageRef.current("didDeleteEntry", trackerProperty);
        return Promise.resolve(data2);
      } catch (err) {
        trackUsageRef.current("didNotDeleteEntry", { error: err, ...trackerProperty });
        return Promise.reject(err);
      }
    },
    [id, slug, toggleNotification, del]
  );
  const onDeleteSucceeded = (0,react.useCallback)(() => {
    replace(redirectionLink);
  }, [redirectionLink, replace]);
  const onPost = (0,react.useCallback)(
    async (body, trackerProperty) => {
      const endPoint = `${utils_getRequestUrl(`collection-types/${slug}`)}${rawQuery}`;
      try {
        dispatch(setStatus("submit-pending"));
        const { data: data2 } = await post(endPoint, body);
        trackUsageRef.current("didCreateEntry", trackerProperty);
        toggleNotification({
          type: "success",
          message: { id: utils_getTrad("success.record.save") }
        });
        setCurrentStep("contentManager.success");
        queryClient.invalidateQueries(["relation"]);
        dispatch(submitSucceeded(cleanReceivedData(data2)));
        dispatch(setStatus("resolved"));
        replace(`/content-manager/collectionType/${slug}/${data2.id}${rawQuery}`);
        return Promise.resolve(data2);
      } catch (err) {
        displayErrors(err);
        trackUsageRef.current("didNotCreateEntry", { error: err, trackerProperty });
        dispatch(setStatus("resolved"));
        return Promise.reject(err);
      }
    },
    [
      cleanReceivedData,
      displayErrors,
      replace,
      slug,
      dispatch,
      rawQuery,
      toggleNotification,
      setCurrentStep,
      queryClient,
      post
    ]
  );
  const onDraftRelationCheck = (0,react.useCallback)(async () => {
    try {
      trackUsageRef.current("willCheckDraftRelations");
      const endPoint = utils_getRequestUrl(
        `collection-types/${slug}/${id}/actions/numberOfDraftRelations`
      );
      dispatch(setStatus("draft-relation-check-pending"));
      const numberOfDraftRelations = await fetchClient.get(endPoint);
      trackUsageRef.current("didCheckDraftRelations");
      dispatch(setStatus("resolved"));
      return numberOfDraftRelations.data.data;
    } catch (err) {
      displayErrors(err);
      dispatch(setStatus("resolved"));
      return Promise.reject(err);
    }
  }, [displayErrors, id, slug, dispatch, fetchClient]);
  const onPublish = (0,react.useCallback)(async () => {
    try {
      trackUsageRef.current("willPublishEntry");
      const endPoint = utils_getRequestUrl(`collection-types/${slug}/${id}/actions/publish`);
      dispatch(setStatus("publish-pending"));
      const { data: data2 } = await post(endPoint);
      trackUsageRef.current("didPublishEntry");
      dispatch(submitSucceeded(cleanReceivedData(data2)));
      dispatch(setStatus("resolved"));
      toggleNotification({
        type: "success",
        message: { id: utils_getTrad("success.record.publish") }
      });
      return Promise.resolve(data2);
    } catch (err) {
      displayErrors(err);
      dispatch(setStatus("resolved"));
      return Promise.reject(err);
    }
  }, [cleanReceivedData, displayErrors, id, slug, dispatch, toggleNotification, post]);
  const onPut = (0,react.useCallback)(
    async (body, trackerProperty) => {
      const endPoint = utils_getRequestUrl(`collection-types/${slug}/${id}`);
      try {
        trackUsageRef.current("willEditEntry", trackerProperty);
        dispatch(setStatus("submit-pending"));
        const { data: data2 } = await put(endPoint, body);
        trackUsageRef.current("didEditEntry", { trackerProperty });
        toggleNotification({
          type: "success",
          message: { id: utils_getTrad("success.record.save") }
        });
        queryClient.invalidateQueries(["relation"]);
        dispatch(submitSucceeded(cleanReceivedData(data2)));
        dispatch(setStatus("resolved"));
        return Promise.resolve(data2);
      } catch (err) {
        trackUsageRef.current("didNotEditEntry", { error: err, trackerProperty });
        displayErrors(err);
        dispatch(setStatus("resolved"));
        return Promise.reject(err);
      }
    },
    [cleanReceivedData, displayErrors, slug, id, dispatch, toggleNotification, queryClient, put]
  );
  const onUnpublish = (0,react.useCallback)(async () => {
    const endPoint = utils_getRequestUrl(`collection-types/${slug}/${id}/actions/unpublish`);
    dispatch(setStatus("unpublish-pending"));
    try {
      trackUsageRef.current("willUnpublishEntry");
      const { data: data2 } = await post(endPoint);
      trackUsageRef.current("didUnpublishEntry");
      toggleNotification({
        type: "success",
        message: { id: utils_getTrad("success.record.unpublish") }
      });
      dispatch(submitSucceeded(cleanReceivedData(data2)));
      dispatch(setStatus("resolved"));
      return Promise.resolve(data2);
    } catch (err) {
      dispatch(setStatus("resolved"));
      displayErrors(err);
      return Promise.reject(err);
    }
  }, [cleanReceivedData, displayErrors, id, slug, dispatch, toggleNotification, post]);
  return children({
    componentsDataStructure,
    contentTypeDataStructure,
    data,
    isCreatingEntry,
    isLoadingForData: isLoading,
    onDelete,
    onDeleteSucceeded,
    onPost,
    onPublish,
    onDraftRelationCheck,
    onPut,
    onUnpublish,
    status,
    redirectionLink
  });
};
CollectionTypeFormWrapper.defaultProps = {
  id: null,
  origin: null
};
CollectionTypeFormWrapper.propTypes = {
  allLayoutData: prop_types_default().exact({
    components: (prop_types_default()).object.isRequired,
    contentType: prop_types_default().shape({
      apiID: (prop_types_default()).string.isRequired,
      attributes: (prop_types_default()).object.isRequired,
      info: (prop_types_default()).object.isRequired,
      isDisplayed: (prop_types_default()).bool.isRequired,
      kind: (prop_types_default()).string.isRequired,
      layouts: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      options: (prop_types_default()).object.isRequired,
      pluginOptions: (prop_types_default()).object,
      settings: (prop_types_default()).object.isRequired,
      uid: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired,
  children: (prop_types_default()).func.isRequired,
  id: (prop_types_default()).string,
  origin: (prop_types_default()).string,
  slug: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_CollectionTypeFormWrapper = ((0,react.memo)(CollectionTypeFormWrapper, (react_fast_compare_default())));

// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
// EXTERNAL MODULE: ./node_modules/lodash/unset.js
var unset = __webpack_require__(98601);
var unset_default = /*#__PURE__*/__webpack_require__.n(unset);
// EXTERNAL MODULE: ./node_modules/lodash/uniqBy.js
var uniqBy = __webpack_require__(45578);
var uniqBy_default = /*#__PURE__*/__webpack_require__.n(uniqBy);
// EXTERNAL MODULE: ./node_modules/fractional-indexing/src/index.js
var src = __webpack_require__(38190);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/utils/moveFields.js
const moveFields = (initialValue, from, to, value) => {
  const returnedValue = initialValue.slice();
  returnedValue.splice(from, 1);
  returnedValue.splice(to, 0, value);
  return returnedValue;
};
/* harmony default export */ const utils_moveFields = (moveFields);

// EXTERNAL MODULE: ./node_modules/lodash/isArray.js
var isArray = __webpack_require__(1469);
var isArray_default = /*#__PURE__*/__webpack_require__.n(isArray);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/utils/cleanData.js




const cleanData = ({ browserState, serverState }, currentSchema, componentsSchema) => {
  const rootServerState = serverState;
  const rootBrowserState = browserState;
  const getType = (schema, attrName) => get_default()(schema, ["attributes", attrName, "type"], "");
  const getOtherInfos = (schema, arr) => get_default()(schema, ["attributes", ...arr], "");
  const recursiveCleanData = (browserState2, serverState2, schema, pathToParent) => {
    return Object.keys(browserState2).reduce((acc, current) => {
      const path = pathToParent ? `${pathToParent}.${current}` : current;
      const attrType = getType(schema, current);
      const value = get_default()(browserState2, current);
      const oldValue = get_default()(serverState2, current);
      const component = getOtherInfos(schema, [current, "component"]);
      const isRepeatable = getOtherInfos(schema, [current, "repeatable"]);
      let cleanedData;
      switch (attrType) {
        case "json":
          cleanedData = JSON.parse(value);
          break;
        case "time": {
          cleanedData = value;
          if (value && value.split(":").length < 3) {
            cleanedData = `${value}:00`;
          }
          break;
        }
        case "media":
          if (getOtherInfos(schema, [current, "multiple"]) === true) {
            cleanedData = value ? value.filter((file) => !(file instanceof File)) : null;
          } else {
            cleanedData = get_default()(value, 0) instanceof File ? null : get_default()(value, "id", null);
          }
          break;
        case "component":
          if (isRepeatable) {
            cleanedData = value ? value.map((data, index) => {
              const subCleanedData = recursiveCleanData(
                data,
                (oldValue ?? [])[index],
                componentsSchema[component],
                `${path}.${index}`
              );
              return subCleanedData;
            }) : value;
          } else {
            cleanedData = value ? recursiveCleanData(value, oldValue, componentsSchema[component], path) : value;
          }
          break;
        case "relation": {
          const trueInitialDataPath = getInitialDataPathUsingTempKeys(
            rootServerState,
            rootBrowserState
          )(path).join(".");
          let actualOldValue = get_default()(rootServerState, trueInitialDataPath, []);
          const connectedRelations = value.reduce((acc2, relation, currentIndex, array) => {
            const relationOnServer = actualOldValue.find(
              (oldRelation) => oldRelation.id === relation.id
            );
            const relationInFront = array[currentIndex + 1];
            if (!relationOnServer || relationOnServer.__temp_key__ !== relation.__temp_key__) {
              const position = relationInFront ? { before: relationInFront.id } : { end: true };
              return [...acc2, { id: relation.id, position }];
            }
            return acc2;
          }, []);
          const disconnectedRelations = actualOldValue.reduce((acc2, relation) => {
            if (!value.find((newRelation) => newRelation.id === relation.id)) {
              return [...acc2, { id: relation.id }];
            }
            return acc2;
          }, []);
          cleanedData = {
            disconnect: disconnectedRelations,
            /**
             * Reverse the array because the API sequentially goes through the list
             * so in an instance where you add two to the end it would fail because index0
             * would want to attach itself to index1 which doesn't exist yet.
             */
            connect: connectedRelations.reverse()
          };
          break;
        }
        case "dynamiczone":
          cleanedData = value.map((componentData, index) => {
            const subCleanedData = recursiveCleanData(
              componentData,
              (oldValue ?? [])[index],
              componentsSchema[componentData.__component],
              `${path}.${index}`
            );
            return subCleanedData;
          });
          break;
        default:
          cleanedData = helperCleanData(value, "id");
      }
      acc[current] = cleanedData;
      return acc;
    }, {});
  };
  return recursiveCleanData(browserState, serverState, currentSchema, "");
};
const helperCleanData = (value, key) => {
  if (isArray_default()(value)) {
    return value.map((obj) => obj[key] ? obj[key] : obj);
  }
  if (isObject_default()(value)) {
    return value[key];
  }
  return value;
};
/* harmony default export */ const utils_cleanData = (cleanData);

// EXTERNAL MODULE: ./node_modules/lodash/isBoolean.js
var isBoolean = __webpack_require__(51584);
var isBoolean_default = /*#__PURE__*/__webpack_require__.n(isBoolean);
// EXTERNAL MODULE: ./node_modules/lodash/isNaN.js
var lodash_isNaN = __webpack_require__(7654);
var isNaN_default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN);
// EXTERNAL MODULE: ./node_modules/lodash/toNumber.js
var toNumber = __webpack_require__(14841);
var toNumber_default = /*#__PURE__*/__webpack_require__.n(toNumber);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/utils/isFieldTypeNumber.js
function isFieldTypeNumber(type) {
  return ["integer", "biginteger", "decimal", "float", "number"].includes(type);
}

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/utils/schema.js








yup_lib/* addMethod */.kM(yup_lib/* mixed */.nK, "defined", function() {
  return this.test("defined", helper_plugin.translatedErrors.required, (value) => value !== void 0);
});
yup_lib/* addMethod */.kM(yup_lib/* array */.IX, "notEmptyMin", function(min) {
  return this.test("notEmptyMin", helper_plugin.translatedErrors.min, (value) => {
    if (isEmpty_default()(value)) {
      return true;
    }
    return value.length >= min;
  });
});
yup_lib/* addMethod */.kM(yup_lib/* string */.Z_, "isInferior", function(message, max) {
  return this.test("isInferior", message, function(value) {
    if (!value) {
      return true;
    }
    if (Number.isNaN(toNumber_default()(value))) {
      return true;
    }
    return toNumber_default()(max) >= toNumber_default()(value);
  });
});
yup_lib/* addMethod */.kM(yup_lib/* string */.Z_, "isSuperior", function(message, min) {
  return this.test("isSuperior", message, function(value) {
    if (!value) {
      return true;
    }
    if (Number.isNaN(toNumber_default()(value))) {
      return true;
    }
    return toNumber_default()(value) >= toNumber_default()(min);
  });
});
const getAttributes = (data) => get_default()(data, ["attributes"], {});
const createYupSchema = (model, { components }, options = { isCreatingEntry: true, isDraft: true, isFromComponent: false }) => {
  const attributes = getAttributes(model);
  return yup_lib/* object */.Ry().shape(
    Object.keys(attributes).reduce((acc, current) => {
      const attribute = attributes[current];
      if (attribute.type !== "relation" && attribute.type !== "component" && attribute.type !== "dynamiczone") {
        const formatted = createYupSchemaAttribute(attribute.type, attribute, options);
        acc[current] = formatted;
      }
      if (attribute.type === "relation") {
        acc[current] = [
          "oneWay",
          "oneToOne",
          "manyToOne",
          "oneToManyMorph",
          "oneToOneMorph"
        ].includes(attribute.relationType) ? yup_lib/* object */.Ry().nullable() : yup_lib/* array */.IX().nullable();
      }
      if (attribute.type === "component") {
        const componentFieldSchema = createYupSchema(
          components[attribute.component],
          {
            components
          },
          { ...options, isFromComponent: true }
        );
        if (attribute.repeatable === true) {
          const { min, max, required } = attribute;
          let componentSchema2 = yup_lib/* lazy */.Vo((value) => {
            let baseSchema = yup_lib/* array */.IX().of(componentFieldSchema);
            if (min) {
              if (required) {
                baseSchema = baseSchema.min(min, helper_plugin.translatedErrors.min);
              } else if (required !== true && isEmpty_default()(value)) {
                baseSchema = baseSchema.nullable();
              } else {
                baseSchema = baseSchema.min(min, helper_plugin.translatedErrors.min);
              }
            } else if (required && !options.isDraft) {
              baseSchema = baseSchema.min(1, helper_plugin.translatedErrors.required);
            }
            if (max) {
              baseSchema = baseSchema.max(max, helper_plugin.translatedErrors.max);
            }
            return baseSchema;
          });
          acc[current] = componentSchema2;
          return acc;
        }
        const componentSchema = yup_lib/* lazy */.Vo((obj) => {
          if (obj !== void 0) {
            return attribute.required === true && !options.isDraft ? componentFieldSchema.defined() : componentFieldSchema.nullable();
          }
          return attribute.required === true ? yup_lib/* object */.Ry().defined() : yup_lib/* object */.Ry().nullable();
        });
        acc[current] = componentSchema;
        return acc;
      }
      if (attribute.type === "dynamiczone") {
        let dynamicZoneSchema = yup_lib/* array */.IX().of(
          yup_lib/* lazy */.Vo(({ __component }) => {
            return createYupSchema(
              components[__component],
              { components },
              { ...options, isFromComponent: true }
            );
          })
        );
        const { max, min } = attribute;
        if (min) {
          if (attribute.required) {
            dynamicZoneSchema = dynamicZoneSchema.test("min", helper_plugin.translatedErrors.min, (value) => {
              if (options.isCreatingEntry) {
                return value && value.length >= min;
              }
              if (value === void 0) {
                return true;
              }
              return value !== null && value.length >= min;
            }).test("required", helper_plugin.translatedErrors.required, (value) => {
              if (options.isCreatingEntry) {
                return value !== null || value !== void 0;
              }
              if (value === void 0) {
                return true;
              }
              return value !== null;
            });
          } else {
            dynamicZoneSchema = dynamicZoneSchema.notEmptyMin(min);
          }
        } else if (attribute.required && !options.isDraft) {
          dynamicZoneSchema = dynamicZoneSchema.test("required", helper_plugin.translatedErrors.required, (value) => {
            if (options.isCreatingEntry) {
              return value !== null || value !== void 0;
            }
            if (value === void 0) {
              return true;
            }
            return value !== null;
          });
        }
        if (max) {
          dynamicZoneSchema = dynamicZoneSchema.max(max, helper_plugin.translatedErrors.max);
        }
        acc[current] = dynamicZoneSchema;
      }
      return acc;
    }, {})
  );
};
const createYupSchemaAttribute = (type, validations, options) => {
  let schema = yup_lib/* mixed */.nK();
  if (["string", "uid", "text", "richtext", "email", "password", "enumeration"].includes(type)) {
    schema = yup_lib/* string */.Z_();
  }
  if (type === "json") {
    schema = yup_lib/* mixed */.nK(helper_plugin.translatedErrors.json).test("isJSON", helper_plugin.translatedErrors.json, (value) => {
      if (!value || !value.length) {
        return true;
      }
      try {
        JSON.parse(value);
        return true;
      } catch (err) {
        return false;
      }
    }).nullable().test("required", helper_plugin.translatedErrors.required, (value) => {
      if (validations.required && (!value || !value.length)) {
        return false;
      }
      return true;
    });
  }
  if (type === "email") {
    schema = schema.email(helper_plugin.translatedErrors.email);
  }
  if (["number", "integer", "float", "decimal"].includes(type)) {
    schema = yup_lib/* number */.Rx().transform((cv) => isNaN_default()(cv) ? void 0 : cv).typeError();
  }
  if (type === "biginteger") {
    schema = yup_lib/* string */.Z_().matches(/^-?\d*$/);
  }
  if (["date", "datetime"].includes(type)) {
    schema = yup_lib/* date */.hT();
  }
  Object.keys(validations).forEach((validation) => {
    const validationValue = validations[validation];
    if (!!validationValue || !isBoolean_default()(validationValue) && Number.isInteger(Math.floor(validationValue)) || validationValue === 0) {
      switch (validation) {
        case "required": {
          if (!options.isDraft) {
            if (type === "password" && options.isCreatingEntry) {
              schema = schema.required(helper_plugin.translatedErrors.required);
            }
            if (type !== "password") {
              if (options.isCreatingEntry) {
                schema = schema.required(helper_plugin.translatedErrors.required);
              } else {
                schema = schema.test("required", helper_plugin.translatedErrors.required, (value) => {
                  if (value === void 0 && !options.isFromComponent) {
                    return true;
                  }
                  if (isFieldTypeNumber(type)) {
                    if (value === 0) {
                      return true;
                    }
                    return !!value;
                  }
                  if (type === "boolean") {
                    return value !== null && value !== void 0;
                  }
                  if (type === "date" || type === "datetime") {
                    if (typeof value === "string") {
                      return !isEmpty_default()(value);
                    }
                    return !isEmpty_default()(value?.toString());
                  }
                  return !isEmpty_default()(value);
                });
              }
            }
          }
          break;
        }
        case "max": {
          if (type === "biginteger") {
            schema = schema.isInferior(helper_plugin.translatedErrors.max, validationValue);
          } else {
            schema = schema.max(validationValue, helper_plugin.translatedErrors.max);
          }
          break;
        }
        case "maxLength":
          schema = schema.max(validationValue, helper_plugin.translatedErrors.maxLength);
          break;
        case "min": {
          if (type === "biginteger") {
            schema = schema.isSuperior(helper_plugin.translatedErrors.min, validationValue);
          } else {
            schema = schema.min(validationValue, helper_plugin.translatedErrors.min);
          }
          break;
        }
        case "minLength": {
          if (!options.isDraft) {
            schema = schema.min(validationValue, helper_plugin.translatedErrors.minLength);
          }
          break;
        }
        case "regex":
          schema = schema.matches(new RegExp(validationValue), {
            message: helper_plugin.translatedErrors.regex,
            excludeEmptyString: !validations.required
          });
          break;
        case "lowercase":
          if (["text", "textarea", "email", "string"].includes(type)) {
            schema = schema.strict().lowercase();
          }
          break;
        case "uppercase":
          if (["text", "textarea", "email", "string"].includes(type)) {
            schema = schema.strict().uppercase();
          }
          break;
        case "positive":
          if (isFieldTypeNumber(type)) {
            schema = schema.positive();
          }
          break;
        case "negative":
          if (isFieldTypeNumber(type)) {
            schema = schema.negative();
          }
          break;
        default:
          schema = schema.nullable();
      }
    }
  });
  return schema;
};
/* harmony default export */ const utils_schema = (createYupSchema);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/utils/findAllAndReplace.js
const findAllAndReplaceSetup = (components, predicate = () => false, replacement = void 0) => {
  const findAllAndReplace = (data, attributes, { ignoreFalseyValues = false, path = [] } = {}) => {
    return Object.entries(attributes).reduce(
      (acc, [key, value]) => {
        if (ignoreFalseyValues && (acc === null || acc === void 0 || acc[key] === void 0 || acc[key] === null)) {
          return acc;
        }
        if (predicate(value, { path: [...path, key], parent: acc })) {
          acc[key] = typeof replacement === "function" ? replacement(acc[key], { path: [...path, key], parent: acc }) : replacement;
        }
        if (value.type === "component") {
          const componentAttributes = components[value.component].attributes;
          if (!value.repeatable) {
            acc[key] = findAllAndReplace(acc[key], componentAttributes, {
              ignoreFalseyValues,
              path: [...path, key]
            });
          } else if (value.repeatable && Array.isArray(acc[key])) {
            acc[key] = acc[key].map((datum, index) => {
              const data2 = findAllAndReplace(datum, componentAttributes, {
                ignoreFalseyValues,
                path: [...path, key, index]
              });
              return data2;
            });
          }
        } else if (value.type === "dynamiczone" && Array.isArray(acc[key])) {
          acc[key] = acc[key].map((datum, index) => {
            const componentAttributes = components[datum.__component].attributes;
            const data2 = findAllAndReplace(datum, componentAttributes, {
              ignoreFalseyValues,
              path: [...path, key, index]
            });
            return data2;
          });
        }
        return acc;
      },
      { ...data }
    );
  };
  return findAllAndReplace;
};


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/utils/index.js





;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/reducer.js










const reducer_initialState = {
  componentsDataStructure: {},
  contentTypeDataStructure: {},
  formErrors: {},
  initialData: {},
  modifiedData: null,
  shouldCheckErrors: false,
  modifiedDZName: null,
  publishConfirmation: {
    show: false,
    draftCount: 0
  }
};
const reducer_reducer = (state, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer_esm["default"])(state, (draftState) => {
    switch (action.type) {
      case "ADD_NON_REPEATABLE_COMPONENT_TO_FIELD": {
        const { componentLayoutData, allComponents } = action;
        const defaultDataStructure = {
          ...state.componentsDataStructure[componentLayoutData.uid]
        };
        const findAllRelationsAndReplaceWithEmptyArray = findAllAndReplaceSetup(
          allComponents,
          (value) => value.type === "relation",
          []
        );
        const componentDataStructure = findAllRelationsAndReplaceWithEmptyArray(
          defaultDataStructure,
          componentLayoutData.attributes
        );
        set_default()(draftState, ["modifiedData", ...action.keys], componentDataStructure);
        break;
      }
      case "ADD_COMPONENT_TO_DYNAMIC_ZONE":
      case "ADD_REPEATABLE_COMPONENT_TO_FIELD": {
        const { keys, allComponents, componentLayoutData, shouldCheckErrors } = action;
        if (shouldCheckErrors) {
          draftState.shouldCheckErrors = !state.shouldCheckErrors;
        }
        if (action.type === "ADD_COMPONENT_TO_DYNAMIC_ZONE") {
          draftState.modifiedDZName = keys[0];
        }
        const currentValue = get_default()(state, ["modifiedData", ...keys], []);
        const defaultDataStructure = action.type === "ADD_COMPONENT_TO_DYNAMIC_ZONE" ? {
          ...state.componentsDataStructure[componentLayoutData.uid],
          __component: componentLayoutData.uid,
          __temp_key__: utils_getMaxTempKey(currentValue) + 1
        } : {
          ...state.componentsDataStructure[componentLayoutData.uid],
          __temp_key__: utils_getMaxTempKey(currentValue) + 1
        };
        const findAllRelationsAndReplaceWithEmptyArray = findAllAndReplaceSetup(
          allComponents,
          (value) => value.type === "relation",
          []
        );
        const componentDataStructure = findAllRelationsAndReplaceWithEmptyArray(
          defaultDataStructure,
          componentLayoutData.attributes
        );
        const newValue = Array.isArray(currentValue) ? [...currentValue, componentDataStructure] : [componentDataStructure];
        set_default()(draftState, ["modifiedData", ...keys], newValue);
        break;
      }
      case "LOAD_RELATION": {
        const { initialDataPath, modifiedDataPath, value } = action;
        const initialDataRelations = get_default()(state, initialDataPath);
        const modifiedDataRelations = get_default()(state, modifiedDataPath);
        const valuesToLoad = !initialDataRelations ? value : value.filter((relation) => {
          return !initialDataRelations.some((initialDataRelation) => {
            return initialDataRelation.id === relation.id;
          });
        });
        const keys = (0,src/* generateNKeysBetween */.zJ)(
          null,
          modifiedDataRelations[0]?.__temp_key__,
          valuesToLoad.length
        );
        const valuesWithKeys = valuesToLoad.map((relation, index) => ({
          ...relation,
          __temp_key__: keys[index]
        }));
        set_default()(
          draftState,
          initialDataPath,
          uniqBy_default()([...valuesWithKeys, ...initialDataRelations], "id")
        );
        set_default()(
          draftState,
          modifiedDataPath,
          uniqBy_default()([...valuesWithKeys, ...modifiedDataRelations], "id")
        );
        break;
      }
      case "CONNECT_RELATION": {
        const path = ["modifiedData", ...action.keys];
        const { value, toOneRelation } = action;
        if (toOneRelation) {
          set_default()(draftState, path, [value]);
        } else {
          const modifiedDataRelations = get_default()(state, path);
          const [key] = (0,src/* generateNKeysBetween */.zJ)(modifiedDataRelations.at(-1)?.__temp_key__, null, 1);
          const newRelations = [...modifiedDataRelations, { ...value, __temp_key__: key }];
          set_default()(draftState, path, newRelations);
        }
        break;
      }
      case "DISCONNECT_RELATION": {
        const path = ["modifiedData", ...action.keys];
        const { id } = action;
        const modifiedDataRelation = get_default()(state, [...path]);
        const newRelations = modifiedDataRelation.filter((rel) => rel.id !== id);
        set_default()(draftState, path, newRelations);
        break;
      }
      case "MOVE_COMPONENT_FIELD":
      case "REORDER_RELATION": {
        const { oldIndex, newIndex, keys } = action;
        const path = ["modifiedData", ...keys];
        const modifiedDataRelations = get_default()(state, [...path]);
        const currentItem = modifiedDataRelations[oldIndex];
        const newRelations = [...modifiedDataRelations];
        if (action.type === "REORDER_RELATION") {
          const [newKey] = (0,src/* generateNKeysBetween */.zJ)(
            modifiedDataRelations[newIndex - 1]?.__temp_key__,
            modifiedDataRelations[newIndex]?.__temp_key__,
            1
          );
          newRelations.splice(oldIndex, 1);
          newRelations.splice(newIndex, 0, { ...currentItem, __temp_key__: newKey });
        } else {
          newRelations.splice(oldIndex, 1);
          newRelations.splice(newIndex, 0, currentItem);
        }
        set_default()(draftState, path, newRelations);
        break;
      }
      case "INIT_FORM": {
        const { initialValues, components = {}, attributes = {}, setModifiedDataOnly } = action;
        const data = cloneDeep_default()(initialValues);
        const findAllRelationsAndReplaceWithEmptyArray = findAllAndReplaceSetup(
          components,
          (value) => value.type === "relation",
          (_, { path }) => {
            if (state.modifiedData?.id === data.id && get_default()(state.modifiedData, path)) {
              return get_default()(state.modifiedData, path);
            }
            return [];
          }
        );
        const mergedDataWithPreparedRelations = findAllRelationsAndReplaceWithEmptyArray(
          data,
          attributes
        );
        const findComponentsAndReplaceWithTempKey = findAllAndReplaceSetup(
          components,
          (value) => value.type === "dynamiczone" || value.type === "component" && !value.repeatable,
          (data2) => {
            return Array.isArray(data2) ? data2.map((datum, index) => ({
              ...datum,
              __temp_key__: index
            })) : {
              ...data2,
              __temp_key__: 0
            };
          }
        );
        const mergedDataWithTmpKeys = findComponentsAndReplaceWithTempKey(
          mergedDataWithPreparedRelations,
          attributes,
          { ignoreFalseyValues: true }
        );
        if (!setModifiedDataOnly) {
          draftState.initialData = mergedDataWithTmpKeys;
        }
        draftState.modifiedData = mergedDataWithTmpKeys;
        draftState.formErrors = {};
        draftState.modifiedDZName = null;
        draftState.shouldCheckErrors = false;
        break;
      }
      case "MOVE_COMPONENT_UP":
      case "MOVE_COMPONENT_DOWN": {
        const { currentIndex, dynamicZoneName, shouldCheckErrors } = action;
        if (shouldCheckErrors) {
          draftState.shouldCheckErrors = !state.shouldCheckErrors;
        }
        const currentValue = state.modifiedData[dynamicZoneName];
        const nextIndex = action.type === "MOVE_COMPONENT_UP" ? currentIndex - 1 : currentIndex + 1;
        const valueToInsert = state.modifiedData[dynamicZoneName][currentIndex];
        const updatedValue = utils_moveFields(currentValue, currentIndex, nextIndex, valueToInsert);
        set_default()(draftState, ["modifiedData", action.dynamicZoneName], updatedValue);
        break;
      }
      case "MOVE_FIELD": {
        const currentValue = get_default()(state, ["modifiedData", ...action.keys], []).slice();
        const valueToInsert = get_default()(state, ["modifiedData", ...action.keys, action.dragIndex]);
        const updatedValue = utils_moveFields(
          currentValue,
          action.dragIndex,
          action.overIndex,
          valueToInsert
        );
        set_default()(draftState, ["modifiedData", ...action.keys], updatedValue);
        break;
      }
      case "ON_CHANGE": {
        const [nonRepeatableComponentKey] = action.keys;
        if (action.shouldSetInitialValue) {
          set_default()(draftState, ["initialData", ...action.keys], action.value);
        }
        if (action.keys.length === 2 && get_default()(state, ["modifiedData", nonRepeatableComponentKey]) === null) {
          set_default()(draftState, ["modifiedData", nonRepeatableComponentKey], {
            [action.keys[1]]: action.value
          });
          break;
        }
        set_default()(draftState, ["modifiedData", ...action.keys], action.value);
        break;
      }
      case "REMOVE_COMPONENT_FROM_DYNAMIC_ZONE": {
        if (action.shouldCheckErrors) {
          draftState.shouldCheckErrors = !state.shouldCheckErrors;
        }
        draftState.modifiedData[action.dynamicZoneName].splice(action.index, 1);
        break;
      }
      case "REMOVE_COMPONENT_FROM_FIELD": {
        const componentPathToRemove = ["modifiedData", ...action.keys];
        set_default()(draftState, componentPathToRemove, null);
        break;
      }
      case "REMOVE_PASSWORD_FIELD": {
        unset_default()(draftState, ["modifiedData", ...action.keys]);
        break;
      }
      case "REMOVE_REPEATABLE_FIELD": {
        const keysLength = action.keys.length - 1;
        const pathToComponentData = ["modifiedData", ...take_default()(action.keys, keysLength)];
        const hasErrors = Object.keys(state.formErrors).length > 0;
        if (hasErrors) {
          draftState.shouldCheckErrors = !state.shouldCheckErrors;
        }
        const currentValue = get_default()(state, pathToComponentData).slice();
        currentValue.splice(parseInt(action.keys[keysLength], 10), 1);
        set_default()(draftState, pathToComponentData, currentValue);
        break;
      }
      case "SET_DEFAULT_DATA_STRUCTURES": {
        draftState.componentsDataStructure = action.componentsDataStructure;
        draftState.contentTypeDataStructure = action.contentTypeDataStructure;
        break;
      }
      case "SET_FORM_ERRORS": {
        draftState.modifiedDZName = null;
        draftState.formErrors = action.errors;
        break;
      }
      case "TRIGGER_FORM_VALIDATION": {
        const hasErrors = Object.keys(state.formErrors).length > 0;
        if (hasErrors) {
          draftState.shouldCheckErrors = !state.shouldCheckErrors;
        }
        break;
      }
      case "SET_PUBLISH_CONFIRMATION": {
        draftState.publishConfirmation = { ...action.publishConfirmation };
        break;
      }
      case "RESET_PUBLISH_CONFIRMATION": {
        draftState.publishConfirmation = { ...state.publishConfirmation, show: false };
        break;
      }
      default:
        return draftState;
    }
  })
);
/* harmony default export */ const EditViewDataManagerProvider_reducer = (reducer_reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/EditViewDataManagerProvider/index.js


















const EditViewDataManagerProvider = ({
  allLayoutData,
  allowedActions: { canRead, canUpdate },
  children,
  componentsDataStructure,
  contentTypeDataStructure,
  createActionAllowedFields,
  from,
  initialValues,
  isCreatingEntry,
  isLoadingForData,
  isSingleType,
  onPost,
  onPublish,
  onDraftRelationCheck,
  onPut,
  onUnpublish,
  readActionAllowedFields,
  // Not sure this is needed anymore
  redirectToPreviousPage,
  slug,
  status,
  updateActionAllowedFields
}) => {
  const [reducerState, dispatch] = (0,react.useReducer)(EditViewDataManagerProvider_reducer, reducer_initialState);
  const {
    formErrors,
    initialData,
    modifiedData,
    modifiedDZName,
    shouldCheckErrors,
    publishConfirmation
  } = reducerState;
  const { setModifiedDataOnly } = (0,lib.useSelector)(crudReducer_selectors);
  const reduxDispatch = (0,lib.useDispatch)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const { lockApp, unlockApp } = (0,helper_plugin.useOverlayBlocker)();
  const currentContentTypeLayout = get_default()(allLayoutData, ["contentType"], {});
  const hasDraftAndPublish = (0,react.useMemo)(() => {
    return get_default()(currentContentTypeLayout, ["options", "draftAndPublish"], false);
  }, [currentContentTypeLayout]);
  const shouldNotRunValidations = (0,react.useMemo)(() => {
    return hasDraftAndPublish && !initialData.publishedAt;
  }, [hasDraftAndPublish, initialData.publishedAt]);
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const shouldRedirectToHomepageWhenEditingEntry = (0,react.useMemo)(() => {
    if (isLoadingForData) {
      return false;
    }
    if (isCreatingEntry) {
      return false;
    }
    if (canRead === false && canUpdate === false) {
      return true;
    }
    return false;
  }, [isLoadingForData, isCreatingEntry, canRead, canUpdate]);
  (0,react.useEffect)(() => {
    if (status === "resolved") {
      unlockApp();
    } else {
      lockApp();
    }
  }, [lockApp, unlockApp, status]);
  (0,react.useEffect)(() => {
    if (!isLoadingForData) {
      checkFormErrors();
    }
  }, [shouldCheckErrors]);
  (0,react.useEffect)(() => {
    const errorsInForm = Object.keys(formErrors);
    if (errorsInForm.length > 0) {
      const firstError = errorsInForm[0];
      const el = document.getElementById(firstError);
      if (el) {
        el.focus();
      }
    }
  }, [formErrors]);
  (0,react.useEffect)(() => {
    if (shouldRedirectToHomepageWhenEditingEntry) {
      toggleNotification({
        type: "info",
        message: { id: utils_getTrad("permissions.not-allowed.update") }
      });
    }
  }, [shouldRedirectToHomepageWhenEditingEntry, toggleNotification]);
  (0,react.useEffect)(() => {
    dispatch({
      type: "SET_DEFAULT_DATA_STRUCTURES",
      componentsDataStructure,
      contentTypeDataStructure
    });
  }, [componentsDataStructure, contentTypeDataStructure]);
  const { components } = allLayoutData;
  const previousInitialValues = usePrev(initialValues);
  (0,react.useEffect)(() => {
    if (initialValues && currentContentTypeLayout?.attributes && !isEqual_default()(previousInitialValues, initialValues)) {
      dispatch({
        type: "INIT_FORM",
        initialValues,
        components,
        attributes: currentContentTypeLayout.attributes,
        setModifiedDataOnly
      });
      if (setModifiedDataOnly) {
        reduxDispatch(clearSetModifiedDataOnly());
      }
    }
  }, [
    initialValues,
    currentContentTypeLayout,
    components,
    setModifiedDataOnly,
    reduxDispatch,
    previousInitialValues
  ]);
  const dispatchAddComponent = (0,react.useCallback)(
    (type) => (keys, componentLayoutData, components2, shouldCheckErrors2 = false) => {
      trackUsageRef.current("didAddComponentToDynamicZone");
      dispatch({
        type,
        keys: keys.split("."),
        componentLayoutData,
        allComponents: components2,
        shouldCheckErrors: shouldCheckErrors2
      });
    },
    []
  );
  const addComponentToDynamicZone = dispatchAddComponent("ADD_COMPONENT_TO_DYNAMIC_ZONE");
  const addNonRepeatableComponentToField = (0,react.useCallback)(
    (keys, componentLayoutData, allComponents) => {
      dispatch({
        type: "ADD_NON_REPEATABLE_COMPONENT_TO_FIELD",
        keys: keys.split("."),
        componentLayoutData,
        allComponents
      });
    },
    []
  );
  const relationConnect = (0,react.useCallback)(({ name, value, toOneRelation }) => {
    dispatch({
      type: "CONNECT_RELATION",
      keys: name.split("."),
      value,
      toOneRelation
    });
  }, []);
  const relationLoad = (0,react.useCallback)(({ target: { initialDataPath, modifiedDataPath, value } }) => {
    dispatch({
      type: "LOAD_RELATION",
      modifiedDataPath,
      initialDataPath,
      value
    });
  }, []);
  const addRepeatableComponentToField = dispatchAddComponent("ADD_REPEATABLE_COMPONENT_TO_FIELD");
  const yupSchema = (0,react.useMemo)(() => {
    const options = { isCreatingEntry, isDraft: shouldNotRunValidations, isFromComponent: false };
    return utils_schema(
      currentContentTypeLayout,
      {
        components: allLayoutData.components || {}
      },
      options
    );
  }, [
    allLayoutData.components,
    currentContentTypeLayout,
    isCreatingEntry,
    shouldNotRunValidations
  ]);
  const checkFormErrors = (0,react.useCallback)(
    async (dataToSet = {}) => {
      let errors = {};
      const updatedData = cloneDeep_default()(modifiedData);
      if (!isEmpty_default()(updatedData)) {
        set_default()(updatedData, dataToSet.path, dataToSet.value);
      }
      try {
        await yupSchema.validate(updatedData, { abortEarly: false });
      } catch (err) {
        errors = (0,helper_plugin.getYupInnerErrors)(err);
        if (modifiedDZName) {
          errors = Object.keys(errors).reduce((acc, current) => {
            const dzName = current.split(".")[0];
            if (dzName !== modifiedDZName) {
              acc[current] = errors[current];
            }
            return acc;
          }, {});
        }
      }
      dispatch({
        type: "SET_FORM_ERRORS",
        errors
      });
    },
    [modifiedDZName, modifiedData, yupSchema]
  );
  const handleChange = (0,react.useCallback)(
    ({ target: { name, value, type } }, shouldSetInitialValue = false) => {
      let inputValue = value;
      if (["text", "textarea", "string", "email", "uid", "select", "select-one", "number"].includes(
        type
      ) && !value && value !== 0) {
        inputValue = null;
      }
      if (type === "password" && !value) {
        dispatch({
          type: "REMOVE_PASSWORD_FIELD",
          keys: name.split(".")
        });
        return;
      }
      dispatch({
        type: "ON_CHANGE",
        keys: name.split("."),
        value: inputValue,
        shouldSetInitialValue
      });
    },
    []
  );
  const createFormData = (0,react.useCallback)(
    (modifiedData2, initialData2) => {
      const cleanedData = utils_cleanData(
        { browserState: modifiedData2, serverState: initialData2 },
        currentContentTypeLayout,
        allLayoutData.components
      );
      return cleanedData;
    },
    [allLayoutData.components, currentContentTypeLayout]
  );
  const trackerProperty = (0,react.useMemo)(() => {
    if (!hasDraftAndPublish) {
      return {};
    }
    return shouldNotRunValidations ? { status: "draft" } : {};
  }, [hasDraftAndPublish, shouldNotRunValidations]);
  const handlePublishPromptDismissal = (0,react.useCallback)(async (e) => {
    e.preventDefault();
    return dispatch({
      type: "RESET_PUBLISH_CONFIRMATION"
    });
  }, []);
  const handleSubmit = (0,react.useCallback)(
    async (e) => {
      e.preventDefault();
      let errors = {};
      try {
        await yupSchema.validate(modifiedData, { abortEarly: false });
      } catch (err) {
        errors = (0,helper_plugin.getYupInnerErrors)(err);
      }
      try {
        if (isEmpty_default()(errors)) {
          const formData = createFormData(modifiedData, initialData);
          if (isCreatingEntry) {
            await onPost(formData, trackerProperty);
          } else {
            await onPut(formData, trackerProperty);
          }
        }
      } catch (err) {
        errors = {
          ...errors,
          ...(0,helper_plugin.getAPIInnerErrors)(err, { getTrad: utils_getTrad })
        };
      }
      dispatch({
        type: "SET_FORM_ERRORS",
        errors
      });
    },
    [
      createFormData,
      isCreatingEntry,
      modifiedData,
      initialData,
      onPost,
      onPut,
      trackerProperty,
      yupSchema
    ]
  );
  const handlePublish = (0,react.useCallback)(async () => {
    const schema = utils_schema(
      currentContentTypeLayout,
      {
        components: get_default()(allLayoutData, "components", {})
      },
      { isCreatingEntry, isDraft: false, isFromComponent: false }
    );
    const draftCount = await onDraftRelationCheck();
    if (!publishConfirmation.show && draftCount > 0) {
      dispatch({
        type: "SET_PUBLISH_CONFIRMATION",
        publishConfirmation: {
          show: true,
          draftCount
        }
      });
      return;
    }
    dispatch({
      type: "RESET_PUBLISH_CONFIRMATION"
    });
    let errors = {};
    try {
      await schema.validate(modifiedData, { abortEarly: false });
    } catch (err) {
      errors = (0,helper_plugin.getYupInnerErrors)(err);
    }
    try {
      if (isEmpty_default()(errors)) {
        await onPublish();
      }
    } catch (err) {
      errors = {
        ...errors,
        ...(0,helper_plugin.getAPIInnerErrors)(err, { getTrad: utils_getTrad })
      };
    }
    dispatch({
      type: "SET_FORM_ERRORS",
      errors
    });
  }, [
    allLayoutData,
    currentContentTypeLayout,
    isCreatingEntry,
    modifiedData,
    publishConfirmation.show,
    onPublish,
    onDraftRelationCheck
  ]);
  const shouldCheckDZErrors = (0,react.useCallback)(
    (dzName) => {
      const doesDZHaveError = Object.keys(formErrors).some((key) => key.split(".")[0] === dzName);
      const shouldCheckErrors2 = !isEmpty_default()(formErrors) && doesDZHaveError;
      return shouldCheckErrors2;
    },
    [formErrors]
  );
  const moveComponentDown = (0,react.useCallback)(
    (dynamicZoneName, currentIndex) => {
      trackUsageRef.current("changeComponentsOrder");
      dispatch({
        type: "MOVE_COMPONENT_DOWN",
        dynamicZoneName,
        currentIndex,
        shouldCheckErrors: shouldCheckDZErrors(dynamicZoneName)
      });
    },
    [shouldCheckDZErrors]
  );
  const moveComponentUp = (0,react.useCallback)(
    (dynamicZoneName, currentIndex) => {
      trackUsageRef.current("changeComponentsOrder");
      dispatch({
        type: "MOVE_COMPONENT_UP",
        dynamicZoneName,
        currentIndex,
        shouldCheckErrors: shouldCheckDZErrors(dynamicZoneName)
      });
    },
    [shouldCheckDZErrors]
  );
  const moveComponentField = (0,react.useCallback)(({ name, newIndex, currentIndex }) => {
    dispatch({
      type: "MOVE_COMPONENT_FIELD",
      keys: name.split("."),
      newIndex,
      oldIndex: currentIndex
    });
  }, []);
  const relationDisconnect = (0,react.useCallback)(({ name, id }) => {
    dispatch({
      type: "DISCONNECT_RELATION",
      keys: name.split("."),
      id
    });
  }, []);
  const relationReorder = (0,react.useCallback)(({ name, oldIndex, newIndex }) => {
    dispatch({
      type: "REORDER_RELATION",
      keys: name.split("."),
      oldIndex,
      newIndex
    });
  }, []);
  const removeComponentFromDynamicZone = (0,react.useCallback)(
    (dynamicZoneName, index) => {
      trackUsageRef.current("removeComponentFromDynamicZone");
      dispatch({
        type: "REMOVE_COMPONENT_FROM_DYNAMIC_ZONE",
        dynamicZoneName,
        index,
        shouldCheckErrors: shouldCheckDZErrors(dynamicZoneName)
      });
    },
    [shouldCheckDZErrors]
  );
  const removeComponentFromField = (0,react.useCallback)((keys, componentUid) => {
    dispatch({
      type: "REMOVE_COMPONENT_FROM_FIELD",
      keys: keys.split("."),
      componentUid
    });
  }, []);
  const removeRepeatableField = (0,react.useCallback)((keys, componentUid) => {
    dispatch({
      type: "REMOVE_REPEATABLE_FIELD",
      keys: keys.split("."),
      componentUid
    });
  }, []);
  const triggerFormValidation = (0,react.useCallback)(() => {
    dispatch({
      type: "TRIGGER_FORM_VALIDATION"
    });
  }, []);
  if (shouldRedirectToHomepageWhenEditingEntry) {
    return /* @__PURE__ */ react.createElement(react_router_dom_min.Redirect, { to: from });
  }
  if (!modifiedData) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(
    helper_plugin.ContentManagerEditViewDataManagerContext.Provider,
    {
      value: {
        addComponentToDynamicZone,
        addNonRepeatableComponentToField,
        addRepeatableComponentToField,
        allLayoutData,
        checkFormErrors,
        createActionAllowedFields,
        formErrors,
        hasDraftAndPublish,
        initialData,
        isCreatingEntry,
        isSingleType,
        shouldNotRunValidations,
        status,
        layout: currentContentTypeLayout,
        modifiedData,
        moveComponentField,
        /**
         * @deprecated use `moveComponentField` instead. This will be removed in v5.
         */
        moveComponentDown,
        /**
         * @deprecated use `moveComponentField` instead. This will be removed in v5.
         */
        moveComponentUp,
        onChange: handleChange,
        onPublish: handlePublish,
        onUnpublish,
        readActionAllowedFields,
        redirectToPreviousPage,
        removeComponentFromDynamicZone,
        removeComponentFromField,
        removeRepeatableField,
        relationConnect,
        relationDisconnect,
        relationLoad,
        relationReorder,
        slug,
        triggerFormValidation,
        updateActionAllowedFields,
        onPublishPromptDismissal: handlePublishPromptDismissal,
        publishConfirmation
      }
    },
    isLoadingForData || !isCreatingEntry && !initialData.id ? /* @__PURE__ */ react.createElement(dist.Main, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null)) : /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
      react_router_dom_min.Prompt,
      {
        when: !isEqual_default()(modifiedData, initialData),
        message: formatMessage({ id: "global.prompt.unsaved" })
      }
    ), /* @__PURE__ */ react.createElement("form", { noValidate: true, onSubmit: handleSubmit }, children))
  );
};
EditViewDataManagerProvider.defaultProps = {
  from: "/",
  initialValues: null,
  redirectToPreviousPage() {
  }
};
EditViewDataManagerProvider.propTypes = {
  allLayoutData: (prop_types_default()).object.isRequired,
  allowedActions: (prop_types_default()).object.isRequired,
  children: (prop_types_default()).node.isRequired,
  componentsDataStructure: (prop_types_default()).object.isRequired,
  contentTypeDataStructure: (prop_types_default()).object.isRequired,
  createActionAllowedFields: (prop_types_default()).array.isRequired,
  from: (prop_types_default()).string,
  initialValues: (prop_types_default()).object,
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  isLoadingForData: (prop_types_default()).bool.isRequired,
  isSingleType: (prop_types_default()).bool.isRequired,
  onPost: (prop_types_default()).func.isRequired,
  onPublish: (prop_types_default()).func.isRequired,
  onDraftRelationCheck: (prop_types_default()).func.isRequired,
  onPut: (prop_types_default()).func.isRequired,
  onUnpublish: (prop_types_default()).func.isRequired,
  readActionAllowedFields: (prop_types_default()).array.isRequired,
  redirectToPreviousPage: (prop_types_default()).func,
  slug: (prop_types_default()).string.isRequired,
  status: (prop_types_default()).string.isRequired,
  updateActionAllowedFields: (prop_types_default()).array.isRequired
};
/* harmony default export */ const components_EditViewDataManagerProvider = (EditViewDataManagerProvider);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/SingleTypeFormWrapper/utils/getRequestUrl.js

const requestURL = (path) => utils_getRequestUrl(`single-types/${path}`);
/* harmony default export */ const SingleTypeFormWrapper_utils_getRequestUrl = (requestURL);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/SingleTypeFormWrapper/utils/index.js


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/utils/createPluginsFilter.js
const createPluginsFilter = (obj) => Object.values(obj || {}).reduce((acc, current) => Object.assign(acc, current), {});
/* harmony default export */ const utils_createPluginsFilter = (createPluginsFilter);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/utils/buildQueryString.js



const buildQueryString = (queryParams = {}) => {
  const {
    plugins: _,
    _q: query,
    ...otherQueryParams
  } = {
    ...queryParams,
    ...utils_createPluginsFilter(queryParams.plugins)
  };
  if (query) {
    set_default()(otherQueryParams, `_q`, encodeURIComponent(query));
  }
  return `${(0,qs_lib.stringify)(otherQueryParams, {
    encode: false,
    addQueryPrefix: true
  })}`;
};
/* harmony default export */ const utils_buildQueryString = (buildQueryString);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/SingleTypeFormWrapper/index.js













const SingleTypeFormWrapper = ({ allLayoutData, children, slug }) => {
  const queryClient = (0,react_query_lib.useQueryClient)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const { push } = (0,react_router_dom_min.useHistory)();
  const { setCurrentStep } = (0,helper_plugin.useGuidedTour)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const [isCreatingEntry, setIsCreatingEntry] = (0,react.useState)(true);
  const [{ query, rawQuery }] = (0,helper_plugin.useQueryParams)();
  const searchToSend = utils_buildQueryString(query);
  const toggleNotification = (0,helper_plugin.useNotification)();
  const dispatch = (0,lib.useDispatch)();
  const { formatAPIError } = (0,helper_plugin.useAPIErrorHandler)(utils_getTrad);
  const fetchClient = (0,helper_plugin.useFetchClient)();
  const { post, put, del } = fetchClient;
  const { componentsDataStructure, contentTypeDataStructure, data, isLoading, status } = (0,lib.useSelector)(crudReducer_selectors);
  const cleanReceivedData = (0,react.useCallback)(
    (data2) => {
      const cleaned = utils_removePasswordFieldsFromData(
        data2,
        allLayoutData.contentType,
        allLayoutData.components
      );
      return (0,helper_plugin.formatContentTypeData)(cleaned, allLayoutData.contentType, allLayoutData.components);
    },
    [allLayoutData]
  );
  (0,react.useEffect)(() => {
    return () => {
      dispatch(actions_resetProps());
    };
  }, [dispatch]);
  (0,react.useEffect)(() => {
    const componentsDataStructure2 = Object.keys(allLayoutData.components).reduce((acc, current) => {
      const defaultComponentForm = utils_createDefaultForm(
        get_default()(allLayoutData, ["components", current, "attributes"], {}),
        allLayoutData.components
      );
      acc[current] = (0,helper_plugin.formatContentTypeData)(
        defaultComponentForm,
        allLayoutData.components[current],
        allLayoutData.components
      );
      return acc;
    }, {});
    const contentTypeDataStructure2 = utils_createDefaultForm(
      allLayoutData.contentType.attributes,
      allLayoutData.components
    );
    const contentTypeDataStructureFormatted = (0,helper_plugin.formatContentTypeData)(
      contentTypeDataStructure2,
      allLayoutData.contentType,
      allLayoutData.components
    );
    dispatch(setDataStructures(componentsDataStructure2, contentTypeDataStructureFormatted));
  }, [allLayoutData, dispatch]);
  (0,react.useEffect)(() => {
    const CancelToken = axios/* default.CancelToken */.Z.CancelToken;
    const source = CancelToken.source();
    const fetchData = async (source2) => {
      dispatch(getData());
      setIsCreatingEntry(true);
      try {
        const { data: data2 } = await fetchClient.get(SingleTypeFormWrapper_utils_getRequestUrl(`${slug}${searchToSend}`), {
          cancelToken: source2.token
        });
        dispatch(getDataSucceeded(cleanReceivedData(data2)));
        setIsCreatingEntry(false);
      } catch (err) {
        if (axios/* default.isCancel */.Z.isCancel(err)) {
          return;
        }
        const responseStatus = get_default()(err, "response.status", null);
        if (responseStatus === 404) {
          dispatch(initForm(rawQuery, true));
        }
        if (responseStatus === 403) {
          toggleNotification({
            type: "info",
            message: { id: utils_getTrad("permissions.not-allowed.update") }
          });
          push("/");
        }
      }
    };
    fetchData(source);
    return () => source.cancel("Operation canceled by the user.");
  }, [
    fetchClient,
    cleanReceivedData,
    push,
    slug,
    dispatch,
    searchToSend,
    rawQuery,
    toggleNotification
  ]);
  const displayErrors = (0,react.useCallback)(
    (err) => {
      toggleNotification({ type: "warning", message: formatAPIError(err) });
    },
    [toggleNotification, formatAPIError]
  );
  const onDelete = (0,react.useCallback)(
    async (trackerProperty) => {
      try {
        trackUsageRef.current("willDeleteEntry", trackerProperty);
        const { data: data2 } = await del(SingleTypeFormWrapper_utils_getRequestUrl(`${slug}${searchToSend}`));
        toggleNotification({
          type: "success",
          message: { id: utils_getTrad("success.record.delete") }
        });
        trackUsageRef.current("didDeleteEntry", trackerProperty);
        return Promise.resolve(data2);
      } catch (err) {
        trackUsageRef.current("didNotDeleteEntry", { error: err, ...trackerProperty });
        displayErrors(err);
        return Promise.reject(err);
      }
    },
    [del, slug, displayErrors, toggleNotification, searchToSend]
  );
  const onDeleteSucceeded = (0,react.useCallback)(() => {
    setIsCreatingEntry(true);
    dispatch(initForm(rawQuery, true));
  }, [dispatch, rawQuery]);
  const onPost = (0,react.useCallback)(
    async (body, trackerProperty) => {
      const endPoint = SingleTypeFormWrapper_utils_getRequestUrl(`${slug}${rawQuery}`);
      try {
        dispatch(setStatus("submit-pending"));
        const { data: data2 } = await put(endPoint, body);
        trackUsageRef.current("didCreateEntry", trackerProperty);
        toggleNotification({
          type: "success",
          message: { id: utils_getTrad("success.record.save") }
        });
        setCurrentStep("contentManager.success");
        queryClient.invalidateQueries(["relation"]);
        dispatch(submitSucceeded(cleanReceivedData(data2)));
        setIsCreatingEntry(false);
        dispatch(setStatus("resolved"));
        return Promise.resolve(data2);
      } catch (err) {
        trackUsageRef.current("didNotCreateEntry", { error: err, trackerProperty });
        displayErrors(err);
        dispatch(setStatus("resolved"));
        return Promise.reject(err);
      }
    },
    [
      put,
      cleanReceivedData,
      displayErrors,
      slug,
      dispatch,
      rawQuery,
      toggleNotification,
      setCurrentStep,
      queryClient
    ]
  );
  const onDraftRelationCheck = (0,react.useCallback)(async () => {
    try {
      trackUsageRef.current("willCheckDraftRelations");
      const endPoint = SingleTypeFormWrapper_utils_getRequestUrl(`${slug}/actions/numberOfDraftRelations`);
      dispatch(setStatus("draft-relation-check-pending"));
      const numberOfDraftRelations = await fetchClient.get(endPoint);
      trackUsageRef.current("didCheckDraftRelations");
      dispatch(setStatus("resolved"));
      return numberOfDraftRelations.data.data;
    } catch (err) {
      displayErrors(err);
      dispatch(setStatus("resolved"));
      return Promise.reject(err);
    }
  }, [fetchClient, displayErrors, slug, dispatch]);
  const onPublish = (0,react.useCallback)(async () => {
    try {
      trackUsageRef.current("willPublishEntry");
      const endPoint = SingleTypeFormWrapper_utils_getRequestUrl(`${slug}/actions/publish${searchToSend}`);
      dispatch(setStatus("publish-pending"));
      const { data: data2 } = await post(endPoint);
      trackUsageRef.current("didPublishEntry");
      toggleNotification({
        type: "success",
        message: { id: utils_getTrad("success.record.publish") }
      });
      dispatch(submitSucceeded(cleanReceivedData(data2)));
      dispatch(setStatus("resolved"));
      return Promise.resolve(data2);
    } catch (err) {
      displayErrors(err);
      dispatch(setStatus("resolved"));
      return Promise.reject(err);
    }
  }, [post, cleanReceivedData, displayErrors, slug, searchToSend, dispatch, toggleNotification]);
  const onPut = (0,react.useCallback)(
    async (body, trackerProperty) => {
      const endPoint = SingleTypeFormWrapper_utils_getRequestUrl(`${slug}${rawQuery}`);
      try {
        trackUsageRef.current("willEditEntry", trackerProperty);
        dispatch(setStatus("submit-pending"));
        const { data: data2 } = await put(endPoint, body);
        toggleNotification({
          type: "success",
          message: { id: utils_getTrad("success.record.save") }
        });
        trackUsageRef.current("didEditEntry", { trackerProperty });
        queryClient.invalidateQueries(["relation"]);
        dispatch(submitSucceeded(cleanReceivedData(data2)));
        dispatch(setStatus("resolved"));
        return Promise.resolve(data2);
      } catch (err) {
        displayErrors(err);
        trackUsageRef.current("didNotEditEntry", { error: err, trackerProperty });
        dispatch(setStatus("resolved"));
        return Promise.reject(err);
      }
    },
    [
      put,
      cleanReceivedData,
      displayErrors,
      slug,
      dispatch,
      rawQuery,
      toggleNotification,
      queryClient
    ]
  );
  const onUnpublish = (0,react.useCallback)(async () => {
    const endPoint = SingleTypeFormWrapper_utils_getRequestUrl(`${slug}/actions/unpublish${searchToSend}`);
    dispatch(setStatus("unpublish-pending"));
    try {
      trackUsageRef.current("willUnpublishEntry");
      const { data: data2 } = await post(endPoint);
      trackUsageRef.current("didUnpublishEntry");
      toggleNotification({
        type: "success",
        message: { id: utils_getTrad("success.record.unpublish") }
      });
      dispatch(submitSucceeded(cleanReceivedData(data2)));
      dispatch(setStatus("resolved"));
    } catch (err) {
      dispatch(setStatus("resolved"));
      displayErrors(err);
    }
  }, [post, cleanReceivedData, toggleNotification, displayErrors, slug, dispatch, searchToSend]);
  return children({
    componentsDataStructure,
    contentTypeDataStructure,
    data,
    isCreatingEntry,
    isLoadingForData: isLoading,
    onDelete,
    onDeleteSucceeded,
    onPost,
    onDraftRelationCheck,
    onPublish,
    onPut,
    onUnpublish,
    redirectionLink: "/",
    status
  });
};
SingleTypeFormWrapper.propTypes = {
  allLayoutData: prop_types_default().shape({
    components: (prop_types_default()).object.isRequired,
    contentType: (prop_types_default()).object.isRequired
  }).isRequired,
  children: (prop_types_default()).func.isRequired,
  slug: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_SingleTypeFormWrapper = ((0,react.memo)(SingleTypeFormWrapper));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DraftAndPublishBadge/utils/connect.js

function DraftAndPublishBadge_utils_connect_connect(WrappedComponent, select) {
  return (props) => {
    const selectors = select();
    return /* @__PURE__ */ react.createElement(WrappedComponent, { ...props, ...selectors });
  };
}
/* harmony default export */ const DraftAndPublishBadge_utils_connect = (DraftAndPublishBadge_utils_connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DraftAndPublishBadge/utils/select.js

function DraftAndPublishBadge_utils_select_useSelect() {
  const { initialData, hasDraftAndPublish } = (0,helper_plugin.useCMEditViewDataManager)();
  const isPublished = initialData.publishedAt !== void 0 && initialData.publishedAt !== null;
  return {
    hasDraftAndPublish,
    isPublished
  };
}
/* harmony default export */ const DraftAndPublishBadge_utils_select = (DraftAndPublishBadge_utils_select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DraftAndPublishBadge/utils/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DraftAndPublishBadge/index.js









const CustomBullet = (0,styled_components_browser_esm["default"])(icons_dist.Dot)`
  width: ${(0,helper_plugin.pxToRem)(6)};
  height: ${(0,helper_plugin.pxToRem)(6)};
  * {
    fill: ${({ theme, $bulletColor }) => theme.colors[$bulletColor]};
  }
`;
const DraftAndPublishBadge = ({ hasDraftAndPublish, isPublished }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  if (!hasDraftAndPublish) {
    return null;
  }
  const colors = {
    draft: {
      textColor: "secondary700",
      bulletColor: "secondary600",
      box: {
        background: "secondary100",
        borderColor: "secondary200"
      }
    },
    published: {
      textColor: "success700",
      bulletColor: "success600",
      box: {
        background: "success100",
        borderColor: "success200"
      }
    }
  };
  const colorProps = isPublished ? colors.published : colors.draft;
  return /* @__PURE__ */ react.createElement(
    dist.Box,
    {
      hasRadius: true,
      as: "aside",
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 5,
      paddingRight: 5,
      ...colorProps.box
    },
    /* @__PURE__ */ react.createElement(dist.Box, { as: dist.Flex }, /* @__PURE__ */ react.createElement(CustomBullet, { $bulletColor: colorProps.bulletColor }), /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 3 }, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: colorProps.textColor }, formatMessage({
      id: utils_getTrad("containers.Edit.information.editing"),
      defaultMessage: "Editing"
    }), "\xA0"), /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "bold", textColor: colorProps.textColor }, isPublished && formatMessage({
      id: utils_getTrad("containers.Edit.information.publishedVersion"),
      defaultMessage: "published version"
    }), !isPublished && formatMessage({
      id: utils_getTrad("containers.Edit.information.draftVersion"),
      defaultMessage: "draft version"
    }))))
  );
};
DraftAndPublishBadge.propTypes = {
  hasDraftAndPublish: (prop_types_default()).bool.isRequired,
  isPublished: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const EditView_DraftAndPublishBadge = (DraftAndPublishBadge_utils_connect(DraftAndPublishBadge, DraftAndPublishBadge_utils_select));


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Information/utils/getUnits.js
const msPerMinute = 60 * 1e3;
const msPerHour = msPerMinute * 60;
const msPerDay = msPerHour * 24;
const msPerMonth = msPerDay * 30;
const msPerYear = msPerDay * 365;
const getUnits = (value) => {
  if (value < msPerMinute) {
    return { unit: "second", value: -Math.round(value / 1e3) };
  }
  if (value < msPerHour) {
    return { unit: "minute", value: -Math.round(value / msPerMinute) };
  }
  if (value < msPerDay) {
    return { unit: "hour", value: -Math.round(value / msPerHour) };
  }
  if (value < msPerMonth) {
    return { unit: "day", value: -Math.round(value / msPerDay) };
  }
  if (value < msPerYear) {
    return { unit: "month", value: -Math.round(value / msPerMonth) };
  }
  return { unit: "year", value: -Math.round(value / msPerYear) };
};
/* harmony default export */ const utils_getUnits = (getUnits);

// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 9 modules
var utils = __webpack_require__(38683);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Information/index.js








const KeyValuePair = ({ label, value }) => {
  return /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(dist.Typography, { as: "dt", fontWeight: "bold", textColor: "neutral600" }, label), /* @__PURE__ */ react.createElement(dist.Typography, { as: "dd" }, value));
};
KeyValuePair.propTypes = {
  label: (prop_types_default()).string.isRequired,
  value: (prop_types_default()).string.isRequired
};
const Information = () => {
  const { formatMessage, formatRelativeTime } = (0,react_intl.useIntl)();
  const { initialData, isCreatingEntry } = (0,helper_plugin.useCMEditViewDataManager)();
  const currentTime = (0,react.useRef)(Date.now());
  const getFieldInfo = (atField, byField) => {
    const { firstname, lastname, username } = initialData[byField] ?? {};
    const userFirstname = firstname ?? "";
    const userLastname = lastname ?? "";
    const user = username ?? (0,utils/* getFullName */.Pp)(userFirstname, userLastname);
    const timestamp = initialData[atField] ? new Date(initialData[atField]).getTime() : Date.now();
    const elapsed = timestamp - currentTime.current;
    const { unit, value } = utils_getUnits(-elapsed);
    return {
      at: formatRelativeTime(value, unit, { numeric: "auto" }),
      by: isCreatingEntry ? "-" : user
    };
  };
  const updated = getFieldInfo("updatedAt", "updatedBy");
  const created = getFieldInfo("createdAt", "createdBy");
  return /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma", textColor: "neutral600", id: "additional-information" }, formatMessage({
    id: utils_getTrad("containers.Edit.information"),
    defaultMessage: "Information"
  })), /* @__PURE__ */ react.createElement(dist.Box, { paddingBottom: 4 }, /* @__PURE__ */ react.createElement(dist.Divider, null)), /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 2, as: "dl" }, /* @__PURE__ */ react.createElement(
    KeyValuePair,
    {
      label: formatMessage({
        id: utils_getTrad("containers.Edit.information.created"),
        defaultMessage: "Created"
      }),
      value: created.at
    }
  ), /* @__PURE__ */ react.createElement(
    KeyValuePair,
    {
      label: formatMessage({
        id: utils_getTrad("containers.Edit.information.by"),
        defaultMessage: "By"
      }),
      value: created.by
    }
  )), /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 2, as: "dl" }, /* @__PURE__ */ react.createElement(
    KeyValuePair,
    {
      label: formatMessage({
        id: utils_getTrad("containers.Edit.information.lastUpdate"),
        defaultMessage: "Last update"
      }),
      value: updated.at
    }
  ), /* @__PURE__ */ react.createElement(
    KeyValuePair,
    {
      label: formatMessage({
        id: utils_getTrad("containers.Edit.information.by"),
        defaultMessage: "By"
      }),
      value: updated.by
    }
  ))));
};
/* harmony default export */ const EditView_Information = (Information);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Header/utils/connect.js

function Header_utils_connect_connect(WrappedComponent, select) {
  return (props) => {
    const selectors = select();
    return /* @__PURE__ */ react.createElement(WrappedComponent, { ...props, ...selectors });
  };
}
/* harmony default export */ const Header_utils_connect = (Header_utils_connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Header/utils/select.js

function Header_utils_select_useSelect() {
  const {
    initialData,
    isCreatingEntry,
    isSingleType,
    status,
    layout,
    hasDraftAndPublish,
    modifiedData,
    onPublish,
    onUnpublish,
    publishConfirmation,
    onPublishPromptDismissal
  } = (0,helper_plugin.useCMEditViewDataManager)();
  return {
    initialData,
    isCreatingEntry,
    isSingleType,
    status,
    layout,
    hasDraftAndPublish,
    modifiedData,
    onPublish,
    onUnpublish,
    publishConfirmation,
    onPublishPromptDismissal
  };
}
/* harmony default export */ const Header_utils_select = (Header_utils_select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Header/utils/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/Header/index.js














const FlexTextAlign = (0,styled_components_browser_esm["default"])(dist.Flex)`
  text-align: center;
`;
const Header = ({
  allowedActions: { canUpdate, canCreate, canPublish },
  initialData,
  isCreatingEntry,
  isSingleType,
  hasDraftAndPublish,
  layout,
  modifiedData,
  onPublish,
  onUnpublish,
  status,
  publishConfirmation: { show: showPublishConfirmation, draftCount },
  onPublishPromptDismissal
}) => {
  const { goBack } = (0,react_router_dom_min.useHistory)();
  const [showWarningUnpublish, setWarningUnpublish] = (0,react.useState)(false);
  const { formatMessage } = (0,react_intl.useIntl)();
  const currentContentTypeMainField = get_default()(layout, ["settings", "mainField"], "id");
  const currentContentTypeName = get_default()(layout, ["info", "displayName"], "NOT FOUND");
  const didChangeData = !isEqual_default()(initialData, modifiedData) || isCreatingEntry && !isEmpty_default()(modifiedData);
  const createEntryIntlTitle = formatMessage({
    id: utils_getTrad("containers.Edit.pluginHeader.title.new"),
    defaultMessage: "Create an entry"
  });
  let title = createEntryIntlTitle;
  if (!isCreatingEntry && !isSingleType) {
    title = initialData[currentContentTypeMainField] || currentContentTypeName;
  }
  if (isSingleType) {
    title = currentContentTypeName;
  }
  let primaryAction = null;
  if (isCreatingEntry && canCreate) {
    primaryAction = /* @__PURE__ */ react.createElement(dist.Flex, { gap: 2 }, hasDraftAndPublish && /* @__PURE__ */ react.createElement(dist.Button, { disabled: true, startIcon: /* @__PURE__ */ react.createElement(icons_dist.Check, null), variant: "secondary" }, formatMessage({ id: "app.utils.publish", defaultMessage: "Publish" })), /* @__PURE__ */ react.createElement(dist.Button, { disabled: !didChangeData, loading: status === "submit-pending", type: "submit" }, formatMessage({
      id: utils_getTrad("containers.Edit.submit"),
      defaultMessage: "Save"
    })));
  }
  if (!isCreatingEntry && canUpdate) {
    const shouldShowPublishButton = hasDraftAndPublish && canPublish;
    const isPublished = !isEmpty_default()(initialData.publishedAt);
    const isPublishButtonLoading = isPublished ? status === "unpublish-pending" : status === "publish-pending";
    const pubishButtonLabel = isPublished ? { id: "app.utils.unpublish", defaultMessage: "Unpublish" } : { id: "app.utils.publish", defaultMessage: "Publish" };
    const onClick = isPublished ? () => setWarningUnpublish(true) : () => onPublish();
    primaryAction = /* @__PURE__ */ react.createElement(dist.Flex, null, shouldShowPublishButton && /* @__PURE__ */ react.createElement(
      dist.Button,
      {
        disabled: didChangeData,
        loading: isPublishButtonLoading,
        onClick,
        startIcon: /* @__PURE__ */ react.createElement(icons_dist.Check, null),
        variant: "secondary"
      },
      formatMessage(pubishButtonLabel)
    ), /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: shouldShowPublishButton ? 2 : 0 }, /* @__PURE__ */ react.createElement(dist.Button, { disabled: !didChangeData, loading: status === "submit-pending", type: "submit" }, formatMessage({
      id: utils_getTrad("containers.Edit.submit"),
      defaultMessage: "Save"
    }))));
  }
  const toggleWarningUnpublish = () => setWarningUnpublish((prevState) => !prevState);
  const handleUnpublish = () => {
    toggleWarningUnpublish();
    onUnpublish();
  };
  const subtitle = `${formatMessage({
    id: utils_getTrad("api.id"),
    defaultMessage: "API ID "
  })} : ${layout.apiID}`;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      title: title.toString(),
      primaryAction,
      subtitle,
      navigationAction: /* @__PURE__ */ react.createElement(
        helper_plugin.Link,
        {
          startIcon: /* @__PURE__ */ react.createElement(icons_dist.ArrowLeft, null),
          onClick: (e) => {
            e.preventDefault();
            goBack();
          },
          to: "/"
        },
        formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        })
      )
    }
  ), /* @__PURE__ */ react.createElement(
    dist.Dialog,
    {
      onClose: toggleWarningUnpublish,
      title: "Confirmation",
      labelledBy: "confirmation",
      describedBy: "confirm-description",
      isOpen: showWarningUnpublish
    },
    /* @__PURE__ */ react.createElement(dist.DialogBody, { icon: /* @__PURE__ */ react.createElement(icons_dist.ExclamationMarkCircle, null) }, /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "center", style: { textAlign: "center" } }, /* @__PURE__ */ react.createElement(dist.Typography, { id: "confirm-description" }, formatMessage(
      {
        id: utils_getTrad("popUpWarning.warning.unpublish"),
        defaultMessage: "Unpublish this content will automatically change it to a draft."
      },
      {
        br: () => /* @__PURE__ */ react.createElement("br", null)
      }
    ))), /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "center", style: { textAlign: "center" } }, /* @__PURE__ */ react.createElement(dist.Typography, { id: "confirm-description" }, formatMessage({
      id: utils_getTrad("popUpWarning.warning.unpublish-question"),
      defaultMessage: "Are you sure you want to unpublish it?"
    }))))),
    /* @__PURE__ */ react.createElement(
      dist.DialogFooter,
      {
        startAction: /* @__PURE__ */ react.createElement(dist.Button, { onClick: toggleWarningUnpublish, variant: "tertiary" }, formatMessage({
          id: "components.popUpWarning.button.cancel",
          defaultMessage: "Cancel"
        })),
        endAction: /* @__PURE__ */ react.createElement(dist.Button, { variant: "danger-light", onClick: handleUnpublish }, formatMessage({
          id: "components.popUpWarning.button.confirm",
          defaultMessage: "Confirm"
        }))
      }
    )
  ), /* @__PURE__ */ react.createElement(
    dist.Dialog,
    {
      onClose: onPublishPromptDismissal,
      title: formatMessage({
        id: utils_getTrad(`popUpWarning.warning.has-draft-relations.title`),
        defaultMessage: "Confirmation"
      }),
      labelledBy: "confirmation",
      describedBy: "confirm-description",
      isOpen: showPublishConfirmation
    },
    /* @__PURE__ */ react.createElement(dist.DialogBody, { icon: /* @__PURE__ */ react.createElement(icons_dist.ExclamationMarkCircle, null) }, /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(FlexTextAlign, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(dist.Typography, { id: "confirm-description" }, draftCount, formatMessage(
      {
        id: utils_getTrad(`popUpwarning.warning.has-draft-relations.message`),
        defaultMessage: "<b>{count, plural, one { relation is} other { relations are}}</b> not published yet and might lead to unexpected behavior."
      },
      {
        b: (chunks) => /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "bold" }, chunks),
        count: draftCount
      }
    ))), /* @__PURE__ */ react.createElement(FlexTextAlign, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(dist.Typography, { id: "confirm-description" }, formatMessage({
      id: utils_getTrad("popUpWarning.warning.publish-question"),
      defaultMessage: "Do you still want to publish?"
    }))))),
    /* @__PURE__ */ react.createElement(
      dist.DialogFooter,
      {
        startAction: /* @__PURE__ */ react.createElement(dist.Button, { onClick: onPublishPromptDismissal, variant: "tertiary" }, formatMessage({
          id: "components.popUpWarning.button.cancel",
          defaultMessage: "Cancel"
        })),
        endAction: /* @__PURE__ */ react.createElement(dist.Button, { variant: "success", onClick: onPublish }, formatMessage({
          id: utils_getTrad("popUpwarning.warning.has-draft-relations.button-confirm"),
          defaultMessage: "Publish"
        }))
      }
    )
  ));
};
Header.propTypes = {
  allowedActions: prop_types_default().shape({
    canUpdate: (prop_types_default()).bool.isRequired,
    canCreate: (prop_types_default()).bool.isRequired,
    canPublish: (prop_types_default()).bool.isRequired
  }).isRequired,
  initialData: (prop_types_default()).object.isRequired,
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  isSingleType: (prop_types_default()).bool.isRequired,
  status: (prop_types_default()).string.isRequired,
  layout: (prop_types_default()).object.isRequired,
  hasDraftAndPublish: (prop_types_default()).bool.isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  onPublish: (prop_types_default()).func.isRequired,
  onUnpublish: (prop_types_default()).func.isRequired,
  publishConfirmation: prop_types_default().shape({
    show: (prop_types_default()).bool.isRequired,
    draftCount: (prop_types_default()).number.isRequired
  }).isRequired,
  onPublishPromptDismissal: (prop_types_default()).func.isRequired
};
const Header_Memoized = (0,react.memo)(Header, (react_fast_compare_default()));
/* harmony default export */ const EditView_Header = (Header_utils_connect(Header_Memoized, Header_utils_select));


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/utils/createAttributesLayout.js

const createAttributesLayout = (currentContentTypeLayoutData) => {
  if (!currentContentTypeLayoutData.layouts) {
    return [];
  }
  const currentLayout = currentContentTypeLayoutData.layouts.edit;
  const attributes = currentContentTypeLayoutData.attributes;
  const getType = (name) => (0,lodash.get)(attributes, [name, "type"], "");
  let currentRowIndex = 0;
  const newLayout = [];
  currentLayout.forEach((row) => {
    const hasDynamicZone = row.some(({ name }) => getType(name) === "dynamiczone");
    if (!newLayout[currentRowIndex]) {
      newLayout[currentRowIndex] = [];
    }
    if (hasDynamicZone) {
      currentRowIndex = currentRowIndex === 0 && (0,lodash.isEmpty)(newLayout[0]) ? 0 : currentRowIndex + 1;
      if (!newLayout[currentRowIndex]) {
        newLayout[currentRowIndex] = [];
      }
      newLayout[currentRowIndex].push(row);
      currentRowIndex += 1;
    } else {
      newLayout[currentRowIndex].push(row);
    }
  });
  return newLayout.filter((arr) => arr.length > 0);
};
/* harmony default export */ const utils_createAttributesLayout = (createAttributesLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/utils/getFieldsActionMatchingPermissions.js


const getFieldsActionMatchingPermissions = (userPermissions, slug) => {
  const getMatchingPermissions = (action) => {
    const matched = (0,helper_plugin.findMatchingPermissions)(userPermissions, [
      {
        action: `plugin::content-manager.explorer.${action}`,
        subject: slug
      }
    ]);
    return (0,lodash.uniq)((0,lodash.flatMap)(matched, "properties.fields"));
  };
  return {
    createActionAllowedFields: getMatchingPermissions("create"),
    readActionAllowedFields: getMatchingPermissions("read"),
    updateActionAllowedFields: getMatchingPermissions("update")
  };
};
/* harmony default export */ const utils_getFieldsActionMatchingPermissions = (getFieldsActionMatchingPermissions);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/utils/getCustomFieldUidsFromLayout.js
const getCustomFieldUidsFromLayout = (layout) => {
  if (!layout)
    return [];
  const allFields = [
    ...layout.contentType.layouts.edit,
    ...Object.values(layout.components).flatMap((component) => component.layouts.edit)
  ].flat();
  const customFieldUids = allFields.filter((field) => field.fieldSchema.customField).map((customField) => customField.fieldSchema.customField);
  const uniqueCustomFieldUids = [...new Set(customFieldUids)];
  return uniqueCustomFieldUids;
};
/* harmony default export */ const utils_getCustomFieldUidsFromLayout = (getCustomFieldUidsFromLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/utils/index.js




;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DeleteLink/utils/connect.js

function DeleteLink_utils_connect_connect(WrappedComponent, select) {
  return (props) => {
    const selectors = select();
    return /* @__PURE__ */ react.createElement(WrappedComponent, { ...props, ...selectors });
  };
}
/* harmony default export */ const DeleteLink_utils_connect = (DeleteLink_utils_connect_connect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DeleteLink/utils/select.js


function DeleteLink_utils_select_useSelect() {
  const { hasDraftAndPublish, modifiedData } = (0,helper_plugin.useCMEditViewDataManager)();
  let trackerProperty = {};
  if (hasDraftAndPublish) {
    const isDraft = (0,lodash.isEmpty)(modifiedData.publishedAt);
    trackerProperty = isDraft ? { status: "draft" } : { status: "published" };
  }
  return {
    hasDraftAndPublish,
    trackerProperty
  };
}
/* harmony default export */ const DeleteLink_utils_select = (DeleteLink_utils_select_useSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DeleteLink/utils/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/DeleteLink/index.js









const DeleteLink = ({ isCreatingEntry, onDelete, onDeleteSucceeded, trackerProperty }) => {
  const [showWarningDelete, setWarningDelete] = (0,react.useState)(false);
  const [isModalConfirmButtonLoading, setIsModalConfirmButtonLoading] = (0,react.useState)(false);
  const { formatMessage } = (0,react_intl.useIntl)();
  const { formatAPIError } = (0,helper_plugin.useAPIErrorHandler)(utils_getTrad);
  const toggleNotification = (0,helper_plugin.useNotification)();
  const toggleWarningDelete = () => setWarningDelete((prevState) => !prevState);
  const handleConfirmDelete = async () => {
    try {
      setIsModalConfirmButtonLoading(true);
      await onDelete(trackerProperty);
      setIsModalConfirmButtonLoading(false);
      toggleWarningDelete();
      onDeleteSucceeded();
    } catch (err) {
      setIsModalConfirmButtonLoading(false);
      toggleWarningDelete();
      toggleNotification({
        type: "warning",
        message: formatAPIError(err)
      });
    }
  };
  if (isCreatingEntry) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(dist.Button, { onClick: toggleWarningDelete, size: "S", startIcon: /* @__PURE__ */ react.createElement(icons_dist.Trash, null), variant: "danger-light" }, formatMessage({
    id: utils_getTrad("containers.Edit.delete-entry"),
    defaultMessage: "Delete this entry"
  })), /* @__PURE__ */ react.createElement(
    helper_plugin.ConfirmDialog,
    {
      isConfirmButtonLoading: isModalConfirmButtonLoading,
      isOpen: showWarningDelete,
      onConfirm: handleConfirmDelete,
      onToggleDialog: toggleWarningDelete
    }
  ));
};
DeleteLink.propTypes = {
  isCreatingEntry: (prop_types_default()).bool.isRequired,
  onDelete: (prop_types_default()).func.isRequired,
  onDeleteSucceeded: (prop_types_default()).func.isRequired,
  trackerProperty: (prop_types_default()).object.isRequired
};
const DeleteLink_Memoized = (0,react.memo)(DeleteLink, (react_fast_compare_default()));
/* harmony default export */ const EditView_DeleteLink = (DeleteLink_utils_connect(DeleteLink_Memoized, DeleteLink_utils_select));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/GridRow/index.js





const GridRow = ({ columns, customFieldInputs }) => {
  return /* @__PURE__ */ react.createElement(dist.Grid, { gap: 4 }, columns.map(({ fieldSchema, labelAction, metadatas, name, size, queryInfos }) => {
    const isComponent = fieldSchema.type === "component";
    if (isComponent) {
      const { component, max, min, repeatable = false, required = false } = fieldSchema;
      return /* @__PURE__ */ react.createElement(dist.GridItem, { col: size, s: 12, xs: 12, key: component }, /* @__PURE__ */ react.createElement(
        components_FieldComponent,
        {
          componentUid: component,
          labelAction,
          isRepeatable: repeatable,
          intlLabel: {
            id: metadatas.label,
            defaultMessage: metadatas.label
          },
          max,
          min,
          name,
          required
        }
      ));
    }
    return /* @__PURE__ */ react.createElement(dist.GridItem, { col: size, key: name, s: 12, xs: 12 }, /* @__PURE__ */ react.createElement(
      components_Inputs,
      {
        size,
        fieldSchema,
        keys: name,
        labelAction,
        metadatas,
        queryInfos,
        customFieldInputs
      }
    ));
  }));
};
GridRow.defaultProps = {
  customFieldInputs: {}
};
GridRow.propTypes = {
  columns: (prop_types_default()).array.isRequired,
  customFieldInputs: (prop_types_default()).object
};
/* harmony default export */ const EditView_GridRow = (GridRow);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/selectors.js


const selectCurrentLayout = (state) => state["content-manager_editViewLayoutManager"].currentLayout;
const selectAttributesLayout = (0,es/* createSelector */.P1)(
  selectCurrentLayout,
  (layout) => utils_createAttributesLayout(layout?.contentType ?? {})
);
const selectCustomFieldUids = (0,es/* createSelector */.P1)(
  selectCurrentLayout,
  (layout) => utils_getCustomFieldUidsFromLayout(layout)
);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditView/index.js






















const cmPermissions = permissions/* default.contentManager */.Z.contentManager;
const ctbPermissions = [{ action: "plugin::content-type-builder.read", subject: null }];
const EditView = ({ allowedActions, isSingleType, goBack, slug, id, origin, userPermissions }) => {
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { layout, formattedContentTypeLayout, customFieldUids } = (0,lib.useSelector)((state) => ({
    layout: selectCurrentLayout(state),
    formattedContentTypeLayout: selectAttributesLayout(state),
    customFieldUids: selectCustomFieldUids(state)
  }));
  const { isLazyLoading, lazyComponentStore } = hooks_useLazyComponents(customFieldUids);
  const { createActionAllowedFields, readActionAllowedFields, updateActionAllowedFields } = utils_getFieldsActionMatchingPermissions(userPermissions, slug);
  const configurationPermissions = isSingleType ? cmPermissions.singleTypesConfigurations : cmPermissions.collectionTypesConfigurations;
  const configurationsURL = `/content-manager/${isSingleType ? "singleType" : "collectionType"}/${slug}/configurations/edit`;
  const DataManagementWrapper = isSingleType ? components_SingleTypeFormWrapper : components_CollectionTypeFormWrapper;
  const isDynamicZone = (block) => {
    return block.every((subBlock) => {
      return subBlock.every((obj) => obj.fieldSchema.type === "dynamiczone");
    });
  };
  if (isLazyLoading) {
    return /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(DataManagementWrapper, { allLayoutData: layout, slug, id, origin }, ({
    componentsDataStructure,
    contentTypeDataStructure,
    data,
    isCreatingEntry,
    isLoadingForData,
    onDelete,
    onDeleteSucceeded,
    onPost,
    onPublish,
    onDraftRelationCheck,
    onPut,
    onUnpublish,
    redirectionLink,
    status
  }) => {
    return /* @__PURE__ */ react.createElement(
      components_EditViewDataManagerProvider,
      {
        allowedActions,
        allLayoutData: layout,
        createActionAllowedFields,
        componentsDataStructure,
        contentTypeDataStructure,
        from: redirectionLink,
        initialValues: data,
        isCreatingEntry,
        isLoadingForData,
        isSingleType,
        onPost,
        onPublish,
        onDraftRelationCheck,
        onPut,
        onUnpublish,
        readActionAllowedFields,
        redirectToPreviousPage: goBack,
        slug,
        status,
        updateActionAllowedFields
      },
      /* @__PURE__ */ react.createElement(dist.Main, { "aria-busy": status !== "resolved" }, /* @__PURE__ */ react.createElement(EditView_Header, { allowedActions }), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(dist.Grid, { gap: 4 }, /* @__PURE__ */ react.createElement(dist.GridItem, { col: 9, s: 12 }, /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 6 }, formattedContentTypeLayout.map((row, index) => {
        if (isDynamicZone(row)) {
          const {
            0: {
              0: { name, fieldSchema, metadatas, labelAction }
            }
          } = row;
          return /* @__PURE__ */ react.createElement(dist.Box, { key: index }, /* @__PURE__ */ react.createElement(dist.Grid, { gap: 4 }, /* @__PURE__ */ react.createElement(dist.GridItem, { col: 12, s: 12, xs: 12 }, /* @__PURE__ */ react.createElement(
            components_DynamicZone,
            {
              name,
              fieldSchema,
              labelAction,
              metadatas
            }
          ))));
        }
        return /* @__PURE__ */ react.createElement(
          dist.Box,
          {
            key: index,
            hasRadius: true,
            background: "neutral0",
            shadow: "tableShadow",
            paddingLeft: 6,
            paddingRight: 6,
            paddingTop: 6,
            paddingBottom: 6,
            borderColor: "neutral150"
          },
          /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 6 }, row.map((grid, gridRowIndex) => /* @__PURE__ */ react.createElement(
            EditView_GridRow,
            {
              columns: grid,
              customFieldInputs: lazyComponentStore,
              key: gridRowIndex
            }
          )))
        );
      }))), /* @__PURE__ */ react.createElement(dist.GridItem, { col: 3, s: 12 }, /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(EditView_DraftAndPublishBadge, null), /* @__PURE__ */ react.createElement(
        dist.Box,
        {
          as: "aside",
          "aria-labelledby": "additional-information",
          background: "neutral0",
          borderColor: "neutral150",
          hasRadius: true,
          paddingBottom: 4,
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 6,
          shadow: "tableShadow"
        },
        /* @__PURE__ */ react.createElement(EditView_Information, null),
        /* @__PURE__ */ react.createElement(components_InjectionZone, { area: "contentManager.editView.informations" })
      ), /* @__PURE__ */ react.createElement(dist.Box, { as: "aside", "aria-labelledby": "links" }, /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(components_InjectionZone, { area: "contentManager.editView.right-links", slug }), slug !== "strapi::administrator" && /* @__PURE__ */ react.createElement(helper_plugin.CheckPermissions, { permissions: ctbPermissions }, /* @__PURE__ */ react.createElement(
        helper_plugin.LinkButton,
        {
          onClick: () => {
            trackUsage("willEditEditLayout");
          },
          size: "S",
          startIcon: /* @__PURE__ */ react.createElement(icons_dist.Pencil, null),
          style: { width: "100%" },
          to: `/plugins/content-type-builder/content-types/${slug}`,
          variant: "secondary"
        },
        formatMessage({
          id: utils_getTrad("link-to-ctb"),
          defaultMessage: "Edit the model"
        })
      )), /* @__PURE__ */ react.createElement(helper_plugin.CheckPermissions, { permissions: configurationPermissions }, /* @__PURE__ */ react.createElement(
        helper_plugin.LinkButton,
        {
          size: "S",
          startIcon: /* @__PURE__ */ react.createElement(icons_dist.Layer, null),
          style: { width: "100%" },
          to: configurationsURL,
          variant: "secondary"
        },
        formatMessage({
          id: "app.links.configure-view",
          defaultMessage: "Configure the view"
        })
      )), allowedActions.canDelete && /* @__PURE__ */ react.createElement(
        EditView_DeleteLink,
        {
          isCreatingEntry,
          onDelete,
          onDeleteSucceeded
        }
      ))))))))
    );
  });
};
EditView.defaultProps = {
  id: null,
  isSingleType: false,
  origin: null,
  userPermissions: []
};
EditView.propTypes = {
  allowedActions: prop_types_default().shape({
    canRead: (prop_types_default()).bool.isRequired,
    canUpdate: (prop_types_default()).bool.isRequired,
    canCreate: (prop_types_default()).bool.isRequired,
    canDelete: (prop_types_default()).bool.isRequired
  }).isRequired,
  id: (prop_types_default()).string,
  isSingleType: (prop_types_default()).bool,
  goBack: (prop_types_default()).func.isRequired,
  origin: (prop_types_default()).string,
  slug: (prop_types_default()).string.isRequired,
  userPermissions: (prop_types_default()).array
};
/* harmony default export */ const pages_EditView = ((0,react.memo)(EditView));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditViewLayoutManager/Permissions.js






const Permissions = (props) => {
  const viewPermissions = (0,react.useMemo)(() => utils_generatePermissionsObject(props.slug), [props.slug]);
  const { isLoading, allowedActions } = (0,helper_plugin.useRBAC)(viewPermissions, props.userPermissions);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(pages_EditView, { ...props, allowedActions });
};
Permissions.defaultProps = {
  permissions: []
};
Permissions.propTypes = {
  permissions: (prop_types_default()).array,
  slug: (prop_types_default()).string.isRequired,
  userPermissions: (prop_types_default()).array.isRequired
};
/* harmony default export */ const EditViewLayoutManager_Permissions = ((0,react.memo)(Permissions, (react_fast_compare_default())));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditViewLayoutManager/index.js









const EditViewLayoutManager = ({ layout, ...rest }) => {
  const currentLayout = (0,lib.useSelector)(selectors);
  const dispatch = (0,lib.useDispatch)();
  const [{ query }] = (0,helper_plugin.useQueryParams)();
  const { runHookWaterfall } = (0,helper_plugin.useStrapiApp)();
  const permissions = hooks_useSyncRbac(query, rest.slug, "editView");
  (0,react.useEffect)(() => {
    const mutatedLayout = runHookWaterfall(exposedHooks/* MUTATE_EDIT_VIEW_LAYOUT */.Eo, { layout, query });
    dispatch(setLayout(mutatedLayout.layout, query));
    return () => {
      dispatch(resetProps());
    };
  }, [layout, dispatch, query, runHookWaterfall]);
  if (!currentLayout || !permissions) {
    return /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(EditViewLayoutManager_Permissions, { ...rest, userPermissions: permissions });
};
EditViewLayoutManager.propTypes = {
  layout: prop_types_default().shape({
    components: (prop_types_default()).object.isRequired,
    contentType: prop_types_default().shape({
      uid: (prop_types_default()).string.isRequired,
      settings: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      options: (prop_types_default()).object.isRequired,
      attributes: (prop_types_default()).object.isRequired
    }).isRequired
  }).isRequired
};
/* harmony default export */ const pages_EditViewLayoutManager = (EditViewLayoutManager);

// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/lodash/flatMap.js
var flatMap = __webpack_require__(94654);
var flatMap_default = /*#__PURE__*/__webpack_require__.n(flatMap);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/utils/layout.js
const getRowSize = (arr) => arr.reduce((sum, value) => sum + value.size, 0);
const createLayout = (arr) => {
  return arr.reduce((acc, current, index) => {
    const row = { rowId: index, rowContent: current };
    return acc.concat(row);
  }, []);
};
const formatLayout = (arr) => {
  return arr.reduce((acc, current) => {
    let toPush = [];
    const currentRow = current.rowContent.reduce((acc2, curr) => {
      const acc2Size = getRowSize(acc2);
      if (curr.name === "_TEMP_") {
        return acc2;
      }
      if (acc2Size + curr.size <= 12) {
        acc2.push(curr);
      } else {
        toPush.push(curr);
      }
      return acc2;
    }, []);
    const rowId = acc.length === 0 ? 0 : Math.max.apply(
      Math,
      acc.map((o) => o.rowId)
    ) + 1;
    const currentRowSize = getRowSize(currentRow);
    if (currentRowSize < 12) {
      currentRow.push({ name: "_TEMP_", size: 12 - currentRowSize });
    }
    acc.push({ rowId, rowContent: currentRow });
    if (toPush.length > 0) {
      const toPushSize = getRowSize(toPush);
      if (toPushSize < 12) {
        toPush.push({ name: "_TEMP_", size: 12 - toPushSize });
      }
      acc.push({ rowId: rowId + 1, rowContent: toPush });
      toPush = [];
    }
    return acc;
  }, []).filter((row) => row.rowContent.length > 0).filter((row) => {
    if (row.rowContent.length === 1) {
      return row.rowContent[0].name !== "_TEMP_";
    }
    return true;
  });
};
const unformatLayout = (arr) => {
  return arr.reduce((acc, current) => {
    const currentRow = current.rowContent.filter((content) => content.name !== "_TEMP_");
    return acc.concat([currentRow]);
  }, []);
};
const getDefaultInputSize = (type) => {
  switch (type) {
    case "boolean":
    case "date":
    case "integer":
    case "float":
    case "biginteger":
    case "decimal":
    case "time":
      return 4;
    case "json":
    case "component":
    case "richtext":
    case "dynamiczone":
      return 12;
    default:
      return 6;
  }
};
const getFieldSize = (name, layouts = []) => {
  return layouts.reduce((acc, { rowContent }) => {
    const size = rowContent.find((row) => row.name === name)?.size ?? null;
    if (size) {
      acc = size;
    }
    return acc;
  }, null);
};
const setFieldSize = (name, size, layouts = []) => {
  return layouts.map((row) => {
    row.rowContent = row.rowContent.map((column) => {
      if (column.name === name) {
        return {
          ...column,
          size
        };
      }
      return column;
    });
    return row;
  });
};


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/reducer.js






const EditSettingsView_reducer_initialState = {
  fieldForm: {},
  componentLayouts: {},
  metaToEdit: "",
  initialData: {},
  metaForm: {},
  modifiedData: {}
};
const EditSettingsView_reducer_reducer = (state = EditSettingsView_reducer_initialState, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer_esm["default"])(state, (draftState) => {
    const layoutPathEdit = ["modifiedData", "layouts", "edit"];
    switch (action.type) {
      case "MOVE_ROW": {
        const editFieldLayoutValue = get_default()(state, layoutPathEdit, []);
        const { fromIndex, toIndex } = action;
        set_default()(draftState, layoutPathEdit, utils_arrayMoveItem(editFieldLayoutValue, fromIndex, toIndex));
        break;
      }
      case "ON_ADD_FIELD": {
        const newState = cloneDeep_default()(state);
        const size = getDefaultInputSize(
          get_default()(newState, ["modifiedData", "attributes", action.name, "type"], "")
        );
        const listSize = get_default()(newState, layoutPathEdit, []).length;
        const actualRowContentPath = [...layoutPathEdit, listSize - 1, "rowContent"];
        const rowContentToSet = get_default()(newState, actualRowContentPath, []);
        let newList = get_default()(newState, layoutPathEdit, []);
        if (Array.isArray(rowContentToSet)) {
          set_default()(
            newList,
            [listSize > 0 ? listSize - 1 : 0, "rowContent"],
            [...rowContentToSet, { name: action.name, size }]
          );
        } else {
          set_default()(
            newList,
            [listSize > 0 ? listSize - 1 : 0, "rowContent"],
            [{ name: action.name, size }]
          );
        }
        const formattedList = formatLayout(newList);
        set_default()(draftState, layoutPathEdit, formattedList);
        break;
      }
      case "ON_CHANGE": {
        set_default()(draftState, ["modifiedData", ...action.keys], action.value);
        break;
      }
      case "ON_CHANGE_META": {
        set_default()(draftState, ["metaForm", "metadata", ...action.keys], action.value);
        break;
      }
      case "ON_CHANGE_SIZE": {
        set_default()(draftState, ["metaForm", "size"], action.value);
        break;
      }
      case "ON_RESET": {
        draftState.modifiedData = state.initialData;
        break;
      }
      case "REMOVE_FIELD": {
        const row = get_default()(state, [...layoutPathEdit, action.rowIndex, "rowContent"], []);
        let newState = cloneDeep_default()(state);
        if (row.length === 1 || row.length === 2 && get_default()(row, [1, "name"], "") === "_TEMP_") {
          const currentRowFieldList = get_default()(state, layoutPathEdit, []);
          set_default()(
            newState,
            layoutPathEdit,
            currentRowFieldList.filter((_, index) => action.rowIndex !== index)
          );
        } else {
          set_default()(
            newState,
            [...layoutPathEdit, action.rowIndex, "rowContent"],
            row.filter((_, index) => index !== action.fieldIndex)
          );
        }
        const updatedList = formatLayout(get_default()(newState, layoutPathEdit, []));
        set_default()(draftState, layoutPathEdit, updatedList);
        break;
      }
      case "REORDER_DIFF_ROW": {
        const actualRowContent = get_default()(
          state,
          [...layoutPathEdit, action.dragRowIndex, "rowContent"],
          []
        );
        const targetRowContent = get_default()(
          state,
          [...layoutPathEdit, action.hoverRowIndex, "rowContent"],
          []
        );
        const itemToInsert = get_default()(
          state,
          [...layoutPathEdit, action.dragRowIndex, "rowContent", action.dragIndex],
          {}
        );
        const rowContent = [...targetRowContent, itemToInsert];
        let newState = cloneDeep_default()(state);
        set_default()(
          newState,
          [...layoutPathEdit, action.dragRowIndex, "rowContent"],
          actualRowContent.filter((_, index) => action.dragIndex !== index)
        );
        set_default()(
          newState,
          [...layoutPathEdit, action.hoverRowIndex, "rowContent"],
          utils_arrayMoveItem(rowContent, rowContent.length - 1, action.hoverIndex)
        );
        const updatedList = formatLayout(get_default()(newState, layoutPathEdit, []));
        set_default()(draftState, layoutPathEdit, updatedList);
        break;
      }
      case "REORDER_ROW": {
        const newState = cloneDeep_default()(state);
        const rowContent = get_default()(
          newState,
          [...layoutPathEdit, action.dragRowIndex, "rowContent"],
          []
        );
        set_default()(
          newState,
          [...layoutPathEdit, action.dragRowIndex, "rowContent"],
          utils_arrayMoveItem(rowContent, action.dragIndex, action.hoverIndex)
        );
        const updatedList = formatLayout(get_default()(newState, layoutPathEdit, []));
        set_default()(draftState, layoutPathEdit, updatedList);
        break;
      }
      case "SET_FIELD_TO_EDIT": {
        draftState.metaToEdit = action.name;
        draftState.metaForm = {
          metadata: get_default()(state, ["modifiedData", "metadatas", action.name, "edit"], {}),
          size: getFieldSize(action.name, state.modifiedData?.layouts?.edit) ?? getDefaultInputSize()
        };
        break;
      }
      case "SUBMIT_META_FORM": {
        set_default()(
          draftState,
          ["modifiedData", "metadatas", state.metaToEdit, "edit"],
          state.metaForm.metadata
        );
        const layoutsCopy = cloneDeep_default()(get_default()(state, layoutPathEdit, []));
        const nextLayoutValue = setFieldSize(state.metaToEdit, state.metaForm.size, layoutsCopy);
        if (nextLayoutValue.length > 0) {
          set_default()(draftState, layoutPathEdit, formatLayout(nextLayoutValue));
        }
        break;
      }
      case "SUBMIT_SUCCEEDED": {
        draftState.initialData = state.modifiedData;
        break;
      }
      case "UNSET_FIELD_TO_EDIT": {
        draftState.metaToEdit = "";
        draftState.metaForm = {};
        break;
      }
      default:
        return draftState;
    }
  })
);
/* harmony default export */ const EditSettingsView_reducer = (EditSettingsView_reducer_reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/init.js


const init = (initialState, mainLayout, components) => {
  let initialData = (0,lodash.cloneDeep)(mainLayout);
  (0,lodash.set)(initialData, ["layouts", "edit"], formatLayout(createLayout(mainLayout.layouts.edit)));
  return {
    ...initialState,
    initialData,
    modifiedData: initialData,
    componentLayouts: components
  };
};
/* harmony default export */ const EditSettingsView_init = (init);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/ComponentFieldList.js









const ComponentFieldList = ({ componentUid }) => {
  const { componentLayouts } = hooks_useLayoutDnd();
  const { formatMessage } = (0,react_intl.useIntl)();
  const componentData = get_default()(componentLayouts, [componentUid], {});
  const componentLayout = get_default()(componentData, ["layouts", "edit"], []);
  return /* @__PURE__ */ react.createElement(dist.Box, { padding: 3 }, componentLayout.map((row, index) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ react.createElement(dist.Grid, { gap: 4, key: index }, row.map((rowContent) => /* @__PURE__ */ react.createElement(dist.GridItem, { key: rowContent.name, col: rowContent.size }, /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 2 }, /* @__PURE__ */ react.createElement(
      dist.Flex,
      {
        alignItems: "center",
        background: "neutral0",
        paddingLeft: 3,
        paddingRight: 3,
        height: `${32 / 16}rem`,
        hasRadius: true,
        borderColor: "neutral200"
      },
      /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800" }, rowContent.name)
    )))))
  )), /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 2 }, /* @__PURE__ */ react.createElement(
    helper_plugin.Link,
    {
      startIcon: /* @__PURE__ */ react.createElement(icons_dist.Cog, null),
      to: `/content-manager/components/${componentUid}/configurations/edit`
    },
    formatMessage({
      id: utils_getTrad("components.FieldItem.linkToComponentLayout"),
      defaultMessage: "Set the component's layout"
    })
  )));
};
ComponentFieldList.propTypes = {
  componentUid: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_ComponentFieldList = (ComponentFieldList);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/DynamicZoneList.js







const CustomLink = (0,styled_components_browser_esm["default"])(dist.Flex)`
  text-decoration: none;

  &:focus,
  &:hover {
    ${({ theme }) => `
      background-color: ${theme.colors.primary100};
      border-color: ${theme.colors.primary200};

      ${dist.Typography} {
          color: ${theme.colors.primary600};
      }
    `}

    /* > ComponentIcon */
    > div:first-child {
      background: ${({ theme }) => theme.colors.primary200};
      color: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const DynamicZoneList = ({ components }) => {
  const { componentLayouts } = hooks_useLayoutDnd();
  return /* @__PURE__ */ react.createElement(dist.Flex, { gap: 2, overflow: "scroll hidden", padding: 3 }, components.map((componentUid) => /* @__PURE__ */ react.createElement(
    CustomLink,
    {
      hasRadius: true,
      background: "neutral0",
      justifyContent: "center",
      alignItems: "center",
      height: `${84 / 16}rem`,
      minWidth: `${140 / 16}rem`,
      key: componentUid,
      padding: 2,
      direction: "column",
      borderColor: "neutral200",
      as: react_router_dom_min.Link,
      to: `/content-manager/components/${componentUid}/configurations/edit`
    },
    /* @__PURE__ */ react.createElement(ComponentIcon, null),
    /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 1 }, /* @__PURE__ */ react.createElement(dist.Typography, { fontSize: 1, textColor: "neutral600", fontWeight: "bold" }, componentLayouts?.[componentUid]?.info?.displayName ?? ""))
  )));
};
DynamicZoneList.propTypes = {
  components: prop_types_default().arrayOf((prop_types_default()).string).isRequired
};
/* harmony default export */ const components_DynamicZoneList = (DynamicZoneList);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/FieldButtonContent.js









const FieldButtonContent_CustomIconButton = (0,styled_components_browser_esm["default"])(dist.IconButton)`
  background-color: transparent;
  path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
const FieldButtonContent = ({ attribute, onEditField, onDeleteField, children }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.Box, { overflow: "hidden", width: "100%" }, /* @__PURE__ */ react.createElement(dist.Flex, { paddingLeft: 3, alignItems: "center", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "semiBold", textColor: "neutral800", ellipsis: true }, children), /* @__PURE__ */ react.createElement(dist.Flex, null, /* @__PURE__ */ react.createElement(
    FieldButtonContent_CustomIconButton,
    {
      label: formatMessage(
        {
          id: utils_getTrad("containers.ListSettingsView.modal-form.edit-label"),
          defaultMessage: `Edit {fieldName}`
        },
        { fieldName: children }
      ),
      onClick: onEditField,
      icon: /* @__PURE__ */ react.createElement(icons_dist.Pencil, null),
      noBorder: true
    }
  ), /* @__PURE__ */ react.createElement(
    FieldButtonContent_CustomIconButton,
    {
      label: formatMessage(
        {
          id: "global.delete-target",
          defaultMessage: `Delete {target}`
        },
        {
          target: children
        }
      ),
      "data-testid": "delete-field",
      onClick: onDeleteField,
      icon: /* @__PURE__ */ react.createElement(icons_dist.Trash, null),
      noBorder: true
    }
  ))), attribute?.type === "component" && /* @__PURE__ */ react.createElement(components_ComponentFieldList, { componentUid: attribute.component }), attribute?.type === "dynamiczone" && /* @__PURE__ */ react.createElement(components_DynamicZoneList, { components: attribute.components }));
};
FieldButtonContent.defaultProps = {
  attribute: void 0
};
FieldButtonContent.propTypes = {
  attribute: prop_types_default().shape({
    components: (prop_types_default()).array,
    component: (prop_types_default()).string,
    type: (prop_types_default()).string
  }),
  onEditField: (prop_types_default()).func.isRequired,
  onDeleteField: (prop_types_default()).func.isRequired,
  children: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_FieldButtonContent = (FieldButtonContent);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/DisplayedFieldButton.js










const DisplayedFieldButton_Wrapper = (0,styled_components_browser_esm["default"])(dist.Flex)`
  position: relative;
  ${({ isFirst, isLast, hasHorizontalPadding }) => {
  if (isFirst) {
    return `
        padding-right: 4px;
      `;
  }
  if (isLast) {
    return `
        padding-left: 4px;
      `;
  }
  if (hasHorizontalPadding) {
    return `
        padding: 0 4px;
      `;
  }
  return "";
}}
  ${({ showRightCarret, showLeftCarret, theme }) => {
  if (showRightCarret) {
    return `
        &:after {
          content: '';
          position: absolute;
          right: -1px;
          background-color: ${theme.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `;
  }
  if (showLeftCarret) {
    return `
        &:before {
          content: '';
          position: absolute;
          left: -1px;
          background-color: ${theme.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `;
  }
  return "";
}};
`;
const CustomDragIcon = (0,styled_components_browser_esm["default"])(icons_dist.Drag)`
  height: ${12 / 16}rem;
  width: ${12 / 16}rem;
  path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
const CustomFlex = (0,styled_components_browser_esm["default"])(dist.Flex)`
  display: ${({ dragStart }) => dragStart ? "none" : "flex"};
  opacity: ${({ isDragging, isFullSize, isHidden }) => {
  if (isDragging && !isFullSize) {
    return 0.2;
  }
  if (isDragging && isFullSize || isHidden) {
    return 0;
  }
  return 1;
}};
`;
const DisplayedFieldButton_DragButton = (0,styled_components_browser_esm["default"])(dist.Flex)`
  cursor: all-scroll;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral200};
`;
const DisplayedFieldButton = ({
  attribute,
  children,
  index,
  lastIndex,
  moveItem,
  moveRow,
  name,
  onDeleteField,
  onEditField,
  rowIndex,
  size
}) => {
  const [dragStart, setDragStart] = (0,react.useState)(false);
  const isHidden = name === "_TEMP_";
  const { setIsDraggingSibling } = hooks_useLayoutDnd();
  const isFullSize = size === 12;
  const dragRef = (0,react.useRef)(null);
  const dropRef = (0,react.useRef)(null);
  const [{ clientOffset, isOver }, drop] = (0,cjs.useDrop)({
    accept: ItemTypes.EDIT_FIELD,
    hover(item, monitor) {
      if (!dropRef.current) {
        return;
      }
      if (item.size !== 12) {
        return;
      }
      const dragIndex = monitor.getItem().index;
      const hoverIndex = index;
      const dragRow = monitor.getItem().rowIndex;
      const targetRow = rowIndex;
      if (dragIndex === hoverIndex && dragRow === targetRow) {
        return;
      }
      const hoverBoundingRect = dropRef.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset2 = monitor.getClientOffset();
      const hoverClientY = clientOffset2.y - hoverBoundingRect.top;
      if (dragRow < targetRow && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragRow > targetRow && hoverClientY > hoverMiddleY) {
        return;
      }
      moveRow(dragRow, targetRow);
      item.rowIndex = targetRow;
      item.itemIndex = hoverIndex;
    },
    drop(item, monitor) {
      if (!dropRef.current) {
        return;
      }
      const dragIndex = monitor.getItem().index;
      const hoverIndex = index;
      const dragRow = monitor.getItem().rowIndex;
      const targetRow = rowIndex;
      if (item.size === 12) {
        return;
      }
      if (dragIndex === hoverIndex && dragRow === targetRow) {
        return;
      }
      const hoverBoundingRect = dropRef.current.getBoundingClientRect();
      if (Math.abs(monitor.getClientOffset().x - hoverBoundingRect.left) > hoverBoundingRect.width / 1.8) {
        moveItem(dragIndex, hoverIndex + 1, dragRow, targetRow);
        item.itemIndex = hoverIndex + 1;
        item.rowIndex = targetRow;
        return;
      }
      moveItem(dragIndex, hoverIndex, dragRow, targetRow);
      item.itemIndex = hoverIndex;
      item.rowIndex = targetRow;
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      clientOffset: monitor.getClientOffset(),
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
      itemType: monitor.getItemType()
    })
  });
  const [{ isDragging, getItem }, drag, dragPreview] = (0,cjs.useDrag)({
    type: ItemTypes.EDIT_FIELD,
    item() {
      setIsDraggingSibling(true);
      return {
        index,
        labelField: children,
        rowIndex,
        name,
        size
      };
    },
    canDrag() {
      return name !== "_TEMP_";
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      getItem: monitor.getItem()
    }),
    end() {
      setIsDraggingSibling(false);
    }
  });
  (0,react.useEffect)(() => {
    dragPreview((0,dist_cjs/* getEmptyImage */.rX)(), { captureDraggingState: true });
  }, [dragPreview]);
  const refs = {
    dragRef: drag(dragRef),
    dropRef: drop(dropRef)
  };
  let showLeftCarret = false;
  let showRightCarret = false;
  if (dropRef.current && clientOffset) {
    const hoverBoundingRect = dropRef.current.getBoundingClientRect();
    showLeftCarret = isOver && getItem.size !== 12 && Math.abs(clientOffset.x - hoverBoundingRect.left) < hoverBoundingRect.width / 2;
    showRightCarret = isOver && getItem.size !== 12 && Math.abs(clientOffset.x - hoverBoundingRect.left) > hoverBoundingRect.width / 2;
    if (name === "_TEMP_") {
      showLeftCarret = isOver && getItem.size !== 12;
      showRightCarret = false;
    }
  }
  const getHeight = () => {
    if (attribute && isFullSize) {
      return `${74 / 16}rem`;
    }
    return `${32 / 16}rem`;
  };
  const isFirst = index === 0 && !isFullSize;
  const isLast = index === lastIndex && !isFullSize;
  const hasHorizontalPadding = index !== 0 && !isFullSize;
  return /* @__PURE__ */ react.createElement(dist.GridItem, { col: size }, /* @__PURE__ */ react.createElement(
    DisplayedFieldButton_Wrapper,
    {
      ref: refs.dropRef,
      showLeftCarret,
      showRightCarret,
      isFirst,
      isLast,
      hasHorizontalPadding,
      onDrag: () => {
        if (isFullSize && !dragStart) {
          setDragStart(true);
        }
      },
      onDragEnd: () => {
        if (isFullSize) {
          setDragStart(false);
        }
      }
    },
    dragStart && isFullSize && /* @__PURE__ */ react.createElement(
      dist.Box,
      {
        width: "100%",
        height: "2px",
        background: "primary600"
      }
    ),
    /* @__PURE__ */ react.createElement(
      CustomFlex,
      {
        width: isFullSize && dragStart ? 0 : "100%",
        borderColor: "neutral150",
        hasRadius: true,
        background: "neutral100",
        minHeight: getHeight(),
        alignItems: "stretch",
        isDragging,
        dragStart,
        isFullSize,
        isHidden
      },
      /* @__PURE__ */ react.createElement(
        DisplayedFieldButton_DragButton,
        {
          as: "span",
          type: "button",
          ref: refs.dragRef,
          onClick: (e) => e.stopPropagation(),
          alignItems: "center",
          paddingLeft: 3,
          paddingRight: 3,
          tabIndex: -1
        },
        /* @__PURE__ */ react.createElement(CustomDragIcon, null)
      ),
      !isHidden && /* @__PURE__ */ react.createElement(
        components_FieldButtonContent,
        {
          attribute,
          onEditField,
          onDeleteField
        },
        children
      )
    )
  ));
};
DisplayedFieldButton.defaultProps = {
  attribute: void 0
};
DisplayedFieldButton.propTypes = {
  attribute: prop_types_default().shape({
    components: (prop_types_default()).array,
    component: (prop_types_default()).string,
    type: (prop_types_default()).string
  }),
  children: (prop_types_default()).string.isRequired,
  index: (prop_types_default()).number.isRequired,
  moveItem: (prop_types_default()).func.isRequired,
  moveRow: (prop_types_default()).func.isRequired,
  name: (prop_types_default()).string.isRequired,
  onDeleteField: (prop_types_default()).func.isRequired,
  onEditField: (prop_types_default()).func.isRequired,
  rowIndex: (prop_types_default()).number.isRequired,
  lastIndex: (prop_types_default()).number.isRequired,
  size: (prop_types_default()).number.isRequired
};
/* harmony default export */ const components_DisplayedFieldButton = (DisplayedFieldButton);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/RowItemsLayout.js





const RowItemsLayout = ({ rowItem, onRemoveField, rowId, rowIndex, index, lastIndex }) => {
  const { setEditFieldToSelect, attributes, modifiedData, moveRow, moveItem } = hooks_useLayoutDnd();
  const attribute = get_default()(attributes, [rowItem.name], {});
  const attributeLabel = get_default()(modifiedData, ["metadatas", rowItem.name, "edit", "label"], "");
  return /* @__PURE__ */ react.createElement(
    components_DisplayedFieldButton,
    {
      onEditField: () => setEditFieldToSelect(rowItem.name),
      onDeleteField: () => onRemoveField(rowId, index),
      attribute,
      index,
      lastIndex,
      rowIndex,
      name: rowItem.name,
      size: rowItem.size,
      moveRow,
      moveItem
    },
    attributeLabel || rowItem.name
  );
};
RowItemsLayout.propTypes = {
  index: (prop_types_default()).number.isRequired,
  lastIndex: (prop_types_default()).number.isRequired,
  onRemoveField: (prop_types_default()).func.isRequired,
  rowId: (prop_types_default()).number.isRequired,
  rowIndex: (prop_types_default()).number.isRequired,
  rowItem: (prop_types_default()).object.isRequired
};
/* harmony default export */ const components_RowItemsLayout = (RowItemsLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/RowsLayout.js




const RowsLayout = ({ row, onRemoveField, rowIndex }) => {
  return /* @__PURE__ */ react.createElement(dist.Grid, null, row.rowContent.map((rowItem, index) => {
    return /* @__PURE__ */ react.createElement(
      components_RowItemsLayout,
      {
        key: rowItem.name,
        rowItem,
        index,
        rowId: row.rowId,
        onRemoveField,
        rowIndex,
        lastIndex: row.rowContent.length - 1
      }
    );
  }));
};
RowsLayout.propTypes = {
  onRemoveField: (prop_types_default()).func.isRequired,
  row: (prop_types_default()).object.isRequired,
  rowIndex: (prop_types_default()).number.isRequired
};
/* harmony default export */ const components_RowsLayout = (RowsLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/LinkToCTB.js







const LinkToCTB_permissions = [{ action: "plugin::content-type-builder.read", subject: null }];
const LinkToCTB = () => {
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { slug, modifiedData, isContentTypeView } = hooks_useLayoutDnd();
  const type = isContentTypeView ? "content-types" : "components";
  const baseUrl = `/plugins/content-type-builder/${type === "content-types" ? type : "component-categories"}`;
  const category = get_default()(modifiedData, "category", "");
  const suffixUrl = type === "content-types" ? slug : `${category}/${slug}`;
  const handleClick = () => {
    trackUsage("willEditEditLayout");
  };
  if (slug === "strapi::administrator") {
    return null;
  }
  return /* @__PURE__ */ react.createElement(helper_plugin.CheckPermissions, { permissions: LinkToCTB_permissions }, /* @__PURE__ */ react.createElement(
    helper_plugin.LinkButton,
    {
      to: `${baseUrl}/${suffixUrl}`,
      onClick: handleClick,
      size: "S",
      startIcon: /* @__PURE__ */ react.createElement(icons_dist.Pencil, null),
      variant: "secondary"
    },
    formatMessage({
      id: utils_getTrad(`edit-settings-view.link-to-ctb.${type}`),
      defaultMessage: "Edit the content type"
    })
  ));
};
/* harmony default export */ const components_LinkToCTB = (LinkToCTB);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/DisplayedFields.js








const DisplayedFields = ({ editLayout, fields, onRemoveField, onAddField }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(dist.Box, null, /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "bold" }, formatMessage({
    id: utils_getTrad("containers.ListPage.displayedFields"),
    defaultMessage: "Displayed fields"
  }))), /* @__PURE__ */ react.createElement(dist.Box, null, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "pi", textColor: "neutral600" }, formatMessage({
    id: "containers.SettingPage.editSettings.description",
    defaultMessage: "Drag & drop the fields to build the layout"
  })))), /* @__PURE__ */ react.createElement(components_LinkToCTB, null)), /* @__PURE__ */ react.createElement(dist.Box, { padding: 4, hasRadius: true, borderStyle: "dashed", borderWidth: "1px", borderColor: "neutral300" }, /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 2 }, editLayout.map((row, index) => /* @__PURE__ */ react.createElement(components_RowsLayout, { key: row.rowId, row, rowIndex: index, onRemoveField })), /* @__PURE__ */ react.createElement(
    dist.SimpleMenu,
    {
      id: "label",
      label: formatMessage({
        id: utils_getTrad("containers.SettingPage.add.field"),
        defaultMessage: "Insert another field"
      }),
      as: dist.Button,
      "data-testid": "add-field",
      fullWidth: true,
      startIcon: /* @__PURE__ */ react.createElement(icons_dist.Plus, null),
      endIcon: null,
      variant: "secondary",
      disabled: fields.length === 0
    },
    fields.map((field) => /* @__PURE__ */ react.createElement(dist.MenuItem, { key: field, onClick: () => onAddField(field) }, field))
  ))));
};
DisplayedFields.propTypes = {
  editLayout: (prop_types_default()).array.isRequired,
  fields: (prop_types_default()).array.isRequired,
  onAddField: (prop_types_default()).func.isRequired,
  onRemoveField: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_DisplayedFields = (DisplayedFields);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/FieldTypeIcon/index.js





const iconByTypes = {
  biginteger: /* @__PURE__ */ react.createElement(icons_dist.Number, null),
  boolean: /* @__PURE__ */ react.createElement(icons_dist.Boolean, null),
  date: /* @__PURE__ */ react.createElement(icons_dist.Date, null),
  datetime: /* @__PURE__ */ react.createElement(icons_dist.Date, null),
  decimal: /* @__PURE__ */ react.createElement(icons_dist.Number, null),
  email: /* @__PURE__ */ react.createElement(icons_dist.Email, null),
  enum: /* @__PURE__ */ react.createElement(icons_dist.Enumeration, null),
  enumeration: /* @__PURE__ */ react.createElement(icons_dist.Enumeration, null),
  file: /* @__PURE__ */ react.createElement(icons_dist.Media, null),
  files: /* @__PURE__ */ react.createElement(icons_dist.Media, null),
  float: /* @__PURE__ */ react.createElement(icons_dist.Number, null),
  integer: /* @__PURE__ */ react.createElement(icons_dist.Number, null),
  media: /* @__PURE__ */ react.createElement(icons_dist.Media, null),
  number: /* @__PURE__ */ react.createElement(icons_dist.Number, null),
  relation: /* @__PURE__ */ react.createElement(icons_dist.Relation, null),
  string: /* @__PURE__ */ react.createElement(icons_dist.Text, null),
  text: /* @__PURE__ */ react.createElement(icons_dist.Text, null),
  richtext: /* @__PURE__ */ react.createElement(icons_dist.Text, null),
  time: /* @__PURE__ */ react.createElement(icons_dist.Date, null),
  timestamp: /* @__PURE__ */ react.createElement(icons_dist.Date, null),
  json: /* @__PURE__ */ react.createElement(icons_dist.Json, null),
  uid: /* @__PURE__ */ react.createElement(icons_dist.Uid, null),
  component: /* @__PURE__ */ react.createElement(icons_dist.Component, null),
  dynamiczone: /* @__PURE__ */ react.createElement(icons_dist.DynamicZone, null)
};
const FieldTypeIcon = ({ type, customFieldUid }) => {
  const customFieldsRegistry = (0,helper_plugin.useCustomFields)();
  let Compo = iconByTypes[type];
  if (customFieldUid) {
    const customField = customFieldsRegistry.get(customFieldUid);
    const CustomFieldIcon = customField.icon;
    if (CustomFieldIcon) {
      Compo = /* @__PURE__ */ react.createElement(dist.Box, { marginRight: 3, width: 7, height: 6 }, /* @__PURE__ */ react.createElement(CustomFieldIcon, null));
    }
  }
  if (!iconByTypes[type]) {
    return null;
  }
  return Compo;
};
FieldTypeIcon.defaultProps = {
  customFieldUid: null
};
FieldTypeIcon.propTypes = {
  type: (prop_types_default()).string.isRequired,
  customFieldUid: (prop_types_default()).string
};
/* harmony default export */ const components_FieldTypeIcon = (FieldTypeIcon);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/utils/createPossibleMainFieldsForModelsAndComponents.js

const createPossibleMainFieldsForModelsAndComponents = (array) => {
  return array.reduce((acc, current) => {
    const attributes = (0,lodash.get)(current, ["attributes"], {});
    const possibleMainFields = Object.keys(attributes).filter((attr) => {
      return ![
        "boolean",
        "component",
        "dynamiczone",
        "json",
        "media",
        "password",
        "relation",
        "text",
        "richtext"
      ].includes((0,lodash.get)(attributes, [attr, "type"], ""));
    });
    acc[current.uid] = possibleMainFields;
    return acc;
  }, {});
};
/* harmony default export */ const utils_createPossibleMainFieldsForModelsAndComponents = (createPossibleMainFieldsForModelsAndComponents);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/utils/getInputProps.js

const getInputProps = (fieldName) => {
  let type;
  switch (fieldName) {
    case "description":
    case "label":
    case "placeholder":
      type = "text";
      break;
    case "mainField":
      type = "select";
      break;
    case "editable":
      type = "bool";
      break;
    default:
      type = "";
  }
  const labelId = fieldName === "mainField" ? utils_getTrad("containers.SettingPage.editSettings.entry.title") : utils_getTrad(`form.Input.${fieldName}`);
  return { type, label: { id: labelId } };
};
/* harmony default export */ const utils_getInputProps = (getInputProps);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/utils/index.js



;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/GenericInput.js




const GenericInput = ({ type, options, onChange, value, name, ...inputProps }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  switch (type) {
    case "text": {
      return /* @__PURE__ */ react.createElement(dist.TextInput, { onChange, value, name, ...inputProps });
    }
    case "bool": {
      return /* @__PURE__ */ react.createElement(
        dist.ToggleInput,
        {
          onChange: (e) => {
            onChange({ target: { name, value: e.target.checked } });
          },
          checked: value,
          name,
          onLabel: formatMessage({
            id: "app.components.ToggleCheckbox.on-label",
            defaultMessage: "On"
          }),
          offLabel: formatMessage({
            id: "app.components.ToggleCheckbox.off-label",
            defaultMessage: "Off"
          }),
          ...inputProps
        }
      );
    }
    case "select": {
      return /* @__PURE__ */ react.createElement(
        dist.Select,
        {
          value,
          name,
          onChange: (value2) => onChange({ target: { name, value: value2 } }),
          ...inputProps
        },
        options.map((option) => /* @__PURE__ */ react.createElement(dist.Option, { key: option, value: option }, option))
      );
    }
    default:
      return null;
  }
};
GenericInput.defaultProps = {
  options: void 0
};
GenericInput.propTypes = {
  type: (prop_types_default()).string.isRequired,
  options: prop_types_default().arrayOf((prop_types_default()).string),
  onChange: (prop_types_default()).func.isRequired,
  value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).bool]).isRequired,
  name: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_GenericInput = (GenericInput);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/ModalForm.js











const FIELD_SIZES = [
  [4, "33%"],
  [6, "50%"],
  [8, "66%"],
  [12, "100%"]
];
const NON_RESIZABLE_FIELD_TYPES = ["dynamiczone", "component", "json", "richtext"];
const TIME_FIELD_OPTIONS = [1, 5, 10, 15, 30, 60];
const TIME_FIELD_TYPES = ["datetime", "time"];
const ModalForm = ({ onMetaChange, onSizeChange }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { modifiedData, selectedField, attributes, fieldForm } = hooks_useLayoutDnd();
  const schemasSelector = (0,react.useMemo)(makeSelectModelAndComponentSchemas, []);
  const { schemas } = (0,lib.useSelector)((state) => schemasSelector(state), lib.shallowEqual);
  const formToDisplay = (0,react.useMemo)(() => {
    if (!selectedField) {
      return [];
    }
    const associatedMetas = get_default()(modifiedData, ["metadatas", selectedField, "edit"], {});
    return Object.keys(associatedMetas).filter((meta) => meta !== "visible");
  }, [selectedField, modifiedData]);
  const componentsAndModelsPossibleMainFields = (0,react.useMemo)(() => {
    return utils_createPossibleMainFieldsForModelsAndComponents(schemas);
  }, [schemas]);
  const getSelectedItemSelectOptions = (0,react.useCallback)(
    (formType) => {
      if (formType !== "relation" && formType !== "component") {
        return [];
      }
      const targetKey = formType === "component" ? "component" : "targetModel";
      const key = get_default()(modifiedData, ["attributes", selectedField, targetKey], "");
      return get_default()(componentsAndModelsPossibleMainFields, [key], []);
    },
    [selectedField, componentsAndModelsPossibleMainFields, modifiedData]
  );
  const metaFields = formToDisplay.map((meta) => {
    const formType = get_default()(attributes, [selectedField, "type"]);
    if (["component", "dynamiczone"].includes(formType) && !["label", "description"].includes(meta)) {
      return null;
    }
    if (formType === "component" && meta !== "label") {
      return null;
    }
    if (["media", "json", "boolean"].includes(formType) && meta === "placeholder") {
      return null;
    }
    if (meta === "step") {
      return null;
    }
    return /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6, key: meta }, /* @__PURE__ */ react.createElement(
      components_GenericInput,
      {
        type: utils_getInputProps(meta).type,
        hint: meta === "mainField" ? formatMessage({
          id: utils_getTrad("containers.SettingPage.editSettings.relation-field.description")
        }) : "",
        label: formatMessage({
          id: get_default()(utils_getInputProps(meta), "label.id", "app.utils.defaultMessage")
        }),
        name: meta,
        onChange: onMetaChange,
        value: get_default()(fieldForm, ["metadata", meta], ""),
        options: getSelectedItemSelectOptions(formType)
      }
    ));
  });
  const canResize = !NON_RESIZABLE_FIELD_TYPES.includes(attributes[selectedField].type);
  const sizeField = /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6, key: "size" }, /* @__PURE__ */ react.createElement(
    dist.Select,
    {
      value: fieldForm?.size,
      name: "size",
      onChange: (value) => {
        onSizeChange({ name: selectedField, value });
      },
      label: formatMessage({
        id: utils_getTrad("containers.SettingPage.editSettings.size.label"),
        defaultMessage: "Size"
      })
    },
    FIELD_SIZES.map(([value, label]) => /* @__PURE__ */ react.createElement(dist.Option, { key: value, value }, label))
  ));
  const hasTimePicker = TIME_FIELD_TYPES.includes(attributes[selectedField].type);
  const timeStepField = /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6, key: "step" }, /* @__PURE__ */ react.createElement(
    dist.Select,
    {
      value: get_default()(fieldForm, ["metadata", "step"], 1),
      name: "step",
      onChange: (value) => onMetaChange({ target: { name: "step", value } }),
      label: formatMessage({
        id: utils_getTrad("containers.SettingPage.editSettings.step.label"),
        defaultMessage: "Time interval (minutes)"
      })
    },
    TIME_FIELD_OPTIONS.map((value) => /* @__PURE__ */ react.createElement(dist.Option, { key: value, value }, value))
  ));
  return /* @__PURE__ */ react.createElement(react.Fragment, null, metaFields, canResize && sizeField, hasTimePicker && timeStepField);
};
ModalForm.propTypes = {
  onMetaChange: (prop_types_default()).func.isRequired,
  onSizeChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalForm = (ModalForm);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/components/FormModal.js










const HeaderContainer = (0,styled_components_browser_esm["default"])(dist.Flex)`
  svg {
    width: ${32 / 16}rem;
    height: ${24 / 16}rem;
    margin-right: ${({ theme }) => theme.spaces[3]};
  }
`;
const FormModal = ({ onToggle, onMetaChange, onSizeChange, onSubmit, type, customFieldUid }) => {
  const { selectedField } = hooks_useLayoutDnd();
  const { formatMessage } = (0,react_intl.useIntl)();
  const getAttrType = () => {
    if (type === "timestamp") {
      return "date";
    }
    if (["decimal", "float", "integer", "biginter"].includes(type)) {
      return "number";
    }
    return type;
  };
  return /* @__PURE__ */ react.createElement(dist.ModalLayout, { onClose: onToggle, labelledBy: "title" }, /* @__PURE__ */ react.createElement("form", { onSubmit }, /* @__PURE__ */ react.createElement(dist.ModalHeader, null, /* @__PURE__ */ react.createElement(HeaderContainer, null, /* @__PURE__ */ react.createElement(components_FieldTypeIcon, { type: getAttrType(), customFieldUid }), /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title" }, formatMessage(
    {
      id: utils_getTrad("containers.ListSettingsView.modal-form.edit-label"),
      defaultMessage: "Edit {fieldName}"
    },
    { fieldName: upperFirst_default()(selectedField) }
  )))), /* @__PURE__ */ react.createElement(dist.ModalBody, null, /* @__PURE__ */ react.createElement(dist.Grid, { gap: 4 }, /* @__PURE__ */ react.createElement(components_ModalForm, { onMetaChange, onSizeChange }))), /* @__PURE__ */ react.createElement(
    dist.ModalFooter,
    {
      startActions: /* @__PURE__ */ react.createElement(dist.Button, { onClick: onToggle, variant: "tertiary" }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" })),
      endActions: /* @__PURE__ */ react.createElement(dist.Button, { type: "submit" }, formatMessage({ id: "global.finish", defaultMessage: "Finish" }))
    }
  )));
};
FormModal.defaultProps = {
  customFieldUid: null
};
FormModal.propTypes = {
  customFieldUid: (prop_types_default()).string,
  onSubmit: (prop_types_default()).func.isRequired,
  onToggle: (prop_types_default()).func.isRequired,
  onMetaChange: (prop_types_default()).func.isRequired,
  onSizeChange: (prop_types_default()).func.isRequired,
  type: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_FormModal = (FormModal);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/utils/api.js


const putCMSettingsEV = (body, slug, isContentTypeView) => {
  const { put } = (0,helper_plugin.getFetchClient)();
  return put(
    utils_getRequestUrl(
      isContentTypeView ? `content-types/${slug}/configuration` : `components/${slug}/configuration`
    ),
    body
  );
};
/* harmony default export */ const api = (putCMSettingsEV);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/EditSettingsView/index.js























const EditSettingsView = ({ mainLayout, components, isContentTypeView, slug, updateLayout }) => {
  const [reducerState, dispatch] = (0,react.useReducer)(
    EditSettingsView_reducer,
    EditSettingsView_reducer_initialState,
    () => EditSettingsView_init(EditSettingsView_reducer_initialState, mainLayout, components)
  );
  const [isDraggingSibling, setIsDraggingSibling] = (0,react.useState)(false);
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const { goBack } = (0,react_router_dom_min.useHistory)();
  const [isModalFormOpen, setIsModalFormOpen] = (0,react.useState)(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = (0,react.useState)(false);
  const { componentLayouts, initialData, modifiedData, metaToEdit, metaForm } = reducerState;
  const { formatMessage } = (0,react_intl.useIntl)();
  const modelName = get_default()(mainLayout, ["info", "displayName"], "");
  const attributes = get_default()(modifiedData, ["attributes"], {});
  const entryTitleOptions = Object.keys(attributes).filter((attr) => {
    const type = get_default()(attributes, [attr, "type"], "");
    return ![
      "dynamiczone",
      "json",
      "text",
      "relation",
      "component",
      "boolean",
      "media",
      "password",
      "richtext",
      "timestamp"
    ].includes(type) && !!type;
  });
  const editLayout = get_default()(modifiedData, ["layouts", "edit"], []);
  const displayedFields = flatMap_default()(editLayout, "rowContent");
  const editLayoutFields = Object.keys(modifiedData.attributes).filter((attr) => get_default()(modifiedData, ["metadatas", attr, "edit", "visible"], false) === true).filter((attr) => displayedFields.findIndex((el) => el.name === attr) === -1).sort();
  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE",
      keys: name.split("."),
      value
    });
  };
  const handleToggleModal = () => {
    setIsModalFormOpen((prev) => !prev);
  };
  const toggleConfirmDialog = () => {
    setIsConfirmDialogOpen((prev) => !prev);
  };
  const handleMetaChange = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE_META",
      keys: name.split("."),
      value
    });
  };
  const handleSizeChange = ({ name, value }) => {
    dispatch({
      type: "ON_CHANGE_SIZE",
      name,
      value
    });
  };
  const handleMetaSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SUBMIT_META_FORM"
    });
    handleToggleModal();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleConfirmDialog();
  };
  const submitMutation = (0,react_query_lib.useMutation)(
    (body) => {
      return api(body, slug, isContentTypeView);
    },
    {
      onSuccess({ data }) {
        if (updateLayout) {
          updateLayout(data.data);
        }
        dispatch({
          type: "SUBMIT_SUCCEEDED"
        });
        toggleConfirmDialog();
        trackUsage("didEditEditSettings");
      },
      onError() {
        toggleNotification({ type: "warning", message: { id: "notification.error" } });
      }
    }
  );
  const { isLoading: isSubmittingForm } = submitMutation;
  const handleConfirm = () => {
    const body = pick_default()(cloneDeep_default()(modifiedData), ["layouts", "metadatas", "settings"]);
    set_default()(body, "layouts.edit", unformatLayout(body.layouts.edit));
    submitMutation.mutate(body);
  };
  const handleMoveRelation = (fromIndex, toIndex) => {
    dispatch({
      type: "MOVE_RELATION",
      fromIndex,
      toIndex
    });
  };
  const handleMoveField = (fromIndex, toIndex) => {
    dispatch({
      type: "MOVE_FIELD",
      fromIndex,
      toIndex
    });
  };
  const moveItem = (dragIndex, hoverIndex, dragRowIndex, hoverRowIndex) => {
    if (dragRowIndex === hoverRowIndex) {
      dispatch({
        type: "REORDER_ROW",
        dragRowIndex,
        dragIndex,
        hoverIndex
      });
    } else {
      dispatch({
        type: "REORDER_DIFF_ROW",
        dragIndex,
        hoverIndex,
        dragRowIndex,
        hoverRowIndex
      });
    }
  };
  const moveRow = (fromIndex, toIndex) => {
    dispatch({
      type: "MOVE_ROW",
      fromIndex,
      toIndex
    });
  };
  return /* @__PURE__ */ react.createElement(
    components_LayoutDndProvider,
    {
      isContentTypeView,
      attributes,
      modifiedData,
      slug,
      componentLayouts,
      selectedField: metaToEdit,
      fieldForm: metaForm,
      onMoveRelation: handleMoveRelation,
      onMoveField: handleMoveField,
      moveRow,
      moveItem,
      setEditFieldToSelect: (name) => {
        dispatch({
          type: "SET_FIELD_TO_EDIT",
          name
        });
        handleToggleModal();
      },
      isDraggingSibling,
      setIsDraggingSibling
    },
    /* @__PURE__ */ react.createElement(dist.Main, null, /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
      dist.HeaderLayout,
      {
        title: formatMessage(
          {
            id: utils_getTrad("components.SettingsViewWrapper.pluginHeader.title"),
            defaultMessage: `Configure the view - ${upperFirst_default()(modelName)}`
          },
          { name: upperFirst_default()(modelName) }
        ),
        subtitle: formatMessage({
          id: utils_getTrad("components.SettingsViewWrapper.pluginHeader.description.edit-settings"),
          defaultMessage: "Customize how the edit view will look like."
        }),
        navigationAction: /* @__PURE__ */ react.createElement(
          helper_plugin.Link,
          {
            startIcon: /* @__PURE__ */ react.createElement(icons_dist.ArrowLeft, null),
            onClick: (e) => {
              e.preventDefault();
              goBack();
            },
            to: "/"
          },
          formatMessage({
            id: "global.back",
            defaultMessage: "Back"
          })
        ),
        primaryAction: /* @__PURE__ */ react.createElement(
          dist.Button,
          {
            disabled: isEqual_default()(initialData, modifiedData),
            startIcon: /* @__PURE__ */ react.createElement(icons_dist.Check, null),
            type: "submit"
          },
          formatMessage({ id: "global.save", defaultMessage: "Save" })
        )
      }
    ), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(
      dist.Box,
      {
        background: "neutral0",
        hasRadius: true,
        shadow: "filterShadow",
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 7,
        paddingRight: 7
      },
      /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", as: "h2" }, formatMessage({
        id: utils_getTrad("containers.SettingPage.settings"),
        defaultMessage: "Settings"
      })), /* @__PURE__ */ react.createElement(dist.Grid, null, /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
        dist.Select,
        {
          label: formatMessage({
            id: utils_getTrad("containers.SettingPage.editSettings.entry.title"),
            defaultMessage: "Entry title"
          }),
          hint: formatMessage({
            id: utils_getTrad("containers.SettingPage.editSettings.entry.title.description"),
            defaultMessage: "Set the display field of your entry"
          }),
          onChange: (value) => {
            handleChange({
              target: {
                name: "settings.mainField",
                value: value === "" ? null : value
              }
            });
          },
          value: modifiedData.settings.mainField
        },
        entryTitleOptions.map((attribute) => /* @__PURE__ */ react.createElement(dist.Option, { key: attribute, value: attribute }, attribute))
      ))), /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 2, paddingBottom: 2 }, /* @__PURE__ */ react.createElement(dist.Divider, null)), /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", as: "h3" }, formatMessage({
        id: utils_getTrad("containers.SettingPage.view"),
        defaultMessage: "View"
      })), /* @__PURE__ */ react.createElement(
        components_DisplayedFields,
        {
          attributes,
          editLayout,
          fields: editLayoutFields,
          onAddField: (field) => {
            dispatch({
              type: "ON_ADD_FIELD",
              name: field
            });
          },
          onRemoveField: (rowId, index) => {
            dispatch({
              type: "REMOVE_FIELD",
              rowIndex: rowId,
              fieldIndex: index
            });
          }
        }
      ))
    )), /* @__PURE__ */ react.createElement(
      helper_plugin.ConfirmDialog,
      {
        bodyText: {
          id: utils_getTrad("popUpWarning.warning.updateAllSettings"),
          defaultMessage: "This will modify all your settings"
        },
        iconRightButton: /* @__PURE__ */ react.createElement(icons_dist.Check, null),
        isConfirmButtonLoading: isSubmittingForm,
        isOpen: isConfirmDialogOpen,
        onToggleDialog: toggleConfirmDialog,
        onConfirm: handleConfirm,
        variantRightButton: "success-light"
      }
    )), isModalFormOpen && /* @__PURE__ */ react.createElement(
      components_FormModal,
      {
        onSubmit: handleMetaSubmit,
        onToggle: handleToggleModal,
        onMetaChange: handleMetaChange,
        onSizeChange: handleSizeChange,
        type: get_default()(attributes, [metaToEdit, "type"], ""),
        customFieldUid: get_default()(attributes, [metaToEdit, "customField"], "")
      }
    ))
  );
};
EditSettingsView.defaultProps = {
  isContentTypeView: false,
  updateLayout: null
};
EditSettingsView.propTypes = {
  components: (prop_types_default()).object.isRequired,
  isContentTypeView: (prop_types_default()).bool,
  mainLayout: prop_types_default().shape({
    attributes: (prop_types_default()).object.isRequired,
    info: (prop_types_default()).object.isRequired,
    layouts: prop_types_default().shape({
      list: (prop_types_default()).array.isRequired,
      edit: (prop_types_default()).array.isRequired
    }).isRequired,
    metadatas: (prop_types_default()).object.isRequired,
    options: (prop_types_default()).object.isRequired
  }).isRequired,
  slug: (prop_types_default()).string.isRequired,
  updateLayout: (prop_types_default()).func
};
/* harmony default export */ const pages_EditSettingsView = (EditSettingsView);

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/ListView/constants.js
var ListView_constants = __webpack_require__(28933);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/actions.js

const actions_getData = () => ({ type: ListView_constants/* GET_DATA */.ZA });
const actions_getDataSucceeded = (pagination, data) => ({
  type: ListView_constants/* GET_DATA_SUCCEEDED */.Id,
  pagination,
  data
});
const onResetListHeaders = () => ({ type: ListView_constants/* ON_RESET_LIST_HEADERS */.MP });
function ListView_actions_resetProps() {
  return { type: ListView_constants/* RESET_PROPS */.c2 };
}
const actions_setLayout = ({ components, contentType }) => {
  const { layouts } = contentType;
  return {
    contentType,
    components,
    displayedHeaders: layouts.list,
    type: ListView_constants/* SET_LIST_LAYOUT */.Zz
  };
};
const onChangeListHeaders = (target) => ({ type: ListView_constants/* ON_CHANGE_LIST_HEADERS */.Rp, target });

// EXTERNAL MODULE: ./node_modules/redux/lib/redux.js
var redux = __webpack_require__(35281);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/ListView/reducer.js
var ListView_reducer = __webpack_require__(37562);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/selectors.js


const listViewDomain = () => (state) => state["content-manager_listView"] || ListView_reducer/* initialState */.E;
const makeSelectListView = () => (0,es/* createSelector */.P1)(listViewDomain(), (substate) => {
  return substate;
});
const selectDisplayedHeaders = (state) => {
  const { displayedHeaders } = state["content-manager_listView"];
  return displayedHeaders;
};
/* harmony default export */ const ListView_selectors = (makeSelectListView);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/Media/FileWrapper.js




const FileWrapper_Wrapper = (0,styled_components_browser_esm["default"])(dist.Flex)`
  position: relative;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.neutral150};
  padding-left: 1px;

  span {
    line-height: 0.6rem;
    font-size: 0.6rem;
  }
`;
const FileWrapper = ({ children, ...props }) => {
  return /* @__PURE__ */ react.createElement(FileWrapper_Wrapper, { justifyContent: "center", alignItems: "center", as: "span", ...props }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma", textColor: "neutral600" }, children));
};
FileWrapper.propTypes = {
  children: (prop_types_default()).string.isRequired
};
/* harmony default export */ const Media_FileWrapper = (FileWrapper);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/Media/index.js





const Media = ({ url, mime, alternativeText, name, ext, formats }) => {
  const fileURL = (0,helper_plugin.prefixFileUrlWithBackendUrl)(url);
  if (mime.includes("image")) {
    const thumbnail = formats?.thumbnail?.url || null;
    const mediaURL = (0,helper_plugin.prefixFileUrlWithBackendUrl)(thumbnail) || fileURL;
    return /* @__PURE__ */ react.createElement(dist.Avatar, { src: mediaURL, alt: alternativeText || name, preview: true });
  }
  const fileExtension = (0,helper_plugin.getFileExtension)(ext);
  const fileName = name.length > 100 ? `${name.substring(0, 100)}...` : name;
  return /* @__PURE__ */ react.createElement(dist.Tooltip, { description: fileName }, /* @__PURE__ */ react.createElement(Media_FileWrapper, null, fileExtension));
};
Media.defaultProps = {
  alternativeText: null,
  formats: null
};
Media.propTypes = {
  alternativeText: (prop_types_default()).string,
  ext: (prop_types_default()).string.isRequired,
  formats: (prop_types_default()).object,
  mime: (prop_types_default()).string.isRequired,
  name: (prop_types_default()).string.isRequired,
  url: (prop_types_default()).string.isRequired
};
/* harmony default export */ const CellContent_Media = (Media);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/MultipleMedias.js





const MultipleMedia = ({ value }) => {
  return /* @__PURE__ */ react.createElement(dist.AvatarGroup, null, value.map((file, index) => {
    const key = `${file.id}${index}`;
    if (index === 3) {
      const remainingFiles = `+${value.length - 3}`;
      return /* @__PURE__ */ react.createElement(Media_FileWrapper, { key, preview: false }, remainingFiles);
    }
    if (index > 3) {
      return null;
    }
    return /* @__PURE__ */ react.createElement(CellContent_Media, { key, ...file });
  }));
};
MultipleMedia.propTypes = {
  value: prop_types_default().arrayOf(
    prop_types_default().shape({
      alternativeText: (prop_types_default()).string,
      ext: (prop_types_default()).string.isRequired,
      formats: (prop_types_default()).object,
      mime: (prop_types_default()).string.isRequired,
      name: (prop_types_default()).string.isRequired,
      url: (prop_types_default()).string.isRequired
    })
  ).isRequired
};
/* harmony default export */ const MultipleMedias = (MultipleMedia);

// EXTERNAL MODULE: ./node_modules/date-fns/parseISO/index.js
var parseISO = __webpack_require__(51196);
var parseISO_default = /*#__PURE__*/__webpack_require__.n(parseISO);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/CellValue.js




const CellValue = ({ type, value }) => {
  const { formatDate, formatTime, formatNumber } = (0,react_intl.useIntl)();
  let formattedValue = value;
  if (type === "date") {
    formattedValue = formatDate(parseISO_default()(value), { dateStyle: "full" });
  }
  if (type === "datetime") {
    formattedValue = formatDate(value, { dateStyle: "full", timeStyle: "short" });
  }
  if (type === "time") {
    const [hour, minute, second] = value.split(":");
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);
    formattedValue = formatTime(date, {
      numeric: "auto",
      style: "short"
    });
  }
  if (["float", "decimal"].includes(type)) {
    formattedValue = formatNumber(value, {
      // Should be kept in sync with the corresponding value
      // in the design-system/NumberInput: https://github.com/strapi/design-system/blob/main/packages/strapi-design-system/src/NumberInput/NumberInput.js#L53
      maximumFractionDigits: 20
    });
  }
  if (["integer", "biginteger"].includes(type)) {
    formattedValue = formatNumber(value, { maximumFractionDigits: 0 });
  }
  return toString_default()(formattedValue);
};
CellValue.propTypes = {
  type: (prop_types_default()).string.isRequired,
  value: (prop_types_default()).any.isRequired
};
/* harmony default export */ const CellContent_CellValue = (CellValue);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/RelationMultiple/index.js









const TypographyMaxWidth = (0,styled_components_browser_esm["default"])(dist.Typography)`
  max-width: 500px;
`;
const fetchRelation = async (endPoint, notifyStatus, get) => {
  const {
    data: { results, pagination }
  } = await get(endPoint);
  notifyStatus();
  return { results, pagination };
};
const RelationMultiple = ({ fieldSchema, metadatas, name, entityId, value, contentType }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { notifyStatus } = (0,dist.useNotifyAT)();
  const relationFetchEndpoint = (0,react.useMemo)(
    () => utils_getRequestUrl(`relations/${contentType.uid}/${entityId}/${name.split(".")[0]}`),
    [entityId, name, contentType]
  );
  const [isOpen, setIsOpen] = (0,react.useState)(false);
  const { get } = (0,helper_plugin.useFetchClient)();
  const Label = /* @__PURE__ */ react.createElement(dist.Flex, { gap: 1, wrap: "nowrap" }, /* @__PURE__ */ react.createElement(dist.Badge, null, value.count), formatMessage(
    {
      id: "content-manager.containers.ListPage.items",
      defaultMessage: "{number, plural, =0 {items} one {item} other {items}}"
    },
    { number: value.count }
  ));
  const notify = () => {
    const message = formatMessage({
      id: utils_getTrad("DynamicTable.relation-loaded"),
      defaultMessage: "Relations have been loaded"
    });
    notifyStatus(message);
  };
  const { data, status } = (0,react_query_lib.useQuery)(
    [fieldSchema.targetModel, entityId],
    () => fetchRelation(relationFetchEndpoint, notify, get),
    {
      enabled: isOpen,
      staleTime: 0,
      select: (data2) => ({
        ...data2,
        results: [...data2.results].reverse()
      })
    }
  );
  return /* @__PURE__ */ react.createElement(dist.Box, { ...helper_plugin.stopPropagation }, /* @__PURE__ */ react.createElement(
    dist.SimpleMenu,
    {
      label: Label,
      size: "S",
      onOpen: () => setIsOpen(true),
      onClose: () => setIsOpen(false)
    },
    status !== "success" && /* @__PURE__ */ react.createElement(dist.MenuItem, { "aria-disabled": true }, /* @__PURE__ */ react.createElement(dist.Loader, { small: true }, formatMessage({
      id: utils_getTrad("DynamicTable.relation-loading"),
      defaultMessage: "Relations are loading"
    }))),
    status === "success" && /* @__PURE__ */ react.createElement(react.Fragment, null, data?.results.map((entry) => /* @__PURE__ */ react.createElement(dist.MenuItem, { key: entry.id, "aria-disabled": true }, /* @__PURE__ */ react.createElement(TypographyMaxWidth, { ellipsis: true }, /* @__PURE__ */ react.createElement(
      CellContent_CellValue,
      {
        type: metadatas.mainField.schema.type,
        value: entry[metadatas.mainField.name] || entry.id
      }
    )))), data?.pagination.total > 10 && /* @__PURE__ */ react.createElement(
      dist.MenuItem,
      {
        "aria-disabled": true,
        "aria-label": formatMessage({
          id: utils_getTrad("DynamicTable.relation-more"),
          defaultMessage: "This relation contains more entities than displayed"
        })
      },
      /* @__PURE__ */ react.createElement(dist.Typography, null, "\u2026")
    ))
  ));
};
RelationMultiple.propTypes = {
  contentType: prop_types_default().shape({
    uid: (prop_types_default()).string.isRequired
  }).isRequired,
  fieldSchema: prop_types_default().shape({
    relation: (prop_types_default()).string,
    targetModel: (prop_types_default()).string,
    type: (prop_types_default()).string.isRequired
  }).isRequired,
  metadatas: prop_types_default().shape({
    mainField: prop_types_default().shape({
      name: (prop_types_default()).string.isRequired,
      schema: prop_types_default().shape({ type: (prop_types_default()).string.isRequired }).isRequired
    })
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  entityId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
  value: (prop_types_default()).object.isRequired
};
/* harmony default export */ const CellContent_RelationMultiple = (RelationMultiple);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/RelationSingle/index.js





const RelationSingle_TypographyMaxWidth = (0,styled_components_browser_esm["default"])(dist.Typography)`
  max-width: 500px;
`;
const RelationSingle = ({ metadatas, value }) => {
  return /* @__PURE__ */ react.createElement(RelationSingle_TypographyMaxWidth, { textColor: "neutral800", ellipsis: true }, /* @__PURE__ */ react.createElement(
    CellContent_CellValue,
    {
      type: metadatas.mainField.schema.type,
      value: value[metadatas.mainField.name] ?? value.id
    }
  ));
};
RelationSingle.propTypes = {
  metadatas: prop_types_default().shape({
    mainField: prop_types_default().shape({
      name: (prop_types_default()).string.isRequired,
      schema: prop_types_default().shape({ type: (prop_types_default()).string.isRequired }).isRequired
    })
  }).isRequired,
  value: (prop_types_default()).object.isRequired
};
/* harmony default export */ const CellContent_RelationSingle = (RelationSingle);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/RepeatableComponent/index.js







const RepeatableComponent_TypographyMaxWidth = (0,styled_components_browser_esm["default"])(dist.Typography)`
  max-width: 500px;
`;
const RepeatableComponentCell = ({ value, metadatas }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const {
    mainField: { type: mainFieldType, name: mainFieldName }
  } = metadatas;
  const Label = /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(dist.Badge, null, value.length), " ", formatMessage(
    {
      id: "content-manager.containers.ListPage.items",
      defaultMessage: "{number, plural, =0 {items} one {item} other {items}}"
    },
    { number: value.length }
  ));
  return /* @__PURE__ */ react.createElement(dist.Box, { ...helper_plugin.stopPropagation }, /* @__PURE__ */ react.createElement(dist.SimpleMenu, { label: Label, size: "S" }, value.map((item) => /* @__PURE__ */ react.createElement(dist.MenuItem, { key: item.id, "aria-disabled": true }, /* @__PURE__ */ react.createElement(RepeatableComponent_TypographyMaxWidth, { ellipsis: true }, /* @__PURE__ */ react.createElement(CellContent_CellValue, { type: mainFieldType, value: item[mainFieldName] || item.id }))))));
};
RepeatableComponentCell.propTypes = {
  metadatas: prop_types_default().shape({
    mainField: prop_types_default().shape({
      name: (prop_types_default()).string,
      type: (prop_types_default()).string,
      value: (prop_types_default()).string
    })
  }).isRequired,
  value: (prop_types_default()).array.isRequired
};
/* harmony default export */ const CellContent_RepeatableComponent = (RepeatableComponentCell);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/SingleComponent/index.js





const SingleComponent_TypographyMaxWidth = (0,styled_components_browser_esm["default"])(dist.Typography)`
  max-width: 250px;
`;
const SingleComponentCell = ({ value, metadatas }) => {
  const { mainField } = metadatas;
  const content = value[mainField.name];
  return /* @__PURE__ */ react.createElement(dist.Tooltip, { label: content }, /* @__PURE__ */ react.createElement(SingleComponent_TypographyMaxWidth, { textColor: "neutral800", ellipsis: true }, /* @__PURE__ */ react.createElement(CellContent_CellValue, { type: mainField.type, value: content })));
};
SingleComponentCell.propTypes = {
  metadatas: prop_types_default().shape({
    mainField: prop_types_default().shape({
      name: (prop_types_default()).string,
      type: (prop_types_default()).string,
      value: (prop_types_default()).string
    })
  }).isRequired,
  value: (prop_types_default()).object.isRequired
};
/* harmony default export */ const SingleComponent = (SingleComponentCell);

// EXTERNAL MODULE: ./node_modules/lodash/isNumber.js
var isNumber = __webpack_require__(81763);
var isNumber_default = /*#__PURE__*/__webpack_require__.n(isNumber);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/utils/isSingleRelation.js
function isSingleRelation(type) {
  return ["oneToOne", "manyToOne", "oneToOneMorph"].includes(type);
}

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/utils/hasContent.js




function hasContent(type, content, metadatas, fieldSchema) {
  if (type === "component") {
    const {
      mainField: { name: mainFieldName, type: mainFieldType }
    } = metadatas;
    if (fieldSchema?.repeatable) {
      return content.length > 0;
    }
    const value = content?.[mainFieldName];
    if (mainFieldName === "id" && ![void 0, null].includes(value)) {
      return true;
    }
    if (isFieldTypeNumber(mainFieldType) && mainFieldType !== "biginteger" && mainFieldName !== "id") {
      return isNumber_default()(value);
    }
    return !isEmpty_default()(value);
  }
  if (type === "relation") {
    if (isSingleRelation(fieldSchema.relation)) {
      return !isEmpty_default()(content);
    }
    return content?.count > 0;
  }
  if (isFieldTypeNumber(type) && type !== "biginteger") {
    return isNumber_default()(content);
  }
  if (type === "boolean") {
    return content !== null;
  }
  return !isEmpty_default()(content);
}

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/CellContent/index.js













const CellContent_TypographyMaxWidth = (0,styled_components_browser_esm["default"])(dist.Typography)`
  max-width: 300px;
`;
const CellContent = ({ content, fieldSchema, metadatas, name, rowId, contentType }) => {
  const { type } = fieldSchema;
  if (!hasContent(type, content, metadatas, fieldSchema)) {
    return /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800" }, "-");
  }
  switch (type) {
    case "media":
      if (!fieldSchema.multiple) {
        return /* @__PURE__ */ react.createElement(CellContent_Media, { ...content });
      }
      return /* @__PURE__ */ react.createElement(MultipleMedias, { value: content });
    case "relation": {
      if (isSingleRelation(fieldSchema.relation)) {
        return /* @__PURE__ */ react.createElement(CellContent_RelationSingle, { metadatas, value: content });
      }
      return /* @__PURE__ */ react.createElement(
        CellContent_RelationMultiple,
        {
          fieldSchema,
          metadatas,
          value: content,
          name,
          entityId: rowId,
          contentType
        }
      );
    }
    case "component":
      if (fieldSchema.repeatable === true) {
        return /* @__PURE__ */ react.createElement(CellContent_RepeatableComponent, { value: content, metadatas });
      }
      return /* @__PURE__ */ react.createElement(SingleComponent, { value: content, metadatas });
    case "string":
      return /* @__PURE__ */ react.createElement(dist.Tooltip, { description: content }, /* @__PURE__ */ react.createElement(CellContent_TypographyMaxWidth, { ellipsis: true, textColor: "neutral800" }, /* @__PURE__ */ react.createElement(CellContent_CellValue, { type, value: content })));
    default:
      return /* @__PURE__ */ react.createElement(CellContent_TypographyMaxWidth, { ellipsis: true, textColor: "neutral800" }, /* @__PURE__ */ react.createElement(CellContent_CellValue, { type, value: content }));
  }
};
CellContent.defaultProps = {
  content: void 0
};
CellContent.propTypes = {
  content: (prop_types_default()).any,
  contentType: prop_types_default().shape({
    uid: (prop_types_default()).string.isRequired
  }).isRequired,
  fieldSchema: prop_types_default().shape({
    component: (prop_types_default()).string,
    multiple: (prop_types_default()).bool,
    type: (prop_types_default()).string.isRequired,
    repeatable: (prop_types_default()).bool,
    relation: (prop_types_default()).string
  }).isRequired,
  metadatas: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  rowId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
};
/* harmony default export */ const DynamicTable_CellContent = (CellContent);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/TableRows/index.js










const TableRows = ({
  canCreate,
  canDelete,
  contentType,
  headers,
  entriesToDelete,
  onClickDelete,
  onSelectRow,
  withMainAction,
  withBulkActions,
  rows
}) => {
  const {
    push,
    location: { pathname }
  } = (0,react_router_dom_min.useHistory)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const pluginsQueryParams = hooks_usePluginsQueryParams();
  return /* @__PURE__ */ react.createElement(dist.Tbody, null, rows.map((data, index) => {
    const isChecked = entriesToDelete.findIndex((id) => id === data.id) !== -1;
    const itemLineText = formatMessage(
      {
        id: "content-manager.components.DynamicTable.row-line",
        defaultMessage: "item line {number}"
      },
      { number: index }
    );
    return /* @__PURE__ */ react.createElement(
      dist.Tr,
      {
        key: data.id,
        ...(0,helper_plugin.onRowClick)({
          fn() {
            trackUsage("willEditEntryFromList");
            push({
              pathname: `${pathname}/${data.id}`,
              state: { from: pathname },
              search: pluginsQueryParams
            });
          },
          condition: withBulkActions
        })
      },
      withMainAction && /* @__PURE__ */ react.createElement(dist.Td, { ...helper_plugin.stopPropagation }, /* @__PURE__ */ react.createElement(
        dist.BaseCheckbox,
        {
          "aria-label": formatMessage(
            {
              id: "app.component.table.select.one-entry",
              defaultMessage: `Select {target}`
            },
            { target: (0,utils/* getFullName */.Pp)(data.firstname, data.lastname) }
          ),
          checked: isChecked,
          onChange: () => {
            onSelectRow({ name: data.id, value: !isChecked });
          }
        }
      )),
      headers.map(({ key, cellFormatter, name, ...rest }) => {
        return /* @__PURE__ */ react.createElement(dist.Td, { key }, typeof cellFormatter === "function" ? cellFormatter(data, { key, name, ...rest }) : /* @__PURE__ */ react.createElement(
          DynamicTable_CellContent,
          {
            content: data[name.split(".")[0]],
            name,
            contentType,
            ...rest,
            rowId: data.id
          }
        ));
      }),
      withBulkActions && /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "end", ...helper_plugin.stopPropagation }, /* @__PURE__ */ react.createElement(
        dist.IconButton,
        {
          forwardedAs: react_router_dom_min.Link,
          onClick: () => {
            trackUsage("willEditEntryFromButton");
          },
          to: {
            pathname: `${pathname}/${data.id}`,
            state: { from: pathname },
            search: pluginsQueryParams
          },
          label: formatMessage(
            { id: "app.component.table.edit", defaultMessage: "Edit {target}" },
            { target: itemLineText }
          ),
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(icons_dist.Pencil, null)
        }
      ), canCreate && /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 1 }, /* @__PURE__ */ react.createElement(
        dist.IconButton,
        {
          forwardedAs: react_router_dom_min.Link,
          to: {
            pathname: `${pathname}/create/clone/${data.id}`,
            state: { from: pathname },
            search: pluginsQueryParams
          },
          label: formatMessage(
            {
              id: "app.component.table.duplicate",
              defaultMessage: "Duplicate {target}"
            },
            { target: itemLineText }
          ),
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(icons_dist.Duplicate, null)
        }
      )), canDelete && /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 1 }, /* @__PURE__ */ react.createElement(
        dist.IconButton,
        {
          onClick: () => {
            trackUsage("willDeleteEntryFromList");
            onClickDelete(data.id);
          },
          label: formatMessage(
            { id: "global.delete-target", defaultMessage: "Delete {target}" },
            { target: itemLineText }
          ),
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(icons_dist.Trash, null)
        }
      ))))
    );
  }));
};
TableRows.defaultProps = {
  canCreate: false,
  canDelete: false,
  entriesToDelete: [],
  onClickDelete() {
  },
  onSelectRow() {
  },
  rows: [],
  withBulkActions: false,
  withMainAction: false
};
TableRows.propTypes = {
  canCreate: (prop_types_default()).bool,
  canDelete: (prop_types_default()).bool,
  contentType: prop_types_default().shape({
    uid: (prop_types_default()).string.isRequired
  }).isRequired,
  entriesToDelete: (prop_types_default()).array,
  headers: (prop_types_default()).array.isRequired,
  onClickDelete: (prop_types_default()).func,
  onSelectRow: (prop_types_default()).func,
  rows: (prop_types_default()).array,
  withBulkActions: (prop_types_default()).bool,
  withMainAction: (prop_types_default()).bool
};
/* harmony default export */ const DynamicTable_TableRows = (TableRows);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/InjectionZoneList/index.js




const InjectionZoneList = ({ area, ...props }) => {
  const compos = hooks_useInjectionZone(area);
  if (!compos) {
    return null;
  }
  return /* @__PURE__ */ react.createElement("ul", null, compos.map((compo) => {
    const component = compo.Component(props);
    if (component) {
      return /* @__PURE__ */ react.createElement(dist.Box, { key: compo.name, padding: 3, style: { textAlign: "center" } }, /* @__PURE__ */ react.createElement(compo.Component, { ...props }));
    }
    return null;
  }));
};
InjectionZoneList.propTypes = {
  area: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_InjectionZoneList = (InjectionZoneList);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/ConfirmDialogDeleteAll/index.js







const ConfirmDialogDeleteAll = ({ isConfirmButtonLoading, isOpen, onToggleDialog, onConfirm }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(
    dist.Dialog,
    {
      onClose: onToggleDialog,
      title: formatMessage({
        id: "app.components.ConfirmDialog.title",
        defaultMessage: "Confirmation"
      }),
      labelledBy: "confirmation",
      describedBy: "confirm-description",
      isOpen
    },
    /* @__PURE__ */ react.createElement(dist.DialogBody, { icon: /* @__PURE__ */ react.createElement(icons_dist.ExclamationMarkCircle, null) }, /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(dist.Typography, { id: "confirm-description" }, formatMessage({
      id: utils_getTrad("popUpWarning.bodyMessage.contentType.delete.all"),
      defaultMessage: "Are you sure you want to delete these entries?"
    }))), /* @__PURE__ */ react.createElement(dist.Flex, null, /* @__PURE__ */ react.createElement(components_InjectionZoneList, { area: "contentManager.listView.deleteModalAdditionalInfos" })))),
    /* @__PURE__ */ react.createElement(
      dist.DialogFooter,
      {
        startAction: /* @__PURE__ */ react.createElement(dist.Button, { onClick: onToggleDialog, variant: "tertiary" }, formatMessage({
          id: "app.components.Button.cancel",
          defaultMessage: "Cancel"
        })),
        endAction: /* @__PURE__ */ react.createElement(
          dist.Button,
          {
            onClick: onConfirm,
            variant: "danger-light",
            startIcon: /* @__PURE__ */ react.createElement(icons_dist.Trash, null),
            id: "confirm-delete",
            loading: isConfirmButtonLoading
          },
          formatMessage({
            id: "app.components.Button.confirm",
            defaultMessage: "Confirm"
          })
        )
      }
    )
  );
};
ConfirmDialogDeleteAll.propTypes = {
  isConfirmButtonLoading: (prop_types_default()).bool.isRequired,
  isOpen: (prop_types_default()).bool.isRequired,
  onConfirm: (prop_types_default()).func.isRequired,
  onToggleDialog: (prop_types_default()).func.isRequired
};
/* harmony default export */ const DynamicTable_ConfirmDialogDeleteAll = (ConfirmDialogDeleteAll);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/ConfirmDialogDelete/index.js






const ConfirmDialogDelete = ({ isConfirmButtonLoading, isOpen, onToggleDialog, onConfirm }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(
    dist.Dialog,
    {
      onClose: onToggleDialog,
      title: formatMessage({
        id: "app.components.ConfirmDialog.title",
        defaultMessage: "Confirmation"
      }),
      labelledBy: "confirmation",
      describedBy: "confirm-description",
      isOpen
    },
    /* @__PURE__ */ react.createElement(dist.DialogBody, { icon: /* @__PURE__ */ react.createElement(icons_dist.ExclamationMarkCircle, null) }, /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 2 }, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(dist.Typography, { id: "confirm-description" }, formatMessage({
      id: "components.popUpWarning.message",
      defaultMessage: "Are you sure you want to delete this?"
    }))), /* @__PURE__ */ react.createElement(dist.Flex, null, /* @__PURE__ */ react.createElement(components_InjectionZoneList, { area: "contentManager.listView.deleteModalAdditionalInfos" })))),
    /* @__PURE__ */ react.createElement(
      dist.DialogFooter,
      {
        startAction: /* @__PURE__ */ react.createElement(dist.Button, { onClick: onToggleDialog, variant: "tertiary" }, formatMessage({
          id: "app.components.Button.cancel",
          defaultMessage: "Cancel"
        })),
        endAction: /* @__PURE__ */ react.createElement(
          dist.Button,
          {
            onClick: onConfirm,
            variant: "danger-light",
            startIcon: /* @__PURE__ */ react.createElement(icons_dist.Trash, null),
            id: "confirm-delete",
            loading: isConfirmButtonLoading
          },
          formatMessage({
            id: "app.components.Button.confirm",
            defaultMessage: "Confirm"
          })
        )
      }
    )
  );
};
ConfirmDialogDelete.propTypes = {
  isConfirmButtonLoading: (prop_types_default()).bool.isRequired,
  isOpen: (prop_types_default()).bool.isRequired,
  onConfirm: (prop_types_default()).func.isRequired,
  onToggleDialog: (prop_types_default()).func.isRequired
};
/* harmony default export */ const DynamicTable_ConfirmDialogDelete = (ConfirmDialogDelete);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/DynamicTable/index.js













const StyledStatus = (0,styled_components_browser_esm["default"])(dist.Status)`
  width: min-content;
`;
const DynamicTable = ({
  canCreate,
  canDelete,
  contentTypeName,
  action,
  isBulkable,
  isLoading,
  onConfirmDelete,
  onConfirmDeleteAll,
  layout,
  rows
}) => {
  const { runHookWaterfall } = (0,helper_plugin.useStrapiApp)();
  const hasDraftAndPublish = layout.contentType.options.draftAndPublish || false;
  const { formatMessage } = (0,react_intl.useIntl)();
  const displayedHeaders = (0,lib.useSelector)(selectDisplayedHeaders);
  const tableHeaders = (0,react.useMemo)(() => {
    const headers = runHookWaterfall(exposedHooks/* INJECT_COLUMN_IN_TABLE */.No, {
      displayedHeaders,
      layout
    });
    const formattedHeaders = headers.displayedHeaders.map((header) => {
      const { metadatas } = header;
      if (header.fieldSchema.type === "relation") {
        const sortFieldValue = `${header.name}.${header.metadatas.mainField.name}`;
        return {
          ...header,
          metadatas: {
            ...metadatas,
            label: formatMessage({
              id: utils_getTrad(`containers.ListPage.table-headers.${header.name}`),
              defaultMessage: metadatas.label
            })
          },
          name: sortFieldValue
        };
      }
      return {
        ...header,
        metadatas: {
          ...metadatas,
          label: formatMessage({
            id: utils_getTrad(`containers.ListPage.table-headers.${header.name}`),
            defaultMessage: metadatas.label
          })
        }
      };
    });
    if (!hasDraftAndPublish) {
      return formattedHeaders;
    }
    return [
      ...formattedHeaders,
      {
        key: "__published_at_temp_key__",
        name: "publishedAt",
        fieldSchema: {
          type: "custom"
        },
        metadatas: {
          label: formatMessage({
            id: utils_getTrad(`containers.ListPage.table-headers.publishedAt`),
            defaultMessage: "publishedAt"
          }),
          searchable: false,
          sortable: true
        },
        cellFormatter(cellData) {
          const isPublished = cellData.publishedAt;
          const variant = isPublished ? "success" : "secondary";
          return /* @__PURE__ */ react.createElement(StyledStatus, { showBullet: false, variant, size: "S" }, /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "bold", textColor: `${variant}700` }, formatMessage({
            id: utils_getTrad(`containers.List.${isPublished ? "published" : "draft"}`),
            defaultMessage: isPublished ? "Published" : "Draft"
          })));
        }
      }
    ];
  }, [runHookWaterfall, displayedHeaders, layout, hasDraftAndPublish, formatMessage]);
  return /* @__PURE__ */ react.createElement(
    helper_plugin.DynamicTable,
    {
      components: { ConfirmDialogDelete: DynamicTable_ConfirmDialogDelete, ConfirmDialogDeleteAll: DynamicTable_ConfirmDialogDeleteAll },
      contentType: contentTypeName,
      action,
      isLoading,
      headers: tableHeaders,
      onConfirmDelete,
      onConfirmDeleteAll,
      onOpenDeleteAllModalTrackedEvent: "willBulkDeleteEntries",
      rows,
      withBulkActions: true,
      withMainAction: canDelete && isBulkable
    },
    /* @__PURE__ */ react.createElement(
      DynamicTable_TableRows,
      {
        canCreate,
        canDelete,
        contentType: layout.contentType,
        headers: tableHeaders,
        rows,
        withBulkActions: true,
        withMainAction: canDelete && isBulkable
      }
    )
  );
};
DynamicTable.defaultProps = {
  action: void 0
};
DynamicTable.propTypes = {
  canCreate: (prop_types_default()).bool.isRequired,
  canDelete: (prop_types_default()).bool.isRequired,
  contentTypeName: (prop_types_default()).string.isRequired,
  action: (prop_types_default()).node,
  isBulkable: (prop_types_default()).bool.isRequired,
  isLoading: (prop_types_default()).bool.isRequired,
  layout: prop_types_default().exact({
    components: (prop_types_default()).object.isRequired,
    contentType: prop_types_default().shape({
      attributes: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      layouts: prop_types_default().shape({
        list: (prop_types_default()).array.isRequired
      }).isRequired,
      options: (prop_types_default()).object.isRequired,
      settings: (prop_types_default()).object.isRequired
    }).isRequired
  }).isRequired,
  onConfirmDelete: (prop_types_default()).func.isRequired,
  onConfirmDeleteAll: (prop_types_default()).func.isRequired,
  rows: (prop_types_default()).array.isRequired
};
/* harmony default export */ const components_DynamicTable = (DynamicTable);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/AttributeFilter/hooks/useAllowedAttributes.js


const NOT_ALLOWED_FILTERS = ["json", "component", "media", "richtext", "dynamiczone", "password"];
const TIMESTAMPS = ["createdAt", "updatedAt"];
const useAllowedAttributes = (contentType, slug) => {
  const { allPermissions } = (0,helper_plugin.useRBACProvider)();
  const readPermissionsForSlug = (0,helper_plugin.findMatchingPermissions)(allPermissions, [
    {
      action: "plugin::content-manager.explorer.read",
      subject: slug
    }
  ]);
  const readPermissionForAttr = get_default()(readPermissionsForSlug, ["0", "properties", "fields"], []);
  const attributesArray = Object.keys(get_default()(contentType, ["attributes"]), {});
  const allowedAttributes = attributesArray.filter((attr) => {
    const current = get_default()(contentType, ["attributes", attr], {});
    if (!current.type) {
      return false;
    }
    if (NOT_ALLOWED_FILTERS.includes(current.type)) {
      return false;
    }
    if (!readPermissionForAttr.includes(attr) && attr !== "id" && !TIMESTAMPS.includes(attr)) {
      return false;
    }
    return true;
  }).sort();
  return allowedAttributes;
};
/* harmony default export */ const hooks_useAllowedAttributes = (useAllowedAttributes);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/AttributeFilter/Filters.js






const Filters = ({ displayedFilters }) => {
  const [isVisible, setIsVisible] = (0,react.useState)(false);
  const { formatMessage } = (0,react_intl.useIntl)();
  const buttonRef = (0,react.useRef)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const handleToggle = () => {
    if (!isVisible) {
      trackUsage("willFilterEntries");
    }
    setIsVisible((prev) => !prev);
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(
    dist.Button,
    {
      variant: "tertiary",
      ref: buttonRef,
      startIcon: /* @__PURE__ */ react.createElement(icons_dist.Filter, null),
      onClick: handleToggle,
      size: "S"
    },
    formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
  ), isVisible && /* @__PURE__ */ react.createElement(
    helper_plugin.FilterPopoverURLQuery,
    {
      displayedFilters,
      isVisible,
      onToggle: handleToggle,
      source: buttonRef
    }
  )), /* @__PURE__ */ react.createElement(helper_plugin.FilterListURLQuery, { filtersSchema: displayedFilters }));
};
Filters.propTypes = {
  displayedFilters: prop_types_default().arrayOf(
    prop_types_default().shape({
      name: (prop_types_default()).string.isRequired,
      metadatas: prop_types_default().shape({ label: (prop_types_default()).string }),
      fieldSchema: prop_types_default().shape({ type: (prop_types_default()).string })
    })
  ).isRequired
};
/* harmony default export */ const AttributeFilter_Filters = (Filters);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/components/AttributeFilter/index.js





const AttributeFilter = ({ contentType, slug, metadatas }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const allowedAttributes = hooks_useAllowedAttributes(contentType, slug);
  const displayedFilters = allowedAttributes.map((name) => {
    const attribute = contentType.attributes[name];
    const { type, enum: options } = attribute;
    const trackedEvent = {
      name: "didFilterEntries",
      properties: { useRelation: type === "relation" }
    };
    const { mainField, label } = metadatas[name].list;
    return {
      name,
      metadatas: { label: formatMessage({ id: label, defaultMessage: label }) },
      fieldSchema: { type, options, mainField },
      trackedEvent
    };
  });
  return /* @__PURE__ */ react.createElement(AttributeFilter_Filters, { displayedFilters });
};
AttributeFilter.propTypes = {
  contentType: (prop_types_default()).object.isRequired,
  metadatas: (prop_types_default()).object.isRequired,
  slug: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_AttributeFilter = (AttributeFilter);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/FieldPicker/utils/getAllAllowedHeader.js

const getAllAllowedHeaders = (attributes) => {
  const allowedAttributes = Object.keys(attributes).reduce((acc, current) => {
    const attribute = attributes[current];
    if (utils_checkIfAttributeIsDisplayable(attribute)) {
      acc.push(current);
    }
    return acc;
  }, []);
  return allowedAttributes.sort();
};
/* harmony default export */ const getAllAllowedHeader = (getAllAllowedHeaders);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/FieldPicker/index.js










const FieldPicker = ({ layout }) => {
  const dispatch = (0,lib.useDispatch)();
  const displayedHeaders = (0,lib.useSelector)(selectDisplayedHeaders);
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const allAllowedHeaders = getAllAllowedHeader(layout.contentType.attributes).map((attrName) => {
    const metadatas = layout.contentType.metadatas[attrName].list;
    return {
      name: attrName,
      intlLabel: { id: metadatas.label, defaultMessage: metadatas.label }
    };
  });
  const values = displayedHeaders.map(({ name }) => name);
  const handleChange = (updatedValues) => {
    trackUsage("didChangeDisplayedFields");
    if (updatedValues.length < values.length) {
      const removedHeader = values.filter((value) => {
        return updatedValues.indexOf(value) === -1;
      });
      dispatch(onChangeListHeaders({ name: removedHeader[0], value: true }));
    } else {
      const addedHeader = updatedValues.filter((value) => {
        return values.indexOf(value) === -1;
      });
      dispatch(onChangeListHeaders({ name: addedHeader[0], value: false }));
    }
  };
  return /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(
    dist.Select,
    {
      "aria-label": "change displayed fields",
      value: values,
      onChange: handleChange,
      customizeContent: (values2) => formatMessage(
        {
          id: utils_getTrad("select.currently.selected"),
          defaultMessage: "{count} currently selected"
        },
        { count: values2.length }
      ),
      multi: true,
      size: "S"
    },
    allAllowedHeaders.map((header) => {
      return /* @__PURE__ */ react.createElement(dist.Option, { key: header.name, value: header.name }, formatMessage({
        id: header.intlLabel.id || header.name,
        defaultMessage: header.intlLabel.defaultMessage || header.name
      }));
    })
  ));
};
FieldPicker.propTypes = {
  layout: prop_types_default().shape({
    contentType: prop_types_default().shape({
      attributes: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      layouts: prop_types_default().shape({
        list: (prop_types_default()).array.isRequired
      }).isRequired,
      options: (prop_types_default()).object.isRequired,
      settings: (prop_types_default()).object.isRequired
    }).isRequired
  }).isRequired
};
/* harmony default export */ const ListView_FieldPicker = ((0,react.memo)(FieldPicker));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/PaginationFooter/index.js




const PaginationFooter = ({ pagination }) => {
  return /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(dist.Flex, { alignItems: "flex-end", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(helper_plugin.PageSizeURLQuery, { trackedEvent: "willChangeNumberOfEntriesPerPage" }), /* @__PURE__ */ react.createElement(helper_plugin.PaginationURLQuery, { pagination })));
};
PaginationFooter.defaultProps = {
  pagination: {
    pageCount: 0,
    pageSize: 10,
    total: 0
  }
};
PaginationFooter.propTypes = {
  pagination: prop_types_default().shape({
    page: (prop_types_default()).number,
    pageCount: (prop_types_default()).number,
    pageSize: (prop_types_default()).number,
    total: (prop_types_default()).number
  })
};
/* harmony default export */ const ListView_PaginationFooter = (PaginationFooter);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/utils/index.js


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListView/index.js
























const ListView_cmPermissions = permissions/* default.contentManager */.Z.contentManager;
const ConfigureLayoutBox = (0,styled_components_browser_esm["default"])(dist.Box)`
  svg {
    path {
      fill: ${({ theme }) => theme.colors.neutral900};
    }
  }
`;
function ListView({
  canCreate,
  canDelete,
  canRead,
  data,
  getData: getData2,
  getDataSucceeded: getDataSucceeded2,
  isLoading,
  layout,
  pagination,
  slug
}) {
  const { total } = pagination;
  const {
    contentType: {
      metadatas,
      settings: { bulkable: isBulkable, filterable: isFilterable, searchable: isSearchable }
    }
  } = layout;
  const toggleNotification = (0,helper_plugin.useNotification)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const { refetchPermissions } = (0,helper_plugin.useRBACProvider)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const fetchPermissionsRef = (0,react.useRef)(refetchPermissions);
  const { notifyStatus } = (0,dist.useNotifyAT)();
  const { formatAPIError } = (0,helper_plugin.useAPIErrorHandler)(utils_getTrad);
  (0,helper_plugin.useFocusWhenNavigate)();
  const [{ query }] = (0,helper_plugin.useQueryParams)();
  const params = utils_buildQueryString(query);
  const pluginsQueryParams = (0,qs_lib.stringify)({ plugins: query.plugins }, { encode: false });
  const { pathname } = (0,react_router_dom_min.useLocation)();
  const { push } = (0,react_router_dom_min.useHistory)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const contentType = layout.contentType;
  const hasDraftAndPublish = get_default()(contentType, "options.draftAndPublish", false);
  const fetchClient = (0,helper_plugin.useFetchClient)();
  const { post, del } = fetchClient;
  const requestUrlRef = (0,react.useRef)("");
  const fetchData = (0,react.useCallback)(
    async (endPoint, source) => {
      getData2();
      try {
        const opts = source ? { cancelToken: source.token } : null;
        const {
          data: { results, pagination: paginationResult }
        } = await fetchClient.get(endPoint, opts);
        notifyStatus(
          formatMessage(
            {
              id: utils_getTrad("utils.data-loaded"),
              defaultMessage: "{number, plural, =1 {# entry has} other {# entries have}} successfully been loaded"
            },
            // Using the plural form
            { number: paginationResult.count }
          )
        );
        getDataSucceeded2(paginationResult, results);
      } catch (err) {
        if (axios/* default.isCancel */.Z.isCancel(err)) {
          return;
        }
        const resStatus = get_default()(err, "response.status", null);
        if (resStatus === 403) {
          await fetchPermissionsRef.current();
          toggleNotification({
            type: "info",
            message: { id: utils_getTrad("permissions.not-allowed.update") }
          });
          push("/");
          return;
        }
        toggleNotification({
          type: "warning",
          message: { id: utils_getTrad("error.model.fetch") }
        });
      }
    },
    [formatMessage, getData2, getDataSucceeded2, notifyStatus, push, toggleNotification, fetchClient]
  );
  const handleConfirmDeleteAllData = (0,react.useCallback)(
    async (ids) => {
      try {
        await post(utils_getRequestUrl(`collection-types/${slug}/actions/bulkDelete`), {
          ids
        });
        const requestUrl = utils_getRequestUrl(`collection-types/${slug}${params}`);
        fetchData(requestUrl);
        trackUsageRef.current("didBulkDeleteEntries");
      } catch (err) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(err)
        });
      }
    },
    [fetchData, params, slug, toggleNotification, formatAPIError, post]
  );
  const handleConfirmDeleteData = (0,react.useCallback)(
    async (idToDelete) => {
      try {
        await del(utils_getRequestUrl(`collection-types/${slug}/${idToDelete}`));
        const requestUrl = utils_getRequestUrl(`collection-types/${slug}${params}`);
        fetchData(requestUrl);
        toggleNotification({
          type: "success",
          message: { id: utils_getTrad("success.record.delete") }
        });
      } catch (err) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(err)
        });
      }
    },
    [slug, params, fetchData, toggleNotification, formatAPIError, del]
  );
  (0,react.useEffect)(() => {
    const CancelToken = axios/* default.CancelToken */.Z.CancelToken;
    const source = CancelToken.source();
    const shouldSendRequest = canRead;
    const requestUrl = utils_getRequestUrl(`collection-types/${slug}${params}`);
    if (shouldSendRequest && requestUrl.includes(requestUrlRef.current)) {
      fetchData(requestUrl, source);
    }
    return () => {
      requestUrlRef.current = slug;
      source.cancel("Operation canceled by the user.");
    };
  }, [canRead, getData2, slug, params, getDataSucceeded2, fetchData]);
  const defaultHeaderLayoutTitle = formatMessage({
    id: utils_getTrad("header.name"),
    defaultMessage: "Content"
  });
  const headerLayoutTitle = formatMessage({
    id: contentType.info.displayName,
    defaultMessage: contentType.info.displayName || defaultHeaderLayoutTitle
  });
  const subtitle = canRead ? formatMessage(
    {
      id: utils_getTrad("pages.ListView.header-subtitle"),
      defaultMessage: "{number, plural, =0 {# entries} one {# entry} other {# entries}} found"
    },
    { number: total }
  ) : null;
  const getCreateAction = (props) => canCreate ? /* @__PURE__ */ react.createElement(
    dist.Button,
    {
      ...props,
      forwardedAs: react_router_dom_min.Link,
      onClick: () => {
        const trackerProperty = hasDraftAndPublish ? { status: "draft" } : {};
        trackUsageRef.current("willCreateEntry", trackerProperty);
      },
      to: {
        pathname: `${pathname}/create`,
        search: query.plugins ? pluginsQueryParams : ""
      },
      startIcon: /* @__PURE__ */ react.createElement(icons_dist.Plus, null),
      style: { textDecoration: "none" }
    },
    formatMessage({
      id: utils_getTrad("HeaderLayout.button.label-add-entry"),
      defaultMessage: "Create new entry"
    })
  ) : null;
  return /* @__PURE__ */ react.createElement(dist.Main, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      primaryAction: getCreateAction(),
      subtitle,
      title: headerLayoutTitle,
      navigationAction: /* @__PURE__ */ react.createElement(helper_plugin.Link, { startIcon: /* @__PURE__ */ react.createElement(icons_dist.ArrowLeft, null), to: "/content-manager/" }, formatMessage({
        id: "global.back",
        defaultMessage: "Back"
      }))
    }
  ), !canRead && /* @__PURE__ */ react.createElement(dist.ActionLayout, { endActions: /* @__PURE__ */ react.createElement(components_InjectionZone, { area: "contentManager.listView.actions" }) }), canRead && /* @__PURE__ */ react.createElement(
    dist.ActionLayout,
    {
      endActions: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(components_InjectionZone, { area: "contentManager.listView.actions" }), /* @__PURE__ */ react.createElement(ListView_FieldPicker, { layout }), /* @__PURE__ */ react.createElement(helper_plugin.CheckPermissions, { permissions: ListView_cmPermissions.collectionTypesConfigurations }, /* @__PURE__ */ react.createElement(ConfigureLayoutBox, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(
        dist.IconButton,
        {
          onClick: () => {
            trackUsage("willEditListLayout");
          },
          forwardedAs: react_router_dom_min.Link,
          to: { pathname: `${slug}/configurations/list`, search: pluginsQueryParams },
          icon: /* @__PURE__ */ react.createElement(icons_dist.Cog, null),
          label: formatMessage({
            id: "app.links.configure-view",
            defaultMessage: "Configure the view"
          })
        }
      )))),
      startActions: /* @__PURE__ */ react.createElement(react.Fragment, null, isSearchable && /* @__PURE__ */ react.createElement(
        helper_plugin.SearchURLQuery,
        {
          label: formatMessage(
            { id: "app.component.search.label", defaultMessage: "Search for {target}" },
            { target: headerLayoutTitle }
          ),
          placeholder: formatMessage({
            id: "global.search",
            defaultMessage: "Search"
          }),
          trackedEvent: "didSearch"
        }
      ), isFilterable && /* @__PURE__ */ react.createElement(components_AttributeFilter, { contentType, slug, metadatas }))
    }
  ), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, canRead ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    components_DynamicTable,
    {
      canCreate,
      canDelete,
      contentTypeName: headerLayoutTitle,
      onConfirmDeleteAll: handleConfirmDeleteAllData,
      onConfirmDelete: handleConfirmDeleteData,
      isBulkable,
      isLoading,
      layout,
      rows: data,
      action: getCreateAction({ variant: "secondary" })
    }
  ), /* @__PURE__ */ react.createElement(ListView_PaginationFooter, { pagination: { pageCount: pagination?.pageCount || 1 } })) : /* @__PURE__ */ react.createElement(helper_plugin.NoPermissions, null)));
}
ListView.propTypes = {
  canCreate: (prop_types_default()).bool.isRequired,
  canDelete: (prop_types_default()).bool.isRequired,
  canRead: (prop_types_default()).bool.isRequired,
  data: (prop_types_default()).array.isRequired,
  layout: prop_types_default().exact({
    components: (prop_types_default()).object.isRequired,
    contentType: prop_types_default().shape({
      attributes: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      info: prop_types_default().shape({ displayName: (prop_types_default()).string.isRequired }).isRequired,
      layouts: prop_types_default().shape({
        list: (prop_types_default()).array.isRequired
      }).isRequired,
      options: (prop_types_default()).object.isRequired,
      settings: (prop_types_default()).object.isRequired
    }).isRequired
  }).isRequired,
  isLoading: (prop_types_default()).bool.isRequired,
  getData: (prop_types_default()).func.isRequired,
  getDataSucceeded: (prop_types_default()).func.isRequired,
  pagination: prop_types_default().shape({ total: (prop_types_default()).number.isRequired, pageCount: (prop_types_default()).number }).isRequired,
  slug: (prop_types_default()).string.isRequired
};
const mapStateToProps = ListView_selectors();
function mapDispatchToProps(dispatch) {
  return (0,redux.bindActionCreators)(
    {
      getData: actions_getData,
      getDataSucceeded: actions_getDataSucceeded,
      onChangeListHeaders: onChangeListHeaders,
      onResetListHeaders: onResetListHeaders
    },
    dispatch
  );
}
const withConnect = (0,lib.connect)(mapStateToProps, mapDispatchToProps);
/* harmony default export */ const pages_ListView = ((0,redux.compose)(withConnect)((0,react.memo)(ListView, (react_fast_compare_default()))));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListViewLayoutManager/Permissions.js





const Permissions_Permissions = (props) => {
  const viewPermissions = (0,react.useMemo)(() => utils_generatePermissionsObject(props.slug), [props.slug]);
  const { isLoading, allowedActions } = (0,helper_plugin.useRBAC)(viewPermissions, props.permissions);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(pages_ListView, { ...props, ...allowedActions });
};
Permissions_Permissions.defaultProps = {
  permissions: []
};
Permissions_Permissions.propTypes = {
  permissions: (prop_types_default()).array,
  slug: (prop_types_default()).string.isRequired
};
/* harmony default export */ const ListViewLayoutManager_Permissions = ((0,react.memo)(Permissions_Permissions, (prev, next) => {
  const differenceBetweenRerenders = (0,helper_plugin.difference)(prev, next);
  const propNamesThatHaveChanged = Object.keys(differenceBetweenRerenders).filter(
    (propName) => propName !== "state"
  );
  return propNamesThatHaveChanged.length > 0;
}));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListViewLayoutManager/index.js








const ListViewLayout = ({ layout, ...props }) => {
  const dispatch = (0,lib.useDispatch)();
  const { replace } = (0,react_router_dom_min.useHistory)();
  const [{ query, rawQuery }] = (0,helper_plugin.useQueryParams)();
  const permissions = hooks_useSyncRbac(query, props.slug, "listView");
  const redirectionLink = hooks_useFindRedirectionLink(props.slug);
  (0,react.useEffect)(() => {
    if (!rawQuery) {
      replace(redirectionLink);
    }
  }, [rawQuery, replace, redirectionLink]);
  (0,react.useEffect)(() => {
    dispatch(actions_setLayout(layout));
  }, [dispatch, layout]);
  (0,react.useEffect)(() => {
    return () => {
      dispatch(ListView_actions_resetProps());
    };
  }, [dispatch]);
  if (!permissions) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(ListViewLayoutManager_Permissions, { ...props, layout, permissions });
};
ListViewLayout.propTypes = {
  layout: prop_types_default().exact({
    components: (prop_types_default()).object.isRequired,
    contentType: prop_types_default().shape({
      attributes: (prop_types_default()).object.isRequired,
      metadatas: (prop_types_default()).object.isRequired,
      layouts: prop_types_default().shape({
        list: (prop_types_default()).array.isRequired
      }).isRequired,
      options: (prop_types_default()).object.isRequired,
      settings: (prop_types_default()).object.isRequired,
      pluginOptions: (prop_types_default()).object
    }).isRequired
  }).isRequired,
  slug: (prop_types_default()).string.isRequired
};
/* harmony default export */ const ListViewLayoutManager = (ListViewLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/utils/api.js


const putCMSettingsLV = (body, slug) => {
  const { put } = (0,helper_plugin.getFetchClient)();
  return put(utils_getRequestUrl(`content-types/${slug}/configuration`), body);
};
/* harmony default export */ const utils_api = (putCMSettingsLV);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/components/Settings.js





const Settings = ({ modifiedData, onChange, sortOptions }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { settings, metadatas } = modifiedData;
  return /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", as: "h2" }, formatMessage({
    id: utils_getTrad("containers.SettingPage.settings"),
    defaultMessage: "Settings"
  })), /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "space-between", gap: 4 }, /* @__PURE__ */ react.createElement(dist.Box, { width: "100%" }, /* @__PURE__ */ react.createElement(
    dist.ToggleInput,
    {
      label: formatMessage({
        id: utils_getTrad("form.Input.search"),
        defaultMessage: "Enable search"
      }),
      onChange: (e) => {
        onChange({ target: { name: "settings.searchable", value: e.target.checked } });
      },
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "on"
      }),
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "off"
      }),
      name: "settings.searchable",
      checked: settings.searchable
    }
  )), /* @__PURE__ */ react.createElement(dist.Box, { width: "100%" }, /* @__PURE__ */ react.createElement(
    dist.ToggleInput,
    {
      label: formatMessage({
        id: utils_getTrad("form.Input.filters"),
        defaultMessage: "Enable filters"
      }),
      onChange: (e) => {
        onChange({ target: { name: "settings.filterable", value: e.target.checked } });
      },
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "on"
      }),
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "off"
      }),
      name: "settings.filterable",
      checked: settings.filterable
    }
  )), /* @__PURE__ */ react.createElement(dist.Box, { width: "100%" }, /* @__PURE__ */ react.createElement(
    dist.ToggleInput,
    {
      label: formatMessage({
        id: utils_getTrad("form.Input.bulkActions"),
        defaultMessage: "Enable bulk actions"
      }),
      onChange: (e) => {
        onChange({ target: { name: "settings.bulkable", value: e.target.checked } });
      },
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "on"
      }),
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "off"
      }),
      name: "settings.bulkable",
      checked: settings.bulkable
    }
  ))), /* @__PURE__ */ react.createElement(dist.Grid, { gap: 4 }, /* @__PURE__ */ react.createElement(dist.GridItem, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
    dist.Select,
    {
      label: formatMessage({
        id: utils_getTrad("form.Input.pageEntries"),
        defaultMessage: "Entries per page"
      }),
      hint: formatMessage({
        id: utils_getTrad("form.Input.pageEntries.inputDescription"),
        defaultMessage: "Note: You can override this value in the Collection Type settings page."
      }),
      onChange: (value) => onChange({ target: { name: "settings.pageSize", value } }),
      name: "settings.pageSize",
      value: modifiedData.settings.pageSize || ""
    },
    [10, 20, 50, 100].map((pageSize) => /* @__PURE__ */ react.createElement(dist.Option, { key: pageSize, value: pageSize }, pageSize))
  )), /* @__PURE__ */ react.createElement(dist.GridItem, { s: 12, col: 3 }, /* @__PURE__ */ react.createElement(
    dist.Select,
    {
      label: formatMessage({
        id: utils_getTrad("form.Input.defaultSort"),
        defaultMessage: "Default sort attribute"
      }),
      onChange: (value) => onChange({ target: { name: "settings.defaultSortBy", value } }),
      name: "settings.defaultSortBy",
      value: modifiedData.settings.defaultSortBy || ""
    },
    sortOptions.map((sortBy) => /* @__PURE__ */ react.createElement(dist.Option, { key: sortBy, value: sortBy }, metadatas[sortBy].list.label || sortBy))
  )), /* @__PURE__ */ react.createElement(dist.GridItem, { s: 12, col: 3 }, /* @__PURE__ */ react.createElement(
    dist.Select,
    {
      label: formatMessage({
        id: utils_getTrad("form.Input.sort.order"),
        defaultMessage: "Default sort order"
      }),
      onChange: (value) => onChange({ target: { name: "settings.defaultSortOrder", value } }),
      name: "settings.defaultSortOrder",
      value: modifiedData.settings.defaultSortOrder || ""
    },
    ["ASC", "DESC"].map((order) => /* @__PURE__ */ react.createElement(dist.Option, { key: order, value: order }, order))
  ))));
};
Settings.defaultProps = {
  modifiedData: {},
  sortOptions: []
};
Settings.propTypes = {
  modifiedData: (prop_types_default()).object,
  onChange: (prop_types_default()).func.isRequired,
  sortOptions: (prop_types_default()).array
};
/* harmony default export */ const components_Settings = (Settings);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/components/DraggableCard.js











const ActionButton = styled_components_browser_esm["default"].button`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.spaces[7]};

  &:last-child {
    padding: 0 ${({ theme }) => theme.spaces[3]};
  }
`;
const DraggableCard_DragButton = (0,styled_components_browser_esm["default"])(ActionButton)`
  padding: 0 ${({ theme }) => theme.spaces[3]};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: ${12 / 16}rem;
    height: ${12 / 16}rem;
  }
`;
const DraggableCard_FieldContainer = (0,styled_components_browser_esm["default"])(dist.Flex)`
  max-height: ${32 / 16}rem;
  cursor: pointer;

  svg {
    width: ${10 / 16}rem;
    height: ${10 / 16}rem;

    path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary100};
    border-color: ${({ theme }) => theme.colors.primary200};

    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary600};
      }
    }

    ${dist.Typography} {
      color: ${({ theme }) => theme.colors.primary600};
    }

    ${DraggableCard_DragButton} {
      border-right: 1px solid ${({ theme }) => theme.colors.primary200};
    }
  }
`;
const FieldWrapper = (0,styled_components_browser_esm["default"])(dist.Box)`
  &:last-child {
    padding-right: ${({ theme }) => theme.spaces[3]};
  }
`;
const DraggableCard = ({
  index,
  isDraggingSibling,
  labelField,
  onClickEditField,
  onMoveField,
  onRemoveField,
  name,
  setIsDraggingSibling
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const dragRef = (0,react.useRef)(null);
  const dropRef = (0,react.useRef)(null);
  const [, forceRerenderAfterDnd] = (0,react.useState)(false);
  const editButtonRef = (0,react.useRef)();
  const cardEllipsisTitle = utils_ellipsisCardTitle(labelField);
  const handleClickEditRow = () => {
    if (editButtonRef.current) {
      editButtonRef.current.click();
    }
  };
  const [, drop] = (0,cjs.useDrop)({
    accept: ItemTypes.FIELD,
    hover(item, monitor) {
      if (!dropRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = dropRef.current.getBoundingClientRect();
      const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientX = clientOffset.x - hoverBoundingRect.left;
      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
        return;
      }
      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        return;
      }
      onMoveField(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag, preview] = (0,cjs.useDrag)({
    type: ItemTypes.FIELD,
    item() {
      return { index, labelField, name };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
    end() {
      setIsDraggingSibling(false);
    }
  });
  (0,react.useEffect)(() => {
    preview((0,dist_cjs/* getEmptyImage */.rX)(), { captureDraggingState: false });
  }, [preview]);
  (0,react.useEffect)(() => {
    if (isDragging) {
      setIsDraggingSibling(true);
    }
  }, [isDragging, setIsDraggingSibling]);
  (0,react.useEffect)(() => {
    if (!isDraggingSibling) {
      forceRerenderAfterDnd((prev) => !prev);
    }
  }, [isDraggingSibling]);
  const refs = {
    dragRef: drag(dragRef),
    dropRef: drop(dropRef)
  };
  return /* @__PURE__ */ react.createElement(FieldWrapper, { ref: refs ? refs.dropRef : null }, isDragging && /* @__PURE__ */ react.createElement(components_CardPreview, { transparent: true, labelField: cardEllipsisTitle }), !isDragging && isDraggingSibling && /* @__PURE__ */ react.createElement(components_CardPreview, { isSibling: true, labelField: cardEllipsisTitle }), !isDragging && !isDraggingSibling && /* @__PURE__ */ react.createElement(
    DraggableCard_FieldContainer,
    {
      borderColor: "neutral150",
      background: "neutral100",
      hasRadius: true,
      justifyContent: "space-between",
      onClick: handleClickEditRow,
      isDragging
    },
    /* @__PURE__ */ react.createElement(dist.Flex, { gap: 3 }, /* @__PURE__ */ react.createElement(
      DraggableCard_DragButton,
      {
        as: "span",
        "aria-label": formatMessage(
          {
            id: utils_getTrad("components.DraggableCard.move.field"),
            defaultMessage: "Move {item}"
          },
          { item: labelField }
        ),
        onClick: (e) => e.stopPropagation(),
        ref: refs.dragRef,
        type: "button"
      },
      /* @__PURE__ */ react.createElement(icons_dist.Drag, null)
    ), /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "bold" }, cardEllipsisTitle)),
    /* @__PURE__ */ react.createElement(dist.Flex, { paddingLeft: 3 }, /* @__PURE__ */ react.createElement(
      ActionButton,
      {
        ref: editButtonRef,
        onClick: (e) => {
          e.stopPropagation();
          onClickEditField(name);
        },
        "aria-label": formatMessage(
          {
            id: utils_getTrad("components.DraggableCard.edit.field"),
            defaultMessage: "Edit {item}"
          },
          { item: labelField }
        ),
        type: "button"
      },
      /* @__PURE__ */ react.createElement(icons_dist.Pencil, null)
    ), /* @__PURE__ */ react.createElement(
      ActionButton,
      {
        onClick: onRemoveField,
        "data-testid": `delete-${name}`,
        "aria-label": formatMessage(
          {
            id: utils_getTrad("components.DraggableCard.delete.field"),
            defaultMessage: "Delete {item}"
          },
          { item: labelField }
        ),
        type: "button"
      },
      /* @__PURE__ */ react.createElement(icons_dist.Cross, null)
    ))
  ));
};
DraggableCard.propTypes = {
  index: (prop_types_default()).number.isRequired,
  isDraggingSibling: (prop_types_default()).bool.isRequired,
  labelField: (prop_types_default()).string.isRequired,
  name: (prop_types_default()).string.isRequired,
  onClickEditField: (prop_types_default()).func.isRequired,
  onMoveField: (prop_types_default()).func.isRequired,
  onRemoveField: (prop_types_default()).func.isRequired,
  setIsDraggingSibling: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_DraggableCard = (DraggableCard);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/components/SortDisplayedFields.js








const SortDisplayedFields_FlexWrapper = (0,styled_components_browser_esm["default"])(dist.Box)`
  flex: ${({ size }) => size};
`;
const ScrollableContainer = (0,styled_components_browser_esm["default"])(SortDisplayedFields_FlexWrapper)`
  overflow-x: scroll;
  overflow-y: hidden;
`;
const SelectContainer = (0,styled_components_browser_esm["default"])(SortDisplayedFields_FlexWrapper)`
  max-width: ${32 / 16}rem;
`;
const SortDisplayedFields = ({
  displayedFields,
  listRemainingFields,
  metadatas,
  onAddField,
  onClickEditField,
  onMoveField,
  onRemoveField
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [isDraggingSibling, setIsDraggingSibling] = (0,react.useState)(false);
  const [lastAction, setLastAction] = (0,react.useState)(null);
  const scrollableContainerRef = (0,react.useRef)();
  function handleAddField(...args) {
    setLastAction("add");
    onAddField(...args);
  }
  function handleRemoveField(...args) {
    setLastAction("remove");
    onRemoveField(...args);
  }
  (0,react.useEffect)(() => {
    if (lastAction === "add" && scrollableContainerRef?.current) {
      scrollableContainerRef.current.scrollLeft = scrollableContainerRef.current.scrollWidth;
    }
  }, [displayedFields, lastAction]);
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(dist.Box, { paddingBottom: 4 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", as: "h2" }, formatMessage({
    id: utils_getTrad("containers.SettingPage.view"),
    defaultMessage: "View"
  }))), /* @__PURE__ */ react.createElement(
    dist.Flex,
    {
      paddingTop: 4,
      paddingLeft: 4,
      paddingRight: 4,
      borderColor: "neutral300",
      borderStyle: "dashed",
      borderWidth: "1px",
      hasRadius: true
    },
    /* @__PURE__ */ react.createElement(ScrollableContainer, { size: "1", paddingBottom: 4, ref: scrollableContainerRef }, /* @__PURE__ */ react.createElement(dist.Flex, { gap: 3 }, displayedFields.map((field, index) => /* @__PURE__ */ react.createElement(
      components_DraggableCard,
      {
        key: field,
        index,
        isDraggingSibling,
        onMoveField,
        onClickEditField,
        onRemoveField: (e) => handleRemoveField(e, index),
        name: field,
        labelField: metadatas[field].list.label || field,
        setIsDraggingSibling
      }
    )))),
    /* @__PURE__ */ react.createElement(SelectContainer, { size: "auto", paddingBottom: 4 }, /* @__PURE__ */ react.createElement(
      dist.SimpleMenu,
      {
        label: formatMessage({
          id: utils_getTrad("components.FieldSelect.label"),
          defaultMessage: "Add a field"
        }),
        as: dist.IconButton,
        icon: /* @__PURE__ */ react.createElement(icons_dist.Plus, null),
        disabled: listRemainingFields.length <= 0,
        "data-testid": "add-field"
      },
      listRemainingFields.map((field) => /* @__PURE__ */ react.createElement(dist.MenuItem, { key: field, onClick: () => handleAddField(field) }, metadatas[field].list.label || field))
    ))
  ));
};
SortDisplayedFields.propTypes = {
  displayedFields: prop_types.PropTypes.array.isRequired,
  listRemainingFields: prop_types.PropTypes.array.isRequired,
  metadatas: prop_types.PropTypes.objectOf(
    prop_types.PropTypes.shape({
      list: prop_types.PropTypes.shape({
        label: prop_types.PropTypes.string
      })
    })
  ).isRequired,
  onAddField: prop_types.PropTypes.func.isRequired,
  onClickEditField: prop_types.PropTypes.func.isRequired,
  onMoveField: prop_types.PropTypes.func.isRequired,
  onRemoveField: prop_types.PropTypes.func.isRequired
};
/* harmony default export */ const components_SortDisplayedFields = (SortDisplayedFields);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/components/EditFieldForm.js








const EditFieldForm_HeaderContainer = (0,styled_components_browser_esm["default"])(dist.Flex)`
  svg {
    width: ${32 / 16}rem;
    height: ${24 / 16}rem;
    margin-right: ${({ theme }) => theme.spaces[3]};
  }
`;
const EditFieldForm = ({
  attributes,
  fieldForm,
  fieldToEdit,
  onCloseModal,
  onChangeEditLabel,
  onSubmit,
  type
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const relationType = attributes[fieldToEdit].relationType;
  let shouldDisplaySortToggle = !["media", "relation"].includes(type);
  if (["oneWay", "oneToOne", "manyToOne"].includes(relationType)) {
    shouldDisplaySortToggle = true;
  }
  return /* @__PURE__ */ react.createElement(dist.ModalLayout, { onClose: onCloseModal, labelledBy: "title" }, /* @__PURE__ */ react.createElement("form", { onSubmit }, /* @__PURE__ */ react.createElement(dist.ModalHeader, null, /* @__PURE__ */ react.createElement(EditFieldForm_HeaderContainer, null, /* @__PURE__ */ react.createElement(components_FieldTypeIcon, { type }), /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title" }, formatMessage(
    {
      id: utils_getTrad("containers.ListSettingsView.modal-form.edit-label"),
      defaultMessage: "Edit {fieldName}"
    },
    { fieldName: upperFirst_default()(fieldToEdit) }
  )))), /* @__PURE__ */ react.createElement(dist.ModalBody, null, /* @__PURE__ */ react.createElement(dist.Grid, { gap: 4 }, /* @__PURE__ */ react.createElement(dist.GridItem, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
    dist.TextInput,
    {
      id: "label-input",
      label: formatMessage({
        id: utils_getTrad("form.Input.label"),
        defaultMessage: "Label"
      }),
      name: "label",
      onChange: (e) => onChangeEditLabel(e),
      value: fieldForm.label,
      hint: formatMessage({
        id: utils_getTrad("form.Input.label.inputDescription"),
        defaultMessage: "This value overrides the label displayed in the table's head"
      })
    }
  )), shouldDisplaySortToggle && /* @__PURE__ */ react.createElement(dist.GridItem, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
    dist.ToggleInput,
    {
      "data-testid": "Enable sort on this field",
      checked: fieldForm.sortable,
      label: formatMessage({
        id: utils_getTrad("form.Input.sort.field"),
        defaultMessage: "Enable sort on this field"
      }),
      name: "sortable",
      onChange: (e) => onChangeEditLabel({ target: { name: "sortable", value: e.target.checked } }),
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "on"
      }),
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "off"
      })
    }
  )))), /* @__PURE__ */ react.createElement(
    dist.ModalFooter,
    {
      startActions: /* @__PURE__ */ react.createElement(dist.Button, { onClick: onCloseModal, variant: "tertiary" }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" })),
      endActions: /* @__PURE__ */ react.createElement(dist.Button, { type: "submit" }, formatMessage({ id: "global.finish", defaultMessage: "Finish" }))
    }
  )));
};
EditFieldForm.propTypes = {
  attributes: prop_types_default().objectOf(
    prop_types_default().shape({
      relationType: (prop_types_default()).string
    })
  ).isRequired,
  fieldForm: prop_types_default().shape({
    label: (prop_types_default()).string,
    sortable: (prop_types_default()).bool
  }).isRequired,
  fieldToEdit: (prop_types_default()).string.isRequired,
  onChangeEditLabel: (prop_types_default()).func.isRequired,
  onCloseModal: (prop_types_default()).func.isRequired,
  onSubmit: (prop_types_default()).func.isRequired,
  type: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_EditFieldForm = (EditFieldForm);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/init.js
const init_init = (initialState, layout) => {
  return {
    ...initialState,
    initialData: layout,
    modifiedData: layout
  };
};
/* harmony default export */ const ListSettingsView_init = (init_init);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/reducer.js




const ListSettingsView_reducer_initialState = {
  fieldForm: {},
  fieldToEdit: "",
  initialData: {},
  modifiedData: {}
};
const ListSettingsView_reducer_reducer = (state = ListSettingsView_reducer_initialState, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer_esm["default"])(state, (draftState) => {
    const layoutFieldListPath = ["modifiedData", "layouts", "list"];
    switch (action.type) {
      case "ADD_FIELD": {
        const layoutFieldList = get_default()(state, layoutFieldListPath, []);
        set_default()(draftState, layoutFieldListPath, [...layoutFieldList, action.item]);
        break;
      }
      case "MOVE_FIELD": {
        const layoutFieldList = get_default()(state, layoutFieldListPath, []);
        const { originalIndex, atIndex } = action;
        set_default()(
          draftState,
          layoutFieldListPath,
          utils_arrayMoveItem(layoutFieldList, originalIndex, atIndex)
        );
        break;
      }
      case "ON_CHANGE": {
        set_default()(draftState, ["modifiedData", ...action.keys.split(".")], action.value);
        break;
      }
      case "ON_CHANGE_FIELD_METAS": {
        set_default()(draftState, ["fieldForm", action.name], action.value);
        break;
      }
      case "REMOVE_FIELD": {
        const layoutFieldList = get_default()(state, layoutFieldListPath, []);
        set_default()(
          draftState,
          layoutFieldListPath,
          layoutFieldList.filter((_, index) => action.index !== index)
        );
        break;
      }
      case "SET_FIELD_TO_EDIT": {
        const { fieldToEdit } = action;
        draftState.fieldToEdit = fieldToEdit;
        draftState.fieldForm.label = get_default()(
          draftState,
          ["modifiedData", "metadatas", fieldToEdit, "list", "label"],
          ""
        );
        draftState.fieldForm.sortable = get_default()(
          draftState,
          ["modifiedData", "metadatas", fieldToEdit, "list", "sortable"],
          ""
        );
        break;
      }
      case "UNSET_FIELD_TO_EDIT": {
        draftState.fieldForm = {};
        draftState.fieldToEdit = "";
        break;
      }
      case "SUBMIT_FIELD_FORM": {
        const fieldMetadataPath = ["modifiedData", "metadatas", state.fieldToEdit, "list"];
        set_default()(draftState, [...fieldMetadataPath, "label"], state.fieldForm.label);
        set_default()(draftState, [...fieldMetadataPath, "sortable"], state.fieldForm.sortable);
        break;
      }
      default:
        return draftState;
    }
  })
);
/* harmony default export */ const ListSettingsView_reducer = (ListSettingsView_reducer_reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/utils/excludedSortOptions.js
const EXCLUDED_SORT_OPTIONS = [
  "media",
  "richtext",
  "dynamiczone",
  "relation",
  "component",
  "json"
];

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ListSettingsView/index.js























const ListSettingsView = ({ layout, slug }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const pluginsQueryParams = hooks_usePluginsQueryParams();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const { refetchData } = (0,react.useContext)(contexts_ModelsContext);
  const [showWarningSubmit, setWarningSubmit] = (0,react.useState)(false);
  const toggleWarningSubmit = () => setWarningSubmit((prevState) => !prevState);
  const [reducerState, dispatch] = (0,react.useReducer)(
    ListSettingsView_reducer,
    ListSettingsView_reducer_initialState,
    () => ListSettingsView_init(ListSettingsView_reducer_initialState, layout)
  );
  const { fieldToEdit, fieldForm, initialData, modifiedData } = reducerState;
  const isModalFormOpen = !isEmpty_default()(fieldForm);
  const { attributes } = layout;
  const displayedFields = modifiedData.layouts.list;
  const goBackUrl = () => {
    const {
      settings: { pageSize, defaultSortBy, defaultSortOrder },
      kind,
      uid
    } = initialData;
    const sort = `${defaultSortBy}:${defaultSortOrder}`;
    const goBackSearch = `${(0,qs_lib.stringify)(
      {
        page: 1,
        pageSize,
        sort
      },
      { encode: false }
    )}${pluginsQueryParams ? `&${pluginsQueryParams}` : ""}`;
    return `/content-manager/${kind}/${uid}?${goBackSearch}`;
  };
  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE",
      keys: name,
      value: name === "settings.pageSize" ? parseInt(value, 10) : value
    });
  };
  const handleConfirm = async () => {
    const body = pick_default()(modifiedData, ["layouts", "settings", "metadatas"]);
    submitMutation.mutate(body);
  };
  const handleAddField = (item) => {
    dispatch({
      type: "ADD_FIELD",
      item
    });
  };
  const handleRemoveField = (e, index) => {
    e.stopPropagation();
    if (displayedFields.length === 1) {
      toggleNotification({
        type: "info",
        message: { id: utils_getTrad("notification.info.minimumFields") }
      });
    } else {
      dispatch({
        type: "REMOVE_FIELD",
        index
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleWarningSubmit();
    trackUsage("willSaveContentTypeLayout");
  };
  const handleClickEditField = (fieldToEdit2) => {
    dispatch({
      type: "SET_FIELD_TO_EDIT",
      fieldToEdit: fieldToEdit2
    });
  };
  const handleCloseModal = () => {
    dispatch({
      type: "UNSET_FIELD_TO_EDIT"
    });
  };
  const handleSubmitFieldEdit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SUBMIT_FIELD_FORM"
    });
  };
  const submitMutation = (0,react_query_lib.useMutation)((body) => utils_api(body, slug), {
    onSuccess() {
      trackUsage("didEditListSettings");
      refetchData();
    },
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    }
  });
  const { isLoading: isSubmittingForm } = submitMutation;
  const handleChangeEditLabel = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE_FIELD_METAS",
      name,
      value
    });
  };
  const listRemainingFields = Object.entries(attributes).reduce((acc, cur) => {
    const [attrName, fieldSchema] = cur;
    const isDisplayable = utils_checkIfAttributeIsDisplayable(fieldSchema);
    const isAlreadyDisplayed = displayedFields.includes(attrName);
    if (isDisplayable && !isAlreadyDisplayed) {
      acc.push(attrName);
    }
    return acc;
  }, []).sort();
  const sortOptions = Object.entries(attributes).reduce((acc, cur) => {
    const [name, { type }] = cur;
    if (!EXCLUDED_SORT_OPTIONS.includes(type)) {
      acc.push(name);
    }
    return acc;
  }, []);
  const move = (originalIndex, atIndex) => {
    dispatch({
      type: "MOVE_FIELD",
      originalIndex,
      atIndex
    });
  };
  return /* @__PURE__ */ react.createElement(dist.Layout, null, /* @__PURE__ */ react.createElement(dist.Main, { "aria-busy": isSubmittingForm }, /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      navigationAction: /* @__PURE__ */ react.createElement(helper_plugin.Link, { startIcon: /* @__PURE__ */ react.createElement(icons_dist.ArrowLeft, null), to: goBackUrl, id: "go-back" }, formatMessage({ id: "global.back", defaultMessage: "Back" })),
      primaryAction: /* @__PURE__ */ react.createElement(
        dist.Button,
        {
          size: "S",
          startIcon: /* @__PURE__ */ react.createElement(icons_dist.Check, null),
          disabled: isEqual_default()(modifiedData, initialData),
          type: "submit"
        },
        formatMessage({ id: "global.save", defaultMessage: "Save" })
      ),
      subtitle: formatMessage({
        id: utils_getTrad("components.SettingsViewWrapper.pluginHeader.description.list-settings"),
        defaultMessage: "Define the settings of the list view."
      }),
      title: formatMessage(
        {
          id: utils_getTrad("components.SettingsViewWrapper.pluginHeader.title"),
          defaultMessage: "Configure the view - {name}"
        },
        { name: upperFirst_default()(modifiedData.info.displayName) }
      )
    }
  ), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(
    dist.Box,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "tableShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7
    },
    /* @__PURE__ */ react.createElement(
      components_Settings,
      {
        modifiedData,
        onChange: handleChange,
        sortOptions
      }
    ),
    /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 6, paddingBottom: 6 }, /* @__PURE__ */ react.createElement(dist.Divider, null)),
    /* @__PURE__ */ react.createElement(
      components_SortDisplayedFields,
      {
        listRemainingFields,
        displayedFields,
        onAddField: handleAddField,
        onClickEditField: handleClickEditField,
        onMoveField: move,
        onRemoveField: handleRemoveField,
        metadatas: modifiedData.metadatas
      }
    )
  )), /* @__PURE__ */ react.createElement(
    helper_plugin.ConfirmDialog,
    {
      bodyText: {
        id: utils_getTrad("popUpWarning.warning.updateAllSettings"),
        defaultMessage: "This will modify all your settings"
      },
      iconRightButton: /* @__PURE__ */ react.createElement(icons_dist.Check, null),
      isConfirmButtonLoading: isSubmittingForm,
      isOpen: showWarningSubmit,
      onToggleDialog: toggleWarningSubmit,
      onConfirm: handleConfirm,
      variantRightButton: "success-light"
    }
  )), isModalFormOpen && /* @__PURE__ */ react.createElement(
    components_EditFieldForm,
    {
      attributes,
      fieldForm,
      fieldToEdit,
      onChangeEditLabel: handleChangeEditLabel,
      onCloseModal: handleCloseModal,
      onSubmit: handleSubmitFieldEdit,
      type: get_default()(attributes, [fieldToEdit, "type"], "text")
    }
  )));
};
ListSettingsView.propTypes = {
  layout: prop_types_default().shape({
    uid: (prop_types_default()).string.isRequired,
    settings: prop_types_default().shape({
      bulkable: (prop_types_default()).bool,
      defaultSortBy: (prop_types_default()).string,
      defaultSortOrder: (prop_types_default()).string,
      filterable: (prop_types_default()).bool,
      pageSize: (prop_types_default()).number,
      searchable: (prop_types_default()).bool
    }).isRequired,
    metadatas: (prop_types_default()).object.isRequired,
    options: (prop_types_default()).object.isRequired,
    attributes: prop_types_default().objectOf(
      prop_types_default().shape({
        type: (prop_types_default()).string
      })
    ).isRequired
  }).isRequired,
  slug: (prop_types_default()).string.isRequired
};
/* harmony default export */ const pages_ListSettingsView = ((0,react.memo)(ListSettingsView));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/CollectionTypeRecursivePath/components/ErrorFallback.js



const ErrorFallback = () => {
  return /* @__PURE__ */ react.createElement(dist.Box, { padding: 8 }, /* @__PURE__ */ react.createElement(helper_plugin.AnErrorOccurred, null));
};
/* harmony default export */ const components_ErrorFallback = (ErrorFallback);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/CollectionTypeRecursivePath/index.js















const CollectionTypeRecursivePath_cmPermissions = permissions/* default.contentManager */.Z.contentManager;
const CollectionTypeRecursivePath = ({
  match: {
    params: { slug },
    url
  }
}) => {
  const { isLoading, layout, updateLayout } = hooks_useFetchContentTypeLayout(slug);
  const { rawContentTypeLayout, rawComponentsLayouts } = (0,react.useMemo)(() => {
    let rawContentTypeLayout2 = {};
    let rawComponentsLayouts2 = {};
    if (layout.contentType) {
      rawContentTypeLayout2 = utils_formatLayoutToApi(layout.contentType);
    }
    if (layout.components) {
      rawComponentsLayouts2 = Object.keys(layout.components).reduce((acc, current) => {
        acc[current] = utils_formatLayoutToApi(layout.components[current]);
        return acc;
      }, {});
    }
    return { rawContentTypeLayout: rawContentTypeLayout2, rawComponentsLayouts: rawComponentsLayouts2 };
  }, [layout]);
  const uid = (0,lodash.get)(layout, ["contentType", "uid"], null);
  if (uid !== slug || isLoading) {
    return /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null);
  }
  const renderRoute = ({
    location: { state },
    history: { goBack },
    match: {
      params: { id, origin }
    }
  }, Component) => {
    return /* @__PURE__ */ react.createElement(
      Component,
      {
        slug,
        layout,
        state,
        goBack,
        id,
        origin
      }
    );
  };
  const routes = [
    { path: "create/clone/:origin", comp: pages_EditViewLayoutManager },
    { path: "create", comp: pages_EditViewLayoutManager },
    { path: ":id", comp: pages_EditViewLayoutManager },
    { path: "", comp: ListViewLayoutManager }
  ].map(({ path, comp }) => /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { key: path, path: `${url}/${path}`, render: (props) => renderRoute(props, comp) }));
  return /* @__PURE__ */ react.createElement(react_error_boundary_umd.ErrorBoundary, { FallbackComponent: components_ErrorFallback }, /* @__PURE__ */ react.createElement(contexts_ContentTypeLayout.Provider, { value: layout }, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: `${url}/configurations/list` }, /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: CollectionTypeRecursivePath_cmPermissions.collectionTypesConfigurations }, /* @__PURE__ */ react.createElement(
    pages_ListSettingsView,
    {
      layout: rawContentTypeLayout,
      slug,
      updateLayout
    }
  ))), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: `${url}/configurations/edit` }, /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: CollectionTypeRecursivePath_cmPermissions.collectionTypesConfigurations }, /* @__PURE__ */ react.createElement(
    pages_EditSettingsView,
    {
      components: rawComponentsLayouts,
      isContentTypeView: true,
      mainLayout: rawContentTypeLayout,
      slug,
      updateLayout
    }
  ))), routes)));
};
CollectionTypeRecursivePath.propTypes = {
  match: prop_types_default().shape({
    url: (prop_types_default()).string.isRequired,
    params: prop_types_default().shape({
      slug: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired
};
/* harmony default export */ const pages_CollectionTypeRecursivePath = ((0,react.memo)(CollectionTypeRecursivePath));

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/sharedReducers/crudReducer/reducer.js
var crudReducer_reducer = __webpack_require__(23089);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/ComponentSetttingsView/index.js











const ComponentSetttingsView_cmPermissions = permissions/* default.contentManager */.Z.contentManager;
const ComponentSettingsView = () => {
  const [{ isLoading, data: layout }, dispatch] = (0,react.useReducer)(crudReducer_reducer/* default */.Z, crudReducer_reducer/* crudInitialState */.q);
  const schemasSelector = (0,react.useMemo)(makeSelectModelAndComponentSchemas, []);
  const { schemas } = (0,lib.useSelector)((state) => schemasSelector(state), lib.shallowEqual);
  const { uid } = (0,react_router_dom_min.useParams)();
  const { get } = (0,helper_plugin.useFetchClient)();
  (0,react.useEffect)(() => {
    const CancelToken = axios/* default.CancelToken */.Z.CancelToken;
    const source = CancelToken.source();
    const fetchData = async (source2) => {
      try {
        dispatch(getData());
        const {
          data: { data }
        } = await get(utils_getRequestUrl(`components/${uid}/configuration`), {
          cancelToken: source2.token
        });
        dispatch(getDataSucceeded(utils_mergeMetasWithSchema(data, schemas, "component")));
      } catch (err) {
        if (axios/* default.isCancel */.Z.isCancel(err)) {
          return;
        }
        console.error(err);
      }
    };
    fetchData(source);
    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [uid, schemas, get]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: ComponentSetttingsView_cmPermissions.componentsConfigurations }, /* @__PURE__ */ react.createElement(pages_EditSettingsView, { components: layout.components, mainLayout: layout.component, slug: uid }));
};
/* harmony default export */ const ComponentSetttingsView = ((0,react.memo)(ComponentSettingsView));

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/NoContentType/index.js






const NoContentType = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,helper_plugin.useFocusWhenNavigate)();
  return /* @__PURE__ */ react.createElement(dist.Main, null, /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      title: formatMessage({
        id: utils_getTrad("header.name"),
        defaultMessage: "Content"
      })
    }
  ), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(
    dist.EmptyStateLayout,
    {
      action: /* @__PURE__ */ react.createElement(
        helper_plugin.LinkButton,
        {
          variant: "secondary",
          startIcon: /* @__PURE__ */ react.createElement(icons_dist.Plus, null),
          to: "/plugins/content-type-builder/content-types/create-content-type"
        },
        formatMessage({
          id: "app.components.HomePage.create",
          defaultMessage: "Create your first Content-type"
        })
      ),
      content: formatMessage({
        id: "content-manager.pages.NoContentType.text",
        defaultMessage: "You don't have any content yet, we recommend you to create your first Content-Type."
      }),
      hasRadius: true,
      icon: /* @__PURE__ */ react.createElement(icons_dist.EmptyDocuments, { width: "10rem" }),
      shadow: "tableShadow"
    }
  )));
};
/* harmony default export */ const pages_NoContentType = (NoContentType);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/NoPermissions/index.js





const NoPermissions = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,helper_plugin.useFocusWhenNavigate)();
  return /* @__PURE__ */ react.createElement(dist.Main, null, /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      title: formatMessage({
        id: utils_getTrad("header.name"),
        defaultMessage: "Content"
      })
    }
  ), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(helper_plugin.NoPermissions, null)));
};
/* harmony default export */ const pages_NoPermissions = (NoPermissions);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/SingleTypeRecursivePath/index.js










const SingleTypeRecursivePath_cmPermissions = permissions/* default.contentManager */.Z.contentManager;
const SingleTypeRecursivePath = ({
  match: {
    params: { slug },
    url
  }
}) => {
  const { isLoading, layout, updateLayout } = hooks_useFetchContentTypeLayout(slug);
  const { rawContentTypeLayout, rawComponentsLayouts } = (0,react.useMemo)(() => {
    let rawComponentsLayouts2 = {};
    let rawContentTypeLayout2 = {};
    if (layout.contentType) {
      rawContentTypeLayout2 = utils_formatLayoutToApi(layout.contentType);
    }
    if (layout.components) {
      rawComponentsLayouts2 = Object.keys(layout.components).reduce((acc, current) => {
        acc[current] = utils_formatLayoutToApi(layout.components[current]);
        return acc;
      }, {});
    }
    return { rawContentTypeLayout: rawContentTypeLayout2, rawComponentsLayouts: rawComponentsLayouts2 };
  }, [layout]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(contexts_ContentTypeLayout.Provider, { value: layout }, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: `${url}/configurations/edit` }, /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: SingleTypeRecursivePath_cmPermissions.singleTypesConfigurations }, /* @__PURE__ */ react.createElement(
    pages_EditSettingsView,
    {
      components: rawComponentsLayouts,
      isContentTypeView: true,
      mainLayout: rawContentTypeLayout,
      slug,
      updateLayout
    }
  ))), /* @__PURE__ */ react.createElement(
    react_router_dom_min.Route,
    {
      path: url,
      render: ({ location: { state }, history: { goBack } }) => {
        return /* @__PURE__ */ react.createElement(
          pages_EditViewLayoutManager,
          {
            layout,
            slug,
            isSingleType: true,
            state,
            goBack
          }
        );
      }
    }
  )));
};
SingleTypeRecursivePath.propTypes = {
  match: prop_types_default().shape({
    url: (prop_types_default()).string.isRequired,
    params: prop_types_default().shape({
      slug: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired
};
/* harmony default export */ const pages_SingleTypeRecursivePath = ((0,react.memo)(SingleTypeRecursivePath));

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNav.js
var SubNav = __webpack_require__(53192);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavHeader.js + 4 modules
var SubNavHeader = __webpack_require__(23719);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSections.js
var SubNavSections = __webpack_require__(34446);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSection.js + 1 modules
var SubNavSection = __webpack_require__(29489);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavLink.js
var SubNavLink = __webpack_require__(52305);
// EXTERNAL MODULE: ./node_modules/match-sorter/dist/match-sorter.cjs.js
var match_sorter_cjs = __webpack_require__(63852);
// EXTERNAL MODULE: ./node_modules/lodash/camelCase.js
var camelCase = __webpack_require__(68929);
var camelCase_default = /*#__PURE__*/__webpack_require__.n(camelCase);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/LeftMenu/utils/matchByTitle.js


const matchByTitle = (links, search) => search ? (0,match_sorter_cjs/* default */.ZP)(links, search.toLowerCase(), { keys: [(item) => item.title.toLowerCase()] }) : links.sort((link, nextLink) => {
  const title = camelCase_default()(link.title);
  const nextTitle = camelCase_default()(nextLink.title);
  if (title < nextTitle) {
    return -1;
  }
  if (title > nextTitle) {
    return 1;
  }
  return 0;
});
/* harmony default export */ const utils_matchByTitle = (matchByTitle);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/LeftMenu/utils/index.js


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/LeftMenu/index.js








const LeftMenu = () => {
  const [search, setSearch] = (0,react.useState)("");
  const { formatMessage } = (0,react_intl.useIntl)();
  const modelLinksSelector = (0,react.useMemo)(makeSelectModelLinks, []);
  const { collectionTypeLinks, singleTypeLinks } = (0,lib.useSelector)(
    (state) => modelLinksSelector(state),
    lib.shallowEqual
  );
  const toIntl = (links) => links.map((link) => {
    return {
      ...link,
      title: formatMessage({ id: link.title, defaultMessage: link.title })
    };
  });
  const intlCollectionTypeLinks = toIntl(collectionTypeLinks);
  const intlSingleTypeLinks = toIntl(singleTypeLinks);
  const menu = [
    {
      id: "collectionTypes",
      title: {
        id: utils_getTrad("components.LeftMenu.collection-types"),
        defaultMessage: "Collection Types"
      },
      searchable: true,
      links: utils_matchByTitle(intlCollectionTypeLinks, search)
    },
    {
      id: "singleTypes",
      title: {
        id: utils_getTrad("components.LeftMenu.single-types"),
        defaultMessage: "Single Types"
      },
      searchable: true,
      links: utils_matchByTitle(intlSingleTypeLinks, search)
    }
  ];
  const handleClear = () => {
    setSearch("");
  };
  const handleChangeSearch = ({ target: { value } }) => {
    setSearch(value);
  };
  const label = formatMessage({
    id: utils_getTrad("header.name"),
    defaultMessage: "Content"
  });
  return /* @__PURE__ */ react.createElement(SubNav/* SubNav */.m, { ariaLabel: label }, /* @__PURE__ */ react.createElement(
    SubNavHeader/* SubNavHeader */.p,
    {
      label,
      searchable: true,
      value: search,
      onChange: handleChangeSearch,
      onClear: handleClear,
      searchLabel: formatMessage({
        id: "content-manager.components.LeftMenu.Search.label",
        defaultMessage: "Search for a content type"
      })
    }
  ), /* @__PURE__ */ react.createElement(SubNavSections/* SubNavSections */.Z, null, menu.map((section) => {
    const label2 = formatMessage(
      { id: section.title.id, defaultMessage: section.title.defaultMessage },
      section.title.values
    );
    return /* @__PURE__ */ react.createElement(
      SubNavSection/* SubNavSection */.D,
      {
        key: section.id,
        label: label2,
        badgeLabel: section.links.length.toString()
      },
      section.links.map((link) => {
        const search2 = link.search ? `?${link.search}` : "";
        return /* @__PURE__ */ react.createElement(SubNavLink/* SubNavLink */.E, { as: react_router_dom_min.NavLink, key: link.uid, to: `${link.to}${search2}` }, link.title);
      })
    );
  })));
};
/* harmony default export */ const App_LeftMenu = (LeftMenu);

// EXTERNAL MODULE: ./.cache/admin/src/content-manager/pages/App/constants.js
var App_constants = __webpack_require__(21358);
;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/actions.js

const App_actions_getData = () => ({
  type: App_constants/* GET_DATA */.ZA
});
const App_actions_resetProps = () => ({ type: App_constants/* RESET_PROPS */.c2 });
const setContentTypeLinks = (authorizedCtLinks, authorizedStLinks, models, components) => ({
  type: App_constants/* SET_CONTENT_TYPE_LINKS */.ix,
  data: { authorizedCtLinks, authorizedStLinks, components, contentTypeSchemas: models }
});

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/utils/generateModelsLinks.js



const generateLinks = (links, type, configurations = []) => {
  return links.filter((link) => link.isDisplayed).map((link) => {
    const collectionTypesPermissions = [
      { action: "plugin::content-manager.explorer.create", subject: link.uid },
      { action: "plugin::content-manager.explorer.read", subject: link.uid }
    ];
    const singleTypesPermissions = [
      { action: "plugin::content-manager.explorer.read", subject: link.uid }
    ];
    const permissions = type === "collectionTypes" ? collectionTypesPermissions : singleTypesPermissions;
    const currentContentTypeConfig = configurations.find(({ uid }) => uid === link.uid);
    let search = null;
    if (currentContentTypeConfig) {
      const searchParams = {
        page: 1,
        pageSize: currentContentTypeConfig.settings.pageSize,
        sort: `${currentContentTypeConfig.settings.defaultSortBy}:${currentContentTypeConfig.settings.defaultSortOrder}`
      };
      search = (0,qs_lib.stringify)(searchParams, { encode: false });
    }
    return {
      permissions,
      search,
      kind: link.kind,
      title: link.info.displayName,
      to: `/content-manager/${link.kind}/${link.uid}`,
      uid: link.uid,
      // Used for the list item key in the helper plugin
      name: link.uid,
      isDisplayed: link.isDisplayed
    };
  });
};
const generateModelsLinks = (models, modelsConfigurations) => {
  const groupedModels = Object.entries(groupBy_default()(models, "kind")).map(([key, value]) => ({
    name: key,
    links: value
  }));
  const [collectionTypes, singleTypes] = sortBy_default()(groupedModels, "name");
  return {
    collectionTypesSectionLinks: generateLinks(
      collectionTypes?.links || [],
      "collectionTypes",
      modelsConfigurations
    ),
    singleTypesSectionLinks: generateLinks(singleTypes?.links ?? [], "singleTypes")
  };
};
/* harmony default export */ const utils_generateModelsLinks = (generateModelsLinks);


;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/utils/checkPermissions.js

const checkPermissions = (userPermissions, permissionsToCheck) => permissionsToCheck.map(({ permissions }) => (0,helper_plugin.hasPermissions)(userPermissions, permissions));
/* harmony default export */ const utils_checkPermissions = (checkPermissions);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/utils/getContentTypeLinks.js




const getContentTypeLinks = async (models, userPermissions, toggleNotification) => {
  const { get } = (0,helper_plugin.getFetchClient)();
  try {
    const {
      data: { data: contentTypeConfigurations }
    } = await get(utils_getRequestUrl("content-types-settings"));
    const { collectionTypesSectionLinks, singleTypesSectionLinks } = utils_generateModelsLinks(
      models,
      contentTypeConfigurations
    );
    const ctLinksPermissionsPromises = utils_checkPermissions(
      userPermissions,
      collectionTypesSectionLinks
    );
    const ctLinksPermissions = await Promise.all(ctLinksPermissionsPromises);
    const authorizedCtLinks = collectionTypesSectionLinks.filter(
      (_, index) => ctLinksPermissions[index]
    );
    const stLinksPermissionsPromises = utils_checkPermissions(userPermissions, singleTypesSectionLinks);
    const stLinksPermissions = await Promise.all(stLinksPermissionsPromises);
    const authorizedStLinks = singleTypesSectionLinks.filter(
      (_, index) => stLinksPermissions[index]
    );
    return { authorizedCtLinks, authorizedStLinks };
  } catch (err) {
    console.error(err);
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    return { authorizedCtLinks: [], authorizedStLinks: [], contentTypes: [] };
  }
};
/* harmony default export */ const utils_getContentTypeLinks = (getContentTypeLinks);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/useModels.js











const useModels = () => {
  const dispatch = (0,lib.useDispatch)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const state = (0,lib.useSelector)(selectAppDomain());
  const fetchDataRef = (0,react.useRef)();
  const { allPermissions } = (0,helper_plugin.useRBACProvider)();
  const { runHookWaterfall } = (0,helper_plugin.useStrapiApp)();
  const CancelToken = axios/* default.CancelToken */.Z.CancelToken;
  const source = CancelToken.source();
  const { notifyStatus } = (0,dist.useNotifyAT)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { get } = (0,helper_plugin.useFetchClient)();
  const fetchData = async () => {
    dispatch(App_actions_getData());
    try {
      const [
        {
          data: { data: components }
        },
        {
          data: { data: models }
        }
      ] = await Promise.all(
        ["components", "content-types"].map(
          (endPoint) => get(utils_getRequestUrl(endPoint), { cancelToken: source.token })
        )
      );
      notifyStatus(
        formatMessage({
          id: utils_getTrad("App.schemas.data-loaded"),
          defaultMessage: "The schemas have been successfully loaded."
        })
      );
      const { authorizedCtLinks, authorizedStLinks } = await utils_getContentTypeLinks(
        models,
        allPermissions,
        toggleNotification
      );
      const { ctLinks } = runHookWaterfall(exposedHooks/* MUTATE_COLLECTION_TYPES_LINKS */.LK, {
        ctLinks: authorizedCtLinks,
        models
      });
      const { stLinks } = runHookWaterfall(exposedHooks/* MUTATE_SINGLE_TYPES_LINKS */.dV, {
        stLinks: authorizedStLinks,
        models
      });
      const actionToDispatch = setContentTypeLinks(ctLinks, stLinks, models, components);
      dispatch(actionToDispatch);
    } catch (err) {
      if (axios/* default.isCancel */.Z.isCancel(err)) {
        return;
      }
      console.error(err);
      toggleNotification({ type: "warning", message: { id: "notification.error" } });
    }
  };
  fetchDataRef.current = fetchData;
  (0,react.useEffect)(() => {
    fetchDataRef.current();
    return () => {
      source.cancel("Operation canceled by the user.");
      dispatch(App_actions_resetProps());
    };
  }, [dispatch, toggleNotification]);
  return { ...state, refetchData: fetchDataRef.current };
};
/* harmony default export */ const App_useModels = (useModels);

;// CONCATENATED MODULE: ./.cache/admin/src/content-manager/pages/App/index.js


















const App_cmPermissions = permissions/* default.contentManager */.Z.contentManager;
const App = () => {
  const contentTypeMatch = (0,react_router_dom_min.useRouteMatch)(`/content-manager/:kind/:uid`);
  const { status, collectionTypeLinks, singleTypeLinks, models, refetchData } = App_useModels();
  const authorisedModels = sortBy_default()(
    [...collectionTypeLinks, ...singleTypeLinks],
    (model) => model.title.toLowerCase()
  );
  const { pathname } = (0,react_router_dom_min.useLocation)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { startSection } = (0,helper_plugin.useGuidedTour)();
  const startSectionRef = (0,react.useRef)(startSection);
  (0,react.useEffect)(() => {
    if (startSectionRef.current) {
      startSectionRef.current("contentManager");
    }
  }, []);
  if (status === "loading") {
    return /* @__PURE__ */ react.createElement(dist.Main, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(
      dist.HeaderLayout,
      {
        title: formatMessage({
          id: utils_getTrad("header.name"),
          defaultMessage: "Content"
        })
      }
    ), /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null));
  }
  const supportedModelsToDisplay = models.filter(({ isDisplayed }) => isDisplayed);
  if (authorisedModels.length === 0 && supportedModelsToDisplay.length > 0 && pathname !== "/content-manager/403") {
    return /* @__PURE__ */ react.createElement(react_router_dom_min.Redirect, { to: "/content-manager/403" });
  }
  if (supportedModelsToDisplay.length === 0 && pathname !== "/content-manager/no-content-types") {
    return /* @__PURE__ */ react.createElement(react_router_dom_min.Redirect, { to: "/content-manager/no-content-types" });
  }
  if (!contentTypeMatch && authorisedModels.length > 0) {
    return /* @__PURE__ */ react.createElement(
      react_router_dom_min.Redirect,
      {
        to: `${authorisedModels[0].to}${authorisedModels[0].search ? `?${authorisedModels[0].search}` : ""}`
      }
    );
  }
  return /* @__PURE__ */ react.createElement(dist.Layout, { sideNav: /* @__PURE__ */ react.createElement(App_LeftMenu, null) }, /* @__PURE__ */ react.createElement(DragLayer, null), /* @__PURE__ */ react.createElement(contexts_ModelsContext.Provider, { value: { refetchData } }, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "/content-manager/components/:uid/configurations/edit" }, /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: App_cmPermissions.componentsConfigurations }, /* @__PURE__ */ react.createElement(ComponentSetttingsView, null))), /* @__PURE__ */ react.createElement(
    react_router_dom_min.Route,
    {
      path: "/content-manager/collectionType/:slug",
      component: pages_CollectionTypeRecursivePath
    }
  ), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "/content-manager/singleType/:slug", component: pages_SingleTypeRecursivePath }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "/content-manager/403" }, /* @__PURE__ */ react.createElement(pages_NoPermissions, null)), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "/content-manager/no-content-types" }, /* @__PURE__ */ react.createElement(pages_NoContentType, null)), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "", component: helper_plugin.NotFound }))));
};

/* harmony default export */ function pages_App() {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Helmet.Helmet,
    {
      title: formatMessage({ id: utils_getTrad("plugin.name"), defaultMessage: "Content Manager" })
    }
  ), /* @__PURE__ */ react.createElement(App, null));
}


/***/ }),

/***/ 75347:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 31777:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 34017:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 59905:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 64604:
/***/ (() => {

/* (ignored) */

/***/ })

}]);