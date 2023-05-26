// apikey = AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI

import axios from "axios";

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=songs&type=video&key=[]

export const fetchVideoData = async () => {

    // try {
    //   console.log('api')
    //     const response = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI');
    //     // console.log(response.json(), 'response')
    //     const data = await response.json();
    //     // console.log(data, 'result')
    //     return data.items;
    //   } catch (error) {
    //     console.log('error')
    //   }
    const response = await axios.get('https://www.googleapis.com/youtube/v3/videos',{
        params:{
          key:'AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI',
          part:'snippet',
          chart:'mostPopular',
          regionCode: 'IN',
          maxResults: 15
        },
      })
      const result =response.data.items
       return result; 
}
// import axios from 'axios'
// const baseUrl = 'https://www.googleapis.com/youtube/v3/videos'

// const fetchData = () => {
//   const configurationObject ={
//     method: 'get',
//     url: `${baseUrl}`
//   }
// }

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=rating&q=songs&type=video&key=AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI


export const fetchSearchData = async (action) => {

  try {
    // // console.log('api')
    //   const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=rating&q=${value}&type=video&key=AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI`);
    //   // console.log(response.json(), 'response')
    //   const data = await response.json();
    //   // console.log(data.items, 'result')
      // return data.items;
    console.log(action)
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
        params:{
          key:'AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI',
          q:action,
          part:'snippet',
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