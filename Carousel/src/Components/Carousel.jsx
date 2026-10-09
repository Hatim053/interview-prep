import React , {useState , useEffect , useRef} from "react"
import data from '../data.json'

function Carousel() {
const [index , setIndex] = useState(0)
  const intervalIdRef = useRef(null)

  useEffect(() => {
  intervalIdRef.current =   setInterval(() => {
    console.log('interval running')
    handleNext()
  } , 1000)
  return () => {
    clearInterval(intervalIdRef.current)
  }
  },[])
   
  function handleNext() {
    console.log('next')
    setIndex(prev => (prev+1)%data.length)
  }
  function handlePrev() {
   if(index == 0) setIndex(data.length-1)
    else setIndex(prev => prev-1) 
  }
   return (
    <>
     <div onMouseEnter={()=> clearInterval(intervalIdRef.current)} onMouseLeave={() => intervalIdRef.current = setInterval(handleNext , 1000)} className="container">
      <div onClick={handlePrev} className="prev-btn">{'<'}</div>
      <img  src={data[index].download_url} alt="" />
      <div onClick={handleNext} className="next-btn">{'>'}</div>
     </div>
    </>
  )
}


export default Carousel