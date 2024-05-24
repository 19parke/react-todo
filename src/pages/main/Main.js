import React from 'react';
import BasicButton from '../../components/button/BasicButton';
import S from './style';


const Main = () => {
    return (
        <S.Wrapper>
            {/* 메인 페이지 */}
            <S.ImageWrapper>
                <img src={process.env.PUBLIC_URL+'/images/main/penguin.png'}/>
            </S.ImageWrapper>
            <S.ButtonWrapper>
                {/* children을 받아야 하므로 양쪽 꺽쇠 있는 형태로 만든다 <></> */}
                <BasicButton size={"full"} shape={"small"} variant={"black"} color={"white"}>로그인</BasicButton>
                <BasicButton size={"full"} shape={"small"} variant={"black"} color={"white"}>회원가입</BasicButton>
            </S.ButtonWrapper>
        </S.Wrapper>
    );
};

export default Main;