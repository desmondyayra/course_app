import { getDatabase, onValue, ref, update} from 'firebase/database';
import { useCallback, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCYTkwkuyND_MbLQ2aEnUnEJf-WeHxP8qI",
    authDomain: "courseapp-2422c.firebaseapp.com",
    databaseURL: "https://courseapp-2422c-default-rtdb.firebaseio.com",
    projectId: "courseapp-2422c",
    storageBucket: "courseapp-2422c.appspot.com",
    messagingSenderId: "430638058962",
    appId: "1:430638058962:web:7f62f9761b1d815da48c0b",
    measurementId: "G-1WBVYYJLYJ"
  };

  const firebase = initializeApp(firebaseConfig);
  const database = getDatabase(firebase);
  export const useDbData = (path) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    useEffect(() => (
      onValue(ref(database, path), (snapshot) => {
       setData( snapshot.val() );
      }, (error) => {
        setError(error);
      })
    ), [ path ]);
    return [ data, error ];
  };
  const makeResult = (error) => {
    const timestamp = Date.now();
    const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
    return { timestamp, error, message };
  };
  export const useDbUpdate = (path) => {
    const [result, setResult] = useState();
    const updateData = useCallback((value) => {
      update(ref(database, path), value)
      .then(() => setResult(makeResult()))
      .catch((error) => setResult(makeResult(error)))
    }, [database, path]);
    return [updateData, result];
  };