import React, { useContext } from 'react'

import {
	AlertContainer
} from './style';

import AlertContext from '../../../context/alert/alertContext';

const Alert = () => {

	const alertContext = useContext(AlertContext);

	const { alert } = alertContext;

		return (
			<AlertContainer>
				{ alert && (
					<div className={`alert alert-${alert.type}`} >
						<i className="fas fa-info-circle"/> {alert.msg}
					</div>
				)}
			</AlertContainer>
		)

}


export default Alert;
