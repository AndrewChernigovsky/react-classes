import React from "react";
import styles from './Film.module.scss'
import { Link } from "react-router-dom";

export class Film extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowPoster: false
		};
	}

	showModalPoster = () => {
		this.setState(prevState => ({
			isShowPoster: !prevState.isShowPoster
		}));
	}

	render() {
		const { film, isList } = this.props;
		const { isShowPoster } = this.state;

		return (
			<li className={styles.film + ' ' + styles.film__item}>
				<div className={styles.film__desc}>

					<div className={styles.film__heading}>
						<h2>{film.title}</h2>
						<p className={styles.base_text}><b>Дата выхода:</b> {film.year}</p>
						<p className={styles.base_text}><b>Рейтинг</b>: {film.rating}</p>

						{isList && <>
							<p className={styles.base_text}><b>Описание: </b>{film.desc}</p>
							<p className={styles.base_text}><Link to='/'>Смотреть фильм</Link></p>
						</>}
					</div>
					<img className={styles.film__poster} src={film.poster} alt={film.title} onClick={() => this.showModalPoster()} />
					{isShowPoster && <><div className={styles.film__poster + ' ' + styles.film__poster_active} onClick={() => this.showModalPoster()} >
						<img className={styles.film__poster} src={film.poster} alt={film.title} />
						<div className={styles.film__mini_desc}>
							<p className={styles.base_text}><b>Описание: </b>{film.desc}</p>
							<p className={styles.base_text}><Link to='/'>Смотреть фильм</Link></p>
						</div>
					</div>


					</>}
				</div>
				{
					isList &&
					<><iframe className={styles.film__video} src={film.video} width="853" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameBorder="0" allowFullScreen></iframe>
						<div className={styles.film__screenshots}>
							<ul className={styles.film__listScreenshots}>
								{
									film.screenshots.map((screenshot) => {
										return <li key={screenshot}><img src={screenshot} alt="" /></li>
									})
								}
							</ul>
						</div>
						<div className={styles.film__data}>
							<ul>
								<li>Страна:</li>
								{film.countries.map((country) => {
									return <li key={country}>{country}</li>
								})}
							</ul>
							<ul><li>Жанр:</li>
								{film.genre.map((genre) => {
									return <li key={genre}>{genre}</li>
								})}
							</ul>
							<ul><li>Перевод:</li>
								{film.translation.map((translation) => {
									return <li key={translation}>{translation}</li>
								})}
							</ul>
							<ul><li>Режиссёр:</li>
								{film.director.map((director) => {
									return <li key={director}>{director}</li>
								})}
							</ul>
							<ul><li>Сценарист:</li>
								{film.scenario.map((scenario) => {
									return <li key={scenario}>{scenario}</li>
								})}
							</ul>
							<ul><li>Продюссер:</li>
								{film.producer.map((producer) => {
									return <li key={producer}>{producer}</li>
								})}
							</ul>
							<ul><li>Композитор:</li>
								{film.composer.map((composer) => {
									return <li key={composer}>{composer}</li>
								})}
							</ul>
							<ul><li>Художники:</li>
								{film.artists.map((artists) => {
									return <li key={artists}>{artists}</li>
								})}
							</ul>
							<ul><li>Видеомонтаж:</li>
								{film.installation.map((installation) => {
									return <li key={installation}>{installation}</li>
								})}
							</ul>
							<ul><li>Качество видео:</li>
								{film.quality.map((quality) => {
									return <li key={quality}>{quality}</li>
								})}
							</ul>
							<ul><li>Тип файла:</li>
								{film.type.map((type) => {
									return <li key={type}>{type}</li>
								})}
							</ul></div></>
				}
			</li >
		)
	}
}