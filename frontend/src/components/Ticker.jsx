import { useState } from "react";

export default function Ticker() {
    const [items, setItems] = useState([
        "Welcome to our NGO 🎉",
        "New membership open now",
        "Donate to support education"
    ]);

    const [input, setInput] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    // ➕ Add
    const handleAdd = () => {
        if (!input.trim()) return;
        setItems([...items, input]);
        setInput("");
    };

    // ❌ Delete
    const handleDelete = (index) => {
        const updated = items.filter((_, i) => i !== index);
        setItems(updated);
    };

    // ✏️ Edit
    const handleEdit = (index) => {
        setInput(items[index]);
        setEditIndex(index);
    };

    const handleUpdate = () => {
        const updated = [...items];
        updated[editIndex] = input;
        setItems(updated);
        setEditIndex(null);
        setInput("");
    };

    const duration = items.length * 8;

    return (
        <div className="p-4 space-y-6">
            <style>
                {`
          .marquee {
          animation-name: marquee;
          animation-timing-function: ease-in;
          animation-iteration-count: infinite;
          }

/* Keyframes */
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-200%);
  }
}
        `}
            </style>


            {/* 📰 Ticker */}
            <div className="overflow-hidden bg-[#000000d1] text-white text-xl py-2 rounded">
                <div className="flex marquee whitespace-nowrap"
                    style={{ animationDuration: `${duration}s` }}
                >
                    {[...items, ...items].map((item, i) => (
                        <span key={i} className="mx-8">
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* 🛠 Admin Panel */}
            <div className="space-y-3">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter ticker text"
                    className="border p-2 w-full"
                />

                <div className="flex gap-2">
                    {editIndex !== null ? (
                        <button
                            onClick={handleUpdate}
                            className="bg-yellow-500 text-white px-4 py-1"
                        >
                            Update
                        </button>
                    ) : (
                        <button
                            onClick={handleAdd}
                            className="bg-green-600 text-white px-4 py-1"
                        >
                            Add
                        </button>
                    )}
                </div>

                {/* List */}
                <div className="space-y-2">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center border p-2"
                        >
                            <span>{item}</span>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEdit(index)}
                                    className="bg-blue-500 text-white px-2"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => handleDelete(index)}
                                    className="bg-red-500 text-white px-2"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}