import { set_Search } from '../constant'


const searchReducer = (state = { search: [], }, action) => {
  switch (action.type) {
    case set_Search:
      return {
        ...state.search,
        response: action.response
      };
    default:
      return state;
  }
}

export default searchReducer;