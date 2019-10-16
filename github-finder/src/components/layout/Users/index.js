import React, { Component } from 'react'

import {
	UserContainer
} from './style';

import UserItem from '../UserItems';

class index extends Component {	

	render() {
		return (
			<UserContainer>
				{this.props.users.map( user => (
					<UserItem key={user.id} user={user} />
				))}
			</UserContainer>
		)
	}
}

export default index