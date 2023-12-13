import ReactSVG from "../assets/react.svg"
import TsSVG from "../assets/typescript.svg"
import TailwindSVG from "../assets/tailwind.svg"
import ViteSVG from "../assets/vite.svg"

function UsedTech() {
  return (
    <>
    <img src={ReactSVG} className="h-[80px]" alt="react" />
    <img src={TsSVG}  className="h-[80px]"alt="ts" />
    <img src={TailwindSVG} className="h-[80px]"alt="tailwind" />
    <img src={ViteSVG} className="h-[80px]" alt="vite" />
    </>
  )
}

export default UsedTech