import React from "react";
interface ControlPanelProps {
    interactive: boolean;
    theme: "light" | "dark";
    themeColors: {
        panel: string;
        text: string;
        textSecondary: string;
    };
}
declare const ControlPanel: React.FC<ControlPanelProps>;
export default ControlPanel;
