// action = {
//  type: 'CREATE_EVENT'
//  title: 'test title'
//  body: 'test body'
//}
// # before
// state = []
//
// action = {
//   type: 'CREATE_EVENT',
//   title: 'テストのタイトルです',
//   body: 'テストのボディです'
// }
//
// # before
// state = []
//
// # after
// state = [
// {
//   id: 1,
//   title: 'テストのタイトルです',
//   body: 'テストのボディです'
// }
//
//
// # before
// state = [
//  {id: 1, title: 'titel1', body: 'body1},
//  {id: 2, title: 'titel2', body: 'body2},
//  {id: 3, title: 'titel3', body: 'body3}
//]
//
// # after
// state = [
//  {id: 1, title: 'titel1', body: 'body1},
//  {id: 2, title: 'titel2', body: 'body2},
//  {id: 3, title: 'titel3', body: 'body3},
// { id: 4, title: 'テストのタイトルです',  body: 'テストのボディです'}
//


const events = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = {title: action.title, body: action.body}
      const length = state.length
      const id = length === 0 ? 1 : state[length -1].id + 1
      return [...state, {id, ...event}]
    case 'DELETE_EVENT':
      return state
    case 'DELETE_ALL_EVENTS':
      return []
    default:
      return state
  }
}

export default events