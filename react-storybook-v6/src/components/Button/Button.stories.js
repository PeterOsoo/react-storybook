import React from "react"
import Button from "./Button"

// defualt export
export default {
	title: "Form/Button",
	component: Button,
	args: {
		children: "Button",
	},
	// second key value pairs is optional, some addons rely
}

//specify named exports
// named export is a react component
export const Primary = () => <Button variant="primary">Primary</Button>

export const Secondary = () => <Button variant="secondary">Secondary</Button>

export const Success = () => <Button variant="success">Success</Button>

export const Danger = () => <Button variant="danger">Danger</Button>

// create and visualize UI components in isolation
// story book playground for UI components

const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
	variant: "primary",
	// children: "Primary Args",
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
	variant: "secondary",
	// children: "Secondary Args",
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
	...PrimaryA.args,
	// children: "Long Primary Args",
}
