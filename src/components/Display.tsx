import { useState } from "react";
import Buttons from "./Buttons";


function Display() {
    let [clickedContent, setClickedContent] = useState<string>("");
    let [prevContent, setPrevContent] = useState<string>("");

    const handleButtonClick = (content: string) => {
        if (content === "AC") {
            let allZero = () => {
                content = "";
                prevContent = "";
                setPrevContent(prevContent);
                setClickedContent(content);
            };
            allZero();
        } else if (content === "C") {
            setClickedContent((prev) => prev.slice(0, -1));
        } else if (content === "+") {
            if (clickedContent !== "") {
                setPrevContent((prev) => prev + clickedContent + "+");
                content = "";
                return setClickedContent(content);
            } else {
                return;
            }
        } else if (content === "-") {
            if (clickedContent !== "") {
                setPrevContent((prev) => prev + clickedContent + "-");
                content = "";
                return setClickedContent(content);
            } else {
                return;
            }
        } else if (content === "x") {
            if (clickedContent !== "") {
                setPrevContent((prev) => prev + clickedContent + "*");
                content = "";
                return setClickedContent(content);
            } else {
                return;
            }
        } else if (content === "/") {
            if (clickedContent !== "") {
                setPrevContent((prev) => prev + clickedContent + "/");
                content = "";
                return setClickedContent(content);
            } else {
                return;
            }
        } else if (content === ".") {
            if (clickedContent !== "") {
                setPrevContent((prev) => prev + clickedContent + ".");
                content = "";
                return setClickedContent(content);
            } else {
                return;
            }
        } else if (content === "=") {
            let total;

            if (clickedContent !== "" && prevContent !==""){
                /* setPrevContent((prev) => prev + clickedContent); */
                total=eval(prevContent+clickedContent)
                content = "";
                setPrevContent(content)
                return  setClickedContent(total);
            } else {
                return;
            }
        } else {
            setClickedContent((prev) => prev + content);
        }
    };

    return (
        <>
            <div className="display">
                <div className="text-[16px] px-[5px] text-gray-800">
                    {prevContent}
                </div>
                <div className="text-[48px]">{clickedContent}</div>
            </div>
            <Buttons
                btnValue="AC"
                btnStyle="col-span-2"
                onButtonClick={handleButtonClick}
            />
            <Buttons btnValue="C" onButtonClick={handleButtonClick} />
            <Buttons btnValue="/" onButtonClick={handleButtonClick} />
            <Buttons btnValue="7" onButtonClick={handleButtonClick} />
            <Buttons btnValue="8" onButtonClick={handleButtonClick} />
            <Buttons btnValue="9" onButtonClick={handleButtonClick} />
            <Buttons btnValue="x" onButtonClick={handleButtonClick} />
            <Buttons btnValue="4" onButtonClick={handleButtonClick} />
            <Buttons btnValue="5" onButtonClick={handleButtonClick} />
            <Buttons btnValue="6" onButtonClick={handleButtonClick} />
            <Buttons btnValue="-" onButtonClick={handleButtonClick} />
            <Buttons btnValue="1" onButtonClick={handleButtonClick} />
            <Buttons btnValue="2" onButtonClick={handleButtonClick} />
            <Buttons btnValue="3" onButtonClick={handleButtonClick} />
            <Buttons btnValue="+" onButtonClick={handleButtonClick} />
            <Buttons btnValue="." onButtonClick={handleButtonClick} />
            <Buttons btnValue="0" onButtonClick={handleButtonClick} />
            <Buttons
                btnValue="="
                onButtonClick={handleButtonClick}
                btnStyle="col-span-2"
            />
        </>
    );
}

export default Display;
