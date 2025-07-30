import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import GoogleSignIn from '../components/GoogleSignIn'
import { useSignUp } from '@clerk/clerk-expo'

const SignUpScreen = () => {
    const navigation = useNavigation()
    const { isLoaded, signUp, setActive } = useSignUp();

    const [data, setData] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState("")
    const [pendingVerification, setPendingVerification] = useState(false)
    const [code, setCode] = useState("")

    const onSignUpPress = async () => {
        if (!isLoaded) return;
        try {
            await signUp.create({
                emailAddress: data.email,
                password: data.password,
            })
            await signUp.prepareEmailAddressVerification({ strategy: "email_code" })
            setPendingVerification(true)
        } catch (err) {
            console.error(err);
            setError(err.errors[0]?.message || "Something went wrong")
        }
    }

    const onVerifyPress = async () => {
        if (!isLoaded) return;
        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code: code,
            })

            if (completeSignUp.status === "complete") {
                await setActive({
                    session: completeSignUp.createdSessionId,
                })
            } else {
                setError("Xác thực thất bại, vui lòng thử lại")
            }
        } catch (err) {
            console.error(err);
            setError(err.errors[0]?.message || "Something went wrong")
        }
    }

    if (pendingVerification) {
        return (
            <View style={styles.container}>
                <Text>Xác thực email</Text>
                <TextInput
                    placeholder='Mã xác thực'
                    value={code}
                    onChangeText={(text) => setCode(text)}
                    style={styles.input}
                />
                {error && <Text style={styles.errorText}>{error}</Text>}
                <TouchableOpacity style={styles.button} onPress={onVerifyPress}>
                    <Text style={styles.buttonText}>Xác thực</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đăng ký</Text>

            <TextInput
                autoCapitalize='none'
                placeholder='Email'
                value={data.email}
                onChangeText={(text) => setData({ ...data, email: text })}
                style={styles.input}
            />

            <TextInput
                secureTextEntry
                placeholder='Mật khẩu'
                value={data.password}
                onChangeText={(text) => setData({ ...data, password: text })}
                style={styles.input}
            />

            {error && <Text style={styles.errorText}>{error}</Text>}

            <TouchableOpacity style={styles.button} onPress={onSignUpPress}>
                <Text style={styles.buttonText}>Đăng ký</Text>
            </TouchableOpacity>

            <View style={styles.linkContainer}>
                <Text style={styles.linkText}>Bạn đã có tài khoản? {" "}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignIn" as never)}>
                    <Text style={[styles.linkText, { color: '#FF5722' }]}>Đăng nhập ngay</Text>
                </TouchableOpacity>
            </View>

            <GoogleSignIn />
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 12,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#FF5722',
        width: '100%',
        padding: 12,
        marginVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    linkContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
    },
    linkText: {
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    }
})