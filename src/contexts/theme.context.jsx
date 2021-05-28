import { createContext } from "react";

const DARK_UI_THEME = {
    background: "#121212",
    surface: "#242424",
    primary: "#bb86fc",
    secondary: "#03dac6",
    text: {
        primary: "#fff",
        secondory: "#fff70",
        disabled: "#fff50",
    },
    shadow: {
        surface: `0 4px 12px 0 rgba(0, 0, 0, 0.37)`,
        button: `0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)`,
    },
    transition: {
        hover: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    },
};

export const CustomThemeContext = createContext({
    themeState: DARK_UI_THEME,
});

export const CustomThemeProvider = props => {
    return (
        <CustomThemeContext.Provider value={{ themeState: DARK_UI_THEME }}>
            {props.children}
        </CustomThemeContext.Provider>
    );
};
