import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { onFetchReviews } from 'components/services/api';

export const Reviews = ({ id }) => {
  const [reviewsData, setReviewsData] = useState([]);
  //   const location = useLocation();
  //   console.log(location);

  useEffect(() => {
    const onGetRviews = async () => {
      try {
        const reviews = await onFetchReviews(id);
        setReviewsData(reviews);
      } catch (error) {
        console.log(error);
        alert('Something went wrong :(');
      }
    };
    onGetRviews();
  }, [id]);

  return (
    <div>
      {reviewsData.length > 0 ? (
        <ul>
          {reviewsData.map(({ id, content, author }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </div>
  );
};
