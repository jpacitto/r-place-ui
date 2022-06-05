import './PlaceTileButton.css';

interface PlaceTileButtonProps {
    setShowColorSelector: (value: boolean) => void;
}

const PlaceTileButton = (
    { setShowColorSelector }: PlaceTileButtonProps
) => {
    return (
        <div className="place-tile-button-wrapper">
            <button onClick={() => setShowColorSelector(true)}>
                Place a tile
            </button>
        </div>
    );
};

export default PlaceTileButton;