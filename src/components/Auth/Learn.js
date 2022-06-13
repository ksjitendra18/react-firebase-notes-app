import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { collection, doc, setDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";

import { db } from "../../firebase";
const Learn = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  const sendData = async () => {
    const citiesRef = collection(db, "cities");
    try {
      const res = await setDoc(doc(citiesRef, "SF"), {
        name: "San Francisco",
        state: "CA",
        country: "USA",
        capital: false,
        population: 860000,
        regions: ["west_coast", "norcal"],
      });
      await setDoc(doc(citiesRef, "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA",
        capital: false,
        population: 3900000,
        regions: ["west_coast", "socal"],
      });
      await setDoc(doc(citiesRef, "DC"), {
        name: "Washington, D.C.",
        state: null,
        country: "USA",
        capital: true,
        population: 680000,
        regions: ["east_coast"],
      });
      await setDoc(doc(citiesRef, "TOK"), {
        name: "Tokyo",
        state: null,
        country: "Japan",
        capital: true,
        population: 9000000,
        regions: ["kanto", "honshu"],
      });
      await setDoc(doc(citiesRef, "BJ"), {
        name: "Beijing",
        state: null,
        country: "China",
        capital: true,
        population: 21500000,
        regions: ["jingjinji", "hebei"],
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getData = async () => {
    const docRef = doc(db, "cities", "SF");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());

      const country = docSnap.data();

      console.log(country.name);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return <button onClick={getData}>get data</button>;
};

export default Learn;
