import styles from './SelectInput.module.scss'

function SelectInput({
	items,
	label,
} : {
	items: {[key: string] : string}
	label: string
}) {
	let options = Object.keys(items).map((key: string) => {
		return <option key={key} value={key}>{items[key]}</option>
	})
  return (
	<div className={styles.wrapper}>
		<label>{label}</label>
		<select className={styles.select}>
			{options}
		</select>
	</div>
  )
}

export default SelectInput
