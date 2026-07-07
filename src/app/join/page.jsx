import CardBox from "@/components/card";
import Link from "next/link";

const Registration = [
  {
    id: 1,
    playerLink:
      "https://lottie.host/4dd33555-6a1f-4f2c-bd61-4ee50e340dba/nHkggk8JnZ.json",
    link: "join/first",
    text: "First Year",
  },
  {
    id: 2,
    playerLink:
      "https://lottie.host/4a7ba51d-cf35-4248-b63f-08317023873f/Quryv1f3au.json",
    link: "join/second",
    text: "Second Year",
  },
];

const Page = () => {
  return (
    <>
      <title>Join CPBYTE | Technical Club Of KIET</title>
      <section className="bg-transparent text-white mx-auto max-w-screen-xl min-h-screen py-10">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-bold text-center text-white capitalize lg:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Join <span className="gradient-text">CPBYTE</span>
            <div className="flex justify-center mx-auto mt-6">
              <span className="inline-block w-44 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></span>
              <span className="inline-block w-6 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-2 h-1 bg-blue-400 rounded-full"></span>
            </div>
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2">
            {Registration.map((year) => {
              return (
                <Link
                  key={year.id}
                  href={year.link}
                  className="flex flex-col items-center justify-center"
                >
                  <CardBox link={year.playerLink} />
                  <h1 className="text-xl mt-4 font-semibold text-center text-white capitalize">
                    Click Here <br />
                    <span className="text-blue-400">{`(${year.text})`}</span>
                  </h1>
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
