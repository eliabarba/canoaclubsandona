import Image from "next/image";
import styles from "./page.module.css";
import Present from "@/components/Present";
import SwipeableTextMobileStepper from "@/components/Carousel";
export default function Home() {
  return (
    <main className={styles.main}>
      <SwipeableTextMobileStepper />

    </main>
  );
}
