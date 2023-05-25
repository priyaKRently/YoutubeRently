// apikey = AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=songs&type=video&key=[]

export const fetchVideoData = async () => {

    try {
      console.log('api')
        const response = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI');
        // console.log(response.json(), 'response')
        const data = await response.json();
        // console.log(data, 'result')
        return data.items;
      } catch (error) {
        console.log('error')
      }

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


export const fetchSearchData = async () => {

  try {
    // console.log('api')
      const response = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=rating&q=songs&type=video&key=AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI');
      // console.log(response.json(), 'response')
      const data = await response.json();
      // console.log(data.items, 'result')
      return data.items;
    } catch (error) {
      console.log('error')
    }

}