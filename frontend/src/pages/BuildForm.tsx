import { FormEvent } from 'react';
import styles from './BuildForm.module.css';

interface BuildFormProps {
	formData: { tables: number; guests: number };
	onChange: (name: string, value: number) => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

function BuildForm({ formData, onChange, onSubmit }: BuildFormProps) {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		onChange(name, Number(value));
	};

	return (
		<div className={styles.formContainer}>
			<h2 className={styles.formTitle}>Basic Settings</h2>
			<form onSubmit={onSubmit}>
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

				<button className={styles.submitButton} type="submit">
					Configure Space
				</button>
			</form>
		</div>
	);
}

export default BuildForm;
