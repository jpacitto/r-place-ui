import './ColorSelector.css';

import tick from '../res/images/tick.png';
import close from '../res/images/close.png';

const colors = [
    'rgb(192, 52, 0)',
    'rgb(193, 127, 0)',
    'rgb(192, 162, 39)',
    'rgb(1, 123, 78)',
    'rgb(95, 179, 65)',
    'rgb(27, 61, 123)',
    'rgb(41, 110, 179)',
    'rgb(62, 177, 186)',
    'rgb(98, 23, 121)',
    'rgb(136, 56, 145)',
    'rgb(191, 115, 127)',
    'rgb(117, 79, 27)',
    'rgb(0, 0, 0)',
    'rgb(103, 106, 109)',
    'rgb(159, 160, 162)',
    'rgb(255, 255, 255)'
];

interface ColorSelectorProps {
    setShowColorSelector: (value: boolean) => void;
    showColorSelector: boolean;
}

const ColorSelector = (
    {
        setShowColorSelector,
        showColorSelector
    }: ColorSelectorProps
) => {
    const parentClass = "color-selector flex-center";
    const className = showColorSelector ? parentClass : parentClass + " color-selector-close";

    return (
        <div className={className}>
            <div className="color-control-panel">
                <div className="color-wheel flex-center">
                    <div className="flex-vert-center-row">
                        {colors.map((color) => (
                            <div
                                key={color}
                                style={{ 'backgroundColor': color }}
                                className="color-wheel-item hover-pointer"
                            />
                        ))}
                    </div>
                </div>
                <div className="color-actions">
                    <div className="flex-vert-center-row">
                        <div
                            className="action-button hover-pointer flex-center"
                            onClick={() => setShowColorSelector(false)}>
                            <img src={close} />
                        </div>
                        <div className="action-button hover-pointer flex-center">
                            <img src={tick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColorSelector;
