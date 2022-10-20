


import React from 'react'

const SelectInput = ({ children, className, ...rest }) => {
    return (
        <select className={className} {...rest}>
            {children}
        </select>
    )
}

export default SelectInput
