import React from 'react'
import { useState } from 'react';

export default function TestimonialForm(props) {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    experience: "",
  });

  
  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <div className="input-group w-50 border p-5 mt-5 m-auto shadow-sm p-3 mb-5 bg-body rounded">
        <form
          className="d-flex justify-content-center m-auto flex-column w-75"
          onSubmit={handleOnSubmit}
        >
          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter First Name"}
                minLength={1}
                maxLength={10}
                required
              />
            </div>
          </div>
          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter Last Name"}
                minLength={1}
                maxLength={10}
                required
              />
            </div>
          </div>
          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="email">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter Email Address"}
                minLength={2}
                maxLength={25}
                required
              />
            </div>
          </div>
          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="experience">
                Experience
              </label>
              <input
                type="text"
                id="experience"
                className="form-control"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter Experience"}
                minLength={2}
                maxLength={150}
                required
              />
             
            </div>
          </div>
        
          <button type="submit" className="btn btn-dark align-self-center">
            Submit
          </button>
        </form>
      </div>

    </>
  );
}