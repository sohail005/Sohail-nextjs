import Header from "@/Components/Header/Header";
import MainContent from "@/Components/MainContent/MainContent";
import Category from "@/Components/Category/Category";

export default function Home() {
  return (
    <div className="p-4 bg-white min-h-screen overflow-y-auto">
      <Header />
      <MainContent />
      <Category />
    </div>
  );
}
