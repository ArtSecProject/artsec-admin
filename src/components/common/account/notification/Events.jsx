

import React from 'react'
import { Div } from '../../../../style-component'

const Events = () => {
    return (
        <>
            <Div.Label>
                Events
                <p className='app-text-secondary'>Get exclusive invites to exhibition events</p>
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

export default Events