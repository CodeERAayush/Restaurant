import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, SafeAreaView,Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import * as Data from '../../../data.json';
import { Colors } from '../../constants/Colors';
import { Images } from '../../assets/Images';
const DetailsPage = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerStyle: {
                backgroundColor: Colors.Secondary,
            },
            headerTintColor: Colors.White,
            title: "Detail",
            headerBackVisible: false,
            headerShadowVisible: false,
        })
    }, []);
    const route = useRoute()
    const [data, setData] = useState(route?.params)
    return (
        <SafeAreaView style={styles.main_container}>
            <View style={styles.body_holder}>
                <View style={styles.image_holder}>
                    <Image
                        source={Images.dummyfood}
                        style={styles.preview_image}
                    />
                </View>
                <View style={styles.des_holder}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.price}>₹{data.sub_items[0].price}</Text>
                <Text style={styles.heading}>Description</Text>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.description}>Cuisine: {data?.sub_items[0]?.cuisine_name}</Text>
                <Text style={[styles.description,{color:data?.vegOrNon==='non'?'red':'green'}]}>{data?.vegOrNon==='non'?'Non Veg':'Veg'}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: Colors.Secondary
    },
    body_holder: {
        backgroundColor: Colors.White,
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        elevation: 2
    },
    preview_image: {
        height: '100%',
        width: '100%',
        borderRadius: 40
    },
    image_holder: {
        height: 200,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 40,
        elevation: 5,
        backgroundColor: Colors.White,
        marginTop: 10
    },
    des_holder:{marginHorizontal:20,marginTop:10},
    name:{color:'black',fontSize:18,fontWeight:'800',letterSpacing:0.6},
    price:{color:'green',fontSize:14,fontWeight:'800',letterSpacing:0.6},
    heading:{color:'black',fontSize:16,fontWeight:'800',letterSpacing:0.6,marginVertical:10},
    description:{color:'black',fontSize:12,fontWeight:'600',letterSpacing:0.6}
})

export default DetailsPage;
