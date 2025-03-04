import Header from "@/components/common/Header";
import SideBar from "@/components/common/SideBar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
