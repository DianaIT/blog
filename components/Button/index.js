import React from "react"
import { ButtonStyled } from "./style"

const Button = ({ icon, text, color, handleClick }) => {
  const Icon = import(`components/${icon}`)

  return (
    <ButtonStyled style={{ backgroundColor: color }} onClick={handleClick}>
      <Icon />
      &nbsp; {text}
    </ButtonStyled>
  )
}

export default React.memoU(Button)
