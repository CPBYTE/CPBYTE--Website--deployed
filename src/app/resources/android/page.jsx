import CardBox from "@/components/card";
import Link from "next/link";

const Resources = [
  {
    id: 1,
    playerLink:
      "https://lottie.host/83c1c54a-46b8-4af3-8bec-453e26c72559/pb8JClVcPF.json",
    link: "android/flutter",
  },
  {
    id: 2,
    playerLink:
      "https://lottie.host/2b1054bc-fe2f-4160-8306-728ac58471c8/0WGqJzdGOb.json",
    link: "android/kotlin",
  },
];

const Page = () => {
  return (
    <>
      <title>Android Resources CPBYTE | Technical Club Of KIET</title>
      <section className="bg-transparent text-white mx-auto max-w-screen-xl min-h-screen py-10">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-bold text-center text-white capitalize lg:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            ANDROID RESOURCES
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
