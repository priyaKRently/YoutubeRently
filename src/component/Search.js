import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchRequest } from '../redux/action/searchAction'
import MiniCard from './MiniCard'

const Search = () => {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.search.response);
  
  console.log(searchData,33)

  const searchList = () => {
    // console.log('button clicked')
    dispatch(fetchSearchRequest());
    // console.log(videos)
  }

  return (
    <View>

      <TouchableOpacity onPress={() => searchList()}>
        <Text style={{ fontSize: 30 }}>Fetch the videos</Text>
      </TouchableOpacity>
      <FlatList
        data={searchData}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({ item }) => {
          return (
            
            <MiniCard id={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle} />
          )
        }}
      />
    </View>
  )
}

export default Search;


// import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useEffect } from 'react'
// import queryString from 'query-string'
// import * as actionTypes from '../redux/action/searchAction'
// import axios from '../api/axios'
// import Card from './Card'
// import {connect} from 'react-redux'
// const Search = (props) => {

//   const params = queryString.parse(props.location.search)
//   const searchQuery = params.q;
//   const channelId = params.channelId;

//   const saveSearchResults = props.saveSearchResults;
//   const searchResultsCount = props.searchResultsCount;

//   useEffect(() => {
//     let SEARCH_API;
//     if (channelId) {
//       SEARCH_API = `/search?part=snippet&videoEmbeddable=true&order=relevance&type=video&maxResults=${searchResultsCount}&channelId=${channelId}&key=AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI`
//     } else if (searchQuery) {
//       SEARCH_API = `/search?part=snippet&videoEmbeddable=true&order=relevance&type=video&maxResults=${searchResultsCount}&q=${searchQuery}&key=AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI`
//     }

//     let VIDEO_API = `/videos?part=snippet%2CcontentDetails%2Cstatistics&key=AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI`

//     axios.get(SEARCH_API)
//       .then(res => res.data.items)
//       .then(items => {
//         const videoIds = items.map(item => item.id.videoId);
//         VIDEO_API += '&id=' + videoIds.join('%2C');
//         axios.get(VIDEO_API)
//           .then(res => res.data.items)
//           .then(videos => setTimeout(() => saveSearchResults(videos), 1000))
//           .catch(error => console.log(error));
//       })
//       .catch(error => console.log(error));

//   }, [searchQuery, channelId, saveSearchResults, searchResultsCount]);

//   const handleClickOnVideo = videoId => props.history.push({ pathname: '/watch', search: '?id=' + videoId });

//   const cards = props.searchResults.map(item => <Card
//     key={item.id}
//     videoId={item.id}
//     title={item.snippet.title}
//     channel={item.snippet.channelTitle}
//     publishedAt={item.snippet.publishedAt}
//     viewCount={item.statistics.viewCount}
//     clicked={() => handleClickOnVideo(item.id)}
//   />)

//   // Build array of skeleton loading rectangles, based on searchResultsCount and actual searchResults in the store
//   const cardsSkeleton = Array(props.searchResultsCount - cards.length).fill().map((item, index) => <CardSkeleton key={index} />);

//   return (
//     <View>
//       <Text>Search</Text>
//       <SearchBar position='left' />
//       <View>
//         {cards.length === props.searchResultsCount ? cards : cards.concat(cardsSkeleton)}
//       </View>
//       <TouchableOpacity onPress={() => props.increaseSearchResultsCount()}>
//         <Text>Load More</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     searchResults: state.searchResults,
//     searchResultsCount: state.searchResultsCount
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     saveSearchResults: (data) => dispatch({
//       type: actionTypes.SAVE_SEARCH_RESULTS,
//       results: data
//     }),
//     increaseSearchResultsCount: () => dispatch({ type: actionTypes.INCREASE_SEARCH_RESULTS_COUNT }),
//     resetSearchResultsCount: () => dispatch({ type: actionTypes.RESET_SEARCH_RESULTS_COUNT })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Search);

// const styles = StyleSheet.create({})