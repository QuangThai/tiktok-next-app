import { ChatIcon, HeartIcon, ShareIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "./VideoPlayer";

const VideoSection = () => {
  const isCurrentlyFollowed = false;

  return (
    <div className="flex items-start p-2 lg:p-4 gap-3">
      <Link href={`/user/id`}>
        <a className="flex-shrink-0 rounded-full">
          <Image
            width={60}
            height={60}
            src="/1.jpg"
            className="rounded-full w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]"
            alt=""
          />
        </a>
      </Link>
      <div className="flex flex-col items-stretch gap-3 flex-grow">
        <div className="flex">
          <div className="flex-grow">
            <Link href={`/user/id`}>
              <a className="font-bold hover:underline mr-1">Quang Thái</a>
            </Link>
            <Link href={`/user/id`}>
              <a className="text-sm hover:underline">Quang Thái</a>
            </Link>
            <p style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
              Hello
            </p>
          </div>
          {/* @ts-ignore */}
          {true && (
            <div className="flex-shrink-0">
              <button
                className={`py-1 px-3 rounded text-sm mt-2 ${
                  isCurrentlyFollowed
                    ? "border hover:bg-[#F8F8F8] transition"
                    : "border border-pink text-pink hover:bg-[#FFF4F5] transition"
                }`}
              >
                {isCurrentlyFollowed ? "Following" : "Follow"}
              </button>
            </div>
          )}
        </div>
        <div className="flex items-end gap-5">
          <Link href={`/video/id`}>
            <a
              className={`${
                true ? "md:h-[600px]" : "flex-grow h-auto"
              } block bg-[#3D3C3D] rounded-md overflow-hidden flex-grow h-auto md:flex-grow-0`}
            >
              <VideoPlayer src="/2.mp4" poster="/2.mp4" />
            </a>
          </Link>
          <div className="flex flex-col gap-1 lg:gap-2">
            <button className="lg:w-12 lg:h-12 w-7 h-7 bg-[#F1F1F2] fill-black flex justify-center items-center rounded-full">
              <HeartIcon className={`lg:w-7 lg:h-7 h-5 w-5 fill-pink`} />
            </button>
            <p className="text-center text-xs font-semibold">234</p>
            <Link href={`/video/id`}>
              <a className="lg:w-12 lg:h-12 w-7 h-7 bg-[#F1F1F2] fill-black flex justify-center items-center rounded-full">
                <ChatIcon className="lg:w-6 lg:h-6 h-4 w-4 scale-x-[-1]" />
              </a>
            </Link>
            <p className="text-center text-xs font-semibold">23</p>
            <div className="relative group">
              <button className="lg:w-12 lg:h-12 w-7 h-7 bg-[#F1F1F2] fill-black flex justify-center items-center rounded-full">
                <ShareIcon className="lg:w-8 lg:h-8 w-6 h-6" />
              </button>
              {/* <div className="absolute bottom-[100%] right-0 rounded-md py-2 flex flex-col items-stretch bg-white border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                <a
                  className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-100 transition"
                  href={`/video`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook className="fill-[#0476E9] w-7 h-7" />
                  <span className="whitespace-nowrap">Share to Facebook</span>
                </a>
                <a
                  className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-100 transition"
                  href={`/video`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillTwitterCircle className="fill-[#05AAF4] w-8 h-8 mx-[-2px]" />
                  <span className="whitespace-nowrap">Share to Twitter</span>
                </a>
                <a
                  className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-100 transition"
                  href={`video`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsReddit className="fill-[#FF4500] w-7 h-7" />
                  <span className="whitespace-nowrap">Share to Reddit</span>
                </a>
                <button className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-100 transition">
                  <span className="w-7 h-7 flex justify-center items-center bg-[#FE2C55] rounded-full">
                    <BiLink className="fill-white w-5 h-5" />
                  </span>
                  <span className="whitespace-nowrap">Copy Link</span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
