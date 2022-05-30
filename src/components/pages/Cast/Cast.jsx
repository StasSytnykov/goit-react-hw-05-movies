import { onFetchCast } from 'components/services/api';
import { useEffect, useState } from 'react';

export const Cast = ({ id }) => {
  const [castData, setCastData] = useState([]);
  const { cast } = castData;

  useEffect(() => {
    const onGetCast = async () => {
      try {
        const cast = await onFetchCast(id);
        setCastData(cast);
      } catch (error) {
        console.log(error);
        alert('Something went wrong :(');
      }
    };
    onGetCast();
  }, [id]);

  return (
    <ul>
      {cast &&
        cast.map(({ profile_path, name, character, cast_id }) => {
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
