import Lottie from "react-lottie";
import WALKING_DOG_JSON from "../../animations/dog-walking.json";

export const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: WALKING_DOG_JSON,
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={100} width={100} />
    </div>
  );
};
