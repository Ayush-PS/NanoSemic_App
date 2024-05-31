import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import icons from Expo

const Home = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false);

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
            <Text style={styles.hamburgerMenuText}>Menu Item 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hamburgerMenuItem}>
            <Text style={styles.hamburgerMenuText}>Menu Item 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hamburgerMenuItem}>
            <Text style={styles.hamburgerMenuText}>Menu Item 3</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.imgContainer}>
        <Image
          style={styles.centerImg}
          source={require("../../assets/test.png")}
        />
        <Image
          style={styles.centerImg}
          source={require("../../assets/Device.png")}
        />
      </View>

      <TouchableOpacity style={styles.addButton} onPress={toggleDropdown}>
        <Ionicons name="add" size={24} color="black" />
        <Text style={styles.addButtonText}>ADD DEVICE</Text>
      </TouchableOpacity>

      {dropdownVisible && (
        <View style={styles.dropdown}>
          <TouchableOpacity style={styles.dropdownItem} onPress={toggleDropdown}>
            <Text style={styles.dropdownText}>Add device 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem} onPress={toggleDropdown}>
            <Text style={styles.dropdownText}>Add device 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem} onPress={toggleDropdown}>
            <Text style={styles.dropdownText}>Add device 3</Text>
          </TouchableOpacity>
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
    width: 250,
    height: 250,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    width: 152,
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 10,
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
    position: "absolute",
    top: 745,
    alignItems: "center",
    width: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 1,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    alignItems: "center",
    
  },
  dropdownText: {
    fontSize: 16,
  },
});
