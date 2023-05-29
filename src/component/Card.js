import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
const Card = (props) => {
    const navigation = useNavigation();
    // const videos = useSelector((state) => state.video.response);

    return (
        <View style={{
            felx: 1,
            backgroundColor: 'white',
            // borderRadius: 8,
            // padding: 15,
            // marginVertical: 10,
            marginBottom: 25,
            borderRadius: 30,
            elevation: 5,
            marginHorizontal: 30,
            // shadowRadius: 3,

        }}>
            <TouchableOpacity onPress={() => navigation.navigate('VideoPlayer', { videoId: props.id, title: props.title, channel: props.channel})}>
                <Image source={{ uri: `https://i.ytimg.com/vi/${props.id}/sddefault.jpg` }}
                    style={{
                        height: 190,
                        width: '100%',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        resizeMode: 'cover'
                    }} />
            </TouchableOpacity>


            <View style={{ flexDirection: 'row', padding: 5 }}>
                {/* <Image source={{ uri: `https://i.ytimg.com/vi/${props.channelId}/hqdefault.jpg` }}
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 50,
                        // resizeMode: 'center'
                    }} /> */}
                <View style={{ marginHorizontal: 10, }}>
                    <Text style={{
                        width: Dimensions.get('screen').width - 100,
                        fontSize: 18,
                        fontWeight: 500,
                        color: 'black',
                    }}
                        ellipsizeMode='tail'
                        numberOfLines={2}
                        textBreakStrategy='highQuality'
                    >{props.title}</Text>
                    <Text style={{ fontSize: 16, color: 'black' }}>
                        {props.channel}</Text>
                </View>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({})
