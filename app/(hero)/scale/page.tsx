import Hero from "../../components/Hero/page";
import homeSrc from "../../../public/home.jpeg";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Scale',
}


export default function Scale() {
  return (
    <Hero imageSrc={homeSrc} altTxt="Scale Image" text="Scale" />
  )
}
