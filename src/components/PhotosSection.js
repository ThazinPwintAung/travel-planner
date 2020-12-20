import React from "react";
import "./PhotosSection.css";
import Cambodia from "../assets/Cambodia.jpg";
import GrandCanyon from "../assets/GrandCanyon.jpg";
import HongKong from "../assets/HongKong.jpg";
import London from "../assets/London.jpg";
import NewZealand from "../assets/NewZealand.jpg";
import Paris from "../assets/Paris.jpg";
import Peru from "../assets/Peru.jpg";
import Rome from "../assets/Rome.jpg";

const PhotosSection = () => {
  return (
    <div className="PhotosSection">
      <div className="photo-container w-2 h-1">
        <div className="photo-item">
          <div className="image">
            <img src={Cambodia} alt="Cambodia" />
          </div>
          <div className="label">Angkor Wat, Cambodia</div>
        </div>
      </div>
      <div className="photo-container w-2 h-2">
        <div className="photo-item">
          <div className="image">
            <img src={GrandCanyon} alt="GrandCanyon" />
          </div>
          <div className="label">The Grand Canyon, Arizona</div>
        </div>
      </div>
      <div className="photo-container w-2">
        <div className="photo-item">
          <div className="image">
            <img src={HongKong} alt="HongKong" />
          </div>
          <div className="label">Hong Kong</div>
        </div>
      </div>
      <div className="photo-container w-2 h-2">
        <div className="photo-item">
          <div className="image">
            <img src={London} alt="London" />
          </div>
          <div className="label">London, England</div>
        </div>
      </div>
      <div className="photo-container w-2 h-1">
        <div className="photo-item">
          <div className="image">
            <img src={NewZealand} alt="NewZealand" />
          </div>
          <div className="label">New Zealand</div>
        </div>
      </div>
      <div className="photo-container w-2 h-2">
        <div className="photo-item">
          <div className="image">
            <img src={Paris} alt="Paris" />
          </div>
          <div className="label">Paris, France</div>
        </div>
      </div>
      <div className="photo-container w-2 h-2">
        <div className="photo-item">
          <div className="image">
            <img src={Peru} alt="Peru" />
          </div>
          <div className="label">Machu Picchu, Peru</div>
        </div>
      </div>
      <div className="photo-container w-2">
        <div className="photo-item">
          <div className="image">
            <img src={Rome} alt="Rome" />
          </div>
          <div className="label">Rome, Itlay</div>
        </div>
      </div>
    </div>
  );
};

export default PhotosSection;
