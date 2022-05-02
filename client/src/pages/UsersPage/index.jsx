import UsersList from './ui/UsersList'

import styles from './styles.module.scss'

const UsersPage = () => {
	return (
		<section className={styles.UsersPage}>
			<div className="container">
				<h1 className={styles.UsersPage__title}>Пользователи</h1>
				<UsersList />
			</div>
		</section>
	)
}

export default UsersPage