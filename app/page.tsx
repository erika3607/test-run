import Image from "next/image";
import TestParallax from "@/components/TestParallax";
import { LenisProvider } from "./LenisProvider";

export default function Home() {
  return (
    <>
      <LenisProvider />
      <div className="pb-20 ">
        <h1 className="text-5xl font-bold text-center pt-80 pb-150">Hello World.</h1>
        <TestParallax />
        <p className="pt-500">aaa</p>
      </div>
    </>
  );
}
