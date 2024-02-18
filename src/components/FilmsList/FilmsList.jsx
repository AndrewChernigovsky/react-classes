import React from "react";
import { Film } from "../Film/Film";
import styles from "./FilmsList.module.scss";

export class FilmsList extends React.Component {

	render() {
		const { films, genre } = this.props;

		return (
			<>
				{

					films.map((film) => {
						for (let prop in film.genre) {
							if (prop === genre) {
								return (
									<>
										<ul className={styles.films}>{
											film.genre[prop].map((film, index) => {
												return (
													< Film key={film + index} film={film} isFilm={true} />
												)
											})
										}
										</ul>
									</>
								)
							}
						}

					})
				}
			</>
		);
	}
}