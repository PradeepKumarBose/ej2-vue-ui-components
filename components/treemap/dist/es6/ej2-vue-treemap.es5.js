import { TreeMap } from '@syncfusion/ej2-treemap';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LevelsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(LevelsDirective, _super);
    function LevelsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelsDirective.prototype.render = function () {
        return;
    };
    LevelsDirective = __decorate([
        EJComponentDecorator({})
    ], LevelsDirective);
    return LevelsDirective;
}(Vue));
var LevelsPlugin = {
    name: 'e-levels',
    install: function (Vue$$1) {
        Vue$$1.component(LevelsPlugin.name, LevelsDirective);
    }
};
/**
 * `LevelsDirective` directive represent a levels of the react treemap.
 * ```vue
 * <ejs-treemap>
 * <e-levels>
 * <e-level></e-level>
 * </e-levels>
 * </ejs-treemap>
 * ```
 */
var LevelDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(LevelDirective, _super);
    function LevelDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelDirective.prototype.render = function () {
        return;
    };
    LevelDirective = __decorate([
        EJComponentDecorator({})
    ], LevelDirective);
    return LevelDirective;
}(Vue));
var LevelPlugin = {
    name: 'e-level',
    install: function (Vue$$1) {
        Vue$$1.component(LevelPlugin.name, LevelDirective);
    }
};

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties = ['background', 'border', 'colorValuePath', 'dataSource', 'description', 'enableDrillDown', 'enablePersistence', 'enableRtl', 'equalColorValuePath', 'format', 'height', 'highlightSettings', 'initialDrillDown', 'layoutType', 'leafItemSettings', 'legendSettings', 'levels', 'locale', 'margin', 'palette', 'query', 'rangeColorValuePath', 'selectionSettings', 'tabIndex', 'theme', 'titleSettings', 'tooltipSettings', 'useGroupingSeparator', 'weightValuePath', 'width', 'beforePrint', 'click', 'drillEnd', 'drillStart', 'itemClick', 'itemHighlight', 'itemMove', 'itemRendering', 'itemSelected', 'load', 'loaded', 'mouseMove', 'resize', 'tooltipRendering'];
var modelProps = [];
/**
 * Represents Vuejs TreeMap Component
 * ```vue
 * <ejs-treemap></ejs-treemap>
 * ```
 */
var TreeMapComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$1(TreeMapComponent, _super);
    function TreeMapComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-levels": "e-level" };
        _this.tagNameMapper = {};
        _this.ej2Instances = new TreeMap({});
        _this.bindProperties();
        return _this;
    }
    TreeMapComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    TreeMapComponent.prototype.clickOnTreeMap = function (e) {
        return this.ej2Instances.clickOnTreeMap(e);
    };
    TreeMapComponent.prototype.export = function (type, fileName, orientation) {
        return this.ej2Instances.export(type, fileName, orientation);
    };
    TreeMapComponent.prototype.findTotalWeight = function (processData, type) {
        return this.ej2Instances.findTotalWeight(processData, type);
    };
    TreeMapComponent.prototype.mouseDownOnTreeMap = function (e) {
        return this.ej2Instances.mouseDownOnTreeMap(e);
    };
    TreeMapComponent.prototype.mouseEndOnTreeMap = function (e) {
        return this.ej2Instances.mouseEndOnTreeMap(e);
    };
    TreeMapComponent.prototype.mouseLeaveOnTreeMap = function (e) {
        return this.ej2Instances.mouseLeaveOnTreeMap(e);
    };
    TreeMapComponent.prototype.mouseMoveOnTreeMap = function (e) {
        return this.ej2Instances.mouseMoveOnTreeMap(e);
    };
    TreeMapComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    TreeMapComponent.prototype.reOrderLevelData = function (start) {
        return this.ej2Instances.reOrderLevelData(start);
    };
    TreeMapComponent.prototype.resizeOnTreeMap = function (e) {
        return this.ej2Instances.resizeOnTreeMap(e);
    };
    TreeMapComponent = __decorate$1([
        EJComponentDecorator({
            props: properties
        })
    ], TreeMapComponent);
    return TreeMapComponent;
}(ComponentBase));
var TreeMapPlugin = {
    name: 'ejs-treemap',
    install: function (Vue$$1) {
        Vue$$1.component(TreeMapPlugin.name, TreeMapComponent);
        Vue$$1.component(LevelPlugin.name, LevelDirective);
        Vue$$1.component(LevelsPlugin.name, LevelsDirective);
    }
};

export { LevelsDirective, LevelDirective, LevelsPlugin, LevelPlugin, TreeMapComponent, TreeMapPlugin };
export * from '@syncfusion/ej2-treemap';
//# sourceMappingURL=ej2-vue-treemap.es5.js.map
