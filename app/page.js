import Image from "next/image";
import styles from "./page.module.css";
import Present from "@/components/Present";
import Carousel from "@/components/Carousel";
export default function Home() {
  return (
    <main className={styles.main}>
      <Carousel />

    </main>
  );
}
