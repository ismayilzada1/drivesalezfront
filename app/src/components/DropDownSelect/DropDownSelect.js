import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import './DropDownSelect.css'; // Adjust the path based on your project structure

const DropDownSelect = ({ options, selectedOption, handleOptionSelect, toggleDropdown, showDropdown, valueName }) => {

    if (!options) {
        return null;
    }

    return (
        <div className="dropdown">
            <Form.Group>
                <button
                    className="btn btn-outline-primary dropdown-toggle"
                    onClick={toggleDropdown}
                    type="button"
                    aria-expanded="false"
                >
                    {selectedOption ? selectedOption[valueName] : 'Choose Option'}
                </button>
                <ul className={`dropdown-menu${showDropdown ? ' show' : ''} scrollable-dropdown`} aria-labelledby="dropdownMenuButton">
                    {options.map((option) => (
                        <li className="form-check custom-form-check" onClick={() => handleOptionSelect(option)} key={option.id}>
                            <label className="form-check-label custom-form-label" htmlFor={`Checkme${option.id}`}>
                                {option[valueName]}
                            </label>
                        </li>
                    ))}
                </ul>
            </Form.Group>
        </div>
    );
};

export default DropDownSelect;
