import React from "react"
import { ButtonStyled } from "./style"
import Twitter from "components/Twitter"

const Button = ({ icon, text, color, handleClick }) => {
  return (
    <ButtonStyled onClick={handleClick}>
      <Twitter />
      &nbsp; {text}
    </ButtonStyled>
  )
}

export default React.memo(Button)
