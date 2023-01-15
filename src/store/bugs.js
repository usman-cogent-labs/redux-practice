import { createAction, createReducer } from '@reduxjs/toolkit';

export const bugAdded = createAction('bugAdded');
export const bugRemoved = createAction('bugRemoved');
export const bugResolved = createAction('bugResolved');

createReducer([], {
	[bugAdded.type]: (bugs, action) => {
		bugs.push({
			id: ++lastId,
			description: action.payload.description,
			resolved: false,
		});
	},
	[bugRemoved]: (bugs, action) => {
		bugs.filter((bug) => bug.id !== action.payload.id);
	},
	[bugResolved.type]: (bugs, action) => {
		const index = bugs.findIndex((bug) => bug.id === action.payload.id);
		bugs[index].resolved = true;
	},
});
