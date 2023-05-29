import { fetch_Recommended_Video_Request,fetch_Recommended_Video_Success } from "../constant";


export const fetchRecommendedVideoRequest = value => {
  return {
    type: fetch_Recommended_Video_Request,
    value
  }
};

export const fetchRecommendedVideosSuccess = videos => {
  return {
    type: fetch_Recommended_Video_Success,
    videos,
  }
};

