import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import '../styles/TextInput.css';
class TextInput extends Component {
    render () {
        return (
            <React.Fragment>
                <form className="wrap" noValidate autoComplete="off">
                    <TextField
                        id="standard-text"
                        label="メッセージを入力"
                        className="text"
                        margin="normal"
                        value={this.props.value}
                        onChange={e => this.props.onChange(e.target.value)}
                    />
                </form>
            </React.Fragment>
        )
    }
}

export default TextInput;