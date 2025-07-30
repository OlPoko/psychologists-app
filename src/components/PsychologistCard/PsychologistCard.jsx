import { useState } from "react";
import styles from "./PsychologistCard.module.css";
import { FaStar } from "react-icons/fa";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";

const PsychologistCard = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    avatar_url,
    name,
    experience,
    license,
    specialization,
    initial_consultation,
    rating,
    price_per_hour,
    about,
    reviews = [],
  } = data;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatarWrapper}>
          <div className={styles.avatarStatus}></div>
          <img src={avatar_url} alt={name} className={styles.avatarImage} />
        </div>

        <div className={styles.mainInfo}>
          <p className={styles.role}>Psychologist</p>
          <h2 className={styles.name}>{name}</h2>

          <div className={styles.meta}>
            <span className={styles.badge}>Experience: {experience}</span>
            <span className={styles.badge}>License: {license}</span>
            <span className={styles.badge}>
              Specialization: {specialization}
            </span>
            <span className={styles.badge}>
              Initial consultation: {initial_consultation}
            </span>
          </div>

          <p className={styles.about}>{about}</p>

          {!expanded && (
            <button
              onClick={() => setExpanded(true)}
              className={styles.readMore}
            >
              Read more
            </button>
          )}
        </div>

        <div className={styles.ratingBox}>
          <span className={styles.rating}>
            <FaStar className={styles.star} />
            <span className={styles.rating}>Rating</span>
            {rating}
          </span>

          <span className={styles.divider}>|</span>
          <span className={styles.price}>
            Price / 1 hour: <b>{price_per_hour}$</b>
          </span>
          <button
            className={styles.heartBtn}
            onClick={() => setIsFavorite((prev) => !prev)}
          >
            {isFavorite ? (
              <HiHeart className={styles.heartFilled} />
            ) : (
              <HiOutlineHeart />
            )}
          </button>
        </div>
      </div>

      {expanded && Array.isArray(reviews) && (
        <div className={styles.reviewsSection}>
          <ul className={styles.reviews}>
            {reviews.map((review, index) => (
              <li key={index} className={styles.reviewItem}>
                <div className={styles.initial}>
                  {review?.author?.charAt(0) || "?"}
                </div>
                <div className={styles.reviewContent}>
                  <div className={styles.reviewHeader}>
                    <strong>{review?.author || "Anonymous"}</strong>
                    <span>
                      <FaStar className={styles.starSmall} />
                      {review?.rating || "–"}
                    </span>
                  </div>
                  <p>{review?.comment || "No comment provided."}</p>
                </div>
              </li>
            ))}
          </ul>

          <button className={styles.appointmentBtn}>Make an appointment</button>
        </div>
      )}
    </div>
  );
};

export default PsychologistCard;
