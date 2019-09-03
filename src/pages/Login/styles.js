import styled from "styled-components";

export const Container = styled.div`
 header {
   width:100%;
   height: 80px;;
   background: #292929;
   color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
  }

 div {
  justify-content:center;
  align-content:center;
  align-items:center;
  display:flex;
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

  button{
  width:40%;
  height:25px;
  margin:15px;
  border-radius:6px;
  border-style:hidden;
  cursor: pointer;
  }

  input[type="email"],input[type="password"]{
    margin-top:15px;
    width:250px; 
    height:25px;
    border-radius:2px;
    border-style:hidden;
    background:#fff;
  }

  h1{
    display:flex;
    margin-bottom:100px;
    color:white;
    font-size:30pt;
  } 

  .lk{
    color:white;
    padding-top:40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration:none;
  }

  @media only screen and (max-width: 700px) {
    margin:20px auto;
    form{
      width:300px;
  }
  }`