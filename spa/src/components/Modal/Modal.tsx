import { createPortal } from "react-dom"
import styles from "./Modal.module.scss"
import cross_icon from 'assets/icons/close.svg'
function Modal({children, onClose, title} : {children: JSX.Element, onClose: () => void, title: string}) {
  return createPortal(
  <>
	<div className={styles.overlay} onClick={onClose}/>
  	<div className={styles.wrapper}>
		<div className={styles.header}>
			<p className={styles.title}>{title}</p>
			<img src={cross_icon} alt="close" onClick={onClose}/>
		</div>
		{children}
	</div>
  </>, 
  document.body)
}

export default Modal
