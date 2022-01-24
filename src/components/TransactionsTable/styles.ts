import styled from "styled-components";

export const Conteiner = styled.div`
margin-top: 3rem;
table{
    width: 100%;
    border-spacing: 0 0.5rem;
}
th{
    color: var( --text-body);
    font-weight: 400;
    padding:  1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
}
td{
    padding: 1rem 2rem;
    border: 0;
    background: var(--shop);
    color: var(--text-body);
    &:first-child{
        color: var(--text-title);
    }
}
tr{
        border-radius: 1.5rem;
    }
    .deposito{
         color: var(--green);
    }
    .withdraw{
         color: var(--red);
    }
` 