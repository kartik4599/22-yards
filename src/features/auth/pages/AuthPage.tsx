import LogoMatch from "../components/LogoMatch";
import SignIn from "../components/SignIn";

const AuthPage = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <LogoMatch />
      <SignIn />
    </div>
  );
};

export default AuthPage;
