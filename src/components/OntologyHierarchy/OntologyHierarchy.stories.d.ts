import React from "react";
import { StoryObj } from "@storybook/react";
declare const meta: {
    component: React.FC<import("./OntologyHierarchy").OntologyHierarchyProps>;
    decorators: ((Story: import("@storybook/types").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        instanceId: string;
        data: import("./OntologyHierarchy").OntologyInputHierarchy;
        expandElement?: boolean | undefined;
        isDraggable?: boolean | undefined;
        isClickable?: boolean | undefined;
        dragEvent?: ((event: React.DragEvent<HTMLElement>, nodeType: string) => void) | undefined;
        clickEvent?: ((nodeId: string) => void) | undefined;
        filterIds?: string[] | undefined;
        baseKey?: string | undefined;
        descendantCount?: boolean | undefined;
    }>) => import("react/jsx-runtime").JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const BasicStory: Story;
export declare const ExpandElement: Story;
export declare const Draggable: Story;
export declare const BaseKey: Story;
export declare const NoDescendantCount: Story;
export declare const FilterIdsAndClickable: Story;
