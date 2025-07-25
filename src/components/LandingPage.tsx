import Styles from "./landingPage.module.css";
import { useEffect, useState } from "react";
function LandingPage() {
const [visitorCount, setVisitorCount] = useState(null)
  useEffect(() => {

  const namespace = 'portfolio-ow6k';
  const key = 'visits'
  if (!localStorage.getItem('visited')) {
    fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
      .then(res => res.json())
      .then(data => {
        setVisitorCount(data.value);
        localStorage.setItem('visited', 'true');
      });
  } else {
    // just get the current value without incrementing
    fetch(`https://api.countapi.xyz/get/${namespace}/${key}`)
      .then(res => res.json())
      .then(data => setVisitorCount(data.value));
  }
}, []);

  return (
    <div className={Styles["page"]}>
      <div className={Styles["card-container"]}>
        <div className={Styles["text-area"]}>
          <p>
            Dedicated lifelong learner with a strong background in maintenance leadership, project management, and team collaboration. Now applying these strengths to solve problems and build impactful software. 👨🏼‍💻
          </p>
        </div>
      </div>

      <footer className={Styles["footer"]}>
        <p>Thanks for visiting!</p>
        {visitorCount !== null && <p>Visitor#: {visitorCount}</p>}
      </footer>
    </div>
  );
}
export default LandingPage;