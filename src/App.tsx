import { useState } from 'react';
import { useRandomEmojis } from './hooks/useRandomEmojis';
import { ChooseEmojis } from './components/ChooseEmojis';
import { DobbleCards } from './components/DobbleCards';

export function App() {
  const { emojis, randomizeEmojis, setEmojis, isValid } = useRandomEmojis(13);
  const [showDobbleCards, setShowDobbleCards] = useState(false);

  return (
    <div className="bg-slate-50 h-screen p-3 flex flex-col items-center gap-5">
      <h1 className="text-5xl font-bold">Dobble generator</h1>

      {showDobbleCards ? (
        <DobbleCards images={emojis} goBack={() => setShowDobbleCards(false)} randomnessFactor={0.1} />
      ) : (
        <ChooseEmojis
          emojis={emojis}
          generateEmojis={randomizeEmojis}
          setEmojis={setEmojis}
          requestDobble={() => setShowDobbleCards(true)}
          className="flex-auto"
          allowShowCards={isValid}
        />
      )}
    </div>
  );
}

export default App;
