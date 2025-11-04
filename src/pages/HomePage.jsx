import useFundraisers from "../hooks/use-fundraisers";
import FundraiserCard, {
  CreateFundraiserButton,
} from "../components/FundraiserCard";
import "./HomePage.css";

function HomePage() {
  const { fundraisers = [] } = useFundraisers();
  return (
    <div>
      <div id="fundraiser-list">
        {fundraisers?.map((f) => (
          <FundraiserCard key={f.id ?? f.title} fundraiser={f} />
        ))}
        <CreateFundraiserButton /> {/* button links to /new-fundraiser */}
      </div>
    </div>
  );
}

export default HomePage;
