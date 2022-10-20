
import React from 'react'
import ArtSecModal from '../modal/Modal'
import { ArtSecCheckBox } from '../select-input'

const StartBiding = () => {
  return (
    <ArtSecModal width="w-96" title="Start Biding">
      <form>
        <div className='space-y-3 py-4'>
          <ArtSecCheckBox
            type="checkbox"
            name="paypal"
            label="Paypal"
            style={{ paddingTop: "5px" }}
          />
        </div>
      </form>

    </ArtSecModal>
  )
}

export default StartBiding