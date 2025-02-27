import welcome from "../../assets/welcome.jpg";

const Welcome = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${welcome})` }}
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-6xl font-bold mb-4">
          Leading Global Healthcare Solutions
        </h1>
        <p className="text-white text-lg max-w-2xl">
          Transforming lives with cutting-edge medical innovations and comprehensive health solutions worldwide.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
