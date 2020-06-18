import React, {Component} from 'react';

import AlignItemsList from './components/AlignItemsList';
import ButtonAppBar from './components/ButtonAppBar.js';
import TextInput from './components/TextInput.js';
import SendButton from './components/SendButton.js';

import './styles/App.css';


import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actions} from './redux/actions/index';

import {firebaseDb} from './firebase/index';
const messagesRef = firebaseDb.ref('messages');

class App extends Component {
  componentWillMount() {
    messagesRef.on('child_added', snapshot => {
      const m = snapshot.val();
      let msgs = this.props.messages.msgs;

      msgs.push({
        image: m.image,
        text: m.text,
      });
      this.setState({
        msqs: msgs,
      });
    });
  }

  render() {
    console.log(this.props);
    
    return (
      <React.Fragment>
        <ButtonAppBar />
          {this.props.messages.msgs.map((m, i) => 
            <AlignItemsList key={i} msgs={m} />
          )}

          <TextInput 
            onChange={this.props.actions.messages.change}
            value={this.props.messages.value}
          />

          <SendButton 
            onClick={this.props.actions.messages.submit}
            value={this.props.messages.value}
            image={this.props.messages.image}
          />
      
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      messages: bindActionCreators(actions.messages, dispatch),
    },
  };
};


export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(App);