"use client";

import { useReducer, useState } from "react";

const initialState = {
  fields: {
    name: "",
    email: "",
    cgu: false,
  },
  submitting: false,
  error: null,
  success: false,
};

const reducer = (state, { action, key, value }) => {
  switch (action) {
    case "updateInput":
      return { ...state, fields: { ...state.fields, [key]: value } };
    case "toggleSubmit":
      return { ...state, submitting: !state.submitting };
  }
};

export default function App() {
  const [form, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form.fields);
  };

  return (
    <div>
      <h1>Formulaire d'inscription</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={(e) =>
              dispatch({
                action: "updateInput",
                key: "name",
                value: e.target.value,
              })
            }
            value={form.fields.name}
            required
            placeholder="Your name"
          />
          <label htmlFor="email-address">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            onChange={(e) =>
              dispatch({
                action: "updateInput",
                key: "email",
                value: e.target.value,
              })
            }
            value={form.fields.email}
            autoComplete="email"
            required
            placeholder="Email Address"
          />
          <button type="submit">Submit</button>
        </div>
        <div>
          <label htmlFor="cgu">CGU</label>
          <input
            id="cgu"
            name="cgu"
            type="checkbox"
            onChange={(e) =>
              dispatch({
                action: "updateInput",
                key: "cgu",
                value: e.target.checked,
              })
            }
            checked={form.fields.cgu}
          />
          <p>I agree to everything.</p>
        </div>
      </form>
      {form.submitting && <p>Submitting...</p>}
      {form.error && <p>{error}</p>}
      {form.success && <p>Success!</p>}
    </div>
  );
}
