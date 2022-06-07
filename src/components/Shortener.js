//Required imports
import React, { useEffect, useState } from "react";
import UrlImg from "../assets/url.png";
import { HiOutlineSearch } from "react-icons/hi";
import { Header } from "./Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { History } from "./History";

export const Shortener = () => {
  const ACCESS_TOKEN = "a5ae807340e8077c778fbf7ae9d6a1376dadb9dc";
  const [url, setUrl] = useState("");
  const [clickedUrl, setClickedUrl] = useState("");
  const [shortenedLink, setShortnedLink] = useState("");
  const [resultStyle, setResultStyle] = useState({ display: "none" });

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleClick = () => {
    setClickedUrl(url);
  };

  const notify = () => toast.success("Copied!");

  const handlecopy = () => {
    navigator.clipboard.writeText(shortenedLink);
    notify();
  };

  useEffect(() => {
    const Shorten = async () => {
      const res = await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          long_url: clickedUrl,
          domain: "bit.ly",
        }),
      });

      const data = await res.json();

      data.link
        ? setShortnedLink(data.link) || setResultStyle({ display: "flex" })
        : setShortnedLink("Error: Please try again");
    };
    clickedUrl && Shorten();
  }, [clickedUrl]);

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
          <input
            type="text"
            value={url}
            onChange={handleChange}
            autoFocus={true}
          />
        </div>
        <div className="search-btn">
          <button type="button" onClick={handleClick}>
            Shorten Url
          </button>
        </div>

        <div className="shortened" style={resultStyle}>
          <p>{shortenedLink}</p>
          <button onClick={handlecopy}>Copy</button>
          <ToastContainer position="top-left" />
        </div>
      </div>
    </div>
  );
};
