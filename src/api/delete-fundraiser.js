async function deleteFundraiser(fundraiserId) {
  const url = `${import.meta.env.VITE_API_URL}/fundraisers/${fundraiserId}/`;
  const token = window.localStorage.getItem("token");
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Token ${token}` } : {}),
    },
  });

  if (!response.ok) {
    let errText;
    try {
      const data = await response.json();
      errText = data?.detail ?? JSON.stringify(data);
    } catch {
      errText = await response.text().catch(() => "Server error");
    }
    throw new Error(`Delete failed: ${response.status} ${errText}`);
  }

  return true;
}

export default deleteFundraiser;
