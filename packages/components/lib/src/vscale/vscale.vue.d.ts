declare const _sfc_main: import("vue").DefineComponent<{
    display: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    delay: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    screenW: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {
    props: {
        display: string;
        delay: string;
        screenW: string;
    };
    debounce: (fn: Function, delay: number) => (...rest: any[]) => void;
    VScaleUseDebounce: any;
    target: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    display: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    delay: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    screenW: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>>, {
    display: string;
    delay: string;
    screenW: string;
}>;
export default _sfc_main;
