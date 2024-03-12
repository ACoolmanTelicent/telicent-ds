import React from "react";
import { IconStyle } from "../../contexts/OntologyStyles";
export interface OntologyInputHierarchy {
    name: string;
    id: string;
    ontology: IconStyle;
    children?: OntologyInputHierarchy[];
}
export interface OntologyHierarchyProps {
    instanceId: string;
    data: OntologyInputHierarchy;
    expandElement?: boolean;
    isDraggable?: boolean;
    isClickable?: boolean;
    dragEvent?: (event: React.DragEvent<HTMLElement>, nodeType: string) => void;
    clickEvent?: (nodeId: string) => void;
    filterIds?: string[];
    baseKey?: string;
    descendantCount?: boolean;
}
declare const OntologyHierarchy: React.FC<OntologyHierarchyProps>;
export default OntologyHierarchy;
