import { ChildrenProps } from "../../common/types";
import Navbar from "../UI/molecules/navbar";

function AppLayout({ children }: ChildrenProps) {
  return (
    <div className="lg:h-screen overflow-hidden font-lato">
      <Navbar />
      {children}
    </div>
  );
}

export default AppLayout;
