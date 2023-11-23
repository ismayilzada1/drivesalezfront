import { useReducer } from 'react';

const dropdownReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_DROPDOWN':
            return { ...state, showDropdown: !state.showDropdown };
        case 'SELECT_OPTION':
            return { ...state, selectedOption: action.payload, showDropdown: false };
        default:
            return state;
    }
};

const useDropdown = (initialState) => {
    const [state, dispatch] = useReducer(dropdownReducer, {
        selectedOption: initialState || null,
        showDropdown: false,
    });

    const toggleDropdown = () => {
        dispatch({ type: 'TOGGLE_DROPDOWN' });
    };

    const handleOptionSelect = (option) => {
        dispatch({ type: 'SELECT_OPTION', payload: option });
    };

    return {
        selectedOption: state.selectedOption,
        showDropdown: state.showDropdown,
        handleOptionSelect,
        toggleDropdown,
    };
};

export default useDropdown;
