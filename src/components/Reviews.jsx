import ReviewCard from "./ReviewCard";
import "./Reviews.css";
import useReviews from "../hooks/useReviews";

const Reviews = () => {
  const { reviewData, loading, error } = useReviews();

  if (error) {
    return (
      <section className="reviews">
        <p>Error cargando las reseñas.</p>
      </section>
    );
  }

  return (
    <section className="reviews">
      <div className="reviews-container">
        <div className="reviews-header">
          <span className="reviews-badge">Opiniones verificadas</span>

          <h2>Lo que opinan nuestros clientes</h2>

          <p>
            La satisfacción de nuestros clientes es nuestra mejor carta de
            presentación.
          </p>
        </div>

        <div className="google-rating">

          <div className="rating-stars">★★★★★</div>

          <h3>{reviewData.rating}</h3>

          <p>
            Basado en 
            <strong> {reviewData.totalReviews} </strong>
             reseñas verificadas
          </p>
        </div>

        <div className="reviews-grid">
          {loading ? (
            <p>Cargando reseñas...</p>
          ) : (
            reviewData.reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))
          )}
        </div>

        <div className="reviews-buttons">

    <a href="https://www.google.com/maps/place/RyT+Dise%C3%B1o+Verde/@10.0423476,-84.2594852,15z/data=!4m6!3m5!1s0x2e55797ddf6c64bb:0x2989e3ce0d7f521d!8m2!3d10.041435!4d-84.2622374!16s%2Fg%2F11mybznxh3?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D" className="review-btn">
            Escribir una reseña
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
