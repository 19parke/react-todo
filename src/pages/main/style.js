// 이 스타일은 메인에서만 사용하는 것
// main 페이지에 관련된 스타일만 정의 

import styled from "styled-components";
import { flexCenterColumn } from "../../global/common";

const S = {}

    S.Wrapper = styled.div`
        width: 100%;
        height: 100%;
        /* common 에서 만들어 놓은 것 import */
        ${flexCenterColumn}
    `

    S.ImageWrapper = styled.div`
        flex: 0.7;
        ${flexCenterColumn}
    `

    S.ButtonWrapper = styled.div`
        width: 100%;
        height: 110px;
        display: flex;
        flex-direction: column;
        /* content 사이마다 일정한 간격을 주는 것 main축이 위에서 아래로 바꾼다 */
        justify-content: space-between;
    `
export default S;