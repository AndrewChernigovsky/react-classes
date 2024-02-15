import React from "react";
import { Film } from "./../Film/Film";
import styles from "./Films.module.scss";

export class Films extends React.Component {
	render() {
		const { films } = this.props;
		return (
			<>
				<ul className={styles.films}>
					{
						films[0].genre.horror.map((film, index) => {
							return (
								< Film key={film + index} film={film} />
							)
						})
					}
				</ul>
			</>

		);
	}
}
