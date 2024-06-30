import styles from './Input.module.scss'

function Input({
	label, placeholder, isRequired = true, onBlur
}: {
	label: string
	placeholder: string
	isRequired?: boolean
	onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
	<div className={styles.wrapper}>
		<div> 
			<label>{label}</label>
			{isRequired && <span className={styles.required}>*</span>}
		</div>
	  	<input type="text" className={styles.input} placeholder={placeholder} onBlur={onBlur}/>
	</div>
  )
}

export default Input
