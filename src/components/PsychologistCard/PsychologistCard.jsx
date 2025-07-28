import styles from "./PsychologistCard.module.css";

const PsychologistCard = ({ data }) => {
  const {
    name,
    avatar_url,
    experience,
    specialization,
    price_per_hour,
    rating,
  } = data;

  return (
    <li className={styles.card}>
      <img src={avatar_url} alt={name} className={styles.avatar} />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.specialization}>{specialization}</p>
        <div className={styles.details}>
          <span>Experience: {experience}</span>
          <span className={styles.price}>${price_per_hour}/hour</span>
          <span className={styles.rating}>Rating: {rating}</span>
        </div>
        <div className={styles.buttons}>
          <button>Read more</button>
          <button>Make an appointment</button>
          <button>❤️</button>
        </div>
      </div>
    </li>
  );
};

export default PsychologistCard;
