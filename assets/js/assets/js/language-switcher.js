document.addEventListener('DOMContentLoaded', function() {
  const langToggle = document.getElementById('langToggle');
  const langMenu = document.getElementById('langMenu');
  const langOptions = document.querySelectorAll('.lang-option');
  
  // Toggle menu visibility
  langToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    langMenu.classList.toggle('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.language-switcher')) {
      langMenu.classList.remove('active');
    }
  });
  
  // Handle language option clicks
  langOptions.forEach(option => {
    option.addEventListener('click', function(e) {
      // Optional: update active state
      langOptions.forEach(o => o.classList.remove('active'));
      this.classList.add('active');
      
      // Close menu after selection
      langMenu.classList.remove('active');
      
      // Language change will happen via navigation
    });
  });
});
