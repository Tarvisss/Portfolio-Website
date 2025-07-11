import Styles from "./card.module.css"


function Contact() {
  return (
    <div className={Styles["page"]}>
      <h1>Contact</h1>
      <br />
      <div className={Styles["card-container"]}>
        <div className={Styles["text-area"]}>
          <div className={Styles["text"]}>
            <div>
              <h2>Email 📨</h2>
              <hr />
              <p>souther-trav@hotmail.com</p>
            </div>
            <div>
              <h2>Phone 📳</h2>
              <hr />
              <p>405-765-2377</p>
            </div>
            <div>
              <h2>Social Links</h2>
              <hr/>
              <a className="social" href="https://www.linkedin.com/in/travis-souther"><img src="/icons8-linkedin-50 (1).png" width={"60px"} alt="LinkedIn" /></a>
              <a className="social" href="https://www.facebook.com/tsouther1/"><img src="/icons8-facebook-50 (1).png" width={"60px"} alt="Facebook" /></a>
              <a className="social" href="https://www.instagram.com/tssouther/"><img src="/icons8-instagram-50 (1).png" width={"60px"} alt="Instagram" /></a>
            </div>
          </div>
        </div>
      </div>
        <div className={Styles["closing-statement"]}>
          <p>Please feel free to reach out. I'm always looking to better myself and connect with like minded individuals. </p>
        </div>
        <footer className={Styles["footer"]}>
        <p>Thanks for visiting!</p>
      </footer>
    </div>
  );
}


export default Contact;