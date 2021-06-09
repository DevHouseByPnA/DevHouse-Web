import { useEffect, useRef } from "react";

export const useDetectTouchOutside = ({ onOutsideTouch }) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = event => {
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }

            onOutsideTouch();
        };

        document.addEventListener("touchstart", e => handleClickOutside(e));
        document.addEventListener("mousedown", e => handleClickOutside(e));
        return () => {
            document.removeEventListener("touchstart", e =>
                handleClickOutside(e)
            );
            document.removeEventListener("mousedown", e =>
                handleClickOutside(e)
            );
        };
    });

    return { ref };
};
