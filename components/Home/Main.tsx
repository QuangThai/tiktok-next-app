import React, { useState } from "react";
import VideoSection from "./VideoSection";
import axios from "axios";
import useSWR from "swr";
import { Video } from "@/types/video";

const Main = () => {
  const [page, setPage] = useState(1);

  const getVideos = async (): Promise<Video> => {
    const resp = await axios.get(
      `https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=${page}`
    );
    return resp.data;
  };

  const { data, error } = useSWR("videos", () => {
    return getVideos();
  });

  if (!error && !data) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="flex-grow">
      {Array.isArray(data?.data) &&
        data?.data?.map((video) => (
          <VideoSection key={video.id} video={video} />
        ))}
      <button onClick={() => setPage((prev) => prev + 1)}>Load More</button>
    </div>
  );
};

export default Main;
