import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firbaseAuthentication from "../Firebase/Firebase.init";


firbaseAuthentication();

const useFirebase = () => {

        const [user, setUser] = useState({});
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

        const register = (email, password, name) => {
                createUserWithEmailAndPassword(auth, email, password)
                        .then(userCredential => {
                                const user = userCredential.user;
                                console.log(user);
                        })
                        .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                // ..
                        });
                updateProfile(auth.currentUser, {
                        displayName: `name`
                }).then(() => {
                        // Profile updated!
                        // ...
                }).catch((error) => {
                        // An error occurred
                        // ...
                });
        };

        // const updateDisplayName = 

        const logOut = () => {
                signOut(auth).then(() => {
                        // Sign-out successful.
                }).catch(error => {
                        // An error happened.
                });
        };

        const signinUser = (email, password) => {
                signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                                // Signed in 
                                const user = userCredential.user;
                                // ...
                        })
                        .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                        });
        };

        useEffect(() => {
                // both are correc... when !user in this time clear the state
                // const unsubscribed = onAuthStateChanged(auth, (user) => {
                //         if (user) {
                //                 setUser(user);
                //         } else {
                //                 setUser({})
                //         }
                //         //     setIsLoading(false);
                // });
                // return () => unsubscribed;
                onAuthStateChanged(auth, user => {
                        if (user)
                                setUser(user);
                        else
                                setUser({});
                })
        }, [auth])


        return { googleLogin, logOut, user, register, signinUser };


}
export default useFirebase;