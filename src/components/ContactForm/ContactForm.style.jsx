import styled from '@emotion/styled'

export const FORM=styled.form`
color:grey;
display:flex;
flex-direction:column;
`
export const Label=styled.label`
display:flex;
flex-direction:column;
margin-left:10px;
align-items:center;
`
export const Input=styled.input`
height:40px;
width:200px;
box-shadow: 0px 0px 8px 5px rgba(177,175,209,1);
&:hover, :focus {
    box-shadow: 0px 0px 8px 5px #bace36;}
`
export const Button=styled.button`
font-size:32px;
width:200px;
margin-right:auto;
margin-left:auto;
margin-top:20px;
box-shadow: 0px 0px 8px 5px rgba(177,175,209,1);
`