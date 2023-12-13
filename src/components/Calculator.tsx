import Display from "./Display";
import UsedTech from "./UsedTech";

function Calculator() {
    return (
        <>
            <div className="h-[100dvh] overflow-hidden bg-slate-600">
                <div className="calculator ">
                    <Display />
                </div>
                <div className="flex items-center justify-center h-[50%]">
                    <UsedTech />
                </div>
            </div>
        </>
    );
}

export default Calculator;
