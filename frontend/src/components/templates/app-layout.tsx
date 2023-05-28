import { ChildrenProps } from "../../common/types";

function AppLayout({ children }: ChildrenProps) {
  return <div className="h-screen">{children}</div>;
}

export default AppLayout;
