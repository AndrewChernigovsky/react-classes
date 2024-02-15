import React from "react";
import { Film } from "../components/Film/Film";
import { Comments } from "../components/Comments/Comments";


export class Page_1 extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<>
				<h2>Films</h2>
				{/* <Film /> */}
				<Comments />
			</>
		)
	}
}