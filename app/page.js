import Image from "next/image";
import styled from "./page.module.css";
import Present from "@/components/Present";
import Carousel from "@/components/Carousel";
export default function Home() {
  return (
    <main className={styled.main}>
      <Carousel slides={slides} />

    </main>
  );
}

let slides = [
  {
    titolo: 'Fatti un bel giro',
    descrizione:
      'Scopri tutti i segreti del nostro Centro con il tour virtuale!',
    immagine:
      'https://scontent.fvce2-2.fna.fbcdn.net/v/t39.30808-6/436425853_894806662449376_4412565734253717012_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lDfEw0Qq70sQ7kNvgECP5xO&_nc_ht=scontent.fvce2-2.fna&oh=00_AfAH677cbt582birArtAV5L1-LTT0SKfK7QFSLCwsblPOQ&oe=663FD9B4',
    colore: 'white',
    colore2: 'rgba(0,0,0,0)',
    opacity: 0.8,
    buttonText: 'Scopri di più!',
    buttonUrl: 'https:...',
  },
  {
    titolo: 'Fatti un bel giro',
    descrizione:
      'Scopri tutti i segreti del nostro Centro con il tour virtuale!',
    immagine:
      'https://scontent.fvce2-2.fna.fbcdn.net/v/t39.30808-6/439927456_902653774997998_4160712827694940556_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EApF6qSCFkkQ7kNvgGxqmEk&_nc_ht=scontent.fvce2-2.fna&oh=00_AfBpMyVVLQOe1MXS_TT1JrQ_Uhh2L14kOfJPFg8EWvBqqg&oe=663FD5BA',
    colore: '#white',
    colore2: 'rgba(0,0,0,0)',
    opacity: 0.8,
    buttonText: 'Scopri di più!',
    buttonUrl: 'https:...',
  },
  {
    titolo: 'Fatti un bel giro',
    descrizione:
      'Scopri tutti i segreti del nostro Centro con il tour virtuale!',
    immagine:
      'https://scontent.fvce2-1.fna.fbcdn.net/v/t39.30808-6/439901537_902653468331362_1446077057644207733_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TFAqxzPF1pgQ7kNvgHHOnyI&_nc_ht=scontent.fvce2-1.fna&oh=00_AfB2jWde3vIHTqENMlEQ7OoBVXCpvvTvwm4gHqUciaSb2g&oe=663FCF48',
    colore: 'white',
    colore2: 'rgba(0,0,0,0)',
    opacity: 0.8,
    buttonText: 'Scopri di più!',
    buttonUrl: 'https:...',
  },

]

