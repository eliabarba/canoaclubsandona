import Image from "next/image";
import styled from "./page.module.css";
import Present from "@/components/Present";
import Carousel from "@/components/Carousel";
export default function Home() {
  return (
    <main className={styled.main}>
      <Carousel />

    </main>
  );
}
