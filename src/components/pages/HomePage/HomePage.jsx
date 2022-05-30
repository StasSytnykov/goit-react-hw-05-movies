import { useLocation } from 'react-router-dom';
import { HomePageItem } from './HomePageItem/HomePageItem';

export const HomePage = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h2>Tranding today</h2>
      {
        <ul>
          {movies.map(({ title, id }) => (
            <HomePageItem key={id} title={title} id={id} />
          ))}
        </ul>
      }
    </div>
  );
};
