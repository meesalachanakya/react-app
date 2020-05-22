import React from 'react'
import { action } from '@storybook/addon-actions'
import { color } from '@storybook/addon-knobs';

import NoDataView from '.'
//import NoDataViewContainer from ''

export default {
    component: NoDataView,
    title: 'Common/NoDataView'
}

const label = 'Color';
const defaultValue = '#ff00ff';


const value = color(label, defaultValue);


export const defaultView = () =>
    <NoDataViewContainer><NoDataView /></NoDataViewContainer>
