import React from "react"
import Button from "./Button"
import Center from "../Center/Center"

export default {
	title: "Form/Button",
	component: Button,

	// second key value pairs is optional
}

export const Primary = () => (
	<Center>
		<Button variant="primary">Primary</Button>
	</Center>
)
export const Secondary = () => (
	<Center>
		<Button variant="secondary">Secondary</Button>
	</Center>
)

export const Success = () => (
	<Center>
		<Button variant="success">Success</Button>
	</Center>
)

export const Danger = () => (
	<Center>
		<Button variant="danger">Danger</Button>
	</Center>
)

// create and visualize UI components in isolation
// story book playground for UI components
