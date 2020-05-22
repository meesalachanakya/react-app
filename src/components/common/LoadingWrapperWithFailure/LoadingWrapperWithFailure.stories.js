import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import LoadingWrapperWithFailure from '.'

import SignInpage from '../../../Authentication/components/SignInPage'

export default {
    component: LoadingWrapperWithFailure,
    title: 'Common/LoadingWrapperWithFailure'
}

export const defaultView = () => <LoadingWrapperWithFailure/>

export const fetchingState = () => <LoadingWrapperWithFailure apiStatus={100}/>

export const successState = () => <SignInpage authStore={{}}/>
