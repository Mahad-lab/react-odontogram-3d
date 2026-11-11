import React from "react";
import { ToothData } from "../types";
interface ToothInfoPanelProps {
    tooth: ToothData | null;
    theme: "light" | "dark";
    themeColors: {
        panel: string;
        text: string;
        textSecondary: string;
    };
}
declare const ToothInfoPanel: React.FC<ToothInfoPanelProps>;
export default ToothInfoPanel;
