import { useState, useEffect, useRef } from "react"
import "./FormPage.css"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

export default function FormPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const sidebarRef = useRef(null)
  const [formData, setFormData] = useState({
    assignmentTitle: "",
    objective: "",
  })

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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

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
        <main className="AT_design_main">
         
        <div className="AT_form_header">
              <div className="AT_form_grader_select">
                <span>AI Grader Selected:</span>
                <select>
                  <option>Custom Grader</option>
                </select>
              </div>
            </div>
        <div className="AT_form_container">
            

            <div className="AT_form_card">
            <h2 className="AT_form_subtitle">(With Rubric Upload)</h2>
              <h1 className="AT_form_title">Custom AI Grader</h1>
             
              <p className="AT_form_description">Enhance your results with the below details.</p>

              <div className="AT_form_progress">
                <div className="AT_form_step_indicator">Step 1 of 3</div>
                <div className="AT_form_progress_bar">
                  <div className="AT_form_progress_fill" style={{ width: "33%" }}></div>
                </div>
              </div>

              <form className="AT_form_content">
                <div className="AT_form_field">
                  <label>Assignment Title*</label>
                  <input
                    type="text"
                    name="assignmentTitle"
                    value={formData.assignmentTitle}
                    onChange={handleInputChange}
                    placeholder="Enter assignment title here"
                    maxLength={100}
                  />
                  <div className="AT_form_char_count">{formData.assignmentTitle.length}/100</div>
                </div>

                <div className="AT_form_field">
                  <label>Objective (Optional)</label>
                  <textarea
                    name="objective"
                    value={formData.objective}
                    onChange={handleInputChange}
                    placeholder="Enter objective"
                    maxLength={300}
                  />
                  <div className="AT_form_char_count">{formData.objective.length}/300</div>
                </div>

                <button type="button" className="AT_form_next_button">
                  Next
                </button>
              </form>
            </div>

            
          </div>
          <div className="AT_form_credits">
           
              
            </div>
            <div className="AT_form_credits_box">
            <p className="m-0"> 0 Credits Used / 400 Credits Remaining / 400 Credits Total</p>
            </div>

            <div className="AT_form_results">
              <div className="text-center">
                <h1>Results</h1>
              </div>
            </div>

           
         
        </main>
      </div>
    </div>
</>
  )
}

