

import React from 'react';
import { Div } from '../../../../style-component';

const Program = () => {
    return (
        <>
            <Div.Label>
                Early Access Program
                <p className='app-text-secondary'>Receive early access alerts to new offerings</p>
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

export default Program