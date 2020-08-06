import React from "react"
import Input from "./Input"

export default {
	title: "Input",
	component: Input,
}

export const Primary = () => <Input variant="primary">Primary</Input>
export const Secondary = () => <Input variant="secondary">Secondary</Input>
export const Success = () => <Input variant="success">Success</Input>
export const Danger = () => <Input variant="danger">Danger</Input>

// create and visualize UI components in isolation
// story book playground for UI components
