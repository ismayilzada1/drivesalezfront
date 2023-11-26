import React, {useEffect} from 'react';
import { Form } from 'react-bootstrap';
import './DropDownSelectWithCheckboxes.css';

const DropDownSelectWithCheckboxes = ({ options, selectedValues, toggleDropdown, handleCheckboxChange, showDropdown,valueName }) => {
    const getPlaceholderText = () => {
        if (Array.isArray(selectedValues) && selectedValues.length > 0) {
            const selectedLabels = selectedValues.map((value) => {
                const option = options.find((opt) => opt.id === value);
                return option ? option[valueName] : null;
            });

            const filteredLabels = selectedLabels.filter((label) => label !== null);

            return filteredLabels.length > 0
                ? (filteredLabels.length <= 2 ? filteredLabels.join(', ') : `Selected (${filteredLabels.length})`)
                : 'Choose an option';
        } else {
            return 'Choose an option';
        }
    };


    useEffect (() => {
        console.log(selectedValues);
    }, [selectedValues]);




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
                                value={option.id}
                                id={`Checkme${option.id}`}
                                checked={selectedValues.includes(option.id)}
                                onChange={() => handleCheckboxChange(option.id)}
                            />
                            <label className="form-check-label" htmlFor={`Checkme${option.id}`}>
                                {option[valueName]}
                            </label>
                        </li>
                    ))}
                </ul>
            </Form.Group>
        </div>
    );
};

export default DropDownSelectWithCheckboxes;
