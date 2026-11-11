import { ToothData } from '../types';
export declare const CONDITION_COLORS: {
    readonly caries: "#ff4444";
    readonly filling: "#4444ff";
    readonly crown: "#ffaa00";
    readonly extraction: "#888888";
    readonly implant: "#00ff44";
    readonly root_canal: "#ff00ff";
    readonly bridge: "#00ffff";
};
export declare const DEFAULT_TEETH: ToothData[];
export declare const THEME_COLORS: {
    readonly light: {
        readonly background: "#f5f5f5";
        readonly panel: "rgba(255, 255, 255, 0.9)";
        readonly text: "#1f2937";
        readonly textSecondary: "#6b7280";
    };
    readonly dark: {
        readonly background: "#1a1a1a";
        readonly panel: "rgba(0, 0, 0, 0.9)";
        readonly text: "#f9fafb";
        readonly textSecondary: "#d1d5db";
    };
};
