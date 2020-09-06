import React from "react"
import "./Button.css"

const Button = props => {
	const { variant, children, ...rest } = props

	// variant for button types
	return (
		<div>
			<button className={`button ${variant}`} {...rest}>
				{children}
			</button>
		</div>
	)
}

export default Button
