import React, { Component } from 'react';
import Button from '../components/Button/Button';
import Display from '../components/Display/Display';
import './Calculator.css';
import execOp from './execOp';

const inicialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
};


export class Calculator extends Component
{
    state = { ...inicialState };

    clearMemory ()
    {
        this.setState({ ...inicialState });
    }

    setOperation (operation: string)
    {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true });
        } else {
            const equals = operation === '=';
            const currentOperation = this.state.operation;

            const values = [...this.state.values];
            values[0] = execOp(currentOperation, values[0], values[1]);
            values[1] = 0;
            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            });
        }
    }

    addDigit (n: number | string)
    {
        if (n === '.' && this.state.displayValue.includes('.')) return;
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay;

        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;
        this.setState({ displayValue, clearDisplay: false });

        if (n !== '.') {
            const currentIndex = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[currentIndex] = newValue;
            this.setState({ values });
        }
    }

    render ()
    {
        const addDigit = (n: number | string) => this.addDigit(n);
        const setOperation = (op: string) => this.setOperation(op);
        const clearMemory = () => this.clearMemory();

        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={clearMemory} triple />
                <Button label="/" click={setOperation} operation />
                <Button label="7" click={addDigit} />
                <Button label="8" click={addDigit} />
                <Button label="9" click={addDigit} />
                <Button label="*" click={setOperation} operation />
                <Button label="4" click={addDigit} />
                <Button label="5" click={addDigit} />
                <Button label="6" click={addDigit} />
                <Button label="-" click={setOperation} operation />
                <Button label="1" click={addDigit} />
                <Button label="2" click={addDigit} />
                <Button label="3" click={addDigit} />
                <Button label="+" click={setOperation} operation />
                <Button label="0" click={addDigit} double />
                <Button label="." click={addDigit} />
                <Button label="=" click={setOperation} operation />
            </div>
        );
    }
}

export default Calculator;
