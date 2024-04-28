import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export const useCreateTodo = () => {
	const [isCreating, setIsCreating] = useState(false);

	const createTodo = event => {
		event.preventDefault();
		setIsCreating(true);

		const form = event.currentTarget;
		const todoTitle = form.elements.todo.value;

		const todosDbRef = ref(db, 'todos');

		push(todosDbRef, {
			userId: 1,
			title: todoTitle,
			completed: false,
		}).then(() => {
			setIsCreating(false);
		});

		form.reset();
	};

	return {
		isCreating,
		createTodo,
	};
};
