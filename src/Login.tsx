import React from 'react';

export default function Login() {
  return (
    <div className="App">
      <form>
        <div className="form-control">
          <label htmlFor="email">
            Email
            <input type="text" name="email" />
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="password">
            Password
            <input type="password" name="password" />
          </label>
        </div>
        <div className="form-control">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
