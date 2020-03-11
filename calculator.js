import React, { useState } from 'react';

const Calculator = () => {

    // 1. 값 받기 (무한 / array 추가)
    // 2. 기본 연산부터 + / - / * / / / %
    const [inputNum, setNum] = useState('');
    const 

    // Input Func
    const onChangeInput = () => {

    }

    // Calculate Func
    const calculatorFunc = () => {

    }

    

    return (
        <div>
            <input type="number" disabled value={} />
                <button type="button" value="AC">AC</button>
                <button type="button" value="pm">+/-</button>
                <button type="button" value="%">%</button>
                <button type="button" value="/">/</button>

                <button type="button" value="7">7</button>
                <button type="button" value="8">8</button>
                <button type="button" value="9">9</button>
                <button type="button" value="*">*</button>

                <button type="button" value="4">4</button>
                <button type="button" value="5">5</button>
                <button type="button" value="6">6</button>
                <button type="button" value="-">-</button>

                <button type="button" value="1">1</button>
                <button type="button" value="2">2</button>
                <button type="button" value="3">3</button>
                <button type="button" value="+">+</button>

                <button type="button" value="0">0</button>
                <button type="button" value=".">.</button>
                <button type="button" value="=">=</button>
        </div>
    );
}

export default Calculator;
