import { useState } from 'react';

import PlaceTileButton from "./PlaceTileButton";
import ColorSelector from "./ColorSelector";

import './ColorSelector.css'

const ColorPanel = () => {
    const [showColorSelector, setShowColorSelector] = useState(false);

    return (
        <div className={showColorSelector ? "color-selector-wrapper" : "color-selector-wrapper color-selector-wrapper-close"} >
            <PlaceTileButton
                setShowColorSelector={setShowColorSelector}
            />
            <ColorSelector
                showColorSelector={showColorSelector}
                setShowColorSelector={setShowColorSelector}
            />
        </div>
    );
};

export default ColorPanel;
