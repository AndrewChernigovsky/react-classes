import React from "react";
import { Container } from "./Container";
import { Header } from "./Header";
import { Footer } from "./Footer";


export class Layout extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<>
				<Container>
					<Header />
					<main>
						{this.props.children}
					</main>
					<Footer />
				</Container>
			</>
		)
	}
}