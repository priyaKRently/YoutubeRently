import { fetch_Video_Request, set_Video, } from "../constant";


export const fetchVideoRequest = () => {
  return {
    type: fetch_Video_Request,
  }
};

export const fetchVideosSuccess = videos => {
  return {
    type: set_Video,
    videos,
  }
};

// export const fetchVideosFailure = (error) => ({
//   type: 'FETCH_VIDEOS_FAILURE',
//   payload: error,
// });

