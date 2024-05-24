// 스타일 컴포넌트에서의css , 공통적인 것
// 공통적인 css 속성들, 하다보니 이거 많이 쓰네? 하는 것들 넣기 

import { css } from "styled-components";

// css``은 css 문법을 사용하는것
// 공통적인 css속성
export const flexCenterColumn = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const textH1 = css`
    font-size: 40px;
    font-weight: 900;
`