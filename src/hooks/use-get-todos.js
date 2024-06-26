import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const useGetTodos = () => {
	const [todos, setTodos] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const todosDbRef = ref(db, 'todos');

		return onValue(todosDbRef, snapshot => {
			const loadedTodos = snapshot.val() || {};

			setTodos(loadedTodos);
			setIsLoading(false);
		});
	}, []);

	return {
		todos,
		isLoading,
	};
};
