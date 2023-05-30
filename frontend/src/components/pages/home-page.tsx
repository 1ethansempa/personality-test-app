import PrimaryButton from "../UI/atoms/primary-button";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 pt-24">
      <div className="flex items-center justify-center my-4">
        <img src="curious-people.png" alt="Person Thinking" loading="lazy" />
      </div>
      <div className="flex flex-col items-center justify-center my-4">
        <div className="text-3xl my-3 text-center font-semibold">
          “Within the depths of self-discovery, one finds the power to transcend
          limitations, unleash hidden potentials, and become the masterpiece
          they ought to be.”
        </div>
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
        <img src="brain.png" alt="Person Thinking" loading="lazy" />
      </div>
    </div>
  );
}

export default HomePage;
