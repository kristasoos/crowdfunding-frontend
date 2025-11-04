import useFundraisers from "../hooks/use-fundraisers";
import FundraiserCard from "../components/FundraiserCard";
import "./HomePage.css";

function HomePage() {
  const { fundraisers = [] } = useFundraisers();
  return (
    <div id="fundraiser-list">
      {fundraisers?.map((fundraiserData) => {
        if (!fundraiserData) return null;
        return (
          <FundraiserCard
            key={fundraiserData.id ?? fundraiserData.title}
            fundraiser={fundraiserData}
          />
        );
      })}
    </div>
  );
}

export default HomePage;
