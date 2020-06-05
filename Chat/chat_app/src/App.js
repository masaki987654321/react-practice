import React, {Component} from 'react';

import {connect} from 'react-redux';

import AlignItemsList from './components/AlignItemsList';
import ButtonAppBar from './components/ButtonAppBar.js';
import TextInput from './components/TextInput.js';

import {firebaseDb} from 'firebase';

//　todo errorあり
// const messagesRef = firebaseDb.ref('messages');

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ButtonAppBar />
        <div className='App'>
          <AlignItemsList />
          <TextInput value="メッセージを入力" />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
