function toggleView(view) {
  const mainView = document.getElementById('main-view');
  const supportView = document.getElementById('support-view');
  const recommendationsView = document.getElementById('recommendations-view');
  const tourView = document.getElementById('tour-view');
  const supportBtn = document.getElementById('support-link-btn');

  // Hide all first
  mainView.style.display = 'none';
  supportView.style.display = 'none';
  
  if (recommendationsView) {
      recommendationsView.style.display = 'none';
  }
  
  if (tourView) {
      tourView.style.display = 'none';
  }

  if (view === 'support') {
    supportBtn.style.display = 'none';
    supportView.style.display = 'block';
  } else if (view === 'recommendations') {
    supportBtn.style.display = 'none';
    if (recommendationsView) recommendationsView.style.display = 'block';
  } else if (view === 'tour') {
    supportBtn.style.display = 'none';
    if (tourView) tourView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    mainView.style.display = 'block';
    supportBtn.style.display = 'flex';
  }
}
