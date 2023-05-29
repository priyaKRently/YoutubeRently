const apikey = 'AIzaSyA-Ti_K6aqml1RGZpqRKt3IdIXVoVlZN2I'

import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=songs&type=video&key=[]


export const fetchVideoData = async () => {
  const accessData = await AsyncStorage.getItem('access_Token');

  const data = await axios('https://youtube.googleapis.com/youtube/v3/videos', {
    method: 'GET',
    params: {
      key: apikey,
      part: 'snippet',
      chart: 'mostPopular',
      regionCode: 'in',
      maxResults: 15,
    }
  })
  return data.data.items;
}

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=rating&q=songs&type=video&key=AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI


export const fetchSearchData = async (action) => {

  try {

    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: apikey,
        q: action,
        part: 'snippet',
        type: 'video',
        regionCode: 'IN',
        maxResults: 15
      },
    })

    const result = response.data.items;
    return result;
  } catch (error) {
    console.log('error')
  }

}

export const fetchRecommendedData = async (action) => {

  try {

    const pageToken = await AsyncStorage.getItem('next_Page_Token_search')

    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: apikey,
        type: 'video',
        part: 'snippet',
        type: 'video',
        regionCode: 'IN',
        maxResults: 20,
        pageToken: pageToken,
        relatedToVideoId: action
      },
    })
    const result = response.data.items;
    console.log(result)
    return result;
  } catch (error) {
    console.log('error')
  }
}



