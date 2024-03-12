import React from "react";
import { TabProps } from "@mui/material";
import "./telitabs.css";
interface TeliTabProps extends Omit<TabProps, "value"> {
    tabIndex: number;
}
declare const TeliTab: React.FC<TeliTabProps>;
export default TeliTab;
