import React from "react";
interface LegendProps {
    theme: "light" | "dark";
    themeColors: {
        panel: string;
        text: string;
        textSecondary: string;
    };
}
declare const Legend: React.FC<LegendProps>;
export default Legend;
