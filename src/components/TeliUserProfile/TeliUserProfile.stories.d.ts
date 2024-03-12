/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    component: import("react").FC<Partial<import("./TeliUserProfile").TeliUserProfileProps>>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default meta;
type TeliUserProfileStory = StoryObj<typeof meta>;
export declare const BasicExample: TeliUserProfileStory;
export declare const InitialsExample: TeliUserProfileStory;