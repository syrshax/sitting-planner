import { useState } from 'react';
import BuildForm from './pages/BuildForm';
import styles from './App.module.css';
import CanvasLayer from './pages/Canvas';
import ClearButton from './pages/ClearButton';

function App() {
	const maxHeigt = window.innerHeight * 0.7
	const maxWidht = window.innerWidth * 0.7
	const [formData, setFormData] = useState({ tables: 0, guests: 0 });
	const [layout, setLayout] = useState<Array<{ type: string; x: number; y: number; width?: number; height?: number; radius?: number }>>([]);

	const handleFormChange = (name: string, value: number) => {
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Configuration set:', formData);
		// Generate layout based on form data
		const generatedLayout = generateLayout(formData.tables, formData.guests);
		setLayout(generatedLayout);
	};

	// Example layout generator (replace with your logic)
	const generateLayout = (tables: number, guests: number) => {
		const layout = [];
		let x = 50;
		let y = 50;

		for (let i = 0; i < tables; i++) {
			layout.push({ type: 'table', x, y, width: 100, height: 50 });
			x += 100 + 25;
			if (x + 150 >= maxWidht) {
				x = 50
				y += 100
			}


		}
		y += 25;
		x = 150;
		for (let j = 0; j < guests; j++) {
			layout.push({ type: 'chair', x: x - 60, y: y + 60, radius: 10 });
			x += 30
			if (x >= maxWidht) {
				x = 100
				y += 100
			}
		}

		return layout;
	};

	const handleClearCanvas = () => {
		setLayout([]); // Clear layout immediately (optional but recommended)
		setFormData({ tables: 0, guests: 0 }); // Reset form data
		console.log("Canvas cleared.");
	};

	return (
		<div className={styles.appContainer}>
			{/* Top Bar */}
			<header className={styles.topBar}>
				<h1>Sitting Planner APP</h1>
			</header>

			{/* Main Content */}
			<main className={styles.mainContent}>
				<div className={styles.lefPanel}>
					<BuildForm
						formData={formData}
						onChange={handleFormChange}
						onSubmit={handleFormSubmit}
					/>
					<ClearButton
						onClear={handleClearCanvas}
					/>
				</div>
				<div className={styles.rightPanel}>
					<h2>Sitting Plan</h2>
					<CanvasLayer
						room={{ width: maxWidht, height: maxHeigt }}
						objects={layout}
					/>
				</div>
			</main>
		</div>
	);
}

export default App;
