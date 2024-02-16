import React from "react";
import { Film } from "../components/Film/Film";
import { Comments } from "../components/Comments/Comments";
import { Layout } from "../Layout/Layout";


export class Main extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<>
				<Layout>
					<h1>Main</h1>
					<Comments />
				</Layout>
			</>
		)
	}
}