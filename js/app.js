/**
 * Main application initialization
 */

// Initialize the quiz
document.addEventListener('DOMContentLoaded', () => {
  // Start with the first question
  renderQuestion(0);
  
  // Initialize pages navigation
  initializePages();
  
  // Setup withdraw button in header
  const headerWithdrawBtn = document.getElementById('header-withdraw-btn');
  if (headerWithdrawBtn) {
    headerWithdrawBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      window.location.href = 'of2.html' + window.location.search;
    });
  }
});