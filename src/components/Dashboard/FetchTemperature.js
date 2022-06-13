import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const FetchTemperature = () => {
  const [weatherData, setWeatherData] = useState("");
  const [userID, setUserID] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [userName, setUsername] = useState("");

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUserID(uid);
    } else {
    }
  });
  useEffect(() => {
    const fetchNameLocation = async () => {
      const docRef = doc(db, "users", userID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const users = docSnap.data();

        setUsername(users.name);
        console.log(users.name);
        setUserLocation(users.location);
      } else {
        console.log("No such document!");
      }
    };

    fetchNameLocation();
  }, [userID]);

  const url = `http://localhost:5000/weather?address=${userLocation}`;

  const fetchWeather = async () => {
    try {
      const response = await fetch(url);

      const data = await response.json();
      console.log(data);
      setWeatherData(data.forecast.realTemp);
      console.log(data.forecast.realTemp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  });

  return (
    <>
     <h2 className="greeting">
      Hello {userName}
    </h2>
      <div className="weather-info">The weather at <strong>{userLocation}</strong> is <strong>{weatherData}°C</strong></div>
    </>
   
  );
};

export default FetchTemperature;
