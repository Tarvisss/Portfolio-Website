import Styles from "./experienceCard.module.css"


function Experience() {
    return (
     <div className={Styles["page"]}>
      <h1>Experience</h1>
      <br />
      <div className={Styles["card-container"]}>
        <div className={Styles["text-area"]}>
          <div className={Styles["text"]}>
            <div>
              <h2>Springboard</h2>
              <p>Completing 800+ hours of hands-on course material, with 1:1 industry expert mentor oversight, and completion of 4 in-depth portfolio projects.</p>
              <p>Mastering skills in front-end and back-end web development, databases, and data structures and algorithms.</p>
            </div>
            <div>
              <h2>Superior Silica Sands</h2>
              <p>Directed plant maintenance operations with up to 30 employees. including electricians, welders and equipment operators</p>
                <p>Trained employees in proper maintenance protocols across the entire project lifecycle, including issue diagnosis, inventory management, lock-out/tag-out procedures, and executing the necessary steps to complete tasks efficiently.</p>
            </div>
            <div>
              <h2>Black Mountian sands</h2>
              <p>Collaborated with other technicians to maintain safe and consistent plant operations. Each task presented unique challenges, requiring quick problem-solving skills and the ability to react efficiently under pressure.

</p>
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

export default Experience;