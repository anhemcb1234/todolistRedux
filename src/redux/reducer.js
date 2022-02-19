const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        {id: 1, name:'learn yoga', completed:false, prioriry:'Medium'},
        {id: 2, name:'learn yoga1', completed:true, prioriry:'Medium'},

    ]
}
const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'todoList/addToDo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case 'filters/search':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload
                }
            }
        case 'status':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    status: action.payload
                }
            }
    default: 
            return state
    }
}

export default rootReducer