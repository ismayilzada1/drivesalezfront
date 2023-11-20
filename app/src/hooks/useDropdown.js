import { useState } from 'react';

const useDropdown = () => {
    const [selectedValues, setSelectedValues] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleCheckboxChange = (value) => {
        setSelectedValues((prevSelectedValues) => {
            if (prevSelectedValues.includes(value)) {
                return prevSelectedValues.filter((item) => item !== value);
            } else {
                return [...prevSelectedValues, value];
            }
        });
    };

    const toggleDropdown = () => {
        setShowDropdown((prevShowDropdown) => !prevShowDropdown);
    };

    return {
        selectedValues,
        showDropdown,
        handleCheckboxChange,
        toggleDropdown,
    };
};

export default useDropdown;
