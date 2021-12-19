import styled from "styled-components";

export const Container = styled.header`
   background: var(--blue);
`;

export const Coontent = styled.div`
   max-width: 1120px;
   margin: 0 auto;
   padding: 1.5rem 1rem 12rem;

   display: flex;
   align-items: center;
   justify-content: space-between;

   button{
       font-size: 1rem;
       background-color:var(--blue-light);
       color: #FFFFFF;
       padding: 0 2rem;
       border: 0;
       border-radius: 0.25rem;
       height: 3rem;

       &:hover{
           filter: brightness(0.9);
       }
   }

`;

