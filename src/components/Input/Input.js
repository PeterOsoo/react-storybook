import React from "react"
import "./Input.css"

const Input = props => {
	const { variant, children, ...rest } = props
	return (
		<div>
			<input className={`input ${variant}`} {...rest}></input>
		</div>
	)
}

export default Input
