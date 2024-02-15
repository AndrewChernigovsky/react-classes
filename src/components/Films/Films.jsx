import React from "react";
import { Film } from "../Film/Film";

export class Films extends React.Component {
	render() {
		console.log(this.props);
		const { films } = this.props;
		return (
			<>
				<ul>
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
