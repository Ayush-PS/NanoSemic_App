import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput
} from "react-native";
import { useState } from 'react';

const Login: React.FC = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <SafeAreaView style={styles.safeArea}>
            <View>

                <View style={styles.header}>
                    <Image
                        style={styles.himg}
                        source={require("../../assets/NanoSemicLogo_whiteBG.jpg")}
                    />
                    <Text style={styles.headerText}>
                        NANO SEMIC
                    </Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.centerImg}
                        // source={require('../../assets/NanoSemicLogo_Black.png')}
                        source={require('../../assets/test.png')}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#333"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#333"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <TouchableOpacity style={styles.forgotPasswordButton}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Don't have an account? </Text>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    fontWeight: '500',
                                    // fontStyle: "italic",
                                    fontSize: 14,
                                    color: "black",
                                    textDecorationLine: "underline",
                                }}
                            >
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        top: 15,
        left: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 16,
        paddingTop: "10%",
        backgroundColor: "#fff",
    },
    himg: {
        // Image: Logo WBG;
        width: 34,
        height: 34,
        margin: 5,
        marginRight: 10,
        gap: 0,
        borderRadius: 10,
        opacity: 1,

    },
    centerImg: {
        width: 238,
        height: 236,
        color: 'black',
    },
    headerText: {

        fontWeight: "400",
        fontSize: 16,
    },
    imgContainer: {
        // backgroundColor: 'red',
        height: 336,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    inputContainer: {
        marginTop: 0,
        paddingHorizontal: 20,
        alignItems: 'center',
        // backgroundColor:'black',

    },
    input: {
        width: 266,
        height: 40,
        backgroundColor: "white",
        marginBottom: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'black',
        fontSize: 16,
        fontWeight: '500'

    },
    forgotPasswordButton: {
        width: 266,
        alignItems: "flex-end",
        marginTop: 5,
        // backgroundColor: 'red'
    },
    forgotPasswordText: {
        justifyContent: 'flex-end',
        color: "black",
        fontSize: 12,
        fontWeight: '500'
    },
    loginButton: {
        width: 152,
        backgroundColor: "#D9D9D9",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 40,
        alignItems: "center",

    },
    loginButtonText: {
        fontSize: 18,
        color: "black",
    },
    footer: {
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    footerText: {
        fontSize: 14
    }
})