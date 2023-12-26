import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import './DropDownSelect.css';
import {useTranslation} from "react-i18next";

const DropDownSelect = ({ options, selectedOption, handleOptionSelect, toggleDropdown, showDropdown, valueName }) => {

    const{t}=useTranslation();

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
                    {selectedOption ? selectedOption[valueName] : t('chooseOption')}
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
