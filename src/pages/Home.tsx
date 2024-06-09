import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import icons from Expo
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";


type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Home: undefined;
  Register: undefined;
  Device: { selectedDevice: string }
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

const Home = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState('');


  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleSelectDevice = (device: string) => {
    setSelectedDevice(device);
    setDropdownVisible(false);
    navigation.navigate('Device', { selectedDevice: device });
  };

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
        <TouchableOpacity style={styles.hamburgerMenu} onPress={toggleHamburgerMenu}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {hamburgerMenuVisible && (


        <View style={styles.hamburgerMenuDropdown}>
          <TouchableOpacity style={styles.hamburgerMenuItem}>
            <Text style={styles.hamburgerMenuText}>Add Device</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.hamburgerMenuItem}>
            <Text style={styles.hamburgerMenuText}>Device 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hamburgerMenuItem}>
            <Text style={styles.hamburgerMenuText}>Device 3</Text>
          </TouchableOpacity> */}
        </View>

      )}

      <View style={styles.imgContainer}>
        <Image
          style={styles.logoImg}
          source={require("../../assets/test.png")}
        />
        <Image
          style={styles.centerImg}
          source={require("../../assets/Device.png")}
        />
      </View>
      <View>

        <TouchableOpacity style={styles.addButton} onPress={toggleDropdown}>
          <Text style={styles.addButtonText}>SELECT DEVICE</Text>
          {dropdownVisible ? <Ionicons name="arrow-up" size={24} color="black" /> : <Ionicons name="arrow-down" size={24} color="black" />}
        </TouchableOpacity>
      </View>

      {dropdownVisible && (
        <View style={styles.dropdown}>
          <ScrollView style={{ width: '100%' }}>
            {['device 1', 'device 2', 'device 3', 'device 4', 'device 5', 'device 6'].map((device) => (
              <TouchableOpacity key={device} style={styles.dropdownItem} onPress={() => handleSelectDevice(device)}>
                <Text style={styles.dropdownText}>{device}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;

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
    justifyContent: "space-between",
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
    flex: 0.7,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  centerImg: {
    margin: 30,
    width: 150,
    height: 150,
  },
  logoImg: {
    width: 220,
    height: 220,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    width: 200,
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 10,
    justifyContent: "center"
  },
  addButtonText: {
    fontSize: 16,
    color: "black",
    marginLeft: 5,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    // margin:10,
    position: "absolute",
    top: 620,
    alignItems: "center",
    width: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    maxHeight: 150,
    overflow: "hidden",
    // zIndex: 1,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    alignItems: "center",
    // backgroundColor: "red"
  },
  dropdownText: {
    fontSize: 16,
  },
});
