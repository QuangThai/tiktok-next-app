import Main from "@/components/Home/Main";
import Sidebar from "@/components/Home/Sidebar";
import Navbar from "@/components/Layout/Header";
import Meta from "@/components/Shared/Meta";
import { useVideos } from "@/hooks/api/useVideos";
import useSWR from "swr";
import axios from "axios";

import type { NextPage } from "next";

const Home: NextPage = () => {
  const { data } = useVideos({
    type: "for-you",
  });

  async function getVideos() {
    const resp = await axios.get(
      `https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=1`
    );
    console.log(22222222, resp.data.data);
  }

  const { data: videos } = useSWR("videos", () => {
    return getVideos();
  });
  console.log("videos", videos);

  return (
    <>
      <Meta
        title="TopTop - Make Your Day"
        description="TopTop - trends start here"
        image="/favicon.png"
      />
      <Navbar />
      <div className="flex justify-center mx-4">
        <div className="w-full max-w-[1150px] flex">
          <Sidebar />
          <Main />
        </div>
      </div>
    </>
  );
};

export default Home;
