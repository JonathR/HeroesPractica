import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesbyPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <div className="row">
      {
        //
        heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))
      }
    </div>
  );
};
