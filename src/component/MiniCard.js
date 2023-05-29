import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
// import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
const MiniCard = (props) => {
    const navigation = useNavigation();


    return (
        <View style={{ flexDirection: 'row', margin: 10, }}>
            <TouchableOpacity onPress={() => navigation.navigate('VideoPlayer', {
                videoId: props.id,
                title: props.title,
                channel: props.channel
            })}
                style={{ flexDirection: 'row', margin: 10, marginBottom: 0, }}>
                <Image source={{ uri: `https://i.ytimg.com/vi/${props.id}/hqdefault.jpg` }}
                    style={{
                        height: 90,
                        width: '45%',
                        resizeMode: 'cover',
                        borderRadius: 10
                    }} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{
                        fontSize: 17,
                        fontWeight: 500,
                        color: 'black',
                        width: Dimensions.get('screen').width / 2 - 10
                    }}
                        ellipsizeMode='tail'
                        numberOfLines={3} >
                        {props.title}</Text>
                    <Text>{props.channel}</Text>
                </View>
            </TouchableOpacity>


        </View>
    )
}

export default MiniCard

const styles = StyleSheet.create({})