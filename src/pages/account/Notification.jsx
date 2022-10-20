
import React from 'react'
import { DashboardLayout, UserNotificationSetting } from '../../components/common';
import { Div } from '../../style-component';


const Notification = () => {
    return (
        <DashboardLayout>
            <div className='mt-24 mx-6 mb-10'>

                <div className='pb-6'>
                    <Div.ArtSecHeading title="Notification" />
                </div>

                <div className="py-4">
                    <UserNotificationSetting />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Notification