import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Kanit', sans-serif;
        ::-webkit-scrollbar {
            width: 13px;
            height: 13px;
            }
        ::-webkit-scrollbar-thumb {
            background: #7d4b0a;
            border-radius: 10px;
            }
        ::-webkit-scrollbar-thumb:hover{
            background: #424242;
            }
        ::-webkit-scrollbar-track{
            background: #f8f8f8;
            border-radius: 10px;
        }
    }

    body{
        overflow-x: hidden;
    }
`