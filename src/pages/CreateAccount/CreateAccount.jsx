import React, { useState, useRef } from 'react';
import './signup.css';

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    specialization: '',
    email: '',
    contact: '',
    password: '',
  });
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setProfileImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <div className="leftSide">
        <div className="brandText">CRICAUCTION</div>
      </div>
      <div className="rightSide">
        <form className="formContainer" onSubmit={handleSubmit}>
          <div className="header">
            <h1 className="title">Create your own account</h1>
            <span className="loginText">
              Already have an account?
              <a href="/login" className="loginLink">Login here</a>
            </span>
          </div>

          <div className="row">
            <div style={{ flex: 1 }}>
              <div className="inputGroup">
                <label className="label">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter full name"
                  className="input"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="inputGroup" style={{ marginTop: '1rem' }}>
                <label className="label">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  className="input"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="profileSection" style={{ marginLeft: '1rem' }}>
              <div className="profilePreview">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Profile preview" 
                    className="profileImage"
                  />
                ) : (
                  <img 
                    src="/placeholder.svg?height=80&width=80" 
                    alt="Upload Photo"
                    className="profileImage"
                  />
                )}
              </div>
              <div className="profileActions">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                />
                <button
                  type="button"
                  className="uploadButton"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Upload photo
                </button>
                {profileImage && (
                  <button
                    type="button"
                    className="deleteButton"
                    onClick={handleDeleteImage}
                    aria-label="Delete photo"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="inputGroup">
            <label className="label">Specialization</label>
            <select
              name="specialization"
              className="input select"
              value={formData.specialization}
              onChange={handleInputChange}
              required
            >
              <option value="">Select specialization</option>
              <option value="bowler">Bowler</option>
              <option value="batsman">Batsman</option>
              <option value="allrounder">All-rounder</option>
            </select>
          </div>

          <div className="emailContactGrid">
            <div className="inputGroup">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email ID"
                className="input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="inputGroup">
              <label className="label">Contact</label>
              <input
                type="tel"
                name="contact"
                placeholder="Enter contact number"
                className="input"
                value={formData.contact}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="inputGroup">
            <label className="label">Create Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="input"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="submitButton">
            Create account
          </button>
          
          <p className="helperText">
            Click on create account to receive an OTP
          </p>
        </form>
      </div>
    </div>
  );
}

