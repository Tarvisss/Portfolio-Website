import Styles from "./projectCard.module.css"


function Projects() {
    return (
        <div className={Styles["page"]}>
              <h1>Projects</h1>

              <p style={{fontSize: "1.5rem"}}>Click any of the links below to explore one of my latest projects.</p>
              <br />
              <p style={{fontSize: "1.5rem", lineHeight: ".1"}}>💻💻</p>
              <p style={{fontSize: "1.5rem", lineHeight: ".1"}}>💻💻💻💻💻</p>
              <p style={{fontSize: "1.5rem", lineHeight: ".1"}}>💻💻💻💻</p>
              <p style={{fontSize: "1.5rem", lineHeight: ".1"}}>💻💻💻</p>
              <p style={{fontSize: "1.5rem", lineHeight: ".1"}}>💻💻</p>
              <p style={{fontSize: "1.5rem", lineHeight: ".1"}}>⬇️</p>
              <div className={Styles["card-container"]}>
                
                <div className={Styles["text-area"]}>
                  <div className={Styles["text"]}>
                    <div>
                      <h2>Jam Space</h2>
                      <br />
                      <a href="https://jam-space.onrender.com"><img src="/Jam_Space1.png" alt="" /></a>
                    </div>
                    <div>
                      <h2>Fit+Together</h2>
                      <br />
                      <a href="https://fit-together-frontend.onrender.com"><img src="/Screenshot from 2025-06-24 12-18-52.png" alt="" /></a>
                    </div>
                  </div>
                </div>
              </div>
                <div className={Styles["closing-statement"]}>
                  <p>Please vist the contact section if you'd like help with your next project</p>
                </div>
                <footer className={Styles["footer"]}>
                <p>Thanks for visiting!</p>
              </footer>
            </div>
          );
        }

export default Projects;