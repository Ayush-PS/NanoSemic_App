import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import icons from Expo
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";


type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Home: undefined;
    Register: undefined;
    Device: { selectedDevice: string }
};

type DeviceScreenRouteProp = RouteProp<RootStackParamList, 'Device'>;

const Device = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false);

    const route = useRoute<DeviceScreenRouteProp>();
    const { selectedDevice } = route.params;

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const toggleHamburgerMenu = () => {
        setHamburgerMenuVisible(!hamburgerMenuVisible);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Image
                    style={styles.himg}
                    source={require("../../assets/NanoSemicLogo_whiteBG.jpg")}
                />
                <Text style={styles.headerText}>NANO SEMIC</Text>
            </View>



            <View style={styles.imgContainer}>
                <Image
                    style={styles.logoImg}
                    source={require("../../assets/test.png")}
                />
            </View>

            <View style={styles.deviceInfoContainer}>
                <Text style={styles.deviceInfoText}>{selectedDevice.toUpperCase()}</Text>
            </View>

        </SafeAreaView>
    );
};

export default Device;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 16,
        paddingTop: "10%",
        backgroundColor: "#fff",
        marginBottom: 20,
    },
    himg: {
        width: 50,
        height: 50,
        margin: 5,
        borderRadius: 10,
        marginRight: 10,
    },
    headerText: {
        fontWeight: "400",
        fontSize: 18,
    },
    hamburgerMenu: {
        padding: 10,
    },
    hamburgerMenuDropdown: {
        position: "absolute",
        top: 85,
        right: 25,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        zIndex: 1,
    },
    hamburgerMenuItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#ccc",
    },
    hamburgerMenuText: {
        fontSize: 16,
    },
    imgContainer: {
        // flex: 0.7,
        marginBottom: 20,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
    },
    logoImg: {
        width: 200,
        height: 200,
    },
    deviceInfoContainer: {
        // backgroundColor: 'red',
        padding: 20,
    },
    deviceInfoText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
