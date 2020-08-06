import React from "react"
import Button from "./Button"

export default {
	title: "Button",
	component: Button,
	// second key value pairs is optional
}

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>

// create and visualize UI components in isolation
// story book playground for UI components