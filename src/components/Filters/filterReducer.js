const initState = {
        search: '',
        status: 'All',
        priority: []
}
const filterReducer = (state = initState, action) => {
    switch(action.type) {
        case 'filters/search':
            return {
                
                    ...state,
                    search: action.payload
                
            }
        case 'filters/status': 
            return {
                
                    ...state,
                    status: action.payload
                
            }
        case 'filters/prioriryFilter':
            return {
                
                    ...state,
                    prioriry: [...action.payload]
                
            }
    default: 
            return state
    }
}

export default filterReducer