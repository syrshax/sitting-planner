import React, { MouseEvent } from 'react';

interface ClearButtonProps {
	onClear: () => void;
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClear }) => {
	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault(); // Prevent form submission if inside a form
		onClear(); // Call the provided onClear function
	};

	return (
		<button onClick={handleClick}>Clear Canvas</button>
	);
};

export default ClearButton;
