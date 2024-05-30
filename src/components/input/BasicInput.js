import React from 'react';
import Input from './style';

// Input은 감싸는 태그가 아니므로 children이 필요 없을 수도 있을 것 같다!
const BasicInput = ({...rest}) => {

    return (
        // size = {size} shape={shape} variant={variant} color={color}를 받는다
        <Input {...rest}/>
    );
};

export default BasicInput;