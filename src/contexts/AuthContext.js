import React, { useEffect, useState, useContext } from 'react';
import firebase from '../util/firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ( { children } ) => {
    const [currentUser, setCurrentUser] = useState({ loggedIn: false });
    // const auth = new firebase.auth.EmailAuthProvider();

    function signIn(e, p) 
    {
        firebase.auth().signInWithEmailAndPassword(e, p)
            .then(userCredential => {
                // Signed in
                // var user = userCredential.user
                // console.log(user)
            })
            .catch(err => {
                console.error(`${ err.code }\n${ err.message }`)
            })
    }

    function register(e, p)
    {
        firebase.auth().createUserWithEmailAndPassword(e, p)
            .then(userCredential => {
                // Signed in
                // var user = userCredential.user
                // console.log(user)
        })

    }

    function logout()
    {
        firebase.auth().signOut()
            .then(() => {
                // Sign-in successful
                // console.log('User logged out successfully')
            })
            .catch(err => {
                // on an error
                console.error(err);
            })
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(
                    {
                        user: user,
                        loggedIn: true 
                    }
                );
            } else {
                setCurrentUser({ loggedIn: false });
            }
        });
        return unsubscribe;
    }, []);

    const value = { currentUser, signIn, register, logout };

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}
