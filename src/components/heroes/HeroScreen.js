import React from 'react';
import { useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroeByld';

export const HeroScreen = () => {
  const { heroeId } = useParams();

  const hero = getHeroesById(heroeId);
  console.log(hero);

  return (
    <div>
      <h1>HeroScreen</h1>
    </div>
  );
};
