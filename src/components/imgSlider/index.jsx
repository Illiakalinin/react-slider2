import React, { useState, useEffect, useRef } from "react";
import styles from "./imgSlider.module.sass";
import slides from "./images";

function ImgSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [delay, setDelay] = useState(2000);

  const prevSlide = () => {
    setCurrentSlide((currentSlide) => {
      const isFirstSlide = currentSlide === 0;
      return isFirstSlide ? slides.length - 1 : currentSlide - 1;
    });
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide) => {
      const isLastSlide = currentSlide === slides.length - 1;
      return isLastSlide ? 0 : currentSlide + 1;
    });
  };

  useEffect(() => {
    let id = null;
    if (!isPlaying) {
      id = setInterval(nextSlide, delay);
    }
    return () => {
      clearInterval(id);
    };
  }, [isPlaying, delay]);

  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <img src={slides[currentSlide].url} className={styles.slide}></img>
      </div>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={prevSlide}>
          PREV
        </button>
        <button className={styles.btn} onClick={nextSlide}>
          NEXT
        </button>
        <button
          className={styles.btn}
          onClick={() => setIsPlaying((isPlaying) => !isPlaying)}
        >
          {isPlaying ? "PLAY" : "STOP"}
        </button>
        {/* <input type="number" /> */}
      </div>
    </div>
  );
}

export default ImgSlider;
