import { redirect } from "react-router-dom";
import Logo from "../atoms/logo";
import PrimaryButton from "../atoms/primary-button";

function Navbar() {
  return (
    <div className="p-4 flex justify-between">
      <Logo />
      <PrimaryButton
        text="Take the test"
        includeArrow={false}
        className="text-sm"
        clickAction={() => {
          redirect("/");
        }}
      />
    </div>
  );
}

export default Navbar;
