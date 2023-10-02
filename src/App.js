
import './App.css';

import React, { useState } from 'react';

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
    <div class="app">
      {isSignUpFormVisible && (
        <div class="signup-form">
          <h2>Sign Up</h2>
          <input type="email" class="email" placeholder="Email" />
          <input type="password" class="password" placeholder="Password" />
          <button onClick={showDashboard}>Sign Up</button>
        </div>
      )}

      {isSignInFormVisible && (
        <div class="signin-form">
          <h2>Sign In</h2>
          <input type="email" class="signin-email" placeholder="Email" />
          <input type="password" class="signin-password" placeholder="Password" />
          <button onClick={showDashboard}>Sign In</button>
        </div>
      )}

      {isDashboardVisible && (
        <div class="dashboard">
          <h2>Dashboard</h2>
          <ul class="habit-list">
            {/* Habit items will be dynamically added here */}
          </ul>
          <button onClick={showAddHabitForm}>Add Habit</button>
        </div>
      )}

      {isAddHabitFormVisible && (
        <div class="add-habit-form">
          <h2>Add Habit</h2>
          <input type="text" class="habit-title" placeholder="Habit Title" />
          <input type="number" class="target-days" placeholder="Target Days Per Week" />
          <button onClick={showDashboard}>Add Habit</button>
          <button onClick={showDashboard}>Back to Dashboard</button>
        </div>
      )}
    </div>
  );
}

export default App;
