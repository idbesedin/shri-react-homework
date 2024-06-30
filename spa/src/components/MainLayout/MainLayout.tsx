import { Outlet } from "react-router-dom"

import styles from './MainLayout.module.scss'
import profile_icon from 'assets/icons/person.svg'
import { useState } from "react"
import { Btn, Input, Modal } from "components"
import { useDispatch } from "react-redux"
import { fetchAuth, setPassword, setUsername } from "store/authorization/authorizationSlice"
import { useSelector } from "react-redux"
import { selectLoginData } from "store/authorization/authorizationSelectors"
import { RootState } from "store/index"

function MainLayout() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	let dispatch = useDispatch()
	let token = localStorage.getItem('token')
	let data = useSelector((state: RootState) => selectLoginData(state))
	const logOut = () => {
		localStorage.removeItem('token')
		window.location.reload()
	}
	const logIn = async () => {
    	await dispatch(fetchAuth(data)).then((response : any) => {
			if (response.payload.token) {
				setIsModalOpen(false)
			}
		})
	}

  return (
	<>
		<header className={styles.header}>
			<h1 className={styles.title}>Фильмопоиск</h1>
			{!token ? 
			<Btn type="fill" onClick={() => setIsModalOpen(true)}>Войти</Btn> 
			: 
			<div className={styles.wrapper}>
				<img src={profile_icon} alt="profile_icon" className={styles.icon}/>
				<Btn type="outline" onClick={logOut}>Выйти</Btn>
			</div>
			}
			{isModalOpen && 
				<Modal
				onClose={() => setIsModalOpen(false)}
				title="Авторизация"
				>
					<div className={styles.inputs}>
						<Input label="Логин" placeholder="Введите логин" onBlur={(e) => dispatch(setUsername(e.target.value))}/>
						<Input label="Пароль" placeholder="Введите пароль" onBlur={(e) => dispatch(setPassword(e.target.value))}/>
						<div className={styles.btns}>
							<Btn type="fill" onClick={logIn} >Войти</Btn>
							<Btn type="outline" onClick={() => setIsModalOpen(false)}>Отменить</Btn>
						</div>
					</div>
				</Modal>}
		</header>
	  	
		<div className={styles.body}>
			<Outlet/>
		</div>
		
	</>
  )
}

export default MainLayout
