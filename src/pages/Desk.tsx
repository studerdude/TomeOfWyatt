import { useNavigate } from "react-router-dom";

const scene = "/assets/DeskImagePlaceholder.png"

export default function Desk() {
    const nav = useNavigate();
    return (
        <div className="desk">
            <img className="desk-img" src={scene} alt="Desk close-up" />
            <button className="back" onClick={() => nav("/")}> Back</button>
        </div>
    );
}