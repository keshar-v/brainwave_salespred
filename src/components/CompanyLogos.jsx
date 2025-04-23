import { companyLogos } from "../constants";
const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people make informed decisions with predictive analytics at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex px-8 justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img
              src="./src/assets/etsy.svg"
              width={134}
              height={28}
              alt={logo}
            />
            <img
              src="./src/assets/ebay.svg"
              width={134}
              height={28}
              alt={logo}
            />
            <img
              src="./src/assets/yourlog.svg"
              width={134}
              height={28}
              alt={logo}
            />
            <img
              src="./src/assets/walmart.svg"
              width={134}
              height={28}
              alt={logo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
