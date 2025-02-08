import { useState, FormEvent } from 'react'
import styles from './BuildForm.module.css'

function BuildForm() {
	const [formData, setFormData] = useState({
		tables: 0,
		chairs: 0,
		guests: 0
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: Number(value)
		}))
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log("Configuration set:", formData)
	}

	return (
		<div className={styles.formContainer}>
			<h2 className={styles.formTitle}>Configurador de espacio</h2>
			<form onSubmit={handleSubmit}>
				<div className={styles.inputGroup}>
					<label htmlFor="tables">Number of Tables:</label>
					<input
						id="tables"
						name="tables"
						className={styles.formInput}
						type="number"
						value={formData.tables === 0 ? '' : formData.tables}
						onChange={handleChange}
						min={0}
						step={1}
					/>
				</div>

				<div className={styles.inputGroup}>
					<label htmlFor="chairs">Number of Chairs:</label>
					<input
						id="chairs"
						name="chairs"
						className={styles.formInput}
						type="number"
						value={formData.chairs === 0 ? '' : formData.chairs}
						onChange={handleChange}
						min={0}
						step={1}
					/>
				</div>

				<div className={styles.inputGroup}>
					<label htmlFor="guests">Expected Guests:</label>
					<input
						id="guests"
						name="guests"
						className={styles.formInput}
						type="number"
						value={formData.guests === 0 ? '' : formData.guests}
						onChange={handleChange}
						min={0}
						step={1}
					/>
				</div>

				<button
					className={styles.submitButton}
					type="submit"
				>
					Configure Space
				</button>
			</form>

			<div className={styles.summary}>
				<h3>Current Configuration:</h3>
				<p>Tables: {formData.tables}</p>
				<p>Chairs: {formData.chairs}</p>
				<p>Expected Guests: {formData.guests}</p>
			</div>
		</div>
	)
}

export default BuildForm
