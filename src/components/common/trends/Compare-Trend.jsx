


import React from 'react'
import { icons } from '../../../constant/icon'

const CompareTrend = ({...rest}) => {
  return (
    <div className='flex justify-center items-center app-btn px-3 py-2 text-white rounded-md' {...rest}><icons.ArtSecComparison className='mr-3' /> Compare Art Performance</div>
  )
}

export default CompareTrend