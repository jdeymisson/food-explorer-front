import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 min-height: 100vh;

 display: flex;
 flex-direction: column;
`

export const Content = styled.main`
 width: 100%;flex: 1;
 max-width: 136.8rem;
 height: 100%;
 padding-inline: 4rem;
 margin-inline: auto;


 @media (min-width: 768px) {

   width: 100%;

   padding-inline: 12.3rem;

 }

 > form div.btns-edit {

  display: flex;
  width: 100%;
  gap: 8px;

  justify-content: flex-end;

  margin-top: 2.4rem;

  > button {
    width: 20%;
  }

  > button.btn-excluir {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    border: 0;
    color: #fff;
  }
 }
`

export const ButtonBack = styled.div`
 width: 100%;
 margin: 2.4rem auto 4rem;
 display: flex;
 
 > a {
   display: flex;
   align-items: center;
   font-size: clamp(1.8rem, .4rem + 3vw, 2.4rem);

   color: ${({ theme }) => theme.COLORS.WHITE};
 }

 @media (min-width: 768px) {
   padding-inline: 0;
 }
`

export const Form = styled.form`
 display: flex;
 flex-direction: column;

 > header {
   legend {
     font-size: 3.2rem;
     margin-bottom: 3.2rem;
   }
 } 

 .smallBox {
   max-width: 23rem;

   #file {
     color: ${({ theme }) => theme.COLORS.GRAY_200};
     display: flex;
     flex-direction: column;
     gap: 0.8rem;

     div {
       display: flex;
       align-items: center;
       justify-content: center;
       gap: 1rem;
       border-radius: 0.5rem;
       height: 4.8rem;
       width: 22.9rem;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

;
       color: ${({ theme }) => theme.COLORS.WHITE};
     }
   }
   

   input[type="file"] {
     display: none;
   }
 }

 > button {
   margin-top: 2.4rem;
   height: 4.8rem;
   width: 50%;

   align-self: flex-end;
   
   &:disabled {
     opacity: 0.2;
     cursor: not-allowed;
     background: ${({ theme }) => theme.COLORS.RED};
   }

   @media (min-width: 768px) {
     width: 35.7rem;
   }
 }
`

export const InputWrapper = styled.div`
 display: flex;
 flex-wrap: wrap;
 
 margin-bottom: 4rem;

 gap: 4rem;

 @media (min-width: 768px) {
   flex-wrap: nowrap;
   column-gap: 3.2rem;
 }
`

export const SectionIngredients = styled.div`
 width: 100%;
 height: 4.8rem;
 display: flex;
 flex-direction: column;
 gap: 0.8rem;
 color: ${({ theme }) => theme.COLORS.GRAY_200};

 margin-bottom: 8rem;

 > div {
   display: flex;
   flex-wrap: wrap;
   gap: 1rem;
   max-height: max-content;
   padding: 0.8rem;
   border-radius: 0.5rem;

   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

 }

 @media (min-width: 768px) {
   margin-bottom: 0;

   > div {
     max-height: 4.8rem;
     gap: 2rem;
   }
 }
`