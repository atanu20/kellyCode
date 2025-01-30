import { useEffect, useRef, useState } from "react"
import "./Dashboard.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const sidebarRef = useRef(null)
  

  useEffect(() => {
      function handleClickOutside(event) {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isSidebarOpen) {
          setIsSidebarOpen(false)
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [isSidebarOpen])

  return (
    <>
    <div className="AT_design_layout">
      {/* Navbar */}
      <nav className="AT_design_navbar">
        <div className="AT_design_nav_left">
          <button className="AT_design_menu_toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
         {isSidebarOpen ? <CloseIcon className="mt-2" /> :<MenuIcon className="mt-2" />} 
          </button>
          <NavLink to="/"><img
            src="./assets/kangaroos-logo.svg"
            alt="Kangaroos Logo"
            className="AT_design_logo"
          /></NavLink>
        </div>
        <div className="AT_design_nav_right">
          <a href="mailto:hi@kangaroos.ai" className="AT_design_contact">
            hi@kangaroos.ai
          </a>
        </div>
      </nav>

      <div className="AT_design_container">
        {/* Sidebar */}
        <aside ref={sidebarRef} className={`AT_design_sidebar ${isSidebarOpen ? "AT_design_sidebar_open" : ""}`}>
          <nav className="AT_design_sidebar_nav">
            <NavLink to="/" className="AT_design_nav_item AT_design_active">
              Home
            </NavLink>
            <NavLink to="/" className="AT_design_nav_item ">
            My Grading Tools
            </NavLink>
            <NavLink to="/" className="AT_design_nav_item ">
            <span>⚡</span> Quick AI Grader
            </NavLink>
            <NavLink to="/" className="AT_design_nav_item">
                <span>✏️</span> Custom AI Grader
              </NavLink>
           
            <NavLink to="/" className="AT_design_nav_item">
              My Grading Queue
            </NavLink>
          </nav>
          <div className="lastbar">
          <div class="progress my-2">
  <div class="progress-bar" role="progressbar" aria-valuenow="70"
  aria-valuemin="0" aria-valuemax="100" style={{width:"50%"}}>
    
  </div>
</div>
            <p className="m-0">Free trial end In XX Days</p>
            <NavLink to="/"  className="btn btn-primary mt-2" >Purchese Now</NavLink>
          </div>
        </aside>

        {/* Main Content */}
        <main className="AT_design_main ">
         <div className="AT_design_main_padding">
         <section className="AT_design_section ">
          <h1 className="AT_design_welcome mb-2 font_w_600">Welcome, [User Name]!</h1>
            <h2 className="font_w_800">AI Graders</h2>
            <p className="AT_design_description">
              Explore the leading AI graders at Kangaroos AI below. Have a request? Send us an email, and we will
              consider adding your AI grader recommendation.
            </p>

            <div className="AT_design_grid">
              {/* Cards */}
              <div className="AT_design_card">
                <div className="AT_design_card_content">
                  <h3>Quick AI Grader</h3>
                  <p>Quickly grade papers with our default rubric.</p>
                </div>
                <span className="AT_design_arrow"> <ArrowForwardIosIcon /> </span>
              </div>

              <div className="AT_design_card">
                <div className="AT_design_card_content">
                  <h3>AI Grader + Your Custom Rubric</h3>
                  <p>Grade papers with your custom rubric.</p>
                </div>
                <span className="AT_design_arrow"> <ArrowForwardIosIcon /> </span>
              </div>

              <div className="AT_design_card">
                <div className="AT_design_card_content">
                  <h3>AI Image Grader (Written Assignments)</h3>
                  <p>Grade written assignments, with image upload.</p>
                </div>
                <span className="AT_design_arrow"> <ArrowForwardIosIcon /> </span>
              </div>

              <div className="AT_design_card bg_color">
                <div className="AT_design_card_content ">
                  <h3>Request a Tool</h3>
                  <p>Request an AI grader you're interested in exploring.</p>
                </div>
                <span className="AT_design_arrow"> <ArrowForwardIosIcon /></span>
              </div>

              <div className="AT_design_card bg_color">
                <div className="AT_design_card_content">
                  <h3>Feedback</h3>
                  <p>Provide feedback on an existing tool.</p>
                </div>
                <span className="AT_design_arrow"> <ArrowForwardIosIcon /> </span>
              </div>
            </div>
          </section>
         </div>

          

          {/* CTA Banner */}
          <div className="AT_design_cta">
            <div className="AT_design_cta_content">
              <h2>Ready to start saving time with AI?</h2>
              <p>Explore the extensive benefits of Kangaroos AI grader.</p>
              <NavLink to="/" className="AT_design_cta_button">Easily Get Started</NavLink>
              
            </div>
          </div>

          {/* Pro Timer */}
         
        </main>
      </div>
    </div>
    
    </>
  )
}

