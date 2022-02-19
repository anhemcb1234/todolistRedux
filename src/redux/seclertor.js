export const toDoListSelctor = (state) => {
    const newState = state.todoList.filter((x) => {
        console.log(state.filters.status)
        if(state.filters.status === 'All') {
            return x.name.includes(state.filters.search)
        }
        return (
            x.name.includes(state.filters.search) && (state.filters.status === 'Completed' ? x.completed : !x.completed) 
        ) 
    });
    return newState
}
