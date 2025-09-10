import Header from "@/Components/Header/Header";
import MainContent from "@/Components/MainContent/MainContent";
import Category from "@/Components/Category/Category";
import TopSelling from "@/Components/TopSelling/TopSelling";
import BookingSteps from "@/Components/BookingSteps/BookingSteps";

export default function Home() {
  return (
    <div className="p-2 bg-white min-h-screen overflow-y-auto">
      <Header />
      <MainContent />
      <Category />
      <TopSelling />
      <BookingSteps />
    </div>
  );
}
