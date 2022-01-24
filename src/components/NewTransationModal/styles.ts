import styled from "styled-components";

export const Conteiner = styled.form`
h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
}
input{
 
  width: 100%;
    height: 4rem;
    border-radius: 0.25rem;
    background: var(--inputBg);
    border: 1px solid #d7d7e7;
    font-weight: 400;
    font-size: 1rem;
     &::placeholder{
        padding:0em 1rem;
     }
    & + input{
        margin-top: 1rem;
    }

 
}
button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 0.5rem;
        transition:filter 0.2s;
    &:hover{
        filter:brightness(0.9);
    }

    }
`

export const TransationTypeConteiner = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.rem;
   
`
interface typeRadio{
    istypeRadio:boolean
}
export const RadioType = styled.button<typeRadio>`

        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        background: ${(props)=>props.istypeRadio? '#333':'transparent' };

        display: flex;
        align-items: center;
        margin-left: 0.25rem;
        justify-content: center;
        transition: border-color 0.2s;

    
    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
    &:hover{
         
    }
    img{
    width: 20px;
    height: 20px;
}

&.deposito{
         color: var(--green);
    }
    &.withdraw{
         color: var(--red);
    }
`
