import {
  fetch_Video_Request,
  set_Video,
  fetch_Recommended_Video_Request,
  fetch_Recommended_Video_Success
} from "../constant";


export const fetchVideoRequest = pageToken => {
  return {
    type: fetch_Video_Request,
    payload: pageToken,
  }
};

export const fetchVideosSuccess = (videos, nextPageToken) => {
  return {
    type: set_Video,
    payload: { videos, nextPageToken }
  }
};

// export const fetchVideosFailure = (error) => ({
//   type: 'FETCH_VIDEOS_FAILURE',
//   payload: error,
// });

export const fetchRecommendedVideoRequest = (videoId, pageToken) => {
  return {
    type: fetch_Recommended_Video_Request,
    payload: { videoId, pageToken }
  }
}

export const fetchRecommendedVideoSuccess = (videoId, pageToken) => {
  return {
    type: fetch_Recommended_Video_Success,
    payload: { videoId, pageToken }
  }
}
