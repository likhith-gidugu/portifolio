
import fb from "./image/facebook.svg";
import instagram from "./image/instagram.svg";
import linkedin from "./image/linkedin.svg";
import email from "./image/envelope.svg"

const Beintouch=()=>{


return(

<footer className="container-fluid beintouch" style={{backgroundColor:"rgb(212, 196, 236)" }} id="beintouch">
    <center>
    
    <div className="row">
   
        <div className="col-md-6 col-sm-12  cont">
        <h2 style={{textDecoration:"underline" ,color: "#064f8f"}}>CONTACT INFO</h2>
         <span>
           <img src={email} alt="email"/>
            <a href= "mailto:likhithgidugu036@gmail.com " > likhithgidugu036@gmail.com  </a> </span>
        <br/>
        <span><img src={linkedin} alt="linkden"/><a href="https://www.linkedin.com/feed/">likhithgidugu</a></span>

<br/>
<span>
<img src={fb} alt="facebook"/>
<a href="https://www.facebook.com/likhithgidugu">likhithgidugu</a>    
</span>
<br/>
<span>
<img src={instagram} alt="instagram"/>
<a href="https://www.instagram.com/">likhithgidugu</a>
</span>

       </div>
        <div className="col-md-6 col-sm-12 serv" >
    <h2 style={{textDecoration:"underline" ,color: "#064f8f"}}> SERVICES</h2>
    <ul>
<li>WEB DESIGNING</li>
<li>TEAM WORK</li>
<li>HISTORY</li>
<li>FRONTEND DEVELOPMENT</li>



    </ul>
        </div>
    </div>
    </center>

</footer>

)


}
export default Beintouch;