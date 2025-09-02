import { useNavigate } from "react-router-dom";
import Hotspot from "../components/Hotspot";

const scene = "/assets/Scene.png"

export default function Landing() {
    const nav = useNavigate();
    return(
        <div className="scene">
            {/*<img className="scene-img" src={scene} alt="Wizard Desk Scene" />*/}
            {/* Hotspot Positions*/}
            <Hotspot left={50} top={63} width={22} height={28}
                onClick={() => nav("/desk")} label="Open the Tome" />
            <div className="title">TOME</div>
        </div>
    );
}