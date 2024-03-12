import React from "react";
import { AvatarProps } from "@mui/material/Avatar";
import "./user-avatar.css";
export interface TeliUserAvatarProps {
    /**
     * Provides an alt attribute for the rendered img element.
     */
    alt: AvatarProps["alt"];
    /**
     * User's first name
     */
    firstName: string;
    /**
     * User's last name
     */
    lastName: string;
    /**
     * The src attribute for the img element.
     */
    src: AvatarProps["src"];
}
declare const TeliUserAvatar: React.FC<Partial<TeliUserAvatarProps>>;
export default TeliUserAvatar;