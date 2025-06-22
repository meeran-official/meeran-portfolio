import React, { useState, useEffect } from 'react';
import { VscRepo, VscStarFull } from 'react-icons/vsc'; // Using icons from the react-icons library
import './GithubStats.css';

function GithubStats() {
  // useState is a hook to hold component state. We'll store the stats object here.
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const username = 'meeran-official'; // Your GitHub username

  // useEffect is a hook that runs code after the component renders.
  // Perfect for making an API call when the component first appears.
  useEffect(() => {
    async function fetchGithubStats() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStats(data); // Save the fetched data to our state
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
        // In case of an error, we can set stats to an error state or null
        setStats(null);
      } finally {
        setIsLoading(false); // Stop loading, whether it succeeded or failed
      }
    }

    fetchGithubStats();
  }, [username]); // The empty array [] means this effect runs only once

  const renderStat = (icon, value, label) => (
    <div className="stat-item">
      {icon}
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );

  if (isLoading) {
    return <div className="stats-container">Loading GitHub Stats...</div>;
  }

  if (!stats) {
    return null; // Don't show anything if the API call failed
  }

  return (
    <div className="stats-container">
      {renderStat(<VscRepo />, stats.public_repos, 'Public Repos')}
      {renderStat(<VscStarFull />, stats.followers, 'Followers')}
    </div>
  );
}

export default GithubStats;