import { useParams } from "react-router-dom";
import useFundraiser from "../hooks/use-fundraiser";
import { Link } from "react-router-dom";
import postPledge from "../api/post-pledge";

function FundraiserPage() {
  // Here we use a hook that comes for free in react router called `useParams` to get the id from the URL so that we can pass it to our useFundraiser hook.
  const { id } = useParams();
  // useFundraiser returns three pieces of info, so we need to grab them all here
  const { fundraiser, isLoading, error } = useFundraiser(id);

  if (isLoading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      credentials.amount &&
      credentials.comment &&
      credentials.isAnonymous &&
      credentials.projectId
    ) {
      postPledge(
        credentials.amount,
        credentials.comment,
        credentials.isAnonymous,
        credentials.projectId
      ).then((response) => {
        window.localStorage.setItem("token", response.token);
        setAuth({
          token: response.token,
        });
        navigate("/");
      });
    }
  };

  return (
    <div>
      <h2>{fundraiser.title}</h2>
      <h3>Created at: {fundraiser.date_created}</h3>
      <h3>{`Status: ${fundraiser.is_open}`}</h3>
      <h3>Pledges:</h3>
      <ul>
        {fundraiser.pledges.map((pledgeData, key) => {
          return (
            <li key={key}>
              {pledgeData.amount} from {pledgeData.supporter}
            </li>
          );
        })}
      </ul>
      <button type="submit" onClick={handleSubmit}>
        Submit Pledge
      </button>
    </div>
  );
}

export default FundraiserPage;
