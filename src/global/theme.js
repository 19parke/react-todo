// theme 
const theme = {};

    theme.PALETTE = {
        primary: {
            main: "#ffd159",
            sub: "#fff4d8",
        },
        secondary: "#f1ebf5",
        white: "#fff",
        gray: {
            100: "#F1EBF5",
            200: "#AEA8B2",
            300: "#605866",
        },
        error: "#eb6144",
        background: {
            white: "#fff",
            gray: "#f1ebf5",
            black: "#333"
        }
    }

    theme.FONT_SIZE = {
        h1: "55px",
        h2: "40px",
        h3: "30px",
        h4: "21px",
        h5: "18px",
        h6: "16px",
        h7: "12px",
    }

    theme.FONT_WEIGHT = {

        thin: "100",
        regular: "400",
        blod: "800",
        
    }

    theme.FONT_LINE = {

        h1: "75px",
        h2: "55px",
        h3: "41px",
        h4: "29px",
        h5: "25px",
        h6: "22px",
        h7: "17px",

    }

// 웹에서 써야 하므로 외부에서 App.js에서 themeprovider를 사용하여 감싸야 할 페이지들 감싸주기, 
// 어떤 테마를 적용할지도 적어준다.       <ThemeProvider theme={theme}>

export default theme;