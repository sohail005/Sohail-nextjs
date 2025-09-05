import Image from "next/image";
import Header from "./Components/Header/Header";

export default function Home() {
  return (
    <div className="mx-auto p-4 bg-white min-h-screen">
      <Header />
    </div>
  );
}