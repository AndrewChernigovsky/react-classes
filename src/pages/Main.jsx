import React from "react";
import { Film } from "../components/Film/Film";
import { Comments } from "../components/Comments/Comments";
import { Layout } from "../Layout/Layout";
import { FilmsList } from "../components/FilmsList/FilmsList.jsx";
import { data } from "./../data.js";


export class Main extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<>
				<Layout>
					<h1>Фильмы</h1>
					<div className="genre">
						<h2>Хоррор, Ужасы</h2>
						<FilmsList films={data} genre={'horror'} />
					</div>
					<div className="genre">
						<h2>Комедия</h2>
						<FilmsList films={data} genre={'comedy'} />
					</div>
					<Comments />
				</Layout>
			</>
		)
	}
}