import React, { useState } from "react";
import "./Social.css"; // Replace with your actual CSS file name

function SocialCard() {
  const [isDataVisible, setDataVisible] = useState(false);
  const [isFormVisible, setFormVisible] = useState(false);
  const [formPage, setFormPage] = useState("basic");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: "",
  });

  const showForm = () => {
    setFormVisible(true);
  };

  const closeForm = () => {
    setFormVisible(false);
    setFormPage("basic");
    setFormData({
      name: "",
      email: "",
      phone: "",
      instagram: "",
      youtube: "",
    });
  };

  const createNewForm = () => {
    setFormPage("social");
  };

  const goBack = () => {
    setFormPage("basic");
  };

  const submitForm = () => {
    setFormVisible(false);
    setDataVisible(true);
    // Implement functionality to submit the form data
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const renderFormContent = () => {
    if (formPage === "basic") {
      return (
        <div className="basic">
          <label htmlFor="name">Enter Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Eg. John Doe"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />
          <label htmlFor="email">Enter Email*</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Eg. John@xyz.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />
          <label htmlFor="phone">Enter Phone*</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Eg. 9123456789"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
      );
    } else if (formPage === "social") {
      return (
        <div className="social">
          <label htmlFor="instagram">
            Instagram Link <span style={{ color: "gray" }}>(Optional)</span>
          </label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            placeholder="Eg. ..instagram.com/username"
            value={formData.instagram}
            onChange={handleInputChange}
          />
          <br />
          <br />
          <label htmlFor="youtube">
            Youtube Link
            <span style={{ color: "gray" }}>(Optional)</span>
          </label>
          <input
            type="text"
            id="youtube"
            name="youtube"
            placeholder="Eg. ..youtube.com/username"
            value={formData.youtube}
            onChange={handleInputChange}
          />
        </div>
      );
    }
  };

  const renderData = () => {
    return (
      <div className="data">
        <h1>{formData.name}</h1>
        

          <div className="flex-container">
            <div className="flex-item"><img src="src/assets/whatapp.svg" alt=""/>{formData.phone}</div>
            <div className="flex-item"><img src="src/assets/insta.svg" alt="" /> {formData.instagram}</div>
            <div className="flex-item"><img src="src/assets/email.svg" alt="" /> {formData.email}</div>
            <div className="flex-item"><img src="src/assets/youtube.svg" alt="" /> {formData.youtube}</div>
          </div>
          
        </div>
      
    );
  };

  return (
    <>
      {isDataVisible && renderData()}
      {!isDataVisible && (
        <div className="social-icon">
          <div className="icon ">
            <img onClick={showForm} src="src\assets\iconplus.svg" alt="" />

            {isFormVisible && (
              <div className="form-wrapper">
                <div className="form-container ">
                  <div className="form-header">
                    <h1>Add New Profile</h1>
                    <span className="close-btn" onClick={closeForm}>
                      &#10006;
                    </span>
                  </div>
                  <div className="form-content">
                    <div className="navigation">
                      <div>
                        <a href="#basic" className="nav-link">
                          Basic
                        </a>
                        <hr
                          className={`give-border ${
                            formPage === "basic" ? "active" : "inactive"
                          }`}
                        />
                      </div>
                      <div>
                        <a id="unsure" href="#contact" className="nav-link">
                          Contact
                        </a>
                        <hr
                          className={`give-border ${
                            formPage === "social" ? "active" : "inactive"
                          }`}
                        />
                      </div>
                    </div>
                    <br />
                    <form className="form">{renderFormContent()}</form>
                  </div>
                  <div className="form-footer">
                    <div className="basic">
                      {formPage === "basic" ? (
                        <button onClick={createNewForm}>Next</button>
                      ) : (
                        <>
                          <button id="back" onClick={goBack}>
                            Back
                          </button>

                          <button onClick={submitForm}>Done</button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <h1>Add Profile</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default SocialCard;
