'use client';

import { useState, useEffect } from 'react';

export default function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [usernameErrorText, setUserNameErrorText] = useState('');

  const [password, setPassword] = useState('');
  const [passwordErrortext, setpasswordErrortext] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState('');

  const [email, setEmail] = useState('');
  const [emailErrorText, setEmailErrorText] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState(null);

  // Use effect tio validate the entire form
  useEffect(() => {
    const isUsernameValid = username.length >= 5;
    const isPasswordValid = password.length >= 8;
    const isConfirmPasswordValid =
      confirmPassword === password && confirmPassword.length >= 8;
    const isEmailValid =
      email !== '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    setIsFormValid(
      isUsernameValid &&
        isPasswordValid &&
        isConfirmPasswordValid &&
        isEmailValid
    );
  }, [username, password, confirmPassword, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setFormData({ username, email });
      alert('Registration successful!');
    } else {
      alert('Please fix the errors before submitting.');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-wrap lg:flex-nowrap gap-8 w-full justify-center">
        {/* Form Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-blue-500 mb-6 text-center">
            Registration Form
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Username */}
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
                    setUserNameErrorText('Name is required');
                  } else if (newValue.length < 5) {
                    setUserNameErrorText('Name must be at least 5 characters');
                  } else {
                    setUserNameErrorText('');
                  }
                }}
              />
              {usernameErrorText && (
                <small className="text-red-600">{usernameErrorText}</small>
              )}
            </div>

            {/* Password */}
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
                    setpasswordErrortext('Password is required');
                  } else if (newValue.length < 8) {
                    setpasswordErrortext(
                      'Password must be at least 8 characters'
                    );
                  } else {
                    setpasswordErrortext('');
                  }
                }}
              />
              {passwordErrortext && (
                <small className="text-red-600">{passwordErrortext}</small>
              )}
            </div>

            {/* Confirm Password */}
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
                  setConfirmPassword(newValue);
                  if (newValue.length === 0) {
                    setConfirmPasswordErrorText('Confirmation is required');
                  } else if (newValue.length > 0 && newValue.length < 8) {
                    setConfirmPasswordErrorText(
                      'Password must be at least 8 characters'
                    );
                  } else if (newValue !== password) {
                    setConfirmPasswordErrorText('Passwords must match');
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
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email (Required):
              </label>
              <input
                type="email"
                id="email"
                value={email}
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setEmail(newValue);
                  if (newValue.length === 0) {
                    setEmailErrorText('Email is Mandatory');
                  } else if (
                    newValue &&
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue)
                  ) {
                    setEmailErrorText('Invalid email format');
                  } else {
                    setEmailErrorText('');
                  }
                }}
              />
              {emailErrorText && (
                <small className="text-red-600">{emailErrorText}</small>
              )}
            </div>

            {/* used ternary opetaror to toggle button states */}
            <button
              type="submit"
              className={`w-full py-2 rounded ${
                isFormValid
                  ? 'bg-orange-600 text-white text-xl font-bold hover:scale-105 cursor-pointer'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
              disabled={!isFormValid}
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
            <div className="text-gray-400">
              <p className="mb-2">
                <span className="font-semibold">Username:</span>{' '}
                {formData.username}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
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
