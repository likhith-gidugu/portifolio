import { render } from "@testing-library/react";
import logo from './image/images.jpg';
const Navigation =()=>{

return(

<header  >
<nav class="navbar navbar-expand-lg navigation-bg"   >
  <div class="container-fluid"  >
    <a class="navbar-brand" href="#" ><img style={{width :"40%",borderRadius:"60%"}}src={logo} alt="logo"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Projects">Projects</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#beintouch">Be In Touch</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>





</header>



)



}
export default Navigation;