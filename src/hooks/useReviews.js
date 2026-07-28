import { useEffect, useState } from "react";
import { getReviews } from "../services/googleReviews";

export default function useReviews() {
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const [reviewData, setReviewData] = useState({
    rating: 0,

    totalReviews: 0,

    reviews: [],
  });

  useEffect(() => {
    loadReviews();
  }, []);

  async function loadReviews() {
    try {
      const data = await getReviews();

      setReviewData(data);
    } catch (err) {
      console.error(err);

      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return {
    reviewData,

    loading,

    error,
  };
}
