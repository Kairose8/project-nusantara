import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { destination } from "../items/Destination.js";

export default function Destinations() {
  const { place } = useParams();
  const [placeNow, setPlaceNow] = useState({
    name: "",
    desc: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
  });

  useEffect(() => {
    if (destination[place]) {
      setPlaceNow(destination[place]);
    }
  }, [place]);

  return (
    <div>
      <div>{placeNow.name}</div>
      <div>{placeNow.desc}</div>
      <div>{placeNow.img1}</div>
      <div>{placeNow.img2}</div>
      <div>{placeNow.img3}</div>
      <div>{placeNow.img4}</div>
    </div>
  );
}