import React from "react"
import Button from "components/Button"

export default function Share({ icon, text, color, handleClick }) {
  return (
    <Button
      icon={icon}
      text={text}
      color={color}
      onClick={handleClick}
    ></Button>
  )
}
