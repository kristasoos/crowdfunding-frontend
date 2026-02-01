import { useParams } from "react-router-dom";
import useFundraiser from "../hooks/use-fundraiser";
import { Link } from "react-router-dom";

function FundraiserPage() {
  // Here we use a hook that comes for free in react router called `useParams` to get the id from the URL so that we can pass it to our useFundraiser hook.
  const { id } = useParams();
  // useFundraiser returns three pieces of info, so we need to grab them all here
  const { fundraiser, isLoading, error } = useFundraiser(id);

  //const imageUrl =
  //("https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg");

  if (isLoading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {/* render image as a clickable link that opens in a new tab */}
      {fundraiser.image ? (
        <div className="fundraiser-image">
          <a
            href={
              fundraiser.image /* or use fullImageUrl if you prepended base */
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={
                fundraiser.image /* or use fullImageUrl if you prepended base */
              }
              alt={fundraiser.title ?? "Fundraiser image"}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </a>
        </div>
      ) : null}

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
    </div>
  );
}

export default FundraiserPage;
