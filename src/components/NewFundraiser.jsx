import { useState } from "react";
import { useAuth } from "../hooks/use-auth.js";
import postFundraiser from "../api/post-fundraiser.js";
import "./LoginSignUpForm.css";

function NewFundraiser() {
  const { auth } = useAuth();
  const [fundraiserData, setFundraiserData] = useState({
    title: "",
    description: "",
    goal: 0,
    image: "",
    isOpen: true,
    dateCreated: "",
  });
  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    setFundraiserData((prevFundraiserData) => ({
      prevFundraiserData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!auth.token) {
      alert("You need to be logged in to create a project.");
      return;
    }
    const { title, description, goal, image, isOpen, dateCreated } =
      fundraiserData;
    if (title && description && goal > 0) {
      try {
        const response = await postProject(
          title,
          description,
          goal,
          image,
          isOpen,
          dateCreated
        );
        alert("Congratulations!! Your have created a new project");
        console.log("Project response:", response);

        setFundraiserData({
          title: "",
          description: "",
          goal: 0,
          image: "",
          isOpen: true,
          dateCreated: "",
        });
      } catch (error) {
        console.error("Error during project creation:", error.message);
      }
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <form>
      <div className="new-fundraiser">
        <div>
          <input
            type="text"
            id="title"
            placeholder="Enter project title:"
            onChange={handleChange}
          />
        </div>
        <div className="signup-form">
          <input
            type="text"
            id="project-description"
            placeholder="Enter Project description here"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="project-goal"
            placeholder="Enter Project goal:"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            id="project-image"
            placeholder="Image URL:"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="isOpen">Project Is Open for Pledges</label>
          <input
            type="checkbox"
            id="project-is-open"
            checked={fundraiserData.isOpen}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dateCreated">Date Created:</label>
          <input
            type="datetime-local"
            id="dateCreated"
            value={fundraiserData.dateCreated}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Create Project
      </button>
    </form>
  );
}

export default NewFundraiser;
