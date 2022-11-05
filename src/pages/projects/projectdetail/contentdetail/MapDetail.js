import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import mapboxgl from "../../../../mapbox/mapbox";

const MapDetail = () => {
  const { project } = useSelector((state) => state.project);

  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      // Thẻ chứa map
      container: mapContainer.current,
      style: "mapbox://styles/quangvu9501/cla2ozjnu001v14sgnvbllz72",
    });

    const bounds = new mapboxgl.LngLatBounds();

    map.current.on("load", () => {
      project?.locations?.forEach((loc) => {
        const [lat, lng] = loc?.coordinates;

        // a. Tao điểm
        const el = document.createElement("div");
        el.className = "marker";

        // b. Thêm điểm
        new mapboxgl.Marker({
          element: el,
          anchor: "bottom",
        })
          .setLngLat([lng, lat])
          .addTo(map.current);

        // c. Thêm popup
        new mapboxgl.Popup()
          .setLngLat([lng, lat])
          .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
          .addTo(map.current);

        // d. Mở rộng map để bao gồm tọa đổ của ng dung
        bounds.extend([lng, lat]);
      });
      if (map.current) {
        map.current.fitBounds(bounds, {
          padding: {
            top: 50,
            bottom: 50,
            left: 30,
            right: 30,
          },
        });
      }
    });
  });

  return (
    <div
      className="map rounded-md w-full mt-[50px] h-[50vh] pg-primary"
      ref={mapContainer}
    ></div>
  );
};

export default MapDetail;
