import { useRef, useState } from 'react';

export const useDebounce = (value) => {
	const [DebouncedVal, setDebouncedVal] = useState(value);
	const eventBlocker = useRef(null);

	clearTimeout(eventBlocker.current); //setTimeout초기화

	eventBlocker.current = setTimeout(() => {
		setDebouncedVal(value);
	}, 400);

	return DebouncedVal;
};
