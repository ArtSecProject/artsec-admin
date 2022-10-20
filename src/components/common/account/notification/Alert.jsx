

import React from 'react'
import { Div } from '../../../../style-component'

const Alert = () => {
    return (
        <>
            <Div.Label>
                Alert
                <p className='app-text-secondary'>Keep up to date with changes and update the marketplace</p>
                <div className='flex space-x-3 items-center'>
                    <Div.ToggleSwitch />
                    <Div.Label>Email</Div.Label>
                </div>

                <div className='flex space-x-3 items-center'>
                    <Div.ToggleSwitch />
                    <Div.Label>SMS</Div.Label>
                </div>

                <div className='flex space-x-3 items-center'>
                    <Div.ToggleSwitch />
                    <Div.Label>Push Notification</Div.Label>
                </div>
            </Div.Label>
        </>
    )
}

export default Alert