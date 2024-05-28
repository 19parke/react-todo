import React, { useState } from 'react';

// useInput("초기값"), 인자 값이 매개 변수로 들어온다
//               요기
const useInput = (initialValue) => {
    // 초기값으로 들어온 것
    const [value, setValue] = useState(initialValue)
    //  이벤트가 들어 왔을 때
    const onChangeValue = (e) => {
        // 사용자가 입력한 값을 받는 것
        setValue(e.target.value)
    }
    return [value, onChangeValue, setValue];
    //setValue는 여기서 알아서 바꾸니 굳이 내보낼 필요 없음
    // 그러나 초기화를 위해 setValue를 보내줘야 함
};

export default useInput;

// 컴포넌트를 return할 필요가 없음 
// return (
    //     <div>
    
    //     </div>
    // );
// 비구조화 할당을 할 때
//const [a, setA] = useState()이렇게 쓰기 때문에 useInput도 똑같은 형식으로 사용해주면 된다.