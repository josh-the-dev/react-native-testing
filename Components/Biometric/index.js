import React, { useEffect, useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import { Alert, TouchableOpacity, StyleSheet, Text, Platform } from 'react-native';

const Biometric = ({onSuccess}) => {
    const [compatible, setCompatibility] = useState(false);

    const checkDeviceHardware = async () => {
        let isCompatible = await LocalAuthentication.hasHardwareAsync();
        setCompatibility(isCompatible);
        if (!isCompatible) {
            // don't show fingerprint option
        }
    }

    const checkBiometrics = async () => {
        let biometricRecords = await LocalAuthentication.isEnrolledAsync();
        if (!biometricRecords) {
            // don't show fingerprint option
        } else {
            handleLoginPress();
        }
    }

    const handleLoginPress = () => {
        if (Platform.OS === 'android') {
            showAndroidAlert();
        } else {
            scanBiometrics();
        }
    };

    const showAndroidAlert = () => {
        Alert.alert('Fingerprint Scan', 'Place your finger over the touch sensor.');
        scanBiometrics();
    };

    const scanBiometrics = async () => {
        let result = await LocalAuthentication.authenticateAsync();
        if (result.success) {
            onSuccess();
            console.log('success');
            // ToastAndroid.show('Success!', ToastAndroid.LONG);
        } else {
            console.log('failure')
            // ToastAndroid.show('Failure!', ToastAndroid.LONG);
        }
    };

    useEffect(() => {
        checkDeviceHardware();
    }, []);
    return (
    <TouchableOpacity
        onPress={
            compatible ?
                () => checkBiometrics() : null

        }
        style={styles.button}>
        <Text style={styles.buttonText}>
            Bio Login
        </Text>
    </TouchableOpacity>);
}

export default Biometric;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#056ecf',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 200,
      height: 60,
      backgroundColor: 'transparent',
      borderRadius: 5,
      borderWidth: 1.5,
      borderColor: '#fff',
    },
    buttonText: {
      fontSize: 30,
      color: '#fff',
      textShadowColor: 'rgba(0,0,0,0.30)',
      textShadowOffset: { width: 0, height: 1 },
      textShadowRadius: 2,
    },
    logo: {
      height: 128,
      width: 128,
    },
  });