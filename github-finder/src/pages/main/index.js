import React, { Fragment, Component } from 'react';

import axios from 'axios';

import Users from '../../components/layout/Users';
import Search from '../../components/layout/Search';
import Alert from '../../components/layout/Alert';

export class index extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [],
            loading: false,
            alert : null
        }
    }


    searchUsers = async (text) => {
        this.setState({ loading: true });
        const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({ users: response.data.items, loading: false });
    }

    handleClearUsers = () => {
        this.setState({
            users: [],
            loading: false
        });
    }

    setAlert = ( msg, type ) => {
      this.setState({
        alert: {
          msg,
          type
        }
      });
      setTimeout(() => this.setState({
        alert: null
      }), 5000);
    } 

  render() {
    const { users, loading } = this.state;
      return (
        <Fragment>          
            <div className="container">
              <Alert alert={this.state.alert}/>
                <Search 
                  searchUsers={this.searchUsers} 
                  handleClearUsers={this.handleClearUsers}
                  showClear={ users.length > 0 ? true : false }
                  setAlert={this.setAlert}
                />
              <Users loading={loading} users={users} />
            </div>
        </Fragment>
      )
  }
};

export default index;