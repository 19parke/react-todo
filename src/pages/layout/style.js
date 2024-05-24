import styled from "styled-components";

// 모바일 화면 같이 만들어주기 위해

const S = {};

    S.Backgournd = styled.div`
        width: 100%;
        height : 100vh;
        background-color: #f5f5f5;
        display : flex;
        justify-content: center;
        align-items: center;
    `

    S.Wrapper = styled.div`
        width: 430px;
        height: 800px; //혹인 800 자신의 화면에 맞게
        background-color: #fff;
        display: flex;
        flex-direction: column;
        padding: 0 30px;
    `

    S.Main = styled.main`
        flex: 1;
    `

    S.Header = styled.header`
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        & a {
            font-size: 24px;
            font-weight: 600;
            display: block;
        }
    `

    S.Nav = styled.nav`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        & a {
            font-size: 16px;
            text-align: center;

            & p {
                color: #bec4c9;
            }

            .icon {
                font-size: 24px;
                padding: 4px;
                path {
                    color : #bec4c9
                }
            }

        }

        /* NavLink, active라서 따로 색을 지정할 수 있다. */
        & .active {
            & p {
                color : #917cf0 !important;
            }

            /* 덮어씌우기 */
            & path {
                color : #917cf0 !important;
            }
        }
    `


export default S;