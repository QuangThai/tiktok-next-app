import Image from "next/image";
import Link from "next/link";

import Meta from "@/components/Shared/Meta";
import { useRouter } from "next/router";
import { HomeIcon, CloseIcon } from "@/components/Icons";

const Video = () => {
  const router = useRouter();

  return (
    <>
      <Meta
        title={`Tên video on TopTop`}
        description="Video | TopTop"
        image="/1.jpg"
      />

      <div className="flex flex-col lg:flex-row lg:h-screen items-stretch">
        <div className="lg:flex-grow flex justify-center items-center relative bg-[#1E1619]">
          <video
            className="w-auto h-auto max-w-full max-h-[600px] lg:max-h-full"
            src="/2.mp4"
            muted={false}
            // onVolumeChange={(e: any) => setIsMuted(e.target.muted)}
            autoPlay
            loop
            poster="/2.mp4"
            controls
            playsInline
          />
          <div className="absolute top-5 left-5 flex gap-3">
            {true && (
              <button
                onClick={() => router.back()}
                className="bg-[#3D3C3D] w-[40px] h-[40px] rounded-full flex justify-center items-center"
              >
                <CloseIcon className="w-5 h-5 fill-white" />
              </button>
            )}
            <Link href="/">
              <a className="w-[40px] h-[40px]">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="/favicon.png"
                  alt=""
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[500px] flex-shrink-0 flex flex-col items-stretch h-screen">
          <div className="px-4 pt-6 pb-4 flex-shrink-0 border-b">
            <div className="flex">
              <Link href={`/user/id`}>
                <a className="mr-3 flex-shrink-0 rounded-full">
                  <Image
                    src="/1.jpg"
                    alt=""
                    height={40}
                    width={40}
                    className="rounded-full"
                  />
                </a>
              </Link>
              <div className="flex-grow">
                <Link href={`/user/id`}>
                  <a className="font-bold block hover:underline">Quang Thái</a>
                </Link>
                <Link href={`/user/id`}>
                  <a className="text-sm block hover:underline">Quang Thái</a>
                </Link>
              </div>
              {/* @ts-ignore */}
              {true && (
                <div className="flex-shrink-0">
                  <button
                    className={`py-1 px-3 rounded text-sm mt-2 ${
                      false
                        ? "border hover:bg-[#F8F8F8] transition"
                        : "border border-pink text-pink hover:bg-[#FFF4F5] transition"
                    }`}
                  >
                    {false ? "Following" : "Follow"}
                  </button>
                </div>
              )}
            </div>
            <p
              className="my-3"
              style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
            >
              Hello caption
            </p>

            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                <div className="flex items-center gap-1">
                  <button className="w-9 h-9 bg-[#F1F1F2] fill-black flex justify-center items-center rounded-full">
                    <HomeIcon
                      className={`w-5 h-5 ${true ? "fill-pink" : ""}`}
                    />
                  </button>
                  <span className="text-center text-xs font-semibold">234</span>
                </div>
                <div className="flex items-center gap-1">
                  <button className="w-9 h-9 bg-[#F1F1F2] fill-black flex justify-center items-center rounded-full">
                    <HomeIcon className="w-5 h-5 scale-x-[-1]" />
                  </button>
                  <p className="text-center text-xs font-semibold">147</p>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    123
                  )}&t=${encodeURIComponent("haha")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HomeIcon className="fill-[#0476E9] w-7 h-7" />
                </a>
                <a
                  href={`http://twitter.com/share?text=${encodeURIComponent(
                    123
                  )}&url=${encodeURIComponent("haha")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HomeIcon className="fill-[#05AAF4] w-8 h-8" />
                </a>
                <a
                  href={`http://www.reddit.com/submit?url=${encodeURIComponent(
                    "haha"
                  )}&title=${encodeURIComponent(123)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HomeIcon className="fill-[#FF4500] w-7 h-7" />
                </a>
              </div>
            </div>

            <div className="flex items-stretch mt-3">
              <input
                className="bg-[#F1F1F2] p-2 flex-grow text-sm border outline-none"
                readOnly
                type="text"
                // value={href}
              />
              <button className="flex-shrink-0 border px-2">Copy link</button>
            </div>
          </div>
          <div className="flex-grow flex flex-col items-stretch gap-3 overflow-y-auto bg-[#F8F8F8] p-5">
            {[1, 2, 3].map((comment) => (
              <div key={comment} className="flex gap-2">
                <Link href={`/user/${comment}`}>
                  <a className="flex-shrink-0 rounded-full">
                    <Image
                      src="/1.jpg"
                      width={40}
                      height={40}
                      className="rounded-full"
                      alt=""
                    />
                  </a>
                </Link>
                <div className="flex-grow">
                  <Link href={`/user/${comment}`}>
                    <a className="font-bold hover:underline">Quang Thái</a>
                  </Link>
                  <p
                    style={{
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                    }}
                  >
                    Đây là comment
                  </p>
                  <p className="text-sm text-gray-400">14/12/2022</p>
                </div>
              </div>
            ))}
          </div>
          <form
            // onSubmit={handlePostComment}
            className="flex-shrink-0 flex p-5 gap-3 border-t"
          >
            <input
              className="bg-[#F1F1F2] rounded-md p-2 flex-grow text-sm outline-none placeholder:text-gray-500 border border-transparent focus:border-gray-300 transition"
              type="text"
              placeholder="Add comment..."
              // value={inputValue}
              // onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              // disabled={postCommentMutation.isLoading || !inputValue.trim()}
              type="submit"
              className={`transition ${false ? "" : "text-pink"}`}
            >
              {false ? "Posting..." : "Post"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Video;
