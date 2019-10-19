import React from 'react'
import PropTypes from 'prop-types';

import {
	AlertContainer
} from './style';

const Alert = ({ alert }) => {

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

Alert.propTypes = {
    alert: PropTypes.object
};

export default Alert;
