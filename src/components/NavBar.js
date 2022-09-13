import "./navbar.css";

function NavBar () {
    return (
      <div className="navbar">
        <h1>
          <strtong> Natural </strtong> 
        </h1>
        <h2>
             Beauty & Skin Care
        </h2>
        <div id ="sectionsNav"> 
            <ul>
                <li><a href= "#">Home</a></li>
                <li><a href= "#">Cosmetics</a></li>
                <li><a href= "#">Hair</a></li>
                <li><a href= "#">Body</a></li>
            </ul>
        </div>
      </div>
    )
  }
  
  export default NavBar;