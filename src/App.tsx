import React, { useState } from "react";

const CounterApp: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div style={styles.container}>
      <h1>🧮 Counter: {count}</h1>
      <div>
        <button onClick={() => setCount(count - 1)} style={styles.btn}>
          -
        </button>
        <button onClick={() => setCount(0)} style={styles.resetBtn}>
          Reset
        </button>
        <button onClick={() => setCount(count + 1)} style={styles.btn}>
          +
        </button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial",
  },
  btn: {
    fontSize: "24px",
    padding: "10px 20px",
    margin: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
  },
  resetBtn: {
    fontSize: "18px",
    padding: "10px 20px",
    margin: "10px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "8px",
  },
};

export default CounterApp;
