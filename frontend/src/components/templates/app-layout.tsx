import { ChildrenProps } from "../../common/types";
import Navbar from "../UI/molecules/navbar";

function AppLayout({ children }: ChildrenProps) {
  return (
    <div className="h-screen lg:overflow-hidden font-lato">
      <Navbar />
      <div className="bg-dark-white h-screen">{children}</div>
    </div>
  );
}

export default AppLayout;
