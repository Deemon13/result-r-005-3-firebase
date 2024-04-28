/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect } from 'react';
import { debounce } from 'lodash';

export const useFilter = (todos, filter, setFilteredTodos, setFilter) => {
	useEffect(() => {
		const filteredTodos = !filter
			? Object.entries(todos)
			: Object.entries(todos).filter(item => {
					console.log(item[1].title);
					item[1].title.toLowerCase().includes(filter.toLowerCase());
			  });

		console.log(filteredTodos);
		setFilteredTodos(filteredTodos);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filter]);

	const handleFilterDebounce = debounce(value => {
		setFilter(value);
	}, 300);

	const handleFilter = event => {
		handleFilterDebounce(event.target.value);
	};

	return {
		handleFilter,
	};
};
