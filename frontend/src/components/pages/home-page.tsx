import { useNavigate } from "react-router-dom";
import LazyLoadedImage from "../UI/atoms/lazy-loaded-image";
import QuoteBlock from "../UI/molecules/quote-block";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 pt-24">
      <div className="flex items-center justify-center my-4">
        <LazyLoadedImage src="curious-people.png" alt="Person Thinking" />
      </div>
      <div className="flex flex-col items-center justify-center my-4">
        <QuoteBlock
          quoteText="Within the depths of self-discovery, one finds the power to transcend
          limitations, unleash hidden potentials, and become the masterpiece
          they ought to be."
          smallText=" Take a few minutes to find out who you are."
          action={() => {
            navigate("/test", { replace: true });
          }}
          actionText="Take the Test"
        />
      </div>
      <div className="hidden md:flex items-center justify-center my-4">
        <LazyLoadedImage src="brain.png" alt="Discovery" />
      </div>
    </div>
  );
}

export default HomePage;
