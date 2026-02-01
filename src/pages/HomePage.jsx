import useFundraisers from "../hooks/use-fundraisers";
import FundraiserCard, {
  CreateFundraiserButton,
} from "../components/FundraiserCard";
import "./HomePage.css";

function HomePage() {
  const { fundraisers = [] } = useFundraisers();
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Crowdfunding Platform</h1>
        <p>Support innovative ideas and make a difference in your community</p>
      </div>

      <div className="content-wrapper">
        <h2 className="section-title">Active Fundraisers</h2>

        {fundraisers.length === 0 ? (
          <div className="empty-state">
            <h2>No fundraisers yet</h2>
            <p>Be the first to create one!</p>
          </div>
        ) : (
          <div id="fundraiser-list">
            {fundraisers?.map((f) => (
              <FundraiserCard key={f.id ?? f.title} fundraiser={f} />
            ))}
          </div>
        )}
      </div>

      <div className="create-button-container">
        <CreateFundraiserButton />
      </div>
    </div>
  );
}

export default HomePage;
