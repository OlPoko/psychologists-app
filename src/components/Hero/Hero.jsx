import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";
import heroImage from "../../assets/image 1@2x.webp";
// import icon1 from "../../assets/icon1.svg"; // заміни на актуальні SVG
// import icon2 from "../../assets/icon2.svg";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/psychologists");
  };

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          The road to the <span>depths</span> of the human soul
        </h1>
        <p className={styles.subtitle}>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <button className={styles.cta} onClick={handleClick}>
          Get started
        </button>
      </div>

      <div className={styles.right}>
        <img src={heroImage} alt="Psychologist" className={styles.image} />

        <div className={styles.layoutBlock}>Let’s find your specialist</div>

        <div className={styles.squareOne}>
          {/* <img src={icon1} alt="Decorative icon" /> */}
        </div>

        <div className={styles.squareTwo}>
          {/* <img src={icon2} alt="Decorative icon" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
