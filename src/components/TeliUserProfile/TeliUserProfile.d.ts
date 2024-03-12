import React from "react";
import { TeliUserAvatarProps } from "../TeliAvatar/TeliUserAvatar";
import { TeliUserProfileMenuProps } from "./TeliUserProfileMenu";
import "./user-profile.css";
export interface TeliUserProfileProps extends Partial<TeliUserAvatarProps> {
    onSettingsClick: TeliUserProfileMenuProps["onSettingsClick"];
}
declare const TeliUserProfile: React.FC<Partial<TeliUserProfileProps>>;
export default TeliUserProfile;
