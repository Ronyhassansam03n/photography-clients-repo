import React, {  createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../../Firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (eamil, password) => {

        return createUserWithEmailAndPassword(auth, eamil, password)
    }  

    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
        });

        return () =>{
                    return unsubscribe();
        }
    },[])


    const googleLogIn =(provider) =>{

        return signInWithPopup(auth, provider)
    }

 const authInfo ={ user, loading, createUser, googleLogIn}



    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;