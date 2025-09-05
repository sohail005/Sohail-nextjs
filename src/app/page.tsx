import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline mb-4">Hello, Next.js!</h1>
      <Image 
        src="https://thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg" 
        alt="Beautiful nature scene" 
        width={600} 
        height={400}
        className="rounded-lg shadow-md"
      />
    </div>
  );
}