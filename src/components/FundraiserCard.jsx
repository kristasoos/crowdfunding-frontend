import { Link } from "react-router-dom";
import "./FundraiserCard.css";

function FundraiserCard(props) {
  const { fundraiserData } = props;
  const fundraiserLink = `fundraiser/${fundraiserData.id}`;

  return (
    <div className="fundraiser-card">
      <Link to={fundraiserLink} className="fundraiser-link">
        <img src={fundraiserData.image} />
        <h3>{fundraiserData.title}</h3>
        <p>{fundraiserData.description}</p>
        <h3 className="goal">Goal: ${fundraiserData.goal}</h3>
      </Link>
    </div>
  );
}

export default FundraiserCard;
