import { fetch_Search_Request, set_Search, } from "../constant";


export const fetchSearchRequest = (value) => {
  return {
    type: fetch_Search_Request,
    value
  }
};

export const fetchSearchSuccess = search => {
  return {
    type: set_Video,
    search,
  }
};

// export const fetchVideosFailure = (error) => ({
//   type: 'FETCH_VIDEOS_FAILURE',
//   payload: error,
// });

