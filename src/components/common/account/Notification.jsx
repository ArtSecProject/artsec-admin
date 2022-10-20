

import React from 'react';
import AlertNotification from './notification/Alert';
import EventNotification from './notification/Events';
import ProgramNotification from './notification/Program';


const Notification = () => {

    return (
        <>   
            <AlertNotification />

            <div className='py-4'>
                <EventNotification />
            </div>

           <ProgramNotification />
        </>
    )
}

export default Notification