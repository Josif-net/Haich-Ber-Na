const buttons = document.querySelectorAll('.disciplines');

for (const button of buttons) {
  button.addEventListener('click', function() {
    const category = this.getAttribute('data-category');

    // If the "All" button was clicked, show all projects
    if (category === 'all') {
      const projects = document.querySelectorAll('.projwrap');
      for (const project of projects) {
        project.classList.remove('hidden');
      }
    } else {
      // Otherwise, show only the projects in the selected category
      const projects = document.querySelectorAll('.projwrap');
      for (const project of projects) {
        if (project.classList.contains(category)) {
          project.classList.remove('hidden');
        } else {
          project.classList.add('hidden');
        }
      }
    }
  });
}
