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
    <div className={styles.container}>
      <h1 className={styles.title}>Our Psychologists</h1>
      <ul className={styles.list}>
        {visiblePsychologists.map((p) => (
          <PsychologistCard key={p.id} data={p} />
        ))}
      </ul>
      {visibleCount < allPsychologists.length && (
        <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};
export default PsychologistsPage;
