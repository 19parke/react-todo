import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

// global sytle을 화면에 전체 적용시키는 로직
const GlobalStyle = createGlobalStyle`

    /* 웹 폰트 사용 */
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    ${reset}

    *{
        text-shadow : 0 0 2px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        font-family: 'Pretendard-Regular' !important;
        font-weight: 500;
        letter-spacing: -0.2px;
        text-decoration: none;
        border: none;
        line-height: 1.2;
        color: #131313;
    }

    button {
        border: none;
    }

`



// 화면에서 모든 스타일을 적용시킬 것이기 때문에 외부에서 사용할 수 있도록
export default GlobalStyle;