import { useParams, Link } from "react-router-dom";
import useFundraiser from "../hooks/use-fundraiser";
import "./FundraiserPage.css";

function FundraiserPage() {
  const { id } = useParams();
  const { fundraiser, isLoading, error } = useFundraiser(id);

  if (isLoading) {
    return (
      <div className="fundraiser-page">
        <div className="loading">Loading fundraiser details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fundraiser-page">
        <div className="error-message">
          <h2>Error loading fundraiser</h2>
          <p>{error.message}</p>
          <Link to="/" className="back-link">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const isOpen = fundraiser.is_open ? "Open" : "Closed";
  const totalPledged =
    fundraiser.pledges?.reduce(
      (sum, pledge) => sum + (pledge.amount || 0),
      0,
    ) || 0;

  return (
    <div className="fundraiser-page">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <div className="fundraiser-container">
        {/* Image section */}
        {fundraiser.image ? (
          <div className="fundraiser-image-section">
            <a
              href={fundraiser.image}
              target="_blank"
              rel="noopener noreferrer"
              className="image-link"
            >
              <img
                src={fundraiser.image}
                alt={fundraiser.title ?? "Fundraiser image"}
                className="fundraiser-image-large"
              />
            </a>
          </div>
        ) : null}

        {/* Details section */}
        <div className="fundraiser-details">
          <h1 className="fundraiser-title">{fundraiser.title}</h1>

          <div className="fundraiser-meta">
            <div className="meta-item">
              <span className="meta-label">Status</span>
              <span className={`status-badge ${isOpen.toLowerCase()}`}>
                {isOpen}
              </span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Created</span>
              <span className="meta-value">
                {new Date(fundraiser.date_created).toLocaleDateString()}
              </span>
            </div>
          </div>

          <div className="fundraiser-description">
            {fundraiser.description && (
              <>
                <h3>About this fundraiser</h3>
                <p>{fundraiser.description}</p>
              </>
            )}
          </div>

          {/* Pledges section */}
          <div className="pledges-section">
            <div className="pledges-header">
              <h3>Pledges ({fundraiser.pledges?.length || 0})</h3>
              <div className="total-pledged">
                <span className="total-label">Total Pledged:</span>
                <span className="total-amount">${totalPledged.toFixed(2)}</span>
              </div>
            </div>

            {fundraiser.pledges && fundraiser.pledges.length > 0 ? (
              <div className="pledges-list">
                {fundraiser.pledges.map((pledgeData, key) => (
                  <div key={key} className="pledge-item">
                    <div className="pledge-info">
                      <span className="pledge-supporter">
                        {pledgeData.supporter}
                      </span>
                      <span className="pledge-date">
                        {pledgeData.date_pledged
                          ? new Date(
                              pledgeData.date_pledged,
                            ).toLocaleDateString()
                          : ""}
                      </span>
                    </div>
                    <span className="pledge-amount">
                      ${pledgeData.amount.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-pledges">
                <p>No pledges yet. Be the first to support this fundraiser!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundraiserPage;
