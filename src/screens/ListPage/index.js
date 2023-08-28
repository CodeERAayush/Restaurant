import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, StatusBar, Text, Modal, TouchableOpacity } from 'react-native';
import * as Data from '../../../data.json';
import { Colors } from '../../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import ListCard from '../../components/ListCard';
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Images } from '../../assets/Images';
import BottomModal from '../../components/Modal/bottomModal';
const ListPage = ({ navigation }) => {
    // console.log(Data?.array?.categories[0])
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerStyle: {
                backgroundColor: Colors.Secondary,
            },
            headerTintColor: Colors.White,
            title: "Menu",
            headerBackVisible: false,
            headerShadowVisible: false,
        })
    }, []);
    const [searchText, setSearchText] = useState('')
    const [searched, setSearched] = useState(true)
    const [visible, setVisible] = useState(false)
    const [vegOrNon, setIsVeg] = useState('')
    const [runner, setRunner] = useState(false)
    const [customerRating, setCustomerRating] = useState(false)
    const [data, setData] = useState(Data?.array?.categories)
    const [filData, setFilData] = useState([])
    const searchItem = (text) => {
        let result = data?.filter((data) => data?.name?.toLocaleLowerCase().startsWith(searchText.toLocaleLowerCase()))
        setSearched(result)
    }

    useEffect(() => {
        if (vegOrNon === '') {
            setData(Data?.array?.categories)
        }
        else if (vegOrNon === 'veg') {
            //show veg without customer rating
            const filteredData = Data?.array?.categories.filter((item) => item?.vegOrNon === 'veg')
            setData(filteredData)
        }
        else if (vegOrNon === 'non') {
            //show veg without customer rating
            const filteredData = Data?.array?.categories.filter((item) => item?.vegOrNon === 'non')
            setData(filteredData)
        }
    }, [runner])

    const compareByPosition = (a, b) => {
        return a.position - b.position;
    }

    useEffect(() => {
        if (customerRating) {
            let temp = Data?.array?.categories
            temp.sort(compareByPosition)
            setData(temp)
        }
        else if (!customerRating) {
            setData(Data?.array?.categories)
        }
        

    }, [customerRating])


    useEffect(()=>{
        setData(Data?.array?.categories)
    },[])

    return (

        <>
            <StatusBar barStyle="light-content" backgroundColor={Colors.Secondary} translucent={true} />
            <SafeAreaView style={styles.main_container}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <TouchableOpacity
                            onPress={() => setVisible(true)}
                        >
                            <Image
                                source={Images.filter_ico}
                                style={{ height: 24, width: 24, marginLeft: 30, marginTop: 3 }}
                            />
                        </TouchableOpacity>
                        {
                            vegOrNon  ?
                                <Text
                                    onPress={() => {
                                        setIsVeg('')
                                        setData(Data?.array?.categories)
                                    }}
                                    style={{ marginLeft: 25, color: 'blue' }}>clear</Text> : null
                        }
                    </View>
                    <TextInput
                        placeholder='Search...'
                        value={searchText}
                        onChangeText={(text) => {
                            setSearchText(text)
                            searchItem(searchText)
                        }}
                        style={{ backgroundColor: 'white', width: '75%', marginRight: 20, marginLeft: 10, borderRadius: 20, alignSelf: 'center', marginBottom: 10, fontSize: 12, alignItems: 'center', paddingVertical: 2, paddingHorizontal: 10, paddingRight: 40 }}
                    />
                    <Image
                        source={Images.search_ico}
                        style={{ height: 24, width: 24, position: 'absolute', right: 45, bottom: 15, zIndex: 1000 }}
                    />
                </View>
                {!searchText ?
                    <View style={styles.body_holder}>
                        <Text style={styles.heading}>{vegOrNon===''?'All':vegOrNon==='veg'?'Veg':'Non Veg'}</Text>
                        <FlatList
                            style={styles.list_container}
                            data={data}
                            keyExtractor={() => Math.random() * 10 + 22}
                            renderItem={({ item, index }) => (
                                <ListCard
                                    item={item}
                                    onPressCard={(data) => {
                                        navigation.push('DetailsPage', item)
                                    }}
                                />
                            )}
                            showsVerticalScrollIndicator={false}
                        />

                    </View>
                    :
                    <View style={styles.body_holder}>
                        <FlatList
                            style={styles.list_container}
                            data={searched}
                            keyExtractor={() => Math.random() * 10 + 22}
                            ListEmptyComponent={() => <Text style={{ alignSelf: 'center' }}>No Items Found</Text>}
                            renderItem={({ item, index }) => (
                                <ListCard
                                    item={item}
                                    onPressCard={(data) => {
                                        navigation.push('DetailsPage', item)
                                    }}
                                />
                            )}
                            showsVerticalScrollIndicator={false}
                        />

                    </View>
                }
                <BottomModal
                    visible={visible}
                    isClose={() => setVisible(false)}
                    vegOrNon={vegOrNon}
                    setIsVeg={setIsVeg}
                    setCustomerRating={setCustomerRating}
                    customerRating={customerRating}
                    runner={runner}
                    setRunner={setRunner}
                />
            </SafeAreaView>
        </>
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
        elevation: 20
    },
    list_container: {
        backgroundColor: 'white',
        marginTop: 13,
        marginHorizontal: 10
    },
    heading:{
        alignSelf:'center',
        letterSpacing:0.6,
        color:'black',
        fontSize:18,
        marginTop:10,
        fontWeight:'700'
    }
})

export default ListPage;
