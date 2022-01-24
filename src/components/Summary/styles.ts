import styled from "styled-components";

export const Conteiner = styled.header`
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 2rem;
margin-top: -10rem;

div{
    background: var(--shop);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    strong{
        display: block;
        margin-top: 0.5rem;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 3rem;
        &.deposito{
         color: var(--green);
    }
    &.withdraw{
         color: var(--red);
    }
    }
    &.total-bg{
        background:var(--green);
        color: #FFFF;
    }
  

}

img{
    max-width: 30px;
}

`
