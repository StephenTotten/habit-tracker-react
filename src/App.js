import React, { useState, useRef } from 'react';
import './App.scss';

function App() {
  const [isSignUpFormVisible, setSignUpFormVisible] = useState(false);
  const [isSignInFormVisible, setSignInFormVisible] = useState(false);
  const [isDashboardVisible, setDashboardVisible] = useState(false);
  const [isAddHabitFormVisible, setAddHabitFormVisible] = useState(false);
  const [habits, setHabits] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false); // New state to track form visibility
  const [isAuthenticated, setAuthenticated] = useState(false); // New state to track authentication
  const habitTitleInputRef = useRef(null);
  const targetDaysInputRef = useRef(null);

  const showSignUpForm = () => {
    setSignUpFormVisible(true);
    setSignInFormVisible(false);
    setFormVisible(true); // Show the form when Sign Up is clicked
  };

  const showSignInForm = () => {
    setSignUpFormVisible(false);
    setSignInFormVisible(true);
    setFormVisible(true); // Show the form when Sign In is clicked
  };

  const showDashboard = () => {
    setSignUpFormVisible(false);
    setSignInFormVisible(false);
    setFormVisible(false); // Hide the form when going to the dashboard
    setDashboardVisible(true);
    setAuthenticated(true); // Set the authenticated state to true
  };

  const showAddHabitForm = () => {
    setSignUpFormVisible(false);
    setSignInFormVisible(false);
    setFormVisible(false); // Hide the form when adding a habit
    setDashboardVisible(false);
    setAddHabitFormVisible(true);
  };

  const addHabit = (habitTitle) => {
    const newHabits = [...habits, habitTitle];
    setHabits(newHabits);
    
    // Clear input values using the refs
    habitTitleInputRef.current.value = '';
    targetDaysInputRef.current.value = '';
  
    showDashboard();
  };

  const removeHabit = (index) => {
    const newHabits = [...habits];
    newHabits.splice(index, 1);
    setHabits(newHabits);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Habit Tracker</h1>
        {!isAuthenticated && !isFormVisible && ( // Render the buttons only if the form is not visible
          <div>
            <button onClick={showSignUpForm}>Sign Up</button>
            <button onClick={showSignInForm}>Sign In</button>
          </div>
        )}
      </div>

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
            {habits.map((habit, index) => (
              <li key={index}>
                <span>{habit}</span>
                <button onClick={() => removeHabit(index)}>Remove Habit</button>
              </li>
            ))}
          </ul>
          <button onClick={showAddHabitForm}>Add Habit</button>
        </div>
      )}

      {isAddHabitFormVisible && (
        <div className="add-habit-form">
          <h2>Add Habit</h2>
          <input type="text" className="habit-title" placeholder="Habit Title" ref={habitTitleInputRef}/>
          <input type="number" className="target-days" placeholder="Target Days Per Week" ref={targetDaysInputRef}/>
          <button onClick={() => addHabit(document.querySelector('.habit-title').value)}>Add Habit</button>
          <button onClick={showDashboard}>Back to Dashboard</button>
        </div>
      )}
    </div>
  );
}

export default App;
