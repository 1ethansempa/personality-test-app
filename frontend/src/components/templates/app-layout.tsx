import { ChildrenProps } from "../../common/types";
import Navbar from "../UI/molecules/navbar";

function AppLayout({ children }: ChildrenProps) {
  return (
    <div className="min-h-screen bg-dark-white font-lato">
      <Navbar />
      {children}
    </div>
  );
}

export default AppLayout;
