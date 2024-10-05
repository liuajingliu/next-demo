import Hero from "../components/Hero/page";
import homeSrc from "../../public/home.jpeg"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <Hero imageSrc={homeSrc} altTxt="Home Image" text="Home" />
  );
}
