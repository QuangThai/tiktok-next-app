import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  CheckCircleIcon,
  HomeIcon,
  LiveIcon,
  InboxIcon,
  UserGroupIcon,
} from "../Icons/Icons";

const Sidebar = () => {
  const router = useRouter();

  const array = [
    {
      id: 1,
      image: "/1.jpg",
      name: "Quang Thái",
    },
    {
      id: 2,
      image: "/1.jpg",
      name: "Quang Tâm",
    },
    {
      id: 3,
      image: "/1.jpg",
      name: "Quang Bình",
    },
    {
      id: 4,
      image: "/1.jpg",
      name: "Quang Bình",
    },
    {
      id: 5,
      image: "/1.jpg",
      name: "Quang Bình",
    },
    {
      id: 6,
      image: "/1.jpg",
      name: "Quang Bình",
    },
  ];

  return (
    <div className="w-[48px] border-r lg:border-none lg:w-[348px] h-[calc(100vh-60px)] sticky top-[60px] overflow-y-auto flex-shrink-0 py-5">
      <div className="flex flex-col items-stretch gap-5 [&_svg]:h-7 [&_svg]:w-7 font-semibold pb-6 border-b">
        <Link href="/">
          <a
            className={`flex items-center gap-2 ${
              !router.query.following
                ? "fill-pink text-pink"
                : "fill-black text-black"
            }`}
          >
            {!router.query.following ? <HomeIcon /> : <HomeIcon />}
            <span className="hidden lg:inline">For You</span>
          </a>
        </Link>
        <Link href={"/"}>
          <a
            className={`flex items-center gap-2 ${
              router.query.following
                ? "fill-pink text-pink"
                : "fill-black text-black"
            }`}
          >
            <UserGroupIcon />
            <span className="hidden lg:inline">Following</span>
          </a>
        </Link>
        <Link href={"/"}>
          <a
            className={`flex items-center gap-2 ${
              router.query.following
                ? "fill-pink text-pink"
                : "fill-black text-black"
            }`}
          >
            <LiveIcon />
            <span className="hidden lg:inline">Live</span>
          </a>
        </Link>
      </div>

      {array.length > 0 && (
        <div className="flex flex-col items-stretch gap-3 py-4 border-b">
          <p className="text-sm hidden lg:block">Suggested Accounts</p>
          {array.map((account) => (
            <Link href={`/user/${account}`} key={account.id}>
              <a className="flex items-center gap-3">
                <Image
                  className="rounded-full object-cover"
                  height={36}
                  width={36}
                  src={account.image!}
                  alt=""
                />

                <div className="hidden lg:block">
                  <p className="relative leading-[1]">
                    <span className="font-semibold text-sm">Quang Thái</span>
                    <CheckCircleIcon className="absolute w-[14px] h-[14px] right-[-20px] top-1 fill-[#20D5EC]" />
                  </p>
                  <p className="font-light text-xs">{account.name}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      )}

      {array.length > 0 && (
        <div className="flex flex-col items-stretch gap-3 py-4 border-b">
          <p className="text-sm hidden lg:block">Following Accounts</p>
          {array.map((account) => (
            <Link href={`/user/${account}`} key={account.id}>
              <a className="flex items-center gap-3">
                <Image
                  className="rounded-full object-cover"
                  src={account.image}
                  height={36}
                  width={36}
                  alt=""
                />

                <div className="hidden lg:block">
                  <p className="relative leading-[1]">
                    <span className="font-semibold text-sm">
                      {account.name}
                    </span>
                    <CheckCircleIcon className="absolute w-[14px] h-[14px] right-[-20px] top-1 fill-[#20D5EC] " />
                  </p>
                  <p className="font-light text-xs">{account.name}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      )}

      <div className="[&_p]:cursor-pointer [&_p:hover]:underline text-xs leading-[1.2] mt-5 text-zinc-400 flex-col items-stretch gap-4 hidden lg:flex">
        <div className="flex flex-wrap gap-2">
          <p>About</p>
          <p>Newsroom</p>
          <p>Store</p>
          <p>Contact</p>
          <p>Carrers</p>
          <p>ByteDance</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <p>TikTik for Good</p>
          <p>Advertise</p>
          <p>Developers</p>
          <p>Transparency</p>
          <p>TikTik Rewards</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <p>Help</p>
          <p>Safety</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Creator Portal</p>
          <p>Community Guidelines</p>
        </div>
        <span>© 2022 TopTop</span>
      </div>
    </div>
  );
};

export default Sidebar;
