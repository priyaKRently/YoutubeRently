import { set_Video, fetch_Recommended_Video_Success, fetch_Video_Request, fetch_Recommended_Video_Request } from '../constant'

const initialState = {
    videos: [],
    nextPageToken: '',
    loading: false,
    recommendedVideos: [],
    recommendedNextPageToken: '',
    recommendedLoading: false,
    recommendedError: null,
}


const nextReducer = (state = initialState, action) => {
    switch (action.type) {
        case fetch_Video_Request:
            return {
                ...state,
                loading: true,
            }
        case set_Video:
            return {
                ...state,
                loading: false,
                videos: [...state.videos, ...action.payload.videos],
                nextPageToken: action.payload.nextPageToken,
            };
        case fetch_Recommended_Video_Request:
            return {
                ...state,
                recommendedLoading: true,
            }
        case fetch_Recommended_Video_Success:
            return {
                ...state,
                recommendedLoading: false,
                recommendedVideos: [
                    ...state.recommendedVideos,
                    ...action.payload.videos,
                ],
                recommendedNextPageToken: action.payload.nextPageToken,
            }
        default:
            return state;

    }
}


export default nextReducer;