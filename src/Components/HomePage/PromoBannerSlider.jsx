// src/components/Home/PromoBanner.jsx
import { Carousel } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";

export default function WomanPhoto() {
  const Photo = [
    "https://images7.alphacoders.com/334/334685.jpg",
    "https://wallpaperaccess.com/full/7614174.jpg",
    "https://wallpapercave.com/wp/wp9015508.jpg",
  ];
  return (
    <Carousel
      autoplay
      shape="bar"
      className="w-full h-full"
      style={{
        height: 1000,
        background: "#f7f3ef",
      }}
    >
      {Photo.map((item, id) => {
        return (
          <img
            src={item}
            alt="PromoBanner"
            key={id}
            className="w-full h-full object-cover md:object-cover lg:object-cover"
          />
        );
      })}
    </Carousel>
  );
}
