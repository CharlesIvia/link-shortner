//Required imports
import React from "react";
import UrlImg from "../assets/url.png";
import { HiOutlineSearch } from "react-icons/hi";
import { Header } from "./Header";

export const Shortener = () => {
  return (
    <div className="shortener">
      <Header />
      <div className="shortener-more">
        <div className="description">
          <img src={UrlImg} alt="link" />
          <p>
            Link Shortener is a free tool to shortening URLs. Create short &
            memorable links in seconds.
          </p>
        </div>

        <div className="search">
          <HiOutlineSearch className="search-icon" />
          <input type="text" />
        </div>
        <div className="search-btn">
          <button>Shorten Url</button>
        </div>
      </div>
    </div>
  );
};
