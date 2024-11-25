import React from "react";
import Video from "./Video";

const carouselBody = React.createRef<HTMLDivElement>();
const carouselInner = React.createRef<HTMLDivElement>();


const move = (direction: "next" | "prev", scrollSlide:number) => {
  const clientWidth = Number(carouselBody.current?.clientWidth)
  const scrollSize = scrollSlide === 2 ? (clientWidth/3)*2 : clientWidth/scrollSlide
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


function Carousel({scrollSlide, itemWidth}: Readonly<{scrollSlide: number, itemWidth: string}>) {
  return (
    <div className="relative border container mx-auto p-2 my-16 rounded-md">
      <div ref={carouselBody} className="overflow-auto no-scrollbar relative">
        <div ref={carouselInner} className="text-nowrap">
          <div className={`inline-block w-${itemWidth} p-2`}>
            <Video />
          </div>
          <div className={`inline-block w-${itemWidth} p-2`}>
            <Video />
          </div>
          <div className={`inline-block w-${itemWidth} p-2`}>
            <Video />
          </div>
          <div className={`inline-block w-${itemWidth} p-2`}>
            <Video />
          </div>
          <div className={`inline-block w-${itemWidth} p-2`}>
            <Video />
          </div>
          <div className={`inline-block w-${itemWidth} p-2`}>
            <Video />
          </div>
          <div className={`inline-block w-${itemWidth} p-2`}>
            <Video />
          </div>
          <div className={`inline-block w-${itemWidth} p-2`}>
            <Video />
          </div>
          <div className={`inline-block w-${itemWidth} p-2`}>
            <Video />
          </div>
          <div className={`inline-block w-${itemWidth} p-2`}>
            <Video />
          </div>
        </div>
      </div>
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r-md" onClick={() => move("prev", scrollSlide)}>
        Prev 
      </button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l-md" onClick={() => move("next", scrollSlide)}>
        Next
      </button>
    </div>
  );
}
export default Carousel;