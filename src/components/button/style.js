import styled, { css } from "styled-components";

// 스타일 된 버튼을 만들기 위해

const variantCSS = {
    black: css`
        /* 우리가 키컬로 이미 정의해놓은 , theme에서 만들어 놓은 색 가져오기 */
        background-color: ${({theme}) => theme.PALETTE.background["black"]};
    `
}

const shapeCSS = {
    default : css``,
    small : css`
        border-radius: 10px;
    `,
    large : css`
        border-radius: 20px;
    `,
    big : css`
        border-radius: 30px;
    `,
    round : css`
        border-radius: 50%;
    `

}

const sizeCSS = {
    small : css`
        width: 64px;
        height: 32px;
        padding: 16px 0;
    `,
    medium : css`
        width: 96px;
        height: 48px;
        padding: 16px 0;
    `,
    large : css`
        width: 128px;
        height: 64px;
        padding: 16px 0;
    `,
    full : css`
        width: 100%;
        aspect-ratio: 8 / 1;
        padding: 16px 0;
    `
}

const colorCSS = {
    white : css`
        color: #fff;
    `, 
    black : css`
        color: #131313;
    `
}

// 내가 만든 스타일된 버튼, 속성들을 담은 최종 내 스타일 된 버튼 
const Button = styled.button`
    ${({variant}) => variantCSS[variant]}
    ${({shape}) => shapeCSS[shape]}
    ${({size}) => sizeCSS[size]}
    ${({color}) => colorCSS[color]}

    cursor : pointer;
`

export default Button;