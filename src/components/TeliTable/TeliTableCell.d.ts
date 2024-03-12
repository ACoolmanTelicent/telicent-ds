import React from "react";
import { TableCellProps as MUITableCellProps } from "@mui/material";
import "./table.css";
type TableCellProps = Omit<MUITableCellProps, "sx" | "classes">;
export interface TeliTableCellProps extends TableCellProps {
    /**
     * Minimum width of the table
     */
    minWidth?: number;
}
declare const TeliTableCell: React.FC<TeliTableCellProps>;
export default TeliTableCell;
