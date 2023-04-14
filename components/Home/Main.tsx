import { useVideos } from "@/hooks/api/useVideos";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import VideoSection from "./VideoSection";

const Main = () => {
  const [page, setPage] = useState(1);

  const { data, isError, isLoading } = useVideos({
    type: "for-you",
    page,
  });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
    }
  }, [inView]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className="flex-grow">
      {Array.isArray(data?.data) &&
        data?.data?.map((video) => (
          <VideoSection key={video.id} video={video} />
        ))}

      {Number(data?.meta?.pagination?.current_page) <
      Number(data?.meta?.pagination?.total_pages) ? (
        <button ref={ref}>Load more</button>
      ) : null}
    </div>
  );
};

export default Main;
