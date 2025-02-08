import BuildForm from './pages/BuildForm'
import styles from './App.module.css'

function App() {
	return (
		<div className={styles.appContainer}>
			{/* Top Bar */}
			<header className={styles.topBar}>
				<h1>My Configuration App</h1>
			</header>

			{/* Main Content */}
			<main className={styles.mainContent}>
				<div className={styles.leftPanel}>
					<BuildForm />
				</div>
				<div className={styles.rightPanel}>
					{/* Future components can go here */}
					<h2>Right Panel Content</h2>
				</div>
			</main>
		</div>
	)
}

export default App
