import { StyledChipsContainer, StyledChip } from "./style";

export const Chips = ({ chips, onDelete }) => {
    return (
        chips?.length > 0 && (
            <StyledChipsContainer>
                {chips.map(chip => {
                    return (
                        <StyledChip>
                            {chip}
                            {onDelete && (
                                <button
                                    type="button"
                                    className="delete-btn"
                                    onClick={() => onDelete(chip)}
                                >
                                    &times;
                                </button>
                            )}
                        </StyledChip>
                    );
                })}
            </StyledChipsContainer>
        )
    );
};
