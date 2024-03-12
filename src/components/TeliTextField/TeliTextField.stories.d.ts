/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import { AdornmentExamples, Controlled, FormProps, MultilineExamples, ValidationExamples } from "./stories";
declare const meta: {
    component: import("react").FC<import("./TeliTextFieldProps").default>;
};
export default meta;
export type TeliTextFieldStory = StoryObj<typeof meta>;
export declare const Basic: TeliTextFieldStory;
export { FormProps, ValidationExamples, MultilineExamples, AdornmentExamples, Controlled, };