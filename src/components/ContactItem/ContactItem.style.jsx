import styled from '@emotion/styled'

export const ListItem=styled.li`
color:black;
display:flex;
justify-content:space-between;
align-items:center;
margin-top:20px;
`
export const ContactData=styled.span`
color:green;
`

export const Button=styled.button`
font-size:32px;
width:200px;
/* margin-right:auto;
margin-left:auto; */
box-shadow: 0px 0px 8px 5px rgba(177,175,209,1);
&:hover, :focus {
    box-shadow: 0px 0px 8px 5px #bace36;
    background-color:#ad24a9;
  }
`