import React, { useEffect, useState } from "react";
import { FormControl } from "./style";
import { Chips } from "../Chips";

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

export const ChipsInput = React.forwardRef((props, ref) => {
    const { errorText, onChipsInput, ...nativeProps } = props;
    const [state, setState] = useState({
        items: [],
        value: "",
    });

    const handleKeyDown = evt => {
        if (["Enter", "Tab", ","].includes(evt.key)) {
            evt.preventDefault();

            const value = state.value.trim();

            if (value) {
                setState(prevState => ({
                    ...prevState,
                    items: [
                        ...prevState.items.filter(val => val !== value),
                        value,
                    ],
                    value: "",
                }));
            }
        }
    };

    const handleChange = evt => {
        setState(prev => ({
            ...prev,
            value: evt.target.value.toLowerCase(),
        }));
    };

    const handleDelete = item => {
        setState(prev => ({
            items: [...prev.items.filter(i => i !== item)],
        }));
    };

    useEffect(() => {
        onChipsInput(state.items);
    }, [state.items, onChipsInput]);

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
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={state.value}
                {...nativeProps}
            />
            {<p>{props.errorText}</p>}
            <Chips chips={state.items} onDelete={handleDelete} />
        </FormControl>
    );
});
