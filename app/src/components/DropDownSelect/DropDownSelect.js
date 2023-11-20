import React from 'react';
import { Form } from 'react-bootstrap';
import './DropDownSelect.css';

const DropDownSelect = ({ options, selectedValues, toggleDropdown, handleCheckboxChange, showDropdown }) => {
    const getPlaceholderText = () => {
        if (Array.isArray(selectedValues) && selectedValues.length > 0) {
            return selectedValues.length <= 3
                ? selectedValues
                    .map((value) => options.find((option) => option.value === value)?.label)
                    .filter((label) => label !== undefined)
                    .join(', ')
                : `Selected (${selectedValues.length})`;
        } else {
            return 'Choose an option';
        }
    };




    return (
        <div className="dropdown">
            <Form.Group>
                <button className="btn btn-outline-primary  dropdown-toggle" type="button" onClick={toggleDropdown} aria-expanded="false">
                    {getPlaceholderText()}
                </button>
                <ul className={`dropdown-menu${showDropdown ? ' show' : ''} scrollable-dropdown`} aria-labelledby="dropdownMenuButton">
                    {options.map((option) => (
                        <li className="form-check" key={option.value}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value={option.value}
                                id={`Checkme${option.value}`}
                                checked={selectedValues.includes(option.value)}
                                onChange={() => handleCheckboxChange(option.value)}
                            />
                            <label className="form-check-label" htmlFor={`Checkme${option.value}`}>
                                {option.label}
                            </label>
                        </li>
                    ))}
                </ul>
            </Form.Group>
        </div>
    );
};

export default DropDownSelect;
