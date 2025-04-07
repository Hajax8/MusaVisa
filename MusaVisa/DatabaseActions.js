import db, { auth } from '@/FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ref, set } from 'firebase/database'
import React from 'react'


export const createUser = async (email, password, username) => {
  try {
    console.log('toimiiko');
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const uid = userCredential.user.uid
    await set(ref(db, `users/${uid}`), {
      username,
      email,
      createdAt: Date.now()
    })
    console.log('User created, email:', { email });
  } catch (error) {
    console.log(error, { email, password, username });
  }
}