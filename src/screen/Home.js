// import { View, Text, FlatList, TouchableOpacity, Image, Button, ActivityIndicator } from 'react-native'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchVideoRequest } from '../redux/action/videoAction'
// import Card from '../component/Card'
// import Header from '../component/Header'


// const Home = () => {
//   const dispatch = useDispatch();

//   const videos = useSelector((state) => state.video.response);
//   // console.log(videos,'videos')
//   useEffect(() => {
//     dispatch(fetchVideoRequest())
//   }, [dispatch])

//    const renderLoader = () => {
//      return (
//        <View style={{ alignItems: 'center',marginBottom:20 }}>
//          <ActivityIndicator size={'large'} color='#aaa' />
//        </View>
//      )
//    }
//   const  loadMoreItem = () => {
//     dispatch(fetchVideoRequest())
//   }

//   const renderItem = ({item}) => {
//     return (
//       <Card id={item.id}
//         title={item.snippet.title}
//         channel={item.snippet.channelTitle}
//       channelId={item.snippet.channelId} 
//       />
//     )
//   }
//   return (
//     <View style={{  flex: 1, marginBottom: 35 }}>
//       <Header />

//       <FlatList
//         data={videos}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         ListFooterComponent={renderLoader}
//         onEndReached={loadMoreItem}
//         onEndReachedThreshold={0}
//       />

//     </View>
//   )
// }

// export default Home;

import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, StatusBar, Button, TouchableOpacity } from "react-native";
import axios from "axios";
import Card from '../component/Card'
import Header from '../component/Header'

const Home = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = () => {
    setIsLoading(true);
    axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&key=AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI')
      .then(res => {
        //setUsers(res.data.results);
        // console.log(res.data.nextPageToken)
        setUsers({...users, ...res.data});
        setCurrentPage(res.data.nextPageToken)
        // console.log(users.items,'users')
        setIsLoading(false);
      });
  };

  const renderItem = ({ item }) => {
    return (
      <Card id={item.id}
        title={item.snippet.title}
        channel={item.snippet.channelTitle}
        channelId={item.snippet.channelId}
      />
    );
  };

  const renderLoader = () => {
    return (
      isLoading ?
        <View style={styles.loaderStyle}>
          <TouchableOpacity>
            <Text>loading ...</Text>
          </TouchableOpacity>
          <ActivityIndicator size="large" color="#aaa" />

        </View> : null
    );
  };

  const loadMoreItem = () => {
    
    setIsLoading(true);
    axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&key=AIzaSyAyMJeg087PAyESac5IzkrFD1F-5u2RLmI&pageToken=${currentPage}`)
      .then(res => {
        //setUsers(res.data.results);
        // console.log(res.data.nextPageToken)
        setUsers({...users, ...res.data});
        setCurrentPage(res.data.nextPageToken)
        // console.log(users.items,'users')
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <Header />
      {/* {console.log(users)} */}
      <FlatList
        data={users.items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListFooterComponent={renderLoader}
        // onEndReached={loadMoreItem}
        // onEndReachedThreshold={0.5}
      />
      <View style={{margin:30}}></View>
    </>
  );
};

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  txtNameStyle: {
    fontSize: 16,
  },
  txtEmailStyle: {
    color: "#777",
  },
  loaderStyle: {
    // marginVertical: 16,
    alignItems: "center",
  },
});

export default Home;