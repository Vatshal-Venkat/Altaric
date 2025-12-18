import loader from "../assets/loader.png";

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        margin: 0,
        padding: 0,
      }}
    >
      <img
        src={loader}
        alt="Altaric Loader"
        style={{
          width: "300px",
          maxWidth: "70vw",
          display: "block",
          animation: "loaderEnter 1s ease-out forwards",
        }}
      />

      {/* Inline keyframes so no CSS file dependency */}
      <style>
        {`
          @keyframes loaderEnter {
            0% {
              opacity: 0;
              transform: scale(0.96);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
