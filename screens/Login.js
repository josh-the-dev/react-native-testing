import React from 'react';
import Biometric from '../components/Biometric';

const Login = ({navigation}) => {
  return (
    <>
      <Biometric onSuccess={() => navigation.navigate('Home') } />
    </>
  );
}

export default Login;