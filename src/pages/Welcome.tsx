import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
};

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

const Welcome: React.FC = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              style={styles.himg}
              source={require("../../assets/NanoSemicLogo_whiteBG.jpg")}
            />
            <Text style={{ fontSize: 19, color: "white", marginRight: "45%" }}>
              NANO SEMIC
            </Text>
          </View>
          {/* <TouchableOpacity>
            <Text style={styles.headerText}>Sign Up</Text>
          </TouchableOpacity> */}
        </View>
        <View style={styles.main}>
          <Image
            style={styles.mainImage}
            source={require("../../assets/NanoSemicLogo_Black.png")}
          />
          <TouchableOpacity
            style={styles.signInButton}
            onPress={navigateToLogin}
          >
            <Text style={styles.signInText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={{ fontSize: 19, color: "#000" }}>
            New to NanoSemic.pvt.ltd ?{" "}
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontStyle: "italic",
                fontSize: 19,
                color: "#000",
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
    backgroundColor: "#001840",
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 0.07,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    paddingTop: "10%",
    backgroundColor: "#001840",
  },
  himg: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginRight: 20,
  },
  headerText: {
    fontSize: 19,
    color: "white",
  },
  main: {
    flex: 1,
    backgroundColor: "#001840",
    alignItems: "center",
    justifyContent: "center",
  },
  mainImage: {
    width: 300,
    height: 300,
    marginBottom: 150,
  },
  signInButton: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    width: 200,
  },
  signInText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#001840",
  },
  footer: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
