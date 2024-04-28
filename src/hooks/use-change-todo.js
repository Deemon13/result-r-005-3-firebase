import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const useChangeTodo = (id, setFilter, setIsChanging) => {
	const submitChanges = event => {
		event.preventDefault();

		const form = event.currentTarget;
		const newTitle = form.elements.changeTodo.value;

		const todosDbRef = ref(db, `todos/${id}`);

		set(todosDbRef, {
			userId: 1,
			title: newTitle,
			completed: false,
		}).then(() => {
			setFilter('');
			setIsChanging(false);
		});
	};

	return {
		submitChanges,
	};
};
