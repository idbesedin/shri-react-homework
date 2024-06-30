import { Link } from 'react-router-dom'
import styles from './FilmCard.module.scss'

export interface IFilm {
	description: string
	id: string
	genre: string
	poster: string
	release_year: number
	title: string
	rating: string
}

function FilmCard({film} : {film: IFilm}) {
  return (
	<Link className={styles.card} to={`/films/${film.id}`}>
	  <img src={film.poster} alt="img" className={styles.poster}/>
	  <div className={styles.info}>
			<p className={styles.title}>{film.title}</p>
			<div className={styles.wrapper}>
				<p className={styles.light}>Жанр</p>
				<p className={styles.main}>{film.genre}</p>
			</div>
			<div className={styles.wrapper}>
				<p className={styles.light}>Год выпуска</p>
				<p className={styles.main}>{film.release_year}</p>
			</div>
			<div className={styles.wrapper}>
				<p className={styles.light}>Описание</p>
				<p className={styles.main}>{film.description}</p>
			</div>
	  </div>
	</Link>
  )
}

export default FilmCard
