import React from "react";
import { ChipProps } from "@mui/material";
import "./telichip.css";
type MUIChipProps = Omit<ChipProps, "variant" | "color" | "avatar" | "classes">;
export interface TeliChipProps extends MUIChipProps {
    href?: string;
    variant?: "primary" | "secondary" | "tertiary" | "basic";
}
declare const TeliChip: React.FC<TeliChipProps>;
export default TeliChip;