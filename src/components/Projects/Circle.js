import "./Project.css";
const Circle = ({ size, name, left }) => {
  return (
    <div
      className="circle"
      style={{
        width: `${size * 2 * 100}px`,
        height: `${size * 2 * 100}px`,
        left: left,
        bottom: `${Math.floor(Math.random() * 90) + 1}vh`,
        animationName: name,
        animationDelay: `${1 + Math.floor(Math.random() * 10)}s`,
        animationDuration: `${3 + Math.floor(Math.random() * 6)}s`,
        animationTimingFunction: "ease-out",
        animationIterationCount: "10",
        animationFillMode: "forwards",
      }}
    ></div>
  );
};
export { Circle };
