import PrimaryButton from "../UI/atoms/primary-button";

function HomePage() {
  return (
    <div className="bg-dark-white h-screen">
      <div className="grid grid-cols-3 pt-[10%]">
        <div>
          <img
            src="curious-people.png"
            className="flex items-center justify-center"
            alt="Person Thinking"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-xl my-3 text-center">
            &quot;Within the depths of self-discovery, one finds the power to
            transcend limitations, unleash hidden potentials, and become the
            masterpiece to be.&quot;
          </div>
          <div className="text-sm my-3">
            Take a few minutes to find out who you are
          </div>
          <PrimaryButton text="Take the test" />
        </div>
        <div>
          <img
            src="curious-people-2.png"
            className="flex items-center justify-center"
            alt="Person Thinking"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
