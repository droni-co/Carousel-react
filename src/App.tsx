import Carousel from './components/Carousel'
import Video from './components/Video'

function App() {

  return (
    <>
      <div>
        <Carousel>
          <div className="inline-block w-full md:w-1/3 p-2">
            <Video />
          </div>
          <div className="inline-block w-full md:w-1/3 p-2">
            <Video />
          </div>
          <div className="inline-block w-full md:w-1/3 p-2">
            <Video />
          </div>
          <div className="inline-block w-full md:w-1/3 p-2">
            <Video />
          </div>
          <div className="inline-block w-full md:w-1/3 p-2">
            <Video />
          </div>
          <div className="inline-block w-full md:w-1/3 p-2">
            <Video />
          </div>
          <div className="inline-block w-full md:w-1/3 p-2">
            <Video />
          </div>
        </Carousel>

        <Carousel>
        <div className="inline-block w-full md:w-1/2 p-2">
            <h1>Hola mundo</h1>
          </div>
          <div className="inline-block w-full md:w-1/2 p-2">
            <h1>Hola mundo</h1>
          </div><div className="inline-block w-full md:w-1/2 p-2">
            <h1>Hola mundo</h1>
          </div>
          <div className="inline-block w-full md:w-1/2 p-2">
            <h1>Hola mundo</h1>
          </div><div className="inline-block w-full md:w-1/2 p-2">
            <h1>Hola mundo</h1>
          </div>
          <div className="inline-block w-full md:w-1/2 p-2">
            <h1>Hola mundo</h1>
          </div>
        </Carousel>
      </div>
      <div className='md:w-1/3 w-1/3'>
        By me
      </div>
    </>
  )
}

export default App
