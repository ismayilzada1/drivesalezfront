import React from 'react';
import { Form } from 'react-bootstrap';
import './ColorDropDownSelect.css'

const ColorDropDownSelect = ({ options, selectedValues, toggleDropdown, handleCheckboxChange, showDropdown }) => {
    const getPlaceholderText = () => {
        if (selectedValues.length > 0) {
            return selectedValues.length <= 3
                ? selectedValues.map((value) => options.find((option) => option.value === value)?.label).join(', ')
                : `Selected (${selectedValues.length})`;
        } else {
            return 'Choose an option';
        }
    };

    return (
        <div className="dropdown">
            <Form.Group>
                <button className="btn btn-outline-primary dropdown-toggle" type="button" onClick={toggleDropdown} aria-expanded="false">
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
                                <span style={{ backgroundColor: option.color, width: '20px', height: '20px', display: 'inline-block', marginRight: '8px' }}></span>
                                {option.label}
                            </label>
                        </li>
                    ))}
                </ul>
            </Form.Group>
        </div>
    );
};

export default ColorDropDownSelect;
