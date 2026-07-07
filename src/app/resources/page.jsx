import ComingSoon from "@/components/comingsoon";
import Heading1 from "@/components/heading";
import dynamic from "next/dynamic";

import Link from "next/link";

const PlayerAnimation = dynamic(() => import("@/components/player"), {
  ssr: false,
});
const domains = [
  {
    id: 0,
    name: "DSA & CP",
    animationLink:
      "https://assets10.lottiefiles.com/packages/lf20_ovwsvehd.json",
    link: "/resources/dsa",
  },
  {
    id: 1,
    name: "UI/UX",
    animationLink:
      "https://lottie.host/f8bd7394-db05-43d1-813a-98c76d88101b/QuIC27CPb9.json",
    link: "/resources/uiux",
  },
  {
    id: 2,
    name: "Web Development",
    animationLink:
      "/lottie_animations/React.json",
    link: "/resources/webdev",
  },
  {
    id: 3,
    name: "Android Development",
    animationLink:
      "https://lottie.host/83c1c54a-46b8-4af3-8bec-453e26c72559/pb8JClVcPF.json",
    link: "/resources/android",
  },
  {
    id: 4,
    name: "AR / VR",
    animationLink:
      "https://assets5.lottiefiles.com/packages/lf20_fcfjwiyb.json",
    link: "/resources/arvr",
  },
  {
    id: 5,
    name: "AI/ML",
    animationLink:
      "https://lottie.host/8e6ae271-b109-483c-863f-db44f123ae2c/SkW2h9f8ob.json",
    link: "/resources/aiml",
  },
];

const page = () => {
  return (
    <section className="bg-transparent text-white min-h-screen py-10">
      <div className="container px-6 py-10 mx-auto">
        <Heading1 title="Resources" />
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {domains.map((domain) => {
            return (
              <Link href={domain.link} key={domain.id}>
                <div className="glass-card flex flex-col items-center p-6 border border-white/10 rounded-2xl hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <div className="object-cover w-full rounded-md aspect-square">
                    <PlayerAnimation link={domain.animationLink} />
                  </div>

                  <h1 className="text-2xl font-bold text-white capitalize mt-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {domain.name}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
