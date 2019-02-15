import React, {Component} from 'react';
import {connect} from "react-redux";

import './Passcode.css';
class Passcode extends Component {
    render() {
        let bgColor = '#c62828';
        if (!this.props.isLocked) {
            bgColor = '#2e7d32';
        }

        return (
            <div className="Passcode" style={{background: bgColor}}>
                <h5>{this.props.isLocked ? 'Access Denied' : 'Access Granted'}</h5>
                <input className="InputPane" type="password" value={this.props.code} disabled />
                <div className="ButtonsPane">
                    <button onClick={() => this.props.addSymbol(7)}>7</button>
                    <button onClick={() => this.props.addSymbol(8)}>8</button>
                    <button onClick={() => this.props.addSymbol(9)}>9</button>
                    <button onClick={() => this.props.addSymbol(6)}>6</button>
                    <button onClick={() => this.props.addSymbol(5)}>5</button>
                    <button onClick={() => this.props.addSymbol(4)}>4</button>
                    <button onClick={() => this.props.addSymbol(3)}>3</button>
                    <button onClick={() => this.props.addSymbol(2)}>2</button>
                    <button onClick={() => this.props.addSymbol(1)}>1</button>
                    <button onClick={this.props.removeSymbol}>&lt;</button>
                    <button onClick={() => this.props.addSymbol(0)}>0</button>
                    <button onClick={this.props.check}>E</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        code: state.code,
        isLocked: state.isLocked
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addSymbol:(symbol) => dispatch({type: 'ADD_SYMBOL', symbol: symbol}),
        removeSymbol:() => dispatch({type: 'REMOVE_SYMBOL'}),
        check:() => dispatch({type: 'CHECK_PASSCODE'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Passcode);