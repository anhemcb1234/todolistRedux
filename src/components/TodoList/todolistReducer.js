const initState = [
        {id: 1, name:'learn yoga', completed:false, prioriry:'Medium'},
        {id: 2, name:'learn yoga1', completed:false, prioriry:'Medium'},
]
const todolistReducer = (state = initState, action) => {
    switch(action.type) {
        case 'todoList/addToDo':
            const newState = [...state].concat(action.payload)
            console.log(action.payload)
            console.log(newState)
        return newState
            
    default: 
            return state
    }
}

export default todolistReducer