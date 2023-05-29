const apikey = 'AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI'

import axios from "axios";
// import { access_Token } from "../redux/constant";
import AsyncStorage from "@react-native-async-storage/async-storage";
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=songs&type=video&key=[]

// const accessToken = async () => {
//   const accessData = await AsyncStorage.getItem('access_Token');
//   const accessTo = await JSON.parse(accessData);
//   return accessTo;
// }
// const access_Token_Data = accessToken();
// // console.log();
// // console.log(access_Token_Data,'atd')

export const fetchVideoData = async (action) => {
  const accessData = await AsyncStorage.getItem('access_Token');
  // const accessToken = await JSON.parse(accessData);
  const data = await axios('https://youtube.googleapis.com/youtube/v3/videos', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessData,
    },
    params:{
      key: apikey,
      part: 'snippet',
      chart: 'mostPopular',
      // regionCode: 'in',
      maxResults: 5,
      // pageToken:''
    }
  })
  // console.log(data.data.nextPageToken);
  return data.data.items;
}



//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=rating&q=songs&type=video&key=AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI


export const fetchSearchData = async (action) => {

  try {

    // console.log(action)

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
    // console.log(response.data);
    // console.log(response.data.items)
    const result = response.data.items;
    return result;
  } catch (error) {
    console.log('error')
  }

}

export const fetchPlaylistData = async () => {
  const accessToken = await AsyncStorage.getItem('access_Token');
  // console.log(accessToken)
  // const access_Token = await JSON.parse(accessToken)
  // console.log(access_Token);
  
  const data = await axios('https://youtube.googleapis.com/youtube/v3/playlists', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
    params:{
      key: apikey,
      part: 'snippet',
      chart: 'mostPopular',
      regionCode: 'IN',
      maxResults: 15,
    }
  })
  // console.log(data);
  return data.data.items;
}


