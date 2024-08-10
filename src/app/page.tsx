import Slider from "./components/Slider"
import Productlist from "./components/ProuctList"
export default function HomePage() {
  return (
  <>
    <div className="">
    <Slider />
    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-2xl">Featured Product</h1>
    <Productlist />
    </div>
    </div>
    
  
  </>
  );
}
