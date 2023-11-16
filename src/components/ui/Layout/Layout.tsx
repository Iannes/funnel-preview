import Head from "next/head";
import { Header } from "components/ui/Header";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const Layout = ({ title = "My Funnel Preview", children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </Head>
      <Header
        imageClassnames="m-4"
        heading="Perspective"
        imageWidth={48}
        imageHeight={48}
        imageSource="/perspective-logo.png"
      />

      <div className="container mx-auto p-4 flex flex-col items-center min-h-screen">
        <h1 className="text-3xl font-semibold mt-4 text-center">{title}</h1>
        <main className="relative">{children}</main>
      </div>
    </>
  );
};
