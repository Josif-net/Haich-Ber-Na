const buttons = document.querySelectorAll('.disciplines');
const projects = document.querySelectorAll('.projwrap');
const filterWrapper = document.querySelector(".wrapper");
const thePageSec = document.querySelector(".thepage")

const selectedCats = []

for (const button of buttons) {
  button.addEventListener('click', function() {
    const category = this.getAttribute('data-category');
    this.classList.toggle("active")
    // If the "All" button was clicked, show all projects

    if(!this.classList.contains("active")) {
      const indx = selectedCats.findIndex(cat => cat === category);

      selectedCats.splice(indx, 1)
    } else {
      if(category === "all") {
        selectedCats.shift(category)
      } else {
        selectedCats.push(category)
      }
    }
    // if (category === 'all') {
    //   const projects = document.querySelectorAll('.projwrap');
    //   for (const project of projects) {
    //     project.classList.remove('hidden');
    //   }
    // } else {
    //   // Otherwise, show only the projects in the selected category
    //   const projects = document.querySelectorAll('.projwrap');
    //   for (const project of projects) {
    //     const projCats = project.dataset.category.split(",")
    //     console.log(projCats, category)
    //     if (!projCats.includes(category)) {
    //       project.classList.remove('hidden');
    //     } else {
    //       project.classList.add('hidden');
    //     }
    //   }
    // }
    selectedCats.forEach(function(cat) {

      for(const project of projects) {
        if(cat === "All") {
          project.classList.remove("hidden")
          console.log("hei")
          return;
        }
        const projCats = project.dataset.category.split(",")
        console.log(projCats, cat)
        if (projCats.includes(cat)) {
          project.classList.remove('hidden');
        } else {
          project.classList.add('hidden');
        }
      }
    })
    if(!selectedCats.length) {
      for(const project of projects) {
        project.classList.remove("hidden")
      }
    }
  });
}


let observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    console.log(entry)
    if(!entry.isIntersecting) {
      filterWrapper.style.width = `${filterWrapper.getBoundingClientRect().width}px`
      filterWrapper.classList.add("fixed")
    }
  }) 
  }, 
  {
    threshold: 0.1
  }
)
observer.observe(filterWrapper)


let pageSecObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if(entry.isIntersecting) {
      filterWrapper.classList.remove("fixed")
    }
  })
}, {threshold: 0.1})

pageSecObserver.observe(thePageSec)
