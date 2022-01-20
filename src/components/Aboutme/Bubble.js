import "./AboutMe.scss";
const Bubble = ({ size, left, name }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: left,
        bottom: "-50%",
        clear: "both",
        display: "block",
        width: size,
        height: size,
        backgroundColor: "#e8d267",
        opacity: "0.3",
        borderRadius: "50%",
        animationName: name,
        animationDelay: `${1 + Math.floor(Math.random() * 4)}s`,
        animationTimingFunction: "ease-in",
        animationDuration: `${6 + Math.floor(Math.random() * 12)}s`,
        animationIterationCount: "infinite",
      }}
    />
  );
};
export { Bubble };