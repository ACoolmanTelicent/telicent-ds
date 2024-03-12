import React from "react";
import { TableBodyProps } from "@mui/material";
import "./table.css";
export type TeliTableBody = Omit<TableBodyProps, "sx" | "classes">;
declare const TeliTableBody: React.FC<TeliTableBody>;
export default TeliTableBody;
