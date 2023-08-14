import React, { useState } from 'react';

const BoxGenerator = () => {
    const [color, setColor] = useState("");
    const [boxes, setBoxes] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxes([...boxes, color]);
        setColor("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Color:</label>
                <input type="text" id="color" value={color} onChange={(e) => setColor(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {boxes.map((box, i) => (
                    <div key={i} style={{ backgroundColor: box, width: 100, height: 100 }}></div>
                ))}
            </div>
        </div>
    );
}

export default BoxGenerator;
