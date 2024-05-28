import styled from "styled-components";

const S = {}

    S.Li = styled.li`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;

        & .complete {
            text-decoration: line-through;
            color: #ccc;
        }
    ` 

    S.Title = styled.p`
        font-size: 16px;
        font-weight: 400;
    `

    S.SubTitle = styled.p`
        font-size: 14px;
        font-weight: 600;
        margin: 0 0 25px 0;
    `
    S.Wrapper = styled.div`
        display: flex;
    `

    S.Button = styled.button`
        cursor: pointer;
        background: none;
        font-size : 16px;

        /* 자가 선택자 이용해서, 클래스 이름이 pen이면 path에 color를 바꿔줘
            대부분 스타일을 줄 때 폰트 어썸에서 컬러가 들어가지 않으면 path에게 직접적으로 컬러를 준다.
        */
        & .pen path {
            color : #5f81f7;
        }

        & .trash path {
            color : #ec6863;
        }
    `

    S.Input = styled.input`
        width: 100%;
        height: 40px;
        border: none;
        background-color: #f5f5f5;
        padding: 0 16px;
        margin: 0 0 50px 0;
        border-radius: 10px;
        font-size: 14px;

        &::placeholder{
            color: #b5b5b5;
        }
    `

export default S;