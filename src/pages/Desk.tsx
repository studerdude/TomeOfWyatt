import { useNavigate } from "react-router-dom";

export default function Desk() {
    const nav = useNavigate();
    return (
        <div className="desk">
            <button className="back" onClick={() => nav("/")}> Back</button>
        </div>
    );
}