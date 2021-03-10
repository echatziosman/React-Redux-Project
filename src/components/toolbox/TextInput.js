import React from "react";

//React - Hooks 
const TextInput = ({ name, value, placeHolder, label, onChange, error }) => {
    let wrapperClass = "form-group";

    if (error && error.length > 0) {
        wrapperClass += " has-error"
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
    
                <input name={name}
                    placeholder={placeHolder}
                    value={value}
                    className="form-control"
                    onChange={onChange}
                    type="text">
                </input>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    )
};




export default TextInput;