import razorpay from "../assets/razorpay.png"
import passwordGenerator from "../assets/password generator.png"

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: razorpay,
      name: "Razorpay Clone",
      description: " Razor pay clone using HTMl and tailwind CSS",
      link: "https://razorpayclone-mdirshad.netlify.app/",
      source: "https://github.com/mdirshad9211/Razorpay-Clone-Md-Irshad"
    },
    {
      id: 2,
      logo: passwordGenerator,
      name: "Password Generator",
      description: "A Password Generator for your security",
      link: "https://mdirshad9211.github.io/password-Generator/",
      source:"https://github.com/mdirshad9211/password-Generator"
    }
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map((item) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={item.id}
            >
              <img
                src={item.logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={item.name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{item.name}</div>
                <p className="px-2 text-gray-700">
                  {item.description}
                </p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <a href={item.link} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                Visit
                </a>
                <a href={item.source} className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
