import { ToothData } from "../types";
import { BufferGeometry } from "three";
export declare const getToothPosition: (tooth: ToothData, sizeMultiplier: number) => [number, number, number];
export declare const getToothGeometry: (toothType: ToothData["type"], size: number) => BufferGeometry;
export declare const getSizeMultiplier: (size: "small" | "medium" | "large") => number;
