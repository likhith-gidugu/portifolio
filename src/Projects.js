
import summer from "./image/summermocup.png";
import yoga from "./image/yogaApp.png";
import burger from "./image/burgerMocup.png";
//import res from "C:\Users\VR\sample\public\resum
const Projects =()=>{


return(

<section  className="project" id="Projects">

<center>
                <h1 style={{ textDecoration:"underline" }}>PROJECTS DEVELOPED</h1>
                <br/>
            
            </center>
            
            <div className=" carousel slide " id='myCarousel' data-bs-ride='carousel'>
    <div className='carousel-inner'>  
    <div className='carousel-item active'>
       <a href="https://likhith-summermocup.000webhostapp.com/"> <img src={summer} alt='summer banner' className='d-block w-100' style={{height:'300px'}}/> </a>
         <br/> <h4 style={{textAlign:"center"}}>SUMMER MOCUP click on the banner to watch </h4>
        </div>  
        <div className='carousel-item '>
      <a href="https://likhith-yogaapp.000webhostapp.com/"> <img src={yoga} alt='yoga' className='d-block w-100'  style={{height:'300px'}}/> </a>
        <br/><h4 style={{textAlign:"center"}}>YOGA MOCUP click on the banner to watch </h4>
        </div>  
        <div className='carousel-item '>
        <a href="https://likhith-burgerhouse.000webhostapp.com/"> <img src={burger} alt='burger' className='d-block w-100'  style={{height:'300px'}}/> </a>
          <br/><h4 style={{textAlign:"center"}}>BURGER MOCUP click on the banner to watch </h4>
        </div>  

<button className='carousel-control-prev' data-bs-target='#myCarousel' data-bs-slide='prev'><span className='carousel-control-prev-icon'></span></button>
<button className='carousel-control-next' data-bs-target='#myCarousel' data-bs-slide='next'><span className='carousel-control-next-icon'></span></button>


    </div>
    </div>





</section>



)


}
export default Projects;