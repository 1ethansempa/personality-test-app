import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="text-primary text-xl flex items-center p-2 italic">
        PsychologyLabs
      </div>
    </Link>
  );
}

export default Logo;
