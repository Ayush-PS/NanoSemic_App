import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
};

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;


const Welcome: React.FC = () => {

  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.himg}
            source={require("../../assets/Nanosemic_logo.png")}
          />
          <Text style={styles.headerText}>NANO SEMIC</Text>
          <TouchableOpacity>
            <Text style={styles.headerText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <Image
            style={styles.mainImage}
            source={require("../../assets/Nanosemic_logo.png")}
          />
          <TouchableOpacity style={styles.signInButton} onPress={navigateToLogin} >
            <Text style={styles.signInText} >LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.headerText}>New to NanoSemic.pvt.ltd ? </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontStyle: "italic",
                fontSize: 20,
                color: "#fff",
                textDecorationLine: "underline",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1540ad",
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    paddingTop: "10%",
    backgroundColor: "#1540ad",
  },
  himg: {
    width: 60,
    height: 60,
  },
  headerText: {
    fontSize: 18,
    color: "white",
  },
  main: {
    flex: 1,
    backgroundColor: "#1540ad",
    alignItems: "center",
    justifyContent: "space-around",
  },
  mainImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  signInButton: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  signInText: {
    fontSize: 18,
    color: "#1540ad",
  },
  footer: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#1540ad",
    justifyContent: "center",
    alignItems: "center",
  },
});
