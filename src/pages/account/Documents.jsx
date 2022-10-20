

import React from 'react'
import { DashboardLayout, UserDocuments } from '../../components/common'
import { Div } from '../../style-component'

const Documents = () => {
  return (
    <DashboardLayout>
      <div className='mt-24 mx-6 mb-10'>

        <div className='pb-6'>
          <Div.ArtSecHeading title="Documents" />
        </div>

        <div className='w-full '>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
            <UserDocuments />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Documents