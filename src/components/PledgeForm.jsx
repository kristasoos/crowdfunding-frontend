import { useState } from "react";
import { useAuth } from "../hooks/use-auth.js";
import postPledge from "../api/post-pledge.js";

function postPledge(props) {
  const { auth } = useAuth();
  const { projectId } = props;
  const [pledgeData, setPledgeData] = useState({
    amount: "",
    comment: "",
    anonymous: false,
  });

  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    setPledgeData((prevPledgeData) => ({
      ...prevPledgeData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!auth.token) {
      alert("You need to be logged in to make a pledge.");
      return;
    }

    const { amount, comment, anonymous } = pledgeData;
    console.log("Submitted pledgeData:", pledgeData);

    if (amount && projectId) {
      try {
        await postPledge(amount, comment, anonymous, projectId);
        alert("Pledge created successfully!");
        setPledgeData({
          amount: "",
          comment: "",
          anonymous: false,
        });
      } catch (error) {
        console.error("Error during pledge creation:", error.message);
      }
    }
  };
  return (
    <form>
      <div className="submit-pledge-form">
        <div>
          <label htmlFor="text">Enter Pledge Amount:</label>
          <input
            type="number"
            id="pledge-amount"
            placeholder="Enter Pledge Amount"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="text">Enter Comment:</label>
          <input
            type="text"
            id="comment"
            placeholder="Enter Comment"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="anonymous">
            <input
              type="checkbox"
              id="anonymous"
              checked={fundraiserData.anonymous}
              onChange={handleChange}
            />
            Pledge Anonymously:
          </label>
        </div>
      </div>
      ;
      <button type="submit" onClick={handleSubmit}>
        Submit Pledge
      </button>
    </form>
  );
}

export default postPledge;
