import React, { useState, useRef, useEffect, useContext } from "react";
import "./PlaceOrder.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function LocationMarker({ setLocation, setSelectedPosition, selectedPosition }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      const pos = [lat, lng];
      setSelectedPosition(pos);

      axios
        .get(`https://nominatim.openstreetmap.org/reverse`, {
          params: {
            lat,
            lon: lng,
            format: "json",
          },
          headers: {
            "Accept-Language": "en",
            "User-Agent": "place-order-app/1.0",
          },
        })
        .then((res) => {
          setLocation(res.data.display_name || `Lat: ${lat}, Lng: ${lng}`);
        })
        .catch(() => {
          setLocation(`Lat: ${lat}, Lng: ${lng}`);
        });
    },
  });

  return selectedPosition ? <Marker position={selectedPosition} /> : null;
}

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const [location, setLocation] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchInput.length >= 3) {
        axios
          .get("https://nominatim.openstreetmap.org/search", {
            params: {
              q: searchInput,
              format: "json",
              addressdetails: 1,
              limit: 5,
              countrycodes: "NP",
              viewbox: "85.273,27.755,85.388,27.658",
              bounded: 1,
            },
            headers: {
              "Accept-Language": "en",
              "User-Agent": "place-order-app/1.0",
            },
          })
          .then((res) => {
            setSuggestions(res.data);
          })
          .catch(() => {
            setSuggestions([]);
          });
      } else {
        setSuggestions([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchInput]);

  const handleSelectSuggestion = (place) => {
    const lat = parseFloat(place.lat);
    const lon = parseFloat(place.lon);
    setLocation(place.display_name);
    setSuggestions([]);
    setSearchInput("");
    setSelectedPosition([lat, lon]);

    if (mapRef.current) {
      mapRef.current.setView([lat, lon], 16);
    }
  };

  return (
    <div className="place-order-container">
      <h3>Place Your Order</h3>
      <div className="form-map-wrapper">
        <div className="form-section">
          <input type="text" placeholder="Name" className="user-input" />
          <input type="email" placeholder="Email" className="user-input" />
          <input type="tel" placeholder="Phone no" className="user-input" />
          {location && (
            <div className="location-info">
              <strong>Selected Location:</strong>
              <br />
              {location}
            </div>
          )}

          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>Rs.{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                 <p>Rs.{getTotalCartAmount()===0?0:100}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
               <b>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount()+100}</b>
              </div>
            </div>
            <button>Proceed to Payment</button>
          </div>
        </div>

        <div className="map-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for a location in Kathmandu..."
              className="user-input"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            {suggestions.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.map((suggestion, index) => (
                  <li key={index} onClick={() => handleSelectSuggestion(suggestion)}>
                    {suggestion.display_name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div id="map">
            <MapContainer
              center={[27.7172, 85.324]}
              zoom={14}
              whenCreated={(mapInstance) => {
                mapRef.current = mapInstance;
              }}
              style={{ height: "400px", width: "100%", borderRadius: "12px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
              />
              <LocationMarker
                setLocation={setLocation}
                setSelectedPosition={setSelectedPosition}
                selectedPosition={selectedPosition}
              />
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
