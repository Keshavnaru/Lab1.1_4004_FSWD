import Header from "./Header";
import Footer from "./Footer";

type PageProps = {
  children: React.ReactNode;
};

function Page({
  children,
}: PageProps) {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
}

export default Page;