import React, { useState } from 'react';
import './App.scss';

function App() {
  const [isSignUpFormVisible, setSignUpFormVisible] = useState(true);
  const [isSignInFormVisible, setSignInFormVisible] = useState(false);
  const [isDashboardVisible, setDashboardVisible] = useState(false);
  const [isAddHabitFormVisible, setAddHabitFormVisible] = useState(false);

  const showSignUpForm = () => {
    setSignUpFormVisible(true);
    setSignInFormVisible(false);
    setDashboardVisible(false);
    setAddHabitFormVisible(false);
  };

  const showSignInForm = () => {
    setSignUpFormVisible(false);
    setSignInFormVisible(true);
    setDashboardVisible(false);
    setAddHabitFormVisible(false);
  };

  const showDashboard = () => {
    setSignUpFormVisible(false);
    setSignInFormVisible(false);
    setDashboardVisible(true);
    setAddHabitFormVisible(false);
  };

  const showAddHabitForm = () => {
    setSignUpFormVisible(false);
    setSignInFormVisible(false);
    setDashboardVisible(false);
    setAddHabitFormVisible(true);
  };

  return (
    <div className="app">
      {isSignUpFormVisible && (
        <div className="signup-form">
          <h2>Sign Up</h2>
          <input type="email" className="email" placeholder="Email" />
          <input type="password" className="password" placeholder="Password" />
          <button onClick={showDashboard}>Sign Up</button>
        </div>
      )}

      {isSignInFormVisible && (
        <div className="signin-form">
          <h2>Sign In</h2>
          <input type="email" className="signin-email" placeholder="Email" />
          <input type="password" className="signin-password" placeholder="Password" />
          <button onClick={showDashboard}>Sign In</button>
        </div>
      )}

      {isDashboardVisible && (
        <div className="dashboard">
          <h2>Dashboard</h2>
          <ul className="habit-list">
            {/* Habit items will be dynamically added here */}
          </ul>
          <button onClick={showAddHabitForm}>Add Habit</button>
        </div>
      )}

      {isAddHabitFormVisible && (
        <div className="add-habit-form">
          <h2>Add Habit</h2>
          <input type="text" className="habit-title" placeholder="Habit Title" />
          <input type="number" className="target-days" placeholder="Target Days Per Week" />
          <button onClick={showDashboard}>Add Habit</button>
          <button onClick={showDashboard}>Back to Dashboard</button>
        </div>
      )}
    </div>
  );
}

export default App;
