// src/components/MapSearch.jsx
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import axios from "axios";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";
import L from "leaflet";

// Simple helper for moving map
function FlyToLocation({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.flyTo([coords.lat, coords.lon], 15);
    }
  }, [coords, map]);
  return null;
}

const MapSearch = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleInput = async (e) => {
    const value = e.target.value;
    setSearch(value);

    if (!value) return;

    try {
      const res = await axios.get("https://photon.komoot.io/api/", {
        params: {
          q: value,
          lat: 27.7172,
          lon: 85.3240,
          limit: 5,
        },
      });
      setSuggestions(res.data.features);
    } catch (error) {
      console.error("Error fetching suggestions", error);
    }
  };

  const handleSelect = (place) => {
    const feature = suggestions.find((f) => f.properties.name === place);
    if (feature) {
      const { coordinates } = feature.geometry;
      setSelectedLocation({ lat: coordinates[1], lon: coordinates[0], name: place });
    }
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto" }}>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={search}
          onChange={handleInput}
          placeholder="Search in Kathmandu..."
          style={{ width: "100%", padding: "0.8rem", marginBottom: "1rem", fontSize: "1rem" }}
        />
        <ComboboxPopover>
          {suggestions.map((place, i) => (
            <ComboboxOption key={i} value={place.properties.name} />
          ))}
        </ComboboxPopover>
      </Combobox>

      <MapContainer
        center={[27.7172, 85.3240]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "400px", width: "100%", borderRadius: "12px" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {selectedLocation && (
          <>
            <FlyToLocation coords={selectedLocation} />
            <Marker position={[selectedLocation.lat, selectedLocation.lon]} />
          </>
        )}
      </MapContainer>

      {selectedLocation && (
        <div style={{ marginTop: "1rem", background: "#f9f9f9", padding: "1rem", borderRadius: "8px" }}>
          <strong>Selected:</strong> {selectedLocation.name}
        </div>
      )}
    </div>
  );
};

export default MapSearch;
