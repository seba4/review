function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-campaign-campaign-module"], {
  /***/
  "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js ***!
    \**************************************************************************/

  /*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle, StatusBarAnimation */

  /***/
  function node_modulesCapacitorCoreDistEsmCorePluginDefinitionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraSource", function () {
      return CameraSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraDirection", function () {
      return CameraDirection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraResultType", function () {
      return CameraResultType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function () {
      return FilesystemDirectory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function () {
      return FilesystemEncoding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function () {
      return HapticsImpactStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function () {
      return HapticsNotificationType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function () {
      return KeyboardStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyboardResize", function () {
      return KeyboardResize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function () {
      return ActionSheetOptionStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionType", function () {
      return PermissionType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function () {
      return PhotosAlbumType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function () {
      return StatusBarStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusBarAnimation", function () {
      return StatusBarAnimation;
    });

    var CameraSource;

    (function (CameraSource) {
      CameraSource["Prompt"] = "PROMPT";
      CameraSource["Camera"] = "CAMERA";
      CameraSource["Photos"] = "PHOTOS";
    })(CameraSource || (CameraSource = {}));

    var CameraDirection;

    (function (CameraDirection) {
      CameraDirection["Rear"] = "REAR";
      CameraDirection["Front"] = "FRONT";
    })(CameraDirection || (CameraDirection = {}));

    var CameraResultType;

    (function (CameraResultType) {
      CameraResultType["Uri"] = "uri";
      CameraResultType["Base64"] = "base64";
      CameraResultType["DataUrl"] = "dataUrl";
    })(CameraResultType || (CameraResultType = {}));

    var FilesystemDirectory;

    (function (FilesystemDirectory) {
      /**
       * The Documents directory
       * On iOS it's the app's documents directory.
       * Use this directory to store user-generated content.
       * On Android it's the Public Documents folder, so it's accessible from other apps.
       * It's not accesible on Android 10 unless the app enables legacy External Storage
       * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
       * in the `AndroidManifest.xml`
       */
      FilesystemDirectory["Documents"] = "DOCUMENTS";
      /**
       * The Data directory
       * On iOS it will use the Documents directory
       * On Android it's the directory holding application files.
       * Files will be deleted when the application is uninstalled.
       */

      FilesystemDirectory["Data"] = "DATA";
      /**
       * The Cache directory
       * Can be deleted in cases of low memory, so use this directory to write app-specific files
       * that your app can re-create easily.
       */

      FilesystemDirectory["Cache"] = "CACHE";
      /**
       * The external directory
       * On iOS it will use the Documents directory
       * On Android it's the directory on the primary shared/external
       * storage device where the application can place persistent files it owns.
       * These files are internal to the applications, and not typically visible
       * to the user as media.
       * Files will be deleted when the application is uninstalled.
       */

      FilesystemDirectory["External"] = "EXTERNAL";
      /**
       * The external storage directory
       * On iOS it will use the Documents directory
       * On Android it's the primary shared/external storage directory.
       * It's not accesible on Android 10 unless the app enables legacy External Storage
       * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
       * in the `AndroidManifest.xml`
       */

      FilesystemDirectory["ExternalStorage"] = "EXTERNAL_STORAGE";
    })(FilesystemDirectory || (FilesystemDirectory = {}));

    var FilesystemEncoding;

    (function (FilesystemEncoding) {
      FilesystemEncoding["UTF8"] = "utf8";
      FilesystemEncoding["ASCII"] = "ascii";
      FilesystemEncoding["UTF16"] = "utf16";
    })(FilesystemEncoding || (FilesystemEncoding = {}));

    var HapticsImpactStyle;

    (function (HapticsImpactStyle) {
      HapticsImpactStyle["Heavy"] = "HEAVY";
      HapticsImpactStyle["Medium"] = "MEDIUM";
      HapticsImpactStyle["Light"] = "LIGHT";
    })(HapticsImpactStyle || (HapticsImpactStyle = {}));

    var HapticsNotificationType;

    (function (HapticsNotificationType) {
      HapticsNotificationType["SUCCESS"] = "SUCCESS";
      HapticsNotificationType["WARNING"] = "WARNING";
      HapticsNotificationType["ERROR"] = "ERROR";
    })(HapticsNotificationType || (HapticsNotificationType = {}));

    var KeyboardStyle;

    (function (KeyboardStyle) {
      KeyboardStyle["Dark"] = "DARK";
      KeyboardStyle["Light"] = "LIGHT";
    })(KeyboardStyle || (KeyboardStyle = {}));

    var KeyboardResize;

    (function (KeyboardResize) {
      KeyboardResize["Body"] = "body";
      KeyboardResize["Ionic"] = "ionic";
      KeyboardResize["Native"] = "native";
      KeyboardResize["None"] = "none";
    })(KeyboardResize || (KeyboardResize = {}));

    var ActionSheetOptionStyle;

    (function (ActionSheetOptionStyle) {
      ActionSheetOptionStyle["Default"] = "DEFAULT";
      ActionSheetOptionStyle["Destructive"] = "DESTRUCTIVE";
      ActionSheetOptionStyle["Cancel"] = "CANCEL";
    })(ActionSheetOptionStyle || (ActionSheetOptionStyle = {})); //


    var PermissionType;

    (function (PermissionType) {
      PermissionType["Camera"] = "camera";
      PermissionType["Photos"] = "photos";
      PermissionType["Geolocation"] = "geolocation";
      PermissionType["Notifications"] = "notifications";
      PermissionType["ClipboardRead"] = "clipboard-read";
      PermissionType["ClipboardWrite"] = "clipboard-write";
      PermissionType["Microphone"] = "microphone";
    })(PermissionType || (PermissionType = {}));

    var PhotosAlbumType;

    (function (PhotosAlbumType) {
      /**
       * Album is a "smart" album (such as Favorites or Recently Added)
       */
      PhotosAlbumType["Smart"] = "smart";
      /**
       * Album is a cloud-shared album
       */

      PhotosAlbumType["Shared"] = "shared";
      /**
       * Album is a user-created album
       */

      PhotosAlbumType["User"] = "user";
    })(PhotosAlbumType || (PhotosAlbumType = {}));

    var StatusBarStyle;

    (function (StatusBarStyle) {
      /**
       * Light text for dark backgrounds.
       */
      StatusBarStyle["Dark"] = "DARK";
      /**
       * Dark text for light backgrounds.
       */

      StatusBarStyle["Light"] = "LIGHT";
    })(StatusBarStyle || (StatusBarStyle = {}));

    var StatusBarAnimation;

    (function (StatusBarAnimation) {
      /**
       * No animation during show/hide.
       */
      StatusBarAnimation["None"] = "NONE";
      /**
       * Slide animation during show/hide.
       */

      StatusBarAnimation["Slide"] = "SLIDE";
      /**
       * Fade animation during show/hide.
       */

      StatusBarAnimation["Fade"] = "FADE";
    })(StatusBarAnimation || (StatusBarAnimation = {})); //# sourceMappingURL=core-plugin-definitions.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/global.js":
  /*!*********************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/global.js ***!
    \*********************************************************/

  /*! exports provided: Capacitor, Plugins */

  /***/
  function node_modulesCapacitorCoreDistEsmGlobalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Capacitor", function () {
      return Capacitor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Plugins", function () {
      return Plugins;
    });
    /* harmony import */


    var _web_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./web-runtime */
    "./node_modules/@capacitor/core/dist/esm/web-runtime.js"); // Create our default Capacitor instance, which will be
    // overridden on native platforms


    var Capacitor = function (globalThis) {
      // Create a new CapacitorWeb instance if one doesn't already exist on globalThis
      // Ensure the global is assigned the same Capacitor instance,
      // then export Capacitor so it can be imported in other modules
      return globalThis.Capacitor = globalThis.Capacitor || new _web_runtime__WEBPACK_IMPORTED_MODULE_0__["CapacitorWeb"]();
    }( // figure out the current globalThis, such as "window", "self" or "global"
    // ensure errors are not thrown in an node SSR environment or web worker
    typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});

    var Plugins = Capacitor.Plugins; //# sourceMappingURL=global.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/index.js ***!
    \********************************************************/

  /*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle, StatusBarAnimation, Capacitor, Plugins, AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast, registerWebPlugin, WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin */

  /***/
  function node_modulesCapacitorCoreDistEsmIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-plugin-definitions */
    "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CameraSource", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraSource"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CameraDirection", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraDirection"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CameraResultType", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraResultType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemDirectory"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemEncoding"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsImpactStyle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsNotificationType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardStyle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KeyboardResize", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardResize"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["ActionSheetOptionStyle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionType", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PermissionType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PhotosAlbumType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarStyle"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StatusBarAnimation", function () {
      return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarAnimation"];
    });
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./global */
    "./node_modules/@capacitor/core/dist/esm/global.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Capacitor", function () {
      return _global__WEBPACK_IMPORTED_MODULE_1__["Capacitor"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Plugins", function () {
      return _global__WEBPACK_IMPORTED_MODULE_1__["Plugins"];
    });
    /* harmony import */


    var _web_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./web-plugins */
    "./node_modules/@capacitor/core/dist/esm/web-plugins.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Accessibility", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Accessibility"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AppPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "App", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["App"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["BrowserPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Browser", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Browser"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["CameraPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Camera", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Camera"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ClipboardPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Clipboard"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["FilesystemPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Filesystem"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["GeolocationPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Geolocation"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["DevicePluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Device", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Device"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotificationsPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotifications"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SharePluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Share", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Share"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ModalsPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Modals", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Modals"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["MotionPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Motion", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Motion"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["NetworkPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Network", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Network"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["PermissionsPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Permissions", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Permissions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreenPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["StoragePluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Storage", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Storage"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ToastPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Toast", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Toast"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function () {
      return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["registerWebPlugin"];
    });
    /* harmony import */


    var _web_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./web/index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function () {
      return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPluginRegistry"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WebPlugins", function () {
      return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugins"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WebPlugin", function () {
      return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugin"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function () {
      return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugins"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function () {
      return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugin"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/util.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/util.js ***!
    \*******************************************************/

  /*! exports provided: extend, uuid4 */

  /***/
  function node_modulesCapacitorCoreDistEsmUtilJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "extend", function () {
      return extend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "uuid4", function () {
      return uuid4;
    });

    var extend = function extend(target) {
      var objs = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        objs[_i - 1] = arguments[_i];
      }

      objs.forEach(function (o) {
        if (o && typeof o === 'object') {
          for (var k in o) {
            if (o.hasOwnProperty(k)) {
              target[k] = o[k];
            }
          }
        }
      });
      return target;
    };

    var uuid4 = function uuid4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }; //# sourceMappingURL=util.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web-plugins.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web-plugins.js ***!
    \**************************************************************/

  /*! exports provided: AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast, registerWebPlugin */

  /***/
  function node_modulesCapacitorCoreDistEsmWebPluginsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function () {
      return registerWebPlugin;
    });
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./global */
    "./node_modules/@capacitor/core/dist/esm/global.js");
    /* harmony import */


    var _web_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./web/index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony import */


    var _web_accessibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./web/accessibility */
    "./node_modules/@capacitor/core/dist/esm/web/accessibility.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function () {
      return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Accessibility", function () {
      return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["Accessibility"];
    });
    /* harmony import */


    var _web_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./web/app */
    "./node_modules/@capacitor/core/dist/esm/web/app.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function () {
      return _web_app__WEBPACK_IMPORTED_MODULE_3__["AppPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "App", function () {
      return _web_app__WEBPACK_IMPORTED_MODULE_3__["App"];
    });
    /* harmony import */


    var _web_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./web/browser */
    "./node_modules/@capacitor/core/dist/esm/web/browser.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function () {
      return _web_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Browser", function () {
      return _web_browser__WEBPACK_IMPORTED_MODULE_4__["Browser"];
    });
    /* harmony import */


    var _web_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./web/camera */
    "./node_modules/@capacitor/core/dist/esm/web/camera.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function () {
      return _web_camera__WEBPACK_IMPORTED_MODULE_5__["CameraPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Camera", function () {
      return _web_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"];
    });
    /* harmony import */


    var _web_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./web/clipboard */
    "./node_modules/@capacitor/core/dist/esm/web/clipboard.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function () {
      return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
      return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["Clipboard"];
    });
    /* harmony import */


    var _web_filesystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./web/filesystem */
    "./node_modules/@capacitor/core/dist/esm/web/filesystem.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function () {
      return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["FilesystemPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
      return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["Filesystem"];
    });
    /* harmony import */


    var _web_geolocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./web/geolocation */
    "./node_modules/@capacitor/core/dist/esm/web/geolocation.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function () {
      return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["GeolocationPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
      return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["Geolocation"];
    });
    /* harmony import */


    var _web_device__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./web/device */
    "./node_modules/@capacitor/core/dist/esm/web/device.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function () {
      return _web_device__WEBPACK_IMPORTED_MODULE_9__["DevicePluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Device", function () {
      return _web_device__WEBPACK_IMPORTED_MODULE_9__["Device"];
    });
    /* harmony import */


    var _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./web/local-notifications */
    "./node_modules/@capacitor/core/dist/esm/web/local-notifications.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function () {
      return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotificationsPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
      return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotifications"];
    });
    /* harmony import */


    var _web_share__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./web/share */
    "./node_modules/@capacitor/core/dist/esm/web/share.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function () {
      return _web_share__WEBPACK_IMPORTED_MODULE_11__["SharePluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Share", function () {
      return _web_share__WEBPACK_IMPORTED_MODULE_11__["Share"];
    });
    /* harmony import */


    var _web_modals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./web/modals */
    "./node_modules/@capacitor/core/dist/esm/web/modals.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function () {
      return _web_modals__WEBPACK_IMPORTED_MODULE_12__["ModalsPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Modals", function () {
      return _web_modals__WEBPACK_IMPORTED_MODULE_12__["Modals"];
    });
    /* harmony import */


    var _web_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./web/motion */
    "./node_modules/@capacitor/core/dist/esm/web/motion.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function () {
      return _web_motion__WEBPACK_IMPORTED_MODULE_13__["MotionPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Motion", function () {
      return _web_motion__WEBPACK_IMPORTED_MODULE_13__["Motion"];
    });
    /* harmony import */


    var _web_network__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./web/network */
    "./node_modules/@capacitor/core/dist/esm/web/network.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function () {
      return _web_network__WEBPACK_IMPORTED_MODULE_14__["NetworkPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Network", function () {
      return _web_network__WEBPACK_IMPORTED_MODULE_14__["Network"];
    });
    /* harmony import */


    var _web_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./web/permissions */
    "./node_modules/@capacitor/core/dist/esm/web/permissions.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function () {
      return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["PermissionsPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Permissions", function () {
      return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["Permissions"];
    });
    /* harmony import */


    var _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./web/splash-screen */
    "./node_modules/@capacitor/core/dist/esm/web/splash-screen.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function () {
      return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreenPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
      return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreen"];
    });
    /* harmony import */


    var _web_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./web/storage */
    "./node_modules/@capacitor/core/dist/esm/web/storage.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function () {
      return _web_storage__WEBPACK_IMPORTED_MODULE_17__["StoragePluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Storage", function () {
      return _web_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"];
    });
    /* harmony import */


    var _web_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./web/toast */
    "./node_modules/@capacitor/core/dist/esm/web/toast.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function () {
      return _web_toast__WEBPACK_IMPORTED_MODULE_18__["ToastPluginWeb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Toast", function () {
      return _web_toast__WEBPACK_IMPORTED_MODULE_18__["Toast"];
    });

    Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugins"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"]);

    var registerWebPlugin = function registerWebPlugin(plugin) {
      Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugin"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"], plugin);
    }; //# sourceMappingURL=web-plugins.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web-runtime.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web-runtime.js ***!
    \**************************************************************/

  /*! exports provided: CapacitorWeb */

  /***/
  function node_modulesCapacitorCoreDistEsmWebRuntimeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CapacitorWeb", function () {
      return CapacitorWeb;
    });

    var CapacitorWeb =
    /** @class */
    function () {
      function CapacitorWeb() {
        var _this = this;

        this.platform = 'web';
        this.isNative = false; // Need to assign here to avoid having to define every plugin but still
        // get the typed benefits of the provided plugins in PluginRegistry

        this.Plugins = {}; // Gracefully degrade in non-Proxy supporting engines, e.g. IE11. This
        // effectively means that trying to access an unavailable plugin will
        // locally throw, but this is still better than throwing a syntax error.

        if (typeof Proxy !== 'undefined') {
          // Build a proxy for the Plugins object that returns the "Noop Plugin"
          // if a plugin isn't available
          this.Plugins = new Proxy(this.Plugins, {
            get: function get(target, prop) {
              if (typeof target[prop] === 'undefined') {
                var thisRef_1 = _this;
                return new Proxy({}, {
                  get: function get(_target, _prop) {
                    if (typeof _target[_prop] === 'undefined') {
                      return thisRef_1.pluginMethodNoop.bind(thisRef_1, _target, _prop, prop);
                    } else {
                      return _target[_prop];
                    }
                  }
                });
              } else {
                return target[prop];
              }
            }
          });
        }
      }

      CapacitorWeb.prototype.pluginMethodNoop = function (_target, _prop, pluginName) {
        return Promise.reject(pluginName + " does not have web implementation.");
      };

      CapacitorWeb.prototype.getPlatform = function () {
        return this.platform;
      };

      CapacitorWeb.prototype.isPluginAvailable = function (name) {
        return this.Plugins.hasOwnProperty(name);
      };

      CapacitorWeb.prototype.convertFileSrc = function (filePath) {
        return filePath;
      };

      CapacitorWeb.prototype.handleError = function (e) {
        console.error(e);
      };

      return CapacitorWeb;
    }(); //# sourceMappingURL=web-runtime.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/accessibility.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/accessibility.js ***!
    \********************************************************************/

  /*! exports provided: AccessibilityPluginWeb, Accessibility */

  /***/
  function node_modulesCapacitorCoreDistEsmWebAccessibilityJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function () {
      return AccessibilityPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Accessibility", function () {
      return Accessibility;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var AccessibilityPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AccessibilityPluginWeb, _super);

      function AccessibilityPluginWeb() {
        return _super.call(this, {
          name: 'Accessibility',
          platforms: ['web']
        }) || this;
      }

      AccessibilityPluginWeb.prototype.isScreenReaderEnabled = function () {
        throw new Error('Feature not available in the browser');
      };

      AccessibilityPluginWeb.prototype.speak = function (options) {
        if (!('speechSynthesis' in window)) {
          return Promise.reject('Browser does not support the Speech Synthesis API');
        }

        var utterance = new SpeechSynthesisUtterance(options.value);

        if (options.language) {
          utterance.lang = options.language;
        }

        window.speechSynthesis.speak(utterance);
        return Promise.resolve();
      };

      return AccessibilityPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Accessibility = new AccessibilityPluginWeb(); //# sourceMappingURL=accessibility.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/app.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/app.js ***!
    \**********************************************************/

  /*! exports provided: AppPluginWeb, App */

  /***/
  function node_modulesCapacitorCoreDistEsmWebAppJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function () {
      return AppPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "App", function () {
      return App;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var AppPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AppPluginWeb, _super);

      function AppPluginWeb() {
        var _this = _super.call(this, {
          name: 'App',
          platforms: ['web']
        }) || this;

        if (typeof document !== 'undefined') {
          document.addEventListener('visibilitychange', _this.handleVisibilityChange.bind(_this), false);
        }

        return _this;
      }

      AppPluginWeb.prototype.exitApp = function () {
        throw new Error('Method not implemented.');
      };

      AppPluginWeb.prototype.canOpenUrl = function (_options) {
        return Promise.resolve({
          value: true
        });
      };

      AppPluginWeb.prototype.openUrl = function (_options) {
        return Promise.resolve({
          completed: true
        });
      };

      AppPluginWeb.prototype.getLaunchUrl = function () {
        return Promise.resolve({
          url: ''
        });
      };

      AppPluginWeb.prototype.getState = function () {
        return Promise.resolve({
          isActive: document.hidden !== true
        });
      };

      AppPluginWeb.prototype.handleVisibilityChange = function () {
        var data = {
          isActive: document.hidden !== true
        };
        this.notifyListeners('appStateChange', data);
      };

      return AppPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var App = new AppPluginWeb(); //# sourceMappingURL=app.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/browser.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/browser.js ***!
    \**************************************************************/

  /*! exports provided: BrowserPluginWeb, Browser */

  /***/
  function node_modulesCapacitorCoreDistEsmWebBrowserJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function () {
      return BrowserPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Browser", function () {
      return Browser;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var BrowserPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserPluginWeb, _super);

      function BrowserPluginWeb() {
        return _super.call(this, {
          name: 'Browser',
          platforms: ['web']
        }) || this;
      }

      BrowserPluginWeb.prototype.open = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            this._lastWindow = window.open(options.url, options.windowName || '_blank');
            return [2
            /*return*/
            , Promise.resolve()];
          });
        });
      };

      BrowserPluginWeb.prototype.prefetch = function (_options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            // Does nothing
            return [2
            /*return*/
            , Promise.resolve()];
          });
        });
      };

      BrowserPluginWeb.prototype.close = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            this._lastWindow && this._lastWindow.close();
            return [2
            /*return*/
            , Promise.resolve()];
          });
        });
      };

      return BrowserPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Browser = new BrowserPluginWeb(); //# sourceMappingURL=browser.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/camera.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/camera.js ***!
    \*************************************************************/

  /*! exports provided: CameraPluginWeb, Camera */

  /***/
  function node_modulesCapacitorCoreDistEsmWebCameraJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function () {
      return CameraPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Camera", function () {
      return Camera;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony import */


    var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core-plugin-definitions */
    "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");

    var CameraPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CameraPluginWeb, _super);

      function CameraPluginWeb() {
        return _super.call(this, {
          name: 'Camera',
          platforms: ['web']
        }) || this;
      }

      CameraPluginWeb.prototype.getPhoto = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var _this = this;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            return [2
            /*return*/
            , new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var cameraModal_1, e_1;

                var _this = this;

                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      if (!options.webUseInput) return [3
                      /*break*/
                      , 1];
                      this.fileInputExperience(options, resolve);
                      return [3
                      /*break*/
                      , 7];

                    case 1:
                      if (!customElements.get('pwa-camera-modal')) return [3
                      /*break*/
                      , 6];
                      cameraModal_1 = document.createElement('pwa-camera-modal');
                      document.body.appendChild(cameraModal_1);
                      _a.label = 2;

                    case 2:
                      _a.trys.push([2, 4,, 5]);

                      return [4
                      /*yield*/
                      , cameraModal_1.componentOnReady()];

                    case 3:
                      _a.sent();

                      cameraModal_1.addEventListener('onPhoto', function (e) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                          var photo, _a;

                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                            switch (_b.label) {
                              case 0:
                                photo = e.detail;
                                if (!(photo === null)) return [3
                                /*break*/
                                , 1];
                                reject('User cancelled photos app');
                                return [3
                                /*break*/
                                , 4];

                              case 1:
                                if (!(photo instanceof Error)) return [3
                                /*break*/
                                , 2];
                                reject(photo.message);
                                return [3
                                /*break*/
                                , 4];

                              case 2:
                                _a = resolve;
                                return [4
                                /*yield*/
                                , this._getCameraPhoto(photo, options)];

                              case 3:
                                _a.apply(void 0, [_b.sent()]);

                                _b.label = 4;

                              case 4:
                                cameraModal_1.dismiss();
                                document.body.removeChild(cameraModal_1);
                                return [2
                                /*return*/
                                ];
                            }
                          });
                        });
                      });
                      cameraModal_1.present();
                      return [3
                      /*break*/
                      , 5];

                    case 4:
                      e_1 = _a.sent();
                      this.fileInputExperience(options, resolve);
                      return [3
                      /*break*/
                      , 5];

                    case 5:
                      return [3
                      /*break*/
                      , 7];

                    case 6:
                      console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements.");
                      this.fileInputExperience(options, resolve);
                      _a.label = 7;

                    case 7:
                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            })];
          });
        });
      };

      CameraPluginWeb.prototype.fileInputExperience = function (options, resolve) {
        var input = document.querySelector('#_capacitor-camera-input');

        var cleanup = function cleanup() {
          input.parentNode && input.parentNode.removeChild(input);
        };

        if (!input) {
          input = document.createElement('input');
          input.id = '_capacitor-camera-input';
          input.type = 'file';
          document.body.appendChild(input);
        }

        input.accept = 'image/*';
        input.capture = true;

        if (options.source === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Photos || options.source === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Prompt) {
          input.removeAttribute('capture');
        } else if (options.direction === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraDirection"].Front) {
          input.capture = 'user';
        } else if (options.direction === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraDirection"].Rear) {
          input.capture = 'environment';
        }

        input.addEventListener('change', function (_e) {
          var file = input.files[0];
          var format = 'jpeg';

          if (file.type === 'image/png') {
            format = 'png';
          } else if (file.type === 'image/gif') {
            format = 'gif';
          }

          if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl || options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64) {
            var reader_1 = new FileReader();
            reader_1.addEventListener('load', function () {
              if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl) {
                resolve({
                  dataUrl: reader_1.result,
                  format: format
                });
              } else if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64) {
                var b64 = reader_1.result.split(',')[1];
                resolve({
                  base64String: b64,
                  format: format
                });
              }

              cleanup();
            });
            reader_1.readAsDataURL(file);
          } else {
            resolve({
              webPath: URL.createObjectURL(file),
              format: format
            });
            cleanup();
          }
        });
        input.click();
      };

      CameraPluginWeb.prototype._getCameraPhoto = function (photo, options) {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();
          var format = photo.type.split('/')[1];

          if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri) {
            resolve({
              webPath: URL.createObjectURL(photo),
              format: format
            });
          } else {
            reader.readAsDataURL(photo);

            reader.onloadend = function () {
              var r = reader.result;

              if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl) {
                resolve({
                  dataUrl: r,
                  format: format
                });
              } else {
                resolve({
                  base64String: r.split(',')[1],
                  format: format
                });
              }
            };

            reader.onerror = function (e) {
              reject(e);
            };
          }
        });
      };

      return CameraPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Camera = new CameraPluginWeb(); //# sourceMappingURL=camera.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/clipboard.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/clipboard.js ***!
    \****************************************************************/

  /*! exports provided: ClipboardPluginWeb, Clipboard */

  /***/
  function node_modulesCapacitorCoreDistEsmWebClipboardJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function () {
      return ClipboardPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
      return Clipboard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var ClipboardPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClipboardPluginWeb, _super);

      function ClipboardPluginWeb() {
        return _super.call(this, {
          name: 'Clipboard',
          platforms: ['web']
        }) || this;
      }

      ClipboardPluginWeb.prototype.write = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var blob, clipboardItemInput, err_1;

          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                if (!navigator.clipboard) {
                  return [2
                  /*return*/
                  , Promise.reject('Clipboard API not available in this browser')];
                }

                if (!(options.string !== undefined || options.url)) return [3
                /*break*/
                , 2];

                if (!navigator.clipboard.writeText) {
                  return [2
                  /*return*/
                  , Promise.reject('Writting to clipboard not supported in this browser')];
                }

                return [4
                /*yield*/
                , navigator.clipboard.writeText(options.string !== undefined ? options.string : options.url)];

              case 1:
                _b.sent();

                return [3
                /*break*/
                , 10];

              case 2:
                if (!options.image) return [3
                /*break*/
                , 9];

                if (!navigator.clipboard.write) {
                  return [2
                  /*return*/
                  , Promise.reject('Setting images not supported in this browser')];
                }

                _b.label = 3;

              case 3:
                _b.trys.push([3, 7,, 8]);

                return [4
                /*yield*/
                , fetch(options.image)];

              case 4:
                return [4
                /*yield*/
                , _b.sent().blob()];

              case 5:
                blob = _b.sent();
                clipboardItemInput = new ClipboardItem((_a = {}, _a[blob.type] = blob, _a));
                return [4
                /*yield*/
                , navigator.clipboard.write([clipboardItemInput])];

              case 6:
                _b.sent();

                return [3
                /*break*/
                , 8];

              case 7:
                err_1 = _b.sent();
                return [2
                /*return*/
                , Promise.reject('Failed to write image')];

              case 8:
                return [3
                /*break*/
                , 10];

              case 9:
                return [2
                /*return*/
                , Promise.reject('Nothing to write')];

              case 10:
                return [2
                /*return*/
                , Promise.resolve()];
            }
          });
        });
      };

      ClipboardPluginWeb.prototype.read = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var clipboardItems, type, clipboardBlob, data, err_2;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!navigator.clipboard) {
                  return [2
                  /*return*/
                  , Promise.reject('Clipboard API not available in this browser')];
                }

                if (!!navigator.clipboard.read) return [3
                /*break*/
                , 1];

                if (!navigator.clipboard.readText) {
                  return [2
                  /*return*/
                  , Promise.reject('Reading from clipboard not supported in this browser')];
                }

                return [2
                /*return*/
                , this.readText()];

              case 1:
                _a.trys.push([1, 5,, 6]);

                return [4
                /*yield*/
                , navigator.clipboard.read()];

              case 2:
                clipboardItems = _a.sent();
                type = clipboardItems[0].types[0];
                return [4
                /*yield*/
                , clipboardItems[0].getType(type)];

              case 3:
                clipboardBlob = _a.sent();
                return [4
                /*yield*/
                , this._getBlobData(clipboardBlob, type)];

              case 4:
                data = _a.sent();
                return [2
                /*return*/
                , Promise.resolve({
                  value: data,
                  type: type
                })];

              case 5:
                err_2 = _a.sent();
                return [2
                /*return*/
                , this.readText()];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      };

      ClipboardPluginWeb.prototype.readText = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var text;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , navigator.clipboard.readText()];

              case 1:
                text = _a.sent();
                return [2
                /*return*/
                , Promise.resolve({
                  value: text,
                  type: 'text/plain'
                })];
            }
          });
        });
      };

      ClipboardPluginWeb.prototype._getBlobData = function (clipboardBlob, type) {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();

          if (type.includes('image')) {
            reader.readAsDataURL(clipboardBlob);
          } else {
            reader.readAsText(clipboardBlob);
          }

          reader.onloadend = function () {
            var r = reader.result;
            resolve(r);
          };

          reader.onerror = function (e) {
            reject(e);
          };
        });
      };

      return ClipboardPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Clipboard = new ClipboardPluginWeb(); //# sourceMappingURL=clipboard.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/device.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/device.js ***!
    \*************************************************************/

  /*! exports provided: DevicePluginWeb, Device */

  /***/
  function node_modulesCapacitorCoreDistEsmWebDeviceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function () {
      return DevicePluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Device", function () {
      return Device;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util */
    "./node_modules/@capacitor/core/dist/esm/util.js");

    var DevicePluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DevicePluginWeb, _super);

      function DevicePluginWeb() {
        return _super.call(this, {
          name: 'Device',
          platforms: ['web']
        }) || this;
      }

      DevicePluginWeb.prototype.getInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var ua, uaFields;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            ua = navigator.userAgent;
            uaFields = this.parseUa(ua);
            return [2
            /*return*/
            , Promise.resolve({
              model: uaFields.model,
              platform: 'web',
              appVersion: '',
              appBuild: '',
              appId: '',
              appName: '',
              operatingSystem: uaFields.operatingSystem,
              osVersion: uaFields.osVersion,
              manufacturer: navigator.vendor,
              isVirtual: false,
              uuid: this.getUid()
            })];
          });
        });
      };

      DevicePluginWeb.prototype.getBatteryInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var battery, e_1;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                battery = {};
                _a.label = 1;

              case 1:
                _a.trys.push([1, 3,, 4]);

                return [4
                /*yield*/
                , navigator.getBattery()];

              case 2:
                battery = _a.sent();
                return [3
                /*break*/
                , 4];

              case 3:
                e_1 = _a.sent();
                return [3
                /*break*/
                , 4];

              case 4:
                return [2
                /*return*/
                , Promise.resolve({
                  batteryLevel: battery.level,
                  isCharging: battery.charging
                })];
            }
          });
        });
      };

      DevicePluginWeb.prototype.getLanguageCode = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            return [2
            /*return*/
            , {
              value: navigator.language
            }];
          });
        });
      };

      DevicePluginWeb.prototype.parseUa = function (_ua) {
        var uaFields = {};
        var start = _ua.indexOf('(') + 1;

        var end = _ua.indexOf(') AppleWebKit');

        if (_ua.indexOf(') Gecko') !== -1) {
          end = _ua.indexOf(') Gecko');
        }

        var fields = _ua.substring(start, end);

        if (_ua.indexOf('Android') !== -1) {
          uaFields.model = fields.replace('; wv', '').split('; ').pop().split(' Build')[0];
          uaFields.osVersion = fields.split('; ')[1];
        } else {
          uaFields.model = fields.split('; ')[0];

          if (navigator.oscpu) {
            uaFields.osVersion = navigator.oscpu;
          } else {
            if (_ua.indexOf('Windows') !== -1) {
              uaFields.osVersion = fields;
            } else {
              var lastParts = fields.split('; ').pop().replace(' like Mac OS X', '').split(' ');
              uaFields.osVersion = lastParts[lastParts.length - 1].replace(/_/g, '.');
            }
          }
        }

        if (/android/i.test(_ua)) {
          uaFields.operatingSystem = 'android';
        } else if (/iPad|iPhone|iPod/.test(_ua) && !window.MSStream) {
          uaFields.operatingSystem = 'ios';
        } else if (/Win/.test(_ua)) {
          uaFields.operatingSystem = 'windows';
        } else if (/Mac/i.test(_ua)) {
          uaFields.operatingSystem = 'mac';
        } else {
          uaFields.operatingSystem = 'unknown';
        }

        return uaFields;
      };

      DevicePluginWeb.prototype.getUid = function () {
        var uid = window.localStorage.getItem('_capuid');

        if (uid) {
          return uid;
        }

        uid = Object(_util__WEBPACK_IMPORTED_MODULE_2__["uuid4"])();
        window.localStorage.setItem('_capuid', uid);
        return uid;
      };

      return DevicePluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Device = new DevicePluginWeb(); //# sourceMappingURL=device.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/filesystem.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/filesystem.js ***!
    \*****************************************************************/

  /*! exports provided: FilesystemPluginWeb, Filesystem */

  /***/
  function node_modulesCapacitorCoreDistEsmWebFilesystemJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function () {
      return FilesystemPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
      return Filesystem;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony import */


    var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core-plugin-definitions */
    "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");

    var FilesystemPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FilesystemPluginWeb, _super);

      function FilesystemPluginWeb() {
        var _this = _super.call(this, {
          name: 'Filesystem',
          platforms: ['web']
        }) || this;

        _this.DEFAULT_DIRECTORY = _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data;
        _this.DB_VERSION = 1;
        _this.DB_NAME = 'Disc';
        _this._writeCmds = ['add', 'put', 'delete'];
        return _this;
      }

      FilesystemPluginWeb.prototype.initDb = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var _this = this;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            if (this._db !== undefined) {
              return [2
              /*return*/
              , this._db];
            }

            if (!('indexedDB' in window)) {
              throw new Error('This browser doesn\'t support IndexedDB');
            }

            return [2
            /*return*/
            , new Promise(function (resolve, reject) {
              var request = indexedDB.open(_this.DB_NAME, _this.DB_VERSION);
              request.onupgradeneeded = FilesystemPluginWeb.doUpgrade;

              request.onsuccess = function () {
                _this._db = request.result;
                resolve(request.result);
              };

              request.onerror = function () {
                return reject(request.error);
              };

              request.onblocked = function () {
                console.warn('db blocked');
              };
            })];
          });
        });
      };

      FilesystemPluginWeb.doUpgrade = function (event) {
        var eventTarget = event.target;
        var db = eventTarget.result;

        switch (event.oldVersion) {
          case 0:
          case 1:
          default:
            if (db.objectStoreNames.contains('FileStorage')) {
              db.deleteObjectStore('FileStorage');
            }

            var store = db.createObjectStore('FileStorage', {
              keyPath: 'path'
            });
            store.createIndex('by_folder', 'folder');
        }
      };

      FilesystemPluginWeb.prototype.dbRequest = function (cmd, args) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var readFlag;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
            return [2
            /*return*/
            , this.initDb().then(function (conn) {
              return new Promise(function (resolve, reject) {
                var tx = conn.transaction(['FileStorage'], readFlag);
                var store = tx.objectStore('FileStorage');
                var req = store[cmd].apply(store, args);

                req.onsuccess = function () {
                  return resolve(req.result);
                };

                req.onerror = function () {
                  return reject(req.error);
                };
              });
            })];
          });
        });
      };

      FilesystemPluginWeb.prototype.dbIndexRequest = function (indexName, cmd, args) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var readFlag;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
            return [2
            /*return*/
            , this.initDb().then(function (conn) {
              return new Promise(function (resolve, reject) {
                var tx = conn.transaction(['FileStorage'], readFlag);
                var store = tx.objectStore('FileStorage');
                var index = store.index(indexName);
                var req = index[cmd].apply(index, args);

                req.onsuccess = function () {
                  return resolve(req.result);
                };

                req.onerror = function () {
                  return reject(req.error);
                };
              });
            })];
          });
        });
      };

      FilesystemPluginWeb.prototype.getPath = function (directory, uriPath) {
        directory = directory || this.DEFAULT_DIRECTORY;
        var cleanedUriPath = uriPath !== undefined ? uriPath.replace(/^[/]+|[/]+$/g, '') : '';
        var fsPath = '/' + directory;
        if (uriPath !== '') fsPath += '/' + cleanedUriPath;
        return fsPath;
      };

      FilesystemPluginWeb.prototype.clear = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var conn, tx, store;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , this.initDb()];

              case 1:
                conn = _a.sent();
                tx = conn.transaction(['FileStorage'], 'readwrite');
                store = tx.objectStore('FileStorage');
                store.clear();
                return [2
                /*return*/
                , {}];
            }
          });
        });
      };
      /**
       * Read a file from disk
       * @param options options for the file read
       * @return a promise that resolves with the read file data result
       */


      FilesystemPluginWeb.prototype.readFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, entry;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                entry = _a.sent();
                if (entry === undefined) throw Error('File does not exist.');
                return [2
                /*return*/
                , {
                  data: entry.content
                }];
            }
          });
        });
      };
      /**
       * Write a file to disk in the specified location on device
       * @param options options for the file write
       * @return a promise that resolves with the file write result
       */


      FilesystemPluginWeb.prototype.writeFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, data, doRecursive, occupiedEntry, encoding, parentPath, parentEntry, subDirIndex, parentArgPath, now, pathObj;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                data = options.data;
                doRecursive = options.recursive;
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                occupiedEntry = _a.sent();
                if (occupiedEntry && occupiedEntry.type === 'directory') throw 'The supplied path is a directory.';
                encoding = options.encoding;
                parentPath = path.substr(0, path.lastIndexOf('/'));
                return [4
                /*yield*/
                , this.dbRequest('get', [parentPath])];

              case 2:
                parentEntry = _a.sent();
                if (!(parentEntry === undefined)) return [3
                /*break*/
                , 4];
                subDirIndex = parentPath.indexOf('/', 1);
                if (!(subDirIndex !== -1)) return [3
                /*break*/
                , 4];
                parentArgPath = parentPath.substr(subDirIndex);
                return [4
                /*yield*/
                , this.mkdir({
                  path: parentArgPath,
                  directory: options.directory,
                  recursive: doRecursive
                })];

              case 3:
                _a.sent();

                _a.label = 4;

              case 4:
                now = Date.now();
                pathObj = {
                  path: path,
                  folder: parentPath,
                  type: 'file',
                  size: data.length,
                  ctime: now,
                  mtime: now,
                  content: !encoding && data.indexOf(',') >= 0 ? data.split(',')[1] : data
                };
                return [4
                /*yield*/
                , this.dbRequest('put', [pathObj])];

              case 5:
                _a.sent();

                return [2
                /*return*/
                , {
                  uri: pathObj.path
                }];
            }
          });
        });
      };
      /**
       * Append to a file on disk in the specified location on device
       * @param options options for the file append
       * @return a promise that resolves with the file write result
       */


      FilesystemPluginWeb.prototype.appendFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, data, parentPath, now, ctime, occupiedEntry, parentEntry, parentArgPathIndex, parentArgPath, pathObj;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                data = options.data;
                parentPath = path.substr(0, path.lastIndexOf('/'));
                now = Date.now();
                ctime = now;
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                occupiedEntry = _a.sent();
                if (occupiedEntry && occupiedEntry.type === 'directory') throw 'The supplied path is a directory.';
                return [4
                /*yield*/
                , this.dbRequest('get', [parentPath])];

              case 2:
                parentEntry = _a.sent();
                if (!(parentEntry === undefined)) return [3
                /*break*/
                , 4];
                parentArgPathIndex = parentPath.indexOf('/', 1);
                parentArgPath = parentArgPathIndex !== -1 ? parentPath.substr(parentArgPathIndex) : '/';
                return [4
                /*yield*/
                , this.mkdir({
                  path: parentArgPath,
                  directory: options.directory,
                  recursive: true
                })];

              case 3:
                _a.sent();

                _a.label = 4;

              case 4:
                if (occupiedEntry !== undefined) {
                  data = occupiedEntry.content + data;
                  ctime = occupiedEntry.ctime;
                }

                pathObj = {
                  path: path,
                  folder: parentPath,
                  type: 'file',
                  size: data.length,
                  ctime: ctime,
                  mtime: now,
                  content: data
                };
                return [4
                /*yield*/
                , this.dbRequest('put', [pathObj])];

              case 5:
                _a.sent();

                return [2
                /*return*/
                , {}];
            }
          });
        });
      };
      /**
       * Delete a file from disk
       * @param options options for the file delete
       * @return a promise that resolves with the deleted file data result
       */


      FilesystemPluginWeb.prototype.deleteFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, entry, entries;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                entry = _a.sent();
                if (entry === undefined) throw Error('File does not exist.');
                return [4
                /*yield*/
                , this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];

              case 2:
                entries = _a.sent();
                if (entries.length !== 0) throw Error('Folder is not empty.');
                return [4
                /*yield*/
                , this.dbRequest('delete', [path])];

              case 3:
                _a.sent();

                return [2
                /*return*/
                , {}];
            }
          });
        });
      };
      /**
       * Create a directory.
       * @param options options for the mkdir
       * @return a promise that resolves with the mkdir result
       */


      FilesystemPluginWeb.prototype.mkdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, doRecursive, parentPath, depth, parentEntry, occupiedEntry, parentArgPath, now, pathObj;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                doRecursive = options.recursive;
                parentPath = path.substr(0, path.lastIndexOf('/'));
                depth = (path.match(/\//g) || []).length;
                return [4
                /*yield*/
                , this.dbRequest('get', [parentPath])];

              case 1:
                parentEntry = _a.sent();
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 2:
                occupiedEntry = _a.sent();
                if (depth === 1) throw Error('Cannot create Root directory');
                if (occupiedEntry !== undefined) throw Error('Current directory does already exist.');
                if (!doRecursive && depth !== 2 && parentEntry === undefined) throw Error('Parent directory must exist');
                if (!(doRecursive && depth !== 2 && parentEntry === undefined)) return [3
                /*break*/
                , 4];
                parentArgPath = parentPath.substr(parentPath.indexOf('/', 1));
                return [4
                /*yield*/
                , this.mkdir({
                  path: parentArgPath,
                  directory: options.directory,
                  recursive: doRecursive
                })];

              case 3:
                _a.sent();

                _a.label = 4;

              case 4:
                now = Date.now();
                pathObj = {
                  path: path,
                  folder: parentPath,
                  type: 'directory',
                  size: 0,
                  ctime: now,
                  mtime: now
                };
                return [4
                /*yield*/
                , this.dbRequest('put', [pathObj])];

              case 5:
                _a.sent();

                return [2
                /*return*/
                , {}];
            }
          });
        });
      };
      /**
       * Remove a directory
       * @param options the options for the directory remove
       */


      FilesystemPluginWeb.prototype.rmdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, directory, recursive, fullPath, entry, readDirResult, _i, _a, entry_1, entryPath, entryObj;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                path = options.path, directory = options.directory, recursive = options.recursive;
                fullPath = this.getPath(directory, path);
                return [4
                /*yield*/
                , this.dbRequest('get', [fullPath])];

              case 1:
                entry = _b.sent();
                if (entry === undefined) throw Error('Folder does not exist.');
                if (entry.type !== 'directory') throw Error('Requested path is not a directory');
                return [4
                /*yield*/
                , this.readdir({
                  path: path,
                  directory: directory
                })];

              case 2:
                readDirResult = _b.sent();
                if (readDirResult.files.length !== 0 && !recursive) throw Error('Folder is not empty');
                _i = 0, _a = readDirResult.files;
                _b.label = 3;

              case 3:
                if (!(_i < _a.length)) return [3
                /*break*/
                , 9];
                entry_1 = _a[_i];
                entryPath = path + "/" + entry_1;
                return [4
                /*yield*/
                , this.stat({
                  path: entryPath,
                  directory: directory
                })];

              case 4:
                entryObj = _b.sent();
                if (!(entryObj.type === 'file')) return [3
                /*break*/
                , 6];
                return [4
                /*yield*/
                , this.deleteFile({
                  path: entryPath,
                  directory: directory
                })];

              case 5:
                _b.sent();

                return [3
                /*break*/
                , 8];

              case 6:
                return [4
                /*yield*/
                , this.rmdir({
                  path: entryPath,
                  directory: directory,
                  recursive: recursive
                })];

              case 7:
                _b.sent();

                _b.label = 8;

              case 8:
                _i++;
                return [3
                /*break*/
                , 3];

              case 9:
                return [4
                /*yield*/
                , this.dbRequest('delete', [fullPath])];

              case 10:
                _b.sent();

                return [2
                /*return*/
                , {}];
            }
          });
        });
      };
      /**
       * Return a list of files from the directory (not recursive)
       * @param options the options for the readdir operation
       * @return a promise that resolves with the readdir directory listing result
       */


      FilesystemPluginWeb.prototype.readdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, entry, entries, names;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                entry = _a.sent();
                if (options.path !== '' && entry === undefined) throw Error('Folder does not exist.');
                return [4
                /*yield*/
                , this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];

              case 2:
                entries = _a.sent();
                names = entries.map(function (e) {
                  return e.substring(path.length + 1);
                });
                return [2
                /*return*/
                , {
                  files: names
                }];
            }
          });
        });
      };
      /**
       * Return full File URI for a path and directory
       * @param options the options for the stat operation
       * @return a promise that resolves with the file stat result
       */


      FilesystemPluginWeb.prototype.getUri = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, entry;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                entry = _a.sent();
                if (!(entry === undefined)) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , this.dbRequest('get', [path + '/'])];

              case 2:
                entry = _a.sent();
                _a.label = 3;

              case 3:
                if (entry === undefined) throw Error('Entry does not exist.');
                return [2
                /*return*/
                , {
                  uri: entry.path
                }];
            }
          });
        });
      };
      /**
       * Return data about a file
       * @param options the options for the stat operation
       * @return a promise that resolves with the file stat result
       */


      FilesystemPluginWeb.prototype.stat = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var path, entry;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                path = this.getPath(options.directory, options.path);
                return [4
                /*yield*/
                , this.dbRequest('get', [path])];

              case 1:
                entry = _a.sent();
                if (!(entry === undefined)) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , this.dbRequest('get', [path + '/'])];

              case 2:
                entry = _a.sent();
                _a.label = 3;

              case 3:
                if (entry === undefined) throw Error('Entry does not exist.');
                return [2
                /*return*/
                , {
                  type: entry.type,
                  size: entry.size,
                  ctime: entry.ctime,
                  mtime: entry.mtime,
                  uri: entry.path
                }];
            }
          });
        });
      };
      /**
       * Rename a file or directory
       * @param options the options for the rename operation
       * @return a promise that resolves with the rename result
       */


      FilesystemPluginWeb.prototype.rename = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            return [2
            /*return*/
            , this._copy(options, true)];
          });
        });
      };
      /**
       * Copy a file or directory
       * @param options the options for the copy operation
       * @return a promise that resolves with the copy result
       */


      FilesystemPluginWeb.prototype.copy = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            return [2
            /*return*/
            , this._copy(options, false)];
          });
        });
      };
      /**
       * Function that can perform a copy or a rename
       * @param options the options for the rename operation
       * @param doRename whether to perform a rename or copy operation
       * @return a promise that resolves with the result
       */


      FilesystemPluginWeb.prototype._copy = function (options, doRename) {
        if (doRename === void 0) {
          doRename = false;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var to, from, fromDirectory, toDirectory, fromPath, toPath, toObj, e_1, toPathComponents, toPath_1, toParentDirectory, fromObj, updateTime, _a, file, e_2, contents, _i, contents_1, filename;

          var _this = this;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                to = options.to, from = options.from, fromDirectory = options.directory, toDirectory = options.toDirectory;

                if (!to || !from) {
                  throw Error('Both to and from must be provided');
                } // If no "to" directory is provided, use the "from" directory


                if (!toDirectory) {
                  toDirectory = fromDirectory;
                }

                fromPath = this.getPath(fromDirectory, from);
                toPath = this.getPath(toDirectory, to); // Test that the "to" and "from" locations are different

                if (fromPath === toPath) {
                  return [2
                  /*return*/
                  , {}];
                }

                if (toPath.startsWith(fromPath)) {
                  throw Error('To path cannot contain the from path');
                }

                _b.label = 1;

              case 1:
                _b.trys.push([1, 3,, 6]);

                return [4
                /*yield*/
                , this.stat({
                  path: to,
                  directory: toDirectory
                })];

              case 2:
                toObj = _b.sent();
                return [3
                /*break*/
                , 6];

              case 3:
                e_1 = _b.sent();
                toPathComponents = to.split('/');
                toPathComponents.pop();
                toPath_1 = toPathComponents.join('/');
                if (!(toPathComponents.length > 0)) return [3
                /*break*/
                , 5];
                return [4
                /*yield*/
                , this.stat({
                  path: toPath_1,
                  directory: toDirectory
                })];

              case 4:
                toParentDirectory = _b.sent();

                if (toParentDirectory.type !== 'directory') {
                  throw new Error('Parent directory of the to path is a file');
                }

                _b.label = 5;

              case 5:
                return [3
                /*break*/
                , 6];

              case 6:
                // Cannot overwrite a directory
                if (toObj && toObj.type === 'directory') {
                  throw new Error('Cannot overwrite a directory with a file');
                }

                return [4
                /*yield*/
                , this.stat({
                  path: from,
                  directory: fromDirectory
                })];

              case 7:
                fromObj = _b.sent();

                updateTime = function updateTime(path, ctime, mtime) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var fullPath, entry;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                      switch (_a.label) {
                        case 0:
                          fullPath = this.getPath(toDirectory, path);
                          return [4
                          /*yield*/
                          , this.dbRequest('get', [fullPath])];

                        case 1:
                          entry = _a.sent();
                          entry.ctime = ctime;
                          entry.mtime = mtime;
                          return [4
                          /*yield*/
                          , this.dbRequest('put', [entry])];

                        case 2:
                          _a.sent();

                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                };

                _a = fromObj.type;

                switch (_a) {
                  case 'file':
                    return [3
                    /*break*/
                    , 8];

                  case 'directory':
                    return [3
                    /*break*/
                    , 15];
                }

                return [3
                /*break*/
                , 28];

              case 8:
                return [4
                /*yield*/
                , this.readFile({
                  path: from,
                  directory: fromDirectory
                })];

              case 9:
                file = _b.sent();
                if (!doRename) return [3
                /*break*/
                , 11];
                return [4
                /*yield*/
                , this.deleteFile({
                  path: from,
                  directory: fromDirectory
                })];

              case 10:
                _b.sent();

                _b.label = 11;

              case 11:
                // Write the file to the new location
                return [4
                /*yield*/
                , this.writeFile({
                  path: to,
                  directory: toDirectory,
                  data: file.data
                })];

              case 12:
                // Write the file to the new location
                _b.sent();

                if (!doRename) return [3
                /*break*/
                , 14];
                return [4
                /*yield*/
                , updateTime(to, fromObj.ctime, fromObj.mtime)];

              case 13:
                _b.sent();

                _b.label = 14;

              case 14:
                // Resolve promise
                return [2
                /*return*/
                , {}];

              case 15:
                if (toObj) {
                  throw Error('Cannot move a directory over an existing object');
                }

                _b.label = 16;

              case 16:
                _b.trys.push([16, 20,, 21]); // Create the to directory


                return [4
                /*yield*/
                , this.mkdir({
                  path: to,
                  directory: toDirectory,
                  recursive: false
                })];

              case 17:
                // Create the to directory
                _b.sent();

                if (!doRename) return [3
                /*break*/
                , 19];
                return [4
                /*yield*/
                , updateTime(to, fromObj.ctime, fromObj.mtime)];

              case 18:
                _b.sent();

                _b.label = 19;

              case 19:
                return [3
                /*break*/
                , 21];

              case 20:
                e_2 = _b.sent();
                return [3
                /*break*/
                , 21];

              case 21:
                return [4
                /*yield*/
                , this.readdir({
                  path: from,
                  directory: fromDirectory
                })];

              case 22:
                contents = _b.sent().files;
                _i = 0, contents_1 = contents;
                _b.label = 23;

              case 23:
                if (!(_i < contents_1.length)) return [3
                /*break*/
                , 26];
                filename = contents_1[_i]; // Move item from the from directory to the to directory

                return [4
                /*yield*/
                , this._copy({
                  from: from + "/" + filename,
                  to: to + "/" + filename,
                  directory: fromDirectory,
                  toDirectory: toDirectory
                }, doRename)];

              case 24:
                // Move item from the from directory to the to directory
                _b.sent();

                _b.label = 25;

              case 25:
                _i++;
                return [3
                /*break*/
                , 23];

              case 26:
                if (!doRename) return [3
                /*break*/
                , 28];
                return [4
                /*yield*/
                , this.rmdir({
                  path: from,
                  directory: fromDirectory
                })];

              case 27:
                _b.sent();

                _b.label = 28;

              case 28:
                return [2
                /*return*/
                , {}];
            }
          });
        });
      };

      FilesystemPluginWeb._debug = true;
      return FilesystemPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Filesystem = new FilesystemPluginWeb(); //# sourceMappingURL=filesystem.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/geolocation.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/geolocation.js ***!
    \******************************************************************/

  /*! exports provided: GeolocationPluginWeb, Geolocation */

  /***/
  function node_modulesCapacitorCoreDistEsmWebGeolocationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function () {
      return GeolocationPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
      return Geolocation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util */
    "./node_modules/@capacitor/core/dist/esm/util.js");

    var GeolocationPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GeolocationPluginWeb, _super);

      function GeolocationPluginWeb() {
        return _super.call(this, {
          name: 'Geolocation',
          platforms: ['web']
        }) || this;
      }

      GeolocationPluginWeb.prototype.getCurrentPosition = function (options) {
        var _this = this;

        return new Promise(function (resolve, reject) {
          return _this.requestPermissions().then(function (_result) {
            window.navigator.geolocation.getCurrentPosition(function (pos) {
              resolve(pos);
            }, function (err) {
              reject(err);
            }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }, options));
          });
        });
      };

      GeolocationPluginWeb.prototype.watchPosition = function (options, callback) {
        var id = window.navigator.geolocation.watchPosition(function (pos) {
          callback(pos);
        }, function (err) {
          callback(null, err);
        }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }, options));
        return "" + id;
      };

      GeolocationPluginWeb.prototype.clearWatch = function (options) {
        window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
        return Promise.resolve();
      };

      return GeolocationPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Geolocation = new GeolocationPluginWeb(); //# sourceMappingURL=geolocation.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/index.js":
  /*!************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/index.js ***!
    \************************************************************/

  /*! exports provided: WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin */

  /***/
  function node_modulesCapacitorCoreDistEsmWebIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function () {
      return WebPluginRegistry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebPlugins", function () {
      return WebPlugins;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebPlugin", function () {
      return WebPlugin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function () {
      return mergeWebPlugins;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function () {
      return mergeWebPlugin;
    });

    var WebPluginRegistry =
    /** @class */
    function () {
      function WebPluginRegistry() {
        this.plugins = {};
        this.loadedPlugins = {};
      }

      WebPluginRegistry.prototype.addPlugin = function (plugin) {
        this.plugins[plugin.config.name] = plugin;
      };

      WebPluginRegistry.prototype.getPlugin = function (name) {
        return this.plugins[name];
      };

      WebPluginRegistry.prototype.loadPlugin = function (name) {
        var plugin = this.getPlugin(name);

        if (!plugin) {
          console.error("Unable to load web plugin " + name + ", no such plugin found.");
          return;
        }

        plugin.load();
      };

      WebPluginRegistry.prototype.getPlugins = function () {
        var p = [];

        for (var name_1 in this.plugins) {
          p.push(this.plugins[name_1]);
        }

        return p;
      };

      return WebPluginRegistry;
    }();

    var WebPlugins = new WebPluginRegistry();

    var WebPlugin =
    /** @class */
    function () {
      function WebPlugin(config, pluginRegistry) {
        this.config = config;
        this.loaded = false;
        this.listeners = {};
        this.windowListeners = {};

        if (!pluginRegistry) {
          WebPlugins.addPlugin(this);
        } else {
          pluginRegistry.addPlugin(this);
        }
      }

      WebPlugin.prototype.addWindowListener = function (handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
      };

      WebPlugin.prototype.removeWindowListener = function (handle) {
        if (!handle) {
          return;
        }

        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
      };

      WebPlugin.prototype.addListener = function (eventName, listenerFunc) {
        var _this = this;

        var listeners = this.listeners[eventName];

        if (!listeners) {
          this.listeners[eventName] = [];
        }

        this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it

        var windowListener = this.windowListeners[eventName];

        if (windowListener && !windowListener.registered) {
          this.addWindowListener(windowListener);
        }

        return {
          remove: function remove() {
            _this.removeListener(eventName, listenerFunc);
          }
        };
      };

      WebPlugin.prototype.removeListener = function (eventName, listenerFunc) {
        var listeners = this.listeners[eventName];

        if (!listeners) {
          return;
        }

        var index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
        // remove the window listener

        if (!this.listeners[eventName].length) {
          this.removeWindowListener(this.windowListeners[eventName]);
        }
      };

      WebPlugin.prototype.removeAllListeners = function () {
        this.listeners = {};

        for (var listener in this.windowListeners) {
          this.removeWindowListener(this.windowListeners[listener]);
        }

        this.windowListeners = {};
      };

      WebPlugin.prototype.notifyListeners = function (eventName, data) {
        var listeners = this.listeners[eventName];

        if (listeners) {
          listeners.forEach(function (listener) {
            return listener(data);
          });
        }
      };

      WebPlugin.prototype.hasListeners = function (eventName) {
        return !!this.listeners[eventName].length;
      };

      WebPlugin.prototype.registerWindowListener = function (windowEventName, pluginEventName) {
        var _this = this;

        this.windowListeners[pluginEventName] = {
          registered: false,
          windowEventName: windowEventName,
          pluginEventName: pluginEventName,
          handler: function handler(event) {
            _this.notifyListeners(pluginEventName, event);
          }
        };
      };

      WebPlugin.prototype.requestPermissions = function () {
        if (Capacitor.isNative) {
          return Capacitor.nativePromise(this.config.name, 'requestPermissions', {});
        } else {
          return Promise.resolve({
            results: []
          });
        }
      };

      WebPlugin.prototype.load = function () {
        this.loaded = true;
      };

      return WebPlugin;
    }();

    var shouldMergeWebPlugin = function shouldMergeWebPlugin(plugin) {
      return plugin.config.platforms && plugin.config.platforms.indexOf(Capacitor.platform) >= 0;
    };
    /**
     * For all our known web plugins, merge them into the global plugins
     * registry if they aren't already existing. If they don't exist, that
     * means there's no existing native implementation for it.
     * @param knownPlugins the Capacitor.Plugins global registry.
     */


    var mergeWebPlugins = function mergeWebPlugins(knownPlugins) {
      var plugins = WebPlugins.getPlugins();

      for (var _i = 0, plugins_1 = plugins; _i < plugins_1.length; _i++) {
        var plugin = plugins_1[_i];
        mergeWebPlugin(knownPlugins, plugin);
      }
    };

    var mergeWebPlugin = function mergeWebPlugin(knownPlugins, plugin) {
      // If we already have a plugin registered (meaning it was defined in the native layer),
      // then we should only overwrite it if the corresponding web plugin activates on
      // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
      if (knownPlugins.hasOwnProperty(plugin.config.name) && !shouldMergeWebPlugin(plugin)) {
        return;
      }

      knownPlugins[plugin.config.name] = plugin;
    }; //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/local-notifications.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/local-notifications.js ***!
    \**************************************************************************/

  /*! exports provided: LocalNotificationsPluginWeb, LocalNotifications */

  /***/
  function node_modulesCapacitorCoreDistEsmWebLocalNotificationsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function () {
      return LocalNotificationsPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
      return LocalNotifications;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var LocalNotificationsPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocalNotificationsPluginWeb, _super);

      function LocalNotificationsPluginWeb() {
        var _this = _super.call(this, {
          name: 'LocalNotifications',
          platforms: ['web']
        }) || this;

        _this.pending = [];
        return _this;
      }

      LocalNotificationsPluginWeb.prototype.createChannel = function (channel) {
        throw new Error('Feature not available in the browser. ' + channel.id);
      };

      LocalNotificationsPluginWeb.prototype.deleteChannel = function (channel) {
        throw new Error('Feature not available in the browser. ' + channel.id);
      };

      LocalNotificationsPluginWeb.prototype.listChannels = function () {
        throw new Error('Feature not available in the browser');
      };

      LocalNotificationsPluginWeb.prototype.sendPending = function () {
        var _this = this;

        var toRemove = [];
        var now = +new Date();
        this.pending.forEach(function (localNotification) {
          if (localNotification.schedule && localNotification.schedule.at) {
            if (+localNotification.schedule.at <= now) {
              _this.buildNotification(localNotification);

              toRemove.push(localNotification);
            }
          }
        });
        console.log('Sent pending, removing', toRemove);
        this.pending = this.pending.filter(function (localNotification) {
          return !toRemove.find(function (ln) {
            return ln === localNotification;
          });
        });
      };

      LocalNotificationsPluginWeb.prototype.sendNotification = function (localNotification) {
        var _this = this;

        var l = localNotification;

        if (localNotification.schedule && localNotification.schedule.at) {
          var diff = +localNotification.schedule.at - +new Date();
          this.pending.push(l);
          setTimeout(function () {
            _this.sendPending();
          }, diff);
          return;
        }

        this.buildNotification(localNotification);
      };

      LocalNotificationsPluginWeb.prototype.buildNotification = function (localNotification) {
        var l = localNotification;
        return new Notification(l.title, {
          body: l.body
        });
      };

      LocalNotificationsPluginWeb.prototype.schedule = function (options) {
        var _this = this;

        var notifications = [];
        options.notifications.forEach(function (notification) {
          notifications.push(_this.sendNotification(notification));
        });
        return Promise.resolve({
          notifications: options.notifications.map(function (notification) {
            return {
              id: '' + notification.id
            };
          })
        });
      };

      LocalNotificationsPluginWeb.prototype.getPending = function () {
        return Promise.resolve({
          notifications: this.pending.map(function (localNotification) {
            return {
              id: '' + localNotification.id
            };
          })
        });
      };

      LocalNotificationsPluginWeb.prototype.registerActionTypes = function (_options) {
        throw new Error('Method not implemented.');
      };

      LocalNotificationsPluginWeb.prototype.cancel = function (pending) {
        console.log('Cancel these', pending);
        this.pending = this.pending.filter(function (localNotification) {
          return !pending.notifications.find(function (ln) {
            return ln.id === '' + localNotification.id;
          });
        });
        return Promise.resolve();
      };

      LocalNotificationsPluginWeb.prototype.areEnabled = function () {
        return Promise.resolve({
          value: Notification.permission === 'granted'
        });
      };

      LocalNotificationsPluginWeb.prototype.requestPermission = function () {
        return new Promise(function (resolve) {
          Notification.requestPermission(function (result) {
            var granted = true;

            if (result === 'denied' || result === 'default') {
              granted = false;
            }

            resolve({
              granted: granted
            });
          });
        });
      };

      LocalNotificationsPluginWeb.prototype.requestPermissions = function () {
        return new Promise(function (resolve, reject) {
          Notification.requestPermission(function (result) {
            if (result === 'denied' || result === 'default') {
              reject(result);
              return;
            }

            resolve({
              results: [result]
            });
          });
        });
      };

      return LocalNotificationsPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var LocalNotifications = new LocalNotificationsPluginWeb(); //# sourceMappingURL=local-notifications.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/modals.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/modals.js ***!
    \*************************************************************/

  /*! exports provided: ModalsPluginWeb, Modals */

  /***/
  function node_modulesCapacitorCoreDistEsmWebModalsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function () {
      return ModalsPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Modals", function () {
      return Modals;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var ModalsPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ModalsPluginWeb, _super);

      function ModalsPluginWeb() {
        return _super.call(this, {
          name: 'Modals',
          platforms: ['web']
        }) || this;
      }

      ModalsPluginWeb.prototype.alert = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            window.alert(options.message);
            return [2
            /*return*/
            , Promise.resolve()];
          });
        });
      };

      ModalsPluginWeb.prototype.prompt = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var val;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            val = window.prompt(options.message, options.inputText || '');
            return [2
            /*return*/
            , Promise.resolve({
              value: val,
              cancelled: val === null
            })];
          });
        });
      };

      ModalsPluginWeb.prototype.confirm = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var val;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            val = window.confirm(options.message);
            return [2
            /*return*/
            , Promise.resolve({
              value: val
            })];
          });
        });
      };

      ModalsPluginWeb.prototype.showActions = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var _this = this;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            return [2
            /*return*/
            , new Promise(function (resolve, _reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var actionSheet;

                var _this = this;

                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                  actionSheet = document.querySelector('pwa-action-sheet');

                  if (!actionSheet) {
                    actionSheet = document.createElement('pwa-action-sheet');
                    document.body.appendChild(actionSheet);
                  }

                  actionSheet.header = options.title;
                  actionSheet.cancelable = false;
                  actionSheet.options = options.options;
                  actionSheet.addEventListener('onSelection', function (e) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                      var selection;
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        selection = e.detail;
                        resolve({
                          index: selection
                        });
                        return [2
                        /*return*/
                        ];
                      });
                    });
                  });
                  return [2
                  /*return*/
                  ];
                });
              });
            })];
          });
        });
      };

      return ModalsPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Modals = new ModalsPluginWeb(); //# sourceMappingURL=modals.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/motion.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/motion.js ***!
    \*************************************************************/

  /*! exports provided: MotionPluginWeb, Motion */

  /***/
  function node_modulesCapacitorCoreDistEsmWebMotionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function () {
      return MotionPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Motion", function () {
      return Motion;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var MotionPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MotionPluginWeb, _super);

      function MotionPluginWeb() {
        var _this = _super.call(this, {
          name: 'Motion'
        }) || this;

        _this.registerWindowListener('devicemotion', 'accel');

        _this.registerWindowListener('deviceorientation', 'orientation');

        return _this;
      }

      return MotionPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Motion = new MotionPluginWeb(); //# sourceMappingURL=motion.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/network.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/network.js ***!
    \**************************************************************/

  /*! exports provided: NetworkPluginWeb, Network */

  /***/
  function node_modulesCapacitorCoreDistEsmWebNetworkJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function () {
      return NetworkPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Network", function () {
      return Network;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var NetworkPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NetworkPluginWeb, _super);

      function NetworkPluginWeb() {
        var _this = _super.call(this, {
          name: 'Network',
          platforms: ['web']
        }) || this;

        _this.listenerFunction = null;
        return _this;
      }

      NetworkPluginWeb.prototype.getStatus = function () {
        return new Promise(function (resolve, reject) {
          if (!window.navigator) {
            reject('Network info not available');
            return;
          }

          var connected = window.navigator.onLine;
          var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
          var connectionType = connection ? connection.type || connection.effectiveType : 'wifi';
          resolve({
            connected: connected,
            connectionType: connected ? connectionType : 'none'
          });
        });
      };

      NetworkPluginWeb.prototype.addListener = function (eventName, listenerFunc) {
        var thisRef = this;
        var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
        var connectionType = connection ? connection.type || connection.effectiveType : 'wifi';
        var onlineBindFunc = listenerFunc.bind(thisRef, {
          connected: true,
          connectionType: connectionType
        });
        var offlineBindFunc = listenerFunc.bind(thisRef, {
          connected: false,
          connectionType: 'none'
        });

        if (eventName.localeCompare('networkStatusChange') === 0) {
          window.addEventListener('online', onlineBindFunc);
          window.addEventListener('offline', offlineBindFunc);
          return {
            remove: function remove() {
              window.removeEventListener('online', onlineBindFunc);
              window.removeEventListener('offline', offlineBindFunc);
            }
          };
        }
      };

      return NetworkPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Network = new NetworkPluginWeb(); //# sourceMappingURL=network.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/permissions.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/permissions.js ***!
    \******************************************************************/

  /*! exports provided: PermissionsPluginWeb, Permissions */

  /***/
  function node_modulesCapacitorCoreDistEsmWebPermissionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function () {
      return PermissionsPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Permissions", function () {
      return Permissions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");
    /* harmony import */


    var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core-plugin-definitions */
    "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");

    var PermissionsPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PermissionsPluginWeb, _super);

      function PermissionsPluginWeb() {
        return _super.call(this, {
          name: 'Permissions'
        }) || this;
      }

      PermissionsPluginWeb.prototype.query = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var navigator, name, ret;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                navigator = window.navigator;

                if (!navigator.permissions) {
                  return [2
                  /*return*/
                  , Promise.reject('This browser does not support the Permissions API')];
                }

                name = options.name === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["PermissionType"].Photos ? 'camera' : options.name;
                return [4
                /*yield*/
                , navigator.permissions.query({
                  name: name
                })];

              case 1:
                ret = _a.sent();
                return [2
                /*return*/
                , {
                  state: ret.state
                }];
            }
          });
        });
      };

      return PermissionsPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Permissions = new PermissionsPluginWeb(); //# sourceMappingURL=permissions.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/share.js":
  /*!************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/share.js ***!
    \************************************************************/

  /*! exports provided: SharePluginWeb, Share */

  /***/
  function node_modulesCapacitorCoreDistEsmWebShareJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function () {
      return SharePluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Share", function () {
      return Share;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var SharePluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SharePluginWeb, _super);

      function SharePluginWeb() {
        return _super.call(this, {
          name: 'Share',
          platforms: ['web']
        }) || this;
      }

      SharePluginWeb.prototype.share = function (options) {
        if (!navigator.share) {
          return Promise.reject('Web Share API not available');
        }

        return navigator.share({
          title: options.title,
          text: options.text,
          url: options.url
        });
      };

      return SharePluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Share = new SharePluginWeb(); //# sourceMappingURL=share.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/splash-screen.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/splash-screen.js ***!
    \********************************************************************/

  /*! exports provided: SplashScreenPluginWeb, SplashScreen */

  /***/
  function node_modulesCapacitorCoreDistEsmWebSplashScreenJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function () {
      return SplashScreenPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
      return SplashScreen;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var SplashScreenPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SplashScreenPluginWeb, _super);

      function SplashScreenPluginWeb() {
        return _super.call(this, {
          name: 'SplashScreen',
          platforms: ['web']
        }) || this;
      }

      SplashScreenPluginWeb.prototype.show = function (_options, _callback) {
        return Promise.resolve();
      };

      SplashScreenPluginWeb.prototype.hide = function (_options, _callback) {
        return Promise.resolve();
      };

      return SplashScreenPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var SplashScreen = new SplashScreenPluginWeb(); //# sourceMappingURL=splash-screen.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/storage.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/storage.js ***!
    \**************************************************************/

  /*! exports provided: StoragePluginWeb, Storage */

  /***/
  function node_modulesCapacitorCoreDistEsmWebStorageJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function () {
      return StoragePluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Storage", function () {
      return Storage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var StoragePluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StoragePluginWeb, _super);

      function StoragePluginWeb() {
        var _this = _super.call(this, {
          name: 'Storage',
          platforms: ['web']
        }) || this;

        _this.KEY_PREFIX = '_cap_';
        return _this;
      }

      StoragePluginWeb.prototype.get = function (options) {
        var _this = this;

        return new Promise(function (resolve, _reject) {
          resolve({
            value: window.localStorage.getItem(_this.makeKey(options.key))
          });
        });
      };

      StoragePluginWeb.prototype.set = function (options) {
        var _this = this;

        return new Promise(function (resolve, _reject) {
          window.localStorage.setItem(_this.makeKey(options.key), options.value);
          resolve();
        });
      };

      StoragePluginWeb.prototype.remove = function (options) {
        var _this = this;

        return new Promise(function (resolve, _reject) {
          window.localStorage.removeItem(_this.makeKey(options.key));
          resolve();
        });
      };

      StoragePluginWeb.prototype.keys = function () {
        var _this = this;

        return new Promise(function (resolve, _reject) {
          resolve({
            keys: Object.keys(localStorage).filter(function (k) {
              return _this.isKey(k);
            }).map(function (k) {
              return _this.getKey(k);
            })
          });
        });
      };

      StoragePluginWeb.prototype.clear = function () {
        var _this = this;

        return new Promise(function (resolve, _reject) {
          Object.keys(localStorage).filter(function (k) {
            return _this.isKey(k);
          }).forEach(function (k) {
            return window.localStorage.removeItem(k);
          });
          resolve();
        });
      };

      StoragePluginWeb.prototype.makeKey = function (key) {
        return this.KEY_PREFIX + key;
      };

      StoragePluginWeb.prototype.isKey = function (key) {
        return key.indexOf(this.KEY_PREFIX) === 0;
      };

      StoragePluginWeb.prototype.getKey = function (key) {
        return key.substr(this.KEY_PREFIX.length);
      };

      return StoragePluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Storage = new StoragePluginWeb(); //# sourceMappingURL=storage.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/dist/esm/web/toast.js":
  /*!************************************************************!*\
    !*** ./node_modules/@capacitor/core/dist/esm/web/toast.js ***!
    \************************************************************/

  /*! exports provided: ToastPluginWeb, Toast */

  /***/
  function node_modulesCapacitorCoreDistEsmWebToastJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function () {
      return ToastPluginWeb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Toast", function () {
      return Toast;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index */
    "./node_modules/@capacitor/core/dist/esm/web/index.js");

    var ToastPluginWeb =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ToastPluginWeb, _super);

      function ToastPluginWeb() {
        return _super.call(this, {
          name: 'Toast',
          platforms: ['web']
        }) || this;
      }

      ToastPluginWeb.prototype.show = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var duration, toast;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            duration = 2000;

            if (options.duration) {
              duration = options.duration === 'long' ? 3500 : 2000;
            }

            toast = document.createElement('pwa-toast');
            toast.duration = duration;
            toast.message = options.text;
            document.body.appendChild(toast);
            return [2
            /*return*/
            ];
          });
        });
      };

      return ToastPluginWeb;
    }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

    var Toast = new ToastPluginWeb(); //# sourceMappingURL=toast.js.map

    /***/
  },

  /***/
  "./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@capacitor/core/node_modules/tslib/tslib.es6.js ***!
    \**********************************************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesCapacitorCoreNode_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
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
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/moment/locale/af.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/af.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleAfJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Afrikaans [af]
    //! author : Werner Mollentze : https://github.com/wernerm
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var af = moment.defineLocale('af', {
        months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
        weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
        weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
        meridiemParse: /vm|nm/i,
        isPM: function isPM(input) {
          return /^nm$/i.test(input);
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours < 12) {
            return isLower ? 'vm' : 'VM';
          } else {
            return isLower ? 'nm' : 'NM';
          }
        },
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Vandag om] LT',
          nextDay: '[Môre om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[Gister om] LT',
          lastWeek: '[Laas] dddd [om] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'oor %s',
          past: '%s gelede',
          s: "'n paar sekondes",
          ss: '%d sekondes',
          m: "'n minuut",
          mm: '%d minute',
          h: "'n uur",
          hh: '%d ure',
          d: "'n dag",
          dd: '%d dae',
          M: "'n maand",
          MM: '%d maande',
          y: "'n jaar",
          yy: '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function ordinal(number) {
          return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
        },
        week: {
          dow: 1,
          // Maandag is die eerste dag van die week.
          doy: 4 // Die week wat die 4de Januarie bevat is die eerste week van die jaar.

        }
      });
      return af;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ar-dz.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/ar-dz.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleArDzJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Arabic (Algeria) [ar-dz]
    //! author : Amine Roukh: https://github.com/Amine27
    //! author : Abdel Said: https://github.com/abdelsaid
    //! author : Ahmed Elkhatib
    //! author : forabi https://github.com/forabi
    //! author : Noureddine LOUAHEDJ : https://github.com/noureddinem
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var pluralForm = function pluralForm(n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
      },
          plurals = {
        s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
        m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
        h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
        d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
        M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
        y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
      },
          pluralize = function pluralize(u) {
        return function (number, withoutSuffix, string, isFuture) {
          var f = pluralForm(number),
              str = plurals[u][pluralForm(number)];

          if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
          }

          return str.replace(/%d/i, number);
        };
      },
          months = ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان', 'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];

      var arDz = moment.defineLocale('ar-dz', {
        months: months,
        monthsShort: months,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: "D/\u200FM/\u200FYYYY",
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM: function isPM(input) {
          return 'م' === input;
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'ص';
          } else {
            return 'م';
          }
        },
        calendar: {
          sameDay: '[اليوم عند الساعة] LT',
          nextDay: '[غدًا عند الساعة] LT',
          nextWeek: 'dddd [عند الساعة] LT',
          lastDay: '[أمس عند الساعة] LT',
          lastWeek: 'dddd [عند الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'بعد %s',
          past: 'منذ %s',
          s: pluralize('s'),
          ss: pluralize('s'),
          m: pluralize('m'),
          mm: pluralize('m'),
          h: pluralize('h'),
          hh: pluralize('h'),
          d: pluralize('d'),
          dd: pluralize('d'),
          M: pluralize('M'),
          MM: pluralize('M'),
          y: pluralize('y'),
          yy: pluralize('y')
        },
        postformat: function postformat(string) {
          return string.replace(/,/g, '،');
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return arDz;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ar-kw.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/ar-kw.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleArKwJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Arabic (Kuwait) [ar-kw]
    //! author : Nusret Parlak: https://github.com/nusretparlak
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var arKw = moment.defineLocale('ar-kw', {
        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          ss: '%d ثانية',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات'
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 12 // The week that contains Jan 12th is the first week of the year.

        }
      });
      return arKw;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ar-ly.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/ar-ly.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleArLyJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Arabic (Lybia) [ar-ly]
    //! author : Ali Hmer: https://github.com/kikoanis
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var symbolMap = {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '0': '0'
      },
          pluralForm = function pluralForm(n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
      },
          plurals = {
        s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
        m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
        h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
        d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
        M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
        y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
      },
          pluralize = function pluralize(u) {
        return function (number, withoutSuffix, string, isFuture) {
          var f = pluralForm(number),
              str = plurals[u][pluralForm(number)];

          if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
          }

          return str.replace(/%d/i, number);
        };
      },
          months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];

      var arLy = moment.defineLocale('ar-ly', {
        months: months,
        monthsShort: months,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: "D/\u200FM/\u200FYYYY",
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM: function isPM(input) {
          return 'م' === input;
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'ص';
          } else {
            return 'م';
          }
        },
        calendar: {
          sameDay: '[اليوم عند الساعة] LT',
          nextDay: '[غدًا عند الساعة] LT',
          nextWeek: 'dddd [عند الساعة] LT',
          lastDay: '[أمس عند الساعة] LT',
          lastWeek: 'dddd [عند الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'بعد %s',
          past: 'منذ %s',
          s: pluralize('s'),
          ss: pluralize('s'),
          m: pluralize('m'),
          mm: pluralize('m'),
          h: pluralize('h'),
          hh: pluralize('h'),
          d: pluralize('d'),
          dd: pluralize('d'),
          M: pluralize('M'),
          MM: pluralize('M'),
          y: pluralize('y'),
          yy: pluralize('y')
        },
        preparse: function preparse(string) {
          return string.replace(/،/g, ',');
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          }).replace(/,/g, '،');
        },
        week: {
          dow: 6,
          // Saturday is the first day of the week.
          doy: 12 // The week that contains Jan 12th is the first week of the year.

        }
      });
      return arLy;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ar-ma.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/ar-ma.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleArMaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Arabic (Morocco) [ar-ma]
    //! author : ElFadili Yassine : https://github.com/ElFadiliY
    //! author : Abdel Said : https://github.com/abdelsaid
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var arMa = moment.defineLocale('ar-ma', {
        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          ss: '%d ثانية',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات'
        },
        week: {
          dow: 6,
          // Saturday is the first day of the week.
          doy: 12 // The week that contains Jan 12th is the first week of the year.

        }
      });
      return arMa;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ar-sa.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/ar-sa.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleArSaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Arabic (Saudi Arabia) [ar-sa]
    //! author : Suhail Alkowaileet : https://github.com/xsoh
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var symbolMap = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
      },
          numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
      };
      var arSa = moment.defineLocale('ar-sa', {
        months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM: function isPM(input) {
          return 'م' === input;
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'ص';
          } else {
            return 'م';
          }
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          ss: '%d ثانية',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات'
        },
        preparse: function preparse(string) {
          return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
            return numberMap[match];
          }).replace(/،/g, ',');
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          }).replace(/,/g, '،');
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return arSa;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ar-tn.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/ar-tn.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleArTnJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale  :  Arabic (Tunisia) [ar-tn]
    //! author : Nader Toukabri : https://github.com/naderio
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var arTn = moment.defineLocale('ar-tn', {
        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          ss: '%d ثانية',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات'
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return arTn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ar.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ar.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleArJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Arabic [ar]
    //! author : Abdel Said: https://github.com/abdelsaid
    //! author : Ahmed Elkhatib
    //! author : forabi https://github.com/forabi
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var symbolMap = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
      },
          numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
      },
          pluralForm = function pluralForm(n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
      },
          plurals = {
        s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
        m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
        h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
        d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
        M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
        y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
      },
          pluralize = function pluralize(u) {
        return function (number, withoutSuffix, string, isFuture) {
          var f = pluralForm(number),
              str = plurals[u][pluralForm(number)];

          if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
          }

          return str.replace(/%d/i, number);
        };
      },
          months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];

      var ar = moment.defineLocale('ar', {
        months: months,
        monthsShort: months,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: "D/\u200FM/\u200FYYYY",
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM: function isPM(input) {
          return 'م' === input;
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'ص';
          } else {
            return 'م';
          }
        },
        calendar: {
          sameDay: '[اليوم عند الساعة] LT',
          nextDay: '[غدًا عند الساعة] LT',
          nextWeek: 'dddd [عند الساعة] LT',
          lastDay: '[أمس عند الساعة] LT',
          lastWeek: 'dddd [عند الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'بعد %s',
          past: 'منذ %s',
          s: pluralize('s'),
          ss: pluralize('s'),
          m: pluralize('m'),
          mm: pluralize('m'),
          h: pluralize('h'),
          hh: pluralize('h'),
          d: pluralize('d'),
          dd: pluralize('d'),
          M: pluralize('M'),
          MM: pluralize('M'),
          y: pluralize('y'),
          yy: pluralize('y')
        },
        preparse: function preparse(string) {
          return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
            return numberMap[match];
          }).replace(/،/g, ',');
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          }).replace(/,/g, '،');
        },
        week: {
          dow: 6,
          // Saturday is the first day of the week.
          doy: 12 // The week that contains Jan 12th is the first week of the year.

        }
      });
      return ar;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/az.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/az.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleAzJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Azerbaijani [az]
    //! author : topchiyev : https://github.com/topchiyev
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var suffixes = {
        1: '-inci',
        5: '-inci',
        8: '-inci',
        70: '-inci',
        80: '-inci',
        2: '-nci',
        7: '-nci',
        20: '-nci',
        50: '-nci',
        3: '-üncü',
        4: '-üncü',
        100: '-üncü',
        6: '-ncı',
        9: '-uncu',
        10: '-uncu',
        30: '-uncu',
        60: '-ıncı',
        90: '-ıncı'
      };
      var az = moment.defineLocale('az', {
        months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
        monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
        weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
        weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
        weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[bugün saat] LT',
          nextDay: '[sabah saat] LT',
          nextWeek: '[gələn həftə] dddd [saat] LT',
          lastDay: '[dünən] LT',
          lastWeek: '[keçən həftə] dddd [saat] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s sonra',
          past: '%s əvvəl',
          s: 'birneçə saniyə',
          ss: '%d saniyə',
          m: 'bir dəqiqə',
          mm: '%d dəqiqə',
          h: 'bir saat',
          hh: '%d saat',
          d: 'bir gün',
          dd: '%d gün',
          M: 'bir ay',
          MM: '%d ay',
          y: 'bir il',
          yy: '%d il'
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM: function isPM(input) {
          return /^(gündüz|axşam)$/.test(input);
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'gecə';
          } else if (hour < 12) {
            return 'səhər';
          } else if (hour < 17) {
            return 'gündüz';
          } else {
            return 'axşam';
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal: function ordinal(number) {
          if (number === 0) {
            // special case for zero
            return number + '-ıncı';
          }

          var a = number % 10,
              b = number % 100 - a,
              c = number >= 100 ? 100 : null;
          return number + (suffixes[a] || suffixes[b] || suffixes[c]);
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return az;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/be.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/be.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleBeJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Belarusian [be]
    //! author : Dmitry Demidov : https://github.com/demidov91
    //! author: Praleska: http://praleska.pro/
    //! Author : Menelion Elensúle : https://github.com/Oire
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
      }

      function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
          ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
          mm: withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
          hh: withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
          dd: 'дзень_дні_дзён',
          MM: 'месяц_месяцы_месяцаў',
          yy: 'год_гады_гадоў'
        };

        if (key === 'm') {
          return withoutSuffix ? 'хвіліна' : 'хвіліну';
        } else if (key === 'h') {
          return withoutSuffix ? 'гадзіна' : 'гадзіну';
        } else {
          return number + ' ' + plural(format[key], +number);
        }
      }

      var be = moment.defineLocale('be', {
        months: {
          format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
          standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
        },
        monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
        weekdays: {
          format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
          standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
          isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
        },
        weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY г.',
          LLL: 'D MMMM YYYY г., HH:mm',
          LLLL: 'dddd, D MMMM YYYY г., HH:mm'
        },
        calendar: {
          sameDay: '[Сёння ў] LT',
          nextDay: '[Заўтра ў] LT',
          lastDay: '[Учора ў] LT',
          nextWeek: function nextWeek() {
            return '[У] dddd [ў] LT';
          },
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return '[У мінулую] dddd [ў] LT';

              case 1:
              case 2:
              case 4:
                return '[У мінулы] dddd [ў] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'праз %s',
          past: '%s таму',
          s: 'некалькі секунд',
          m: relativeTimeWithPlural,
          mm: relativeTimeWithPlural,
          h: relativeTimeWithPlural,
          hh: relativeTimeWithPlural,
          d: 'дзень',
          dd: relativeTimeWithPlural,
          M: 'месяц',
          MM: relativeTimeWithPlural,
          y: 'год',
          yy: relativeTimeWithPlural
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function isPM(input) {
          return /^(дня|вечара)$/.test(input);
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'ночы';
          } else if (hour < 12) {
            return 'раніцы';
          } else if (hour < 17) {
            return 'дня';
          } else {
            return 'вечара';
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
              return (number % 10 === 2 || number % 10 === 3) && number % 100 !== 12 && number % 100 !== 13 ? number + '-і' : number + '-ы';

            case 'D':
              return number + '-га';

            default:
              return number;
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return be;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/bg.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/bg.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleBgJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Bulgarian [bg]
    //! author : Krasen Borisov : https://github.com/kraz
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var bg = moment.defineLocale('bg', {
        months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort: 'яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
        weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
        weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'D.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY H:mm',
          LLLL: 'dddd, D MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[Днес в] LT',
          nextDay: '[Утре в] LT',
          nextWeek: 'dddd [в] LT',
          lastDay: '[Вчера в] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return '[Миналата] dddd [в] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[Миналия] dddd [в] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'след %s',
          past: 'преди %s',
          s: 'няколко секунди',
          ss: '%d секунди',
          m: 'минута',
          mm: '%d минути',
          h: 'час',
          hh: '%d часа',
          d: 'ден',
          dd: '%d дена',
          M: 'месец',
          MM: '%d месеца',
          y: 'година',
          yy: '%d години'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function ordinal(number) {
          var lastDigit = number % 10,
              last2Digits = number % 100;

          if (number === 0) {
            return number + '-ев';
          } else if (last2Digits === 0) {
            return number + '-ен';
          } else if (last2Digits > 10 && last2Digits < 20) {
            return number + '-ти';
          } else if (lastDigit === 1) {
            return number + '-ви';
          } else if (lastDigit === 2) {
            return number + '-ри';
          } else if (lastDigit === 7 || lastDigit === 8) {
            return number + '-ми';
          } else {
            return number + '-ти';
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return bg;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/bm.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/bm.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleBmJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Bambara [bm]
    //! author : Estelle Comment : https://github.com/estellecomment
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var bm = moment.defineLocale('bm', {
        months: 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo'.split('_'),
        monthsShort: 'Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des'.split('_'),
        weekdays: 'Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
        weekdaysShort: 'Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib'.split('_'),
        weekdaysMin: 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'MMMM [tile] D [san] YYYY',
          LLL: 'MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
          LLLL: 'dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm'
        },
        calendar: {
          sameDay: '[Bi lɛrɛ] LT',
          nextDay: '[Sini lɛrɛ] LT',
          nextWeek: 'dddd [don lɛrɛ] LT',
          lastDay: '[Kunu lɛrɛ] LT',
          lastWeek: 'dddd [tɛmɛnen lɛrɛ] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s kɔnɔ',
          past: 'a bɛ %s bɔ',
          s: 'sanga dama dama',
          ss: 'sekondi %d',
          m: 'miniti kelen',
          mm: 'miniti %d',
          h: 'lɛrɛ kelen',
          hh: 'lɛrɛ %d',
          d: 'tile kelen',
          dd: 'tile %d',
          M: 'kalo kelen',
          MM: 'kalo %d',
          y: 'san kelen',
          yy: 'san %d'
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return bm;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/bn.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/bn.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleBnJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Bengali [bn]
    //! author : Kaushik Gandhi : https://github.com/kaushikgandhi
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var symbolMap = {
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯',
        '0': '০'
      },
          numberMap = {
        '১': '1',
        '২': '2',
        '৩': '3',
        '৪': '4',
        '৫': '5',
        '৬': '6',
        '৭': '7',
        '৮': '8',
        '৯': '9',
        '০': '0'
      };
      var bn = moment.defineLocale('bn', {
        months: 'জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
        monthsShort: 'জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
        weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
        weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
        weekdaysMin: 'রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি'.split('_'),
        longDateFormat: {
          LT: 'A h:mm সময়',
          LTS: 'A h:mm:ss সময়',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm সময়',
          LLLL: 'dddd, D MMMM YYYY, A h:mm সময়'
        },
        calendar: {
          sameDay: '[আজ] LT',
          nextDay: '[আগামীকাল] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[গতকাল] LT',
          lastWeek: '[গত] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s পরে',
          past: '%s আগে',
          s: 'কয়েক সেকেন্ড',
          ss: '%d সেকেন্ড',
          m: 'এক মিনিট',
          mm: '%d মিনিট',
          h: 'এক ঘন্টা',
          hh: '%d ঘন্টা',
          d: 'এক দিন',
          dd: '%d দিন',
          M: 'এক মাস',
          MM: '%d মাস',
          y: 'এক বছর',
          yy: '%d বছর'
        },
        preparse: function preparse(string) {
          return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'রাত' && hour >= 4 || meridiem === 'দুপুর' && hour < 5 || meridiem === 'বিকাল') {
            return hour + 12;
          } else {
            return hour;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'রাত';
          } else if (hour < 10) {
            return 'সকাল';
          } else if (hour < 17) {
            return 'দুপুর';
          } else if (hour < 20) {
            return 'বিকাল';
          } else {
            return 'রাত';
          }
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return bn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/bo.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/bo.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleBoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Tibetan [bo]
    //! author : Thupten N. Chakrishar : https://github.com/vajradog
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var symbolMap = {
        '1': '༡',
        '2': '༢',
        '3': '༣',
        '4': '༤',
        '5': '༥',
        '6': '༦',
        '7': '༧',
        '8': '༨',
        '9': '༩',
        '0': '༠'
      },
          numberMap = {
        '༡': '1',
        '༢': '2',
        '༣': '3',
        '༤': '4',
        '༥': '5',
        '༦': '6',
        '༧': '7',
        '༨': '8',
        '༩': '9',
        '༠': '0'
      };
      var bo = moment.defineLocale('bo', {
        months: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
        monthsShort: 'ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12'.split('_'),
        monthsShortRegex: /^(ཟླ་\d{1,2})/,
        monthsParseExact: true,
        weekdays: 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
        weekdaysShort: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
        weekdaysMin: 'ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm',
          LLLL: 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar: {
          sameDay: '[དི་རིང] LT',
          nextDay: '[སང་ཉིན] LT',
          nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT',
          lastDay: '[ཁ་སང] LT',
          lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s ལ་',
          past: '%s སྔན་ལ',
          s: 'ལམ་སང',
          ss: '%d སྐར་ཆ།',
          m: 'སྐར་མ་གཅིག',
          mm: '%d སྐར་མ',
          h: 'ཆུ་ཚོད་གཅིག',
          hh: '%d ཆུ་ཚོད',
          d: 'ཉིན་གཅིག',
          dd: '%d ཉིན་',
          M: 'ཟླ་བ་གཅིག',
          MM: '%d ཟླ་བ',
          y: 'ལོ་གཅིག',
          yy: '%d ལོ'
        },
        preparse: function preparse(string) {
          return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'མཚན་མོ' && hour >= 4 || meridiem === 'ཉིན་གུང' && hour < 5 || meridiem === 'དགོང་དག') {
            return hour + 12;
          } else {
            return hour;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'མཚན་མོ';
          } else if (hour < 10) {
            return 'ཞོགས་ཀས';
          } else if (hour < 17) {
            return 'ཉིན་གུང';
          } else if (hour < 20) {
            return 'དགོང་དག';
          } else {
            return 'མཚན་མོ';
          }
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return bo;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/br.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/br.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleBrJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Breton [br]
    //! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      function relativeTimeWithMutation(number, withoutSuffix, key) {
        var format = {
          mm: 'munutenn',
          MM: 'miz',
          dd: 'devezh'
        };
        return number + ' ' + mutation(format[key], number);
      }

      function specialMutationForYears(number) {
        switch (lastNumber(number)) {
          case 1:
          case 3:
          case 4:
          case 5:
          case 9:
            return number + ' bloaz';

          default:
            return number + ' vloaz';
        }
      }

      function lastNumber(number) {
        if (number > 9) {
          return lastNumber(number % 10);
        }

        return number;
      }

      function mutation(text, number) {
        if (number === 2) {
          return softMutation(text);
        }

        return text;
      }

      function softMutation(text) {
        var mutationTable = {
          m: 'v',
          b: 'v',
          d: 'z'
        };

        if (mutationTable[text.charAt(0)] === undefined) {
          return text;
        }

        return mutationTable[text.charAt(0)] + text.substring(1);
      }

      var monthsParse = [/^gen/i, /^c[ʼ\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i],
          monthsRegex = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
          monthsStrictRegex = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
          monthsShortStrictRegex = /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
          fullWeekdaysParse = [/^sul/i, /^lun/i, /^meurzh/i, /^merc[ʼ\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
          shortWeekdaysParse = [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
          minWeekdaysParse = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
      var br = moment.defineLocale('br', {
        months: 'Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
        monthsShort: 'Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
        weekdays: 'Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn'.split('_'),
        weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
        weekdaysParse: minWeekdaysParse,
        fullWeekdaysParse: fullWeekdaysParse,
        shortWeekdaysParse: shortWeekdaysParse,
        minWeekdaysParse: minWeekdaysParse,
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: monthsStrictRegex,
        monthsShortStrictRegex: monthsShortStrictRegex,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [a viz] MMMM YYYY',
          LLL: 'D [a viz] MMMM YYYY HH:mm',
          LLLL: 'dddd, D [a viz] MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Hiziv da] LT',
          nextDay: '[Warcʼhoazh da] LT',
          nextWeek: 'dddd [da] LT',
          lastDay: '[Decʼh da] LT',
          lastWeek: 'dddd [paset da] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'a-benn %s',
          past: '%s ʼzo',
          s: 'un nebeud segondennoù',
          ss: '%d eilenn',
          m: 'ur vunutenn',
          mm: relativeTimeWithMutation,
          h: 'un eur',
          hh: '%d eur',
          d: 'un devezh',
          dd: relativeTimeWithMutation,
          M: 'ur miz',
          MM: relativeTimeWithMutation,
          y: 'ur bloaz',
          yy: specialMutationForYears
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function ordinal(number) {
          var output = number === 1 ? 'añ' : 'vet';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        },
        meridiemParse: /a.m.|g.m./,
        // goude merenn | a-raok merenn
        isPM: function isPM(token) {
          return token === 'g.m.';
        },
        meridiem: function meridiem(hour, minute, isLower) {
          return hour < 12 ? 'a.m.' : 'g.m.';
        }
      });
      return br;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/bs.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/bs.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleBsJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Bosnian [bs]
    //! author : Nedim Cholich : https://github.com/frontyard
    //! based on (hr) translation by Bojan Marković
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      function translate(number, withoutSuffix, key) {
        var result = number + ' ';

        switch (key) {
          case 'ss':
            if (number === 1) {
              result += 'sekunda';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'sekunde';
            } else {
              result += 'sekundi';
            }

            return result;

          case 'm':
            return withoutSuffix ? 'jedna minuta' : 'jedne minute';

          case 'mm':
            if (number === 1) {
              result += 'minuta';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'minute';
            } else {
              result += 'minuta';
            }

            return result;

          case 'h':
            return withoutSuffix ? 'jedan sat' : 'jednog sata';

          case 'hh':
            if (number === 1) {
              result += 'sat';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'sata';
            } else {
              result += 'sati';
            }

            return result;

          case 'dd':
            if (number === 1) {
              result += 'dan';
            } else {
              result += 'dana';
            }

            return result;

          case 'MM':
            if (number === 1) {
              result += 'mjesec';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'mjeseca';
            } else {
              result += 'mjeseci';
            }

            return result;

          case 'yy':
            if (number === 1) {
              result += 'godina';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'godine';
            } else {
              result += 'godina';
            }

            return result;
        }
      }

      var bs = moment.defineLocale('bs', {
        months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sutra u] LT',
          nextWeek: function nextWeek() {
            switch (this.day()) {
              case 0:
                return '[u] [nedjelju] [u] LT';

              case 3:
                return '[u] [srijedu] [u] LT';

              case 6:
                return '[u] [subotu] [u] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[u] dddd [u] LT';
            }
          },
          lastDay: '[jučer u] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
              case 3:
                return '[prošlu] dddd [u] LT';

              case 6:
                return '[prošle] [subote] [u] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[prošli] dddd [u] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: 'prije %s',
          s: 'par sekundi',
          ss: translate,
          m: translate,
          mm: translate,
          h: translate,
          hh: translate,
          d: 'dan',
          dd: translate,
          M: 'mjesec',
          MM: translate,
          y: 'godinu',
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return bs;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ca.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ca.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleCaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Catalan [ca]
    //! author : Juan G. Hurtado : https://github.com/juanghurtado
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var ca = moment.defineLocale('ca', {
        months: {
          standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
          format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split('_'),
          isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort: 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
        monthsParseExact: true,
        weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
        weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
        weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM [de] YYYY',
          ll: 'D MMM YYYY',
          LLL: 'D MMMM [de] YYYY [a les] H:mm',
          lll: 'D MMM YYYY, H:mm',
          LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm',
          llll: 'ddd D MMM YYYY, H:mm'
        },
        calendar: {
          sameDay: function sameDay() {
            return '[avui a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
          },
          nextDay: function nextDay() {
            return '[demà a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
          },
          nextWeek: function nextWeek() {
            return 'dddd [a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
          },
          lastDay: function lastDay() {
            return '[ahir a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
          },
          lastWeek: function lastWeek() {
            return '[el] dddd [passat a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: "d'aquí %s",
          past: 'fa %s',
          s: 'uns segons',
          ss: '%d segons',
          m: 'un minut',
          mm: '%d minuts',
          h: 'una hora',
          hh: '%d hores',
          d: 'un dia',
          dd: '%d dies',
          M: 'un mes',
          MM: '%d mesos',
          y: 'un any',
          yy: '%d anys'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function ordinal(number, period) {
          var output = number === 1 ? 'r' : number === 2 ? 'n' : number === 3 ? 'r' : number === 4 ? 't' : 'è';

          if (period === 'w' || period === 'W') {
            output = 'a';
          }

          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return ca;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/cs.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/cs.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleCsJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Czech [cs]
    //! author : petrbela : https://github.com/petrbela
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
          monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_'),
          monthsParse = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i],
          // NOTE: 'červen' is substring of 'červenec'; therefore 'červenec' must precede 'červen' in the regex to be fully matched.
      // Otherwise parser matches '1. červenec' as '1. červen' + 'ec'.
      monthsRegex = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

      function plural(n) {
        return n > 1 && n < 5 && ~~(n / 10) !== 1;
      }

      function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';

        switch (key) {
          case 's':
            // a few seconds / in a few seconds / a few seconds ago
            return withoutSuffix || isFuture ? 'pár sekund' : 'pár sekundami';

          case 'ss':
            // 9 seconds / in 9 seconds / 9 seconds ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'sekundy' : 'sekund');
            } else {
              return result + 'sekundami';
            }

          case 'm':
            // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minuta' : isFuture ? 'minutu' : 'minutou';

          case 'mm':
            // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'minuty' : 'minut');
            } else {
              return result + 'minutami';
            }

          case 'h':
            // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';

          case 'hh':
            // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'hodiny' : 'hodin');
            } else {
              return result + 'hodinami';
            }

          case 'd':
            // a day / in a day / a day ago
            return withoutSuffix || isFuture ? 'den' : 'dnem';

          case 'dd':
            // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'dny' : 'dní');
            } else {
              return result + 'dny';
            }

          case 'M':
            // a month / in a month / a month ago
            return withoutSuffix || isFuture ? 'měsíc' : 'měsícem';

          case 'MM':
            // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'měsíce' : 'měsíců');
            } else {
              return result + 'měsíci';
            }

          case 'y':
            // a year / in a year / a year ago
            return withoutSuffix || isFuture ? 'rok' : 'rokem';

          case 'yy':
            // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'roky' : 'let');
            } else {
              return result + 'lety';
            }

        }
      }

      var cs = moment.defineLocale('cs', {
        months: months,
        monthsShort: monthsShort,
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        // NOTE: 'červen' is substring of 'červenec'; therefore 'červenec' must precede 'červen' in the regex to be fully matched.
        // Otherwise parser matches '1. červenec' as '1. červen' + 'ec'.
        monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
        monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
        weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
        weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd D. MMMM YYYY H:mm',
          l: 'D. M. YYYY'
        },
        calendar: {
          sameDay: '[dnes v] LT',
          nextDay: '[zítra v] LT',
          nextWeek: function nextWeek() {
            switch (this.day()) {
              case 0:
                return '[v neděli v] LT';

              case 1:
              case 2:
                return '[v] dddd [v] LT';

              case 3:
                return '[ve středu v] LT';

              case 4:
                return '[ve čtvrtek v] LT';

              case 5:
                return '[v pátek v] LT';

              case 6:
                return '[v sobotu v] LT';
            }
          },
          lastDay: '[včera v] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
                return '[minulou neděli v] LT';

              case 1:
              case 2:
                return '[minulé] dddd [v] LT';

              case 3:
                return '[minulou středu v] LT';

              case 4:
              case 5:
                return '[minulý] dddd [v] LT';

              case 6:
                return '[minulou sobotu v] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: 'před %s',
          s: translate,
          ss: translate,
          m: translate,
          mm: translate,
          h: translate,
          hh: translate,
          d: translate,
          dd: translate,
          M: translate,
          MM: translate,
          y: translate,
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return cs;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/cv.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/cv.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleCvJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Chuvash [cv]
    //! author : Anatoly Mironov : https://github.com/mirontoli
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var cv = moment.defineLocale('cv', {
        months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
        monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
        weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
        weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
        weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD-MM-YYYY',
          LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
          LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
          LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
        },
        calendar: {
          sameDay: '[Паян] LT [сехетре]',
          nextDay: '[Ыран] LT [сехетре]',
          lastDay: '[Ӗнер] LT [сехетре]',
          nextWeek: '[Ҫитес] dddd LT [сехетре]',
          lastWeek: '[Иртнӗ] dddd LT [сехетре]',
          sameElse: 'L'
        },
        relativeTime: {
          future: function future(output) {
            var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
            return output + affix;
          },
          past: '%s каялла',
          s: 'пӗр-ик ҫеккунт',
          ss: '%d ҫеккунт',
          m: 'пӗр минут',
          mm: '%d минут',
          h: 'пӗр сехет',
          hh: '%d сехет',
          d: 'пӗр кун',
          dd: '%d кун',
          M: 'пӗр уйӑх',
          MM: '%d уйӑх',
          y: 'пӗр ҫул',
          yy: '%d ҫул'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
        ordinal: '%d-мӗш',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return cv;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/cy.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/cy.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleCyJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Welsh [cy]
    //! author : Robert Allen : https://github.com/robgallen
    //! author : https://github.com/ryangreaves
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var cy = moment.defineLocale('cy', {
        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
        weekdaysParseExact: true,
        // time formats are the same as en-gb
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Heddiw am] LT',
          nextDay: '[Yfory am] LT',
          nextWeek: 'dddd [am] LT',
          lastDay: '[Ddoe am] LT',
          lastWeek: 'dddd [diwethaf am] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'mewn %s',
          past: '%s yn ôl',
          s: 'ychydig eiliadau',
          ss: '%d eiliad',
          m: 'munud',
          mm: '%d munud',
          h: 'awr',
          hh: '%d awr',
          d: 'diwrnod',
          dd: '%d diwrnod',
          M: 'mis',
          MM: '%d mis',
          y: 'blwyddyn',
          yy: '%d flynedd'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
        ordinal: function ordinal(number) {
          var b = number,
              output = '',
              lookup = ['', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
          'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
          ];

          if (b > 20) {
            if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
              output = 'fed'; // not 30ain, 70ain or 90ain
            } else {
              output = 'ain';
            }
          } else if (b > 0) {
            output = lookup[b];
          }

          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return cy;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/da.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/da.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleDaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Danish [da]
    //! author : Ulrik Nielsen : https://github.com/mrbase
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var da = moment.defineLocale('da', {
        months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
        },
        calendar: {
          sameDay: '[i dag kl.] LT',
          nextDay: '[i morgen kl.] LT',
          nextWeek: 'på dddd [kl.] LT',
          lastDay: '[i går kl.] LT',
          lastWeek: '[i] dddd[s kl.] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'om %s',
          past: '%s siden',
          s: 'få sekunder',
          ss: '%d sekunder',
          m: 'et minut',
          mm: '%d minutter',
          h: 'en time',
          hh: '%d timer',
          d: 'en dag',
          dd: '%d dage',
          M: 'en måned',
          MM: '%d måneder',
          y: 'et år',
          yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return da;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/de-at.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/de-at.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleDeAtJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : German (Austria) [de-at]
    //! author : lluchs : https://github.com/lluchs
    //! author: Menelion Elensúle: https://github.com/Oire
    //! author : Martin Groller : https://github.com/MadMG
    //! author : Mikolaj Dadela : https://github.com/mik01aj
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
          m: ['eine Minute', 'einer Minute'],
          h: ['eine Stunde', 'einer Stunde'],
          d: ['ein Tag', 'einem Tag'],
          dd: [number + ' Tage', number + ' Tagen'],
          w: ['eine Woche', 'einer Woche'],
          M: ['ein Monat', 'einem Monat'],
          MM: [number + ' Monate', number + ' Monaten'],
          y: ['ein Jahr', 'einem Jahr'],
          yy: [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
      }

      var deAt = moment.defineLocale('de-at', {
        months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: true,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[heute um] LT [Uhr]',
          sameElse: 'L',
          nextDay: '[morgen um] LT [Uhr]',
          nextWeek: 'dddd [um] LT [Uhr]',
          lastDay: '[gestern um] LT [Uhr]',
          lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime: {
          future: 'in %s',
          past: 'vor %s',
          s: 'ein paar Sekunden',
          ss: '%d Sekunden',
          m: processRelativeTime,
          mm: '%d Minuten',
          h: processRelativeTime,
          hh: '%d Stunden',
          d: processRelativeTime,
          dd: processRelativeTime,
          w: processRelativeTime,
          ww: '%d Wochen',
          M: processRelativeTime,
          MM: processRelativeTime,
          y: processRelativeTime,
          yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return deAt;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/de-ch.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/de-ch.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleDeChJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : German (Switzerland) [de-ch]
    //! author : sschueller : https://github.com/sschueller
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
          m: ['eine Minute', 'einer Minute'],
          h: ['eine Stunde', 'einer Stunde'],
          d: ['ein Tag', 'einem Tag'],
          dd: [number + ' Tage', number + ' Tagen'],
          w: ['eine Woche', 'einer Woche'],
          M: ['ein Monat', 'einem Monat'],
          MM: [number + ' Monate', number + ' Monaten'],
          y: ['ein Jahr', 'einem Jahr'],
          yy: [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
      }

      var deCh = moment.defineLocale('de-ch', {
        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: true,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[heute um] LT [Uhr]',
          sameElse: 'L',
          nextDay: '[morgen um] LT [Uhr]',
          nextWeek: 'dddd [um] LT [Uhr]',
          lastDay: '[gestern um] LT [Uhr]',
          lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime: {
          future: 'in %s',
          past: 'vor %s',
          s: 'ein paar Sekunden',
          ss: '%d Sekunden',
          m: processRelativeTime,
          mm: '%d Minuten',
          h: processRelativeTime,
          hh: '%d Stunden',
          d: processRelativeTime,
          dd: processRelativeTime,
          w: processRelativeTime,
          ww: '%d Wochen',
          M: processRelativeTime,
          MM: processRelativeTime,
          y: processRelativeTime,
          yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return deCh;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/de.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/de.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleDeJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : German [de]
    //! author : lluchs : https://github.com/lluchs
    //! author: Menelion Elensúle: https://github.com/Oire
    //! author : Mikolaj Dadela : https://github.com/mik01aj
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
          m: ['eine Minute', 'einer Minute'],
          h: ['eine Stunde', 'einer Stunde'],
          d: ['ein Tag', 'einem Tag'],
          dd: [number + ' Tage', number + ' Tagen'],
          w: ['eine Woche', 'einer Woche'],
          M: ['ein Monat', 'einem Monat'],
          MM: [number + ' Monate', number + ' Monaten'],
          y: ['ein Jahr', 'einem Jahr'],
          yy: [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
      }

      var de = moment.defineLocale('de', {
        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: true,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[heute um] LT [Uhr]',
          sameElse: 'L',
          nextDay: '[morgen um] LT [Uhr]',
          nextWeek: 'dddd [um] LT [Uhr]',
          lastDay: '[gestern um] LT [Uhr]',
          lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime: {
          future: 'in %s',
          past: 'vor %s',
          s: 'ein paar Sekunden',
          ss: '%d Sekunden',
          m: processRelativeTime,
          mm: '%d Minuten',
          h: processRelativeTime,
          hh: '%d Stunden',
          d: processRelativeTime,
          dd: processRelativeTime,
          w: processRelativeTime,
          ww: '%d Wochen',
          M: processRelativeTime,
          MM: processRelativeTime,
          y: processRelativeTime,
          yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return de;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/dv.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/dv.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleDvJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Maldivian [dv]
    //! author : Jawish Hameed : https://github.com/jawish
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var months = ['ޖެނުއަރީ', 'ފެބްރުއަރީ', 'މާރިޗު', 'އޭޕްރީލު', 'މޭ', 'ޖޫން', 'ޖުލައި', 'އޯގަސްޓު', 'ސެޕްޓެމްބަރު', 'އޮކްޓޯބަރު', 'ނޮވެމްބަރު', 'ޑިސެމްބަރު'],
          weekdays = ['އާދިއްތަ', 'ހޯމަ', 'އަންގާރަ', 'ބުދަ', 'ބުރާސްފަތި', 'ހުކުރު', 'ހޮނިހިރު'];
      var dv = moment.defineLocale('dv', {
        months: months,
        monthsShort: months,
        weekdays: weekdays,
        weekdaysShort: weekdays,
        weekdaysMin: 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'D/M/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /މކ|މފ/,
        isPM: function isPM(input) {
          return 'މފ' === input;
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'މކ';
          } else {
            return 'މފ';
          }
        },
        calendar: {
          sameDay: '[މިއަދު] LT',
          nextDay: '[މާދަމާ] LT',
          nextWeek: 'dddd LT',
          lastDay: '[އިއްޔެ] LT',
          lastWeek: '[ފާއިތުވި] dddd LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'ތެރޭގައި %s',
          past: 'ކުރިން %s',
          s: 'ސިކުންތުކޮޅެއް',
          ss: 'd% ސިކުންތު',
          m: 'މިނިޓެއް',
          mm: 'މިނިޓު %d',
          h: 'ގަޑިއިރެއް',
          hh: 'ގަޑިއިރު %d',
          d: 'ދުވަހެއް',
          dd: 'ދުވަސް %d',
          M: 'މަހެއް',
          MM: 'މަސް %d',
          y: 'އަހަރެއް',
          yy: 'އަހަރު %d'
        },
        preparse: function preparse(string) {
          return string.replace(/،/g, ',');
        },
        postformat: function postformat(string) {
          return string.replace(/,/g, '،');
        },
        week: {
          dow: 7,
          // Sunday is the first day of the week.
          doy: 12 // The week that contains Jan 12th is the first week of the year.

        }
      });
      return dv;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/el.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/el.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleElJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Greek [el]
    //! author : Aggelos Karalias : https://github.com/mehiel
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      function isFunction(input) {
        return typeof Function !== 'undefined' && input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
      }

      var el = moment.defineLocale('el', {
        monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
        monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
        months: function months(momentToFormat, format) {
          if (!momentToFormat) {
            return this._monthsNominativeEl;
          } else if (typeof format === 'string' && /D/.test(format.substring(0, format.indexOf('MMMM')))) {
            // if there is a day number before 'MMMM'
            return this._monthsGenitiveEl[momentToFormat.month()];
          } else {
            return this._monthsNominativeEl[momentToFormat.month()];
          }
        },
        monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
        weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
        weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
        weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours > 11) {
            return isLower ? 'μμ' : 'ΜΜ';
          } else {
            return isLower ? 'πμ' : 'ΠΜ';
          }
        },
        isPM: function isPM(input) {
          return (input + '').toLowerCase()[0] === 'μ';
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendarEl: {
          sameDay: '[Σήμερα {}] LT',
          nextDay: '[Αύριο {}] LT',
          nextWeek: 'dddd [{}] LT',
          lastDay: '[Χθες {}] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 6:
                return '[το προηγούμενο] dddd [{}] LT';

              default:
                return '[την προηγούμενη] dddd [{}] LT';
            }
          },
          sameElse: 'L'
        },
        calendar: function calendar(key, mom) {
          var output = this._calendarEl[key],
              hours = mom && mom.hours();

          if (isFunction(output)) {
            output = output.apply(mom);
          }

          return output.replace('{}', hours % 12 === 1 ? 'στη' : 'στις');
        },
        relativeTime: {
          future: 'σε %s',
          past: '%s πριν',
          s: 'λίγα δευτερόλεπτα',
          ss: '%d δευτερόλεπτα',
          m: 'ένα λεπτό',
          mm: '%d λεπτά',
          h: 'μία ώρα',
          hh: '%d ώρες',
          d: 'μία μέρα',
          dd: '%d μέρες',
          M: 'ένας μήνας',
          MM: '%d μήνες',
          y: 'ένας χρόνος',
          yy: '%d χρόνια'
        },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: '%dη',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4st is the first week of the year.

        }
      });
      return el;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/en-au.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/en-au.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEnAuJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : English (Australia) [en-au]
    //! author : Jared Morse : https://github.com/jarcoal
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var enAu = moment.defineLocale('en-au', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return enAu;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/en-ca.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/en-ca.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEnCaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : English (Canada) [en-ca]
    //! author : Jonathan Abourbih : https://github.com/jonbca
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var enCa = moment.defineLocale('en-ca', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'YYYY-MM-DD',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY h:mm A',
          LLLL: 'dddd, MMMM D, YYYY h:mm A'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        }
      });
      return enCa;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/en-gb.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/en-gb.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEnGbJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : English (United Kingdom) [en-gb]
    //! author : Chris Gedrim : https://github.com/chrisgedrim
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var enGb = moment.defineLocale('en-gb', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return enGb;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/en-ie.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/en-ie.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEnIeJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : English (Ireland) [en-ie]
    //! author : Chris Cartlidge : https://github.com/chriscartlidge
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var enIe = moment.defineLocale('en-ie', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return enIe;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/en-il.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/en-il.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEnIlJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : English (Israel) [en-il]
    //! author : Chris Gedrim : https://github.com/chrisgedrim
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var enIl = moment.defineLocale('en-il', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        }
      });
      return enIl;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/en-in.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/en-in.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEnInJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : English (India) [en-in]
    //! author : Jatin Agrawal : https://github.com/jatinag22
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var enIn = moment.defineLocale('en-in', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 1st is the first week of the year.

        }
      });
      return enIn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/en-nz.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/en-nz.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEnNzJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : English (New Zealand) [en-nz]
    //! author : Luke McGregor : https://github.com/lukemcgregor
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var enNz = moment.defineLocale('en-nz', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return enNz;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/en-sg.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/en-sg.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEnSgJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : English (Singapore) [en-sg]
    //! author : Matthew Castrillon-Madrigal : https://github.com/techdimension
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var enSg = moment.defineLocale('en-sg', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return enSg;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/eo.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/eo.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Esperanto [eo]
    //! author : Colin Dean : https://github.com/colindean
    //! author : Mia Nordentoft Imperatori : https://github.com/miestasmia
    //! comment : miestasmia corrected the translation by colindean
    //! comment : Vivakvo corrected the translation by colindean and miestasmia
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var eo = moment.defineLocale('eo', {
        months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
        monthsShort: 'jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec'.split('_'),
        weekdays: 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
        weekdaysShort: 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
        weekdaysMin: 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: '[la] D[-an de] MMMM, YYYY',
          LLL: '[la] D[-an de] MMMM, YYYY HH:mm',
          LLLL: 'dddd[n], [la] D[-an de] MMMM, YYYY HH:mm',
          llll: 'ddd, [la] D[-an de] MMM, YYYY HH:mm'
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function isPM(input) {
          return input.charAt(0).toLowerCase() === 'p';
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours > 11) {
            return isLower ? 'p.t.m.' : 'P.T.M.';
          } else {
            return isLower ? 'a.t.m.' : 'A.T.M.';
          }
        },
        calendar: {
          sameDay: '[Hodiaŭ je] LT',
          nextDay: '[Morgaŭ je] LT',
          nextWeek: 'dddd[n je] LT',
          lastDay: '[Hieraŭ je] LT',
          lastWeek: '[pasintan] dddd[n je] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'post %s',
          past: 'antaŭ %s',
          s: 'kelkaj sekundoj',
          ss: '%d sekundoj',
          m: 'unu minuto',
          mm: '%d minutoj',
          h: 'unu horo',
          hh: '%d horoj',
          d: 'unu tago',
          //ne 'diurno', ĉar estas uzita por proksimumo
          dd: '%d tagoj',
          M: 'unu monato',
          MM: '%d monatoj',
          y: 'unu jaro',
          yy: '%d jaroj'
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal: '%da',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return eo;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/es-do.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/es-do.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEsDoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Spanish (Dominican Republic) [es-do]
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
          _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
          monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
          monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

      var esDo = moment.defineLocale('es-do', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: function monthsShort(m, format) {
          if (!m) {
            return monthsShortDot;
          } else if (/-MMM-/.test(format)) {
            return _monthsShort[m.month()];
          } else {
            return monthsShortDot[m.month()];
          }
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY h:mm A',
          LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
        },
        calendar: {
          sameDay: function sameDay() {
            return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          nextDay: function nextDay() {
            return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          nextWeek: function nextWeek() {
            return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          lastDay: function lastDay() {
            return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          lastWeek: function lastWeek() {
            return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'en %s',
          past: 'hace %s',
          s: 'unos segundos',
          ss: '%d segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'una hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un año',
          yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return esDo;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/es-us.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/es-us.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEsUsJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Spanish (United States) [es-us]
    //! author : bustta : https://github.com/bustta
    //! author : chrisrodz : https://github.com/chrisrodz
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
          _monthsShort2 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
          monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
          monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

      var esUs = moment.defineLocale('es-us', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: function monthsShort(m, format) {
          if (!m) {
            return monthsShortDot;
          } else if (/-MMM-/.test(format)) {
            return _monthsShort2[m.month()];
          } else {
            return monthsShortDot[m.month()];
          }
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'MM/DD/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY h:mm A',
          LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
        },
        calendar: {
          sameDay: function sameDay() {
            return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          nextDay: function nextDay() {
            return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          nextWeek: function nextWeek() {
            return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          lastDay: function lastDay() {
            return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          lastWeek: function lastWeek() {
            return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'en %s',
          past: 'hace %s',
          s: 'unos segundos',
          ss: '%d segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'una hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un año',
          yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return esUs;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/es.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/es.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEsJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Spanish [es]
    //! author : Julio Napurí : https://github.com/julionc
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
          _monthsShort3 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
          monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
          monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

      var es = moment.defineLocale('es', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: function monthsShort(m, format) {
          if (!m) {
            return monthsShortDot;
          } else if (/-MMM-/.test(format)) {
            return _monthsShort3[m.month()];
          } else {
            return monthsShortDot[m.month()];
          }
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY H:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar: {
          sameDay: function sameDay() {
            return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          nextDay: function nextDay() {
            return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          nextWeek: function nextWeek() {
            return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          lastDay: function lastDay() {
            return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          lastWeek: function lastWeek() {
            return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'en %s',
          past: 'hace %s',
          s: 'unos segundos',
          ss: '%d segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'una hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un año',
          yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        },
        invalidDate: 'Fecha invalida'
      });
      return es;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/et.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/et.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEtJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Estonian [et]
    //! author : Henry Kehlmann : https://github.com/madhenry
    //! improvements : Illimar Tambek : https://github.com/ragulka
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
          s: ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
          ss: [number + 'sekundi', number + 'sekundit'],
          m: ['ühe minuti', 'üks minut'],
          mm: [number + ' minuti', number + ' minutit'],
          h: ['ühe tunni', 'tund aega', 'üks tund'],
          hh: [number + ' tunni', number + ' tundi'],
          d: ['ühe päeva', 'üks päev'],
          M: ['kuu aja', 'kuu aega', 'üks kuu'],
          MM: [number + ' kuu', number + ' kuud'],
          y: ['ühe aasta', 'aasta', 'üks aasta'],
          yy: [number + ' aasta', number + ' aastat']
        };

        if (withoutSuffix) {
          return format[key][2] ? format[key][2] : format[key][1];
        }

        return isFuture ? format[key][0] : format[key][1];
      }

      var et = moment.defineLocale('et', {
        months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
        monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
        weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
        weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
        weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[Täna,] LT',
          nextDay: '[Homme,] LT',
          nextWeek: '[Järgmine] dddd LT',
          lastDay: '[Eile,] LT',
          lastWeek: '[Eelmine] dddd LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s pärast',
          past: '%s tagasi',
          s: processRelativeTime,
          ss: processRelativeTime,
          m: processRelativeTime,
          mm: processRelativeTime,
          h: processRelativeTime,
          hh: processRelativeTime,
          d: processRelativeTime,
          dd: '%d päeva',
          M: processRelativeTime,
          MM: processRelativeTime,
          y: processRelativeTime,
          yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return et;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/eu.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/eu.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEuJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Basque [eu]
    //! author : Eneko Illarramendi : https://github.com/eillarra
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var eu = moment.defineLocale('eu', {
        months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
        monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
        monthsParseExact: true,
        weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
        weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
        weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'YYYY[ko] MMMM[ren] D[a]',
          LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
          LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
          l: 'YYYY-M-D',
          ll: 'YYYY[ko] MMM D[a]',
          lll: 'YYYY[ko] MMM D[a] HH:mm',
          llll: 'ddd, YYYY[ko] MMM D[a] HH:mm'
        },
        calendar: {
          sameDay: '[gaur] LT[etan]',
          nextDay: '[bihar] LT[etan]',
          nextWeek: 'dddd LT[etan]',
          lastDay: '[atzo] LT[etan]',
          lastWeek: '[aurreko] dddd LT[etan]',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s barru',
          past: 'duela %s',
          s: 'segundo batzuk',
          ss: '%d segundo',
          m: 'minutu bat',
          mm: '%d minutu',
          h: 'ordu bat',
          hh: '%d ordu',
          d: 'egun bat',
          dd: '%d egun',
          M: 'hilabete bat',
          MM: '%d hilabete',
          y: 'urte bat',
          yy: '%d urte'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return eu;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/fa.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/fa.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleFaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Persian [fa]
    //! author : Ebrahim Byagowi : https://github.com/ebraminio
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var symbolMap = {
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹',
        '0': '۰'
      },
          numberMap = {
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9',
        '۰': '0'
      };
      var fa = moment.defineLocale('fa', {
        months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        weekdays: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split('_'),
        weekdaysShort: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split('_'),
        weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function isPM(input) {
          return /بعد از ظهر/.test(input);
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'قبل از ظهر';
          } else {
            return 'بعد از ظهر';
          }
        },
        calendar: {
          sameDay: '[امروز ساعت] LT',
          nextDay: '[فردا ساعت] LT',
          nextWeek: 'dddd [ساعت] LT',
          lastDay: '[دیروز ساعت] LT',
          lastWeek: 'dddd [پیش] [ساعت] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'در %s',
          past: '%s پیش',
          s: 'چند ثانیه',
          ss: '%d ثانیه',
          m: 'یک دقیقه',
          mm: '%d دقیقه',
          h: 'یک ساعت',
          hh: '%d ساعت',
          d: 'یک روز',
          dd: '%d روز',
          M: 'یک ماه',
          MM: '%d ماه',
          y: 'یک سال',
          yy: '%d سال'
        },
        preparse: function preparse(string) {
          return string.replace(/[۰-۹]/g, function (match) {
            return numberMap[match];
          }).replace(/،/g, ',');
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          }).replace(/,/g, '،');
        },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal: '%dم',
        week: {
          dow: 6,
          // Saturday is the first day of the week.
          doy: 12 // The week that contains Jan 12th is the first week of the year.

        }
      });
      return fa;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/fi.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/fi.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleFiJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Finnish [fi]
    //! author : Tarmo Aidantausta : https://github.com/bleadof
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
          numbersFuture = ['nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden', numbersPast[7], numbersPast[8], numbersPast[9]];

      function translate(number, withoutSuffix, key, isFuture) {
        var result = '';

        switch (key) {
          case 's':
            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';

          case 'ss':
            result = isFuture ? 'sekunnin' : 'sekuntia';
            break;

          case 'm':
            return isFuture ? 'minuutin' : 'minuutti';

          case 'mm':
            result = isFuture ? 'minuutin' : 'minuuttia';
            break;

          case 'h':
            return isFuture ? 'tunnin' : 'tunti';

          case 'hh':
            result = isFuture ? 'tunnin' : 'tuntia';
            break;

          case 'd':
            return isFuture ? 'päivän' : 'päivä';

          case 'dd':
            result = isFuture ? 'päivän' : 'päivää';
            break;

          case 'M':
            return isFuture ? 'kuukauden' : 'kuukausi';

          case 'MM':
            result = isFuture ? 'kuukauden' : 'kuukautta';
            break;

          case 'y':
            return isFuture ? 'vuoden' : 'vuosi';

          case 'yy':
            result = isFuture ? 'vuoden' : 'vuotta';
            break;
        }

        result = verbalNumber(number, isFuture) + ' ' + result;
        return result;
      }

      function verbalNumber(number, isFuture) {
        return number < 10 ? isFuture ? numbersFuture[number] : numbersPast[number] : number;
      }

      var fi = moment.defineLocale('fi', {
        months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
        weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD.MM.YYYY',
          LL: 'Do MMMM[ta] YYYY',
          LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
          LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
          l: 'D.M.YYYY',
          ll: 'Do MMM YYYY',
          lll: 'Do MMM YYYY, [klo] HH.mm',
          llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
        },
        calendar: {
          sameDay: '[tänään] [klo] LT',
          nextDay: '[huomenna] [klo] LT',
          nextWeek: 'dddd [klo] LT',
          lastDay: '[eilen] [klo] LT',
          lastWeek: '[viime] dddd[na] [klo] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s päästä',
          past: '%s sitten',
          s: translate,
          ss: translate,
          m: translate,
          mm: translate,
          h: translate,
          hh: translate,
          d: translate,
          dd: translate,
          M: translate,
          MM: translate,
          y: translate,
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return fi;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/fil.js":
  /*!*******************************************!*\
    !*** ./node_modules/moment/locale/fil.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleFilJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Filipino [fil]
    //! author : Dan Hagman : https://github.com/hagmandan
    //! author : Matthew Co : https://github.com/matthewdeeco
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var fil = moment.defineLocale('fil', {
        months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
        monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
        weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
        weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
        weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'MM/D/YYYY',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY HH:mm',
          LLLL: 'dddd, MMMM DD, YYYY HH:mm'
        },
        calendar: {
          sameDay: 'LT [ngayong araw]',
          nextDay: '[Bukas ng] LT',
          nextWeek: 'LT [sa susunod na] dddd',
          lastDay: 'LT [kahapon]',
          lastWeek: 'LT [noong nakaraang] dddd',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'sa loob ng %s',
          past: '%s ang nakalipas',
          s: 'ilang segundo',
          ss: '%d segundo',
          m: 'isang minuto',
          mm: '%d minuto',
          h: 'isang oras',
          hh: '%d oras',
          d: 'isang araw',
          dd: '%d araw',
          M: 'isang buwan',
          MM: '%d buwan',
          y: 'isang taon',
          yy: '%d taon'
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function ordinal(number) {
          return number;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return fil;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/fo.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/fo.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleFoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Faroese [fo]
    //! author : Ragnar Johannesen : https://github.com/ragnar123
    //! author : Kristian Sakarisson : https://github.com/sakarisson
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var fo = moment.defineLocale('fo', {
        months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
        weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
        weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D. MMMM, YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Í dag kl.] LT',
          nextDay: '[Í morgin kl.] LT',
          nextWeek: 'dddd [kl.] LT',
          lastDay: '[Í gjár kl.] LT',
          lastWeek: '[síðstu] dddd [kl] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'um %s',
          past: '%s síðani',
          s: 'fá sekund',
          ss: '%d sekundir',
          m: 'ein minuttur',
          mm: '%d minuttir',
          h: 'ein tími',
          hh: '%d tímar',
          d: 'ein dagur',
          dd: '%d dagar',
          M: 'ein mánaður',
          MM: '%d mánaðir',
          y: 'eitt ár',
          yy: '%d ár'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return fo;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/fr-ca.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/fr-ca.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleFrCaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : French (Canada) [fr-ca]
    //! author : Jonathan Abourbih : https://github.com/jonbca
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var frCa = moment.defineLocale('fr-ca', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: true,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Aujourd’hui à] LT',
          nextDay: '[Demain à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[Hier à] LT',
          lastWeek: 'dddd [dernier à] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dans %s',
          past: 'il y a %s',
          s: 'quelques secondes',
          ss: '%d secondes',
          m: 'une minute',
          mm: '%d minutes',
          h: 'une heure',
          hh: '%d heures',
          d: 'un jour',
          dd: '%d jours',
          M: 'un mois',
          MM: '%d mois',
          y: 'un an',
          yy: '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'D':
            case 'DDD':
            case 'd':
              return number + (number === 1 ? 'er' : 'e');
            // Words with feminine grammatical gender: semaine

            case 'w':
            case 'W':
              return number + (number === 1 ? 're' : 'e');
          }
        }
      });
      return frCa;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/fr-ch.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/fr-ch.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleFrChJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : French (Switzerland) [fr-ch]
    //! author : Gaspard Bucher : https://github.com/gaspard
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var frCh = moment.defineLocale('fr-ch', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: true,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Aujourd’hui à] LT',
          nextDay: '[Demain à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[Hier à] LT',
          lastWeek: 'dddd [dernier à] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dans %s',
          past: 'il y a %s',
          s: 'quelques secondes',
          ss: '%d secondes',
          m: 'une minute',
          mm: '%d minutes',
          h: 'une heure',
          hh: '%d heures',
          d: 'un jour',
          dd: '%d jours',
          M: 'un mois',
          MM: '%d mois',
          y: 'un an',
          yy: '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'D':
            case 'DDD':
            case 'd':
              return number + (number === 1 ? 'er' : 'e');
            // Words with feminine grammatical gender: semaine

            case 'w':
            case 'W':
              return number + (number === 1 ? 're' : 'e');
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return frCh;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/fr.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/fr.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleFrJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : French [fr]
    //! author : John Fischer : https://github.com/jfroffice
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var monthsStrictRegex = /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
          monthsShortStrictRegex = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
          monthsRegex = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
          monthsParse = [/^janv/i, /^févr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^août/i, /^sept/i, /^oct/i, /^nov/i, /^déc/i];
      var fr = moment.defineLocale('fr', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: monthsStrictRegex,
        monthsShortStrictRegex: monthsShortStrictRegex,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Aujourd’hui à] LT',
          nextDay: '[Demain à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[Hier à] LT',
          lastWeek: 'dddd [dernier à] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dans %s',
          past: 'il y a %s',
          s: 'quelques secondes',
          ss: '%d secondes',
          m: 'une minute',
          mm: '%d minutes',
          h: 'une heure',
          hh: '%d heures',
          d: 'un jour',
          dd: '%d jours',
          M: 'un mois',
          MM: '%d mois',
          y: 'un an',
          yy: '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            // TODO: Return 'e' when day of month > 1. Move this case inside
            // block for masculine words below.
            // See https://github.com/moment/moment/issues/3375
            case 'D':
              return number + (number === 1 ? 'er' : '');
            // Words with masculine grammatical gender: mois, trimestre, jour

            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
              return number + (number === 1 ? 'er' : 'e');
            // Words with feminine grammatical gender: semaine

            case 'w':
            case 'W':
              return number + (number === 1 ? 're' : 'e');
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return fr;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/fy.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/fy.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleFyJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Frisian [fy]
    //! author : Robin van der Vliet : https://github.com/robin0van0der0v
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
          monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');
      var fy = moment.defineLocale('fy', {
        months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
        monthsShort: function monthsShort(m, format) {
          if (!m) {
            return monthsShortWithDots;
          } else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[m.month()];
          } else {
            return monthsShortWithDots[m.month()];
          }
        },
        monthsParseExact: true,
        weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
        weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
        weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[hjoed om] LT',
          nextDay: '[moarn om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[juster om] LT',
          lastWeek: '[ôfrûne] dddd [om] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'oer %s',
          past: '%s lyn',
          s: 'in pear sekonden',
          ss: '%d sekonden',
          m: 'ien minút',
          mm: '%d minuten',
          h: 'ien oere',
          hh: '%d oeren',
          d: 'ien dei',
          dd: '%d dagen',
          M: 'ien moanne',
          MM: '%d moannen',
          y: 'ien jier',
          yy: '%d jierren'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function ordinal(number) {
          return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return fy;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ga.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ga.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleGaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Irish or Irish Gaelic [ga]
    //! author : André Silva : https://github.com/askpt
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var months = ['Eanáir', 'Feabhra', 'Márta', 'Aibreán', 'Bealtaine', 'Meitheamh', 'Iúil', 'Lúnasa', 'Meán Fómhair', 'Deireadh Fómhair', 'Samhain', 'Nollaig'],
          monthsShort = ['Ean', 'Feabh', 'Márt', 'Aib', 'Beal', 'Meith', 'Iúil', 'Lún', 'M.F.', 'D.F.', 'Samh', 'Noll'],
          weekdays = ['Dé Domhnaigh', 'Dé Luain', 'Dé Máirt', 'Dé Céadaoin', 'Déardaoin', 'Dé hAoine', 'Dé Sathairn'],
          weekdaysShort = ['Domh', 'Luan', 'Máirt', 'Céad', 'Déar', 'Aoine', 'Sath'],
          weekdaysMin = ['Do', 'Lu', 'Má', 'Cé', 'Dé', 'A', 'Sa'];
      var ga = moment.defineLocale('ga', {
        months: months,
        monthsShort: monthsShort,
        monthsParseExact: true,
        weekdays: weekdays,
        weekdaysShort: weekdaysShort,
        weekdaysMin: weekdaysMin,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Inniu ag] LT',
          nextDay: '[Amárach ag] LT',
          nextWeek: 'dddd [ag] LT',
          lastDay: '[Inné ag] LT',
          lastWeek: 'dddd [seo caite] [ag] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'i %s',
          past: '%s ó shin',
          s: 'cúpla soicind',
          ss: '%d soicind',
          m: 'nóiméad',
          mm: '%d nóiméad',
          h: 'uair an chloig',
          hh: '%d uair an chloig',
          d: 'lá',
          dd: '%d lá',
          M: 'mí',
          MM: '%d míonna',
          y: 'bliain',
          yy: '%d bliain'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function ordinal(number) {
          var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return ga;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/gd.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/gd.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleGdJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Scottish Gaelic [gd]
    //! author : Jon Ashdown : https://github.com/jonashdown
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var months = ['Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'],
          monthsShort = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'],
          weekdays = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'],
          weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'],
          weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];
      var gd = moment.defineLocale('gd', {
        months: months,
        monthsShort: monthsShort,
        monthsParseExact: true,
        weekdays: weekdays,
        weekdaysShort: weekdaysShort,
        weekdaysMin: weekdaysMin,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[An-diugh aig] LT',
          nextDay: '[A-màireach aig] LT',
          nextWeek: 'dddd [aig] LT',
          lastDay: '[An-dè aig] LT',
          lastWeek: 'dddd [seo chaidh] [aig] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'ann an %s',
          past: 'bho chionn %s',
          s: 'beagan diogan',
          ss: '%d diogan',
          m: 'mionaid',
          mm: '%d mionaidean',
          h: 'uair',
          hh: '%d uairean',
          d: 'latha',
          dd: '%d latha',
          M: 'mìos',
          MM: '%d mìosan',
          y: 'bliadhna',
          yy: '%d bliadhna'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function ordinal(number) {
          var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return gd;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/gl.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/gl.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleGlJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Galician [gl]
    //! author : Juan G. Hurtado : https://github.com/juanghurtado
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var gl = moment.defineLocale('gl', {
        months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
        monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY H:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar: {
          sameDay: function sameDay() {
            return '[hoxe ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
          },
          nextDay: function nextDay() {
            return '[mañá ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
          },
          nextWeek: function nextWeek() {
            return 'dddd [' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
          },
          lastDay: function lastDay() {
            return '[onte ' + (this.hours() !== 1 ? 'á' : 'a') + '] LT';
          },
          lastWeek: function lastWeek() {
            return '[o] dddd [pasado ' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: function future(str) {
            if (str.indexOf('un') === 0) {
              return 'n' + str;
            }

            return 'en ' + str;
          },
          past: 'hai %s',
          s: 'uns segundos',
          ss: '%d segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'unha hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un ano',
          yy: '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return gl;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/gom-deva.js":
  /*!************************************************!*\
    !*** ./node_modules/moment/locale/gom-deva.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleGomDevaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Konkani Devanagari script [gom-deva]
    //! author : The Discoverer : https://github.com/WikiDiscoverer
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
          s: ['थोडया सॅकंडांनी', 'थोडे सॅकंड'],
          ss: [number + ' सॅकंडांनी', number + ' सॅकंड'],
          m: ['एका मिणटान', 'एक मिनूट'],
          mm: [number + ' मिणटांनी', number + ' मिणटां'],
          h: ['एका वरान', 'एक वर'],
          hh: [number + ' वरांनी', number + ' वरां'],
          d: ['एका दिसान', 'एक दीस'],
          dd: [number + ' दिसांनी', number + ' दीस'],
          M: ['एका म्हयन्यान', 'एक म्हयनो'],
          MM: [number + ' म्हयन्यानी', number + ' म्हयने'],
          y: ['एका वर्सान', 'एक वर्स'],
          yy: [number + ' वर्सांनी', number + ' वर्सां']
        };
        return isFuture ? format[key][0] : format[key][1];
      }

      var gomDeva = moment.defineLocale('gom-deva', {
        months: {
          standalone: 'जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
          format: 'जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या'.split('_'),
          isFormat: /MMMM(\s)+D[oD]?/
        },
        monthsShort: 'जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
        monthsParseExact: true,
        weekdays: 'आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार'.split('_'),
        weekdaysShort: 'आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.'.split('_'),
        weekdaysMin: 'आ_सो_मं_बु_ब्रे_सु_शे'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'A h:mm [वाजतां]',
          LTS: 'A h:mm:ss [वाजतां]',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY A h:mm [वाजतां]',
          LLLL: 'dddd, MMMM Do, YYYY, A h:mm [वाजतां]',
          llll: 'ddd, D MMM YYYY, A h:mm [वाजतां]'
        },
        calendar: {
          sameDay: '[आयज] LT',
          nextDay: '[फाल्यां] LT',
          nextWeek: '[फुडलो] dddd[,] LT',
          lastDay: '[काल] LT',
          lastWeek: '[फाटलो] dddd[,] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s',
          past: '%s आदीं',
          s: processRelativeTime,
          ss: processRelativeTime,
          m: processRelativeTime,
          mm: processRelativeTime,
          h: processRelativeTime,
          hh: processRelativeTime,
          d: processRelativeTime,
          dd: processRelativeTime,
          M: processRelativeTime,
          MM: processRelativeTime,
          y: processRelativeTime,
          yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            // the ordinal 'वेर' only applies to day of the month
            case 'D':
              return number + 'वेर';

            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
            case 'w':
            case 'W':
              return number;
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        },
        meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'राती') {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'सकाळीं') {
            return hour;
          } else if (meridiem === 'दनपारां') {
            return hour > 12 ? hour : hour + 12;
          } else if (meridiem === 'सांजे') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'राती';
          } else if (hour < 12) {
            return 'सकाळीं';
          } else if (hour < 16) {
            return 'दनपारां';
          } else if (hour < 20) {
            return 'सांजे';
          } else {
            return 'राती';
          }
        }
      });
      return gomDeva;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/gom-latn.js":
  /*!************************************************!*\
    !*** ./node_modules/moment/locale/gom-latn.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleGomLatnJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Konkani Latin script [gom-latn]
    //! author : The Discoverer : https://github.com/WikiDiscoverer
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
          s: ['thoddea sekondamni', 'thodde sekond'],
          ss: [number + ' sekondamni', number + ' sekond'],
          m: ['eka mintan', 'ek minut'],
          mm: [number + ' mintamni', number + ' mintam'],
          h: ['eka voran', 'ek vor'],
          hh: [number + ' voramni', number + ' voram'],
          d: ['eka disan', 'ek dis'],
          dd: [number + ' disamni', number + ' dis'],
          M: ['eka mhoinean', 'ek mhoino'],
          MM: [number + ' mhoineamni', number + ' mhoine'],
          y: ['eka vorsan', 'ek voros'],
          yy: [number + ' vorsamni', number + ' vorsam']
        };
        return isFuture ? format[key][0] : format[key][1];
      }

      var gomLatn = moment.defineLocale('gom-latn', {
        months: {
          standalone: 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
          format: 'Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea'.split('_'),
          isFormat: /MMMM(\s)+D[oD]?/
        },
        monthsShort: 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
        monthsParseExact: true,
        weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split('_'),
        weekdaysShort: 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
        weekdaysMin: 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'A h:mm [vazta]',
          LTS: 'A h:mm:ss [vazta]',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY A h:mm [vazta]',
          LLLL: 'dddd, MMMM Do, YYYY, A h:mm [vazta]',
          llll: 'ddd, D MMM YYYY, A h:mm [vazta]'
        },
        calendar: {
          sameDay: '[Aiz] LT',
          nextDay: '[Faleam] LT',
          nextWeek: '[Fuddlo] dddd[,] LT',
          lastDay: '[Kal] LT',
          lastWeek: '[Fattlo] dddd[,] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s',
          past: '%s adim',
          s: processRelativeTime,
          ss: processRelativeTime,
          m: processRelativeTime,
          mm: processRelativeTime,
          h: processRelativeTime,
          hh: processRelativeTime,
          d: processRelativeTime,
          dd: processRelativeTime,
          M: processRelativeTime,
          MM: processRelativeTime,
          y: processRelativeTime,
          yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            // the ordinal 'er' only applies to day of the month
            case 'D':
              return number + 'er';

            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
            case 'w':
            case 'W':
              return number;
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        },
        meridiemParse: /rati|sokallim|donparam|sanje/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'rati') {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'sokallim') {
            return hour;
          } else if (meridiem === 'donparam') {
            return hour > 12 ? hour : hour + 12;
          } else if (meridiem === 'sanje') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'rati';
          } else if (hour < 12) {
            return 'sokallim';
          } else if (hour < 16) {
            return 'donparam';
          } else if (hour < 20) {
            return 'sanje';
          } else {
            return 'rati';
          }
        }
      });
      return gomLatn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/gu.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/gu.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleGuJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Gujarati [gu]
    //! author : Kaushik Thanki : https://github.com/Kaushik1987
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var symbolMap = {
        '1': '૧',
        '2': '૨',
        '3': '૩',
        '4': '૪',
        '5': '૫',
        '6': '૬',
        '7': '૭',
        '8': '૮',
        '9': '૯',
        '0': '૦'
      },
          numberMap = {
        '૧': '1',
        '૨': '2',
        '૩': '3',
        '૪': '4',
        '૫': '5',
        '૬': '6',
        '૭': '7',
        '૮': '8',
        '૯': '9',
        '૦': '0'
      };
      var gu = moment.defineLocale('gu', {
        months: 'જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર'.split('_'),
        monthsShort: 'જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.'.split('_'),
        monthsParseExact: true,
        weekdays: 'રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર'.split('_'),
        weekdaysShort: 'રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ'.split('_'),
        weekdaysMin: 'ર_સો_મં_બુ_ગુ_શુ_શ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm વાગ્યે',
          LTS: 'A h:mm:ss વાગ્યે',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm વાગ્યે',
          LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે'
        },
        calendar: {
          sameDay: '[આજ] LT',
          nextDay: '[કાલે] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[ગઇકાલે] LT',
          lastWeek: '[પાછલા] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s મા',
          past: '%s પહેલા',
          s: 'અમુક પળો',
          ss: '%d સેકંડ',
          m: 'એક મિનિટ',
          mm: '%d મિનિટ',
          h: 'એક કલાક',
          hh: '%d કલાક',
          d: 'એક દિવસ',
          dd: '%d દિવસ',
          M: 'એક મહિનો',
          MM: '%d મહિનો',
          y: 'એક વર્ષ',
          yy: '%d વર્ષ'
        },
        preparse: function preparse(string) {
          return string.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        // Gujarati notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Gujarati.
        meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'રાત') {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'સવાર') {
            return hour;
          } else if (meridiem === 'બપોર') {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === 'સાંજ') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'રાત';
          } else if (hour < 10) {
            return 'સવાર';
          } else if (hour < 17) {
            return 'બપોર';
          } else if (hour < 20) {
            return 'સાંજ';
          } else {
            return 'રાત';
          }
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return gu;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/he.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/he.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleHeJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Hebrew [he]
    //! author : Tomer Cohen : https://github.com/tomer
    //! author : Moshe Simantov : https://github.com/DevelopmentIL
    //! author : Tal Ater : https://github.com/TalAter
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var he = moment.defineLocale('he', {
        months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
        monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
        weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
        weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
        weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [ב]MMMM YYYY',
          LLL: 'D [ב]MMMM YYYY HH:mm',
          LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
          l: 'D/M/YYYY',
          ll: 'D MMM YYYY',
          lll: 'D MMM YYYY HH:mm',
          llll: 'ddd, D MMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[היום ב־]LT',
          nextDay: '[מחר ב־]LT',
          nextWeek: 'dddd [בשעה] LT',
          lastDay: '[אתמול ב־]LT',
          lastWeek: '[ביום] dddd [האחרון בשעה] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'בעוד %s',
          past: 'לפני %s',
          s: 'מספר שניות',
          ss: '%d שניות',
          m: 'דקה',
          mm: '%d דקות',
          h: 'שעה',
          hh: function hh(number) {
            if (number === 2) {
              return 'שעתיים';
            }

            return number + ' שעות';
          },
          d: 'יום',
          dd: function dd(number) {
            if (number === 2) {
              return 'יומיים';
            }

            return number + ' ימים';
          },
          M: 'חודש',
          MM: function MM(number) {
            if (number === 2) {
              return 'חודשיים';
            }

            return number + ' חודשים';
          },
          y: 'שנה',
          yy: function yy(number) {
            if (number === 2) {
              return 'שנתיים';
            } else if (number % 10 === 0 && number !== 10) {
              return number + ' שנה';
            }

            return number + ' שנים';
          }
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM: function isPM(input) {
          return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 5) {
            return 'לפנות בוקר';
          } else if (hour < 10) {
            return 'בבוקר';
          } else if (hour < 12) {
            return isLower ? 'לפנה"צ' : 'לפני הצהריים';
          } else if (hour < 18) {
            return isLower ? 'אחה"צ' : 'אחרי הצהריים';
          } else {
            return 'בערב';
          }
        }
      });
      return he;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/hi.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/hi.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleHiJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Hindi [hi]
    //! author : Mayank Singhal : https://github.com/mayanksinghal
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
      },
          numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
      };
      var hi = moment.defineLocale('hi', {
        months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
        monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
        monthsParseExact: true,
        weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat: {
          LT: 'A h:mm बजे',
          LTS: 'A h:mm:ss बजे',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm बजे',
          LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
        },
        calendar: {
          sameDay: '[आज] LT',
          nextDay: '[कल] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[कल] LT',
          lastWeek: '[पिछले] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s में',
          past: '%s पहले',
          s: 'कुछ ही क्षण',
          ss: '%d सेकंड',
          m: 'एक मिनट',
          mm: '%d मिनट',
          h: 'एक घंटा',
          hh: '%d घंटे',
          d: 'एक दिन',
          dd: '%d दिन',
          M: 'एक महीने',
          MM: '%d महीने',
          y: 'एक वर्ष',
          yy: '%d वर्ष'
        },
        preparse: function preparse(string) {
          return string.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'रात') {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'सुबह') {
            return hour;
          } else if (meridiem === 'दोपहर') {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === 'शाम') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'रात';
          } else if (hour < 10) {
            return 'सुबह';
          } else if (hour < 17) {
            return 'दोपहर';
          } else if (hour < 20) {
            return 'शाम';
          } else {
            return 'रात';
          }
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return hi;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/hr.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/hr.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleHrJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Croatian [hr]
    //! author : Bojan Marković : https://github.com/bmarkovic
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      function translate(number, withoutSuffix, key) {
        var result = number + ' ';

        switch (key) {
          case 'ss':
            if (number === 1) {
              result += 'sekunda';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'sekunde';
            } else {
              result += 'sekundi';
            }

            return result;

          case 'm':
            return withoutSuffix ? 'jedna minuta' : 'jedne minute';

          case 'mm':
            if (number === 1) {
              result += 'minuta';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'minute';
            } else {
              result += 'minuta';
            }

            return result;

          case 'h':
            return withoutSuffix ? 'jedan sat' : 'jednog sata';

          case 'hh':
            if (number === 1) {
              result += 'sat';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'sata';
            } else {
              result += 'sati';
            }

            return result;

          case 'dd':
            if (number === 1) {
              result += 'dan';
            } else {
              result += 'dana';
            }

            return result;

          case 'MM':
            if (number === 1) {
              result += 'mjesec';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'mjeseca';
            } else {
              result += 'mjeseci';
            }

            return result;

          case 'yy':
            if (number === 1) {
              result += 'godina';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'godine';
            } else {
              result += 'godina';
            }

            return result;
        }
      }

      var hr = moment.defineLocale('hr', {
        months: {
          format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
          standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
        },
        monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
        monthsParseExact: true,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'Do MMMM YYYY',
          LLL: 'Do MMMM YYYY H:mm',
          LLLL: 'dddd, Do MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sutra u] LT',
          nextWeek: function nextWeek() {
            switch (this.day()) {
              case 0:
                return '[u] [nedjelju] [u] LT';

              case 3:
                return '[u] [srijedu] [u] LT';

              case 6:
                return '[u] [subotu] [u] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[u] dddd [u] LT';
            }
          },
          lastDay: '[jučer u] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
                return '[prošlu] [nedjelju] [u] LT';

              case 3:
                return '[prošlu] [srijedu] [u] LT';

              case 6:
                return '[prošle] [subote] [u] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[prošli] dddd [u] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: 'prije %s',
          s: 'par sekundi',
          ss: translate,
          m: translate,
          mm: translate,
          h: translate,
          hh: translate,
          d: 'dan',
          dd: translate,
          M: 'mjesec',
          MM: translate,
          y: 'godinu',
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return hr;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/hu.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/hu.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleHuJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Hungarian [hu]
    //! author : Adam Brunner : https://github.com/adambrunner
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');

      function translate(number, withoutSuffix, key, isFuture) {
        var num = number;

        switch (key) {
          case 's':
            return isFuture || withoutSuffix ? 'néhány másodperc' : 'néhány másodperce';

          case 'ss':
            return num + (isFuture || withoutSuffix) ? ' másodperc' : ' másodperce';

          case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');

          case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');

          case 'h':
            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');

          case 'hh':
            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');

          case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');

          case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');

          case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');

          case 'MM':
            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');

          case 'y':
            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');

          case 'yy':
            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
        }

        return '';
      }

      function week(isFuture) {
        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
      }

      var hu = moment.defineLocale('hu', {
        months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
        weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'YYYY.MM.DD.',
          LL: 'YYYY. MMMM D.',
          LLL: 'YYYY. MMMM D. H:mm',
          LLLL: 'YYYY. MMMM D., dddd H:mm'
        },
        meridiemParse: /de|du/i,
        isPM: function isPM(input) {
          return input.charAt(1).toLowerCase() === 'u';
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours < 12) {
            return isLower === true ? 'de' : 'DE';
          } else {
            return isLower === true ? 'du' : 'DU';
          }
        },
        calendar: {
          sameDay: '[ma] LT[-kor]',
          nextDay: '[holnap] LT[-kor]',
          nextWeek: function nextWeek() {
            return week.call(this, true);
          },
          lastDay: '[tegnap] LT[-kor]',
          lastWeek: function lastWeek() {
            return week.call(this, false);
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s múlva',
          past: '%s',
          s: translate,
          ss: translate,
          m: translate,
          mm: translate,
          h: translate,
          hh: translate,
          d: translate,
          dd: translate,
          M: translate,
          MM: translate,
          y: translate,
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return hu;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/hy-am.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/hy-am.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleHyAmJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Armenian [hy-am]
    //! author : Armendarabyan : https://github.com/armendarabyan
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var hyAm = moment.defineLocale('hy-am', {
        months: {
          format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
          standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
        },
        monthsShort: 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
        weekdays: 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
        weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY թ.',
          LLL: 'D MMMM YYYY թ., HH:mm',
          LLLL: 'dddd, D MMMM YYYY թ., HH:mm'
        },
        calendar: {
          sameDay: '[այսօր] LT',
          nextDay: '[վաղը] LT',
          lastDay: '[երեկ] LT',
          nextWeek: function nextWeek() {
            return 'dddd [օրը ժամը] LT';
          },
          lastWeek: function lastWeek() {
            return '[անցած] dddd [օրը ժամը] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s հետո',
          past: '%s առաջ',
          s: 'մի քանի վայրկյան',
          ss: '%d վայրկյան',
          m: 'րոպե',
          mm: '%d րոպե',
          h: 'ժամ',
          hh: '%d ժամ',
          d: 'օր',
          dd: '%d օր',
          M: 'ամիս',
          MM: '%d ամիս',
          y: 'տարի',
          yy: '%d տարի'
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function isPM(input) {
          return /^(ցերեկվա|երեկոյան)$/.test(input);
        },
        meridiem: function meridiem(hour) {
          if (hour < 4) {
            return 'գիշերվա';
          } else if (hour < 12) {
            return 'առավոտվա';
          } else if (hour < 17) {
            return 'ցերեկվա';
          } else {
            return 'երեկոյան';
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'DDD':
            case 'w':
            case 'W':
            case 'DDDo':
              if (number === 1) {
                return number + '-ին';
              }

              return number + '-րդ';

            default:
              return number;
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return hyAm;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/id.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/id.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleIdJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Indonesian [id]
    //! author : Mohammad Satrio Utomo : https://github.com/tyok
    //! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var id = moment.defineLocale('id', {
        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
        weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'pagi') {
            return hour;
          } else if (meridiem === 'siang') {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === 'sore' || meridiem === 'malam') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours < 11) {
            return 'pagi';
          } else if (hours < 15) {
            return 'siang';
          } else if (hours < 19) {
            return 'sore';
          } else {
            return 'malam';
          }
        },
        calendar: {
          sameDay: '[Hari ini pukul] LT',
          nextDay: '[Besok pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kemarin pukul] LT',
          lastWeek: 'dddd [lalu pukul] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dalam %s',
          past: '%s yang lalu',
          s: 'beberapa detik',
          ss: '%d detik',
          m: 'semenit',
          mm: '%d menit',
          h: 'sejam',
          hh: '%d jam',
          d: 'sehari',
          dd: '%d hari',
          M: 'sebulan',
          MM: '%d bulan',
          y: 'setahun',
          yy: '%d tahun'
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return id;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/is.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/is.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleIsJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Icelandic [is]
    //! author : Hinrik Örn Sigurðsson : https://github.com/hinrik
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      function plural(n) {
        if (n % 100 === 11) {
          return true;
        } else if (n % 10 === 1) {
          return false;
        }

        return true;
      }

      function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';

        switch (key) {
          case 's':
            return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';

          case 'ss':
            if (plural(number)) {
              return result + (withoutSuffix || isFuture ? 'sekúndur' : 'sekúndum');
            }

            return result + 'sekúnda';

          case 'm':
            return withoutSuffix ? 'mínúta' : 'mínútu';

          case 'mm':
            if (plural(number)) {
              return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
            } else if (withoutSuffix) {
              return result + 'mínúta';
            }

            return result + 'mínútu';

          case 'hh':
            if (plural(number)) {
              return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
            }

            return result + 'klukkustund';

          case 'd':
            if (withoutSuffix) {
              return 'dagur';
            }

            return isFuture ? 'dag' : 'degi';

          case 'dd':
            if (plural(number)) {
              if (withoutSuffix) {
                return result + 'dagar';
              }

              return result + (isFuture ? 'daga' : 'dögum');
            } else if (withoutSuffix) {
              return result + 'dagur';
            }

            return result + (isFuture ? 'dag' : 'degi');

          case 'M':
            if (withoutSuffix) {
              return 'mánuður';
            }

            return isFuture ? 'mánuð' : 'mánuði';

          case 'MM':
            if (plural(number)) {
              if (withoutSuffix) {
                return result + 'mánuðir';
              }

              return result + (isFuture ? 'mánuði' : 'mánuðum');
            } else if (withoutSuffix) {
              return result + 'mánuður';
            }

            return result + (isFuture ? 'mánuð' : 'mánuði');

          case 'y':
            return withoutSuffix || isFuture ? 'ár' : 'ári';

          case 'yy':
            if (plural(number)) {
              return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
            }

            return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
        }
      }

      var is = moment.defineLocale('is', {
        months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
        weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
        weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
        weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY [kl.] H:mm',
          LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm'
        },
        calendar: {
          sameDay: '[í dag kl.] LT',
          nextDay: '[á morgun kl.] LT',
          nextWeek: 'dddd [kl.] LT',
          lastDay: '[í gær kl.] LT',
          lastWeek: '[síðasta] dddd [kl.] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'eftir %s',
          past: 'fyrir %s síðan',
          s: translate,
          ss: translate,
          m: translate,
          mm: translate,
          h: 'klukkustund',
          hh: translate,
          d: translate,
          dd: translate,
          M: translate,
          MM: translate,
          y: translate,
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return is;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/it-ch.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/it-ch.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleItChJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Italian (Switzerland) [it-ch]
    //! author : xfh : https://github.com/xfh
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var itCh = moment.defineLocale('it-ch', {
        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Oggi alle] LT',
          nextDay: '[Domani alle] LT',
          nextWeek: 'dddd [alle] LT',
          lastDay: '[Ieri alle] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
                return '[la scorsa] dddd [alle] LT';

              default:
                return '[lo scorso] dddd [alle] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: function future(s) {
            return (/^[0-9].+$/.test(s) ? 'tra' : 'in') + ' ' + s;
          },
          past: '%s fa',
          s: 'alcuni secondi',
          ss: '%d secondi',
          m: 'un minuto',
          mm: '%d minuti',
          h: "un'ora",
          hh: '%d ore',
          d: 'un giorno',
          dd: '%d giorni',
          M: 'un mese',
          MM: '%d mesi',
          y: 'un anno',
          yy: '%d anni'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return itCh;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/it.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/it.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleItJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Italian [it]
    //! author : Lorenzo : https://github.com/aliem
    //! author: Mattia Larentis: https://github.com/nostalgiaz
    //! author: Marco : https://github.com/Manfre98
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var it = moment.defineLocale('it', {
        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: function sameDay() {
            return '[Oggi a' + (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") + ']LT';
          },
          nextDay: function nextDay() {
            return '[Domani a' + (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") + ']LT';
          },
          nextWeek: function nextWeek() {
            return 'dddd [a' + (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") + ']LT';
          },
          lastDay: function lastDay() {
            return '[Ieri a' + (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") + ']LT';
          },
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
                return '[La scorsa] dddd [a' + (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") + ']LT';

              default:
                return '[Lo scorso] dddd [a' + (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") + ']LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'tra %s',
          past: '%s fa',
          s: 'alcuni secondi',
          ss: '%d secondi',
          m: 'un minuto',
          mm: '%d minuti',
          h: "un'ora",
          hh: '%d ore',
          d: 'un giorno',
          dd: '%d giorni',
          M: 'un mese',
          MM: '%d mesi',
          y: 'un anno',
          yy: '%d anni'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return it;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ja.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ja.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleJaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Japanese [ja]
    //! author : LI Long : https://github.com/baryon
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var ja = moment.defineLocale('ja', {
        eras: [{
          since: '2019-05-01',
          offset: 1,
          name: '令和',
          narrow: '㋿',
          abbr: 'R'
        }, {
          since: '1989-01-08',
          until: '2019-04-30',
          offset: 1,
          name: '平成',
          narrow: '㍻',
          abbr: 'H'
        }, {
          since: '1926-12-25',
          until: '1989-01-07',
          offset: 1,
          name: '昭和',
          narrow: '㍼',
          abbr: 'S'
        }, {
          since: '1912-07-30',
          until: '1926-12-24',
          offset: 1,
          name: '大正',
          narrow: '㍽',
          abbr: 'T'
        }, {
          since: '1873-01-01',
          until: '1912-07-29',
          offset: 6,
          name: '明治',
          narrow: '㍾',
          abbr: 'M'
        }, {
          since: '0001-01-01',
          until: '1873-12-31',
          offset: 1,
          name: '西暦',
          narrow: 'AD',
          abbr: 'AD'
        }, {
          since: '0000-12-31',
          until: -Infinity,
          offset: 1,
          name: '紀元前',
          narrow: 'BC',
          abbr: 'BC'
        }],
        eraYearOrdinalRegex: /(元|\d+)年/,
        eraYearOrdinalParse: function eraYearOrdinalParse(input, match) {
          return match[1] === '元' ? 1 : parseInt(match[1] || input, 10);
        },
        months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
        weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
        weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日 HH:mm',
          LLLL: 'YYYY年M月D日 dddd HH:mm',
          l: 'YYYY/MM/DD',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日(ddd) HH:mm'
        },
        meridiemParse: /午前|午後/i,
        isPM: function isPM(input) {
          return input === '午後';
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return '午前';
          } else {
            return '午後';
          }
        },
        calendar: {
          sameDay: '[今日] LT',
          nextDay: '[明日] LT',
          nextWeek: function nextWeek(now) {
            if (now.week() !== this.week()) {
              return '[来週]dddd LT';
            } else {
              return 'dddd LT';
            }
          },
          lastDay: '[昨日] LT',
          lastWeek: function lastWeek(now) {
            if (this.week() !== now.week()) {
              return '[先週]dddd LT';
            } else {
              return 'dddd LT';
            }
          },
          sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}日/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'y':
              return number === 1 ? '元年' : number + '年';

            case 'd':
            case 'D':
            case 'DDD':
              return number + '日';

            default:
              return number;
          }
        },
        relativeTime: {
          future: '%s後',
          past: '%s前',
          s: '数秒',
          ss: '%d秒',
          m: '1分',
          mm: '%d分',
          h: '1時間',
          hh: '%d時間',
          d: '1日',
          dd: '%d日',
          M: '1ヶ月',
          MM: '%dヶ月',
          y: '1年',
          yy: '%d年'
        }
      });
      return ja;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/jv.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/jv.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleJvJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Javanese [jv]
    //! author : Rony Lantip : https://github.com/lantip
    //! reference: http://jv.wikipedia.org/wiki/Basa_Jawa
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var jv = moment.defineLocale('jv', {
        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
        weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
        weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'enjing') {
            return hour;
          } else if (meridiem === 'siyang') {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours < 11) {
            return 'enjing';
          } else if (hours < 15) {
            return 'siyang';
          } else if (hours < 19) {
            return 'sonten';
          } else {
            return 'ndalu';
          }
        },
        calendar: {
          sameDay: '[Dinten puniko pukul] LT',
          nextDay: '[Mbenjang pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kala wingi pukul] LT',
          lastWeek: 'dddd [kepengker pukul] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'wonten ing %s',
          past: '%s ingkang kepengker',
          s: 'sawetawis detik',
          ss: '%d detik',
          m: 'setunggal menit',
          mm: '%d menit',
          h: 'setunggal jam',
          hh: '%d jam',
          d: 'sedinten',
          dd: '%d dinten',
          M: 'sewulan',
          MM: '%d wulan',
          y: 'setaun',
          yy: '%d taun'
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return jv;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ka.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ka.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleKaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Georgian [ka]
    //! author : Irakli Janiashvili : https://github.com/IrakliJani
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var ka = moment.defineLocale('ka', {
        months: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
        monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
        weekdays: {
          standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
          format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
          isFormat: /(წინა|შემდეგ)/
        },
        weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
        weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[დღეს] LT[-ზე]',
          nextDay: '[ხვალ] LT[-ზე]',
          lastDay: '[გუშინ] LT[-ზე]',
          nextWeek: '[შემდეგ] dddd LT[-ზე]',
          lastWeek: '[წინა] dddd LT-ზე',
          sameElse: 'L'
        },
        relativeTime: {
          future: function future(s) {
            return s.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, function ($0, $1, $2) {
              return $2 === 'ი' ? $1 + 'ში' : $1 + $2 + 'ში';
            });
          },
          past: function past(s) {
            if (/(წამი|წუთი|საათი|დღე|თვე)/.test(s)) {
              return s.replace(/(ი|ე)$/, 'ის წინ');
            }

            if (/წელი/.test(s)) {
              return s.replace(/წელი$/, 'წლის წინ');
            }

            return s;
          },
          s: 'რამდენიმე წამი',
          ss: '%d წამი',
          m: 'წუთი',
          mm: '%d წუთი',
          h: 'საათი',
          hh: '%d საათი',
          d: 'დღე',
          dd: '%d დღე',
          M: 'თვე',
          MM: '%d თვე',
          y: 'წელი',
          yy: '%d წელი'
        },
        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal: function ordinal(number) {
          if (number === 0) {
            return number;
          }

          if (number === 1) {
            return number + '-ლი';
          }

          if (number < 20 || number <= 100 && number % 20 === 0 || number % 100 === 0) {
            return 'მე-' + number;
          }

          return number + '-ე';
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      return ka;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/kk.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/kk.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleKkJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Kazakh [kk]
    //! authors : Nurlan Rakhimzhanov : https://github.com/nurlan
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var suffixes = {
        0: '-ші',
        1: '-ші',
        2: '-ші',
        3: '-ші',
        4: '-ші',
        5: '-ші',
        6: '-шы',
        7: '-ші',
        8: '-ші',
        9: '-шы',
        10: '-шы',
        20: '-шы',
        30: '-шы',
        40: '-шы',
        50: '-ші',
        60: '-шы',
        70: '-ші',
        80: '-ші',
        90: '-шы',
        100: '-ші'
      };
      var kk = moment.defineLocale('kk', {
        months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
        monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
        weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
        weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
        weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Бүгін сағат] LT',
          nextDay: '[Ертең сағат] LT',
          nextWeek: 'dddd [сағат] LT',
          lastDay: '[Кеше сағат] LT',
          lastWeek: '[Өткен аптаның] dddd [сағат] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s ішінде',
          past: '%s бұрын',
          s: 'бірнеше секунд',
          ss: '%d секунд',
          m: 'бір минут',
          mm: '%d минут',
          h: 'бір сағат',
          hh: '%d сағат',
          d: 'бір күн',
          dd: '%d күн',
          M: 'бір ай',
          MM: '%d ай',
          y: 'бір жыл',
          yy: '%d жыл'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
        ordinal: function ordinal(number) {
          var a = number % 10,
              b = number >= 100 ? 100 : null;
          return number + (suffixes[number] || suffixes[a] || suffixes[b]);
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return kk;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/km.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/km.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleKmJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Cambodian [km]
    //! author : Kruy Vanna : https://github.com/kruyvanna
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var symbolMap = {
        '1': '១',
        '2': '២',
        '3': '៣',
        '4': '៤',
        '5': '៥',
        '6': '៦',
        '7': '៧',
        '8': '៨',
        '9': '៩',
        '0': '០'
      },
          numberMap = {
        '១': '1',
        '២': '2',
        '៣': '3',
        '៤': '4',
        '៥': '5',
        '៦': '6',
        '៧': '7',
        '៨': '8',
        '៩': '9',
        '០': '0'
      };
      var km = moment.defineLocale('km', {
        months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
        monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
        weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /ព្រឹក|ល្ងាច/,
        isPM: function isPM(input) {
          return input === 'ល្ងាច';
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'ព្រឹក';
          } else {
            return 'ល្ងាច';
          }
        },
        calendar: {
          sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
          nextDay: '[ស្អែក ម៉ោង] LT',
          nextWeek: 'dddd [ម៉ោង] LT',
          lastDay: '[ម្សិលមិញ ម៉ោង] LT',
          lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%sទៀត',
          past: '%sមុន',
          s: 'ប៉ុន្មានវិនាទី',
          ss: '%d វិនាទី',
          m: 'មួយនាទី',
          mm: '%d នាទី',
          h: 'មួយម៉ោង',
          hh: '%d ម៉ោង',
          d: 'មួយថ្ងៃ',
          dd: '%d ថ្ងៃ',
          M: 'មួយខែ',
          MM: '%d ខែ',
          y: 'មួយឆ្នាំ',
          yy: '%d ឆ្នាំ'
        },
        dayOfMonthOrdinalParse: /ទី\d{1,2}/,
        ordinal: 'ទី%d',
        preparse: function preparse(string) {
          return string.replace(/[១២៣៤៥៦៧៨៩០]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return km;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/kn.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/kn.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleKnJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Kannada [kn]
    //! author : Rajeev Naik : https://github.com/rajeevnaikte
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var symbolMap = {
        '1': '೧',
        '2': '೨',
        '3': '೩',
        '4': '೪',
        '5': '೫',
        '6': '೬',
        '7': '೭',
        '8': '೮',
        '9': '೯',
        '0': '೦'
      },
          numberMap = {
        '೧': '1',
        '೨': '2',
        '೩': '3',
        '೪': '4',
        '೫': '5',
        '೬': '6',
        '೭': '7',
        '೮': '8',
        '೯': '9',
        '೦': '0'
      };
      var kn = moment.defineLocale('kn', {
        months: 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
        monthsShort: 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split('_'),
        monthsParseExact: true,
        weekdays: 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
        weekdaysShort: 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
        weekdaysMin: 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm',
          LLLL: 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar: {
          sameDay: '[ಇಂದು] LT',
          nextDay: '[ನಾಳೆ] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[ನಿನ್ನೆ] LT',
          lastWeek: '[ಕೊನೆಯ] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s ನಂತರ',
          past: '%s ಹಿಂದೆ',
          s: 'ಕೆಲವು ಕ್ಷಣಗಳು',
          ss: '%d ಸೆಕೆಂಡುಗಳು',
          m: 'ಒಂದು ನಿಮಿಷ',
          mm: '%d ನಿಮಿಷ',
          h: 'ಒಂದು ಗಂಟೆ',
          hh: '%d ಗಂಟೆ',
          d: 'ಒಂದು ದಿನ',
          dd: '%d ದಿನ',
          M: 'ಒಂದು ತಿಂಗಳು',
          MM: '%d ತಿಂಗಳು',
          y: 'ಒಂದು ವರ್ಷ',
          yy: '%d ವರ್ಷ'
        },
        preparse: function preparse(string) {
          return string.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'ರಾತ್ರಿ') {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'ಬೆಳಿಗ್ಗೆ') {
            return hour;
          } else if (meridiem === 'ಮಧ್ಯಾಹ್ನ') {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === 'ಸಂಜೆ') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'ರಾತ್ರಿ';
          } else if (hour < 10) {
            return 'ಬೆಳಿಗ್ಗೆ';
          } else if (hour < 17) {
            return 'ಮಧ್ಯಾಹ್ನ';
          } else if (hour < 20) {
            return 'ಸಂಜೆ';
          } else {
            return 'ರಾತ್ರಿ';
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
        ordinal: function ordinal(number) {
          return number + 'ನೇ';
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return kn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ko.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ko.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleKoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Korean [ko]
    //! author : Kyungwook, Park : https://github.com/kyungw00k
    //! author : Jeeeyul Lee <jeeeyul@gmail.com>
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var ko = moment.defineLocale('ko', {
        months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
        weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
        weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'YYYY.MM.DD.',
          LL: 'YYYY년 MMMM D일',
          LLL: 'YYYY년 MMMM D일 A h:mm',
          LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
          l: 'YYYY.MM.DD.',
          ll: 'YYYY년 MMMM D일',
          lll: 'YYYY년 MMMM D일 A h:mm',
          llll: 'YYYY년 MMMM D일 dddd A h:mm'
        },
        calendar: {
          sameDay: '오늘 LT',
          nextDay: '내일 LT',
          nextWeek: 'dddd LT',
          lastDay: '어제 LT',
          lastWeek: '지난주 dddd LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s 후',
          past: '%s 전',
          s: '몇 초',
          ss: '%d초',
          m: '1분',
          mm: '%d분',
          h: '한 시간',
          hh: '%d시간',
          d: '하루',
          dd: '%d일',
          M: '한 달',
          MM: '%d달',
          y: '일 년',
          yy: '%d년'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
              return number + '일';

            case 'M':
              return number + '월';

            case 'w':
            case 'W':
              return number + '주';

            default:
              return number;
          }
        },
        meridiemParse: /오전|오후/,
        isPM: function isPM(token) {
          return token === '오후';
        },
        meridiem: function meridiem(hour, minute, isUpper) {
          return hour < 12 ? '오전' : '오후';
        }
      });
      return ko;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ku.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ku.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleKuJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Kurdish [ku]
    //! author : Shahram Mebashar : https://github.com/ShahramMebashar
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var symbolMap = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
      },
          numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
      },
          months = ['کانونی دووەم', 'شوبات', 'ئازار', 'نیسان', 'ئایار', 'حوزەیران', 'تەمموز', 'ئاب', 'ئەیلوول', 'تشرینی یەكەم', 'تشرینی دووەم', 'كانونی یەکەم'];
      var ku = moment.defineLocale('ku', {
        months: months,
        monthsShort: months,
        weekdays: 'یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌'.split('_'),
        weekdaysShort: 'یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌'.split('_'),
        weekdaysMin: 'ی_د_س_چ_پ_ه_ش'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /ئێواره‌|به‌یانی/,
        isPM: function isPM(input) {
          return /ئێواره‌/.test(input);
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'به‌یانی';
          } else {
            return 'ئێواره‌';
          }
        },
        calendar: {
          sameDay: '[ئه‌مرۆ كاتژمێر] LT',
          nextDay: '[به‌یانی كاتژمێر] LT',
          nextWeek: 'dddd [كاتژمێر] LT',
          lastDay: '[دوێنێ كاتژمێر] LT',
          lastWeek: 'dddd [كاتژمێر] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'له‌ %s',
          past: '%s',
          s: 'چه‌ند چركه‌یه‌ك',
          ss: 'چركه‌ %d',
          m: 'یه‌ك خوله‌ك',
          mm: '%d خوله‌ك',
          h: 'یه‌ك كاتژمێر',
          hh: '%d كاتژمێر',
          d: 'یه‌ك ڕۆژ',
          dd: '%d ڕۆژ',
          M: 'یه‌ك مانگ',
          MM: '%d مانگ',
          y: 'یه‌ك ساڵ',
          yy: '%d ساڵ'
        },
        preparse: function preparse(string) {
          return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
            return numberMap[match];
          }).replace(/،/g, ',');
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          }).replace(/,/g, '،');
        },
        week: {
          dow: 6,
          // Saturday is the first day of the week.
          doy: 12 // The week that contains Jan 12th is the first week of the year.

        }
      });
      return ku;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ky.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ky.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleKyJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Kyrgyz [ky]
    //! author : Chyngyz Arystan uulu : https://github.com/chyngyz
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var suffixes = {
        0: '-чү',
        1: '-чи',
        2: '-чи',
        3: '-чү',
        4: '-чү',
        5: '-чи',
        6: '-чы',
        7: '-чи',
        8: '-чи',
        9: '-чу',
        10: '-чу',
        20: '-чы',
        30: '-чу',
        40: '-чы',
        50: '-чү',
        60: '-чы',
        70: '-чи',
        80: '-чи',
        90: '-чу',
        100: '-чү'
      };
      var ky = moment.defineLocale('ky', {
        months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
        monthsShort: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
        weekdaysShort: 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
        weekdaysMin: 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Бүгүн саат] LT',
          nextDay: '[Эртең саат] LT',
          nextWeek: 'dddd [саат] LT',
          lastDay: '[Кечээ саат] LT',
          lastWeek: '[Өткөн аптанын] dddd [күнү] [саат] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s ичинде',
          past: '%s мурун',
          s: 'бирнече секунд',
          ss: '%d секунд',
          m: 'бир мүнөт',
          mm: '%d мүнөт',
          h: 'бир саат',
          hh: '%d саат',
          d: 'бир күн',
          dd: '%d күн',
          M: 'бир ай',
          MM: '%d ай',
          y: 'бир жыл',
          yy: '%d жыл'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal: function ordinal(number) {
          var a = number % 10,
              b = number >= 100 ? 100 : null;
          return number + (suffixes[number] || suffixes[a] || suffixes[b]);
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return ky;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/lb.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/lb.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleLbJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Luxembourgish [lb]
    //! author : mweimerskirch : https://github.com/mweimerskirch
    //! author : David Raison : https://github.com/kwisatz
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
          m: ['eng Minutt', 'enger Minutt'],
          h: ['eng Stonn', 'enger Stonn'],
          d: ['een Dag', 'engem Dag'],
          M: ['ee Mount', 'engem Mount'],
          y: ['ee Joer', 'engem Joer']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
      }

      function processFutureTime(string) {
        var number = string.substr(0, string.indexOf(' '));

        if (eifelerRegelAppliesToNumber(number)) {
          return 'a ' + string;
        }

        return 'an ' + string;
      }

      function processPastTime(string) {
        var number = string.substr(0, string.indexOf(' '));

        if (eifelerRegelAppliesToNumber(number)) {
          return 'viru ' + string;
        }

        return 'virun ' + string;
      }
      /**
       * Returns true if the word before the given number loses the '-n' ending.
       * e.g. 'an 10 Deeg' but 'a 5 Deeg'
       *
       * @param number {integer}
       * @returns {boolean}
       */


      function eifelerRegelAppliesToNumber(number) {
        number = parseInt(number, 10);

        if (isNaN(number)) {
          return false;
        }

        if (number < 0) {
          // Negative Number --> always true
          return true;
        } else if (number < 10) {
          // Only 1 digit
          if (4 <= number && number <= 7) {
            return true;
          }

          return false;
        } else if (number < 100) {
          // 2 digits
          var lastDigit = number % 10,
              firstDigit = number / 10;

          if (lastDigit === 0) {
            return eifelerRegelAppliesToNumber(firstDigit);
          }

          return eifelerRegelAppliesToNumber(lastDigit);
        } else if (number < 10000) {
          // 3 or 4 digits --> recursively check first digit
          while (number >= 10) {
            number = number / 10;
          }

          return eifelerRegelAppliesToNumber(number);
        } else {
          // Anything larger than 4 digits: recursively check first n-3 digits
          number = number / 1000;
          return eifelerRegelAppliesToNumber(number);
        }
      }

      var lb = moment.defineLocale('lb', {
        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: true,
        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm [Auer]',
          LTS: 'H:mm:ss [Auer]',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm [Auer]',
          LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
        },
        calendar: {
          sameDay: '[Haut um] LT',
          sameElse: 'L',
          nextDay: '[Muer um] LT',
          nextWeek: 'dddd [um] LT',
          lastDay: '[Gëschter um] LT',
          lastWeek: function lastWeek() {
            // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
            switch (this.day()) {
              case 2:
              case 4:
                return '[Leschten] dddd [um] LT';

              default:
                return '[Leschte] dddd [um] LT';
            }
          }
        },
        relativeTime: {
          future: processFutureTime,
          past: processPastTime,
          s: 'e puer Sekonnen',
          ss: '%d Sekonnen',
          m: processRelativeTime,
          mm: '%d Minutten',
          h: processRelativeTime,
          hh: '%d Stonnen',
          d: processRelativeTime,
          dd: '%d Deeg',
          M: processRelativeTime,
          MM: '%d Méint',
          y: processRelativeTime,
          yy: '%d Joer'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return lb;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/lo.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/lo.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleLoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Lao [lo]
    //! author : Ryan Hart : https://github.com/ryanhart2
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var lo = moment.defineLocale('lo', {
        months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        monthsShort: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        weekdays: 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysShort: 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysMin: 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'ວັນdddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function isPM(input) {
          return input === 'ຕອນແລງ';
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'ຕອນເຊົ້າ';
          } else {
            return 'ຕອນແລງ';
          }
        },
        calendar: {
          sameDay: '[ມື້ນີ້ເວລາ] LT',
          nextDay: '[ມື້ອື່ນເວລາ] LT',
          nextWeek: '[ວັນ]dddd[ໜ້າເວລາ] LT',
          lastDay: '[ມື້ວານນີ້ເວລາ] LT',
          lastWeek: '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'ອີກ %s',
          past: '%sຜ່ານມາ',
          s: 'ບໍ່ເທົ່າໃດວິນາທີ',
          ss: '%d ວິນາທີ',
          m: '1 ນາທີ',
          mm: '%d ນາທີ',
          h: '1 ຊົ່ວໂມງ',
          hh: '%d ຊົ່ວໂມງ',
          d: '1 ມື້',
          dd: '%d ມື້',
          M: '1 ເດືອນ',
          MM: '%d ເດືອນ',
          y: '1 ປີ',
          yy: '%d ປີ'
        },
        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
        ordinal: function ordinal(number) {
          return 'ທີ່' + number;
        }
      });
      return lo;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/lt.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/lt.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleLtJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Lithuanian [lt]
    //! author : Mindaugas Mozūras : https://github.com/mmozuras
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var units = {
        ss: 'sekundė_sekundžių_sekundes',
        m: 'minutė_minutės_minutę',
        mm: 'minutės_minučių_minutes',
        h: 'valanda_valandos_valandą',
        hh: 'valandos_valandų_valandas',
        d: 'diena_dienos_dieną',
        dd: 'dienos_dienų_dienas',
        M: 'mėnuo_mėnesio_mėnesį',
        MM: 'mėnesiai_mėnesių_mėnesius',
        y: 'metai_metų_metus',
        yy: 'metai_metų_metus'
      };

      function translateSeconds(number, withoutSuffix, key, isFuture) {
        if (withoutSuffix) {
          return 'kelios sekundės';
        } else {
          return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
        }
      }

      function translateSingular(number, withoutSuffix, key, isFuture) {
        return withoutSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];
      }

      function special(number) {
        return number % 10 === 0 || number > 10 && number < 20;
      }

      function forms(key) {
        return units[key].split('_');
      }

      function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';

        if (number === 1) {
          return result + translateSingular(number, withoutSuffix, key[0], isFuture);
        } else if (withoutSuffix) {
          return result + (special(number) ? forms(key)[1] : forms(key)[0]);
        } else {
          if (isFuture) {
            return result + forms(key)[1];
          } else {
            return result + (special(number) ? forms(key)[1] : forms(key)[2]);
          }
        }
      }

      var lt = moment.defineLocale('lt', {
        months: {
          format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
          standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
          isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
        weekdays: {
          format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
          standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
          isFormat: /dddd HH:mm/
        },
        weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
        weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'YYYY [m.] MMMM D [d.]',
          LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
          LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
          l: 'YYYY-MM-DD',
          ll: 'YYYY [m.] MMMM D [d.]',
          lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
          llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
        },
        calendar: {
          sameDay: '[Šiandien] LT',
          nextDay: '[Rytoj] LT',
          nextWeek: 'dddd LT',
          lastDay: '[Vakar] LT',
          lastWeek: '[Praėjusį] dddd LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'po %s',
          past: 'prieš %s',
          s: translateSeconds,
          ss: translate,
          m: translateSingular,
          mm: translate,
          h: translateSingular,
          hh: translate,
          d: translateSingular,
          dd: translate,
          M: translateSingular,
          MM: translate,
          y: translateSingular,
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: function ordinal(number) {
          return number + '-oji';
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return lt;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/lv.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/lv.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleLvJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Latvian [lv]
    //! author : Kristaps Karlsons : https://github.com/skakri
    //! author : Jānis Elmeris : https://github.com/JanisE
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var units = {
        ss: 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
        m: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        mm: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        h: 'stundas_stundām_stunda_stundas'.split('_'),
        hh: 'stundas_stundām_stunda_stundas'.split('_'),
        d: 'dienas_dienām_diena_dienas'.split('_'),
        dd: 'dienas_dienām_diena_dienas'.split('_'),
        M: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        MM: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        y: 'gada_gadiem_gads_gadi'.split('_'),
        yy: 'gada_gadiem_gads_gadi'.split('_')
      };
      /**
       * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
       */

      function format(forms, number, withoutSuffix) {
        if (withoutSuffix) {
          // E.g. "21 minūte", "3 minūtes".
          return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
        } else {
          // E.g. "21 minūtes" as in "pēc 21 minūtes".
          // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
          return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
        }
      }

      function relativeTimeWithPlural(number, withoutSuffix, key) {
        return number + ' ' + format(units[key], number, withoutSuffix);
      }

      function relativeTimeWithSingular(number, withoutSuffix, key) {
        return format(units[key], number, withoutSuffix);
      }

      function relativeSeconds(number, withoutSuffix) {
        return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
      }

      var lv = moment.defineLocale('lv', {
        months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
        weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY.',
          LL: 'YYYY. [gada] D. MMMM',
          LLL: 'YYYY. [gada] D. MMMM, HH:mm',
          LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm'
        },
        calendar: {
          sameDay: '[Šodien pulksten] LT',
          nextDay: '[Rīt pulksten] LT',
          nextWeek: 'dddd [pulksten] LT',
          lastDay: '[Vakar pulksten] LT',
          lastWeek: '[Pagājušā] dddd [pulksten] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'pēc %s',
          past: 'pirms %s',
          s: relativeSeconds,
          ss: relativeTimeWithPlural,
          m: relativeTimeWithSingular,
          mm: relativeTimeWithPlural,
          h: relativeTimeWithSingular,
          hh: relativeTimeWithPlural,
          d: relativeTimeWithSingular,
          dd: relativeTimeWithPlural,
          M: relativeTimeWithSingular,
          MM: relativeTimeWithPlural,
          y: relativeTimeWithSingular,
          yy: relativeTimeWithPlural
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return lv;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/me.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/me.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMeJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Montenegrin [me]
    //! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var translator = {
        words: {
          //Different grammatical cases
          ss: ['sekund', 'sekunda', 'sekundi'],
          m: ['jedan minut', 'jednog minuta'],
          mm: ['minut', 'minuta', 'minuta'],
          h: ['jedan sat', 'jednog sata'],
          hh: ['sat', 'sata', 'sati'],
          dd: ['dan', 'dana', 'dana'],
          MM: ['mjesec', 'mjeseca', 'mjeseci'],
          yy: ['godina', 'godine', 'godina']
        },
        correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
          return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
        },
        translate: function translate(number, withoutSuffix, key) {
          var wordKey = translator.words[key];

          if (key.length === 1) {
            return withoutSuffix ? wordKey[0] : wordKey[1];
          } else {
            return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
          }
        }
      };
      var me = moment.defineLocale('me', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sjutra u] LT',
          nextWeek: function nextWeek() {
            switch (this.day()) {
              case 0:
                return '[u] [nedjelju] [u] LT';

              case 3:
                return '[u] [srijedu] [u] LT';

              case 6:
                return '[u] [subotu] [u] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[u] dddd [u] LT';
            }
          },
          lastDay: '[juče u] LT',
          lastWeek: function lastWeek() {
            var lastWeekDays = ['[prošle] [nedjelje] [u] LT', '[prošlog] [ponedjeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srijede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT'];
            return lastWeekDays[this.day()];
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: 'prije %s',
          s: 'nekoliko sekundi',
          ss: translator.translate,
          m: translator.translate,
          mm: translator.translate,
          h: translator.translate,
          hh: translator.translate,
          d: 'dan',
          dd: translator.translate,
          M: 'mjesec',
          MM: translator.translate,
          y: 'godinu',
          yy: translator.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return me;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/mi.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/mi.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMiJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Maori [mi]
    //! author : John Corrigan <robbiecloset@gmail.com> : https://github.com/johnideal
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var mi = moment.defineLocale('mi', {
        months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
        monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
        weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [i] HH:mm',
          LLLL: 'dddd, D MMMM YYYY [i] HH:mm'
        },
        calendar: {
          sameDay: '[i teie mahana, i] LT',
          nextDay: '[apopo i] LT',
          nextWeek: 'dddd [i] LT',
          lastDay: '[inanahi i] LT',
          lastWeek: 'dddd [whakamutunga i] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'i roto i %s',
          past: '%s i mua',
          s: 'te hēkona ruarua',
          ss: '%d hēkona',
          m: 'he meneti',
          mm: '%d meneti',
          h: 'te haora',
          hh: '%d haora',
          d: 'he ra',
          dd: '%d ra',
          M: 'he marama',
          MM: '%d marama',
          y: 'he tau',
          yy: '%d tau'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return mi;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/mk.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/mk.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMkJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Macedonian [mk]
    //! author : Borislav Mickov : https://github.com/B0k0
    //! author : Sashko Todorov : https://github.com/bkyceh
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var mk = moment.defineLocale('mk', {
        months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
        weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
        weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
        weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'D.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY H:mm',
          LLLL: 'dddd, D MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[Денес во] LT',
          nextDay: '[Утре во] LT',
          nextWeek: '[Во] dddd [во] LT',
          lastDay: '[Вчера во] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return '[Изминатата] dddd [во] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[Изминатиот] dddd [во] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'за %s',
          past: 'пред %s',
          s: 'неколку секунди',
          ss: '%d секунди',
          m: 'една минута',
          mm: '%d минути',
          h: 'еден час',
          hh: '%d часа',
          d: 'еден ден',
          dd: '%d дена',
          M: 'еден месец',
          MM: '%d месеци',
          y: 'една година',
          yy: '%d години'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function ordinal(number) {
          var lastDigit = number % 10,
              last2Digits = number % 100;

          if (number === 0) {
            return number + '-ев';
          } else if (last2Digits === 0) {
            return number + '-ен';
          } else if (last2Digits > 10 && last2Digits < 20) {
            return number + '-ти';
          } else if (lastDigit === 1) {
            return number + '-ви';
          } else if (lastDigit === 2) {
            return number + '-ри';
          } else if (lastDigit === 7 || lastDigit === 8) {
            return number + '-ми';
          } else {
            return number + '-ти';
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return mk;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ml.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ml.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMlJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Malayalam [ml]
    //! author : Floyd Pink : https://github.com/floydpink
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var ml = moment.defineLocale('ml', {
        months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
        monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
        monthsParseExact: true,
        weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
        weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
        weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm -നു',
          LTS: 'A h:mm:ss -നു',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm -നു',
          LLLL: 'dddd, D MMMM YYYY, A h:mm -നു'
        },
        calendar: {
          sameDay: '[ഇന്ന്] LT',
          nextDay: '[നാളെ] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[ഇന്നലെ] LT',
          lastWeek: '[കഴിഞ്ഞ] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s കഴിഞ്ഞ്',
          past: '%s മുൻപ്',
          s: 'അൽപ നിമിഷങ്ങൾ',
          ss: '%d സെക്കൻഡ്',
          m: 'ഒരു മിനിറ്റ്',
          mm: '%d മിനിറ്റ്',
          h: 'ഒരു മണിക്കൂർ',
          hh: '%d മണിക്കൂർ',
          d: 'ഒരു ദിവസം',
          dd: '%d ദിവസം',
          M: 'ഒരു മാസം',
          MM: '%d മാസം',
          y: 'ഒരു വർഷം',
          yy: '%d വർഷം'
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'രാത്രി' && hour >= 4 || meridiem === 'ഉച്ച കഴിഞ്ഞ്' || meridiem === 'വൈകുന്നേരം') {
            return hour + 12;
          } else {
            return hour;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'രാത്രി';
          } else if (hour < 12) {
            return 'രാവിലെ';
          } else if (hour < 17) {
            return 'ഉച്ച കഴിഞ്ഞ്';
          } else if (hour < 20) {
            return 'വൈകുന്നേരം';
          } else {
            return 'രാത്രി';
          }
        }
      });
      return ml;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/mn.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/mn.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMnJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Mongolian [mn]
    //! author : Javkhlantugs Nyamdorj : https://github.com/javkhaanj7
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      function translate(number, withoutSuffix, key, isFuture) {
        switch (key) {
          case 's':
            return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';

          case 'ss':
            return number + (withoutSuffix ? ' секунд' : ' секундын');

          case 'm':
          case 'mm':
            return number + (withoutSuffix ? ' минут' : ' минутын');

          case 'h':
          case 'hh':
            return number + (withoutSuffix ? ' цаг' : ' цагийн');

          case 'd':
          case 'dd':
            return number + (withoutSuffix ? ' өдөр' : ' өдрийн');

          case 'M':
          case 'MM':
            return number + (withoutSuffix ? ' сар' : ' сарын');

          case 'y':
          case 'yy':
            return number + (withoutSuffix ? ' жил' : ' жилийн');

          default:
            return number;
        }
      }

      var mn = moment.defineLocale('mn', {
        months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
        monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
        monthsParseExact: true,
        weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
        weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
        weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'YYYY оны MMMMын D',
          LLL: 'YYYY оны MMMMын D HH:mm',
          LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM: function isPM(input) {
          return input === 'ҮХ';
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'ҮӨ';
          } else {
            return 'ҮХ';
          }
        },
        calendar: {
          sameDay: '[Өнөөдөр] LT',
          nextDay: '[Маргааш] LT',
          nextWeek: '[Ирэх] dddd LT',
          lastDay: '[Өчигдөр] LT',
          lastWeek: '[Өнгөрсөн] dddd LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s дараа',
          past: '%s өмнө',
          s: translate,
          ss: translate,
          m: translate,
          mm: translate,
          h: translate,
          hh: translate,
          d: translate,
          dd: translate,
          M: translate,
          MM: translate,
          y: translate,
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
              return number + ' өдөр';

            default:
              return number;
          }
        }
      });
      return mn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/mr.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/mr.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMrJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Marathi [mr]
    //! author : Harshad Kale : https://github.com/kalehv
    //! author : Vivek Athalye : https://github.com/vnathalye
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
      },
          numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
      };

      function relativeTimeMr(number, withoutSuffix, string, isFuture) {
        var output = '';

        if (withoutSuffix) {
          switch (string) {
            case 's':
              output = 'काही सेकंद';
              break;

            case 'ss':
              output = '%d सेकंद';
              break;

            case 'm':
              output = 'एक मिनिट';
              break;

            case 'mm':
              output = '%d मिनिटे';
              break;

            case 'h':
              output = 'एक तास';
              break;

            case 'hh':
              output = '%d तास';
              break;

            case 'd':
              output = 'एक दिवस';
              break;

            case 'dd':
              output = '%d दिवस';
              break;

            case 'M':
              output = 'एक महिना';
              break;

            case 'MM':
              output = '%d महिने';
              break;

            case 'y':
              output = 'एक वर्ष';
              break;

            case 'yy':
              output = '%d वर्षे';
              break;
          }
        } else {
          switch (string) {
            case 's':
              output = 'काही सेकंदां';
              break;

            case 'ss':
              output = '%d सेकंदां';
              break;

            case 'm':
              output = 'एका मिनिटा';
              break;

            case 'mm':
              output = '%d मिनिटां';
              break;

            case 'h':
              output = 'एका तासा';
              break;

            case 'hh':
              output = '%d तासां';
              break;

            case 'd':
              output = 'एका दिवसा';
              break;

            case 'dd':
              output = '%d दिवसां';
              break;

            case 'M':
              output = 'एका महिन्या';
              break;

            case 'MM':
              output = '%d महिन्यां';
              break;

            case 'y':
              output = 'एका वर्षा';
              break;

            case 'yy':
              output = '%d वर्षां';
              break;
          }
        }

        return output.replace(/%d/i, number);
      }

      var mr = moment.defineLocale('mr', {
        months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
        monthsParseExact: true,
        weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat: {
          LT: 'A h:mm वाजता',
          LTS: 'A h:mm:ss वाजता',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm वाजता',
          LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता'
        },
        calendar: {
          sameDay: '[आज] LT',
          nextDay: '[उद्या] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[काल] LT',
          lastWeek: '[मागील] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%sमध्ये',
          past: '%sपूर्वी',
          s: relativeTimeMr,
          ss: relativeTimeMr,
          m: relativeTimeMr,
          mm: relativeTimeMr,
          h: relativeTimeMr,
          hh: relativeTimeMr,
          d: relativeTimeMr,
          dd: relativeTimeMr,
          M: relativeTimeMr,
          MM: relativeTimeMr,
          y: relativeTimeMr,
          yy: relativeTimeMr
        },
        preparse: function preparse(string) {
          return string.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'पहाटे' || meridiem === 'सकाळी') {
            return hour;
          } else if (meridiem === 'दुपारी' || meridiem === 'सायंकाळी' || meridiem === 'रात्री') {
            return hour >= 12 ? hour : hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour >= 0 && hour < 6) {
            return 'पहाटे';
          } else if (hour < 12) {
            return 'सकाळी';
          } else if (hour < 17) {
            return 'दुपारी';
          } else if (hour < 20) {
            return 'सायंकाळी';
          } else {
            return 'रात्री';
          }
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return mr;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ms-my.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/ms-my.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMsMyJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Malay [ms-my]
    //! note : DEPRECATED, the correct one is [ms]
    //! author : Weldan Jamili : https://github.com/weldan
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var msMy = moment.defineLocale('ms-my', {
        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'pagi') {
            return hour;
          } else if (meridiem === 'tengahari') {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === 'petang' || meridiem === 'malam') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours < 11) {
            return 'pagi';
          } else if (hours < 15) {
            return 'tengahari';
          } else if (hours < 19) {
            return 'petang';
          } else {
            return 'malam';
          }
        },
        calendar: {
          sameDay: '[Hari ini pukul] LT',
          nextDay: '[Esok pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kelmarin pukul] LT',
          lastWeek: 'dddd [lepas pukul] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dalam %s',
          past: '%s yang lepas',
          s: 'beberapa saat',
          ss: '%d saat',
          m: 'seminit',
          mm: '%d minit',
          h: 'sejam',
          hh: '%d jam',
          d: 'sehari',
          dd: '%d hari',
          M: 'sebulan',
          MM: '%d bulan',
          y: 'setahun',
          yy: '%d tahun'
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return msMy;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ms.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ms.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMsJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Malay [ms]
    //! author : Weldan Jamili : https://github.com/weldan
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var ms = moment.defineLocale('ms', {
        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'pagi') {
            return hour;
          } else if (meridiem === 'tengahari') {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === 'petang' || meridiem === 'malam') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours < 11) {
            return 'pagi';
          } else if (hours < 15) {
            return 'tengahari';
          } else if (hours < 19) {
            return 'petang';
          } else {
            return 'malam';
          }
        },
        calendar: {
          sameDay: '[Hari ini pukul] LT',
          nextDay: '[Esok pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kelmarin pukul] LT',
          lastWeek: 'dddd [lepas pukul] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dalam %s',
          past: '%s yang lepas',
          s: 'beberapa saat',
          ss: '%d saat',
          m: 'seminit',
          mm: '%d minit',
          h: 'sejam',
          hh: '%d jam',
          d: 'sehari',
          dd: '%d hari',
          M: 'sebulan',
          MM: '%d bulan',
          y: 'setahun',
          yy: '%d tahun'
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return ms;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/mt.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/mt.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMtJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Maltese (Malta) [mt]
    //! author : Alessandro Maruccia : https://github.com/alesma
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var mt = moment.defineLocale('mt', {
        months: 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'.split('_'),
        monthsShort: 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'.split('_'),
        weekdays: 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'.split('_'),
        weekdaysShort: 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'.split('_'),
        weekdaysMin: 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Illum fil-]LT',
          nextDay: '[Għada fil-]LT',
          nextWeek: 'dddd [fil-]LT',
          lastDay: '[Il-bieraħ fil-]LT',
          lastWeek: 'dddd [li għadda] [fil-]LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'f’ %s',
          past: '%s ilu',
          s: 'ftit sekondi',
          ss: '%d sekondi',
          m: 'minuta',
          mm: '%d minuti',
          h: 'siegħa',
          hh: '%d siegħat',
          d: 'ġurnata',
          dd: '%d ġranet',
          M: 'xahar',
          MM: '%d xhur',
          y: 'sena',
          yy: '%d sni'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return mt;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/my.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/my.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMyJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Burmese [my]
    //! author : Squar team, mysquar.com
    //! author : David Rossellat : https://github.com/gholadr
    //! author : Tin Aung Lin : https://github.com/thanyawzinmin
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var symbolMap = {
        '1': '၁',
        '2': '၂',
        '3': '၃',
        '4': '၄',
        '5': '၅',
        '6': '၆',
        '7': '၇',
        '8': '၈',
        '9': '၉',
        '0': '၀'
      },
          numberMap = {
        '၁': '1',
        '၂': '2',
        '၃': '3',
        '၄': '4',
        '၅': '5',
        '၆': '6',
        '၇': '7',
        '၈': '8',
        '၉': '9',
        '၀': '0'
      };
      var my = moment.defineLocale('my', {
        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
        weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[ယနေ.] LT [မှာ]',
          nextDay: '[မနက်ဖြန်] LT [မှာ]',
          nextWeek: 'dddd LT [မှာ]',
          lastDay: '[မနေ.က] LT [မှာ]',
          lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'လာမည့် %s မှာ',
          past: 'လွန်ခဲ့သော %s က',
          s: 'စက္ကန်.အနည်းငယ်',
          ss: '%d စက္ကန့်',
          m: 'တစ်မိနစ်',
          mm: '%d မိနစ်',
          h: 'တစ်နာရီ',
          hh: '%d နာရီ',
          d: 'တစ်ရက်',
          dd: '%d ရက်',
          M: 'တစ်လ',
          MM: '%d လ',
          y: 'တစ်နှစ်',
          yy: '%d နှစ်'
        },
        preparse: function preparse(string) {
          return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return my;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/nb.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/nb.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleNbJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Norwegian Bokmål [nb]
    //! authors : Espen Hovlandsdal : https://github.com/rexxars
    //!           Sigurd Gartmann : https://github.com/sigurdga
    //!           Stephen Ramthun : https://github.com/stephenramthun
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var nb = moment.defineLocale('nb', {
        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
        monthsParseExact: true,
        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY [kl.] HH:mm',
          LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar: {
          sameDay: '[i dag kl.] LT',
          nextDay: '[i morgen kl.] LT',
          nextWeek: 'dddd [kl.] LT',
          lastDay: '[i går kl.] LT',
          lastWeek: '[forrige] dddd [kl.] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'om %s',
          past: '%s siden',
          s: 'noen sekunder',
          ss: '%d sekunder',
          m: 'ett minutt',
          mm: '%d minutter',
          h: 'en time',
          hh: '%d timer',
          d: 'en dag',
          dd: '%d dager',
          M: 'en måned',
          MM: '%d måneder',
          y: 'ett år',
          yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return nb;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ne.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ne.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleNeJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Nepalese [ne]
    //! author : suvash : https://github.com/suvash
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
      },
          numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
      };
      var ne = moment.defineLocale('ne', {
        months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
        monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
        monthsParseExact: true,
        weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
        weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
        weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'Aको h:mm बजे',
          LTS: 'Aको h:mm:ss बजे',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, Aको h:mm बजे',
          LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे'
        },
        preparse: function preparse(string) {
          return string.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'राति') {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'बिहान') {
            return hour;
          } else if (meridiem === 'दिउँसो') {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === 'साँझ') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 3) {
            return 'राति';
          } else if (hour < 12) {
            return 'बिहान';
          } else if (hour < 16) {
            return 'दिउँसो';
          } else if (hour < 20) {
            return 'साँझ';
          } else {
            return 'राति';
          }
        },
        calendar: {
          sameDay: '[आज] LT',
          nextDay: '[भोलि] LT',
          nextWeek: '[आउँदो] dddd[,] LT',
          lastDay: '[हिजो] LT',
          lastWeek: '[गएको] dddd[,] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%sमा',
          past: '%s अगाडि',
          s: 'केही क्षण',
          ss: '%d सेकेण्ड',
          m: 'एक मिनेट',
          mm: '%d मिनेट',
          h: 'एक घण्टा',
          hh: '%d घण्टा',
          d: 'एक दिन',
          dd: '%d दिन',
          M: 'एक महिना',
          MM: '%d महिना',
          y: 'एक बर्ष',
          yy: '%d बर्ष'
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return ne;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/nl-be.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/nl-be.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleNlBeJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Dutch (Belgium) [nl-be]
    //! author : Joris Röling : https://github.com/jorisroling
    //! author : Jacob Middag : https://github.com/middagj
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
          monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
          monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
          monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      var nlBe = moment.defineLocale('nl-be', {
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort: function monthsShort(m, format) {
          if (!m) {
            return monthsShortWithDots;
          } else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[m.month()];
          } else {
            return monthsShortWithDots[m.month()];
          }
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[vandaag om] LT',
          nextDay: '[morgen om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[gisteren om] LT',
          lastWeek: '[afgelopen] dddd [om] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'over %s',
          past: '%s geleden',
          s: 'een paar seconden',
          ss: '%d seconden',
          m: 'één minuut',
          mm: '%d minuten',
          h: 'één uur',
          hh: '%d uur',
          d: 'één dag',
          dd: '%d dagen',
          M: 'één maand',
          MM: '%d maanden',
          y: 'één jaar',
          yy: '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function ordinal(number) {
          return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return nlBe;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/nl.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/nl.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleNlJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Dutch [nl]
    //! author : Joris Röling : https://github.com/jorisroling
    //! author : Jacob Middag : https://github.com/middagj
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
          monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
          monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
          monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      var nl = moment.defineLocale('nl', {
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort: function monthsShort(m, format) {
          if (!m) {
            return monthsShortWithDots;
          } else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[m.month()];
          } else {
            return monthsShortWithDots[m.month()];
          }
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[vandaag om] LT',
          nextDay: '[morgen om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[gisteren om] LT',
          lastWeek: '[afgelopen] dddd [om] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'over %s',
          past: '%s geleden',
          s: 'een paar seconden',
          ss: '%d seconden',
          m: 'één minuut',
          mm: '%d minuten',
          h: 'één uur',
          hh: '%d uur',
          d: 'één dag',
          dd: '%d dagen',
          M: 'één maand',
          MM: '%d maanden',
          y: 'één jaar',
          yy: '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function ordinal(number) {
          return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return nl;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/nn.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/nn.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleNnJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Nynorsk [nn]
    //! authors : https://github.com/mechuwind
    //!           Stephen Ramthun : https://github.com/stephenramthun
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var nn = moment.defineLocale('nn', {
        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
        monthsParseExact: true,
        weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
        weekdaysShort: 'su._må._ty._on._to._fr._lau.'.split('_'),
        weekdaysMin: 'su_må_ty_on_to_fr_la'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY [kl.] H:mm',
          LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar: {
          sameDay: '[I dag klokka] LT',
          nextDay: '[I morgon klokka] LT',
          nextWeek: 'dddd [klokka] LT',
          lastDay: '[I går klokka] LT',
          lastWeek: '[Føregåande] dddd [klokka] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'om %s',
          past: '%s sidan',
          s: 'nokre sekund',
          ss: '%d sekund',
          m: 'eit minutt',
          mm: '%d minutt',
          h: 'ein time',
          hh: '%d timar',
          d: 'ein dag',
          dd: '%d dagar',
          M: 'ein månad',
          MM: '%d månader',
          y: 'eit år',
          yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return nn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/oc-lnc.js":
  /*!**********************************************!*\
    !*** ./node_modules/moment/locale/oc-lnc.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleOcLncJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Occitan, lengadocian dialecte [oc-lnc]
    //! author : Quentin PAGÈS : https://github.com/Quenty31
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var ocLnc = moment.defineLocale('oc-lnc', {
        months: {
          standalone: 'genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre'.split('_'),
          format: "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split('_'),
          isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort: 'gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte'.split('_'),
        weekdaysShort: 'dg._dl._dm._dc._dj._dv._ds.'.split('_'),
        weekdaysMin: 'dg_dl_dm_dc_dj_dv_ds'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM [de] YYYY',
          ll: 'D MMM YYYY',
          LLL: 'D MMMM [de] YYYY [a] H:mm',
          lll: 'D MMM YYYY, H:mm',
          LLLL: 'dddd D MMMM [de] YYYY [a] H:mm',
          llll: 'ddd D MMM YYYY, H:mm'
        },
        calendar: {
          sameDay: '[uèi a] LT',
          nextDay: '[deman a] LT',
          nextWeek: 'dddd [a] LT',
          lastDay: '[ièr a] LT',
          lastWeek: 'dddd [passat a] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: "d'aquí %s",
          past: 'fa %s',
          s: 'unas segondas',
          ss: '%d segondas',
          m: 'una minuta',
          mm: '%d minutas',
          h: 'una ora',
          hh: '%d oras',
          d: 'un jorn',
          dd: '%d jorns',
          M: 'un mes',
          MM: '%d meses',
          y: 'un an',
          yy: '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function ordinal(number, period) {
          var output = number === 1 ? 'r' : number === 2 ? 'n' : number === 3 ? 'r' : number === 4 ? 't' : 'è';

          if (period === 'w' || period === 'W') {
            output = 'a';
          }

          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4
        }
      });
      return ocLnc;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/pa-in.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/pa-in.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocalePaInJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Punjabi (India) [pa-in]
    //! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var symbolMap = {
        '1': '੧',
        '2': '੨',
        '3': '੩',
        '4': '੪',
        '5': '੫',
        '6': '੬',
        '7': '੭',
        '8': '੮',
        '9': '੯',
        '0': '੦'
      },
          numberMap = {
        '੧': '1',
        '੨': '2',
        '੩': '3',
        '੪': '4',
        '੫': '5',
        '੬': '6',
        '੭': '7',
        '੮': '8',
        '੯': '9',
        '੦': '0'
      };
      var paIn = moment.defineLocale('pa-in', {
        // There are months name as per Nanakshahi Calendar but they are not used as rigidly in modern Punjabi.
        months: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        monthsShort: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        weekdays: 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
        weekdaysShort: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        weekdaysMin: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm ਵਜੇ',
          LTS: 'A h:mm:ss ਵਜੇ',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm ਵਜੇ',
          LLLL: 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
        },
        calendar: {
          sameDay: '[ਅਜ] LT',
          nextDay: '[ਕਲ] LT',
          nextWeek: '[ਅਗਲਾ] dddd, LT',
          lastDay: '[ਕਲ] LT',
          lastWeek: '[ਪਿਛਲੇ] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s ਵਿੱਚ',
          past: '%s ਪਿਛਲੇ',
          s: 'ਕੁਝ ਸਕਿੰਟ',
          ss: '%d ਸਕਿੰਟ',
          m: 'ਇਕ ਮਿੰਟ',
          mm: '%d ਮਿੰਟ',
          h: 'ਇੱਕ ਘੰਟਾ',
          hh: '%d ਘੰਟੇ',
          d: 'ਇੱਕ ਦਿਨ',
          dd: '%d ਦਿਨ',
          M: 'ਇੱਕ ਮਹੀਨਾ',
          MM: '%d ਮਹੀਨੇ',
          y: 'ਇੱਕ ਸਾਲ',
          yy: '%d ਸਾਲ'
        },
        preparse: function preparse(string) {
          return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'ਰਾਤ') {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'ਸਵੇਰ') {
            return hour;
          } else if (meridiem === 'ਦੁਪਹਿਰ') {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === 'ਸ਼ਾਮ') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'ਰਾਤ';
          } else if (hour < 10) {
            return 'ਸਵੇਰ';
          } else if (hour < 17) {
            return 'ਦੁਪਹਿਰ';
          } else if (hour < 20) {
            return 'ਸ਼ਾਮ';
          } else {
            return 'ਰਾਤ';
          }
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return paIn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/pl.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/pl.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocalePlJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Polish [pl]
    //! author : Rafal Hirsz : https://github.com/evoL
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
          monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');

      function plural(n) {
        return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 !== 1;
      }

      function translate(number, withoutSuffix, key) {
        var result = number + ' ';

        switch (key) {
          case 'ss':
            return result + (plural(number) ? 'sekundy' : 'sekund');

          case 'm':
            return withoutSuffix ? 'minuta' : 'minutę';

          case 'mm':
            return result + (plural(number) ? 'minuty' : 'minut');

          case 'h':
            return withoutSuffix ? 'godzina' : 'godzinę';

          case 'hh':
            return result + (plural(number) ? 'godziny' : 'godzin');

          case 'MM':
            return result + (plural(number) ? 'miesiące' : 'miesięcy');

          case 'yy':
            return result + (plural(number) ? 'lata' : 'lat');
        }
      }

      var pl = moment.defineLocale('pl', {
        months: function months(momentToFormat, format) {
          if (!momentToFormat) {
            return monthsNominative;
          } else if (format === '') {
            // Hack: if format empty we know this is used to generate
            // RegExp by moment. Give then back both valid forms of months
            // in RegExp ready format.
            return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
          } else if (/D MMMM/.test(format)) {
            return monthsSubjective[momentToFormat.month()];
          } else {
            return monthsNominative[momentToFormat.month()];
          }
        },
        monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
        weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
        weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Dziś o] LT',
          nextDay: '[Jutro o] LT',
          nextWeek: function nextWeek() {
            switch (this.day()) {
              case 0:
                return '[W niedzielę o] LT';

              case 2:
                return '[We wtorek o] LT';

              case 3:
                return '[W środę o] LT';

              case 6:
                return '[W sobotę o] LT';

              default:
                return '[W] dddd [o] LT';
            }
          },
          lastDay: '[Wczoraj o] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
                return '[W zeszłą niedzielę o] LT';

              case 3:
                return '[W zeszłą środę o] LT';

              case 6:
                return '[W zeszłą sobotę o] LT';

              default:
                return '[W zeszły] dddd [o] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: '%s temu',
          s: 'kilka sekund',
          ss: translate,
          m: translate,
          mm: translate,
          h: translate,
          hh: translate,
          d: '1 dzień',
          dd: '%d dni',
          M: 'miesiąc',
          MM: translate,
          y: 'rok',
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return pl;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/pt-br.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/pt-br.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocalePtBrJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Portuguese (Brazil) [pt-br]
    //! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var ptBr = moment.defineLocale('pt-br', {
        months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
        monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
        weekdays: 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
        weekdaysShort: 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
        weekdaysMin: 'do_2ª_3ª_4ª_5ª_6ª_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
        },
        calendar: {
          sameDay: '[Hoje às] LT',
          nextDay: '[Amanhã às] LT',
          nextWeek: 'dddd [às] LT',
          lastDay: '[Ontem às] LT',
          lastWeek: function lastWeek() {
            return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' // Saturday + Sunday
            : '[Última] dddd [às] LT'; // Monday - Friday
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'em %s',
          past: 'há %s',
          s: 'poucos segundos',
          ss: '%d segundos',
          m: 'um minuto',
          mm: '%d minutos',
          h: 'uma hora',
          hh: '%d horas',
          d: 'um dia',
          dd: '%d dias',
          M: 'um mês',
          MM: '%d meses',
          y: 'um ano',
          yy: '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº'
      });
      return ptBr;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/pt.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/pt.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocalePtJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Portuguese [pt]
    //! author : Jefferson : https://github.com/jalex79
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var pt = moment.defineLocale('pt', {
        months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
        monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
        weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY HH:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Hoje às] LT',
          nextDay: '[Amanhã às] LT',
          nextWeek: 'dddd [às] LT',
          lastDay: '[Ontem às] LT',
          lastWeek: function lastWeek() {
            return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' // Saturday + Sunday
            : '[Última] dddd [às] LT'; // Monday - Friday
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'em %s',
          past: 'há %s',
          s: 'segundos',
          ss: '%d segundos',
          m: 'um minuto',
          mm: '%d minutos',
          h: 'uma hora',
          hh: '%d horas',
          d: 'um dia',
          dd: '%d dias',
          M: 'um mês',
          MM: '%d meses',
          y: 'um ano',
          yy: '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return pt;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ro.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ro.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleRoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Romanian [ro]
    //! author : Vlad Gurdiga : https://github.com/gurdiga
    //! author : Valentin Agachi : https://github.com/avaly
    //! author : Emanuel Cepoi : https://github.com/cepem
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
          ss: 'secunde',
          mm: 'minute',
          hh: 'ore',
          dd: 'zile',
          MM: 'luni',
          yy: 'ani'
        },
            separator = ' ';

        if (number % 100 >= 20 || number >= 100 && number % 100 === 0) {
          separator = ' de ';
        }

        return number + separator + format[key];
      }

      var ro = moment.defineLocale('ro', {
        months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
        monthsShort: 'ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
        weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
        weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY H:mm',
          LLLL: 'dddd, D MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[azi la] LT',
          nextDay: '[mâine la] LT',
          nextWeek: 'dddd [la] LT',
          lastDay: '[ieri la] LT',
          lastWeek: '[fosta] dddd [la] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'peste %s',
          past: '%s în urmă',
          s: 'câteva secunde',
          ss: relativeTimeWithPlural,
          m: 'un minut',
          mm: relativeTimeWithPlural,
          h: 'o oră',
          hh: relativeTimeWithPlural,
          d: 'o zi',
          dd: relativeTimeWithPlural,
          M: 'o lună',
          MM: relativeTimeWithPlural,
          y: 'un an',
          yy: relativeTimeWithPlural
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return ro;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ru.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ru.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleRuJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Russian [ru]
    //! author : Viktorminator : https://github.com/Viktorminator
    //! author : Menelion Elensúle : https://github.com/Oire
    //! author : Коренберг Марк : https://github.com/socketpair
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
      }

      function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
          ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
          mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
          hh: 'час_часа_часов',
          dd: 'день_дня_дней',
          MM: 'месяц_месяца_месяцев',
          yy: 'год_года_лет'
        };

        if (key === 'm') {
          return withoutSuffix ? 'минута' : 'минуту';
        } else {
          return number + ' ' + plural(format[key], +number);
        }
      }

      var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i]; // http://new.gramota.ru/spravka/rules/139-prop : § 103
      // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
      // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753

      var ru = moment.defineLocale('ru', {
        months: {
          format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
          standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
        },
        monthsShort: {
          // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку?
          format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
          standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
        },
        weekdays: {
          standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
          format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
          isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
        },
        weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        // копия предыдущего
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        // полные названия с падежами
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        // Выражение, которое соответствует только сокращённым формам
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY г.',
          LLL: 'D MMMM YYYY г., H:mm',
          LLLL: 'dddd, D MMMM YYYY г., H:mm'
        },
        calendar: {
          sameDay: '[Сегодня, в] LT',
          nextDay: '[Завтра, в] LT',
          lastDay: '[Вчера, в] LT',
          nextWeek: function nextWeek(now) {
            if (now.week() !== this.week()) {
              switch (this.day()) {
                case 0:
                  return '[В следующее] dddd, [в] LT';

                case 1:
                case 2:
                case 4:
                  return '[В следующий] dddd, [в] LT';

                case 3:
                case 5:
                case 6:
                  return '[В следующую] dddd, [в] LT';
              }
            } else {
              if (this.day() === 2) {
                return '[Во] dddd, [в] LT';
              } else {
                return '[В] dddd, [в] LT';
              }
            }
          },
          lastWeek: function lastWeek(now) {
            if (now.week() !== this.week()) {
              switch (this.day()) {
                case 0:
                  return '[В прошлое] dddd, [в] LT';

                case 1:
                case 2:
                case 4:
                  return '[В прошлый] dddd, [в] LT';

                case 3:
                case 5:
                case 6:
                  return '[В прошлую] dddd, [в] LT';
              }
            } else {
              if (this.day() === 2) {
                return '[Во] dddd, [в] LT';
              } else {
                return '[В] dddd, [в] LT';
              }
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'через %s',
          past: '%s назад',
          s: 'несколько секунд',
          ss: relativeTimeWithPlural,
          m: relativeTimeWithPlural,
          mm: relativeTimeWithPlural,
          h: 'час',
          hh: relativeTimeWithPlural,
          d: 'день',
          dd: relativeTimeWithPlural,
          M: 'месяц',
          MM: relativeTimeWithPlural,
          y: 'год',
          yy: relativeTimeWithPlural
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function isPM(input) {
          return /^(дня|вечера)$/.test(input);
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'ночи';
          } else if (hour < 12) {
            return 'утра';
          } else if (hour < 17) {
            return 'дня';
          } else {
            return 'вечера';
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
              return number + '-й';

            case 'D':
              return number + '-го';

            case 'w':
            case 'W':
              return number + '-я';

            default:
              return number;
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return ru;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/sd.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/sd.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSdJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Sindhi [sd]
    //! author : Narain Sagar : https://github.com/narainsagar
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var months = ['جنوري', 'فيبروري', 'مارچ', 'اپريل', 'مئي', 'جون', 'جولاءِ', 'آگسٽ', 'سيپٽمبر', 'آڪٽوبر', 'نومبر', 'ڊسمبر'],
          days = ['آچر', 'سومر', 'اڱارو', 'اربع', 'خميس', 'جمع', 'ڇنڇر'];
      var sd = moment.defineLocale('sd', {
        months: months,
        monthsShort: months,
        weekdays: days,
        weekdaysShort: days,
        weekdaysMin: days,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd، D MMMM YYYY HH:mm'
        },
        meridiemParse: /صبح|شام/,
        isPM: function isPM(input) {
          return 'شام' === input;
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'صبح';
          }

          return 'شام';
        },
        calendar: {
          sameDay: '[اڄ] LT',
          nextDay: '[سڀاڻي] LT',
          nextWeek: 'dddd [اڳين هفتي تي] LT',
          lastDay: '[ڪالهه] LT',
          lastWeek: '[گزريل هفتي] dddd [تي] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s پوء',
          past: '%s اڳ',
          s: 'چند سيڪنڊ',
          ss: '%d سيڪنڊ',
          m: 'هڪ منٽ',
          mm: '%d منٽ',
          h: 'هڪ ڪلاڪ',
          hh: '%d ڪلاڪ',
          d: 'هڪ ڏينهن',
          dd: '%d ڏينهن',
          M: 'هڪ مهينو',
          MM: '%d مهينا',
          y: 'هڪ سال',
          yy: '%d سال'
        },
        preparse: function preparse(string) {
          return string.replace(/،/g, ',');
        },
        postformat: function postformat(string) {
          return string.replace(/,/g, '،');
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return sd;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/se.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/se.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSeJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Northern Sami [se]
    //! authors : Bård Rolstad Henriksen : https://github.com/karamell
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var se = moment.defineLocale('se', {
        months: 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
        monthsShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
        weekdays: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
        weekdaysShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
        weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'MMMM D. [b.] YYYY',
          LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
          LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
        },
        calendar: {
          sameDay: '[otne ti] LT',
          nextDay: '[ihttin ti] LT',
          nextWeek: 'dddd [ti] LT',
          lastDay: '[ikte ti] LT',
          lastWeek: '[ovddit] dddd [ti] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s geažes',
          past: 'maŋit %s',
          s: 'moadde sekunddat',
          ss: '%d sekunddat',
          m: 'okta minuhta',
          mm: '%d minuhtat',
          h: 'okta diimmu',
          hh: '%d diimmut',
          d: 'okta beaivi',
          dd: '%d beaivvit',
          M: 'okta mánnu',
          MM: '%d mánut',
          y: 'okta jahki',
          yy: '%d jagit'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return se;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/si.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/si.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSiJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Sinhalese [si]
    //! author : Sampath Sitinamaluwa : https://github.com/sampathsris
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      /*jshint -W100*/

      var si = moment.defineLocale('si', {
        months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
        monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
        weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
        weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
        weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'a h:mm',
          LTS: 'a h:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY MMMM D',
          LLL: 'YYYY MMMM D, a h:mm',
          LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
        },
        calendar: {
          sameDay: '[අද] LT[ට]',
          nextDay: '[හෙට] LT[ට]',
          nextWeek: 'dddd LT[ට]',
          lastDay: '[ඊයේ] LT[ට]',
          lastWeek: '[පසුගිය] dddd LT[ට]',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%sකින්',
          past: '%sකට පෙර',
          s: 'තත්පර කිහිපය',
          ss: 'තත්පර %d',
          m: 'මිනිත්තුව',
          mm: 'මිනිත්තු %d',
          h: 'පැය',
          hh: 'පැය %d',
          d: 'දිනය',
          dd: 'දින %d',
          M: 'මාසය',
          MM: 'මාස %d',
          y: 'වසර',
          yy: 'වසර %d'
        },
        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
        ordinal: function ordinal(number) {
          return number + ' වැනි';
        },
        meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM: function isPM(input) {
          return input === 'ප.ව.' || input === 'පස් වරු';
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours > 11) {
            return isLower ? 'ප.ව.' : 'පස් වරු';
          } else {
            return isLower ? 'පෙ.ව.' : 'පෙර වරු';
          }
        }
      });
      return si;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/sk.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/sk.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSkJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Slovak [sk]
    //! author : Martin Minka : https://github.com/k2s
    //! based on work of petrbela : https://github.com/petrbela
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
          monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');

      function plural(n) {
        return n > 1 && n < 5;
      }

      function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';

        switch (key) {
          case 's':
            // a few seconds / in a few seconds / a few seconds ago
            return withoutSuffix || isFuture ? 'pár sekúnd' : 'pár sekundami';

          case 'ss':
            // 9 seconds / in 9 seconds / 9 seconds ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'sekundy' : 'sekúnd');
            } else {
              return result + 'sekundami';
            }

          case 'm':
            // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minúta' : isFuture ? 'minútu' : 'minútou';

          case 'mm':
            // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'minúty' : 'minút');
            } else {
              return result + 'minútami';
            }

          case 'h':
            // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';

          case 'hh':
            // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'hodiny' : 'hodín');
            } else {
              return result + 'hodinami';
            }

          case 'd':
            // a day / in a day / a day ago
            return withoutSuffix || isFuture ? 'deň' : 'dňom';

          case 'dd':
            // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'dni' : 'dní');
            } else {
              return result + 'dňami';
            }

          case 'M':
            // a month / in a month / a month ago
            return withoutSuffix || isFuture ? 'mesiac' : 'mesiacom';

          case 'MM':
            // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'mesiace' : 'mesiacov');
            } else {
              return result + 'mesiacmi';
            }

          case 'y':
            // a year / in a year / a year ago
            return withoutSuffix || isFuture ? 'rok' : 'rokom';

          case 'yy':
            // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'roky' : 'rokov');
            } else {
              return result + 'rokmi';
            }

        }
      }

      var sk = moment.defineLocale('sk', {
        months: months,
        monthsShort: monthsShort,
        weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
        weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
        weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[dnes o] LT',
          nextDay: '[zajtra o] LT',
          nextWeek: function nextWeek() {
            switch (this.day()) {
              case 0:
                return '[v nedeľu o] LT';

              case 1:
              case 2:
                return '[v] dddd [o] LT';

              case 3:
                return '[v stredu o] LT';

              case 4:
                return '[vo štvrtok o] LT';

              case 5:
                return '[v piatok o] LT';

              case 6:
                return '[v sobotu o] LT';
            }
          },
          lastDay: '[včera o] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
                return '[minulú nedeľu o] LT';

              case 1:
              case 2:
                return '[minulý] dddd [o] LT';

              case 3:
                return '[minulú stredu o] LT';

              case 4:
              case 5:
                return '[minulý] dddd [o] LT';

              case 6:
                return '[minulú sobotu o] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: 'pred %s',
          s: translate,
          ss: translate,
          m: translate,
          mm: translate,
          h: translate,
          hh: translate,
          d: translate,
          dd: translate,
          M: translate,
          MM: translate,
          y: translate,
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return sk;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/sl.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/sl.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSlJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Slovenian [sl]
    //! author : Robert Sedovšek : https://github.com/sedovsek
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';

        switch (key) {
          case 's':
            return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';

          case 'ss':
            if (number === 1) {
              result += withoutSuffix ? 'sekundo' : 'sekundi';
            } else if (number === 2) {
              result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
            } else if (number < 5) {
              result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
            } else {
              result += 'sekund';
            }

            return result;

          case 'm':
            return withoutSuffix ? 'ena minuta' : 'eno minuto';

          case 'mm':
            if (number === 1) {
              result += withoutSuffix ? 'minuta' : 'minuto';
            } else if (number === 2) {
              result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
            } else if (number < 5) {
              result += withoutSuffix || isFuture ? 'minute' : 'minutami';
            } else {
              result += withoutSuffix || isFuture ? 'minut' : 'minutami';
            }

            return result;

          case 'h':
            return withoutSuffix ? 'ena ura' : 'eno uro';

          case 'hh':
            if (number === 1) {
              result += withoutSuffix ? 'ura' : 'uro';
            } else if (number === 2) {
              result += withoutSuffix || isFuture ? 'uri' : 'urama';
            } else if (number < 5) {
              result += withoutSuffix || isFuture ? 'ure' : 'urami';
            } else {
              result += withoutSuffix || isFuture ? 'ur' : 'urami';
            }

            return result;

          case 'd':
            return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';

          case 'dd':
            if (number === 1) {
              result += withoutSuffix || isFuture ? 'dan' : 'dnem';
            } else if (number === 2) {
              result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
            } else {
              result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
            }

            return result;

          case 'M':
            return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';

          case 'MM':
            if (number === 1) {
              result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
            } else if (number === 2) {
              result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
            } else if (number < 5) {
              result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
            } else {
              result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
            }

            return result;

          case 'y':
            return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';

          case 'yy':
            if (number === 1) {
              result += withoutSuffix || isFuture ? 'leto' : 'letom';
            } else if (number === 2) {
              result += withoutSuffix || isFuture ? 'leti' : 'letoma';
            } else if (number < 5) {
              result += withoutSuffix || isFuture ? 'leta' : 'leti';
            } else {
              result += withoutSuffix || isFuture ? 'let' : 'leti';
            }

            return result;
        }
      }

      var sl = moment.defineLocale('sl', {
        months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
        weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
        weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD. MM. YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[danes ob] LT',
          nextDay: '[jutri ob] LT',
          nextWeek: function nextWeek() {
            switch (this.day()) {
              case 0:
                return '[v] [nedeljo] [ob] LT';

              case 3:
                return '[v] [sredo] [ob] LT';

              case 6:
                return '[v] [soboto] [ob] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[v] dddd [ob] LT';
            }
          },
          lastDay: '[včeraj ob] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
                return '[prejšnjo] [nedeljo] [ob] LT';

              case 3:
                return '[prejšnjo] [sredo] [ob] LT';

              case 6:
                return '[prejšnjo] [soboto] [ob] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[prejšnji] dddd [ob] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'čez %s',
          past: 'pred %s',
          s: processRelativeTime,
          ss: processRelativeTime,
          m: processRelativeTime,
          mm: processRelativeTime,
          h: processRelativeTime,
          hh: processRelativeTime,
          d: processRelativeTime,
          dd: processRelativeTime,
          M: processRelativeTime,
          MM: processRelativeTime,
          y: processRelativeTime,
          yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return sl;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/sq.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/sq.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSqJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Albanian [sq]
    //! author : Flakërim Ismani : https://github.com/flakerimi
    //! author : Menelion Elensúle : https://github.com/Oire
    //! author : Oerd Cukalla : https://github.com/oerd
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var sq = moment.defineLocale('sq', {
        months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
        monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
        weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
        weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
        weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
        weekdaysParseExact: true,
        meridiemParse: /PD|MD/,
        isPM: function isPM(input) {
          return input.charAt(0) === 'M';
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          return hours < 12 ? 'PD' : 'MD';
        },
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Sot në] LT',
          nextDay: '[Nesër në] LT',
          nextWeek: 'dddd [në] LT',
          lastDay: '[Dje në] LT',
          lastWeek: 'dddd [e kaluar në] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'në %s',
          past: '%s më parë',
          s: 'disa sekonda',
          ss: '%d sekonda',
          m: 'një minutë',
          mm: '%d minuta',
          h: 'një orë',
          hh: '%d orë',
          d: 'një ditë',
          dd: '%d ditë',
          M: 'një muaj',
          MM: '%d muaj',
          y: 'një vit',
          yy: '%d vite'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return sq;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/sr-cyrl.js":
  /*!***********************************************!*\
    !*** ./node_modules/moment/locale/sr-cyrl.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSrCyrlJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Serbian Cyrillic [sr-cyrl]
    //! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var translator = {
        words: {
          //Different grammatical cases
          ss: ['секунда', 'секунде', 'секунди'],
          m: ['један минут', 'једне минуте'],
          mm: ['минут', 'минуте', 'минута'],
          h: ['један сат', 'једног сата'],
          hh: ['сат', 'сата', 'сати'],
          dd: ['дан', 'дана', 'дана'],
          MM: ['месец', 'месеца', 'месеци'],
          yy: ['година', 'године', 'година']
        },
        correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
          return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
        },
        translate: function translate(number, withoutSuffix, key) {
          var wordKey = translator.words[key];

          if (key.length === 1) {
            return withoutSuffix ? wordKey[0] : wordKey[1];
          } else {
            return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
          }
        }
      };
      var srCyrl = moment.defineLocale('sr-cyrl', {
        months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
        monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
        monthsParseExact: true,
        weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
        weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
        weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[данас у] LT',
          nextDay: '[сутра у] LT',
          nextWeek: function nextWeek() {
            switch (this.day()) {
              case 0:
                return '[у] [недељу] [у] LT';

              case 3:
                return '[у] [среду] [у] LT';

              case 6:
                return '[у] [суботу] [у] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[у] dddd [у] LT';
            }
          },
          lastDay: '[јуче у] LT',
          lastWeek: function lastWeek() {
            var lastWeekDays = ['[прошле] [недеље] [у] LT', '[прошлог] [понедељка] [у] LT', '[прошлог] [уторка] [у] LT', '[прошле] [среде] [у] LT', '[прошлог] [четвртка] [у] LT', '[прошлог] [петка] [у] LT', '[прошле] [суботе] [у] LT'];
            return lastWeekDays[this.day()];
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'за %s',
          past: 'пре %s',
          s: 'неколико секунди',
          ss: translator.translate,
          m: translator.translate,
          mm: translator.translate,
          h: translator.translate,
          hh: translator.translate,
          d: 'дан',
          dd: translator.translate,
          M: 'месец',
          MM: translator.translate,
          y: 'годину',
          yy: translator.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return srCyrl;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/sr.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/sr.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSrJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Serbian [sr]
    //! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var translator = {
        words: {
          //Different grammatical cases
          ss: ['sekunda', 'sekunde', 'sekundi'],
          m: ['jedan minut', 'jedne minute'],
          mm: ['minut', 'minute', 'minuta'],
          h: ['jedan sat', 'jednog sata'],
          hh: ['sat', 'sata', 'sati'],
          dd: ['dan', 'dana', 'dana'],
          MM: ['mesec', 'meseca', 'meseci'],
          yy: ['godina', 'godine', 'godina']
        },
        correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
          return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
        },
        translate: function translate(number, withoutSuffix, key) {
          var wordKey = translator.words[key];

          if (key.length === 1) {
            return withoutSuffix ? wordKey[0] : wordKey[1];
          } else {
            return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
          }
        }
      };
      var sr = moment.defineLocale('sr', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sutra u] LT',
          nextWeek: function nextWeek() {
            switch (this.day()) {
              case 0:
                return '[u] [nedelju] [u] LT';

              case 3:
                return '[u] [sredu] [u] LT';

              case 6:
                return '[u] [subotu] [u] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[u] dddd [u] LT';
            }
          },
          lastDay: '[juče u] LT',
          lastWeek: function lastWeek() {
            var lastWeekDays = ['[prošle] [nedelje] [u] LT', '[prošlog] [ponedeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT'];
            return lastWeekDays[this.day()];
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: 'pre %s',
          s: 'nekoliko sekundi',
          ss: translator.translate,
          m: translator.translate,
          mm: translator.translate,
          h: translator.translate,
          hh: translator.translate,
          d: 'dan',
          dd: translator.translate,
          M: 'mesec',
          MM: translator.translate,
          y: 'godinu',
          yy: translator.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return sr;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ss.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ss.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSsJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : siSwati [ss]
    //! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var ss = moment.defineLocale('ss', {
        months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
        monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
        weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
        weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
        weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
          sameDay: '[Namuhla nga] LT',
          nextDay: '[Kusasa nga] LT',
          nextWeek: 'dddd [nga] LT',
          lastDay: '[Itolo nga] LT',
          lastWeek: 'dddd [leliphelile] [nga] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'nga %s',
          past: 'wenteka nga %s',
          s: 'emizuzwana lomcane',
          ss: '%d mzuzwana',
          m: 'umzuzu',
          mm: '%d emizuzu',
          h: 'lihora',
          hh: '%d emahora',
          d: 'lilanga',
          dd: '%d emalanga',
          M: 'inyanga',
          MM: '%d tinyanga',
          y: 'umnyaka',
          yy: '%d iminyaka'
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours < 11) {
            return 'ekuseni';
          } else if (hours < 15) {
            return 'emini';
          } else if (hours < 19) {
            return 'entsambama';
          } else {
            return 'ebusuku';
          }
        },
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'ekuseni') {
            return hour;
          } else if (meridiem === 'emini') {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
            if (hour === 0) {
              return 0;
            }

            return hour + 12;
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: '%d',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return ss;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/sv.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/sv.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSvJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Swedish [sv]
    //! author : Jens Alm : https://github.com/ulmus
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var sv = moment.defineLocale('sv', {
        months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
        weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
        weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [kl.] HH:mm',
          LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
          lll: 'D MMM YYYY HH:mm',
          llll: 'ddd D MMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Idag] LT',
          nextDay: '[Imorgon] LT',
          lastDay: '[Igår] LT',
          nextWeek: '[På] dddd LT',
          lastWeek: '[I] dddd[s] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'om %s',
          past: 'för %s sedan',
          s: 'några sekunder',
          ss: '%d sekunder',
          m: 'en minut',
          mm: '%d minuter',
          h: 'en timme',
          hh: '%d timmar',
          d: 'en dag',
          dd: '%d dagar',
          M: 'en månad',
          MM: '%d månader',
          y: 'ett år',
          yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? ':e' : b === 1 ? ':a' : b === 2 ? ':a' : b === 3 ? ':e' : ':e';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return sv;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/sw.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/sw.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSwJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Swahili [sw]
    //! author : Fahad Kassim : https://github.com/fadsel
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var sw = moment.defineLocale('sw', {
        months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
        weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
        weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'hh:mm A',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[leo saa] LT',
          nextDay: '[kesho saa] LT',
          nextWeek: '[wiki ijayo] dddd [saat] LT',
          lastDay: '[jana] LT',
          lastWeek: '[wiki iliyopita] dddd [saat] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s baadaye',
          past: 'tokea %s',
          s: 'hivi punde',
          ss: 'sekunde %d',
          m: 'dakika moja',
          mm: 'dakika %d',
          h: 'saa limoja',
          hh: 'masaa %d',
          d: 'siku moja',
          dd: 'siku %d',
          M: 'mwezi mmoja',
          MM: 'miezi %d',
          y: 'mwaka mmoja',
          yy: 'miaka %d'
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return sw;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ta.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ta.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Tamil [ta]
    //! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var symbolMap = {
        '1': '௧',
        '2': '௨',
        '3': '௩',
        '4': '௪',
        '5': '௫',
        '6': '௬',
        '7': '௭',
        '8': '௮',
        '9': '௯',
        '0': '௦'
      },
          numberMap = {
        '௧': '1',
        '௨': '2',
        '௩': '3',
        '௪': '4',
        '௫': '5',
        '௬': '6',
        '௭': '7',
        '௮': '8',
        '௯': '9',
        '௦': '0'
      };
      var ta = moment.defineLocale('ta', {
        months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
        weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
        weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, HH:mm',
          LLLL: 'dddd, D MMMM YYYY, HH:mm'
        },
        calendar: {
          sameDay: '[இன்று] LT',
          nextDay: '[நாளை] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[நேற்று] LT',
          lastWeek: '[கடந்த வாரம்] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s இல்',
          past: '%s முன்',
          s: 'ஒரு சில விநாடிகள்',
          ss: '%d விநாடிகள்',
          m: 'ஒரு நிமிடம்',
          mm: '%d நிமிடங்கள்',
          h: 'ஒரு மணி நேரம்',
          hh: '%d மணி நேரம்',
          d: 'ஒரு நாள்',
          dd: '%d நாட்கள்',
          M: 'ஒரு மாதம்',
          MM: '%d மாதங்கள்',
          y: 'ஒரு வருடம்',
          yy: '%d ஆண்டுகள்'
        },
        dayOfMonthOrdinalParse: /\d{1,2}வது/,
        ordinal: function ordinal(number) {
          return number + 'வது';
        },
        preparse: function preparse(string) {
          return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        // refer http://ta.wikipedia.org/s/1er1
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 2) {
            return ' யாமம்';
          } else if (hour < 6) {
            return ' வைகறை'; // வைகறை
          } else if (hour < 10) {
            return ' காலை'; // காலை
          } else if (hour < 14) {
            return ' நண்பகல்'; // நண்பகல்
          } else if (hour < 18) {
            return ' எற்பாடு'; // எற்பாடு
          } else if (hour < 22) {
            return ' மாலை'; // மாலை
          } else {
            return ' யாமம்';
          }
        },
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'யாமம்') {
            return hour < 2 ? hour : hour + 12;
          } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
            return hour;
          } else if (meridiem === 'நண்பகல்') {
            return hour >= 10 ? hour : hour + 12;
          } else {
            return hour + 12;
          }
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return ta;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/te.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/te.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTeJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Telugu [te]
    //! author : Krishna Chaitanya Thota : https://github.com/kcthota
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var te = moment.defineLocale('te', {
        months: 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
        monthsShort: 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
        monthsParseExact: true,
        weekdays: 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
        weekdaysShort: 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
        weekdaysMin: 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm',
          LLLL: 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar: {
          sameDay: '[నేడు] LT',
          nextDay: '[రేపు] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[నిన్న] LT',
          lastWeek: '[గత] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s లో',
          past: '%s క్రితం',
          s: 'కొన్ని క్షణాలు',
          ss: '%d సెకన్లు',
          m: 'ఒక నిమిషం',
          mm: '%d నిమిషాలు',
          h: 'ఒక గంట',
          hh: '%d గంటలు',
          d: 'ఒక రోజు',
          dd: '%d రోజులు',
          M: 'ఒక నెల',
          MM: '%d నెలలు',
          y: 'ఒక సంవత్సరం',
          yy: '%d సంవత్సరాలు'
        },
        dayOfMonthOrdinalParse: /\d{1,2}వ/,
        ordinal: '%dవ',
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'రాత్రి') {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'ఉదయం') {
            return hour;
          } else if (meridiem === 'మధ్యాహ్నం') {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === 'సాయంత్రం') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'రాత్రి';
          } else if (hour < 10) {
            return 'ఉదయం';
          } else if (hour < 17) {
            return 'మధ్యాహ్నం';
          } else if (hour < 20) {
            return 'సాయంత్రం';
          } else {
            return 'రాత్రి';
          }
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return te;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/tet.js":
  /*!*******************************************!*\
    !*** ./node_modules/moment/locale/tet.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTetJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Tetun Dili (East Timor) [tet]
    //! author : Joshua Brooks : https://github.com/joshbrooks
    //! author : Onorio De J. Afonso : https://github.com/marobo
    //! author : Sonia Simoes : https://github.com/soniasimoes
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var tet = moment.defineLocale('tet', {
        months: 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays: 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split('_'),
        weekdaysShort: 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
        weekdaysMin: 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Ohin iha] LT',
          nextDay: '[Aban iha] LT',
          nextWeek: 'dddd [iha] LT',
          lastDay: '[Horiseik iha] LT',
          lastWeek: 'dddd [semana kotuk] [iha] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'iha %s',
          past: '%s liuba',
          s: 'segundu balun',
          ss: 'segundu %d',
          m: 'minutu ida',
          mm: 'minutu %d',
          h: 'oras ida',
          hh: 'oras %d',
          d: 'loron ida',
          dd: 'loron %d',
          M: 'fulan ida',
          MM: 'fulan %d',
          y: 'tinan ida',
          yy: 'tinan %d'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return tet;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/tg.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/tg.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTgJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Tajik [tg]
    //! author : Orif N. Jr. : https://github.com/orif-jr
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var suffixes = {
        0: '-ум',
        1: '-ум',
        2: '-юм',
        3: '-юм',
        4: '-ум',
        5: '-ум',
        6: '-ум',
        7: '-ум',
        8: '-ум',
        9: '-ум',
        10: '-ум',
        12: '-ум',
        13: '-ум',
        20: '-ум',
        30: '-юм',
        40: '-ум',
        50: '-ум',
        60: '-ум',
        70: '-ум',
        80: '-ум',
        90: '-ум',
        100: '-ум'
      };
      var tg = moment.defineLocale('tg', {
        months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split('_'),
        weekdaysShort: 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
        weekdaysMin: 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Имрӯз соати] LT',
          nextDay: '[Пагоҳ соати] LT',
          lastDay: '[Дирӯз соати] LT',
          nextWeek: 'dddd[и] [ҳафтаи оянда соати] LT',
          lastWeek: 'dddd[и] [ҳафтаи гузашта соати] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'баъди %s',
          past: '%s пеш',
          s: 'якчанд сония',
          m: 'як дақиқа',
          mm: '%d дақиқа',
          h: 'як соат',
          hh: '%d соат',
          d: 'як рӯз',
          dd: '%d рӯз',
          M: 'як моҳ',
          MM: '%d моҳ',
          y: 'як сол',
          yy: '%d сол'
        },
        meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'шаб') {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'субҳ') {
            return hour;
          } else if (meridiem === 'рӯз') {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === 'бегоҳ') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'шаб';
          } else if (hour < 11) {
            return 'субҳ';
          } else if (hour < 16) {
            return 'рӯз';
          } else if (hour < 19) {
            return 'бегоҳ';
          } else {
            return 'шаб';
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
        ordinal: function ordinal(number) {
          var a = number % 10,
              b = number >= 100 ? 100 : null;
          return number + (suffixes[number] || suffixes[a] || suffixes[b]);
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 1th is the first week of the year.

        }
      });
      return tg;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/th.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/th.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleThJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Thai [th]
    //! author : Kridsada Thanabulpong : https://github.com/sirn
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var th = moment.defineLocale('th', {
        months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
        monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
        monthsParseExact: true,
        weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
        weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
        // yes, three characters difference
        weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY เวลา H:mm',
          LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function isPM(input) {
          return input === 'หลังเที่ยง';
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'ก่อนเที่ยง';
          } else {
            return 'หลังเที่ยง';
          }
        },
        calendar: {
          sameDay: '[วันนี้ เวลา] LT',
          nextDay: '[พรุ่งนี้ เวลา] LT',
          nextWeek: 'dddd[หน้า เวลา] LT',
          lastDay: '[เมื่อวานนี้ เวลา] LT',
          lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'อีก %s',
          past: '%sที่แล้ว',
          s: 'ไม่กี่วินาที',
          ss: '%d วินาที',
          m: '1 นาที',
          mm: '%d นาที',
          h: '1 ชั่วโมง',
          hh: '%d ชั่วโมง',
          d: '1 วัน',
          dd: '%d วัน',
          M: '1 เดือน',
          MM: '%d เดือน',
          y: '1 ปี',
          yy: '%d ปี'
        }
      });
      return th;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/tk.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/tk.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTkJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Turkmen [trk]
    //! author : Atamyrat Abdyrahmanov : https://github.com/atamyratabdy
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var suffixes = {
        1: "'inji",
        5: "'inji",
        8: "'inji",
        70: "'inji",
        80: "'inji",
        2: "'nji",
        7: "'nji",
        20: "'nji",
        50: "'nji",
        3: "'ünji",
        4: "'ünji",
        100: "'ünji",
        6: "'njy",
        9: "'unjy",
        10: "'unjy",
        30: "'unjy",
        60: "'ynjy",
        90: "'ynjy"
      };
      var tk = moment.defineLocale('tk', {
        months: 'Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr'.split('_'),
        monthsShort: 'Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek'.split('_'),
        weekdays: 'Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe'.split('_'),
        weekdaysShort: 'Ýek_Duş_Siş_Çar_Pen_Ann_Şen'.split('_'),
        weekdaysMin: 'Ýk_Dş_Sş_Çr_Pn_An_Şn'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[bugün sagat] LT',
          nextDay: '[ertir sagat] LT',
          nextWeek: '[indiki] dddd [sagat] LT',
          lastDay: '[düýn] LT',
          lastWeek: '[geçen] dddd [sagat] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s soň',
          past: '%s öň',
          s: 'birnäçe sekunt',
          m: 'bir minut',
          mm: '%d minut',
          h: 'bir sagat',
          hh: '%d sagat',
          d: 'bir gün',
          dd: '%d gün',
          M: 'bir aý',
          MM: '%d aý',
          y: 'bir ýyl',
          yy: '%d ýyl'
        },
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'd':
            case 'D':
            case 'Do':
            case 'DD':
              return number;

            default:
              if (number === 0) {
                // special case for zero
                return number + "'unjy";
              }

              var a = number % 10,
                  b = number % 100 - a,
                  c = number >= 100 ? 100 : null;
              return number + (suffixes[a] || suffixes[b] || suffixes[c]);
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return tk;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/tl-ph.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/tl-ph.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTlPhJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Tagalog (Philippines) [tl-ph]
    //! author : Dan Hagman : https://github.com/hagmandan
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var tlPh = moment.defineLocale('tl-ph', {
        months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
        monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
        weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
        weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
        weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'MM/D/YYYY',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY HH:mm',
          LLLL: 'dddd, MMMM DD, YYYY HH:mm'
        },
        calendar: {
          sameDay: 'LT [ngayong araw]',
          nextDay: '[Bukas ng] LT',
          nextWeek: 'LT [sa susunod na] dddd',
          lastDay: 'LT [kahapon]',
          lastWeek: 'LT [noong nakaraang] dddd',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'sa loob ng %s',
          past: '%s ang nakalipas',
          s: 'ilang segundo',
          ss: '%d segundo',
          m: 'isang minuto',
          mm: '%d minuto',
          h: 'isang oras',
          hh: '%d oras',
          d: 'isang araw',
          dd: '%d araw',
          M: 'isang buwan',
          MM: '%d buwan',
          y: 'isang taon',
          yy: '%d taon'
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function ordinal(number) {
          return number;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return tlPh;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/tlh.js":
  /*!*******************************************!*\
    !*** ./node_modules/moment/locale/tlh.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTlhJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Klingon [tlh]
    //! author : Dominika Kruk : https://github.com/amaranthrose
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');

      function translateFuture(output) {
        var time = output;
        time = output.indexOf('jaj') !== -1 ? time.slice(0, -3) + 'leS' : output.indexOf('jar') !== -1 ? time.slice(0, -3) + 'waQ' : output.indexOf('DIS') !== -1 ? time.slice(0, -3) + 'nem' : time + ' pIq';
        return time;
      }

      function translatePast(output) {
        var time = output;
        time = output.indexOf('jaj') !== -1 ? time.slice(0, -3) + 'Hu’' : output.indexOf('jar') !== -1 ? time.slice(0, -3) + 'wen' : output.indexOf('DIS') !== -1 ? time.slice(0, -3) + 'ben' : time + ' ret';
        return time;
      }

      function translate(number, withoutSuffix, string, isFuture) {
        var numberNoun = numberAsNoun(number);

        switch (string) {
          case 'ss':
            return numberNoun + ' lup';

          case 'mm':
            return numberNoun + ' tup';

          case 'hh':
            return numberNoun + ' rep';

          case 'dd':
            return numberNoun + ' jaj';

          case 'MM':
            return numberNoun + ' jar';

          case 'yy':
            return numberNoun + ' DIS';
        }
      }

      function numberAsNoun(number) {
        var hundred = Math.floor(number % 1000 / 100),
            ten = Math.floor(number % 100 / 10),
            one = number % 10,
            word = '';

        if (hundred > 0) {
          word += numbersNouns[hundred] + 'vatlh';
        }

        if (ten > 0) {
          word += (word !== '' ? ' ' : '') + numbersNouns[ten] + 'maH';
        }

        if (one > 0) {
          word += (word !== '' ? ' ' : '') + numbersNouns[one];
        }

        return word === '' ? 'pagh' : word;
      }

      var tlh = moment.defineLocale('tlh', {
        months: 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
        monthsShort: 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
        monthsParseExact: true,
        weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[DaHjaj] LT',
          nextDay: '[wa’leS] LT',
          nextWeek: 'LLL',
          lastDay: '[wa’Hu’] LT',
          lastWeek: 'LLL',
          sameElse: 'L'
        },
        relativeTime: {
          future: translateFuture,
          past: translatePast,
          s: 'puS lup',
          ss: translate,
          m: 'wa’ tup',
          mm: translate,
          h: 'wa’ rep',
          hh: translate,
          d: 'wa’ jaj',
          dd: translate,
          M: 'wa’ jar',
          MM: translate,
          y: 'wa’ DIS',
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return tlh;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/tr.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/tr.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTrJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Turkish [tr]
    //! authors : Erhan Gundogan : https://github.com/erhangundogan,
    //!           Burak Yiğit Kaya: https://github.com/BYK
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var suffixes = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'üncü",
        4: "'üncü",
        100: "'üncü",
        6: "'ncı",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'ıncı",
        90: "'ıncı"
      };
      var tr = moment.defineLocale('tr', {
        months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
        monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
        weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
        weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
        weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours < 12) {
            return isLower ? 'öö' : 'ÖÖ';
          } else {
            return isLower ? 'ös' : 'ÖS';
          }
        },
        meridiemParse: /öö|ÖÖ|ös|ÖS/,
        isPM: function isPM(input) {
          return input === 'ös' || input === 'ÖS';
        },
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[bugün saat] LT',
          nextDay: '[yarın saat] LT',
          nextWeek: '[gelecek] dddd [saat] LT',
          lastDay: '[dün] LT',
          lastWeek: '[geçen] dddd [saat] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s sonra',
          past: '%s önce',
          s: 'birkaç saniye',
          ss: '%d saniye',
          m: 'bir dakika',
          mm: '%d dakika',
          h: 'bir saat',
          hh: '%d saat',
          d: 'bir gün',
          dd: '%d gün',
          M: 'bir ay',
          MM: '%d ay',
          y: 'bir yıl',
          yy: '%d yıl'
        },
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'd':
            case 'D':
            case 'Do':
            case 'DD':
              return number;

            default:
              if (number === 0) {
                // special case for zero
                return number + "'ıncı";
              }

              var a = number % 10,
                  b = number % 100 - a,
                  c = number >= 100 ? 100 : null;
              return number + (suffixes[a] || suffixes[b] || suffixes[c]);
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return tr;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/tzl.js":
  /*!*******************************************!*\
    !*** ./node_modules/moment/locale/tzl.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTzlJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Talossan [tzl]
    //! author : Robin van der Vliet : https://github.com/robin0van0der0v
    //! author : Iustì Canun
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration
      // After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
      // This is currently too difficult (maybe even impossible) to add.

      var tzl = moment.defineLocale('tzl', {
        months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
        weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
        weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
        weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM [dallas] YYYY',
          LLL: 'D. MMMM [dallas] YYYY HH.mm',
          LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM: function isPM(input) {
          return "d'o" === input.toLowerCase();
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours > 11) {
            return isLower ? "d'o" : "D'O";
          } else {
            return isLower ? "d'a" : "D'A";
          }
        },
        calendar: {
          sameDay: '[oxhi à] LT',
          nextDay: '[demà à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[ieiri à] LT',
          lastWeek: '[sür el] dddd [lasteu à] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'osprei %s',
          past: 'ja%s',
          s: processRelativeTime,
          ss: processRelativeTime,
          m: processRelativeTime,
          mm: processRelativeTime,
          h: processRelativeTime,
          hh: processRelativeTime,
          d: processRelativeTime,
          dd: processRelativeTime,
          M: processRelativeTime,
          MM: processRelativeTime,
          y: processRelativeTime,
          yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });

      function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
          s: ['viensas secunds', "'iensas secunds"],
          ss: [number + ' secunds', '' + number + ' secunds'],
          m: ["'n míut", "'iens míut"],
          mm: [number + ' míuts', '' + number + ' míuts'],
          h: ["'n þora", "'iensa þora"],
          hh: [number + ' þoras', '' + number + ' þoras'],
          d: ["'n ziua", "'iensa ziua"],
          dd: [number + ' ziuas', '' + number + ' ziuas'],
          M: ["'n mes", "'iens mes"],
          MM: [number + ' mesen', '' + number + ' mesen'],
          y: ["'n ar", "'iens ar"],
          yy: [number + ' ars', '' + number + ' ars']
        };
        return isFuture ? format[key][0] : withoutSuffix ? format[key][0] : format[key][1];
      }

      return tzl;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/tzm-latn.js":
  /*!************************************************!*\
    !*** ./node_modules/moment/locale/tzm-latn.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTzmLatnJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Central Atlas Tamazight Latin [tzm-latn]
    //! author : Abdel Said : https://github.com/abdelsaid
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var tzmLatn = moment.defineLocale('tzm-latn', {
        months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[asdkh g] LT',
          nextDay: '[aska g] LT',
          nextWeek: 'dddd [g] LT',
          lastDay: '[assant g] LT',
          lastWeek: 'dddd [g] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dadkh s yan %s',
          past: 'yan %s',
          s: 'imik',
          ss: '%d imik',
          m: 'minuḍ',
          mm: '%d minuḍ',
          h: 'saɛa',
          hh: '%d tassaɛin',
          d: 'ass',
          dd: '%d ossan',
          M: 'ayowr',
          MM: '%d iyyirn',
          y: 'asgas',
          yy: '%d isgasn'
        },
        week: {
          dow: 6,
          // Saturday is the first day of the week.
          doy: 12 // The week that contains Jan 12th is the first week of the year.

        }
      });
      return tzmLatn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/tzm.js":
  /*!*******************************************!*\
    !*** ./node_modules/moment/locale/tzm.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTzmJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Central Atlas Tamazight [tzm]
    //! author : Abdel Said : https://github.com/abdelsaid
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var tzm = moment.defineLocale('tzm', {
        months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
          nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
          nextWeek: 'dddd [ⴴ] LT',
          lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
          lastWeek: 'dddd [ⴴ] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
          past: 'ⵢⴰⵏ %s',
          s: 'ⵉⵎⵉⴽ',
          ss: '%d ⵉⵎⵉⴽ',
          m: 'ⵎⵉⵏⵓⴺ',
          mm: '%d ⵎⵉⵏⵓⴺ',
          h: 'ⵙⴰⵄⴰ',
          hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
          d: 'ⴰⵙⵙ',
          dd: '%d oⵙⵙⴰⵏ',
          M: 'ⴰⵢoⵓⵔ',
          MM: '%d ⵉⵢⵢⵉⵔⵏ',
          y: 'ⴰⵙⴳⴰⵙ',
          yy: '%d ⵉⵙⴳⴰⵙⵏ'
        },
        week: {
          dow: 6,
          // Saturday is the first day of the week.
          doy: 12 // The week that contains Jan 12th is the first week of the year.

        }
      });
      return tzm;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ug-cn.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/ug-cn.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleUgCnJs(module, exports, __webpack_require__) {
    //! moment.js language configuration
    //! locale : Uyghur (China) [ug-cn]
    //! author: boyaq : https://github.com/boyaq
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js language configuration

      var ugCn = moment.defineLocale('ug-cn', {
        months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
        monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
        weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split('_'),
        weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
        weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى',
          LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
          LLLL: 'dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm'
        },
        meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'يېرىم كېچە' || meridiem === 'سەھەر' || meridiem === 'چۈشتىن بۇرۇن') {
            return hour;
          } else if (meridiem === 'چۈشتىن كېيىن' || meridiem === 'كەچ') {
            return hour + 12;
          } else {
            return hour >= 11 ? hour : hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          var hm = hour * 100 + minute;

          if (hm < 600) {
            return 'يېرىم كېچە';
          } else if (hm < 900) {
            return 'سەھەر';
          } else if (hm < 1130) {
            return 'چۈشتىن بۇرۇن';
          } else if (hm < 1230) {
            return 'چۈش';
          } else if (hm < 1800) {
            return 'چۈشتىن كېيىن';
          } else {
            return 'كەچ';
          }
        },
        calendar: {
          sameDay: '[بۈگۈن سائەت] LT',
          nextDay: '[ئەتە سائەت] LT',
          nextWeek: '[كېلەركى] dddd [سائەت] LT',
          lastDay: '[تۆنۈگۈن] LT',
          lastWeek: '[ئالدىنقى] dddd [سائەت] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s كېيىن',
          past: '%s بۇرۇن',
          s: 'نەچچە سېكونت',
          ss: '%d سېكونت',
          m: 'بىر مىنۇت',
          mm: '%d مىنۇت',
          h: 'بىر سائەت',
          hh: '%d سائەت',
          d: 'بىر كۈن',
          dd: '%d كۈن',
          M: 'بىر ئاي',
          MM: '%d ئاي',
          y: 'بىر يىل',
          yy: '%d يىل'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
              return number + '-كۈنى';

            case 'w':
            case 'W':
              return number + '-ھەپتە';

            default:
              return number;
          }
        },
        preparse: function preparse(string) {
          return string.replace(/،/g, ',');
        },
        postformat: function postformat(string) {
          return string.replace(/,/g, '،');
        },
        week: {
          // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 1st is the first week of the year.

        }
      });
      return ugCn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/uk.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/uk.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleUkJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Ukrainian [uk]
    //! author : zemlanin : https://github.com/zemlanin
    //! Author : Menelion Elensúle : https://github.com/Oire
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
      }

      function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
          ss: withoutSuffix ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
          mm: withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
          hh: withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
          dd: 'день_дні_днів',
          MM: 'місяць_місяці_місяців',
          yy: 'рік_роки_років'
        };

        if (key === 'm') {
          return withoutSuffix ? 'хвилина' : 'хвилину';
        } else if (key === 'h') {
          return withoutSuffix ? 'година' : 'годину';
        } else {
          return number + ' ' + plural(format[key], +number);
        }
      }

      function weekdaysCaseReplace(m, format) {
        var weekdays = {
          nominative: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
          accusative: 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
          genitive: 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
        },
            nounCase;

        if (m === true) {
          return weekdays['nominative'].slice(1, 7).concat(weekdays['nominative'].slice(0, 1));
        }

        if (!m) {
          return weekdays['nominative'];
        }

        nounCase = /(\[[ВвУу]\]) ?dddd/.test(format) ? 'accusative' : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(format) ? 'genitive' : 'nominative';
        return weekdays[nounCase][m.day()];
      }

      function processHoursFunction(str) {
        return function () {
          return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
        };
      }

      var uk = moment.defineLocale('uk', {
        months: {
          format: 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
          standalone: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
        },
        monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
        weekdays: weekdaysCaseReplace,
        weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY р.',
          LLL: 'D MMMM YYYY р., HH:mm',
          LLLL: 'dddd, D MMMM YYYY р., HH:mm'
        },
        calendar: {
          sameDay: processHoursFunction('[Сьогодні '),
          nextDay: processHoursFunction('[Завтра '),
          lastDay: processHoursFunction('[Вчора '),
          nextWeek: processHoursFunction('[У] dddd ['),
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return processHoursFunction('[Минулої] dddd [').call(this);

              case 1:
              case 2:
              case 4:
                return processHoursFunction('[Минулого] dddd [').call(this);
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'за %s',
          past: '%s тому',
          s: 'декілька секунд',
          ss: relativeTimeWithPlural,
          m: relativeTimeWithPlural,
          mm: relativeTimeWithPlural,
          h: 'годину',
          hh: relativeTimeWithPlural,
          d: 'день',
          dd: relativeTimeWithPlural,
          M: 'місяць',
          MM: relativeTimeWithPlural,
          y: 'рік',
          yy: relativeTimeWithPlural
        },
        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function isPM(input) {
          return /^(дня|вечора)$/.test(input);
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'ночі';
          } else if (hour < 12) {
            return 'ранку';
          } else if (hour < 17) {
            return 'дня';
          } else {
            return 'вечора';
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
              return number + '-й';

            case 'D':
              return number + '-го';

            default:
              return number;
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return uk;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ur.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ur.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleUrJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Urdu [ur]
    //! author : Sawood Alam : https://github.com/ibnesayeed
    //! author : Zack : https://github.com/ZackVision
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var months = ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'],
          days = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];
      var ur = moment.defineLocale('ur', {
        months: months,
        monthsShort: months,
        weekdays: days,
        weekdaysShort: days,
        weekdaysMin: days,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd، D MMMM YYYY HH:mm'
        },
        meridiemParse: /صبح|شام/,
        isPM: function isPM(input) {
          return 'شام' === input;
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'صبح';
          }

          return 'شام';
        },
        calendar: {
          sameDay: '[آج بوقت] LT',
          nextDay: '[کل بوقت] LT',
          nextWeek: 'dddd [بوقت] LT',
          lastDay: '[گذشتہ روز بوقت] LT',
          lastWeek: '[گذشتہ] dddd [بوقت] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s بعد',
          past: '%s قبل',
          s: 'چند سیکنڈ',
          ss: '%d سیکنڈ',
          m: 'ایک منٹ',
          mm: '%d منٹ',
          h: 'ایک گھنٹہ',
          hh: '%d گھنٹے',
          d: 'ایک دن',
          dd: '%d دن',
          M: 'ایک ماہ',
          MM: '%d ماہ',
          y: 'ایک سال',
          yy: '%d سال'
        },
        preparse: function preparse(string) {
          return string.replace(/،/g, ',');
        },
        postformat: function postformat(string) {
          return string.replace(/,/g, '،');
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return ur;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/uz-latn.js":
  /*!***********************************************!*\
    !*** ./node_modules/moment/locale/uz-latn.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleUzLatnJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Uzbek Latin [uz-latn]
    //! author : Rasulbek Mirzayev : github.com/Rasulbeeek
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var uzLatn = moment.defineLocale('uz-latn', {
        months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
        monthsShort: 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
        weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
        weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
        weekdaysMin: 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'D MMMM YYYY, dddd HH:mm'
        },
        calendar: {
          sameDay: '[Bugun soat] LT [da]',
          nextDay: '[Ertaga] LT [da]',
          nextWeek: 'dddd [kuni soat] LT [da]',
          lastDay: '[Kecha soat] LT [da]',
          lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
          sameElse: 'L'
        },
        relativeTime: {
          future: 'Yaqin %s ichida',
          past: 'Bir necha %s oldin',
          s: 'soniya',
          ss: '%d soniya',
          m: 'bir daqiqa',
          mm: '%d daqiqa',
          h: 'bir soat',
          hh: '%d soat',
          d: 'bir kun',
          dd: '%d kun',
          M: 'bir oy',
          MM: '%d oy',
          y: 'bir yil',
          yy: '%d yil'
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return uzLatn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/uz.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/uz.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleUzJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Uzbek [uz]
    //! author : Sardor Muminov : https://github.com/muminoff
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var uz = moment.defineLocale('uz', {
        months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
        weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
        weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'D MMMM YYYY, dddd HH:mm'
        },
        calendar: {
          sameDay: '[Бугун соат] LT [да]',
          nextDay: '[Эртага] LT [да]',
          nextWeek: 'dddd [куни соат] LT [да]',
          lastDay: '[Кеча соат] LT [да]',
          lastWeek: '[Утган] dddd [куни соат] LT [да]',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'Якин %s ичида',
          past: 'Бир неча %s олдин',
          s: 'фурсат',
          ss: '%d фурсат',
          m: 'бир дакика',
          mm: '%d дакика',
          h: 'бир соат',
          hh: '%d соат',
          d: 'бир кун',
          dd: '%d кун',
          M: 'бир ой',
          MM: '%d ой',
          y: 'бир йил',
          yy: '%d йил'
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return uz;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/vi.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/vi.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleViJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Vietnamese [vi]
    //! author : Bang Nguyen : https://github.com/bangnk
    //! author : Chien Kira : https://github.com/chienkira
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var vi = moment.defineLocale('vi', {
        months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
        monthsShort: 'Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12'.split('_'),
        monthsParseExact: true,
        weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
        weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysParseExact: true,
        meridiemParse: /sa|ch/i,
        isPM: function isPM(input) {
          return /^ch$/i.test(input);
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours < 12) {
            return isLower ? 'sa' : 'SA';
          } else {
            return isLower ? 'ch' : 'CH';
          }
        },
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM [năm] YYYY',
          LLL: 'D MMMM [năm] YYYY HH:mm',
          LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
          l: 'DD/M/YYYY',
          ll: 'D MMM YYYY',
          lll: 'D MMM YYYY HH:mm',
          llll: 'ddd, D MMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Hôm nay lúc] LT',
          nextDay: '[Ngày mai lúc] LT',
          nextWeek: 'dddd [tuần tới lúc] LT',
          lastDay: '[Hôm qua lúc] LT',
          lastWeek: 'dddd [tuần trước lúc] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s tới',
          past: '%s trước',
          s: 'vài giây',
          ss: '%d giây',
          m: 'một phút',
          mm: '%d phút',
          h: 'một giờ',
          hh: '%d giờ',
          d: 'một ngày',
          dd: '%d ngày',
          M: 'một tháng',
          MM: '%d tháng',
          y: 'một năm',
          yy: '%d năm'
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function ordinal(number) {
          return number;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return vi;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/x-pseudo.js":
  /*!************************************************!*\
    !*** ./node_modules/moment/locale/x-pseudo.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleXPseudoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Pseudo [x-pseudo]
    //! author : Andrew Hood : https://github.com/andrewhood125
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var xPseudo = moment.defineLocale('x-pseudo', {
        months: 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
        monthsShort: 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
        monthsParseExact: true,
        weekdays: 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
        weekdaysShort: 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
        weekdaysMin: 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[T~ódá~ý át] LT',
          nextDay: '[T~ómó~rró~w át] LT',
          nextWeek: 'dddd [át] LT',
          lastDay: '[Ý~ést~érdá~ý át] LT',
          lastWeek: '[L~ást] dddd [át] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'í~ñ %s',
          past: '%s á~gó',
          s: 'á ~féw ~sécó~ñds',
          ss: '%d s~écóñ~ds',
          m: 'á ~míñ~úté',
          mm: '%d m~íñú~tés',
          h: 'á~ñ hó~úr',
          hh: '%d h~óúrs',
          d: 'á ~dáý',
          dd: '%d d~áýs',
          M: 'á ~móñ~th',
          MM: '%d m~óñt~hs',
          y: 'á ~ýéár',
          yy: '%d ý~éárs'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return xPseudo;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/yo.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/yo.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleYoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Yoruba Nigeria [yo]
    //! author : Atolagbe Abisoye : https://github.com/andela-batolagbe
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var yo = moment.defineLocale('yo', {
        months: 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
        monthsShort: 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
        weekdays: 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
        weekdaysShort: 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
        weekdaysMin: 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
          sameDay: '[Ònì ni] LT',
          nextDay: '[Ọ̀la ni] LT',
          nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
          lastDay: '[Àna ni] LT',
          lastWeek: 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'ní %s',
          past: '%s kọjá',
          s: 'ìsẹjú aayá die',
          ss: 'aayá %d',
          m: 'ìsẹjú kan',
          mm: 'ìsẹjú %d',
          h: 'wákati kan',
          hh: 'wákati %d',
          d: 'ọjọ́ kan',
          dd: 'ọjọ́ %d',
          M: 'osù kan',
          MM: 'osù %d',
          y: 'ọdún kan',
          yy: 'ọdún %d'
        },
        dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
        ordinal: 'ọjọ́ %d',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return yo;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/zh-cn.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/zh-cn.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleZhCnJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Chinese (China) [zh-cn]
    //! author : suupic : https://github.com/suupic
    //! author : Zeno Zeng : https://github.com/zenozeng
    //! author : uu109 : https://github.com/uu109
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var zhCn = moment.defineLocale('zh-cn', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日Ah点mm分',
          LLLL: 'YYYY年M月D日ddddAh点mm分',
          l: 'YYYY/M/D',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
            return hour;
          } else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
          } else {
            // '中午'
            return hour >= 11 ? hour : hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          var hm = hour * 100 + minute;

          if (hm < 600) {
            return '凌晨';
          } else if (hm < 900) {
            return '早上';
          } else if (hm < 1130) {
            return '上午';
          } else if (hm < 1230) {
            return '中午';
          } else if (hm < 1800) {
            return '下午';
          } else {
            return '晚上';
          }
        },
        calendar: {
          sameDay: '[今天]LT',
          nextDay: '[明天]LT',
          nextWeek: function nextWeek(now) {
            if (now.week() !== this.week()) {
              return '[下]dddLT';
            } else {
              return '[本]dddLT';
            }
          },
          lastDay: '[昨天]LT',
          lastWeek: function lastWeek(now) {
            if (this.week() !== now.week()) {
              return '[上]dddLT';
            } else {
              return '[本]dddLT';
            }
          },
          sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
              return number + '日';

            case 'M':
              return number + '月';

            case 'w':
            case 'W':
              return number + '周';

            default:
              return number;
          }
        },
        relativeTime: {
          future: '%s后',
          past: '%s前',
          s: '几秒',
          ss: '%d 秒',
          m: '1 分钟',
          mm: '%d 分钟',
          h: '1 小时',
          hh: '%d 小时',
          d: '1 天',
          dd: '%d 天',
          M: '1 个月',
          MM: '%d 个月',
          y: '1 年',
          yy: '%d 年'
        },
        week: {
          // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return zhCn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/zh-hk.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/zh-hk.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleZhHkJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Chinese (Hong Kong) [zh-hk]
    //! author : Ben : https://github.com/ben-lin
    //! author : Chris Lam : https://github.com/hehachris
    //! author : Konstantin : https://github.com/skfd
    //! author : Anthony : https://github.com/anthonylau
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var zhHk = moment.defineLocale('zh-hk', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日 HH:mm',
          LLLL: 'YYYY年M月D日dddd HH:mm',
          l: 'YYYY/M/D',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
            return hour;
          } else if (meridiem === '中午') {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          var hm = hour * 100 + minute;

          if (hm < 600) {
            return '凌晨';
          } else if (hm < 900) {
            return '早上';
          } else if (hm < 1200) {
            return '上午';
          } else if (hm === 1200) {
            return '中午';
          } else if (hm < 1800) {
            return '下午';
          } else {
            return '晚上';
          }
        },
        calendar: {
          sameDay: '[今天]LT',
          nextDay: '[明天]LT',
          nextWeek: '[下]ddddLT',
          lastDay: '[昨天]LT',
          lastWeek: '[上]ddddLT',
          sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
              return number + '日';

            case 'M':
              return number + '月';

            case 'w':
            case 'W':
              return number + '週';

            default:
              return number;
          }
        },
        relativeTime: {
          future: '%s後',
          past: '%s前',
          s: '幾秒',
          ss: '%d 秒',
          m: '1 分鐘',
          mm: '%d 分鐘',
          h: '1 小時',
          hh: '%d 小時',
          d: '1 天',
          dd: '%d 天',
          M: '1 個月',
          MM: '%d 個月',
          y: '1 年',
          yy: '%d 年'
        }
      });
      return zhHk;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/zh-mo.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/zh-mo.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleZhMoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Chinese (Macau) [zh-mo]
    //! author : Ben : https://github.com/ben-lin
    //! author : Chris Lam : https://github.com/hehachris
    //! author : Tan Yuanhong : https://github.com/le0tan
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var zhMo = moment.defineLocale('zh-mo', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日 HH:mm',
          LLLL: 'YYYY年M月D日dddd HH:mm',
          l: 'D/M/YYYY',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
            return hour;
          } else if (meridiem === '中午') {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          var hm = hour * 100 + minute;

          if (hm < 600) {
            return '凌晨';
          } else if (hm < 900) {
            return '早上';
          } else if (hm < 1130) {
            return '上午';
          } else if (hm < 1230) {
            return '中午';
          } else if (hm < 1800) {
            return '下午';
          } else {
            return '晚上';
          }
        },
        calendar: {
          sameDay: '[今天] LT',
          nextDay: '[明天] LT',
          nextWeek: '[下]dddd LT',
          lastDay: '[昨天] LT',
          lastWeek: '[上]dddd LT',
          sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
              return number + '日';

            case 'M':
              return number + '月';

            case 'w':
            case 'W':
              return number + '週';

            default:
              return number;
          }
        },
        relativeTime: {
          future: '%s內',
          past: '%s前',
          s: '幾秒',
          ss: '%d 秒',
          m: '1 分鐘',
          mm: '%d 分鐘',
          h: '1 小時',
          hh: '%d 小時',
          d: '1 天',
          dd: '%d 天',
          M: '1 個月',
          MM: '%d 個月',
          y: '1 年',
          yy: '%d 年'
        }
      });
      return zhMo;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/zh-tw.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/zh-tw.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleZhTwJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    //! locale : Chinese (Taiwan) [zh-tw]
    //! author : Ben : https://github.com/ben-lin
    //! author : Chris Lam : https://github.com/hehachris
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; //! moment.js locale configuration

      var zhTw = moment.defineLocale('zh-tw', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日 HH:mm',
          LLLL: 'YYYY年M月D日dddd HH:mm',
          l: 'YYYY/M/D',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
            return hour;
          } else if (meridiem === '中午') {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          var hm = hour * 100 + minute;

          if (hm < 600) {
            return '凌晨';
          } else if (hm < 900) {
            return '早上';
          } else if (hm < 1130) {
            return '上午';
          } else if (hm < 1230) {
            return '中午';
          } else if (hm < 1800) {
            return '下午';
          } else {
            return '晚上';
          }
        },
        calendar: {
          sameDay: '[今天] LT',
          nextDay: '[明天] LT',
          nextWeek: '[下]dddd LT',
          lastDay: '[昨天] LT',
          lastWeek: '[上]dddd LT',
          sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
              return number + '日';

            case 'M':
              return number + '月';

            case 'w':
            case 'W':
              return number + '週';

            default:
              return number;
          }
        },
        relativeTime: {
          future: '%s後',
          past: '%s前',
          s: '幾秒',
          ss: '%d 秒',
          m: '1 分鐘',
          mm: '%d 分鐘',
          h: '1 小時',
          hh: '%d 小時',
          d: '1 天',
          dd: '%d 天',
          M: '1 個月',
          MM: '%d 個月',
          y: '1 年',
          yy: '%d 年'
        }
      });
      return zhTw;
    });
    /***/

  },

  /***/
  "./node_modules/moment/moment.js":
  /*!***************************************!*\
    !*** ./node_modules/moment/moment.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentMomentJs(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (module) {
      var require; //! moment.js
      //! version : 2.27.0
      //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
      //! license : MIT
      //! momentjs.com


      ;

      (function (global, factory) {
        true ? module.exports = factory() : undefined;
      })(this, function () {
        'use strict';

        var hookCallback;

        function hooks() {
          return hookCallback.apply(null, arguments);
        } // This is done to register the method called with moment()
        // without creating circular dependencies.


        function setHookCallback(callback) {
          hookCallback = callback;
        }

        function isArray(input) {
          return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
        }

        function isObject(input) {
          // IE8 will treat undefined and null as object if it wasn't for
          // input != null
          return input != null && Object.prototype.toString.call(input) === '[object Object]';
        }

        function hasOwnProp(a, b) {
          return Object.prototype.hasOwnProperty.call(a, b);
        }

        function isObjectEmpty(obj) {
          if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
          } else {
            var k;

            for (k in obj) {
              if (hasOwnProp(obj, k)) {
                return false;
              }
            }

            return true;
          }
        }

        function isUndefined(input) {
          return input === void 0;
        }

        function isNumber(input) {
          return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
        }

        function isDate(input) {
          return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
        }

        function map(arr, fn) {
          var res = [],
              i;

          for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
          }

          return res;
        }

        function extend(a, b) {
          for (var i in b) {
            if (hasOwnProp(b, i)) {
              a[i] = b[i];
            }
          }

          if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
          }

          if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
          }

          return a;
        }

        function createUTC(input, format, locale, strict) {
          return createLocalOrUTC(input, format, locale, strict, true).utc();
        }

        function defaultParsingFlags() {
          // We need to deep clone this object.
          return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
          };
        }

        function getParsingFlags(m) {
          if (m._pf == null) {
            m._pf = defaultParsingFlags();
          }

          return m._pf;
        }

        var some;

        if (Array.prototype.some) {
          some = Array.prototype.some;
        } else {
          some = function some(fun) {
            var t = Object(this),
                len = t.length >>> 0,
                i;

            for (i = 0; i < len; i++) {
              if (i in t && fun.call(this, t[i], i, t)) {
                return true;
              }
            }

            return false;
          };
        }

        function isValid(m) {
          if (m._isValid == null) {
            var flags = getParsingFlags(m),
                parsedParts = some.call(flags.parsedDateParts, function (i) {
              return i != null;
            }),
                isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

            if (m._strict) {
              isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
              m._isValid = isNowValid;
            } else {
              return isNowValid;
            }
          }

          return m._isValid;
        }

        function createInvalid(flags) {
          var m = createUTC(NaN);

          if (flags != null) {
            extend(getParsingFlags(m), flags);
          } else {
            getParsingFlags(m).userInvalidated = true;
          }

          return m;
        } // Plugins that add properties should also add the key here (null value),
        // so we can properly clone ourselves.


        var momentProperties = hooks.momentProperties = [],
            updateInProgress = false;

        function copyConfig(to, from) {
          var i, prop, val;

          if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
          }

          if (!isUndefined(from._i)) {
            to._i = from._i;
          }

          if (!isUndefined(from._f)) {
            to._f = from._f;
          }

          if (!isUndefined(from._l)) {
            to._l = from._l;
          }

          if (!isUndefined(from._strict)) {
            to._strict = from._strict;
          }

          if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
          }

          if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
          }

          if (!isUndefined(from._offset)) {
            to._offset = from._offset;
          }

          if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
          }

          if (!isUndefined(from._locale)) {
            to._locale = from._locale;
          }

          if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
              prop = momentProperties[i];
              val = from[prop];

              if (!isUndefined(val)) {
                to[prop] = val;
              }
            }
          }

          return to;
        } // Moment prototype object


        function Moment(config) {
          copyConfig(this, config);
          this._d = new Date(config._d != null ? config._d.getTime() : NaN);

          if (!this.isValid()) {
            this._d = new Date(NaN);
          } // Prevent infinite loop in case updateOffset creates new moment
          // objects.


          if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
          }
        }

        function isMoment(obj) {
          return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
        }

        function warn(msg) {
          if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);
          }
        }

        function deprecate(msg, fn) {
          var firstTime = true;
          return extend(function () {
            if (hooks.deprecationHandler != null) {
              hooks.deprecationHandler(null, msg);
            }

            if (firstTime) {
              var args = [],
                  arg,
                  i,
                  key;

              for (i = 0; i < arguments.length; i++) {
                arg = '';

                if (typeof arguments[i] === 'object') {
                  arg += '\n[' + i + '] ';

                  for (key in arguments[0]) {
                    if (hasOwnProp(arguments[0], key)) {
                      arg += key + ': ' + arguments[0][key] + ', ';
                    }
                  }

                  arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                  arg = arguments[i];
                }

                args.push(arg);
              }

              warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
              firstTime = false;
            }

            return fn.apply(this, arguments);
          }, fn);
        }

        var deprecations = {};

        function deprecateSimple(name, msg) {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
          }

          if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
          }
        }

        hooks.suppressDeprecationWarnings = false;
        hooks.deprecationHandler = null;

        function isFunction(input) {
          return typeof Function !== 'undefined' && input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
        }

        function set(config) {
          var prop, i;

          for (i in config) {
            if (hasOwnProp(config, i)) {
              prop = config[i];

              if (isFunction(prop)) {
                this[i] = prop;
              } else {
                this['_' + i] = prop;
              }
            }
          }

          this._config = config; // Lenient ordinal parsing accepts just a number in addition to
          // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
          // TODO: Remove "ordinalParse" fallback in next major release.

          this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
        }

        function mergeConfigs(parentConfig, childConfig) {
          var res = extend({}, parentConfig),
              prop;

          for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
              if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
              } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
              } else {
                delete res[prop];
              }
            }
          }

          for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
              // make sure changes to properties don't modify parent config
              res[prop] = extend({}, res[prop]);
            }
          }

          return res;
        }

        function Locale(config) {
          if (config != null) {
            this.set(config);
          }
        }

        var keys;

        if (Object.keys) {
          keys = Object.keys;
        } else {
          keys = function keys(obj) {
            var i,
                res = [];

            for (i in obj) {
              if (hasOwnProp(obj, i)) {
                res.push(i);
              }
            }

            return res;
          };
        }

        var defaultCalendar = {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        };

        function calendar(key, mom, now) {
          var output = this._calendar[key] || this._calendar['sameElse'];
          return isFunction(output) ? output.call(mom, now) : output;
        }

        function zeroFill(number, targetLength, forceSign) {
          var absNumber = '' + Math.abs(number),
              zerosToFill = targetLength - absNumber.length,
              sign = number >= 0;
          return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
        }

        var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            formatFunctions = {},
            formatTokenFunctions = {}; // token:    'M'
        // padded:   ['MM', 2]
        // ordinal:  'Mo'
        // callback: function () { this.month() + 1 }

        function addFormatToken(token, padded, ordinal, callback) {
          var func = callback;

          if (typeof callback === 'string') {
            func = function func() {
              return this[callback]();
            };
          }

          if (token) {
            formatTokenFunctions[token] = func;
          }

          if (padded) {
            formatTokenFunctions[padded[0]] = function () {
              return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
          }

          if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
              return this.localeData().ordinal(func.apply(this, arguments), token);
            };
          }
        }

        function removeFormattingTokens(input) {
          if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
          }

          return input.replace(/\\/g, '');
        }

        function makeFormatFunction(format) {
          var array = format.match(formattingTokens),
              i,
              length;

          for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
              array[i] = formatTokenFunctions[array[i]];
            } else {
              array[i] = removeFormattingTokens(array[i]);
            }
          }

          return function (mom) {
            var output = '',
                i;

            for (i = 0; i < length; i++) {
              output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }

            return output;
          };
        } // format date using native date object


        function formatMoment(m, format) {
          if (!m.isValid()) {
            return m.localeData().invalidDate();
          }

          format = expandFormat(format, m.localeData());
          formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
          return formatFunctions[format](m);
        }

        function expandFormat(format, locale) {
          var i = 5;

          function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
          }

          localFormattingTokens.lastIndex = 0;

          while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
          }

          return format;
        }

        var defaultLongDateFormat = {
          LTS: 'h:mm:ss A',
          LT: 'h:mm A',
          L: 'MM/DD/YYYY',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY h:mm A',
          LLLL: 'dddd, MMMM D, YYYY h:mm A'
        };

        function longDateFormat(key) {
          var format = this._longDateFormat[key],
              formatUpper = this._longDateFormat[key.toUpperCase()];

          if (format || !formatUpper) {
            return format;
          }

          this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function (tok) {
            if (tok === 'MMMM' || tok === 'MM' || tok === 'DD' || tok === 'dddd') {
              return tok.slice(1);
            }

            return tok;
          }).join('');
          return this._longDateFormat[key];
        }

        var defaultInvalidDate = 'Invalid date';

        function invalidDate() {
          return this._invalidDate;
        }

        var defaultOrdinal = '%d',
            defaultDayOfMonthOrdinalParse = /\d{1,2}/;

        function ordinal(number) {
          return this._ordinal.replace('%d', number);
        }

        var defaultRelativeTime = {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          w: 'a week',
          ww: '%d weeks',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        };

        function relativeTime(number, withoutSuffix, string, isFuture) {
          var output = this._relativeTime[string];
          return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
        }

        function pastFuture(diff, output) {
          var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
          return isFunction(format) ? format(output) : format.replace(/%s/i, output);
        }

        var aliases = {};

        function addUnitAlias(unit, shorthand) {
          var lowerCase = unit.toLowerCase();
          aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
        }

        function normalizeUnits(units) {
          return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
        }

        function normalizeObjectUnits(inputObject) {
          var normalizedInput = {},
              normalizedProp,
              prop;

          for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
              normalizedProp = normalizeUnits(prop);

              if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
              }
            }
          }

          return normalizedInput;
        }

        var priorities = {};

        function addUnitPriority(unit, priority) {
          priorities[unit] = priority;
        }

        function getPrioritizedUnits(unitsObj) {
          var units = [],
              u;

          for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
              units.push({
                unit: u,
                priority: priorities[u]
              });
            }
          }

          units.sort(function (a, b) {
            return a.priority - b.priority;
          });
          return units;
        }

        function isLeapYear(year) {
          return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        }

        function absFloor(number) {
          if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
          } else {
            return Math.floor(number);
          }
        }

        function toInt(argumentForCoercion) {
          var coercedNumber = +argumentForCoercion,
              value = 0;

          if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
          }

          return value;
        }

        function makeGetSet(unit, keepTime) {
          return function (value) {
            if (value != null) {
              set$1(this, unit, value);
              hooks.updateOffset(this, keepTime);
              return this;
            } else {
              return get(this, unit);
            }
          };
        }

        function get(mom, unit) {
          return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
        }

        function set$1(mom, unit, value) {
          if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
              value = toInt(value);

              mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            } else {
              mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
          }
        } // MOMENTS


        function stringGet(units) {
          units = normalizeUnits(units);

          if (isFunction(this[units])) {
            return this[units]();
          }

          return this;
        }

        function stringSet(units, value) {
          if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units),
                i;

            for (i = 0; i < prioritized.length; i++) {
              this[prioritized[i].unit](units[prioritized[i].unit]);
            }
          } else {
            units = normalizeUnits(units);

            if (isFunction(this[units])) {
              return this[units](value);
            }
          }

          return this;
        }

        var match1 = /\d/,
            //       0 - 9
        match2 = /\d\d/,
            //      00 - 99
        match3 = /\d{3}/,
            //     000 - 999
        match4 = /\d{4}/,
            //    0000 - 9999
        match6 = /[+-]?\d{6}/,
            // -999999 - 999999
        match1to2 = /\d\d?/,
            //       0 - 99
        match3to4 = /\d\d\d\d?/,
            //     999 - 9999
        match5to6 = /\d\d\d\d\d\d?/,
            //   99999 - 999999
        match1to3 = /\d{1,3}/,
            //       0 - 999
        match1to4 = /\d{1,4}/,
            //       0 - 9999
        match1to6 = /[+-]?\d{1,6}/,
            // -999999 - 999999
        matchUnsigned = /\d+/,
            //       0 - inf
        matchSigned = /[+-]?\d+/,
            //    -inf - inf
        matchOffset = /Z|[+-]\d\d:?\d\d/gi,
            // +00:00 -00:00 +0000 -0000 or Z
        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi,
            // +00 -00 +00:00 -00:00 +0000 -0000 or Z
        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/,
            // 123456789 123456789.123
        // any word (or two) characters or numbers including two/three word month in arabic.
        // includes scottish gaelic two word and hyphenated months
        matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            regexes;
        regexes = {};

        function addRegexToken(token, regex, strictRegex) {
          regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return isStrict && strictRegex ? strictRegex : regex;
          };
        }

        function getParseRegexForToken(token, config) {
          if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
          }

          return regexes[token](config._strict, config._locale);
        } // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript


        function unescapeFormat(s) {
          return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
          }));
        }

        function regexEscape(s) {
          return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        }

        var tokens = {};

        function addParseToken(token, callback) {
          var i,
              func = callback;

          if (typeof token === 'string') {
            token = [token];
          }

          if (isNumber(callback)) {
            func = function func(input, array) {
              array[callback] = toInt(input);
            };
          }

          for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
          }
        }

        function addWeekParseToken(token, callback) {
          addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
          });
        }

        function addTimeToArrayFromToken(token, input, config) {
          if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
          }
        }

        var YEAR = 0,
            MONTH = 1,
            DATE = 2,
            HOUR = 3,
            MINUTE = 4,
            SECOND = 5,
            MILLISECOND = 6,
            WEEK = 7,
            WEEKDAY = 8;

        function mod(n, x) {
          return (n % x + x) % x;
        }

        var indexOf;

        if (Array.prototype.indexOf) {
          indexOf = Array.prototype.indexOf;
        } else {
          indexOf = function indexOf(o) {
            // I know
            var i;

            for (i = 0; i < this.length; ++i) {
              if (this[i] === o) {
                return i;
              }
            }

            return -1;
          };
        }

        function daysInMonth(year, month) {
          if (isNaN(year) || isNaN(month)) {
            return NaN;
          }

          var modMonth = mod(month, 12);
          year += (month - modMonth) / 12;
          return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
        } // FORMATTING


        addFormatToken('M', ['MM', 2], 'Mo', function () {
          return this.month() + 1;
        });
        addFormatToken('MMM', 0, 0, function (format) {
          return this.localeData().monthsShort(this, format);
        });
        addFormatToken('MMMM', 0, 0, function (format) {
          return this.localeData().months(this, format);
        }); // ALIASES

        addUnitAlias('month', 'M'); // PRIORITY

        addUnitPriority('month', 8); // PARSING

        addRegexToken('M', match1to2);
        addRegexToken('MM', match1to2, match2);
        addRegexToken('MMM', function (isStrict, locale) {
          return locale.monthsShortRegex(isStrict);
        });
        addRegexToken('MMMM', function (isStrict, locale) {
          return locale.monthsRegex(isStrict);
        });
        addParseToken(['M', 'MM'], function (input, array) {
          array[MONTH] = toInt(input) - 1;
        });
        addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
          var month = config._locale.monthsParse(input, token, config._strict); // if we didn't find a month name, mark the date as invalid.


          if (month != null) {
            array[MONTH] = month;
          } else {
            getParsingFlags(config).invalidMonth = input;
          }
        }); // LOCALES

        var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
            defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
            MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            defaultMonthsShortRegex = matchWord,
            defaultMonthsRegex = matchWord;

        function localeMonths(m, format) {
          if (!m) {
            return isArray(this._months) ? this._months : this._months['standalone'];
          }

          return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
        }

        function localeMonthsShort(m, format) {
          if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
          }

          return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
        }

        function handleStrictParse(monthName, format, strict) {
          var i,
              ii,
              mom,
              llc = monthName.toLocaleLowerCase();

          if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];

            for (i = 0; i < 12; ++i) {
              mom = createUTC([2000, i]);
              this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
              this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
          }

          if (strict) {
            if (format === 'MMM') {
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format === 'MMM') {
              ii = indexOf.call(this._shortMonthsParse, llc);

              if (ii !== -1) {
                return ii;
              }

              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);

              if (ii !== -1) {
                return ii;
              }

              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
        }

        function localeMonthsParse(monthName, format, strict) {
          var i, mom, regex;

          if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
          }

          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
          } // TODO: add sorting
          // Sorting makes sure if one month (or abbr) is a prefix of another
          // see sorting in computeMonthsParse


          for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);

            if (strict && !this._longMonthsParse[i]) {
              this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
              this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }

            if (!strict && !this._monthsParse[i]) {
              regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
              this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            } // test the regex


            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
              return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
              return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
              return i;
            }
          }
        } // MOMENTS


        function setMonth(mom, value) {
          var dayOfMonth;

          if (!mom.isValid()) {
            // No op
            return mom;
          }

          if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
              value = toInt(value);
            } else {
              value = mom.localeData().monthsParse(value); // TODO: Another silent failure?

              if (!isNumber(value)) {
                return mom;
              }
            }
          }

          dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));

          mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);

          return mom;
        }

        function getSetMonth(value) {
          if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
          } else {
            return get(this, 'Month');
          }
        }

        function getDaysInMonth() {
          return daysInMonth(this.year(), this.month());
        }

        function monthsShortRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
              computeMonthsParse.call(this);
            }

            if (isStrict) {
              return this._monthsShortStrictRegex;
            } else {
              return this._monthsShortRegex;
            }
          } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
              this._monthsShortRegex = defaultMonthsShortRegex;
            }

            return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
          }
        }

        function monthsRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
              computeMonthsParse.call(this);
            }

            if (isStrict) {
              return this._monthsStrictRegex;
            } else {
              return this._monthsRegex;
            }
          } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
              this._monthsRegex = defaultMonthsRegex;
            }

            return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
          }
        }

        function computeMonthsParse() {
          function cmpLenRev(a, b) {
            return b.length - a.length;
          }

          var shortPieces = [],
              longPieces = [],
              mixedPieces = [],
              i,
              mom;

          for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
          } // Sorting makes sure if one month (or abbr) is a prefix of another it
          // will match the longer piece.


          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);

          for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
          }

          for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
          }

          this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
          this._monthsShortRegex = this._monthsRegex;
          this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
          this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        } // FORMATTING


        addFormatToken('Y', 0, 0, function () {
          var y = this.year();
          return y <= 9999 ? zeroFill(y, 4) : '+' + y;
        });
        addFormatToken(0, ['YY', 2], 0, function () {
          return this.year() % 100;
        });
        addFormatToken(0, ['YYYY', 4], 0, 'year');
        addFormatToken(0, ['YYYYY', 5], 0, 'year');
        addFormatToken(0, ['YYYYYY', 6, true], 0, 'year'); // ALIASES

        addUnitAlias('year', 'y'); // PRIORITIES

        addUnitPriority('year', 1); // PARSING

        addRegexToken('Y', matchSigned);
        addRegexToken('YY', match1to2, match2);
        addRegexToken('YYYY', match1to4, match4);
        addRegexToken('YYYYY', match1to6, match6);
        addRegexToken('YYYYYY', match1to6, match6);
        addParseToken(['YYYYY', 'YYYYYY'], YEAR);
        addParseToken('YYYY', function (input, array) {
          array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
        });
        addParseToken('YY', function (input, array) {
          array[YEAR] = hooks.parseTwoDigitYear(input);
        });
        addParseToken('Y', function (input, array) {
          array[YEAR] = parseInt(input, 10);
        }); // HELPERS

        function daysInYear(year) {
          return isLeapYear(year) ? 366 : 365;
        } // HOOKS


        hooks.parseTwoDigitYear = function (input) {
          return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
        }; // MOMENTS


        var getSetYear = makeGetSet('FullYear', true);

        function getIsLeapYear() {
          return isLeapYear(this.year());
        }

        function createDate(y, m, d, h, M, s, ms) {
          // can't just apply() to create a date:
          // https://stackoverflow.com/q/181348
          var date; // the date constructor remaps years 0-99 to 1900-1999

          if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);

            if (isFinite(date.getFullYear())) {
              date.setFullYear(y);
            }
          } else {
            date = new Date(y, m, d, h, M, s, ms);
          }

          return date;
        }

        function createUTCDate(y) {
          var date, args; // the Date.UTC function remaps years 0-99 to 1900-1999

          if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments); // preserve leap years using a full 400 year cycle, then reset

            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));

            if (isFinite(date.getUTCFullYear())) {
              date.setUTCFullYear(y);
            }
          } else {
            date = new Date(Date.UTC.apply(null, arguments));
          }

          return date;
        } // start-of-first-week - start-of-year


        function firstWeekOffset(year, dow, doy) {
          var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
          fwd = 7 + dow - doy,
              // first-week day local weekday -- which local weekday is fwd
          fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
          return -fwdlw + fwd - 1;
        } // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday


        function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
          var localWeekday = (7 + weekday - dow) % 7,
              weekOffset = firstWeekOffset(year, dow, doy),
              dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
              resYear,
              resDayOfYear;

          if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
          } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
          } else {
            resYear = year;
            resDayOfYear = dayOfYear;
          }

          return {
            year: resYear,
            dayOfYear: resDayOfYear
          };
        }

        function weekOfYear(mom, dow, doy) {
          var weekOffset = firstWeekOffset(mom.year(), dow, doy),
              week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
              resWeek,
              resYear;

          if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
          } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
          } else {
            resYear = mom.year();
            resWeek = week;
          }

          return {
            week: resWeek,
            year: resYear
          };
        }

        function weeksInYear(year, dow, doy) {
          var weekOffset = firstWeekOffset(year, dow, doy),
              weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
          return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
        } // FORMATTING


        addFormatToken('w', ['ww', 2], 'wo', 'week');
        addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek'); // ALIASES

        addUnitAlias('week', 'w');
        addUnitAlias('isoWeek', 'W'); // PRIORITIES

        addUnitPriority('week', 5);
        addUnitPriority('isoWeek', 5); // PARSING

        addRegexToken('w', match1to2);
        addRegexToken('ww', match1to2, match2);
        addRegexToken('W', match1to2);
        addRegexToken('WW', match1to2, match2);
        addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
          week[token.substr(0, 1)] = toInt(input);
        }); // HELPERS
        // LOCALES

        function localeWeek(mom) {
          return weekOfYear(mom, this._week.dow, this._week.doy).week;
        }

        var defaultLocaleWeek = {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        };

        function localeFirstDayOfWeek() {
          return this._week.dow;
        }

        function localeFirstDayOfYear() {
          return this._week.doy;
        } // MOMENTS


        function getSetWeek(input) {
          var week = this.localeData().week(this);
          return input == null ? week : this.add((input - week) * 7, 'd');
        }

        function getSetISOWeek(input) {
          var week = weekOfYear(this, 1, 4).week;
          return input == null ? week : this.add((input - week) * 7, 'd');
        } // FORMATTING


        addFormatToken('d', 0, 'do', 'day');
        addFormatToken('dd', 0, 0, function (format) {
          return this.localeData().weekdaysMin(this, format);
        });
        addFormatToken('ddd', 0, 0, function (format) {
          return this.localeData().weekdaysShort(this, format);
        });
        addFormatToken('dddd', 0, 0, function (format) {
          return this.localeData().weekdays(this, format);
        });
        addFormatToken('e', 0, 0, 'weekday');
        addFormatToken('E', 0, 0, 'isoWeekday'); // ALIASES

        addUnitAlias('day', 'd');
        addUnitAlias('weekday', 'e');
        addUnitAlias('isoWeekday', 'E'); // PRIORITY

        addUnitPriority('day', 11);
        addUnitPriority('weekday', 11);
        addUnitPriority('isoWeekday', 11); // PARSING

        addRegexToken('d', match1to2);
        addRegexToken('e', match1to2);
        addRegexToken('E', match1to2);
        addRegexToken('dd', function (isStrict, locale) {
          return locale.weekdaysMinRegex(isStrict);
        });
        addRegexToken('ddd', function (isStrict, locale) {
          return locale.weekdaysShortRegex(isStrict);
        });
        addRegexToken('dddd', function (isStrict, locale) {
          return locale.weekdaysRegex(isStrict);
        });
        addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
          var weekday = config._locale.weekdaysParse(input, token, config._strict); // if we didn't get a weekday name, mark the date as invalid


          if (weekday != null) {
            week.d = weekday;
          } else {
            getParsingFlags(config).invalidWeekday = input;
          }
        });
        addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
          week[token] = toInt(input);
        }); // HELPERS

        function parseWeekday(input, locale) {
          if (typeof input !== 'string') {
            return input;
          }

          if (!isNaN(input)) {
            return parseInt(input, 10);
          }

          input = locale.weekdaysParse(input);

          if (typeof input === 'number') {
            return input;
          }

          return null;
        }

        function parseIsoWeekday(input, locale) {
          if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
          }

          return isNaN(input) ? null : input;
        } // LOCALES


        function shiftWeekdays(ws, n) {
          return ws.slice(n, 7).concat(ws.slice(0, n));
        }

        var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
            defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
            defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
            defaultWeekdaysRegex = matchWord,
            defaultWeekdaysShortRegex = matchWord,
            defaultWeekdaysMinRegex = matchWord;

        function localeWeekdays(m, format) {
          var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
          return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
        }

        function localeWeekdaysShort(m) {
          return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
        }

        function localeWeekdaysMin(m) {
          return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
        }

        function handleStrictParse$1(weekdayName, format, strict) {
          var i,
              ii,
              mom,
              llc = weekdayName.toLocaleLowerCase();

          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
              mom = createUTC([2000, 1]).day(i);
              this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
              this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
              this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
          }

          if (strict) {
            if (format === 'dddd') {
              ii = indexOf.call(this._weekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format === 'dddd') {
              ii = indexOf.call(this._weekdaysParse, llc);

              if (ii !== -1) {
                return ii;
              }

              ii = indexOf.call(this._shortWeekdaysParse, llc);

              if (ii !== -1) {
                return ii;
              }

              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
              ii = indexOf.call(this._shortWeekdaysParse, llc);

              if (ii !== -1) {
                return ii;
              }

              ii = indexOf.call(this._weekdaysParse, llc);

              if (ii !== -1) {
                return ii;
              }

              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);

              if (ii !== -1) {
                return ii;
              }

              ii = indexOf.call(this._weekdaysParse, llc);

              if (ii !== -1) {
                return ii;
              }

              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
        }

        function localeWeekdaysParse(weekdayName, format, strict) {
          var i, mom, regex;

          if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
          }

          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
          }

          for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);

            if (strict && !this._fullWeekdaysParse[i]) {
              this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
              this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
              this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }

            if (!this._weekdaysParse[i]) {
              regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
              this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            } // test the regex


            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
              return i;
            }
          }
        } // MOMENTS


        function getSetDayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }

          var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();

          if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
          } else {
            return day;
          }
        }

        function getSetLocaleDayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }

          var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return input == null ? weekday : this.add(input - weekday, 'd');
        }

        function getSetISODayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          } // behaves the same as moment#day except
          // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
          // as a setter, sunday should belong to the previous week.


          if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
          } else {
            return this.day() || 7;
          }
        }

        function weekdaysRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
              computeWeekdaysParse.call(this);
            }

            if (isStrict) {
              return this._weekdaysStrictRegex;
            } else {
              return this._weekdaysRegex;
            }
          } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
              this._weekdaysRegex = defaultWeekdaysRegex;
            }

            return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
          }
        }

        function weekdaysShortRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
              computeWeekdaysParse.call(this);
            }

            if (isStrict) {
              return this._weekdaysShortStrictRegex;
            } else {
              return this._weekdaysShortRegex;
            }
          } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
              this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }

            return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
          }
        }

        function weekdaysMinRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
              computeWeekdaysParse.call(this);
            }

            if (isStrict) {
              return this._weekdaysMinStrictRegex;
            } else {
              return this._weekdaysMinRegex;
            }
          } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
              this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }

            return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
          }
        }

        function computeWeekdaysParse() {
          function cmpLenRev(a, b) {
            return b.length - a.length;
          }

          var minPieces = [],
              shortPieces = [],
              longPieces = [],
              mixedPieces = [],
              i,
              mom,
              minp,
              shortp,
              longp;

          for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
          } // Sorting makes sure if one weekday (or abbr) is a prefix of another it
          // will match the longer piece.


          minPieces.sort(cmpLenRev);
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);
          this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
          this._weekdaysShortRegex = this._weekdaysRegex;
          this._weekdaysMinRegex = this._weekdaysRegex;
          this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
          this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
          this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
        } // FORMATTING


        function hFormat() {
          return this.hours() % 12 || 12;
        }

        function kFormat() {
          return this.hours() || 24;
        }

        addFormatToken('H', ['HH', 2], 0, 'hour');
        addFormatToken('h', ['hh', 2], 0, hFormat);
        addFormatToken('k', ['kk', 2], 0, kFormat);
        addFormatToken('hmm', 0, 0, function () {
          return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
        });
        addFormatToken('hmmss', 0, 0, function () {
          return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });
        addFormatToken('Hmm', 0, 0, function () {
          return '' + this.hours() + zeroFill(this.minutes(), 2);
        });
        addFormatToken('Hmmss', 0, 0, function () {
          return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });

        function meridiem(token, lowercase) {
          addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
          });
        }

        meridiem('a', true);
        meridiem('A', false); // ALIASES

        addUnitAlias('hour', 'h'); // PRIORITY

        addUnitPriority('hour', 13); // PARSING

        function matchMeridiem(isStrict, locale) {
          return locale._meridiemParse;
        }

        addRegexToken('a', matchMeridiem);
        addRegexToken('A', matchMeridiem);
        addRegexToken('H', match1to2);
        addRegexToken('h', match1to2);
        addRegexToken('k', match1to2);
        addRegexToken('HH', match1to2, match2);
        addRegexToken('hh', match1to2, match2);
        addRegexToken('kk', match1to2, match2);
        addRegexToken('hmm', match3to4);
        addRegexToken('hmmss', match5to6);
        addRegexToken('Hmm', match3to4);
        addRegexToken('Hmmss', match5to6);
        addParseToken(['H', 'HH'], HOUR);
        addParseToken(['k', 'kk'], function (input, array, config) {
          var kInput = toInt(input);
          array[HOUR] = kInput === 24 ? 0 : kInput;
        });
        addParseToken(['a', 'A'], function (input, array, config) {
          config._isPm = config._locale.isPM(input);
          config._meridiem = input;
        });
        addParseToken(['h', 'hh'], function (input, array, config) {
          array[HOUR] = toInt(input);
          getParsingFlags(config).bigHour = true;
        });
        addParseToken('hmm', function (input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
          getParsingFlags(config).bigHour = true;
        });
        addParseToken('hmmss', function (input, array, config) {
          var pos1 = input.length - 4,
              pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
          getParsingFlags(config).bigHour = true;
        });
        addParseToken('Hmm', function (input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
        });
        addParseToken('Hmmss', function (input, array, config) {
          var pos1 = input.length - 4,
              pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
        }); // LOCALES

        function localeIsPM(input) {
          // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
          // Using charAt should be more compatible.
          return (input + '').toLowerCase().charAt(0) === 'p';
        }

        var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
            // Setting the hour should keep the time, because the user explicitly
        // specified which hour they want. So trying to maintain the same hour (in
        // a new timezone) makes sense. Adding/subtracting hours does not follow
        // this rule.
        getSetHour = makeGetSet('Hours', true);

        function localeMeridiem(hours, minutes, isLower) {
          if (hours > 11) {
            return isLower ? 'pm' : 'PM';
          } else {
            return isLower ? 'am' : 'AM';
          }
        }

        var baseConfig = {
          calendar: defaultCalendar,
          longDateFormat: defaultLongDateFormat,
          invalidDate: defaultInvalidDate,
          ordinal: defaultOrdinal,
          dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
          relativeTime: defaultRelativeTime,
          months: defaultLocaleMonths,
          monthsShort: defaultLocaleMonthsShort,
          week: defaultLocaleWeek,
          weekdays: defaultLocaleWeekdays,
          weekdaysMin: defaultLocaleWeekdaysMin,
          weekdaysShort: defaultLocaleWeekdaysShort,
          meridiemParse: defaultLocaleMeridiemParse
        }; // internal storage for locale config files

        var locales = {},
            localeFamilies = {},
            globalLocale;

        function commonPrefix(arr1, arr2) {
          var i,
              minl = Math.min(arr1.length, arr2.length);

          for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
              return i;
            }
          }

          return minl;
        }

        function normalizeLocale(key) {
          return key ? key.toLowerCase().replace('_', '-') : key;
        } // pick the locale from the array
        // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
        // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root


        function chooseLocale(names) {
          var i = 0,
              j,
              next,
              locale,
              split;

          while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;

            while (j > 0) {
              locale = loadLocale(split.slice(0, j).join('-'));

              if (locale) {
                return locale;
              }

              if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
              }

              j--;
            }

            i++;
          }

          return globalLocale;
        }

        function loadLocale(name) {
          var oldLocale = null,
              aliasedRequire; // TODO: Find a better way to register and load all the locales in Node

          if (locales[name] === undefined && typeof module !== 'undefined' && module && module.exports) {
            try {
              oldLocale = globalLocale._abbr;
              aliasedRequire = require;

              __webpack_require__("./node_modules/moment/locale sync recursive ^\\.\\/.*$")("./" + name);

              getSetGlobalLocale(oldLocale);
            } catch (e) {
              // mark as not found to avoid repeating expensive file require call causing high CPU
              // when trying to find en-US, en_US, en-us for every format call
              locales[name] = null; // null means not found
            }
          }

          return locales[name];
        } // This function will load locale and then set the global locale.  If
        // no arguments are passed in, it will simply return the current global
        // locale key.


        function getSetGlobalLocale(key, values) {
          var data;

          if (key) {
            if (isUndefined(values)) {
              data = getLocale(key);
            } else {
              data = defineLocale(key, values);
            }

            if (data) {
              // moment.duration._locale = moment._locale = data;
              globalLocale = data;
            } else {
              if (typeof console !== 'undefined' && console.warn) {
                //warn user if arguments are passed but the locale could not be set
                console.warn('Locale ' + key + ' not found. Did you forget to load it?');
              }
            }
          }

          return globalLocale._abbr;
        }

        function defineLocale(name, config) {
          if (config !== null) {
            var locale,
                parentConfig = baseConfig;
            config.abbr = name;

            if (locales[name] != null) {
              deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
              parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
              if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
              } else {
                locale = loadLocale(config.parentLocale);

                if (locale != null) {
                  parentConfig = locale._config;
                } else {
                  if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                  }

                  localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                  });
                  return null;
                }
              }
            }

            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
              localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
              });
            } // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.


            getSetGlobalLocale(name);
            return locales[name];
          } else {
            // useful for testing
            delete locales[name];
            return null;
          }
        }

        function updateLocale(name, config) {
          if (config != null) {
            var locale,
                tmpLocale,
                parentConfig = baseConfig;

            if (locales[name] != null && locales[name].parentLocale != null) {
              // Update existing child locale in-place to avoid memory-leaks
              locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
              // MERGE
              tmpLocale = loadLocale(name);

              if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
              }

              config = mergeConfigs(parentConfig, config);

              if (tmpLocale == null) {
                // updateLocale is called for creating a new locale
                // Set abbr so it will have a name (getters return
                // undefined otherwise).
                config.abbr = name;
              }

              locale = new Locale(config);
              locale.parentLocale = locales[name];
              locales[name] = locale;
            } // backwards compat for now: also set the locale


            getSetGlobalLocale(name);
          } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
              if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;

                if (name === getSetGlobalLocale()) {
                  getSetGlobalLocale(name);
                }
              } else if (locales[name] != null) {
                delete locales[name];
              }
            }
          }

          return locales[name];
        } // returns locale data


        function getLocale(key) {
          var locale;

          if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
          }

          if (!key) {
            return globalLocale;
          }

          if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);

            if (locale) {
              return locale;
            }

            key = [key];
          }

          return chooseLocale(key);
        }

        function listLocales() {
          return keys(locales);
        }

        function checkOverflow(m) {
          var overflow,
              a = m._a;

          if (a && getParsingFlags(m).overflow === -2) {
            overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
              overflow = DATE;
            }

            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
              overflow = WEEK;
            }

            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
              overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
          }

          return m;
        } // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)


        var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
            isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/], ['YYYYMM', /\d{6}/, false], ['YYYY', /\d{4}/, false]],
            // iso time formats and regexes
        isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]],
            aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
            // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
        rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
            obsOffsets = {
          UT: 0,
          GMT: 0,
          EDT: -4 * 60,
          EST: -5 * 60,
          CDT: -5 * 60,
          CST: -6 * 60,
          MDT: -6 * 60,
          MST: -7 * 60,
          PDT: -7 * 60,
          PST: -8 * 60
        }; // date from iso format

        function configFromISO(config) {
          var i,
              l,
              string = config._i,
              match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
              allowTime,
              dateFormat,
              timeFormat,
              tzFormat;

          if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
              if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
              }
            }

            if (dateFormat == null) {
              config._isValid = false;
              return;
            }

            if (match[3]) {
              for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                  // match[2] should be 'T' or space
                  timeFormat = (match[2] || ' ') + isoTimes[i][0];
                  break;
                }
              }

              if (timeFormat == null) {
                config._isValid = false;
                return;
              }
            }

            if (!allowTime && timeFormat != null) {
              config._isValid = false;
              return;
            }

            if (match[4]) {
              if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
              } else {
                config._isValid = false;
                return;
              }
            }

            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
          } else {
            config._isValid = false;
          }
        }

        function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
          var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

          if (secondStr) {
            result.push(parseInt(secondStr, 10));
          }

          return result;
        }

        function untruncateYear(yearStr) {
          var year = parseInt(yearStr, 10);

          if (year <= 49) {
            return 2000 + year;
          } else if (year <= 999) {
            return 1900 + year;
          }

          return year;
        }

        function preprocessRFC2822(s) {
          // Remove comments and folding whitespace and replace multiple-spaces with a single space
          return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        }

        function checkWeekday(weekdayStr, parsedInput, config) {
          if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();

            if (weekdayProvided !== weekdayActual) {
              getParsingFlags(config).weekdayMismatch = true;
              config._isValid = false;
              return false;
            }
          }

          return true;
        }

        function calculateOffset(obsOffset, militaryOffset, numOffset) {
          if (obsOffset) {
            return obsOffsets[obsOffset];
          } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
          } else {
            var hm = parseInt(numOffset, 10),
                m = hm % 100,
                h = (hm - m) / 100;
            return h * 60 + m;
          }
        } // date and time from ref 2822 format


        function configFromRFC2822(config) {
          var match = rfc2822.exec(preprocessRFC2822(config._i)),
              parsedArray;

          if (match) {
            parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);

            if (!checkWeekday(match[1], parsedArray, config)) {
              return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);
            config._d = createUTCDate.apply(null, config._a);

            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
          } else {
            config._isValid = false;
          }
        } // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict


        function configFromString(config) {
          var matched = aspNetJsonRegex.exec(config._i);

          if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
          }

          configFromISO(config);

          if (config._isValid === false) {
            delete config._isValid;
          } else {
            return;
          }

          configFromRFC2822(config);

          if (config._isValid === false) {
            delete config._isValid;
          } else {
            return;
          }

          if (config._strict) {
            config._isValid = false;
          } else {
            // Final attempt, use Input Fallback
            hooks.createFromInputFallback(config);
          }
        }

        hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
          config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }); // Pick the first defined of two or three arguments.

        function defaults(a, b, c) {
          if (a != null) {
            return a;
          }

          if (b != null) {
            return b;
          }

          return c;
        }

        function currentDateArray(config) {
          // hooks is actually the exported moment object
          var nowValue = new Date(hooks.now());

          if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
          }

          return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
        } // convert an array to a date.
        // the array should mirror the parameters below
        // note: all values past the year are optional and will default to the lowest possible value.
        // [year, month, day , hour, minute, second, millisecond]


        function configFromArray(config) {
          var i,
              date,
              input = [],
              currentDate,
              expectedWeekday,
              yearToUse;

          if (config._d) {
            return;
          }

          currentDate = currentDateArray(config); //compute day of the year from weeks and weekdays

          if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
          } //if the day of the year is set, figure out what it is


          if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
              getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
          } // Default to current date.
          // * if no year, month, day of month are given, default to today
          // * if day of month is given, default month and year
          // * if month is given, default only year
          // * if year is given, don't default anything


          for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
          } // Zero out whatever was not defaulted, including time


          for (; i < 7; i++) {
            config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
          } // Check for 24:00:00.000


          if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
          }

          config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
          expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay(); // Apply timezone offset from input. The actual utcOffset can be changed
          // with parseZone.

          if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          }

          if (config._nextDay) {
            config._a[HOUR] = 24;
          } // check for mismatching day of week


          if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
          }
        }

        function dayOfYearFromWeekInfo(config) {
          var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
          w = config._w;

          if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).

            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);

            if (weekday < 1 || weekday > 7) {
              weekdayOverflow = true;
            }
          } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            curWeek = weekOfYear(createLocal(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year); // Default to current week.

            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
              // weekday -- low day numbers are considered next week
              weekday = w.d;

              if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
              }
            } else if (w.e != null) {
              // local weekday -- counting starts from beginning of week
              weekday = w.e + dow;

              if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
              }
            } else {
              // default to beginning of week
              weekday = dow;
            }
          }

          if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
          } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
          } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
          }
        } // constant that refers to the ISO standard


        hooks.ISO_8601 = function () {}; // constant that refers to the RFC 2822 form


        hooks.RFC_2822 = function () {}; // date from string and format string


        function configFromStringAndFormat(config) {
          // TODO: Move this to another part of the creation flow to prevent circular deps
          if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
          }

          if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
          }

          config._a = [];
          getParsingFlags(config).empty = true; // This array is used to make a Date, either with `new Date` or `Date.UTC`

          var string = '' + config._i,
              i,
              parsedInput,
              tokens,
              token,
              skipped,
              stringLength = string.length,
              totalParsedInputLength = 0,
              era;
          tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

          for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];

            if (parsedInput) {
              skipped = string.substr(0, string.indexOf(parsedInput));

              if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
              }

              string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
              totalParsedInputLength += parsedInput.length;
            } // don't parse if it's not a known token


            if (formatTokenFunctions[token]) {
              if (parsedInput) {
                getParsingFlags(config).empty = false;
              } else {
                getParsingFlags(config).unusedTokens.push(token);
              }

              addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
              getParsingFlags(config).unusedTokens.push(token);
            }
          } // add remaining unparsed input length to the string


          getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;

          if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
          } // clear _12h flag if hour is <= 12


          if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
          }

          getParsingFlags(config).parsedDateParts = config._a.slice(0);
          getParsingFlags(config).meridiem = config._meridiem; // handle meridiem

          config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem); // handle era

          era = getParsingFlags(config).era;

          if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
          }

          configFromArray(config);
          checkOverflow(config);
        }

        function meridiemFixWrap(locale, hour, meridiem) {
          var isPm;

          if (meridiem == null) {
            // nothing to do
            return hour;
          }

          if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
          } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);

            if (isPm && hour < 12) {
              hour += 12;
            }

            if (!isPm && hour === 12) {
              hour = 0;
            }

            return hour;
          } else {
            // this is not supposed to happen
            return hour;
          }
        } // date from string and array of format strings


        function configFromStringAndArray(config) {
          var tempConfig,
              bestMoment,
              scoreToBeat,
              i,
              currentScore,
              validFormatFound,
              bestFormatIsValid = false;

          if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
          }

          for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);

            if (config._useUTC != null) {
              tempConfig._useUTC = config._useUTC;
            }

            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (isValid(tempConfig)) {
              validFormatFound = true;
            } // if there is any input that was not parsed add a penalty for that format


            currentScore += getParsingFlags(tempConfig).charsLeftOver; //or tokens

            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;

            if (!bestFormatIsValid) {
              if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;

                if (validFormatFound) {
                  bestFormatIsValid = true;
                }
              }
            } else {
              if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
              }
            }
          }

          extend(config, bestMoment || tempConfig);
        }

        function configFromObject(config) {
          if (config._d) {
            return;
          }

          var i = normalizeObjectUnits(config._i),
              dayOrDate = i.day === undefined ? i.date : i.day;
          config._a = map([i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
          });
          configFromArray(config);
        }

        function createFromConfig(config) {
          var res = new Moment(checkOverflow(prepareConfig(config)));

          if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
          }

          return res;
        }

        function prepareConfig(config) {
          var input = config._i,
              format = config._f;
          config._locale = config._locale || getLocale(config._l);

          if (input === null || format === undefined && input === '') {
            return createInvalid({
              nullInput: true
            });
          }

          if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
          }

          if (isMoment(input)) {
            return new Moment(checkOverflow(input));
          } else if (isDate(input)) {
            config._d = input;
          } else if (isArray(format)) {
            configFromStringAndArray(config);
          } else if (format) {
            configFromStringAndFormat(config);
          } else {
            configFromInput(config);
          }

          if (!isValid(config)) {
            config._d = null;
          }

          return config;
        }

        function configFromInput(config) {
          var input = config._i;

          if (isUndefined(input)) {
            config._d = new Date(hooks.now());
          } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
          } else if (typeof input === 'string') {
            configFromString(config);
          } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
              return parseInt(obj, 10);
            });
            configFromArray(config);
          } else if (isObject(input)) {
            configFromObject(config);
          } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
          } else {
            hooks.createFromInputFallback(config);
          }
        }

        function createLocalOrUTC(input, format, locale, strict, isUTC) {
          var c = {};

          if (format === true || format === false) {
            strict = format;
            format = undefined;
          }

          if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
          }

          if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
            input = undefined;
          } // object construction must be done this way.
          // https://github.com/moment/moment/issues/1423


          c._isAMomentObject = true;
          c._useUTC = c._isUTC = isUTC;
          c._l = locale;
          c._i = input;
          c._f = format;
          c._strict = strict;
          return createFromConfig(c);
        }

        function createLocal(input, format, locale, strict) {
          return createLocalOrUTC(input, format, locale, strict, false);
        }

        var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
          var other = createLocal.apply(null, arguments);

          if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
          } else {
            return createInvalid();
          }
        }),
            prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
          var other = createLocal.apply(null, arguments);

          if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
          } else {
            return createInvalid();
          }
        }); // Pick a moment m from moments so that m[fn](other) is true for all
        // other. This relies on the function fn to be transitive.
        //
        // moments should either be an array of moment objects or an array, whose
        // first element is an array of moment objects.

        function pickBy(fn, moments) {
          var res, i;

          if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
          }

          if (!moments.length) {
            return createLocal();
          }

          res = moments[0];

          for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
              res = moments[i];
            }
          }

          return res;
        } // TODO: Use [].sort instead?


        function min() {
          var args = [].slice.call(arguments, 0);
          return pickBy('isBefore', args);
        }

        function max() {
          var args = [].slice.call(arguments, 0);
          return pickBy('isAfter', args);
        }

        var now = function now() {
          return Date.now ? Date.now() : +new Date();
        };

        var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

        function isDurationValid(m) {
          var key,
              unitHasDecimal = false,
              i;

          for (key in m) {
            if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
              return false;
            }
          }

          for (i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
              if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
              }

              if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
              }
            }
          }

          return true;
        }

        function isValid$1() {
          return this._isValid;
        }

        function createInvalid$1() {
          return createDuration(NaN);
        }

        function Duration(duration) {
          var normalizedInput = normalizeObjectUnits(duration),
              years = normalizedInput.year || 0,
              quarters = normalizedInput.quarter || 0,
              months = normalizedInput.month || 0,
              weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
              days = normalizedInput.day || 0,
              hours = normalizedInput.hour || 0,
              minutes = normalizedInput.minute || 0,
              seconds = normalizedInput.second || 0,
              milliseconds = normalizedInput.millisecond || 0;
          this._isValid = isDurationValid(normalizedInput); // representation for dateAddRemove

          this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
          minutes * 6e4 + // 1000 * 60
          hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
          // Because of dateAddRemove treats 24 hours as different from a
          // day when working around DST, we need to store them separately

          this._days = +days + weeks * 7; // It is impossible to translate months into days without knowing
          // which months you are are talking about, so we have to store
          // it separately.

          this._months = +months + quarters * 3 + years * 12;
          this._data = {};
          this._locale = getLocale();

          this._bubble();
        }

        function isDuration(obj) {
          return obj instanceof Duration;
        }

        function absRound(number) {
          if (number < 0) {
            return Math.round(-1 * number) * -1;
          } else {
            return Math.round(number);
          }
        } // compare two arrays, return the number of differences


        function compareArrays(array1, array2, dontConvert) {
          var len = Math.min(array1.length, array2.length),
              lengthDiff = Math.abs(array1.length - array2.length),
              diffs = 0,
              i;

          for (i = 0; i < len; i++) {
            if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
              diffs++;
            }
          }

          return diffs + lengthDiff;
        } // FORMATTING


        function offset(token, separator) {
          addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset(),
                sign = '+';

            if (offset < 0) {
              offset = -offset;
              sign = '-';
            }

            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
          });
        }

        offset('Z', ':');
        offset('ZZ', ''); // PARSING

        addRegexToken('Z', matchShortOffset);
        addRegexToken('ZZ', matchShortOffset);
        addParseToken(['Z', 'ZZ'], function (input, array, config) {
          config._useUTC = true;
          config._tzm = offsetFromString(matchShortOffset, input);
        }); // HELPERS
        // timezone chunker
        // '+10:00' > ['10',  '00']
        // '-1530'  > ['-15', '30']

        var chunkOffset = /([\+\-]|\d\d)/gi;

        function offsetFromString(matcher, string) {
          var matches = (string || '').match(matcher),
              chunk,
              parts,
              minutes;

          if (matches === null) {
            return null;
          }

          chunk = matches[matches.length - 1] || [];
          parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
          minutes = +(parts[1] * 60) + toInt(parts[2]);
          return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
        } // Return a moment from input, that is local/utc/zone equivalent to model.


        function cloneWithOffset(input, model) {
          var res, diff;

          if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf(); // Use low-level api, because this fn is low-level api.

            res._d.setTime(res._d.valueOf() + diff);

            hooks.updateOffset(res, false);
            return res;
          } else {
            return createLocal(input).local();
          }
        }

        function getDateOffset(m) {
          // On Firefox.24 Date#getTimezoneOffset returns a floating point.
          // https://github.com/moment/moment/pull/1871
          return -Math.round(m._d.getTimezoneOffset());
        } // HOOKS
        // This function will be called whenever a moment is mutated.
        // It is intended to keep the offset in sync with the timezone.


        hooks.updateOffset = function () {}; // MOMENTS
        // keepLocalTime = true means only change the timezone, without
        // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
        // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
        // +0200, so we adjust the time as needed, to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case, then we have to adjust, because
        // there is no such time in the given timezone.


        function getSetOffset(input, keepLocalTime, keepMinutes) {
          var offset = this._offset || 0,
              localAdjust;

          if (!this.isValid()) {
            return input != null ? this : NaN;
          }

          if (input != null) {
            if (typeof input === 'string') {
              input = offsetFromString(matchShortOffset, input);

              if (input === null) {
                return this;
              }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
              input = input * 60;
            }

            if (!this._isUTC && keepLocalTime) {
              localAdjust = getDateOffset(this);
            }

            this._offset = input;
            this._isUTC = true;

            if (localAdjust != null) {
              this.add(localAdjust, 'm');
            }

            if (offset !== input) {
              if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
              } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
              }
            }

            return this;
          } else {
            return this._isUTC ? offset : getDateOffset(this);
          }
        }

        function getSetZone(input, keepLocalTime) {
          if (input != null) {
            if (typeof input !== 'string') {
              input = -input;
            }

            this.utcOffset(input, keepLocalTime);
            return this;
          } else {
            return -this.utcOffset();
          }
        }

        function setOffsetToUTC(keepLocalTime) {
          return this.utcOffset(0, keepLocalTime);
        }

        function setOffsetToLocal(keepLocalTime) {
          if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
              this.subtract(getDateOffset(this), 'm');
            }
          }

          return this;
        }

        function setOffsetToParsedOffset() {
          if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
          } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);

            if (tZone != null) {
              this.utcOffset(tZone);
            } else {
              this.utcOffset(0, true);
            }
          }

          return this;
        }

        function hasAlignedHourOffset(input) {
          if (!this.isValid()) {
            return false;
          }

          input = input ? createLocal(input).utcOffset() : 0;
          return (this.utcOffset() - input) % 60 === 0;
        }

        function isDaylightSavingTime() {
          return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
        }

        function isDaylightSavingTimeShifted() {
          if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
          }

          var c = {},
              other;
          copyConfig(c, this);
          c = prepareConfig(c);

          if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
          } else {
            this._isDSTShifted = false;
          }

          return this._isDSTShifted;
        }

        function isLocal() {
          return this.isValid() ? !this._isUTC : false;
        }

        function isUtcOffset() {
          return this.isValid() ? this._isUTC : false;
        }

        function isUtc() {
          return this.isValid() ? this._isUTC && this._offset === 0 : false;
        } // ASP.NET json date format regex


        var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
            // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        // and further modified to allow for strings containing both week and day
        isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

        function createDuration(input, key) {
          var duration = input,
              // matching against regexp is expensive, do it on demand
          match = null,
              sign,
              ret,
              diffRes;

          if (isDuration(input)) {
            duration = {
              ms: input._milliseconds,
              d: input._days,
              M: input._months
            };
          } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};

            if (key) {
              duration[key] = +input;
            } else {
              duration.milliseconds = +input;
            }
          } else if (match = aspNetRegex.exec(input)) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
              y: 0,
              d: toInt(match[DATE]) * sign,
              h: toInt(match[HOUR]) * sign,
              m: toInt(match[MINUTE]) * sign,
              s: toInt(match[SECOND]) * sign,
              ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match

            };
          } else if (match = isoRegex.exec(input)) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
              y: parseIso(match[2], sign),
              M: parseIso(match[3], sign),
              w: parseIso(match[4], sign),
              d: parseIso(match[5], sign),
              h: parseIso(match[6], sign),
              m: parseIso(match[7], sign),
              s: parseIso(match[8], sign)
            };
          } else if (duration == null) {
            // checks for null or undefined
            duration = {};
          } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
          }

          ret = new Duration(duration);

          if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
          }

          if (isDuration(input) && hasOwnProp(input, '_isValid')) {
            ret._isValid = input._isValid;
          }

          return ret;
        }

        createDuration.fn = Duration.prototype;
        createDuration.invalid = createInvalid$1;

        function parseIso(inp, sign) {
          // We'd normally use ~~inp for this, but unfortunately it also
          // converts floats to ints.
          // inp may be undefined, so careful calling replace on it.
          var res = inp && parseFloat(inp.replace(',', '.')); // apply sign while we're at it

          return (isNaN(res) ? 0 : res) * sign;
        }

        function positiveMomentsDifference(base, other) {
          var res = {};
          res.months = other.month() - base.month() + (other.year() - base.year()) * 12;

          if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
          }

          res.milliseconds = +other - +base.clone().add(res.months, 'M');
          return res;
        }

        function momentsDifference(base, other) {
          var res;

          if (!(base.isValid() && other.isValid())) {
            return {
              milliseconds: 0,
              months: 0
            };
          }

          other = cloneWithOffset(other, base);

          if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
          } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
          }

          return res;
        } // TODO: remove 'name' arg after deprecation is removed


        function createAdder(direction, name) {
          return function (val, period) {
            var dur, tmp; //invert the arguments, but complain about it

            if (period !== null && !isNaN(+period)) {
              deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
              tmp = val;
              val = period;
              period = tmp;
            }

            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
          };
        }

        function addSubtract(mom, duration, isAdding, updateOffset) {
          var milliseconds = duration._milliseconds,
              days = absRound(duration._days),
              months = absRound(duration._months);

          if (!mom.isValid()) {
            // No op
            return;
          }

          updateOffset = updateOffset == null ? true : updateOffset;

          if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
          }

          if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
          }

          if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
          }

          if (updateOffset) {
            hooks.updateOffset(mom, days || months);
          }
        }

        var add = createAdder(1, 'add'),
            subtract = createAdder(-1, 'subtract');

        function isString(input) {
          return typeof input === 'string' || input instanceof String;
        } // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined


        function isMomentInput(input) {
          return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === undefined;
        }

        function isMomentInputObject(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input),
              propertyTest = false,
              properties = ['years', 'year', 'y', 'months', 'month', 'M', 'days', 'day', 'd', 'dates', 'date', 'D', 'hours', 'hour', 'h', 'minutes', 'minute', 'm', 'seconds', 'second', 's', 'milliseconds', 'millisecond', 'ms'],
              i,
              property;

          for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
          }

          return objectTest && propertyTest;
        }

        function isNumberOrStringArray(input) {
          var arrayTest = isArray(input),
              dataTypeTest = false;

          if (arrayTest) {
            dataTypeTest = input.filter(function (item) {
              return !isNumber(item) && isString(input);
            }).length === 0;
          }

          return arrayTest && dataTypeTest;
        }

        function isCalendarSpec(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input),
              propertyTest = false,
              properties = ['sameDay', 'nextDay', 'lastDay', 'nextWeek', 'lastWeek', 'sameElse'],
              i,
              property;

          for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
          }

          return objectTest && propertyTest;
        }

        function getCalendarFormat(myMoment, now) {
          var diff = myMoment.diff(now, 'days', true);
          return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
        }

        function calendar$1(time, formats) {
          // Support for single parameter, formats only overload to the calendar function
          if (arguments.length === 1) {
            if (isMomentInput(arguments[0])) {
              time = arguments[0];
              formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
              formats = arguments[0];
              time = undefined;
            }
          } // We want to compare the start of today, vs this.
          // Getting start-of-today depends on whether we're local/utc/offset or not.


          var now = time || createLocal(),
              sod = cloneWithOffset(now, this).startOf('day'),
              format = hooks.calendarFormat(this, sod) || 'sameElse',
              output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
          return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
        }

        function clone() {
          return new Moment(this);
        }

        function isAfter(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);

          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }

          units = normalizeUnits(units) || 'millisecond';

          if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
          } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
          }
        }

        function isBefore(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);

          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }

          units = normalizeUnits(units) || 'millisecond';

          if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
          } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
          }
        }

        function isBetween(from, to, units, inclusivity) {
          var localFrom = isMoment(from) ? from : createLocal(from),
              localTo = isMoment(to) ? to : createLocal(to);

          if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
          }

          inclusivity = inclusivity || '()';
          return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
        }

        function isSame(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input),
              inputMs;

          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }

          units = normalizeUnits(units) || 'millisecond';

          if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
          } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
          }
        }

        function isSameOrAfter(input, units) {
          return this.isSame(input, units) || this.isAfter(input, units);
        }

        function isSameOrBefore(input, units) {
          return this.isSame(input, units) || this.isBefore(input, units);
        }

        function diff(input, units, asFloat) {
          var that, zoneDelta, output;

          if (!this.isValid()) {
            return NaN;
          }

          that = cloneWithOffset(input, this);

          if (!that.isValid()) {
            return NaN;
          }

          zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
          units = normalizeUnits(units);

          switch (units) {
            case 'year':
              output = monthDiff(this, that) / 12;
              break;

            case 'month':
              output = monthDiff(this, that);
              break;

            case 'quarter':
              output = monthDiff(this, that) / 3;
              break;

            case 'second':
              output = (this - that) / 1e3;
              break;
            // 1000

            case 'minute':
              output = (this - that) / 6e4;
              break;
            // 1000 * 60

            case 'hour':
              output = (this - that) / 36e5;
              break;
            // 1000 * 60 * 60

            case 'day':
              output = (this - that - zoneDelta) / 864e5;
              break;
            // 1000 * 60 * 60 * 24, negate dst

            case 'week':
              output = (this - that - zoneDelta) / 6048e5;
              break;
            // 1000 * 60 * 60 * 24 * 7, negate dst

            default:
              output = this - that;
          }

          return asFloat ? output : absFloor(output);
        }

        function monthDiff(a, b) {
          if (a.date() < b.date()) {
            // end-of-month calculations work correct when the start month has more
            // days than the end month.
            return -monthDiff(b, a);
          } // difference in months


          var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
              // b is in (anchor - 1 month, anchor + 1 month)
          anchor = a.clone().add(wholeMonthDiff, 'months'),
              anchor2,
              adjust;

          if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months'); // linear across the month

            adjust = (b - anchor) / (anchor - anchor2);
          } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months'); // linear across the month

            adjust = (b - anchor) / (anchor2 - anchor);
          } //check for negative zero, return zero if negative zero


          return -(wholeMonthDiff + adjust) || 0;
        }

        hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
        hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

        function toString() {
          return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
        }

        function toISOString(keepOffset) {
          if (!this.isValid()) {
            return null;
          }

          var utc = keepOffset !== true,
              m = utc ? this.clone().utc() : this;

          if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
          }

          if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
              return this.toDate().toISOString();
            } else {
              return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
          }

          return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        /**
         * Return a human readable representation of a moment that can
         * also be evaluated to get a new moment which is the same
         *
         * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
         */


        function inspect() {
          if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
          }

          var func = 'moment',
              zone = '',
              prefix,
              year,
              datetime,
              suffix;

          if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
          }

          prefix = '[' + func + '("]';
          year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
          datetime = '-MM-DD[T]HH:mm:ss.SSS';
          suffix = zone + '[")]';
          return this.format(prefix + year + datetime + suffix);
        }

        function format(inputString) {
          if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
          }

          var output = formatMoment(this, inputString);
          return this.localeData().postformat(output);
        }

        function from(time, withoutSuffix) {
          if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({
              to: this,
              from: time
            }).locale(this.locale()).humanize(!withoutSuffix);
          } else {
            return this.localeData().invalidDate();
          }
        }

        function fromNow(withoutSuffix) {
          return this.from(createLocal(), withoutSuffix);
        }

        function to(time, withoutSuffix) {
          if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({
              from: this,
              to: time
            }).locale(this.locale()).humanize(!withoutSuffix);
          } else {
            return this.localeData().invalidDate();
          }
        }

        function toNow(withoutSuffix) {
          return this.to(createLocal(), withoutSuffix);
        } // If passed a locale key, it will set the locale for this
        // instance.  Otherwise, it will return the locale configuration
        // variables for this instance.


        function locale(key) {
          var newLocaleData;

          if (key === undefined) {
            return this._locale._abbr;
          } else {
            newLocaleData = getLocale(key);

            if (newLocaleData != null) {
              this._locale = newLocaleData;
            }

            return this;
          }
        }

        var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
          if (key === undefined) {
            return this.localeData();
          } else {
            return this.locale(key);
          }
        });

        function localeData() {
          return this._locale;
        }

        var MS_PER_SECOND = 1000,
            MS_PER_MINUTE = 60 * MS_PER_SECOND,
            MS_PER_HOUR = 60 * MS_PER_MINUTE,
            MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR; // actual modulo - handles negative numbers (for dates before 1970):

        function mod$1(dividend, divisor) {
          return (dividend % divisor + divisor) % divisor;
        }

        function localStartOfDate(y, m, d) {
          // the date constructor remaps years 0-99 to 1900-1999
          if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
            return new Date(y, m, d).valueOf();
          }
        }

        function utcStartOfDate(y, m, d) {
          // Date.UTC remaps years 0-99 to 1900-1999
          if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
            return Date.UTC(y, m, d);
          }
        }

        function startOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);

          if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
          }

          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

          switch (units) {
            case 'year':
              time = startOfDate(this.year(), 0, 1);
              break;

            case 'quarter':
              time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
              break;

            case 'month':
              time = startOfDate(this.year(), this.month(), 1);
              break;

            case 'week':
              time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
              break;

            case 'isoWeek':
              time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
              break;

            case 'day':
            case 'date':
              time = startOfDate(this.year(), this.month(), this.date());
              break;

            case 'hour':
              time = this._d.valueOf();
              time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
              break;

            case 'minute':
              time = this._d.valueOf();
              time -= mod$1(time, MS_PER_MINUTE);
              break;

            case 'second':
              time = this._d.valueOf();
              time -= mod$1(time, MS_PER_SECOND);
              break;
          }

          this._d.setTime(time);

          hooks.updateOffset(this, true);
          return this;
        }

        function endOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);

          if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
          }

          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

          switch (units) {
            case 'year':
              time = startOfDate(this.year() + 1, 0, 1) - 1;
              break;

            case 'quarter':
              time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
              break;

            case 'month':
              time = startOfDate(this.year(), this.month() + 1, 1) - 1;
              break;

            case 'week':
              time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
              break;

            case 'isoWeek':
              time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
              break;

            case 'day':
            case 'date':
              time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
              break;

            case 'hour':
              time = this._d.valueOf();
              time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
              break;

            case 'minute':
              time = this._d.valueOf();
              time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
              break;

            case 'second':
              time = this._d.valueOf();
              time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
              break;
          }

          this._d.setTime(time);

          hooks.updateOffset(this, true);
          return this;
        }

        function valueOf() {
          return this._d.valueOf() - (this._offset || 0) * 60000;
        }

        function unix() {
          return Math.floor(this.valueOf() / 1000);
        }

        function toDate() {
          return new Date(this.valueOf());
        }

        function toArray() {
          var m = this;
          return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
        }

        function toObject() {
          var m = this;
          return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
          };
        }

        function toJSON() {
          // new Date(NaN).toJSON() === null
          return this.isValid() ? this.toISOString() : null;
        }

        function isValid$2() {
          return isValid(this);
        }

        function parsingFlags() {
          return extend({}, getParsingFlags(this));
        }

        function invalidAt() {
          return getParsingFlags(this).overflow;
        }

        function creationData() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
          };
        }

        addFormatToken('N', 0, 0, 'eraAbbr');
        addFormatToken('NN', 0, 0, 'eraAbbr');
        addFormatToken('NNN', 0, 0, 'eraAbbr');
        addFormatToken('NNNN', 0, 0, 'eraName');
        addFormatToken('NNNNN', 0, 0, 'eraNarrow');
        addFormatToken('y', ['y', 1], 'yo', 'eraYear');
        addFormatToken('y', ['yy', 2], 0, 'eraYear');
        addFormatToken('y', ['yyy', 3], 0, 'eraYear');
        addFormatToken('y', ['yyyy', 4], 0, 'eraYear');
        addRegexToken('N', matchEraAbbr);
        addRegexToken('NN', matchEraAbbr);
        addRegexToken('NNN', matchEraAbbr);
        addRegexToken('NNNN', matchEraName);
        addRegexToken('NNNNN', matchEraNarrow);
        addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (input, array, config, token) {
          var era = config._locale.erasParse(input, token, config._strict);

          if (era) {
            getParsingFlags(config).era = era;
          } else {
            getParsingFlags(config).invalidEra = input;
          }
        });
        addRegexToken('y', matchUnsigned);
        addRegexToken('yy', matchUnsigned);
        addRegexToken('yyy', matchUnsigned);
        addRegexToken('yyyy', matchUnsigned);
        addRegexToken('yo', matchEraYearOrdinal);
        addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
        addParseToken(['yo'], function (input, array, config, token) {
          var match;

          if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
          }

          if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
          } else {
            array[YEAR] = parseInt(input, 10);
          }
        });

        function localeEras(m, format) {
          var i,
              l,
              date,
              eras = this._eras || getLocale('en')._eras;

          for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
              case 'string':
                // truncate time
                date = hooks(eras[i].since).startOf('day');
                eras[i].since = date.valueOf();
                break;
            }

            switch (typeof eras[i].until) {
              case 'undefined':
                eras[i].until = +Infinity;
                break;

              case 'string':
                // truncate time
                date = hooks(eras[i].until).startOf('day').valueOf();
                eras[i].until = date.valueOf();
                break;
            }
          }

          return eras;
        }

        function localeErasParse(eraName, format, strict) {
          var i,
              l,
              eras = this.eras(),
              name,
              abbr,
              narrow;
          eraName = eraName.toUpperCase();

          for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();

            if (strict) {
              switch (format) {
                case 'N':
                case 'NN':
                case 'NNN':
                  if (abbr === eraName) {
                    return eras[i];
                  }

                  break;

                case 'NNNN':
                  if (name === eraName) {
                    return eras[i];
                  }

                  break;

                case 'NNNNN':
                  if (narrow === eraName) {
                    return eras[i];
                  }

                  break;
              }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
              return eras[i];
            }
          }
        }

        function localeErasConvertYear(era, year) {
          var dir = era.since <= era.until ? +1 : -1;

          if (year === undefined) {
            return hooks(era.since).year();
          } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
          }
        }

        function getEraName() {
          var i,
              l,
              val,
              eras = this.localeData().eras();

          for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].name;
            }

            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].name;
            }
          }

          return '';
        }

        function getEraNarrow() {
          var i,
              l,
              val,
              eras = this.localeData().eras();

          for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].narrow;
            }

            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].narrow;
            }
          }

          return '';
        }

        function getEraAbbr() {
          var i,
              l,
              val,
              eras = this.localeData().eras();

          for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].abbr;
            }

            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].abbr;
            }
          }

          return '';
        }

        function getEraYear() {
          var i,
              l,
              dir,
              val,
              eras = this.localeData().eras();

          for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? +1 : -1; // truncate time

            val = this.startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
              return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
            }
          }

          return this.year();
        }

        function erasNameRegex(isStrict) {
          if (!hasOwnProp(this, '_erasNameRegex')) {
            computeErasParse.call(this);
          }

          return isStrict ? this._erasNameRegex : this._erasRegex;
        }

        function erasAbbrRegex(isStrict) {
          if (!hasOwnProp(this, '_erasAbbrRegex')) {
            computeErasParse.call(this);
          }

          return isStrict ? this._erasAbbrRegex : this._erasRegex;
        }

        function erasNarrowRegex(isStrict) {
          if (!hasOwnProp(this, '_erasNarrowRegex')) {
            computeErasParse.call(this);
          }

          return isStrict ? this._erasNarrowRegex : this._erasRegex;
        }

        function matchEraAbbr(isStrict, locale) {
          return locale.erasAbbrRegex(isStrict);
        }

        function matchEraName(isStrict, locale) {
          return locale.erasNameRegex(isStrict);
        }

        function matchEraNarrow(isStrict, locale) {
          return locale.erasNarrowRegex(isStrict);
        }

        function matchEraYearOrdinal(isStrict, locale) {
          return locale._eraYearOrdinalRegex || matchUnsigned;
        }

        function computeErasParse() {
          var abbrPieces = [],
              namePieces = [],
              narrowPieces = [],
              mixedPieces = [],
              i,
              l,
              eras = this.eras();

          for (i = 0, l = eras.length; i < l; ++i) {
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));
            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
          }

          this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
          this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
          this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
          this._erasNarrowRegex = new RegExp('^(' + narrowPieces.join('|') + ')', 'i');
        } // FORMATTING


        addFormatToken(0, ['gg', 2], 0, function () {
          return this.weekYear() % 100;
        });
        addFormatToken(0, ['GG', 2], 0, function () {
          return this.isoWeekYear() % 100;
        });

        function addWeekYearFormatToken(token, getter) {
          addFormatToken(0, [token, token.length], 0, getter);
        }

        addWeekYearFormatToken('gggg', 'weekYear');
        addWeekYearFormatToken('ggggg', 'weekYear');
        addWeekYearFormatToken('GGGG', 'isoWeekYear');
        addWeekYearFormatToken('GGGGG', 'isoWeekYear'); // ALIASES

        addUnitAlias('weekYear', 'gg');
        addUnitAlias('isoWeekYear', 'GG'); // PRIORITY

        addUnitPriority('weekYear', 1);
        addUnitPriority('isoWeekYear', 1); // PARSING

        addRegexToken('G', matchSigned);
        addRegexToken('g', matchSigned);
        addRegexToken('GG', match1to2, match2);
        addRegexToken('gg', match1to2, match2);
        addRegexToken('GGGG', match1to4, match4);
        addRegexToken('gggg', match1to4, match4);
        addRegexToken('GGGGG', match1to6, match6);
        addRegexToken('ggggg', match1to6, match6);
        addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
          week[token.substr(0, 2)] = toInt(input);
        });
        addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
          week[token] = hooks.parseTwoDigitYear(input);
        }); // MOMENTS

        function getSetWeekYear(input) {
          return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
        }

        function getSetISOWeekYear(input) {
          return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
        }

        function getISOWeeksInYear() {
          return weeksInYear(this.year(), 1, 4);
        }

        function getISOWeeksInISOWeekYear() {
          return weeksInYear(this.isoWeekYear(), 1, 4);
        }

        function getWeeksInYear() {
          var weekInfo = this.localeData()._week;

          return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        }

        function getWeeksInWeekYear() {
          var weekInfo = this.localeData()._week;

          return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
        }

        function getSetWeekYearHelper(input, week, weekday, dow, doy) {
          var weeksTarget;

          if (input == null) {
            return weekOfYear(this, dow, doy).year;
          } else {
            weeksTarget = weeksInYear(input, dow, doy);

            if (week > weeksTarget) {
              week = weeksTarget;
            }

            return setWeekAll.call(this, input, week, weekday, dow, doy);
          }
        }

        function setWeekAll(weekYear, week, weekday, dow, doy) {
          var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
              date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
          this.year(date.getUTCFullYear());
          this.month(date.getUTCMonth());
          this.date(date.getUTCDate());
          return this;
        } // FORMATTING


        addFormatToken('Q', 0, 'Qo', 'quarter'); // ALIASES

        addUnitAlias('quarter', 'Q'); // PRIORITY

        addUnitPriority('quarter', 7); // PARSING

        addRegexToken('Q', match1);
        addParseToken('Q', function (input, array) {
          array[MONTH] = (toInt(input) - 1) * 3;
        }); // MOMENTS

        function getSetQuarter(input) {
          return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        } // FORMATTING


        addFormatToken('D', ['DD', 2], 'Do', 'date'); // ALIASES

        addUnitAlias('date', 'D'); // PRIORITY

        addUnitPriority('date', 9); // PARSING

        addRegexToken('D', match1to2);
        addRegexToken('DD', match1to2, match2);
        addRegexToken('Do', function (isStrict, locale) {
          // TODO: Remove "ordinalParse" fallback in next major release.
          return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
        });
        addParseToken(['D', 'DD'], DATE);
        addParseToken('Do', function (input, array) {
          array[DATE] = toInt(input.match(match1to2)[0]);
        }); // MOMENTS

        var getSetDayOfMonth = makeGetSet('Date', true); // FORMATTING

        addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'); // ALIASES

        addUnitAlias('dayOfYear', 'DDD'); // PRIORITY

        addUnitPriority('dayOfYear', 4); // PARSING

        addRegexToken('DDD', match1to3);
        addRegexToken('DDDD', match3);
        addParseToken(['DDD', 'DDDD'], function (input, array, config) {
          config._dayOfYear = toInt(input);
        }); // HELPERS
        // MOMENTS

        function getSetDayOfYear(input) {
          var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
          return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
        } // FORMATTING


        addFormatToken('m', ['mm', 2], 0, 'minute'); // ALIASES

        addUnitAlias('minute', 'm'); // PRIORITY

        addUnitPriority('minute', 14); // PARSING

        addRegexToken('m', match1to2);
        addRegexToken('mm', match1to2, match2);
        addParseToken(['m', 'mm'], MINUTE); // MOMENTS

        var getSetMinute = makeGetSet('Minutes', false); // FORMATTING

        addFormatToken('s', ['ss', 2], 0, 'second'); // ALIASES

        addUnitAlias('second', 's'); // PRIORITY

        addUnitPriority('second', 15); // PARSING

        addRegexToken('s', match1to2);
        addRegexToken('ss', match1to2, match2);
        addParseToken(['s', 'ss'], SECOND); // MOMENTS

        var getSetSecond = makeGetSet('Seconds', false); // FORMATTING

        addFormatToken('S', 0, 0, function () {
          return ~~(this.millisecond() / 100);
        });
        addFormatToken(0, ['SS', 2], 0, function () {
          return ~~(this.millisecond() / 10);
        });
        addFormatToken(0, ['SSS', 3], 0, 'millisecond');
        addFormatToken(0, ['SSSS', 4], 0, function () {
          return this.millisecond() * 10;
        });
        addFormatToken(0, ['SSSSS', 5], 0, function () {
          return this.millisecond() * 100;
        });
        addFormatToken(0, ['SSSSSS', 6], 0, function () {
          return this.millisecond() * 1000;
        });
        addFormatToken(0, ['SSSSSSS', 7], 0, function () {
          return this.millisecond() * 10000;
        });
        addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
          return this.millisecond() * 100000;
        });
        addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
          return this.millisecond() * 1000000;
        }); // ALIASES

        addUnitAlias('millisecond', 'ms'); // PRIORITY

        addUnitPriority('millisecond', 16); // PARSING

        addRegexToken('S', match1to3, match1);
        addRegexToken('SS', match1to3, match2);
        addRegexToken('SSS', match1to3, match3);
        var token, getSetMillisecond;

        for (token = 'SSSS'; token.length <= 9; token += 'S') {
          addRegexToken(token, matchUnsigned);
        }

        function parseMs(input, array) {
          array[MILLISECOND] = toInt(('0.' + input) * 1000);
        }

        for (token = 'S'; token.length <= 9; token += 'S') {
          addParseToken(token, parseMs);
        }

        getSetMillisecond = makeGetSet('Milliseconds', false); // FORMATTING

        addFormatToken('z', 0, 0, 'zoneAbbr');
        addFormatToken('zz', 0, 0, 'zoneName'); // MOMENTS

        function getZoneAbbr() {
          return this._isUTC ? 'UTC' : '';
        }

        function getZoneName() {
          return this._isUTC ? 'Coordinated Universal Time' : '';
        }

        var proto = Moment.prototype;
        proto.add = add;
        proto.calendar = calendar$1;
        proto.clone = clone;
        proto.diff = diff;
        proto.endOf = endOf;
        proto.format = format;
        proto.from = from;
        proto.fromNow = fromNow;
        proto.to = to;
        proto.toNow = toNow;
        proto.get = stringGet;
        proto.invalidAt = invalidAt;
        proto.isAfter = isAfter;
        proto.isBefore = isBefore;
        proto.isBetween = isBetween;
        proto.isSame = isSame;
        proto.isSameOrAfter = isSameOrAfter;
        proto.isSameOrBefore = isSameOrBefore;
        proto.isValid = isValid$2;
        proto.lang = lang;
        proto.locale = locale;
        proto.localeData = localeData;
        proto.max = prototypeMax;
        proto.min = prototypeMin;
        proto.parsingFlags = parsingFlags;
        proto.set = stringSet;
        proto.startOf = startOf;
        proto.subtract = subtract;
        proto.toArray = toArray;
        proto.toObject = toObject;
        proto.toDate = toDate;
        proto.toISOString = toISOString;
        proto.inspect = inspect;

        if (typeof Symbol !== 'undefined' && Symbol["for"] != null) {
          proto[Symbol["for"]('nodejs.util.inspect.custom')] = function () {
            return 'Moment<' + this.format() + '>';
          };
        }

        proto.toJSON = toJSON;
        proto.toString = toString;
        proto.unix = unix;
        proto.valueOf = valueOf;
        proto.creationData = creationData;
        proto.eraName = getEraName;
        proto.eraNarrow = getEraNarrow;
        proto.eraAbbr = getEraAbbr;
        proto.eraYear = getEraYear;
        proto.year = getSetYear;
        proto.isLeapYear = getIsLeapYear;
        proto.weekYear = getSetWeekYear;
        proto.isoWeekYear = getSetISOWeekYear;
        proto.quarter = proto.quarters = getSetQuarter;
        proto.month = getSetMonth;
        proto.daysInMonth = getDaysInMonth;
        proto.week = proto.weeks = getSetWeek;
        proto.isoWeek = proto.isoWeeks = getSetISOWeek;
        proto.weeksInYear = getWeeksInYear;
        proto.weeksInWeekYear = getWeeksInWeekYear;
        proto.isoWeeksInYear = getISOWeeksInYear;
        proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
        proto.date = getSetDayOfMonth;
        proto.day = proto.days = getSetDayOfWeek;
        proto.weekday = getSetLocaleDayOfWeek;
        proto.isoWeekday = getSetISODayOfWeek;
        proto.dayOfYear = getSetDayOfYear;
        proto.hour = proto.hours = getSetHour;
        proto.minute = proto.minutes = getSetMinute;
        proto.second = proto.seconds = getSetSecond;
        proto.millisecond = proto.milliseconds = getSetMillisecond;
        proto.utcOffset = getSetOffset;
        proto.utc = setOffsetToUTC;
        proto.local = setOffsetToLocal;
        proto.parseZone = setOffsetToParsedOffset;
        proto.hasAlignedHourOffset = hasAlignedHourOffset;
        proto.isDST = isDaylightSavingTime;
        proto.isLocal = isLocal;
        proto.isUtcOffset = isUtcOffset;
        proto.isUtc = isUtc;
        proto.isUTC = isUtc;
        proto.zoneAbbr = getZoneAbbr;
        proto.zoneName = getZoneName;
        proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
        proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
        proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
        proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
        proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

        function createUnix(input) {
          return createLocal(input * 1000);
        }

        function createInZone() {
          return createLocal.apply(null, arguments).parseZone();
        }

        function preParsePostFormat(string) {
          return string;
        }

        var proto$1 = Locale.prototype;
        proto$1.calendar = calendar;
        proto$1.longDateFormat = longDateFormat;
        proto$1.invalidDate = invalidDate;
        proto$1.ordinal = ordinal;
        proto$1.preparse = preParsePostFormat;
        proto$1.postformat = preParsePostFormat;
        proto$1.relativeTime = relativeTime;
        proto$1.pastFuture = pastFuture;
        proto$1.set = set;
        proto$1.eras = localeEras;
        proto$1.erasParse = localeErasParse;
        proto$1.erasConvertYear = localeErasConvertYear;
        proto$1.erasAbbrRegex = erasAbbrRegex;
        proto$1.erasNameRegex = erasNameRegex;
        proto$1.erasNarrowRegex = erasNarrowRegex;
        proto$1.months = localeMonths;
        proto$1.monthsShort = localeMonthsShort;
        proto$1.monthsParse = localeMonthsParse;
        proto$1.monthsRegex = monthsRegex;
        proto$1.monthsShortRegex = monthsShortRegex;
        proto$1.week = localeWeek;
        proto$1.firstDayOfYear = localeFirstDayOfYear;
        proto$1.firstDayOfWeek = localeFirstDayOfWeek;
        proto$1.weekdays = localeWeekdays;
        proto$1.weekdaysMin = localeWeekdaysMin;
        proto$1.weekdaysShort = localeWeekdaysShort;
        proto$1.weekdaysParse = localeWeekdaysParse;
        proto$1.weekdaysRegex = weekdaysRegex;
        proto$1.weekdaysShortRegex = weekdaysShortRegex;
        proto$1.weekdaysMinRegex = weekdaysMinRegex;
        proto$1.isPM = localeIsPM;
        proto$1.meridiem = localeMeridiem;

        function get$1(format, index, field, setter) {
          var locale = getLocale(),
              utc = createUTC().set(setter, index);
          return locale[field](utc, format);
        }

        function listMonthsImpl(format, index, field) {
          if (isNumber(format)) {
            index = format;
            format = undefined;
          }

          format = format || '';

          if (index != null) {
            return get$1(format, index, field, 'month');
          }

          var i,
              out = [];

          for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
          }

          return out;
        } // ()
        // (5)
        // (fmt, 5)
        // (fmt)
        // (true)
        // (true, 5)
        // (true, fmt, 5)
        // (true, fmt)


        function listWeekdaysImpl(localeSorted, format, index, field) {
          if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
              index = format;
              format = undefined;
            }

            format = format || '';
          } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
              index = format;
              format = undefined;
            }

            format = format || '';
          }

          var locale = getLocale(),
              shift = localeSorted ? locale._week.dow : 0,
              i,
              out = [];

          if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
          }

          for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
          }

          return out;
        }

        function listMonths(format, index) {
          return listMonthsImpl(format, index, 'months');
        }

        function listMonthsShort(format, index) {
          return listMonthsImpl(format, index, 'monthsShort');
        }

        function listWeekdays(localeSorted, format, index) {
          return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
        }

        function listWeekdaysShort(localeSorted, format, index) {
          return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
        }

        function listWeekdaysMin(localeSorted, format, index) {
          return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
        }

        getSetGlobalLocale('en', {
          eras: [{
            since: '0001-01-01',
            until: +Infinity,
            offset: 1,
            name: 'Anno Domini',
            narrow: 'AD',
            abbr: 'AD'
          }, {
            since: '0000-12-31',
            until: -Infinity,
            offset: 1,
            name: 'Before Christ',
            narrow: 'BC',
            abbr: 'BC'
          }],
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function ordinal(number) {
            var b = number % 10,
                output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
          }
        }); // Side effect imports

        hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
        hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
        var mathAbs = Math.abs;

        function abs() {
          var data = this._data;
          this._milliseconds = mathAbs(this._milliseconds);
          this._days = mathAbs(this._days);
          this._months = mathAbs(this._months);
          data.milliseconds = mathAbs(data.milliseconds);
          data.seconds = mathAbs(data.seconds);
          data.minutes = mathAbs(data.minutes);
          data.hours = mathAbs(data.hours);
          data.months = mathAbs(data.months);
          data.years = mathAbs(data.years);
          return this;
        }

        function addSubtract$1(duration, input, value, direction) {
          var other = createDuration(input, value);
          duration._milliseconds += direction * other._milliseconds;
          duration._days += direction * other._days;
          duration._months += direction * other._months;
          return duration._bubble();
        } // supports only 2.0-style add(1, 's') or add(duration)


        function add$1(input, value) {
          return addSubtract$1(this, input, value, 1);
        } // supports only 2.0-style subtract(1, 's') or subtract(duration)


        function subtract$1(input, value) {
          return addSubtract$1(this, input, value, -1);
        }

        function absCeil(number) {
          if (number < 0) {
            return Math.floor(number);
          } else {
            return Math.ceil(number);
          }
        }

        function bubble() {
          var milliseconds = this._milliseconds,
              days = this._days,
              months = this._months,
              data = this._data,
              seconds,
              minutes,
              hours,
              years,
              monthsFromDays; // if we have a mix of positive and negative values, bubble down first
          // check: https://github.com/moment/moment/issues/2166

          if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
          } // The following code bubbles up values, see the tests for
          // examples of what that means.


          data.milliseconds = milliseconds % 1000;
          seconds = absFloor(milliseconds / 1000);
          data.seconds = seconds % 60;
          minutes = absFloor(seconds / 60);
          data.minutes = minutes % 60;
          hours = absFloor(minutes / 60);
          data.hours = hours % 24;
          days += absFloor(hours / 24); // convert days to months

          monthsFromDays = absFloor(daysToMonths(days));
          months += monthsFromDays;
          days -= absCeil(monthsToDays(monthsFromDays)); // 12 months -> 1 year

          years = absFloor(months / 12);
          months %= 12;
          data.days = days;
          data.months = months;
          data.years = years;
          return this;
        }

        function daysToMonths(days) {
          // 400 years have 146097 days (taking into account leap year rules)
          // 400 years have 12 months === 4800
          return days * 4800 / 146097;
        }

        function monthsToDays(months) {
          // the reverse of daysToMonths
          return months * 146097 / 4800;
        }

        function as(units) {
          if (!this.isValid()) {
            return NaN;
          }

          var days,
              months,
              milliseconds = this._milliseconds;
          units = normalizeUnits(units);

          if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);

            switch (units) {
              case 'month':
                return months;

              case 'quarter':
                return months / 3;

              case 'year':
                return months / 12;
            }
          } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));

            switch (units) {
              case 'week':
                return days / 7 + milliseconds / 6048e5;

              case 'day':
                return days + milliseconds / 864e5;

              case 'hour':
                return days * 24 + milliseconds / 36e5;

              case 'minute':
                return days * 1440 + milliseconds / 6e4;

              case 'second':
                return days * 86400 + milliseconds / 1000;
              // Math.floor prevents floating point math errors here

              case 'millisecond':
                return Math.floor(days * 864e5) + milliseconds;

              default:
                throw new Error('Unknown unit ' + units);
            }
          }
        } // TODO: Use this.as('ms')?


        function valueOf$1() {
          if (!this.isValid()) {
            return NaN;
          }

          return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
        }

        function makeAs(alias) {
          return function () {
            return this.as(alias);
          };
        }

        var asMilliseconds = makeAs('ms'),
            asSeconds = makeAs('s'),
            asMinutes = makeAs('m'),
            asHours = makeAs('h'),
            asDays = makeAs('d'),
            asWeeks = makeAs('w'),
            asMonths = makeAs('M'),
            asQuarters = makeAs('Q'),
            asYears = makeAs('y');

        function clone$1() {
          return createDuration(this);
        }

        function get$2(units) {
          units = normalizeUnits(units);
          return this.isValid() ? this[units + 's']() : NaN;
        }

        function makeGetter(name) {
          return function () {
            return this.isValid() ? this._data[name] : NaN;
          };
        }

        var milliseconds = makeGetter('milliseconds'),
            seconds = makeGetter('seconds'),
            minutes = makeGetter('minutes'),
            hours = makeGetter('hours'),
            days = makeGetter('days'),
            months = makeGetter('months'),
            years = makeGetter('years');

        function weeks() {
          return absFloor(this.days() / 7);
        }

        var round = Math.round,
            thresholds = {
          ss: 44,
          // a few seconds to seconds
          s: 45,
          // seconds to minute
          m: 45,
          // minutes to hour
          h: 22,
          // hours to day
          d: 26,
          // days to month/week
          w: null,
          // weeks to month
          M: 11 // months to year

        }; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize

        function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
          return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
        }

        function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
          var duration = createDuration(posNegDuration).abs(),
              seconds = round(duration.as('s')),
              minutes = round(duration.as('m')),
              hours = round(duration.as('h')),
              days = round(duration.as('d')),
              months = round(duration.as('M')),
              weeks = round(duration.as('w')),
              years = round(duration.as('y')),
              a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days];

          if (thresholds.w != null) {
            a = a || weeks <= 1 && ['w'] || weeks < thresholds.w && ['ww', weeks];
          }

          a = a || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
          a[2] = withoutSuffix;
          a[3] = +posNegDuration > 0;
          a[4] = locale;
          return substituteTimeAgo.apply(null, a);
        } // This function allows you to set the rounding function for relative time strings


        function getSetRelativeTimeRounding(roundingFunction) {
          if (roundingFunction === undefined) {
            return round;
          }

          if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
          }

          return false;
        } // This function allows you to set a threshold for relative time strings


        function getSetRelativeTimeThreshold(threshold, limit) {
          if (thresholds[threshold] === undefined) {
            return false;
          }

          if (limit === undefined) {
            return thresholds[threshold];
          }

          thresholds[threshold] = limit;

          if (threshold === 's') {
            thresholds.ss = limit - 1;
          }

          return true;
        }

        function humanize(argWithSuffix, argThresholds) {
          if (!this.isValid()) {
            return this.localeData().invalidDate();
          }

          var withSuffix = false,
              th = thresholds,
              locale,
              output;

          if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
          }

          if (typeof argWithSuffix === 'boolean') {
            withSuffix = argWithSuffix;
          }

          if (typeof argThresholds === 'object') {
            th = Object.assign({}, thresholds, argThresholds);

            if (argThresholds.s != null && argThresholds.ss == null) {
              th.ss = argThresholds.s - 1;
            }
          }

          locale = this.localeData();
          output = relativeTime$1(this, !withSuffix, th, locale);

          if (withSuffix) {
            output = locale.pastFuture(+this, output);
          }

          return locale.postformat(output);
        }

        var abs$1 = Math.abs;

        function sign(x) {
          return (x > 0) - (x < 0) || +x;
        }

        function toISOString$1() {
          // for ISO strings we do not use the normal bubbling rules:
          //  * milliseconds bubble up until they become hours
          //  * days do not bubble at all
          //  * months bubble up until they become years
          // This is because there is no context-free conversion between hours and days
          // (think of clock changes)
          // and also not between days and months (28-31 days per month)
          if (!this.isValid()) {
            return this.localeData().invalidDate();
          }

          var seconds = abs$1(this._milliseconds) / 1000,
              days = abs$1(this._days),
              months = abs$1(this._months),
              minutes,
              hours,
              years,
              s,
              total = this.asSeconds(),
              totalSign,
              ymSign,
              daysSign,
              hmsSign;

          if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
          } // 3600 seconds -> 60 minutes -> 1 hour


          minutes = absFloor(seconds / 60);
          hours = absFloor(minutes / 60);
          seconds %= 60;
          minutes %= 60; // 12 months -> 1 year

          years = absFloor(months / 12);
          months %= 12; // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js

          s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
          totalSign = total < 0 ? '-' : '';
          ymSign = sign(this._months) !== sign(total) ? '-' : '';
          daysSign = sign(this._days) !== sign(total) ? '-' : '';
          hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
          return totalSign + 'P' + (years ? ymSign + years + 'Y' : '') + (months ? ymSign + months + 'M' : '') + (days ? daysSign + days + 'D' : '') + (hours || minutes || seconds ? 'T' : '') + (hours ? hmsSign + hours + 'H' : '') + (minutes ? hmsSign + minutes + 'M' : '') + (seconds ? hmsSign + s + 'S' : '');
        }

        var proto$2 = Duration.prototype;
        proto$2.isValid = isValid$1;
        proto$2.abs = abs;
        proto$2.add = add$1;
        proto$2.subtract = subtract$1;
        proto$2.as = as;
        proto$2.asMilliseconds = asMilliseconds;
        proto$2.asSeconds = asSeconds;
        proto$2.asMinutes = asMinutes;
        proto$2.asHours = asHours;
        proto$2.asDays = asDays;
        proto$2.asWeeks = asWeeks;
        proto$2.asMonths = asMonths;
        proto$2.asQuarters = asQuarters;
        proto$2.asYears = asYears;
        proto$2.valueOf = valueOf$1;
        proto$2._bubble = bubble;
        proto$2.clone = clone$1;
        proto$2.get = get$2;
        proto$2.milliseconds = milliseconds;
        proto$2.seconds = seconds;
        proto$2.minutes = minutes;
        proto$2.hours = hours;
        proto$2.days = days;
        proto$2.weeks = weeks;
        proto$2.months = months;
        proto$2.years = years;
        proto$2.humanize = humanize;
        proto$2.toISOString = toISOString$1;
        proto$2.toString = toISOString$1;
        proto$2.toJSON = toISOString$1;
        proto$2.locale = locale;
        proto$2.localeData = localeData;
        proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
        proto$2.lang = lang; // FORMATTING

        addFormatToken('X', 0, 0, 'unix');
        addFormatToken('x', 0, 0, 'valueOf'); // PARSING

        addRegexToken('x', matchSigned);
        addRegexToken('X', matchTimestamp);
        addParseToken('X', function (input, array, config) {
          config._d = new Date(parseFloat(input) * 1000);
        });
        addParseToken('x', function (input, array, config) {
          config._d = new Date(toInt(input));
        }); //! moment.js

        hooks.version = '2.27.0';
        setHookCallback(createLocal);
        hooks.fn = proto;
        hooks.min = min;
        hooks.max = max;
        hooks.now = now;
        hooks.utc = createUTC;
        hooks.unix = createUnix;
        hooks.months = listMonths;
        hooks.isDate = isDate;
        hooks.locale = getSetGlobalLocale;
        hooks.invalid = createInvalid;
        hooks.duration = createDuration;
        hooks.isMoment = isMoment;
        hooks.weekdays = listWeekdays;
        hooks.parseZone = createInZone;
        hooks.localeData = getLocale;
        hooks.isDuration = isDuration;
        hooks.monthsShort = listMonthsShort;
        hooks.weekdaysMin = listWeekdaysMin;
        hooks.defineLocale = defineLocale;
        hooks.updateLocale = updateLocale;
        hooks.locales = listLocales;
        hooks.weekdaysShort = listWeekdaysShort;
        hooks.normalizeUnits = normalizeUnits;
        hooks.relativeTimeRounding = getSetRelativeTimeRounding;
        hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
        hooks.calendarFormat = getCalendarFormat;
        hooks.prototype = proto; // currently HTML5 input type only supports 24-hour formats

        hooks.HTML5_FMT = {
          DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
          // <input type="datetime-local" />
          DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
          // <input type="datetime-local" step="1" />
          DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
          // <input type="datetime-local" step="0.001" />
          DATE: 'YYYY-MM-DD',
          // <input type="date" />
          TIME: 'HH:mm',
          // <input type="time" />
          TIME_SECONDS: 'HH:mm:ss',
          // <input type="time" step="1" />
          TIME_MS: 'HH:mm:ss.SSS',
          // <input type="time" step="0.001" />
          WEEK: 'GGGG-[W]WW',
          // <input type="week" />
          MONTH: 'YYYY-MM' // <input type="month" />

        };
        return hooks;
      });
      /* WEBPACK VAR INJECTION */

    }).call(this, __webpack_require__(
    /*! ./../webpack/buildin/module.js */
    "./node_modules/webpack/buildin/module.js")(module));
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/question/inputs/checkbox-input/checkbox-input.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/question/inputs/checkbox-input/checkbox-input.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsQuestionInputsCheckboxInputCheckboxInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form *ngIf=\"form\" [formGroup]=\"form\">\n  <ion-list>\n    <ion-item *ngFor=\"let option of optionsFromArray.controls; let i = index\" formArrayName=\"options\">\n      <ion-label>{{inputOptions[i].title}}</ion-label>\n      <ion-checkbox [formControlName]=\"i\" slot=\"end\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</form>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/question/inputs/inputs.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/question/inputs/inputs.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsQuestionInputsInputsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-question-simple-input (inputSubmit)=\"onSubmit($event)\"\n                           *ngIf=\"isCorrectType(questionTypes.TEXT_INPUT)\" inputType=\"text\"></app-question-simple-input>\n<app-question-simple-input (inputSubmit)=\"onSubmit($event)\"\n                           *ngIf=\"isCorrectType(questionTypes.NUMBER_INPUT)\"\n                           inputType=\"number\"></app-question-simple-input>\n\n<app-question-radio-input (inputSubmit)=\"onSubmit($event)\"\n                          *ngIf=\"isCorrectType(questionTypes.RADIO_INPUT)\"\n                          [inputOptions]=\"question.answerOptions\"></app-question-radio-input>\n<app-question-checkbox-input (inputSubmit)=\"onSubmit($event)\"\n                             *ngIf=\"isCorrectType(questionTypes.CHECK_BOX_INPUT)\"\n                             [inputOptions]=\"question.answerOptions\"></app-question-checkbox-input>\n<app-question-stars-input (inputSubmit)=\"onSubmit($event)\"\n                          *ngIf=\"isCorrectType(questionTypes.STAR_INPUT)\"\n                          [inputOptions]=\"question.answerOptions\"></app-question-stars-input>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/question/inputs/radio-input/radio-input.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/question/inputs/radio-input/radio-input.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsQuestionInputsRadioInputRadioInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form *ngIf=\"form\" [formGroup]=\"form\">\n  <ion-list>\n    <ion-radio-group formControlName=\"options\">\n      <ion-item *ngFor=\"let option of inputOptions\">\n        <ion-label>{{option.title}}</ion-label>\n        <ion-radio [value]=\"option.value\" color='secondary' slot=\"start\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/question/inputs/simple-input/simple-input.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/question/inputs/simple-input/simple-input.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsQuestionInputsSimpleInputSimpleInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (ngSubmit)=\"submitForm()\" *ngIf=\"form\" [formGroup]=\"form\" padding>\n  <ion-item padding>\n    <ion-input [type]=\"inputType\" autofocus formControlName=\"value\"></ion-input>\n  </ion-item>\n  <br>\n  <br>\n  <ion-button (click)=\"submitForm()\" *ngIf=\"isFormValid()\" color=\"secondary\" expand=\"full\" fill=\"outline\" slot=\"end\">\n    Continue\n  </ion-button>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/question/inputs/stars-input/stars-input.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/question/inputs/stars-input/stars-input.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsQuestionInputsStarsInputStarsInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list>\n  <ng-container *ngFor=\"let option of inputOptions; let i = index\">\n    <ion-button (click)=\"onIconClick(option)\" [color]=\"i <= selectedOptionIndex ? 'secondary' : 'light'\" fill=\"clear\"\n                size=\"small\">\n      <ion-icon name=\"star\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n  </ng-container>\n</ion-list>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/question/question.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/question/question.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsQuestionQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-grid *ngIf=\"question\">\n  <ion-row>\n    <ion-col class=\"ion-text-center\" padding>\n      <ion-label text-wrap> {{ question.title }}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <app-question-inputs (inputSubmit)=\"onSubmit($event)\" [questionType]=\"type\"\n                           [question]=\"question\"></app-question-inputs>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/campaign/campaign.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/campaign/campaign.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCampaignCampaignPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"background\" padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col offset-md=\"2\" offset-xs=\"1\" size-md=\"8\" size-xs=\"10\">\n        <ng-container [ngTemplateOutlet]=\"isQuestionareActive() ? Question: ThankYou\"></ng-container>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-title>©review.me <span>(1.1.1)</span></ion-title>\n</ion-footer>\n\n\n<ng-template #Question>\n  <app-question [questionSubj]=\"questionSubj\" [question]=\"activeQuestion\"\n                [type]=\"getQuestionType()\"></app-question>\n</ng-template>\n\n<ng-template #ThankYou>\n  <ion-card class=\"campaign-thank-you-message\" color=\"secondary\">\n    <ion-title color=\"primary\">\n      <div style=\"white-space: normal;\">\n        Thank you for your feedback\n      </div>\n    </ion-title>\n  </ion-card>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/module.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/module.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinModuleJs(module, exports) {
    module.exports = function (module) {
      if (!module.webpackPolyfill) {
        module.deprecate = function () {};

        module.paths = []; // module.parent = undefined by default

        if (!module.children) module.children = [];
        Object.defineProperty(module, "loaded", {
          enumerable: true,
          get: function get() {
            return module.l;
          }
        });
        Object.defineProperty(module, "id", {
          enumerable: true,
          get: function get() {
            return module.i;
          }
        });
        module.webpackPolyfill = 1;
      }

      return module;
    };
    /***/

  },

  /***/
  "./src/app/components/question/inputs/checkbox-input/checkbox-input.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/question/inputs/checkbox-input/checkbox-input.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsQuestionInputsCheckboxInputCheckboxInputComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-checkbox {\n  background: #ffffff;\n  border-width: 1px !important;\n  border-style: solid !important;\n  border-radius: 4px;\n  border-color: var(--ion-color-secondary) !important;\n  --height: 35px;\n  --width: 35px;\n  --checkmark-color: var(--ion-color-secondary-contrast);\n  --background-checked: var(--ion-color-secondary);\n  --border-color: white;\n  --border-width: 1px;\n  --border-color-checked: var(--ion-color-secondary);\n}\n\nion-label {\n  color: var(--ion-color-light) !important;\n}\n\n.item-checkbox-checked ion-label {\n  color: var(--ion-color-secondary) !important;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RqYW5sYWprb3ZpYy9Qcm9qZWN0cy9TZWJhc3RqYW5MYWprb3ZpYy9SZXZpZXcvbW9iaWxlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb24vaW5wdXRzL2NoZWNrYm94LWlucHV0L2NoZWNrYm94LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3F1ZXN0aW9uL2lucHV0cy9jaGVja2JveC1pbnB1dC9jaGVja2JveC1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7QUNDRjs7QURFQTtFQUNFLHdDQUFBO0FDQ0Y7O0FES0U7RUFDRSw0Q0FBQTtFQUNBLGlCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3F1ZXN0aW9uL2lucHV0cy9jaGVja2JveC1pbnB1dC9jaGVja2JveC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jaGVja2JveCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiAzNXB4O1xuICAtLXdpZHRoOiAzNXB4O1xuICAtLWNoZWNrbWFyay1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbn1cblxuXG4uaXRlbS1jaGVja2JveC1jaGVja2VkIHtcblxuICBpb24tbGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG4iLCJpb24tY2hlY2tib3gge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICAtLWhlaWdodDogMzVweDtcbiAgLS13aWR0aDogMzVweDtcbiAgLS1jaGVja21hcmstY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWNoZWNrYm94LWNoZWNrZWQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/question/inputs/checkbox-input/checkbox-input.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/question/inputs/checkbox-input/checkbox-input.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: CheckboxInputComponent */

  /***/
  function srcAppComponentsQuestionInputsCheckboxInputCheckboxInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxInputComponent", function () {
      return CheckboxInputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _stores_campaign_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @stores/campaign-store.service */
    "./src/app/data/stores/campaign-store.service.ts");

    var CheckboxInputComponent = /*#__PURE__*/function () {
      function CheckboxInputComponent(formBuilder, campaignStore) {
        _classCallCheck(this, CheckboxInputComponent);

        this.formBuilder = formBuilder;
        this.campaignStore = campaignStore;
        this.inputSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.inputTimeout = 2000;
      }

      _createClass(CheckboxInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.inputTimeout = this.campaignStore.currentCampaignSettings.inputTimeout;
          this.form = this.formBuilder.group({
            options: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
          });
          this.addCheckboxes();
          var controls = this.form.controls;
          controls.options.valueChanges.subscribe(function (val) {
            _this2.loadTimeout();
          });
        }
      }, {
        key: "loadTimeout",
        value: function loadTimeout() {
          var _this3 = this;

          clearTimeout(this.timer);
          this.timer = setTimeout(function () {
            _this3.submitForm(); // Add timeout mark on page

          }, this.inputTimeout);
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this4 = this;

          var _a, _b;

          var values = (_b = (_a = this.form) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.options.map(function (checked, i) {
            var _a;

            return checked ? (_a = _this4.inputOptions[i]) === null || _a === void 0 ? void 0 : _a.value : null;
          }).filter(function (v) {
            return v !== null;
          });
          this.inputSubmit.emit(values || []);
        }
      }, {
        key: "addCheckboxes",
        value: function addCheckboxes() {
          var _this5 = this;

          this.inputOptions.forEach(function () {
            _this5.optionsFromArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false));
          });
        }
      }, {
        key: "optionsFromArray",
        get: function get() {
          return this.form.controls.options;
        }
      }]);

      return CheckboxInputComponent;
    }();

    CheckboxInputComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _stores_campaign_store_service__WEBPACK_IMPORTED_MODULE_4__["CampaignStoreService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CheckboxInputComponent.prototype, "inputSubmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CheckboxInputComponent.prototype, "inputOptions", void 0);
    CheckboxInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-question-checkbox-input',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./checkbox-input.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/question/inputs/checkbox-input/checkbox-input.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./checkbox-input.component.scss */
      "./src/app/components/question/inputs/checkbox-input/checkbox-input.component.scss"))["default"]]
    })], CheckboxInputComponent);
    /***/
  },

  /***/
  "./src/app/components/question/inputs/inputs.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/components/question/inputs/inputs.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsQuestionInputsInputsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb24vaW5wdXRzL2lucHV0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/question/inputs/inputs.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/question/inputs/inputs.component.ts ***!
    \****************************************************************/

  /*! exports provided: InputsComponent */

  /***/
  function srcAppComponentsQuestionInputsInputsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputsComponent", function () {
      return InputsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _schema_question_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @schema/question-type */
    "./src/app/data/schema/question-type.ts");

    var InputsComponent = /*#__PURE__*/function () {
      function InputsComponent() {
        _classCallCheck(this, InputsComponent);

        this.inputSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.questionTypes = _schema_question_type__WEBPACK_IMPORTED_MODULE_2__["QuestionTypes"];
      }

      _createClass(InputsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(selectedValues) {
          this.inputSubmit.emit(selectedValues);
        }
      }, {
        key: "isCorrectType",
        value: function isCorrectType(type) {
          var _a;

          return ((_a = this.questionType) === null || _a === void 0 ? void 0 : _a.description) === type;
        }
      }]);

      return InputsComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], InputsComponent.prototype, "questionType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], InputsComponent.prototype, "question", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], InputsComponent.prototype, "inputSubmit", void 0);
    InputsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-question-inputs',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inputs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/question/inputs/inputs.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inputs.component.scss */
      "./src/app/components/question/inputs/inputs.component.scss"))["default"]]
    })], InputsComponent);
    /***/
  },

  /***/
  "./src/app/components/question/inputs/radio-input/radio-input.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/question/inputs/radio-input/radio-input.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsQuestionInputsRadioInputRadioInputComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-label {\n  color: var(--ion-color-light) !important;\n}\n\n.item-radio-checked {\n  background: red !important;\n}\n\n.item-radio-checked ion-label {\n  color: var(--ion-color-secondary) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RqYW5sYWprb3ZpYy9Qcm9qZWN0cy9TZWJhc3RqYW5MYWprb3ZpYy9SZXZpZXcvbW9iaWxlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb24vaW5wdXRzL3JhZGlvLWlucHV0L3JhZGlvLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3F1ZXN0aW9uL2lucHV0cy9yYWRpby1pbnB1dC9yYWRpby1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHdDQUFBO0FDQUY7O0FER0E7RUFDRSwwQkFBQTtBQ0FGOztBREVFO0VBQ0UsNENBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb24vaW5wdXRzL3JhZGlvLWlucHV0L3JhZGlvLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbiAgfVxuXG59XG4iLCJpb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1yYWRpby1jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XG59XG4uaXRlbS1yYWRpby1jaGVja2VkIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/question/inputs/radio-input/radio-input.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/question/inputs/radio-input/radio-input.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: RadioInputComponent */

  /***/
  function srcAppComponentsQuestionInputsRadioInputRadioInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RadioInputComponent", function () {
      return RadioInputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _stores_campaign_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @stores/campaign-store.service */
    "./src/app/data/stores/campaign-store.service.ts");

    var RadioInputComponent = /*#__PURE__*/function () {
      function RadioInputComponent(formBuilder, campaignStore) {
        _classCallCheck(this, RadioInputComponent);

        this.formBuilder = formBuilder;
        this.campaignStore = campaignStore;
        this.inputSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.inputTimeout = 2000;
      }

      _createClass(RadioInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.inputTimeout = this.campaignStore.currentCampaignSettings.inputTimeout;
          this.form = this.formBuilder.group({
            options: null
          });
          var controls = this.form.controls;
          controls.options.valueChanges.subscribe(function (val) {
            if (_this6.inputOptions.map(function (option) {
              return option.value;
            }).includes(val)) {
              _this6.submitForm();
            }
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this7 = this;

          if (!this.form.valid) {
            return true;
          }

          clearTimeout(this.timer);
          this.timer = setTimeout(function () {
            var _a, _b, _c;

            var selectedValues = [];
            var value = (_c = (_b = (_a = _this7.form) === null || _a === void 0 ? void 0 : _a.controls) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.value;

            if (value != null) {
              selectedValues.push(value);
            }

            _this7.inputSubmit.emit(selectedValues);
          }, this.inputTimeout);
          return true;
        }
      }]);

      return RadioInputComponent;
    }();

    RadioInputComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _stores_campaign_store_service__WEBPACK_IMPORTED_MODULE_4__["CampaignStoreService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], RadioInputComponent.prototype, "inputSubmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RadioInputComponent.prototype, "inputOptions", void 0);
    RadioInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-question-radio-input',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./radio-input.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/question/inputs/radio-input/radio-input.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./radio-input.component.scss */
      "./src/app/components/question/inputs/radio-input/radio-input.component.scss"))["default"]]
    })], RadioInputComponent);
    /***/
  },

  /***/
  "./src/app/components/question/inputs/simple-input/simple-input.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/question/inputs/simple-input/simple-input.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsQuestionInputsSimpleInputSimpleInputComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-input {\n  padding-right: 30px;\n  border-bottom: 1px solid #f1f1f1 !important;\n  color: var(--ion-color-secondary);\n  text-align: center;\n  font-weight: bold;\n}\n\nion-item {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RqYW5sYWprb3ZpYy9Qcm9qZWN0cy9TZWJhc3RqYW5MYWprb3ZpYy9SZXZpZXcvbW9iaWxlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb24vaW5wdXRzL3NpbXBsZS1pbnB1dC9zaW1wbGUtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb24vaW5wdXRzL3NpbXBsZS1pbnB1dC9zaW1wbGUtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FER0E7RUFDRSxjQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3F1ZXN0aW9uL2lucHV0cy9zaW1wbGUtaW5wdXQvc2ltcGxlLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0IHtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iLCJpb24taW5wdXQge1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/question/inputs/simple-input/simple-input.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/question/inputs/simple-input/simple-input.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: SimpleInputComponent */

  /***/
  function srcAppComponentsQuestionInputsSimpleInputSimpleInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleInputComponent", function () {
      return SimpleInputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SimpleInputComponent = /*#__PURE__*/function () {
      function SimpleInputComponent(formBuilder) {
        _classCallCheck(this, SimpleInputComponent);

        this.formBuilder = formBuilder;
        this.inputSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputType = 'text';
      }

      _createClass(SimpleInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _a, _b, _c;

          var selectedValues = [];
          var value = (_c = (_b = (_a = this.form) === null || _a === void 0 ? void 0 : _a.controls) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.value;

          if (value != null) {
            selectedValues.push(value);
          }

          this.inputSubmit.emit(selectedValues);
        }
      }, {
        key: "isFormValid",
        value: function isFormValid() {
          return this.form.valid;
        }
      }]);

      return SimpleInputComponent;
    }();

    SimpleInputComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SimpleInputComponent.prototype, "inputSubmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SimpleInputComponent.prototype, "inputType", void 0);
    SimpleInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-question-simple-input',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./simple-input.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/question/inputs/simple-input/simple-input.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./simple-input.component.scss */
      "./src/app/components/question/inputs/simple-input/simple-input.component.scss"))["default"]]
    })], SimpleInputComponent);
    /***/
  },

  /***/
  "./src/app/components/question/inputs/stars-input/stars-input.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/question/inputs/stars-input/stars-input.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsQuestionInputsStarsInputStarsInputComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-list {\n  display: table;\n  table-layout: fixed;\n  margin: 0 auto;\n}\nion-list ion-button {\n  display: table-cell;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RqYW5sYWprb3ZpYy9Qcm9qZWN0cy9TZWJhc3RqYW5MYWprb3ZpYy9SZXZpZXcvbW9iaWxlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb24vaW5wdXRzL3N0YXJzLWlucHV0L3N0YXJzLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3F1ZXN0aW9uL2lucHV0cy9zdGFycy1pbnB1dC9zdGFycy1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDRjtBRENFO0VBQ0UsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb24vaW5wdXRzL3N0YXJzLWlucHV0L3N0YXJzLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3Qge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAvL21heC13aWR0aDogMzBweDtcbiAgfVxufVxuIiwiaW9uLWxpc3Qge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5pb24tbGlzdCBpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/question/inputs/stars-input/stars-input.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/question/inputs/stars-input/stars-input.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: StarsInputComponent */

  /***/
  function srcAppComponentsQuestionInputsStarsInputStarsInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StarsInputComponent", function () {
      return StarsInputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _stores_campaign_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @stores/campaign-store.service */
    "./src/app/data/stores/campaign-store.service.ts");

    var StarsInputComponent = /*#__PURE__*/function () {
      function StarsInputComponent(campaignStore) {
        _classCallCheck(this, StarsInputComponent);

        this.campaignStore = campaignStore;
        this.inputSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputTimeout = 2000;
      }

      _createClass(StarsInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.inputTimeout = this.campaignStore.currentCampaignSettings.inputTimeout;
        }
      }, {
        key: "onIconClick",
        value: function onIconClick(option) {
          var _this8 = this;

          if (!option) {
            return true;
          }

          clearTimeout(this.timer);
          this.selectedOptionIndex = this.inputOptions.findIndex(function (opt) {
            return opt === option;
          });
          this.timer = setTimeout(function () {
            _this8.inputSubmit.emit(["".concat(option.value)]); // Add timeout mark on page

          }, this.inputTimeout);
          return true;
        }
      }]);

      return StarsInputComponent;
    }();

    StarsInputComponent.ctorParameters = function () {
      return [{
        type: _stores_campaign_store_service__WEBPACK_IMPORTED_MODULE_2__["CampaignStoreService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], StarsInputComponent.prototype, "inputSubmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StarsInputComponent.prototype, "inputOptions", void 0);
    StarsInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-question-stars-input',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./stars-input.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/question/inputs/stars-input/stars-input.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./stars-input.component.scss */
      "./src/app/components/question/inputs/stars-input/stars-input.component.scss"))["default"]]
    })], StarsInputComponent);
    /***/
  },

  /***/
  "./src/app/components/question/question.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/question/question.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsQuestionQuestionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-label {\n  color: white;\n  font-size: 1.5em;\n  line-height: 1em !important;\n}\n\nion-grid {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RqYW5sYWprb3ZpYy9Qcm9qZWN0cy9TZWJhc3RqYW5MYWprb3ZpYy9SZXZpZXcvbW9iaWxlLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDFlbSAhaW1wb3J0YW50O1xufVxuXG5pb24tZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4iLCJpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGxpbmUtaGVpZ2h0OiAxZW0gIWltcG9ydGFudDtcbn1cblxuaW9uLWdyaWQge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/question/question.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/question/question.component.ts ***!
    \***********************************************************/

  /*! exports provided: QuestionComponent */

  /***/
  function srcAppComponentsQuestionQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionComponent", function () {
      return QuestionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var QuestionComponent = /*#__PURE__*/function () {
      function QuestionComponent() {
        _classCallCheck(this, QuestionComponent);
      }

      _createClass(QuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(selectedValues) {
          var newObsValue = {
            question: this.question,
            selectedValues: selectedValues
          };
          this.questionSubj.next(newObsValue);
        }
      }]);

      return QuestionComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionComponent.prototype, "question", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionComponent.prototype, "type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionComponent.prototype, "questionSubj", void 0);
    QuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-question',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/question/question.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./question.component.scss */
      "./src/app/components/question/question.component.scss"))["default"]]
    })], QuestionComponent);
    /***/
  },

  /***/
  "./src/app/components/question/question.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/question/question.module.ts ***!
    \********************************************************/

  /*! exports provided: QuestionModule */

  /***/
  function srcAppComponentsQuestionQuestionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionModule", function () {
      return QuestionModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _inputs_simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inputs/simple-input/simple-input.component */
    "./src/app/components/question/inputs/simple-input/simple-input.component.ts");
    /* harmony import */


    var _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./inputs/inputs.component */
    "./src/app/components/question/inputs/inputs.component.ts");
    /* harmony import */


    var _question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./question.component */
    "./src/app/components/question/question.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _inputs_radio_input_radio_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./inputs/radio-input/radio-input.component */
    "./src/app/components/question/inputs/radio-input/radio-input.component.ts");
    /* harmony import */


    var _inputs_checkbox_input_checkbox_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./inputs/checkbox-input/checkbox-input.component */
    "./src/app/components/question/inputs/checkbox-input/checkbox-input.component.ts");
    /* harmony import */


    var _inputs_stars_input_stars_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./inputs/stars-input/stars-input.component */
    "./src/app/components/question/inputs/stars-input/stars-input.component.ts");

    var QuestionModule = function QuestionModule() {
      _classCallCheck(this, QuestionModule);
    };

    QuestionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_inputs_simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_3__["SimpleInputComponent"], _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_4__["InputsComponent"], _question_component__WEBPACK_IMPORTED_MODULE_5__["QuestionComponent"], _inputs_radio_input_radio_input_component__WEBPACK_IMPORTED_MODULE_8__["RadioInputComponent"], _inputs_checkbox_input_checkbox_input_component__WEBPACK_IMPORTED_MODULE_9__["CheckboxInputComponent"], _inputs_stars_input_stars_input_component__WEBPACK_IMPORTED_MODULE_10__["StarsInputComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
      exports: [_inputs_simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_3__["SimpleInputComponent"], _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_4__["InputsComponent"], _question_component__WEBPACK_IMPORTED_MODULE_5__["QuestionComponent"], _inputs_radio_input_radio_input_component__WEBPACK_IMPORTED_MODULE_8__["RadioInputComponent"], _inputs_checkbox_input_checkbox_input_component__WEBPACK_IMPORTED_MODULE_9__["CheckboxInputComponent"], _inputs_stars_input_stars_input_component__WEBPACK_IMPORTED_MODULE_10__["StarsInputComponent"]]
    })], QuestionModule);
    /***/
  },

  /***/
  "./src/app/data/schema/campaign.ts":
  /*!*****************************************!*\
    !*** ./src/app/data/schema/campaign.ts ***!
    \*****************************************/

  /*! exports provided: Campaign */

  /***/
  function srcAppDataSchemaCampaignTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Campaign", function () {
      return Campaign;
    });
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./question */
    "./src/app/data/schema/question.ts");

    var Campaign = function Campaign(data) {
      _classCallCheck(this, Campaign);

      var _a;

      this.questions = [];
      Object.assign(this, data);
      this.createdAt = moment__WEBPACK_IMPORTED_MODULE_0__(data === null || data === void 0 ? void 0 : data.createdAt);
      this.updatedAt = moment__WEBPACK_IMPORTED_MODULE_0__(data === null || data === void 0 ? void 0 : data.updatedAt);

      if (data === null || data === void 0 ? void 0 : data.questions) {
        this.questions = (_a = data === null || data === void 0 ? void 0 : data.questions) === null || _a === void 0 ? void 0 : _a.map(function (questionParams) {
          return new _question__WEBPACK_IMPORTED_MODULE_1__["Question"](questionParams);
        });
      }
    };
    /***/

  },

  /***/
  "./src/app/data/schema/question-option.ts":
  /*!************************************************!*\
    !*** ./src/app/data/schema/question-option.ts ***!
    \************************************************/

  /*! exports provided: QuestionOption */

  /***/
  function srcAppDataSchemaQuestionOptionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionOption", function () {
      return QuestionOption;
    });

    var QuestionOption = function QuestionOption(data) {
      _classCallCheck(this, QuestionOption);

      Object.assign(this, data);
    };
    /***/

  },

  /***/
  "./src/app/data/schema/question-type.ts":
  /*!**********************************************!*\
    !*** ./src/app/data/schema/question-type.ts ***!
    \**********************************************/

  /*! exports provided: QuestionType, QuestionTypes */

  /***/
  function srcAppDataSchemaQuestionTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionType", function () {
      return QuestionType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionTypes", function () {
      return QuestionTypes;
    });

    var QuestionType = function QuestionType(data) {
      _classCallCheck(this, QuestionType);

      Object.assign(this, data);
    };

    var QuestionTypes;

    (function (QuestionTypes) {
      QuestionTypes["TEXT_INPUT"] = "TEXT_INPUT";
      QuestionTypes["NUMBER_INPUT"] = "NUMBER_INPUT";
      QuestionTypes["STAR_INPUT"] = "STAR_INPUT";
      QuestionTypes["RANGE_INPUT"] = "RANGE_INPUT";
      QuestionTypes["CHECK_BOX_INPUT"] = "CHECK_BOX_INPUT";
      QuestionTypes["RADIO_INPUT"] = "RADIO_INPUT";
    })(QuestionTypes || (QuestionTypes = {}));
    /***/

  },

  /***/
  "./src/app/data/schema/question.ts":
  /*!*****************************************!*\
    !*** ./src/app/data/schema/question.ts ***!
    \*****************************************/

  /*! exports provided: Question */

  /***/
  function srcAppDataSchemaQuestionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Question", function () {
      return Question;
    });
    /* harmony import */


    var _question_option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./question-option */
    "./src/app/data/schema/question-option.ts");

    var Question = function Question(data) {
      _classCallCheck(this, Question);

      this.optional = false;
      this.answerOptions = [];
      Object.assign(this, data);

      if (data === null || data === void 0 ? void 0 : data.answerOptions) {
        this.answerOptions = data === null || data === void 0 ? void 0 : data.answerOptions.map(function (optionParams) {
          return new _question_option__WEBPACK_IMPORTED_MODULE_0__["QuestionOption"](optionParams);
        });
      }
    }; // Question:
    // /**
    //  *
    //  * Question: What is your name:
    //  * Clear text input
    //  *
    //  * Question: Your geneder:
    //  * Radio Button: Male, Female, Other
    //  *
    //  * Question: How old are you:
    //  * Number input: 16
    //  *
    //  * Question: Where are you from:
    //  * Drop Down list: All options from the list
    //  *
    //  * Question: What do you prefer?
    //  * Check box input
    //  *
    //  *
    //  * - Clear text
    //  * - Radio Button
    //  * - Number input
    //  * - email input
    //  * - DropDown List
    //  * - Check box
    //  * - rating stars
    //  * - meter
    //  /
    // // TEXT Input
    // // Generating question
    // const Question1Load = new Question({questionId: 'question1', title: 'What is your name?', active: true, answerTypeId: 'TextInput'});
    //
    // // Report printing
    // const Question1 = new Question({questionId: 'question1', title: 'What is your name?', active: true, answerTypeId: 'TextInput'});
    // const question1Answer1 = new QuestionAnswer({questionAnswerId: 'answer1', questionId: 'question1', value: 'Sebastjan Lajkovic'});
    //
    //
    // // NUMBER Input
    // // Generating question
    // const Question2Load = new Question({questionId: 'question2', title: 'How old are you?', active: true, answerTypeId: 'NumberInput'});
    //
    // // Report printing
    // const Question2Report = new Question({questionId: 'question2', title: 'How old are you?', active: true, answerTypeId: 'NumberInput'});
    // const question2Answer1 = new QuestionAnswer({questionAnswerId: 'answer1', questionId: 'question2', value: '33'});
    //
    // // RADIO input
    // // Generating question
    // const Question3Load = new Question({questionId: 'question3', title: 'Your gender??', active: true, answerTypeId: 'RadioButton'});
    // const question3Option1 = new QuestionOption({questionId: 'question3', title: 'Male', value: 'male'});
    // const question3Option2 = new QuestionOption({questionId: 'question3', title: 'Female', value: 'female'});
    // const question3Option3 = new QuestionOption({questionId: 'question3', title: 'Other', value: 'other'});
    //
    // // Report printing
    // const Question3 = new Question({questionId: 'question3', title: 'Your gender??', active: true, answerTypeId: 'RadioButton'});
    // const question3Answer1 = new QuestionAnswer({questionAnswerId: 'answer1', questionId: 'question3', value: 'male'});
    // // Question3.addAnswers([question3Answer1, question3Answer2, question3Answer3]);
    //
    //
    // // STARS input
    // // Generating question
    // const question4Load = new Question({questionId: 'question4', title: 'How would you rate our service?', active: true, answerTypeId: 'Stars'});
    // const question4Option1 = new QuestionOption({questionId: 'question4', title: 'star', value: '1'});
    // const question4Option2 = new QuestionOption({questionId: 'question4', title: 'star', value: '2'});
    // const question4Option3 = new QuestionOption({questionId: 'question4', title: 'star', value: '3'});
    // const question4Option4 = new QuestionOption({questionId: 'question4', title: 'star', value: '4'});
    // const question4Option5 = new QuestionOption({questionId: 'question4', title: 'star', value: '5'});
    //
    // // Report printing
    //
    // const question4 = new Question({questionId: 'question4', title: 'How would you rate our service?', active: true, answerTypeId: 'Stars'});
    // const question4Answer3 = new QuestionAnswer({questionAnswerId: 'answer3', questionId: 'question4', value: '3'});
    //
    // // Generating question
    //
    // // Report printing
    // const question5 = new Question({questionId: 'question5', title: 'How would you rate our service?', active: true, answerTypeId: 'Barometer'});
    // const question5Answer5 = new QuestionAnswer({questionAnswerId: 'answer5', questionId: 'question5', value: '5'});
    //
    //
    // // Generating question
    //
    // // Report printing
    // const question6 = new Question({questionId: 'question6', title: 'From which region are you?', active: true, answerTypeId: 'country_regions'});
    // const question6Answer2 = new QuestionAnswer({questionAnswerId: 'answer2', questionId: 'question6', value: 'osrednja slovenija'});
    //
    //

    /***/

  },

  /***/
  "./src/app/data/schema/review.ts":
  /*!***************************************!*\
    !*** ./src/app/data/schema/review.ts ***!
    \***************************************/

  /*! exports provided: Review, ReviewQuestionResponse */

  /***/
  function srcAppDataSchemaReviewTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Review", function () {
      return Review;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewQuestionResponse", function () {
      return ReviewQuestionResponse;
    });
    /* harmony import */


    var _capacitor_core_dist_esm_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @capacitor/core/dist/esm/util */
    "./node_modules/@capacitor/core/dist/esm/util.js");

    var Review = function Review(data) {
      _classCallCheck(this, Review);

      Object.assign(this, data);

      if (!this.reviewId) {
        this.reviewId = Object(_capacitor_core_dist_esm_util__WEBPACK_IMPORTED_MODULE_0__["uuid4"])();
      }

      this.questions = data === null || data === void 0 ? void 0 : data.questions.map(function (questionData) {
        return new ReviewQuestionResponse(questionData);
      });
    };

    var ReviewQuestionResponse = function ReviewQuestionResponse(data) {
      _classCallCheck(this, ReviewQuestionResponse);

      Object.assign(this, data);
    };
    /***/

  },

  /***/
  "./src/app/data/services/campaign.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/data/services/campaign.service.ts ***!
    \***************************************************/

  /*! exports provided: CampaignService, CampaignLocalStorageService */

  /***/
  function srcAppDataServicesCampaignServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CampaignService", function () {
      return CampaignService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CampaignLocalStorageService", function () {
      return CampaignLocalStorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _schema_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @schema/campaign */
    "./src/app/data/schema/campaign.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var campaignData = {
      campaignId: 'b610ab9a-4b70-4f60-81d0-dbe87c205914',
      organizationId: 'c43d1bab-1e2a-4be2-844f-6fc04e4bc2cb',
      title: 'In store customer review',
      active: true,
      formTimeout: 15000,
      inputTimeout: 2000,
      succesfullSubmitTimeout: 10000,
      createdAt: moment__WEBPACK_IMPORTED_MODULE_6__().toISOString(),
      updatedAt: moment__WEBPACK_IMPORTED_MODULE_6__().toISOString(),
      questions: [{
        questionId: 'afb50364-17ba-4b26-ba50-5d7c952c7656',
        title: 'What is your name?',
        active: true,
        questionTypeId: '464fdee8-19f6-4c88-8f00-efb3ced95412',
        answerOptions: []
      }, {
        questionId: '56c01e97-3713-4aa8-9420-a5b079657f1f',
        title: 'How old are you?',
        active: true,
        questionTypeId: '8a831bec-84ec-4bac-996b-8e1dba473bcf',
        answerOptions: []
      }, {
        questionId: 'af76d988-2dd5-4519-b9ac-21e83c6be8db',
        title: 'Did you like our service?',
        active: true,
        questionTypeId: '84e55c65-b939-4eb7-a68b-a85dd2921b52',
        answerOptions: [{
          title: '1',
          value: '1'
        }, {
          title: '2',
          value: '2'
        }, {
          title: '3',
          value: '3'
        }, {
          title: '4',
          value: '4'
        }, {
          title: '5',
          value: '5'
        }]
      }, // {
      //     questionId: '8d7026e3-1b05-4e61-97db-615d0f59b83c',
      //     title: 'Where are you from?',
      //     active: true,
      //     questionTypeId: '3d56d15d-8fb4-4446-ad5b-7ca56c806d08', // DropDown input
      //     answerOptions: [
      //         { title: 'Osrednja slovenija', value: 'Osrednja slovenija' },
      //         { title: 'Primorska', value: 'Primorska' },
      //         { title: 'Gorenjska', value: 'Gorenjska' },
      //         { title: 'Dolenjska', value: 'Dolenjska' }
      //     ]
      // },
      {
        questionId: '5bcd1eed-375c-4e88-95fd-d94265a3888a',
        title: 'Your gender?',
        active: true,
        questionTypeId: 'e2448c16-1dc2-4973-b4ac-08f7ad2eb302',
        answerOptions: [{
          title: 'Male',
          value: 'Male'
        }, {
          title: 'Female',
          value: 'Female'
        }, {
          title: 'Other',
          value: 'Other'
        }]
      }, {
        questionId: 'b4b397e8-8df6-4a0f-92b5-152313d0c12e',
        title: 'What is important for you?',
        active: true,
        questionTypeId: '5e4b2ebd-cbca-48a8-b9e5-0ff2bb5f2ed3',
        answerOptions: [{
          title: 'Cevlji',
          value: 'Cevlji'
        }, {
          title: 'Hlace',
          value: 'Hlace'
        }, {
          title: 'Srajce',
          value: 'Srajce'
        }, {
          title: 'Spodje perilo',
          value: 'Spodje perilo'
        }]
      }]
    };

    var CampaignService = /*#__PURE__*/function () {
      function CampaignService(http) {
        _classCallCheck(this, CampaignService);

        this.http = http;
      }
      /**
       * Reads campaign Settings from API
       */


      _createClass(CampaignService, [{
        key: "readCampaignSettings",
        value: function readCampaignSettings() {
          // const url = 'device/campaign';
          // return this.http.get<Campaign>(url);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(campaignData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (campaign) {
            return new _schema_campaign__WEBPACK_IMPORTED_MODULE_3__["Campaign"](campaign);
          }));
        }
        /**
         * Submits Campaign answers to BE - API
         * @param data Data which includes all answers.
         */

      }, {
        key: "submitCampaignAnswers",
        value: function submitCampaignAnswers(data) {
          var url = 'device/campaign/send-answers';
          return this.http.post(url, data);
        }
      }]);

      return CampaignService;
    }();

    CampaignService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    CampaignService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CampaignService);

    var CampaignLocalStorageService = /*#__PURE__*/function () {
      function CampaignLocalStorageService() {
        _classCallCheck(this, CampaignLocalStorageService);
      }
      /**
       * Reads campaign information from local storage
       */


      _createClass(CampaignLocalStorageService, [{
        key: "readCampaign",
        value: function readCampaign() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var campaignJSON, campaignObj;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage.get({
                      key: 'campaign'
                    });

                  case 2:
                    campaignJSON = _context.sent;
                    campaignObj = JSON.parse(campaignJSON.value);
                    return _context.abrupt("return", new _schema_campaign__WEBPACK_IMPORTED_MODULE_3__["Campaign"](campaignObj));

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
        /**
         * Writes campaign information to local storage (CACHE)
         * @param campaign Campaign object which needs to be stored
         */

      }, {
        key: "writeCampaign",
        value: function writeCampaign(campaign) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage.set({
                      key: 'campaign',
                      value: JSON.stringify(campaign)
                    });

                  case 2:
                    return _context2.abrupt("return", _context2.sent);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }]);

      return CampaignLocalStorageService;
    }();

    CampaignLocalStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CampaignLocalStorageService);
    /***/
  },

  /***/
  "./src/app/data/services/question-type.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/data/services/question-type.service.ts ***!
    \********************************************************/

  /*! exports provided: QuestionTypeService, QuestionTypeLocalStorageService */

  /***/
  function srcAppDataServicesQuestionTypeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionTypeService", function () {
      return QuestionTypeService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionTypeLocalStorageService", function () {
      return QuestionTypeLocalStorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _schema_question_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @schema/question-type */
    "./src/app/data/schema/question-type.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var QuestionTypeService = /*#__PURE__*/function () {
      function QuestionTypeService(http) {
        _classCallCheck(this, QuestionTypeService);

        this.http = http;
      }
      /**
       * Reads Question types from API
       */


      _createClass(QuestionTypeService, [{
        key: "loadTypes",
        value: function loadTypes() {
          var url = "question-types"; // return this.http.get<QuestionType[]>(url);

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([{
            questionTypeId: '464fdee8-19f6-4c88-8f00-efb3ced95412',
            description: 'TEXT_INPUT'
          }, {
            questionTypeId: '8a831bec-84ec-4bac-996b-8e1dba473bcf',
            description: 'NUMBER_INPUT'
          }, {
            questionTypeId: '84e55c65-b939-4eb7-a68b-a85dd2921b52',
            description: 'STAR_INPUT'
          }, {
            questionTypeId: '9ac76f7f-2f53-4d5d-9498-e5a81957d2ba',
            description: 'RANGE_INPUT'
          }, {
            questionTypeId: '5e4b2ebd-cbca-48a8-b9e5-0ff2bb5f2ed3',
            description: 'CHECK_BOX_INPUT'
          }, {
            questionTypeId: 'e2448c16-1dc2-4973-b4ac-08f7ad2eb302',
            description: 'RADIO_INPUT'
          }]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (questionTypes) {
            return questionTypes.map(function (questionType) {
              return new _schema_question_type__WEBPACK_IMPORTED_MODULE_3__["QuestionType"](questionType);
            });
          }));
        }
      }]);

      return QuestionTypeService;
    }();

    QuestionTypeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }];
    };

    QuestionTypeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuestionTypeService);

    var QuestionTypeLocalStorageService = /*#__PURE__*/function () {
      function QuestionTypeLocalStorageService() {
        _classCallCheck(this, QuestionTypeLocalStorageService);
      }
      /**
       * Reads an array of Reviews from local storage
       */


      _createClass(QuestionTypeLocalStorageService, [{
        key: "read",
        value: function read() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var typesJSON;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage.get({
                      key: 'question_types'
                    });

                  case 2:
                    typesJSON = _context3.sent;
                    return _context3.abrupt("return", JSON.parse(typesJSON.value).map(function (obj) {
                      return new _schema_question_type__WEBPACK_IMPORTED_MODULE_3__["QuestionType"](obj);
                    }));

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
        /**
         * Writes an array of QuestionTypes to local storage (CACHE)
         * @param data QuestionType array which needs to be stored
         */

      }, {
        key: "write",
        value: function write(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage.set({
                      key: 'question_types',
                      value: JSON.stringify(data)
                    });

                  case 2:
                    return _context4.abrupt("return", _context4.sent);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }]);

      return QuestionTypeLocalStorageService;
    }();

    QuestionTypeLocalStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuestionTypeLocalStorageService);
    /***/
  },

  /***/
  "./src/app/data/services/review.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/data/services/review.service.ts ***!
    \*************************************************/

  /*! exports provided: ReviewService, ReviewLocalStorageService */

  /***/
  function srcAppDataServicesReviewServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewService", function () {
      return ReviewService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewLocalStorageService", function () {
      return ReviewLocalStorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _schema_review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @schema/review */
    "./src/app/data/schema/review.ts");

    var ReviewService = /*#__PURE__*/function () {
      function ReviewService(http) {
        _classCallCheck(this, ReviewService);

        this.http = http;
      }

      _createClass(ReviewService, [{
        key: "submitReview",
        value: function submitReview(answer) {
          var url = "reviews";
          return this.http.post(url, answer);
        }
      }]);

      return ReviewService;
    }();

    ReviewService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ReviewService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ReviewService);

    var ReviewLocalStorageService = /*#__PURE__*/function () {
      function ReviewLocalStorageService() {
        _classCallCheck(this, ReviewLocalStorageService);
      }
      /**
       * Reads an array of Reviews from local storage
       */


      _createClass(ReviewLocalStorageService, [{
        key: "read",
        value: function read() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var reviewJSON;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage.get({
                      key: 'reviews'
                    });

                  case 2:
                    reviewJSON = _context5.sent;
                    return _context5.abrupt("return", JSON.parse(reviewJSON.value).map(function (reviewObj) {
                      return new _schema_review__WEBPACK_IMPORTED_MODULE_4__["Review"](reviewObj);
                    }));

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));
        }
        /**
         * Writes an array of Reviews to local storage (CACHE)
         * @param data Reviews array which needs to be stored
         */

      }, {
        key: "write",
        value: function write(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage.set({
                      key: 'reviews',
                      value: JSON.stringify(data)
                    });

                  case 2:
                    return _context6.abrupt("return", _context6.sent);

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6);
          }));
        }
      }]);

      return ReviewLocalStorageService;
    }();

    ReviewLocalStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ReviewLocalStorageService);
    /***/
  },

  /***/
  "./src/app/data/stores/campaign-store.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/data/stores/campaign-store.service.ts ***!
    \*******************************************************/

  /*! exports provided: CampaignStoreService */

  /***/
  function srcAppDataStoresCampaignStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CampaignStoreService", function () {
      return CampaignStoreService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./store.service */
    "./src/app/data/stores/store.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _schema_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../schema/campaign */
    "./src/app/data/schema/campaign.ts");
    /* harmony import */


    var _services_campaign_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @services/campaign.service */
    "./src/app/data/services/campaign.service.ts");

    var CampaignStoreService = /*#__PURE__*/function (_store_service__WEBPA) {
      _inherits(CampaignStoreService, _store_service__WEBPA);

      var _super2 = _createSuper(CampaignStoreService);

      function CampaignStoreService(apiService, storageService) {
        var _this9;

        _classCallCheck(this, CampaignStoreService);

        _this9 = _super2.call(this);
        _this9.apiService = apiService;
        _this9.storageService = storageService;
        _this9.currentCampaignSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        _this9.latestCampaignSettingsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        _this9.currentCampaignSettings$ = _this9.currentCampaignSubject.asObservable();
        _this9.latestCampaignSettings$ = _this9.latestCampaignSettingsSubject.asObservable();

        _this9.latestCampaignSettings$.subscribe(function (campaign) {
          _this9.storeCampaignSettingsToCache();
        });

        return _this9;
      }

      _createClass(CampaignStoreService, [{
        key: "storeCampaignSettingsToCache",

        /**
         * Stores latest campaign information to Local Storage
         */
        value: function storeCampaignSettingsToCache() {
          this.storageService.writeCampaign(this.latestCampaignSettings);
        }
        /**
         * Updates current campaign settings with the latest loaded campaign Settings
         */

      }, {
        key: "syncCampaignSettings",
        value: function syncCampaignSettings() {
          this.currentCampaignSettings = this.latestCampaignSettings;
        }
        /**
         * Fetches Campaign data first from local Storage and then it gathers information from API.
         */

      }, {
        key: "fetchCampaign",
        value: function fetchCampaign() {
          var _this10 = this;

          return this.loadCampaignFromCache()["finally"](function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.fetchCampaignFromAPI();

                    case 2:
                      return _context7.abrupt("return", _context7.sent);

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          });
        }
        /**
         * Loads Cached Campaign information from LocalStorage
         */

      }, {
        key: "loadCampaignFromCache",
        value: function loadCampaignFromCache() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this11 = this;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.storageService.readCampaign().then(function (localSettings) {
                      if (!(localSettings instanceof _schema_campaign__WEBPACK_IMPORTED_MODULE_4__["Campaign"])) {
                        return;
                      } // If we don't have an active campaign yet we update it with gathered campaign information


                      if (!_this11.currentCampaignSettings) {
                        _this11.currentCampaignSettings = localSettings;
                      } // If Latest campaign settings are not yet loaded  we update it with gathered campaign information


                      if (!_this11.latestCampaignSettings) {
                        _this11.latestCampaignSettings = localSettings;
                      }
                    });

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
        /**
         * Fetches Campaign information from API.
         */

      }, {
        key: "fetchCampaignFromAPI",
        value: function fetchCampaignFromAPI() {
          var _this12 = this;

          this.apiService.readCampaignSettings().subscribe(function (apiSettings) {
            if (!(apiSettings instanceof _schema_campaign__WEBPACK_IMPORTED_MODULE_4__["Campaign"])) {
              return;
            } // If we don't have an active campaign yet we update it with API Campaign


            if (!_this12.currentCampaignSettings) {
              _this12.currentCampaignSettings = apiSettings;
            } // If we already have an active campaign then we update latestCampaign information with API campaign


            if (!_this12.latestCampaignSettings) {
              _this12.latestCampaignSettings = apiSettings;
            }
          });
        }
      }, {
        key: "currentCampaignSettings",
        get: function get() {
          return this.currentCampaignSubject.getValue();
        },
        set: function set(campaign) {
          this.currentCampaignSubject.next(campaign);
        }
      }, {
        key: "latestCampaignSettings",
        get: function get() {
          return this.latestCampaignSettingsSubject.getValue();
        },
        set: function set(campaign) {
          this.latestCampaignSettingsSubject.next(campaign);
        }
      }]);

      return CampaignStoreService;
    }(_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]);

    CampaignStoreService.ctorParameters = function () {
      return [{
        type: _services_campaign_service__WEBPACK_IMPORTED_MODULE_5__["CampaignService"]
      }, {
        type: _services_campaign_service__WEBPACK_IMPORTED_MODULE_5__["CampaignLocalStorageService"]
      }];
    };

    CampaignStoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CampaignStoreService);
    /***/
  },

  /***/
  "./src/app/data/stores/question-type-store.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/data/stores/question-type-store.service.ts ***!
    \************************************************************/

  /*! exports provided: QuestionTypeStoreService */

  /***/
  function srcAppDataStoresQuestionTypeStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionTypeStoreService", function () {
      return QuestionTypeStoreService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./store.service */
    "./src/app/data/stores/store.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_question_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @services/question-type.service */
    "./src/app/data/services/question-type.service.ts");

    var QuestionTypeStoreService = /*#__PURE__*/function (_store_service__WEBPA2) {
      _inherits(QuestionTypeStoreService, _store_service__WEBPA2);

      var _super3 = _createSuper(QuestionTypeStoreService);

      function QuestionTypeStoreService(apiService, storageService) {
        var _this13;

        _classCallCheck(this, QuestionTypeStoreService);

        _this13 = _super3.call(this);
        _this13.apiService = apiService;
        _this13.storageService = storageService;
        _this13.typesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        _this13.types$ = _this13.typesSubject.asObservable();

        _this13.types$.subscribe(function () {
          _this13.storeTypesToLocalStorage();
        });

        return _this13;
      }

      _createClass(QuestionTypeStoreService, [{
        key: "fetchTypes",
        value: function fetchTypes() {
          var _this14 = this;

          return this.fetchTypesFromLocalStorage()["finally"](function () {
            _this14.fetchTypesFromAPI().then();
          });
        }
      }, {
        key: "fetchTypesFromLocalStorage",
        value: function fetchTypesFromLocalStorage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var types;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.storageService.read();

                  case 2:
                    types = _context9.sent;

                    if (this.types.length === 0) {
                      this.types = types;
                    }

                    return _context9.abrupt("return", types);

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "fetchTypesFromAPI",
        value: function fetchTypesFromAPI() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var types;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.apiService.loadTypes().toPromise();

                  case 2:
                    types = _context10.sent;

                    if (JSON.stringify(types) != JSON.stringify(this.types)) {
                      this.types = types;
                    }

                    return _context10.abrupt("return", types);

                  case 5:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "storeTypesToLocalStorage",
        value: function storeTypesToLocalStorage() {
          return this.storageService.write(this.types).then();
        }
      }, {
        key: "types",
        get: function get() {
          return this.typesSubject.getValue();
        },
        set: function set(types) {
          this.typesSubject.next(types);
        }
      }]);

      return QuestionTypeStoreService;
    }(_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]);

    QuestionTypeStoreService.ctorParameters = function () {
      return [{
        type: _services_question_type_service__WEBPACK_IMPORTED_MODULE_4__["QuestionTypeService"]
      }, {
        type: _services_question_type_service__WEBPACK_IMPORTED_MODULE_4__["QuestionTypeLocalStorageService"]
      }];
    };

    QuestionTypeStoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuestionTypeStoreService);
    /***/
  },

  /***/
  "./src/app/data/stores/review-store.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/data/stores/review-store.service.ts ***!
    \*****************************************************/

  /*! exports provided: ReviewStoreService */

  /***/
  function srcAppDataStoresReviewStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewStoreService", function () {
      return ReviewStoreService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./store.service */
    "./src/app/data/stores/store.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _schema_review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @schema/review */
    "./src/app/data/schema/review.ts");
    /* harmony import */


    var _services_review_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @services/review.service */
    "./src/app/data/services/review.service.ts");

    var ReviewStoreService = /*#__PURE__*/function (_store_service__WEBPA3) {
      _inherits(ReviewStoreService, _store_service__WEBPA3);

      var _super4 = _createSuper(ReviewStoreService);

      function ReviewStoreService(apiService, storageService) {
        var _this15;

        _classCallCheck(this, ReviewStoreService);

        _this15 = _super4.call(this);
        _this15.apiService = apiService;
        _this15.storageService = storageService;
        _this15.reviewsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        _this15.reviews$ = _this15.reviewsSubject.asObservable();

        _this15.reviews$.subscribe(function (answers) {
          _this15.storeReviewsToLocalStorage()["finally"](function () {
            _this15.storeLastReviewToAPI();
          });
        });

        _this15.fetchReviewsFromLocalStorage();

        return _this15;
      }

      _createClass(ReviewStoreService, [{
        key: "addReview",

        /**
         * Adds review to an existing array of reviews
         * @param review Review object which must be appended to array
         */
        value: function addReview(review) {
          var reviewsClone = _toConsumableArray(this.reviews);

          reviewsClone.push(review);
          this.reviews = reviewsClone;
        }
        /**
         * Removes Review from an existing array of reviews
         * @param reviewId reviewId based on which we filter.
         */

      }, {
        key: "removeReview",
        value: function removeReview(reviewId) {
          this.reviews = this.reviews.filter(function (review) {
            return review.reviewId !== reviewId;
          });
        }
      }, {
        key: "submitReview",
        value: function submitReview(review) {
          this.addReview(review);
        }
      }, {
        key: "storeReviewsToLocalStorage",
        value: function storeReviewsToLocalStorage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.storageService.write(this.reviews);

                  case 2:
                    return _context11.abrupt("return", _context11.sent);

                  case 3:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "storeLastReviewToAPI",
        value: function storeLastReviewToAPI() {
          var _this16 = this;

          var review = this.reviews[this.reviews.length - 1];

          if (review instanceof _schema_review__WEBPACK_IMPORTED_MODULE_4__["Review"]) {
            this.apiService.submitReview(review).subscribe(function () {
              _this16.removeReview(review.reviewId);
            });
          }
        }
      }, {
        key: "fetchReviewsFromLocalStorage",
        value: function fetchReviewsFromLocalStorage() {
          var _this17 = this;

          this.storageService.read().then(function (reviews) {
            _this17.reviews = reviews;
          });
        }
      }, {
        key: "reviews",
        get: function get() {
          return this.reviewsSubject.getValue();
        },
        set: function set(reviews) {
          this.reviewsSubject.next(reviews);
        }
      }]);

      return ReviewStoreService;
    }(_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]);

    ReviewStoreService.ctorParameters = function () {
      return [{
        type: _services_review_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"]
      }, {
        type: _services_review_service__WEBPACK_IMPORTED_MODULE_5__["ReviewLocalStorageService"]
      }];
    };

    ReviewStoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ReviewStoreService);
    /***/
  },

  /***/
  "./src/app/data/stores/store.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/data/stores/store.service.ts ***!
    \**********************************************/

  /*! exports provided: StoreService */

  /***/
  function srcAppDataStoresStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreService", function () {
      return StoreService;
    }); // Base Service for all sub-services


    var StoreService = function StoreService() {
      _classCallCheck(this, StoreService);
    };
    /***/

  },

  /***/
  "./src/app/pages/campaign/campaign-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/campaign/campaign-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CampaignPageRoutingModule */

  /***/
  function srcAppPagesCampaignCampaignRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CampaignPageRoutingModule", function () {
      return CampaignPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _campaign_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./campaign.page */
    "./src/app/pages/campaign/campaign.page.ts");

    var routes = [{
      path: '',
      component: _campaign_page__WEBPACK_IMPORTED_MODULE_3__["CampaignPage"]
    }];

    var CampaignPageRoutingModule = function CampaignPageRoutingModule() {
      _classCallCheck(this, CampaignPageRoutingModule);
    };

    CampaignPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CampaignPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/campaign/campaign.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/campaign/campaign.module.ts ***!
    \***************************************************/

  /*! exports provided: CampaignPageModule */

  /***/
  function srcAppPagesCampaignCampaignModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CampaignPageModule", function () {
      return CampaignPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _campaign_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./campaign-routing.module */
    "./src/app/pages/campaign/campaign-routing.module.ts");
    /* harmony import */


    var _campaign_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./campaign.page */
    "./src/app/pages/campaign/campaign.page.ts");
    /* harmony import */


    var _components_question_question_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/question/question.module */
    "./src/app/components/question/question.module.ts");

    var CampaignPageModule = function CampaignPageModule() {
      _classCallCheck(this, CampaignPageModule);
    };

    CampaignPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _campaign_routing_module__WEBPACK_IMPORTED_MODULE_5__["CampaignPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _components_question_question_module__WEBPACK_IMPORTED_MODULE_7__["QuestionModule"]],
      declarations: [_campaign_page__WEBPACK_IMPORTED_MODULE_6__["CampaignPage"]]
    })], CampaignPageModule);
    /***/
  },

  /***/
  "./src/app/pages/campaign/campaign.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/campaign/campaign.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCampaignCampaignPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen and (orientation: portrait) {\n  ion-content.background {\n    --background: url(\"/assets/stars.png\") var(--ion-color-primary) repeat-x left bottom / 40% auto;\n  }\n}\n@media screen and (orientation: landscape) {\n  ion-content.background {\n    --background: url(\"/assets/stars.png\") var(--ion-color-primary) repeat-x left bottom / 15% auto;\n  }\n}\nion-footer, ion-content {\n  --ion-background-color: var(--ion-color-primary);\n  background-color: var(--ion-color-secondary);\n}\nion-footer ion-title {\n  font-size: 1em;\n  padding: 0.2em;\n  text-align: center;\n}\nion-footer ion-title span {\n  font-weight: normal;\n}\n.campaign-thank-you-message {\n  margin-top: 25%;\n  padding: 25px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RqYW5sYWprb3ZpYy9Qcm9qZWN0cy9TZWJhc3RqYW5MYWprb3ZpYy9SZXZpZXcvbW9iaWxlLWFwcC9zcmMvYXBwL3BhZ2VzL2NhbXBhaWduL2NhbXBhaWduLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FtcGFpZ24vY2FtcGFpZ24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBS0k7SUFDRSwrRkFBQTtFQ05KO0FBQ0Y7QURVQTtFQUtJO0lBQ0UsK0ZBQUE7RUNaSjtBQUNGO0FEaUJBO0VBQ0UsZ0RBQUE7RUFDQSw0Q0FBQTtBQ2ZGO0FEb0JFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2pCSjtBRG1CSTtFQUNFLG1CQUFBO0FDakJOO0FEc0JBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ25CRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbXBhaWduL2NhbXBhaWduLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICBpb24tY29udGVudCB7XG4gICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmLmJhY2tncm91bmQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvc3RhcnMucG5nJykgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIHJlcGVhdC14IGxlZnQgYm90dG9tIC8gNDAlIGF1dG87XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIC8vcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJi5iYWNrZ3JvdW5kIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL3N0YXJzLnBuZycpIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSByZXBlYXQteCBsZWZ0IGJvdHRvbSAvIDE1JSBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG5cbmlvbi1mb290ZXIsIGlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuXG5pb24tZm9vdGVyIHtcbiAgaW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiAwLjJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuICB9XG59XG5cbi5jYW1wYWlnbi10aGFuay15b3UtbWVzc2FnZSB7XG4gIG1hcmdpbi10b3A6IDI1JTtcbiAgcGFkZGluZzogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICBpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc3RhcnMucG5nXCIpIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSByZXBlYXQteCBsZWZ0IGJvdHRvbSAvIDQwJSBhdXRvO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICBpb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc3RhcnMucG5nXCIpIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSByZXBlYXQteCBsZWZ0IGJvdHRvbSAvIDE1JSBhdXRvO1xuICB9XG59XG5pb24tZm9vdGVyLCBpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDAuMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tZm9vdGVyIGlvbi10aXRsZSBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmNhbXBhaWduLXRoYW5rLXlvdS1tZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogMjUlO1xuICBwYWRkaW5nOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/campaign/campaign.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/campaign/campaign.page.ts ***!
    \*************************************************/

  /*! exports provided: CampaignPage */

  /***/
  function srcAppPagesCampaignCampaignPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CampaignPage", function () {
      return CampaignPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _stores_campaign_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @stores/campaign-store.service */
    "./src/app/data/stores/campaign-store.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _stores_question_type_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @stores/question-type-store.service */
    "./src/app/data/stores/question-type-store.service.ts");
    /* harmony import */


    var _schema_review__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @schema/review */
    "./src/app/data/schema/review.ts");
    /* harmony import */


    var _stores_review_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @stores/review-store.service */
    "./src/app/data/stores/review-store.service.ts");

    var CampaignPage = /*#__PURE__*/function () {
      function CampaignPage(campaignStore, questionTypeStore, reviewStore) {
        _classCallCheck(this, CampaignPage);

        this.campaignStore = campaignStore;
        this.questionTypeStore = questionTypeStore;
        this.reviewStore = reviewStore;
        this.questionSubj = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.answeredQuestions = [];
        this.questionObs = this.questionSubj.asObservable();
        this.successfulSubmitTimeout = 10000;
      }

      _createClass(CampaignPage, [{
        key: "getQuestionType",
        value: function getQuestionType() {
          var _this18 = this;

          return this.questionTypes.find(function (type) {
            return type.questionTypeId === _this18.activeQuestion.questionTypeId;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          // Fetch all Types and Fetch campaign
          // Fetch Types and then Fetch Campaign (Both must exist for us to continue)
          // First load all data from cache.
          // If exist then render it to user
          // next to it request for new API information to get latest data (don't notify user if data can't be gathered)
          // if campaign is not in progress then replace it with latest data
          // if in progress store campaign information asLatest. We will replace it when campaign is finished.
          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([this.questionTypeStore.fetchTypes(), this.campaignStore.fetchCampaign()]).subscribe(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                types = _ref2[0],
                campaign = _ref2[1];

            var _a;

            _this19.campaign = _this19.campaignStore.currentCampaignSettings;
            _this19.successfulSubmitTimeout = (_a = _this19.campaign) === null || _a === void 0 ? void 0 : _a.succesfullSubmitTimeout;
          });
          this.campaignStore.currentCampaignSettings$.subscribe(function (campaign) {
            var _a, _b;

            _this19.campaign = campaign;
            _this19.successfulSubmitTimeout = (_a = _this19.campaign) === null || _a === void 0 ? void 0 : _a.succesfullSubmitTimeout;
            _this19.activeQuestion = (_b = _this19.campaign) === null || _b === void 0 ? void 0 : _b.questions[0];
          });
          this.questionTypeStore.types$.subscribe(function (types) {
            _this19.questionTypes = types;
          });
          this.questionObs.subscribe(function (questionData) {
            if (questionData && _this19.activeQuestion === questionData.question) {
              _this19.storeToAnsweredQuestion(questionData);

              _this19.isLastQuestion(questionData.question) ? _this19.submitCampaign() : _this19.goToNextQuestion(questionData.question);
            }
          });
        }
      }, {
        key: "isQuestionareActive",
        value: function isQuestionareActive() {
          return this.questionTypes.length > 0 && !!this.activeQuestion;
        }
      }, {
        key: "goToNextQuestion",
        value: function goToNextQuestion(question) {
          var _a;

          var questions = (_a = this.campaign) === null || _a === void 0 ? void 0 : _a.questions;

          if (!questions) {
            return;
          }

          var questionIndex = questions.findIndex(function (obj) {
            return obj === question;
          });

          if (questions.length > questionIndex + 1) {
            this.activeQuestion = questions[questionIndex + 1];
          }
        }
      }, {
        key: "storeToAnsweredQuestion",
        value: function storeToAnsweredQuestion(questionData) {
          var matchingAnswerIndex = this.answeredQuestions.findIndex(function (obj) {
            return obj.question === questionData.question;
          });
          matchingAnswerIndex ? this.answeredQuestions[matchingAnswerIndex] = questionData : this.answeredQuestions.push(questionData);
        }
      }, {
        key: "isLastQuestion",
        value: function isLastQuestion(question) {
          var questionIndex = this.campaign.questions.findIndex(function (campQuestion) {
            return campQuestion === question;
          });
          return this.campaign.questions.length === questionIndex + 1;
        }
      }, {
        key: "submitCampaign",
        value: function submitCampaign() {
          var _this20 = this;

          this.activeQuestion = null;
          setTimeout(function () {
            _this20.resetCampaign(); // Add timeout mark on page

          }, this.successfulSubmitTimeout);
          var review = new _schema_review__WEBPACK_IMPORTED_MODULE_5__["Review"]({
            campaignId: this.campaign.campaignId,
            createdAt: this.campaign.createdAt,
            questions: this.answeredQuestions.map(function (answer) {
              return {
                questionId: answer.question.questionId,
                answers: answer.selectedValues
              };
            })
          });
          console.log(review);
          this.reviewStore.submitReview(review);
        }
      }, {
        key: "resetCampaign",
        value: function resetCampaign() {
          if (this.campaignStore.latestCampaignSettings !== this.campaignStore.currentCampaignSettings) {
            this.campaignStore.syncCampaignSettings();
          }

          this.activeQuestion = this.campaign.questions[0];
        }
      }]);

      return CampaignPage;
    }();

    CampaignPage.ctorParameters = function () {
      return [{
        type: _stores_campaign_store_service__WEBPACK_IMPORTED_MODULE_2__["CampaignStoreService"]
      }, {
        type: _stores_question_type_store_service__WEBPACK_IMPORTED_MODULE_4__["QuestionTypeStoreService"]
      }, {
        type: _stores_review_store_service__WEBPACK_IMPORTED_MODULE_6__["ReviewStoreService"]
      }];
    };

    CampaignPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-campaign',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./campaign.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/campaign/campaign.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./campaign.page.scss */
      "./src/app/pages/campaign/campaign.page.scss"))["default"]]
    })], CampaignPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-campaign-campaign-module-es5.js.map