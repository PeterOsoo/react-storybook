import React from "react"
import Input from "./Input"
// input variations based on size

// component story format has a default expor
export default {
	title: "Form/Input",
	component: Input,

	// second property is optional
	//some addons rely on it
}

//every named export represents a story
export const Small = () => <Input size="small" placeholder="Small size" />
export const Medium = () => <Input size="medium" placeholder="Medium size" />
export const Large = () => <Input size="large" placeholder="Large size" />

// small.storyName = "small input"
// create and visualize UI components in isolation
// story book playground for UI components
