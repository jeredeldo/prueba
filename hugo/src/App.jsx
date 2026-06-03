import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  return (
    <>
      <TwitterFollowCard
        userName="hugomini"
        name="Hugo Cogidin"
        isFollowing={false}
      />
      <TwitterFollowCard
        userName="pijaconpelo"
        name="Ultra Pija"
        isFollowing={true}
      />
      <TwitterFollowCard
        userName="betocorrientes"
        name="Beto Corrientes"
        isFollowing={true}
      />
      <TwitterFollowCard
        userName="jeredeldo"
        name="El Capo"
        isFollowing={false}
      />
    </>
  );
}
