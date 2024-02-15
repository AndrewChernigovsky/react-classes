import React from "react";

export class Film extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { film } = this.props;
		return (
			<li>
				<h2>{film.title}</h2>
				<p>{film.year}</p>
				<p>{film.desc}</p>
				<div className="wrapper">
					<ul>
						{
							film.screenshots.map((screenshot) => {
								return <li key={screenshot}><img src={screenshot} alt="" /></li>
							})
						}
					</ul>
				</div>
				<img src={film.poster} alt="" />
				<iframe src={film.video} width="853" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameBorder="0" allowfullscreen></iframe>
				<ul>
					{film.countries.map((country) => {
						return <li>{country}</li>
					})}
				</ul>
				<ul>
					{film.genre.map((genre) => {
						return <li>{genre}</li>
					})}
				</ul>
				<ul>
					{film.translation.map((translation) => {
						return <li>{translation}</li>
					})}
				</ul>
				<ul>
					{film.director.map((director) => {
						return <li>{director}</li>
					})}
				</ul>
				<ul>
					{film.scenario.map((scenario) => {
						return <li>{scenario}</li>
					})}
				</ul>
				<ul>
					{film.producer.map((producer) => {
						return <li>{producer}</li>
					})}
				</ul>
				<ul>
					{film.composer.map((composer) => {
						return <li>{composer}</li>
					})}
				</ul>
				<ul>
					{film.artists.map((artists) => {
						return <li>{artists}</li>
					})}
				</ul>
				<ul>
					{film.installation.map((installation) => {
						return <li>{installation}</li>
					})}
				</ul>
				<ul>
					{film.quality.map((quality) => {
						return <li>{quality}</li>
					})}
				</ul>
				<ul>
					{film.type.map((type) => {
						return <li>{type}</li>
					})}
				</ul>
				<p>{film.rating}</p>
			</li >


		)
	}
}