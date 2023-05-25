import { StyleSheet, Text, View, Image, Dimensions, } from 'react-native'
import React from 'react'
// import Entypo from 'react-native-vector-icons/Entypo'

const MiniCard = (props) => {
    return (
        <View style={{ flexDirection: 'row', margin: 10, marginBottom: 0, }}>
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


        </View>
    )
}

export default MiniCard

const styles = StyleSheet.create({})