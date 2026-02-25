function toggleView(view) {
  const mainView = document.getElementById('main-view');
  const supportView = document.getElementById('support-view');
  const recommendationsView = document.getElementById('recommendations-view');
  const supportBtn = document.getElementById('support-link-btn');

  // Hide all first
  mainView.style.display = 'none';
  supportView.style.display = 'none';
  
  if (recommendationsView) {
      recommendationsView.style.display = 'none';
  }

  if (view === 'support') {
    supportBtn.style.display = 'none';
    supportView.style.display = 'block';
  } else if (view === 'recommendations') {
    supportBtn.style.display = 'none';
    if (recommendationsView) recommendationsView.style.display = 'block';
  } else {
    mainView.style.display = 'block';
    supportBtn.style.display = 'flex';
  }
}
