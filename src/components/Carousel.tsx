import React from "react";

const carouselBody = React.createRef<HTMLDivElement>();
const carouselInner = React.createRef<HTMLDivElement>();


const move = (direction: "next" | "prev") => {
  const scrollSlide = 3
  const clientWidth = Number(carouselBody.current?.clientWidth)
  const scrollSize = clientWidth < 769 ? (clientWidth/1) : clientWidth/scrollSlide
  carouselBody.current?.scrollTo({
    left: direction === "next" ? carouselBody.current.scrollLeft + scrollSize : carouselBody.current.scrollLeft - scrollSize,
    behavior: "smooth"
  })

  if(Number(carouselBody.current?.scrollLeft) > Number(carouselInner.current?.scrollWidth) - Number(carouselInner.current?.clientWidth) - 10 && direction === "next") {
    carouselBody.current?.scrollTo({
      left: 0,
      behavior: "smooth"
    })
  }
  if(Number(carouselBody.current?.scrollLeft) === 0 && direction === "prev") {
    carouselBody.current?.scrollTo({
      left: Number(carouselInner.current?.scrollWidth),
      behavior: "smooth"
    })
  }

}


function Carousel(props: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative border container mx-auto p-2 my-16 rounded-md">
      <div ref={carouselBody} className="overflow-auto no-scrollbar relative">
        <div ref={carouselInner} className="text-nowrap">
          { props.children }
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r-md"
        onClick={() => move("prev")}>
        Prev 
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l-md"
        onClick={() => move("next")}>
        Next
      </button>
    </div>
  );
}
export default Carousel;