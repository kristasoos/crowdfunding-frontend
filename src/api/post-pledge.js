async function postPledge(amount, comment, isAnonymous, projectId) {
  const url = `${import.meta.env.VITE_API_URL}/pledges/`;
  const response = await fetch(url, {
    method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: amount,
      comment: comment,
      anonymous: isAnonymous,
      project: projectId,
    }),
  });

  if (!response.ok) {
    const fallbackError = `Error creating a pledge.`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default postPledge;
