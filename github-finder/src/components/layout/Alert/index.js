import React from 'react'
import PropTypes from 'prop-types';

import {
	AlertContainer
} from './style';

const index = ({ alert }) => {

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

index.propTypes = {
    alert: PropTypes.object
};

export default index;
