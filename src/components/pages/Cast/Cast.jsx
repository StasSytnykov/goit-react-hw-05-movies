// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onFetchCast } from 'components/services/api';
import style from './Cast.module.css';

export const Cast = () => {
  const [castData, setCastData] = useState([]);
  const { id } = useParams();
  // console.log(test);
  // console.log(id);

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
    <ul className={style.list}>
      {castData.map(({ profile_path, name, character, cast_id }) => {
        const posterImage = `https://image.tmdb.org/t/p/w300/${profile_path}`;
        return (
          profile_path && (
            <li className={style.listItem} key={cast_id}>
              <img src={profile_path && posterImage} alt="" width={150} />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          )
        );
      })}
    </ul>
  );
};

// Cast.propTypes = {
//   id: PropTypes.string.isRequired,
// };
