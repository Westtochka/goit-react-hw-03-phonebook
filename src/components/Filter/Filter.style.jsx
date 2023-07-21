import styled from '@emotion/styled'

export const Input=styled.input`
height:32px;
width:200px;
box-shadow: 0px 0px 8px 5px rgba(177,175,209,1);
&:hover, :focus {
    box-shadow: 0px 0px 8px 5px #bace36;
  }
`

export const Label=styled.label`
display:flex;
flex-direction:column;
align-items:center;
color:black;
margin-top:20px;
`