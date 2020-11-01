import React from "react"
import { Primary } from "../Button/Button.stories"
import { Large } from "../Input/Input.stories"

// default export
export default {
	title: "Form/Subscription",
}

// write te story
export const PrimarySubscription = () => (
	<>
		<Large />
		<Primary />
	</>
)
