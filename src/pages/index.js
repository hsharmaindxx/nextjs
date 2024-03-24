import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const navigate = useRouter();
  return (
    <>
      <h1 className="text-3xl font-bold underline mb-2">Next Js</h1>
      <button
        className="bg-sky-700 px-4 py-2 text-white hover:bg-red-800 sm:px-8 sm:py-3 rounded"
        onClick={() => navigate.push("/useMemo")}
      >
        useMemo
      </button>
    </>
  );
}
