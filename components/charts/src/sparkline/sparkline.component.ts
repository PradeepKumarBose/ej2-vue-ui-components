import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Sparkline } from '@syncfusion/ej2-charts';
import { RangeBandSettingsDirective, RangeBandSettingDirective, RangeBandSettingsPlugin, RangeBandSettingPlugin } from './rangebandsettings.directive'


export const properties: string[] = ['axisSettings', 'border', 'containerArea', 'dataLabelSettings', 'dataSource', 'enablePersistence', 'enableRtl', 'endPointColor', 'fill', 'format', 'height', 'highPointColor', 'lineWidth', 'locale', 'lowPointColor', 'markerSettings', 'negativePointColor', 'opacity', 'padding', 'palette', 'rangeBandSettings', 'startPointColor', 'theme', 'tiePointColor', 'tooltipSettings', 'type', 'useGroupingSeparator', 'valueType', 'width', 'xName', 'yName', 'axisRendering', 'dataLabelRendering', 'load', 'loaded', 'markerRendering', 'pointRegionMouseClick', 'pointRegionMouseMove', 'pointRendering', 'resize', 'seriesRendering', 'sparklineMouseClick', 'sparklineMouseMove', 'tooltipInitialize'];
export const modelProps: string[] = [];

/**
 * Represents Vuejs Sparkline Component
 * ```vue
 * <ejs-sparkline></ejs-sparkline>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class SparklineComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-rangeBandSettings":"e-rangeBandSetting"};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new Sparkline({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public renderSparkline(): void {
        return this.ej2Instances.renderSparkline();
    }
}

export const SparklinePlugin = {
    name: 'ejs-sparkline',
    install(Vue: any) {
        Vue.component(SparklinePlugin.name, SparklineComponent);
        Vue.component(RangeBandSettingPlugin.name, RangeBandSettingDirective);
        Vue.component(RangeBandSettingsPlugin.name, RangeBandSettingsDirective);

    }
}
