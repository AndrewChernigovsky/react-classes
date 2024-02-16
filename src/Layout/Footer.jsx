import React from "react";
import { Link } from "react-router-dom";
// import { Main } from "../pages/Main";

export class Footer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (<>

			<footer>
				<div className="container">
					{this.props.children}
					<nav>
						<ul>
							<li> <Link to="/">Главная</Link></li>
							<li> <Link to="/films">Фильмы</Link></li>
						</ul></nav>
				</div>
			</footer>
		</>)
	}
}