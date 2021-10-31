import { useEffect, useState } from 'react'
import Clock from './animation/Clock';

const animationMap: { [animation: string]: Function } = {
  Clock
}

function App() {
  const [animation, setAnimation] = useState('Clock');

  useEffect(() => {
    const { animateId } = animationMap[animation]();
    return cancelAnimationFrame(animateId);
  }, [animation]);

  return (
    <div className="App">
      <div className="Aside">
        <h2 className="Aside--title">Visible Algorithm</h2>
        <div className="Aside--content">
          <button className="Aside--button" onClick={() => setAnimation('Clock')}>⏰ Clock</button>
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
