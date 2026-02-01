import { Link } from "react-router-dom";
import "./FundraiserCard.css";
import deleteFundraiser from "../api/delete-fundraiser.js";
import { useAuth } from "../hooks/use-auth.js";

function FundraiserCard(props) {
  // accept fundraiser and optional onDelete callback
  const { fundraiser, fundraiserData, onDelete } = props;
  const item = fundraiser ?? fundraiserData;

  const { auth } = useAuth();

  if (!item) return null;

  const id = item.id ?? item.pk ?? item.title;
  const fundraiserLink = `/fundraiser/${id}`;

  const handleDelete = async () => {
    if (!confirm("Delete this fundraiser? This cannot be undone.")) return;
    try {
      await deleteFundraiser(id);
      if (onDelete) onDelete(id);
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete fundraiser: " + err.message);
    }
  };

  return (
    <div className="fundraiser-card">
      {/** render image if available */}
      {item.image || item.image_url || item.imageUrl ? (
        <div className="fundraiser-image">
          <img
            src={item.image ?? item.image_url ?? item.imageUrl}
            alt={item.title ?? "Fundraiser image"}
          />
        </div>
      ) : null}

      <h3>
        <Link to={fundraiserLink}>{item.title}</Link>
      </h3>
      <p>{item.description}</p>

      {auth?.token && (
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      )}
    </div>
  );
}

export function CreateFundraiserButton() {
  // show button only to authenticated users
  const { auth } = useAuth();
  if (!auth?.token) return null;

  return (
    <div>
      <button>
        <Link to="/new-fundraiser" className="create-button">
          Create Fundraiser
        </Link>
      </button>
    </div>
  );
}

export default FundraiserCard;
