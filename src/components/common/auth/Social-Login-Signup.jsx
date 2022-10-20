

import React from 'react';
import { Div } from '../../../style-component';
import { icons } from '../../../constant/icon';

const SocialLoginSignup = () => {
    return (
        <div className='flex justify-center items-center space-x-8 text-3xl py-3'>
            <Div.SocialBox><icons.ArtSecGoogle /></Div.SocialBox>
            <Div.SocialBox><icons.ArtSecFacebook className='text-blue-500' /></Div.SocialBox>
            <Div.SocialBox><icons.ArtSecPinterest className='text-red-500' /></Div.SocialBox>
            <Div.SocialBox><icons.ArtSecTwitter className='text-blue-500' /></Div.SocialBox>
        </div>
    )
}
export default SocialLoginSignup