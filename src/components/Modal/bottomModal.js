import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import { Colors } from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const BottomModal = ({ visible, isClose, runner, setRunner, vegOrNon, setIsVeg, setCustomerRating, customerRating }) => {

    return (
        <Modal
            isVisible={visible}
            onBackdropPress={() => isClose()}
            swipeDirection={['down']}
            style={styles.bottomModal}
        >
            {/* {renderModal} */}
            <View style={styles.bottomSheet}>
                <View
                    style={{ height: 4, width: 50, backgroundColor: 'black', borderRadius: 10, alignSelf: 'center', marginBottom: 10 }}
                />
                <TouchableOpacity
                    onPress={() => {
                        setIsVeg('veg')
                        setRunner(!runner)
                        isClose()
                    }}
                    style={styles.button}>
                    <View style={{ height: 50, width: 50, backgroundColor: Colors.LightGrey, borderRadius: 9999, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
                        <FontAwesome
                            name={'caret-square-o-up'}
                            size={28}
                            color={'green'}
                        />
                    </View>
                    <Text style={styles.buttonText}>Veg</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setIsVeg('non')
                        setRunner(!runner)
                        isClose()
                    }}
                    style={styles.button}>
                    <View style={{ height: 50, width: 50, backgroundColor: Colors.LightGrey, borderRadius: 9999, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
                        <FontAwesome
                            name={'caret-square-o-down'}
                            size={28}
                            color={'red'}
                        />
                    </View>
                    <Text style={styles.buttonText}>Non Veg</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setCustomerRating(!customerRating)
                        isClose()
                    }}
                    style={styles.button}>
                    <View style={{ height: 50, width: 50, backgroundColor: Colors.LightGrey, borderRadius: 9999, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
                        <Ionicons
                            name='star'
                            size={28}
                            color={Colors.Golden}
                        />
                    </View>
                    <Text style={styles.buttonText}>Customer Rating</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    bottomSheet: {
        backgroundColor: 'white',
        padding: 2,
        elevation: 5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    button: {
        paddingVertical: 20,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: "center",
    },
    buttonText: {
        fontSize: 17,
        color: '#000',
        fontWeight: '500',
    },
    line: { height: 1, width: '90%', alignSelf: 'center' }
});

export default BottomModal;
