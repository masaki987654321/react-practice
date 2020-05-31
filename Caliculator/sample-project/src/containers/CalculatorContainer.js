import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import Btn from '../components/Btn';
import Result from '../components/Result';

class CalculatorContainer extends Component {
  render() {
    const { calculator, actions } = this.props;
    return (
      <div>
        <div>
          <Btn n={'リセット'} onClick={actions.onResetClick} />
        </div>
        <div>
          <Btn n={1} onClick={() => actions.onNumClick(1)} />
          <Btn n={2} onClick={() => actions.onNumClick(2)} />
          <Btn n={3} onClick={() => actions.onNumClick(3)} />
        </div>
        <div>
          <Btn n={4} onClick={() => actions.onNumClick(4)} />
          <Btn n={5} onClick={() => actions.onNumClick(5)} />
          <Btn n={6} onClick={() => actions.onNumClick(6)} />
        </div>
        <div>
          <Btn n={7} onClick={() => actions.onNumClick(7)} />
          <Btn n={8} onClick={() => actions.onNumClick(8)} />
          <Btn n={9} onClick={() => actions.onNumClick(9)} />
        </div>
        <div>
          <Btn n={0} onClick={() => actions.onNumClick(0)} />
          <Btn n={'+'} onClick={actions.onPlusClick} />
          <Btn n={'-'} onClick={actions.onMinusClick} />
        </div>
        <Result result={calculator.showingResult ? calculator.resultValue : calculator.inputValue} />
      </div>
    );
  }
}

const mapState = (state, ownProps) => ({
  calculator: state.calculator,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapState, mapDispatch)(CalculatorContainer);