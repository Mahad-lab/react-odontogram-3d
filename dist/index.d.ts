import React from 'react';
import { BufferGeometry } from 'three';

interface ToothCondition {
    id: string;
    type: "caries" | "filling" | "crown" | "extraction" | "implant" | "root_canal" | "bridge";
    surface?: "occlusal" | "buccal" | "lingual" | "mesial" | "distal" | "incisal";
    color: string;
    description?: string;
}
interface ToothData {
    number: number;
    name: string;
    type: "incisor" | "canine" | "premolar" | "molar";
    quadrant: 1 | 2 | 3 | 4;
    conditions: ToothCondition[];
    notes?: string;
}
interface OdontogramProps {
    teeth?: ToothData[];
    onToothClick?: (tooth: ToothData) => void;
    onToothHover?: (tooth: ToothData | null) => void;
    showLabels?: boolean;
    interactive?: boolean;
    theme?: "light" | "dark";
    size?: "small" | "medium" | "large";
    className?: string;
}
interface Tooth3DProps {
    tooth: ToothData;
    position: [number, number, number];
    onClick: () => void;
    onHover: (hover: boolean) => void;
    isHovered: boolean;
    size: number;
}

declare const Odontogram3D: React.FC<OdontogramProps>;

declare const Tooth3D: React.FC<Tooth3DProps>;

declare const CONDITION_COLORS: {
    readonly caries: "#ff4444";
    readonly filling: "#4444ff";
    readonly crown: "#ffaa00";
    readonly extraction: "#888888";
    readonly implant: "#00ff44";
    readonly root_canal: "#ff00ff";
    readonly bridge: "#00ffff";
};
declare const DEFAULT_TEETH: ToothData[];
declare const THEME_COLORS: {
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

declare const getToothPosition: (tooth: ToothData, sizeMultiplier: number) => [number, number, number];
declare const getToothGeometry: (toothType: ToothData["type"], size: number) => BufferGeometry;
declare const getSizeMultiplier: (size: "small" | "medium" | "large") => number;

export { CONDITION_COLORS, DEFAULT_TEETH, Odontogram3D, THEME_COLORS, Tooth3D, getSizeMultiplier, getToothGeometry, getToothPosition };
export type { OdontogramProps, Tooth3DProps, ToothCondition, ToothData };
