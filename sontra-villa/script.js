function toggleView(view) {
  const mainView = document.getElementById('main-view');
  const supportView = document.getElementById('support-view');
  const supportBtn = document.getElementById('support-link-btn');

  if (view === 'support') {
    mainView.style.display = 'none';
    supportBtn.style.display = 'none';
    supportView.style.display = 'block';
  } else {
    supportView.style.display = 'none';
    mainView.style.display = 'block';
    supportBtn.style.display = 'flex';
  }
}
