import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = (props) => {
    return (
        <View style={{felx:1,
            backgroundColor: 'white',
            // borderRadius: 8,
            // padding: 15,
            // marginVertical: 10,
            marginBottom: 25,
            borderRadius:30,
            elevation: 5,
            marginHorizontal: 30,
            // shadowRadius: 3,
            
        }}>
            <Image source={{uri:`https://i.ytimg.com/vi/${props.id}/sddefault.jpg`}}
                style={{
                    height: 190,
                    width: '100%',
                    borderTopLeftRadius:30,
                    borderTopRightRadius:30,
                    resizeMode: 'cover'
                }} />

            <View style={{ flexDirection: 'row', padding: 5 }}>
            <Image source={{uri:`https://i.ytimg.com/vi/${props.channelId}/hqdefault.jpg`}}
                style={{
                    height: 40,
                    width: 40,
                    borderRadius:50,
                    // resizeMode: 'center'
                }} />
                <View style={{ marginHorizontal: 10, }}>
                    <Text style={{
                        width: Dimensions.get('screen').width - 130,
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
