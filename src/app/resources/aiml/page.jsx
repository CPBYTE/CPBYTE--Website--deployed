import CardBox from "@/components/card";
import Link from "next/link";

const Resources = [
  {
    id: 1,
    playerLink:
      "https://lottie.host/8e6ae271-b109-483c-863f-db44f123ae2c/SkW2h9f8ob.json",
    link: "aiml/ml",
  },
];

const Page = () => {
  return (
    <>
      <title>AI/ML Resources CPBYTE | Technical Club Of KIET</title>
      <section className="bg-transparent text-white mx-auto max-w-screen-xl min-h-screen py-10">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-bold text-center text-white capitalize lg:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            AI/ML RESOURCES
            <div className="flex justify-center mx-auto mt-6">
              <span className="inline-block w-44 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></span>
              <span className="inline-block w-6 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-2 h-1 bg-blue-400 rounded-full"></span>
            </div>
          </h1>

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
