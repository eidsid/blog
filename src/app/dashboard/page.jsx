"use client";
import React from "react";
import "./style.scss";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import DashboardShow from "../components/dashboardShow/dashboardShow";
import Head from "next/head";

const Page = () => {
  const session = useSession();
  const user = session?.data?.user;

  if (session.status !== "authenticated") redirect("/dashboard/login");
  return (
    <div className="container">
      <Head>
        <title>Dev digtal Agency dashboard page</title>
        <meta
          name="description"
          content="this dashboard page Dev digtal Agency website provide web development services"
        />
      </Head>
      {session.status === "unauthanticated" ? (
        <h1>Login frist</h1>
      ) : (
        <div>
          <DashboardShow user={user} />
        </div>
      )}
    </div>
  );
};

export default Page;
