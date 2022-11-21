import React, { useEffect, useRef } from "react";
import Input from "../../components/input/Input";

import { useForm } from "react-hook-form";
import ButtonContact from "../../components/button/ButtonContact";
import Textarea from "../../components/input/Textarea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Alert from "../../components/common/Alert";
import mapboxgl from "../../mapbox/mapbox";

const ContactForm = () => {
  const { control } = useForm();
  const mapContainer = useRef(null);

  const map = useRef(null);
  useEffect(() => {
    map.current = new mapboxgl.Map({
      // Thẻ chứa map
      container: mapContainer.current,
      style: "mapbox://styles/htrang1801/claqak40l000714qf32ll6byt",
      center: [106.3225388, 20.9430878],
      zoom: 12,
      interactive: false,
    });

    const bounds = new mapboxgl.LngLatBounds();
    map.current.on("load", () => {
      const [lat, lng] = [20.9430878, 106.3225388];
      const el = document.createElement("div");
      el.className = "marker";
      new mapboxgl.Marker({
        element: el,
        anchor: "bottom",
      })
        .setLngLat([lng, lat])
        .addTo(map.current);

      new mapboxgl.Popup()
        .setLngLat([lng, lat])
        .setHTML(
          `<p>
            <h1>Travel company</h1>
            <p>18 Binh Giang, Hai Dưong City, Vietnam</p>
        </p>`
        )
        .addTo(map.current);

      bounds.extend([lng, lat]);
    });
  });
  return (
    <div className="px-[9%] py-[100px] h-full flex justify-center items-center mt-[20px] relative">
      <div className="bg-[#222] w-[90%] h-full bg-opacity-70 rounded-[50px] p-[5%] pt-[5%] pb-[2%] relative flex">
        <h2 className="text-primary text-[30px] font-[600] tracking-wider absolute top-[2.5%]">
          CONTACT US
        </h2>
        <div className="mt-[10px] w-[40%] h-full mr-[10px] flex flex-col">
          <div>
            <Input
              className="p-2"
              label="First name"
              type="text"
              id="firstname"
              control={control}
            ></Input>
            <Input
              className="p-2"
              label="Last name"
              type="text"
              id="lastname"
              control={control}
            ></Input>
            <Input
              className="p-2"
              label="Email"
              type="email"
              id="email"
              control={control}
            ></Input>
          </div>
          <Textarea
            className="px-8 py-4 resize-none flex-grow scroll-textarea"
            label="Message"
            id="message"
            rows="4"
            control={control}
          ></Textarea>
          <div className="text-center">
            <ButtonContact className="overflow-hidden  ">Send</ButtonContact>
          </div>
        </div>
        <div className="w-full pl-[6%] flex flex-col">
          <div
            className="w-full bg-primary flex-grow my-[20px] rounded-lg"
            ref={mapContainer}
          ></div>
          <div className="icon flex items-center justify-between">
            <div className="social w-[45%] flex items-center justify-between">
              <a
                href="#"
                className="h-[45px] w-[45px] leading-[40px] rounded-[50%] text-[17px] text-center border-[2px] border-solid border-[#ffbc4b] mr-[5px] inline-block hover-social text-primary"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className=" 
                     font-[400] "
                />
              </a>
              <a
                href="#"
                className="h-[45px] w-[45px] leading-[40px] rounded-[50%] text-[17px] text-center border-[2px] border-solid border-[#ffbc4b] mr-[5px] inline-block hover-social text-primary"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className=" 
                     font-[400] "
                />
              </a>
              <a
                href="#"
                className="h-[45px] w-[45px] leading-[40px] rounded-[50%] text-[17px] text-center border-[2px] border-solid border-[#ffbc4b] mr-[5px] inline-block hover-social text-primary"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className=" 
                     font-[400] "
                />
              </a>
              <a
                href="#"
                className="h-[45px] w-[45px] leading-[40px] rounded-[50%] text-[17px] text-center border-[2px] border-solid border-[#ffbc4b] mr-[5px] inline-block hover-social text-primary"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className=" 
                     font-[400] "
                />
              </a>
            </div>
            <div className="text-[18px] font-[400] text-primary">
              + 035 406 7746
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
