import React, { useState, useEffect, useRef } from "react";
import styles from "./App.module.sass";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";

function App() {
  const slides = [
    {
      url: "https://images.pexels.com/photos/8146002/pexels-photo-8146002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/2969200/pexels-photo-2969200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/2337406/pexels-photo-2337406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/12658608/pexels-photo-12658608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/5763092/pexels-photo-5763092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [delay, setDelay] = useState();

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newSlide = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  // useEffect(() => {
  //   slides();
  //   return () => {
  //     cleanup
  //   };
  // }, [input]);

  const slideShow = () => {
    setInterval(() => {
      setDelay((delay = 1));
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <img src={slides[currentSlide].url} className={styles.slide}></img>
      </div>
      <button onClick={prevSlide}>PREV</button>
      <button onClick={nextSlide}>NEXT</button>
      <button onClick={() => setIsPlaying((isPlaying) => !isPlaying)}>
        {isPlaying ? "Play" : "Stop"}
      </button>
      <input type="number" />
    </div>
  );
}

export default App;
