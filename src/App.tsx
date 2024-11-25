import Carousel from './components/Carousel'

function App() {

  return (
    <>
      <div>
        <Carousel scrollSlide={3} itemWidth={'1/4'} />
      </div>
      <div>
        By me
      </div>
    </>
  )
}

export default App
