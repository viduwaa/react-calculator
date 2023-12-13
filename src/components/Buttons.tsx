
type ButtonProps = {
    btnValue: string;
    btnStyle?: string;
    onButtonClick: (content: string) => void
};

function Buttons({ btnValue, btnStyle,onButtonClick }: ButtonProps) {
    const handleClick = () => {
        onButtonClick(btnValue)
    };

    return (
        <>
            <button onClick={handleClick} className={`button ${btnStyle}`}>{btnValue}</button>
        </>
    );
}

export default Buttons;
