import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';

import UserActions from '../actions/userActions';
import UserStore from '../stores/userStore';

const getUserStoreStates = () => UserStore.getAjaxResult();

class UserBox extends Component {
  constructor(props) {
    super(props);
    this.state = getUserStoreStates();
    this.onViewUsers = this.onViewUsers.bind(this);
    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
  }

  componentWillMount() {
    UserStore.addLoadListener(this.onViewUsers);
    UserStore.addRegisterListener(this.onUpdateUser);
  }

  onViewUsers() {
    this.setState(getUserStoreStates());
  }

  onUpdateUser() {
    ReactDOM.findDOMNode(this.refs.userform.refs.name).value = '';
    ReactDOM.findDOMNode(this.refs.userform.refs.mail).value = '';
    this.onViewUsers();
  }

  handleAddUser() {
    UserActions.register({name: name, mail: mail});
  }

  componentDidMount() {
    UserActions.load();
  }

  render() {
    return (
      <div style={{width: '300px'}}>
        <UserForm addUser={this.handleAddUser} ref="userform" />
        <UserList userData={this.state.userData} />
      </div>
    );
  }
};

class User extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.mail}</td>
      </tr>
    );
  }
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired
};

class UserList extends Component {
  render() {
    const UserNodes = this.props.userData.map((user, index) => {
      return (
        <User name={user.name} mail={user.mail} key={index} />
      );
    });
    return (
      <table>
        <tbody>
          <tr>
            <th>名前</th>
            <th>メールアドレス</th>
          </tr>
          {UserNodes}
        </tbody>
      </table>
    );
  }
};

UserList.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.object).isRequired
}

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    const mail = ReactDOM.findDOMNode(this.refs.mail).value.trim();
    this.props.addUser(name, mail);
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <label>名前</label>
              </td>
              <td>
                <input type="text" ref="name" />
              </td>
            </tr>
            <tr>
              <td>
                <label>メールアドレス</label>
              </td>
              <td>
                <input type="text" ref="mail" />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button onClick={this.handleSubmit}>追加</button>
        </div>
      </div>
    );
  }
};

UserForm.propTypes = {
  addUser: PropTypes.func.isRequired
}

export default UserBox;