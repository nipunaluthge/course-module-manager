import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

let userDocSubscriber;

// interface user {
//   uid: String,
//   email: String,
//   displayName: String,
//   photoURL: String
// }

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const auth = getAuth();
    const credentials = await signInWithPopup(auth, provider);
    let user = {
      uid: credentials.user.uid,
      email: credentials.user.email,
      displayName: credentials.user.displayName,
      photoURL: credentials.user.photoURL,
    }

  } catch (error) {
    console.log(error);
  }
}

export const signInWithPassword = async () => {

}