import { SelectInput } from '..'
import styles from './FiltersBar.module.scss'

function FiltersBar() {
	const GENRES = {
		'0': 'Не выбран',
		"comedy": 'Комедия',
		drama: 'Драма',
		action: 'Боевик',
		thriller: 'Триллер',
		horror: 'Ужасы',
		family: 'Семейный',
		cartoon: 'Анимированный',
		fantasy: 'Фэнтези',
		romance: 'Романтика',
		adventure: 'Приключения',
		musical: 'Мьюзикл',
		war: 'Военный',
	}
	const YEARS = {
		'0': 'Не выбран',
		'2009': '2009',
		'2008': '2008',
		'2007': '2007',
		'2006': '2006',
		'1990-2005': '1990-2005',
		'1950-1989': '1950-1989',
	}
  return (
	<div className={styles.widget}>
	  <p className={styles.title}>Фильтр</p>
	  <SelectInput items={GENRES} label='Жанр'/>
	  <SelectInput items={YEARS} label='Год выпуска'/>
	</div>
  )
}

export default FiltersBar
