import React from "react";
import { Film } from "../components/Film/Film";
import { Comments } from "../components/Comments/Comments";


export class Main extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<>
				<h1>Main</h1>
				{/* <Film /> */}
				<Comments />
			</>
		)
	}
}