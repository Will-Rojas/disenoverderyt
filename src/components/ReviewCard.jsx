import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  return (
    <article className="review-card">
      <div className="review-header">

        <div>
          <h3>{review.author}</h3>

          <span className="review-date">{review.time}</span>
        </div>
      </div>

      <div className="review-stars">{"★".repeat(review.rating)}</div>

      <p className="review-text">"{review.text}"</p>
    </article>
  );
};

export default ReviewCard;
