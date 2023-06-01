import PrimaryButton from "../UI/atoms/primary-button";
import { useNavigate } from "react-router-dom";
import Quote from "../UI/atoms/quote";
import LazyLoadedImage from "../UI/atoms/lazy-loaded-image";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 pt-24">
      <div className="flex items-center justify-center my-4">
        <LazyLoadedImage src="curious-people.png" alt="Person Thinking" />
      </div>
      <div className="flex flex-col items-center justify-center my-4">
        <Quote
          text="Within the depths of self-discovery, one finds the power to transcend
          limitations, unleash hidden potentials, and become the masterpiece
          they ought to be."
        />
        <div className="text-sm my-3">
          Take a few minutes to find out who you are.
        </div>
        <PrimaryButton
          text="Take the test"
          className="text-2xl py-6 px-6"
          includeArrow={true}
          clickAction={() => {
            navigate("/test", { replace: true });
          }}
        />
      </div>
      <div className="hidden md:flex items-center justify-center my-4">
        <LazyLoadedImage src="brain.png" alt="Discovery" />
      </div>
    </div>
  );
}

export default HomePage;
