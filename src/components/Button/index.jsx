import React from "react";
import { StyledButton } from "./style";

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
