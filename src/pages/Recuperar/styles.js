import styled from "styled-components";

export const Container = styled.div`
div {
    justify-content:center;
    align-content:center;
    align-items:center;
    display:flex;
   }
 
   h1{
     display:flex;
     margin-bottom:100px;
     color:white;
   } 
 
  
    form {
     align-content:center;
     align-items:center;
     justify-content:center;
     margin-top: 200px;
     display:flex;
     flex-direction:column;
     background:rgb(000,000,000,70%);
     height:500px;
     width:400px;
     border-radius:5px;
    }
  
    input[type="text"],input[type="email"],input[type="password"]{
      margin-top:15px;
      width:250px; 
      height:25px;
      border-radius:2px;
      border-style:hidden;
      background:#fff;
    }
 
    button{
     width:40%;
     height:25px;
     margin:15px;
     border-radius:6px;
     border-style:hidden;
     cursor: pointer;
     }
  
    @media only screen and (max-width: 700px) {
      margin:20px auto;
      form{
        width:300px;
      }
     
      }`