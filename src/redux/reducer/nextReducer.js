import { fetch_Recommended_Video_Success } from '../constant'


const recommendedReducer = (state = { videos: [], }, action) => {
  switch (action.type) {
    case fetch_Recommended_Video_Success:
      return {
        ...state.videos,
        response: action.response
      };
    default:
      return state;
  }
}

export default recommendedReducer;