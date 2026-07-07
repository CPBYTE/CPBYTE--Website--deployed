import CardBox from "@/components/card";
import Heading1 from "@/components/heading";
import Link from "next/link";

const Resources = [
  {
    id: 1,
    playerLink:
      "https://lottie.host/f264a429-e390-46d7-8b08-be6d36c5c20d/hOtqkgkz53.json",
    link: "webdev/html",
  },
  {
    id: 2,
    playerLink:
      "https://lottie.host/f8bd7394-db05-43d1-813a-98c76d88101b/QuIC27CPb9.json",
    link: "webdev/css",
  },
  {
    id: 3,
    playerLink:
      "https://lottie.host/7ce477ee-9707-4929-8814-02fb1f3c9c80/XX9Gp3NQXv.json",
    link: "webdev/js",
  },
  {
    id: 4,
    playerLink:
      "/lottie_animations/React.json",
    link: "webdev/react",
  },
];

const Page = () => {
  return (
    <>
      <title>Web Development Resources CPBYTE | Technical Club Of KIET</title>
      <section className="bg-transparent text-white mx-auto max-w-screen-xl min-h-screen py-10">
        <div className="container px-6 mx-auto">
          <Heading1 title="Web Resources" />

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {Resources.map((resource) => {
              return (
                <Link key={resource.id} href={resource.link}>
                  <CardBox link={resource.playerLink} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
