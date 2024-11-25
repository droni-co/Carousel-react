import Carousel from './components/Carousel'

function App() {

  return (
    <>
      <div>
        <Carousel scrollSlide={3} itemWidth={'1/3'} />
      </div>
      <div className='md:w-1/3 w-1/3'>
        By me
      </div>
    </>
  )
}

export default App
