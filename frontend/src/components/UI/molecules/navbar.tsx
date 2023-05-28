import Logo from "../atoms/logo";
import PrimaryButton from "../atoms/primary-button";

function Navbar() {
  return (
    <div className="p-4 flex justify-between">
      <Logo />
      <PrimaryButton text="Take the test" />
    </div>
  );
}

export default Navbar;
