import { useNavigate } from "react-router-dom";
import Logo from "../atoms/logo";
import PrimaryButton from "../atoms/primary-button";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="p-4 flex justify-between">
      <Logo />
      <PrimaryButton
        text="Take the test"
        includeArrow={false}
        className="text-sm lg:py-4 py-2 lg:px-8 px-6"
        clickAction={() => {
          navigate("/test", { replace: true });
        }}
        enabled={true}
      />
    </div>
  );
}

export default Navbar;
