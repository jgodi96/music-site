import React, { useEffect } from "react";
import Image from "next/image";
import ImageOne from "../../assets/slideImages/img1.jpg";
import ImageTwo from "../../assets/slideImages/img2.jpg";
import ImageThree from "../../assets/slideImages/img3.jpg";
import ImageFour from "../../assets/slideImages/img4.jpg";
import ImageFive from "../../assets/slideImages/img5.jpg";
import ImageSix from "../../assets/slideImages/img6.jpg";
import ImageSeven from "../../assets/slideImages/img7.jpg";
import ImageEight from "../../assets/slideImages/img8.jpg";
import ImageNine from "../../assets/slideImages/img9.jpg";

export default function Slider() {
  return (
    <>
      
      <section class="carousel">
        <div class="carousel__slider">
          <ul class="carousel__list">
            <li class="carousel__item">
              <span>1</span>
            </li>
            <li class="carousel__item">
              <span>2</span>
            </li>
            <li class="carousel__item">
              <span>3</span>
            </li>
            <li class="carousel__item">
              <span>4</span>
            </li>
            <li class="carousel__item">
              <span>5</span>
            </li>
            <li class="carousel__item">
              <span>6</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
