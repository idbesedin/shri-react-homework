import classNames from 'classnames'
import styles from './Btn.module.scss'

function Btn({children, type, onClick} : {children: string | JSX.Element, type: 'outline' | 'fill', onClick?: () => void}) {
  return (
	<button 
	className={classNames(styles.btn, styles[type])}
	onClick={onClick}
	>{children}</button>
  )
}

export default Btn
