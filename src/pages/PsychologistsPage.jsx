import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { ref, onValue } from "firebase/database";
import PsychologistCard from "../components/PsychologistCard/PsychologistCard";
import styles from "./PsychologistsPage.module.css";

const PsychologistsPage = () => {
  const [allPsychologists, setAllPsychologists] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const psychologistsRef = ref(db, "psychologists");
    onValue(psychologistsRef, (snapshot) => {
      const data = snapshot.val();
      const list = data
        ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
        : [];
      setAllPsychologists(list);
    });
  }, []);

  const visiblePsychologists = allPsychologists.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <label className={styles.label}>Filters</label>
        <select className={styles.select}>
          <option>A to Z</option>
          <option>Z to A</option>
          <option>Less than 100$</option>
          <option>Greater than 100$</option>
          <option>Popular</option>
          <option>Not popular</option>
          <option>Show all</option>
        </select>
      </aside>

      <div className={styles.content}>
        <h1 className={styles.title}>Our Psychologists</h1>

        <ul className={styles.cardList}>
          {visiblePsychologists.map((p) => (
            <li key={p.id}>
              <PsychologistCard data={p} />
            </li>
          ))}
        </ul>

        {visibleCount < allPsychologists.length && (
          <button className={styles.loadMore} onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </div>
    </section>
  );
};

export default PsychologistsPage;
