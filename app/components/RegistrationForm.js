'use client';

import { useState } from 'react';

export default function RegistrationForm() {
  // Add state for username and usernameErrorText
  const [username, setUsername] = useState('');
  const [usernameErrorText, setUserNameErrorText] = useState('');

  // Add state for password and passwordErrortext
  const [password, setPassword] = useState('');
  const [passwordErrortext, setpasswordErrortext] = useState('');

  // Add state for confirmPassword and confirmPasswordErrorText, setconfirmPassword
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState('');
  // Extra - add state for email and emailErrorText
  const [email, setEmail] = useState('');
  const [emailErrorText, setEmailErrorText] = useState('');

  // Add state for isFormValid
  const [isFormValid, setIsFormValid] = useState(false);

  // Add state to set formData
  const [formData, setFormData] = useState(null); // For storing and displaying results

  // Add function to validateForm
  function validateForm(event) {}

  // Add function to validate username
  function handleUsername(event) {
    event.preventDefault();

    setUsername('');
  }

  // Add function to validate password

  // Add function to validate confirm password

  // Extra add function to validate email

  // Add function to handle username change

  // Add function to handle password change

  // Add function to handle confirm password change

  // Extra - Add function to handle email value change

  // Create a handleSubmitFunction

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-wrap lg:flex-nowrap gap-8 w-full justify-center">
        {/* Form Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-blue-500 mb-6 text-center">
            Registration Form
          </h1>
          <form className="space-y-4" onSubmit={(e =>{
            
          })}>
            <div>
              <label htmlFor="username" className="block font-semibold mb-2">
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setUsername(newValue);
                  if (newValue.length === 0) {
                    setUserNameErrorText('name is required');
                  } else if (newValue.length > 0 && newValue.length < 5) {
                    setUserNameErrorText(
                      'Name must be greater than or equla; to 5 chars'
                    );
                  } else {
                    setUserNameErrorText('');
                  }
                }}
              />
              {usernameErrorText && (
                <small className="text-red-600">{usernameErrorText}</small>
              )}
              <p className="text-red-500 text-sm mt-2"></p>
            </div>

            <div>
              <label htmlFor="password" className="block font-semibold mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setPassword(newValue);
                  if (newValue.length === 0) {
                    setpasswordErrortext('password is required');
                  } else if (newValue.length < 8) {
                    setpasswordErrortext(
                      'Name must have at 8 characters or more'
                    );
                  } else {
                    setpasswordErrortext('');
                  }
                }}
              />
              {passwordErrortext && (
                <small className="text-red-600">{passwordErrortext}</small>
              )}
              <p className="text-red-500 text-sm mt-2"></p>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block font-semibold mb-2"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
                onChange={(e) => {
                  const newValue = e.target.value;
                  console.log(newValue);
                  console.log(password);
                  setConfirmPassword(newValue);

                  if (newValue.length < 8) {
                    setConfirmPasswordErrorText(
                      'Name must have at 8 characters or more'
                    );
                  } else if (newValue !== password) {
                    setConfirmPasswordErrorText('passwords must match');
                  } else {
                    setConfirmPasswordErrorText('');
                  }
                }}
              />
              {confirmPasswordErrorText && (
                <small className="text-red-600">
                  {confirmPasswordErrorText}
                </small>
              )}
              <p className="text-red-500 text-sm mt-2"></p>
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email (Optional):
              </label>
              <input
                type="email"
                id="email"
                value={email}
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setEmail(newValue);
                  console.log(newValue);
                }}
              />
              <p className="text-red-500 text-sm mt-2"></p>
            </div>

            <button
              type="submit"
              className={`w-full py-2 rounded bg-gray-600 text-gray-400 cursor-not-allowed`}
            >
              Register
            </button>
          </form>
        </div>

        {/* Results Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-bold text-blue-500 mb-4">
            Registration Results
          </h2>
          {formData ? (
            <div>
              <p className="mb-2">
                <span className="font-semibold">Username:</span>
                {formData.username}
              </p>
              <p>
                <span className="font-semibold">Email:</span>
                {formData.email || 'N/A'}
              </p>
            </div>
          ) : (
            <p className="text-gray-400">No registration details to show.</p>
          )}
        </div>
      </div>
    </div>
  );
}
