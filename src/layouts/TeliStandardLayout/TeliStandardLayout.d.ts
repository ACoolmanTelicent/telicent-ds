import React from "react";
import { TeliStandardLayoutHeaderProps } from "../../components/TeliHeader/TeliStandardLayoutHeader";
import "../layout.css";
type MainProps = JSX.IntrinsicElements["main"];
export type TeliStandardLayoutProps = TeliStandardLayoutHeaderProps & MainProps;
declare const TeliStandardLayout: React.FC<TeliStandardLayoutProps>;
export default TeliStandardLayout;
