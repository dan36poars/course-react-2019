import React, { Fragment } from 'react';

import {
	SpinnerImg
} from './style';

import spinner from '../../../assets/spinner.gif';

const Spinner = () => <Fragment><SpinnerImg src={spinner} alt="Loading..." /></Fragment>

export default Spinner;