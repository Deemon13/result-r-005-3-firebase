import { useState } from 'react';

import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useDeleteTodo = setFilter => {
	const [isDeleting, setIsDeleting] = useState(false);

	const deleteTodo = id => {
		setIsDeleting(true);

		const todosDbRef = ref(db, `todos/${id}`);

		remove(todosDbRef)
			.then(() => {
				setFilter('');
			})
			.finally(() => {
				setIsDeleting(false);
			});
	};

	return {
		isDeleting,
		deleteTodo,
	};
};
