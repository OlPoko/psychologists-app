import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { ref, onValue } from "firebase/database";
import PsychologistCard from "../components/PsychologistCard/PsychologistCard";

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
    <div>
      <h1>Our Psychologists</h1>
      <ul>
        {visiblePsychologists.map((p) => (
          <PsychologistCard key={p.id} data={p} />
        ))}
      </ul>
      {visibleCount < allPsychologists.length && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </div>
  );
};

export default PsychologistsPage;
