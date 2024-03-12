import React from "react";
import { TableHeadProps as MUITableHeadProps } from "@mui/material";
import "./table.css";
export type TeliTableHeadProps = Omit<MUITableHeadProps, "sx" | "classes">;
declare const TeliTableHead: React.FC<TeliTableHeadProps>;
export default TeliTableHead;
