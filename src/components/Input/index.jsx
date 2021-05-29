import React from "react";
import { FormControl } from "./style";

export const CustomInput = ({ children, ...props }) => {
    const { errorText, label, id } = props;
    return (
        <FormControl className={`${errorText && "form-control--invalid"}`}>
            <label htmlFor={id}>{label}</label>
            {children}
            {<p>{errorText}</p>}
        </FormControl>
    );
};

export const TextFieldInput = React.forwardRef((props, ref) => {
    const { errorText, ...nativeProps } = props;
    return (
        <FormControl
            className={`${props.errorText && "form-control--invalid"}`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                id={nativeProps.id}
                type={nativeProps.type}
                placeholder={nativeProps.placeholder}
                autoComplete={nativeProps.autoComplete}
                disabled={nativeProps.disabled || false}
                ref={ref}
                {...nativeProps}
            />
            {<p>{props.errorText}</p>}
        </FormControl>
    );
});

export const TextAreaInput = React.forwardRef((props, ref) => {
    const { errorText, ...nativeProps } = props;

    return (
        <FormControl
            className={`${props.errorText && "form-control--invalid"}`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <textarea
                id={nativeProps.id}
                rows={nativeProps.rows || 3}
                placeholder={nativeProps.placeholder}
                ref={ref}
                {...nativeProps}
            />
            {<p>{props.errorText}</p>}
        </FormControl>
    );
});

export const TextSelectInput = React.forwardRef((props, ref) => {
    const { errorText, optionList, ...nativeProps } = props;

    return (
        <FormControl
            className={`${props.errorText && "form-control--invalid"}`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <select id={nativeProps.id} ref={ref} {...nativeProps}>
                {optionList.map(op => (
                    <option key={op.key} value={op.value}>
                        {op.value}
                    </option>
                ))}
            </select>
            {<p>{props.errorText}</p>}
        </FormControl>
    );
});
