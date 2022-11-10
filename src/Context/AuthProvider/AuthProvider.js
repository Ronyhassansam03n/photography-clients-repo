import React, {  createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup,signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../../Firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (eamil, password) => {
        setLoading(true)

        return createUserWithEmailAndPassword(auth, eamil, password)
        
    }  

    

        const signIn = (email, password) =>{
            setLoading(true)

            return signInWithEmailAndPassword(auth, email, password)
        }

        const logOut = () =>{
            return signOut(auth)
        }

    const googleLogIn =(provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)

    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
             console.log(currentUser)
             setUser(currentUser)
             setLoading(false)
         });
 
         return () =>{
                     return unsubscribe();
         }
     },[])

 const authInfo = { user, loading, createUser, googleLogIn, logOut, signIn}



    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;