import React from 'react';
import Button from './style';

// 버튼 컴포넌트 만들기
// 버튼 컴포넌트가 감싸고 있는 children
const BasicButton = ({children, ...rest}) => {
    return (
        // 어떤 props를 받을지 꼭 정의, props... (style에서 정의한 것들을 적는다)
        // 내가 style에서 만든 Button import 
        // size = {size} shape={shape} variant={variant} color={color}를 받는다
        <Button {...rest}> 
            {children}
        </Button>
    );
};

export default BasicButton;