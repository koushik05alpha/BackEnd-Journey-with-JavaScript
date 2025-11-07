import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "../compontents/Room";

function HomeScreen() {
  const [rooms, setRooms] = useState([]);

  const [loading, setLoding] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoding(true);
        const response = await axios.get("/api/rooms/getallrooms");
        setRooms(response.data);
        setLoding(false);
      } catch (error) {
        setError(true);
        console.error("Error fetching rooms:", error);
        setLoding(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5" >
          {loading ? (
            <h1>Loading....</h1>
          ) : error ? (
            <h1>Error..</h1>
          ) : (
            rooms.map((room) => {
              return (
                <div className="col-md-9 mt-3">
                  <Room room={room} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
