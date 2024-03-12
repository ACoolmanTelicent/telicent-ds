import React from "react";
import { type PaletteMode as Theme } from "@mui/material";
declare const useTeliTheme: () => {
    setTheme: (theme: Theme) => void;
    storedTheme: Theme;
    toggleTheme: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addDarkClass: () => void;
};
export default useTeliTheme;
export type { Theme };
