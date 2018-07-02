import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from './actions';

export class Notify extends Component {
  state = {
    loading: false
  };

  handleSayHello(text) {
    this.props.sayHello(text);
  }

  handleAsyncRequest = () => {
    console.log('handleAsyncRequest()')
    this.setState({
      loading: true
    });

    this.props.sendAsyncRequest({
      loginName: 'A0022249',
      loginPwd: 'aaaaaaaaaaaaa',
      loginType: 'A'
    }).then(() => {
      this.setState({
        loading: false
      });
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleSayHello('Tom')}>Tom</button>
        <button onClick={() => this.handleSayHello('Jerry')}>Jerry</button>
        name: {this.props.name}
        <button onClick={this.handleAsyncRequest} disabled={this.state.loading}>
          {this.state.loading ? 'Loading...' : 'Async Request'}
        </button>
        userInfo: {this.props.userInfo}
      </div>
    );
  }
}

export default connect(state => state, (dispatch) => bindActionCreators(actionCreators, dispatch))(Notify);
