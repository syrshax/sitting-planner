import React from 'react';
import { Stage, Layer, Rect, Circle } from 'react-konva';

interface CanvasProps {
	room: { width: number; height: number };
	objects: Array<{ type: string; x: number; y: number; width?: number; height?: number; radius?: number }>;
}

const CanvasLayer: React.FC<CanvasProps> = ({ room, objects }) => {
	// Function to restrict dragging within canvas boundaries
	const getBoundaryCheck = (obj: { width?: number; height?: number; radius?: number }) => {
		return (pos: { x: number; y: number }) => {
			const minX = 20;
			const minY = 20;
			const maxX = (room.width - (obj.width || obj.radius || 0)) - 20;
			const maxY = (room.height - (obj.height || obj.radius || 0)) - 20;

			const x = Math.max(minX, Math.min(pos.x, maxX));
			const y = Math.max(minY, Math.min(pos.y, maxY));

			return { x, y };
		};
	};


	return (
		<Stage width={room.width} height={room.height}>
			<Layer>
				<Rect
					x={0}
					y={0}
					width={room.width}
					height={room.height}
					stroke="grey"
					strokeWidth={5}
				/>
				{objects.map((obj, i) =>
					obj.type === 'table' ? (
						<Rect
							key={i}
							x={obj.x}
							y={obj.y}
							z={10}
							width={obj.width}
							height={obj.height}
							fill="lightblue"
							draggable
							dragBoundFunc={getBoundaryCheck(obj)}

						/>
					) : (
						<Circle
							key={i}
							x={obj.x}
							y={obj.y}
							z={10}
							radius={obj.radius}
							fill="gray"
							draggable
							dragBoundFunc={getBoundaryCheck(obj)}
						/>
					)
				)}
			</Layer>
		</Stage>
	);
};

export default CanvasLayer;
