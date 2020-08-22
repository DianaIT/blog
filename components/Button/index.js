import React from "react"
import { ButtonStyled } from "./style"
import Twitter from "components/Twitter"

const Button = ({ text, url }) => {
  const handleClick = () => {
    window.location.href = url
  }
  return (
    <ButtonStyled onClick={handleClick}>
      <Twitter />
      &nbsp; {text}
    </ButtonStyled>
  )
}

export default React.memo(Button)
