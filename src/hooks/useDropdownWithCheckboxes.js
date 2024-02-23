import { useReducer } from 'react';

const initialState = {
    selectedValues: [],
    showDropdown: false,
};

const checkboxReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_DROPDOWN':
            return { ...state, showDropdown: !state.showDropdown };
        case 'CHECKBOX_CHANGE':
            const { value } = action.payload;
            console.log("event triggered");
            return {
                ...state,
                selectedValues: state.selectedValues.includes(value)
                    ? state.selectedValues.filter((item) => item !== value)
                    : [...state.selectedValues, value],
            };
        default:
            return state;
    }
};

const useDropdownWithCheckboxes = (uniqueIdentifier) => {
    const [state, dispatch] = useReducer(checkboxReducer, initialState);

    const handleCheckboxChange = (value) => {
        dispatch({ type: 'CHECKBOX_CHANGE', payload: { value } });
    };

    const toggleDropdown = () => {
        dispatch({ type: 'TOGGLE_DROPDOWN' });
    };

    return {
        selectedValues: state.selectedValues,
        showDropdown: state.showDropdown,
        handleCheckboxChange,
        toggleDropdown,
    };
};

export default useDropdownWithCheckboxes;
