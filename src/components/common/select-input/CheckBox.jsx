

import React from 'react'

const CheckBox = ({label, name, type, customFunc, bgColor, pad, padx, ...rest }) => {
    return (
        <div className={`block relative space-x-3 ${bgColor} rounded-lg ${pad} checkbox-input ${padx}`}>
            <input name={name} type={type} onClick={customFunc} {...rest}  />
            <label>{label}</label>
        </div>
    )
}

export default CheckBox

// [#E2E6EF]
// px-4
// p-3