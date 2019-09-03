import { createGlobalStyle } from "styled-components";

import Telalog from "../assets/coffe.jpg";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Fjalla+One|Lobster&display=swap');
*{
  padding:0;
  margin:0;
  font-family: 'Fjalla One', sans-serif;
}

body{
  background-image:url(${Telalog});
  background-repeat:no-repeat;
  background-size:cover;
}

.lk1{
  color:white;
  padding-top:20px;
}

.lk1:hover{
  color:gray;
 `
