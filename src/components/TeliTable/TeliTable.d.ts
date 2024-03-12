import React from "react";
import { TableProps as MUITableProps } from "@mui/material";
import "./table.css";
type TableProps = Omit<MUITableProps, "sx" | "classes" | "size">;
export interface TeliTableProps extends TableProps {
    /**
     * If true, the table will be compact (smaller)
     */
    compact?: boolean;
    /**
     * Minimum width of the table
     */
    minWidth?: number;
    /**
     * The name of the table element
     */
    name?: string;
}
declare const TeliTable: React.FC<TeliTableProps>;
export default TeliTable;
