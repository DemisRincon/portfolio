"use client";
import { FC, useCallback, useEffect, useMemo, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

interface StrongProps {
	list: string[];
}

const StrongRoulete: FC<StrongProps> = ({ list }) => {
	const [index, setIndex] = useState(0);
	const listMemorized = useMemo(() => list, [list]);

	const updateMiddleHeadingIndex = useCallback(() => {
		setIndex((prevIndex) => (prevIndex + 1) % listMemorized.length);
	}, [listMemorized.length]);

	useEffect(() => {
		const interval = setInterval(updateMiddleHeadingIndex, 3000);
		return () => clearInterval(interval);
	}, [updateMiddleHeadingIndex]);

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={index}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				transition={{ duration: 0.3 }}
				role="alert"
				aria-live="assertive"
			>
				<strong>{listMemorized[index]}</strong>
			</motion.div>
		</AnimatePresence>
	);
};

export default StrongRoulete;
