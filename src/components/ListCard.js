import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../constants/Colors';
import { Images } from '../assets/Images';
const ListCard = (props) => {
    const { onPressCard, item } = props
    return (
        <TouchableOpacity
            onPress={() => onPressCard(item)}
            style={styles.card}>
            <View style={styles.content}>
                <Image
                    source={Images.dummyfood}
                    style={styles.preview_image}
                />
                <View style={styles.description}>
                    <Text style={styles.heading}>{item?.name}</Text>
                    <Text style={styles.subtitle}>{item?.description}</Text>
                </View>
            </View>
            <View style={styles.misc}>
                <Text style={[styles.subtitle, { marginTop: 10, marginLeft: 20, fontSize: 14 }]}>₹{item?.sub_items[0]?.price}</Text>
                <Text style={[styles.subtitle, { marginTop: 10, marginLeft: 20, fontSize: 10 }]}>customer rating (rank): {item?.position}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '95%',
        height: 150,
        backgroundColor: Colors.White,
        elevation: 5,
        marginBottom: 5,
        borderRadius: 40,
        marginTop: 5,
        paddingVertical: 20,
        alignSelf: 'center'
    },
    content: {
        flexDirection: 'row',
        height: 80,
        backgroundColor: 'aliceblue',
        marginHorizontal: 5,
        borderRadius: 40,
    },
    heading: {
        color: Colors.Black,
        fontWeight: '700',
        fontSize: 15,
        letterSpacing: 0.5,
        lineHeight: 20
    },
    subtitle: {
        color: Colors.gray,
        fontWeight: '700',
        fontSize: 10,
        letterSpacing: 0.5,
        lineHeight: 20,
    },
    description: { width: 250, borderTopRightRadius: 40, borderBottomRightRadius: 40, height: 120, overflow: 'hidden' },
    preview_image: { height: 80, width: 80, borderRadius: 40 },
    misc: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-between'
    }
})

export default ListCard;
