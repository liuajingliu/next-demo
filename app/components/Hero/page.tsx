import Image, { StaticImageData } from "next/image";

interface HeroProps {
  imageSrc: StaticImageData;
  altTxt: string;
  text: string;
}

export default function Hero(props: HeroProps) {
  const { imageSrc, altTxt, text } = props;

  return (
     <div className="h-screen relative">
      <div className="absolute -z-10 inset-0">
        <Image src={imageSrc} alt={altTxt} className="" fill style={{ objectFit: "cover" }}/>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700" />
      </div>
      <div className="flex justify-center mx-auto pt-48">
        <div className="font-bold text-6xl text-white">{text}</div>
      </div>
    </div>
  )
}
