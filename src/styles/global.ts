import {createGlobalStyle} from 'styled-components';

export const GlobalStyle=createGlobalStyle`

:root{
    --fundo_globale:#f0f2f5
}
:root{
    --fundo_global:#f0f2f5
}
:root{
--red:#E52E4d
}
:root{

    --blue:#5429CC
    
}
:root{
    --blue-lignt:#6933FF
  
}
:root{
    --text-body:#969CB3
}
:root{

--shop:#FFFF
}
:root{

--text-title:#363F5F
}

:root{

--green:#33cc60
}
:root{

--inputBg:#e7e9ee;
}

margin:0;
padding:0;
box-sizing:border-box;
//
html{
    @media(max-width: 1080px){
        font-size: 93.75%;
    }
    @media(max-width: 720px){
        font-size: 87.5%;
    }
}

body{
    background: var(--fundo_global);
    -webkit-font-smoothing:antialiased;
}
button{
    cursor: pointer;
}
[disabled]{
opacity: 0.6;
cursor: not-allowed;
}
.react-modal-overlay{
background: rgba(0,0,0,0.5);
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
}
.react-modal-content{
    width: 100%;
    max-width: 586px;
    background: var(--fundo_global);
    position: relative;
    padding: 3rem;
    
    border-radius: 0.24px;
}
.react-modal-close{
    position: absolute;
    right: 1.5rem;
    border: 0;
    top: 1.3rem;
    background: transparent;
    color: var(--red);
    transition:filter 0.2s;
    &:hover{
        filter:brightness(0.9);
    }
}
`;




