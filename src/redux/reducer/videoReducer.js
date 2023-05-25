import { set_Video } from '../constant'


const videoReducer = (state = { videos: [], }, action) => {
  switch (action.type) {
    case set_Video:
      return {
        ...state.videos,
        response: action.response
      };
    default:
      return state;
  }
}

export default videoReducer;