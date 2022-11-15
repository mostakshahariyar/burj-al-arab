import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firbaseAuthentication from "../Firebase/Firebase.init";


firbaseAuthentication();

const useFirebase = () => {

        const [user, setUser] = useState('');
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();

        const googleLogin = () => {
                signInWithPopup(auth, googleProvider)
                        .then(result => {
                                const credential = GoogleAuthProvider.credentialFromResult(result);
                                const token = credential.accessToken;
                                const user = result.user;
                        })
                        .catch((error) => {
                                // Handle Errors here.
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                // The email of the user's account used.
                                const email = error.customData.email;
                                // The AuthCredential type that was used.
                                const credential = GoogleAuthProvider.credentialFromError(error);
                                // ...
                        });
        };
        const logOut = () => {
                signOut(auth).then(() => {
                        // Sign-out successful.
                }).catch(error => {
                        // An error happened.
                });
        };

        useEffect(() => {
                onAuthStateChanged(auth, user => {
                        if (user)
                                setUser(user);
                })
        }, [])


        return { googleLogin, logOut, user };


}
export default useFirebase;