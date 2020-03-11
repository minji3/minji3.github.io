import React, { useState } from 'react';

const Info = () => {
    const [birth, setBirth] = useState('');
    const day = ['월', '화', '수', '목', '금'];
    let nnum = 0;
    const [result, setResult] = useState('');

    const onSubmitForm = (e) => {
        e.preventDefault();
        nnum = (birth.slice(-1) % 5) - 1;
        // result(nnum)
        
        // if (result < 0) {
        //     result(4)
        // }
        // setResult(day[result])
        // console.log(setResult)
    }

    const onChangeInput = (e) => {
        e.preventDefault();
        setBirth(e.target.value);
    }

    return (
        <>
            <form onSubmit={onSubmitForm}>
                <input type="text" maxLength="4" onChange={onChangeInput} value={birth} />
                <button>확인</button>
            </form>
            <div>{birth}년생은 {console.log(nnum)}요일에 구매 가능합니다</div>
        </>
    )
}

export default Info;
