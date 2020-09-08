import { crudHOOD } from './hods'


const { reducer, get } = crudHOOD('thunk', 'https://jsonplaceholder.typicode.com/users')

export default reducer
export const myThunk = get
