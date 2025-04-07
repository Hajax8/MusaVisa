import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TextInputComponent, TouchableOpacity, View } from 'react-native'
import { db } from '@/FirebaseConfig'
import { createUser } from '@/DatabaseActions'


export default function LoginScreen() {

  const sendData = () => {
    createUser( email,  password,  username )
    console.log('luodaan uusi käyttäjä', {email, password, username});
  }

  const [email, setEmail] = useState('email@email.com');
  const [password, setPassword] = useState('pass123');
  const [username, setUsername] = useState('Hajax');

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={styles.loginField}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.loginField}
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.loginField}
        onChangeText={setPassword}
        value={password}
      />
      <Text>{email} {username} {password}</Text>
      <TouchableOpacity
        style={{ borderWidth: 2, width: '50%', alignItems: 'center', height: '50', justifyContent: 'center', }}
        onPress={sendData}
      >
        <Text style={{ textAlign: 'center' }}>
          lähetä data
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  loginField: {
    width: '60%',
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },

})
