import React, { useState } from 'react';

const useDropdown = (initialState) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setShowDropdown(false);
        };



    return {
        selectedOption,
        showDropdown,
        toggleDropdown,
        handleOptionSelect,
    };
};

export default useDropdown;