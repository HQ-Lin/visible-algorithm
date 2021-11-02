import { useEffect, useState } from 'react'
import Clock from './animation/Clock';
import SelectSort from './animation/SelectSort';

const animationMap: { [animation: string]: Function } = {
  Clock,
  SelectSort,
}

function App() {
  const [animation, setAnimation] = useState('Clock');

  useEffect(() => {
    const animateCache = animationMap[animation]();

    return () => {
      cancelAnimationFrame(animateCache.animateId);
    };
  }, [animation]);

  return (
    <div className="App">
      <div className="Aside">
        <h2 className="Aside--title">Visible Algorithm</h2>
        <div className="Aside--content">
          <button className="Aside--button" onClick={() => setAnimation('Clock')}>⏰ Clock</button>
          <button className="Aside--button" onClick={() => setAnimation('SelectSort')}>⬆️ SelectSort</button>
        </div>
      </div>

      <div className="Content">
        <canvas width="1280" height="720" id="Canvas">
          Your browser sucks.
        </canvas>
      </div>
    </div>
  )
}

export default App
