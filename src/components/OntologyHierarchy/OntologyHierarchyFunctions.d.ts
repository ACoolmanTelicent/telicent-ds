import * as d3 from "d3";
import { IconStyle } from "../../contexts/OntologyStyles";
export interface HierarchyBase {
    name: string;
    id?: string;
    ontology?: Required<IconStyle>;
    yPos?: number;
    startLeft?: number;
    hOrderPosition?: number;
    descendantCount?: number;
    _children?: d3.HierarchyNode<HierarchyBase>[];
    children?: d3.HierarchyNode<HierarchyBase>[] | HierarchyBase[];
}
export declare const resetDragData: (svg: d3.Selection<null, unknown, null, undefined> | undefined, d: d3.HierarchyNode<HierarchyBase>, rowHeight: number, instanceId: string, clickEvent?: ((nodeId: string) => void) | undefined) => string;
export declare const setDragElementStyles: (instanceId: string) => void;
export declare const prepareTreeData: (chartData: d3.HierarchyNode<HierarchyBase>, margin: {
    [key: string]: number;
}, depthTab: number, rowHeight: number) => d3.HierarchyNode<HierarchyBase>[];
export declare const addHierarchy: (data: HierarchyBase, startingDepth: number, baseKey: string, filterIds: string[]) => d3.HierarchyNode<HierarchyBase>;
export declare const checkOntology: (iconType: string, findIcon: (classUri: string) => IconStyle) => Required<IconStyle>;
