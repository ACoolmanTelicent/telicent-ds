import React from "react";
import { DialogProps } from "@mui/material";
import { SearchAutocompleteProps } from "../SearchAutocomplete/SearchAutocomplete";
import "../TeliDialog/telidialog.css";
type SearchAutocompleteDialogProps<SearchOption = {
    label: string;
}> = Omit<SearchAutocompleteProps<SearchOption>, "listboxMaxHeight" | "fullWidth"> & {
    open: DialogProps["open"];
    children: React.ReactNode;
} & Partial<{
    onClose: DialogProps["onClose"];
}>;
declare const SearchAutocompleteDialog: React.FC<SearchAutocompleteDialogProps>;
export default SearchAutocompleteDialog;
