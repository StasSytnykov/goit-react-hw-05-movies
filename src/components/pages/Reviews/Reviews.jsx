// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onFetchReviews } from 'components/services/api';

export const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const { id } = useParams();

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

// Reviews.propTypes = {
//   id: PropTypes.string.isRequired,
// };
