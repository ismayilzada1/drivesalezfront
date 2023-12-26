// import React, {useEffect} from 'react';
// import { Form } from 'react-bootstrap';
// import './DropDownSelectWithCheckboxes.css';
// import {useTranslation} from "react-i18next";
//
// const DropDownSelectWithCheckboxes = ({ options, selectedValues, toggleDropdown, handleCheckboxChange, showDropdown,valueName }) => {
//
//     const{t}=useTranslation();
//     const getPlaceholderText = () => {
//         if (Array.isArray(selectedValues) && selectedValues.length > 0) {
//             const selectedLabels = selectedValues.map((value) => {
//                 const option = options.find((opt) => opt.id === value);
//                 return option ? option[valueName] : null;
//             });
//
//             const filteredLabels = selectedLabels.filter((label) => label !== null);
//
//             return filteredLabels.length > 0
//                 ? (filteredLabels.length <= 2 ? filteredLabels.join(', ') : `${t('selected')} (${filteredLabels.length})`)
//                 : t('chooseAnOption');
//         } else {
//             return t('chooseAnOption');
//         }
//     };
//
//
//     useEffect (() => {
//         console.log(selectedValues);
//     }, [selectedValues]);
//
//
//
//
//     return (
//         <div className="dropdown custom-dropdown-with-checkboxes">
//             <Form.Group>
//                 <button className="btn btn-outline-primary dropdown-toggle custom-dropdown-with-checkboxes" type="button" onClick={toggleDropdown} aria-expanded="false">
//                     {getPlaceholderText()}
//                 </button>
//                 <ul className={`dropdown-menu${showDropdown ? ' show' : ''} scrollable-dropdown`} aria-labelledby="dropdownMenuButton">
//                     {options.map((option) => (
//                         <li className="form-check" key={option.value}>
//                             <input
//                                 className="form-check-input"
//                                 type="checkbox"
//                                 value={option.id}
//                                 id={`Checkme${option.id}`}
//                                 checked={selectedValues.includes(option.id)}
//                                 onChange={() => handleCheckboxChange(option.id)}
//                             />
//                             <label className="form-check-label" htmlFor={`Checkme${option.id}`}>
//                                 {option[valueName]}
//                             </label>
//                         </li>
//                     ))}
//                 </ul>
//             </Form.Group>
//         </div>
//     );
// };
//
// export default DropDownSelectWithCheckboxes;


// Version for closing all other dropdowns when one is opened
import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import './DropDownSelectWithCheckboxes.css';
import { useTranslation } from 'react-i18next';

const DropDownSelectWithCheckboxes = ({
                                          options,
                                          selectedValues,
                                          toggleDropdown,
                                          handleCheckboxChange,
                                          showDropdown,
                                          valueName,
                                          isOpen,
                                          onToggle,
                                      }) => {
    const { t } = useTranslation();

    const getPlaceholderText = () => {
        if (Array.isArray(selectedValues) && selectedValues.length > 0) {
            const selectedLabels = selectedValues.map((value) => {
                const option = options.find((opt) => opt.id === value);
                return option ? option[valueName] : null;
            });

            const filteredLabels = selectedLabels.filter((label) => label !== null);

            return filteredLabels.length > 0
                ? filteredLabels.length <= 2
                    ? filteredLabels.join(', ')
                    : `${t('selected')} (${filteredLabels.length})`
                : t('chooseAnOption');
        } else {
            return t('chooseAnOption');
        }
    };

    useEffect(() => {
        console.log(selectedValues);
    }, [selectedValues]);

    return (
        <div className="dropdown custom-dropdown-with-checkboxes">
            <Form.Group>
                <button
                    className="btn btn-outline-primary dropdown-toggle custom-dropdown-with-checkboxes"
                    type="button"
                    onClick={onToggle}
                    aria-expanded={isOpen}
                >
                    {getPlaceholderText()}
                </button>
                <ul className={`dropdown-menu${isOpen ? ' show' : ''} scrollable-dropdown`} aria-labelledby="dropdownMenuButton">
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
