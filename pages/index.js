import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import FilterMenu from "@/components/header/FilterMenu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page :- air-babble</title>
        <link rel="stylesheet" href="./bubbles-air.svg" />
      </Head>
      <FilterMenu />
      <div className="px-20 pb-10 flex justify-end space-x-4">
        <button className="border rounded-lg p-4 text-xs font-medium">
          All
        </button>
        <button className="border rounded-lg p-4 text-xs font-medium">
          Add Listing
        </button>
      </div>
    </>
  );
}
