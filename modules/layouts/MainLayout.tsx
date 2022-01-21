import React from "react";
import Head from "next/head";

type Props = {
  children: React.ReactChild | React.ReactChild[];
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="main-layout">
      <Head>
        <title>Revel prueba</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta name="description" content="Revel prueba" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};

export default MainLayout;
