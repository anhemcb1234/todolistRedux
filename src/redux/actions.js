export const addToDoAction = (data) => {
    return {
    type:'todoList/addToDo',
    payload: data
}}
export const searchFilter = (data) => {
    return {
    type:'filters/search',
    payload: data
}}

export const statusFilter = (data) => {
    return {
    type:'filters/status',
    payload: data
}}
export const prioriryFilter = (data) => {
    return {
    type:'filters/prioriryFilter',
    payload: data
}}
