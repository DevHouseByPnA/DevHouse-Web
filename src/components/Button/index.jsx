import React from "react";
import { StyledButton, StyledLink } from "./style";

export const CustomButton = React.forwardRef(
    ({ size, inverse, danger, type, onClick, disabled, children }, ref) => {
        const buttonSizeStyleClass = `button--${size || "default"}`;
        return (
            <StyledButton
                className={`${buttonSizeStyleClass} ${
                    inverse && "button--inverse"
                } ${danger && "button--danger"}`}
                type={type}
                onClick={onClick}
                disabled={disabled}
                ref={ref}
            >
                {children}
            </StyledButton>
        );
    }
);

export const CustomLink = React.forwardRef(
    ({ size, inverse, danger, type, to, disabled, children }, ref) => {
        const buttonSizeStyleClass = `button--${size || "default"}`;
        return (
            <StyledLink
                className={`${buttonSizeStyleClass} ${
                    inverse && "button--inverse"
                } ${danger && "button--danger"}`}
                type={type}
                to={to}
                disabled={disabled}
                ref={ref}
            >
                {children}
            </StyledLink>
        );
    }
);
