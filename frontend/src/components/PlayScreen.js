import React from 'react';

const PlayScreen = (props) => {
    return (
      <div className="container-center">
        <h2 className="medium-heading">Začať kvíz</h2>
        <p className="medium-text">
          Kvíz obsahuje 21 otázok a 4 možné odpovede. Na každú z nich máte
          časový limit 30 sekúnd.
        </p>
        <button className="large-button" onClick={props.playButton}>
          Hrat!
        </button>
      </div>
    );
}

export default PlayScreen;