// we need to use a click event to update the open state

export function Button({ text, onClick }) {
	return (
		<button
			type="button"
			className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			onClick={onClick}
		>
			{text}
		</button>
	);
}
