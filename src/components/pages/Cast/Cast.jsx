import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { onFetchCast } from 'components/services/api';

export const Cast = ({ id }) => {
  const [castData, setCastData] = useState([]);

  useEffect(() => {
    const onGetCast = async () => {
      try {
        const castObj = await onFetchCast(id);
        setCastData(castObj.cast);
      } catch (error) {
        console.log(error);
        alert('Something went wrong :(');
      }
    };
    onGetCast();
  }, [id]);

  return (
    <ul>
      {castData.map(({ profile_path, name, character, cast_id }) => {
        const posterImage = `https://image.tmdb.org/t/p/w300/${profile_path}`;
        return (
          <li key={cast_id}>
            {profile_path && (
              <img src={profile_path && posterImage} alt="" width={150} />
            )}
            <p>{name}</p>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
};

Cast.propTypes = {
  id: PropTypes.string.isRequired,
};
