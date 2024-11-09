// Theme toggle functionality
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    document.getElementById('theme-toggle').textContent = isDark ? '🌞' : '🌙';
  });
  
  // Project details toggle functionality
  function showProjectDetails(projectId) {
    const details = document.getElementById('project-details');
    if (projectId === 1) {
      details.innerHTML = `<h3>Project 1: Weather App</h3><p>This app uses the OpenWeather API to get the weather of any city.</p>`;
    }
}