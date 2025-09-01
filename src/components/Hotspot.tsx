import React from "react";

type HotspotProps = {
    left: number;
    top: number;
    width: number;
    height: number;
    onClick: () => void;
    label: string;
};

export default function Hotspot({
    left, top, width, height, onClick, label,
}: HotspotProps) {
    const style: React.CSSProperties = {
        position: "absolute",
        left: `${left}%`,
        top: `${top}%`,
        width: `${width}%`,
        height: `${height}%`,
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
        outline: "none",
        background: "transparent",
        border: "none",
    };
    return (
        <button
        aria-label={label}
        title={label}
        style={style}
        className="hotspot"
        onClick={onClick}
        />
    );
}