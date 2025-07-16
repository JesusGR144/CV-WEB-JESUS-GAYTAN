const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".link-nav");
const all = document.querySelectorAll('.all');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const link = document.querySelector(`.link-nav[href="#${id}"]`);

      if (entry.isIntersecting) {
        link.classList.add("animate");
        
        all.forEach((border) => {
          setTimeout(() => {
            border.classList.add("animate-border");
          }, 500);
        });

      } else {
        link.classList.remove("animate");
        
        all.forEach((border) => {
          border.classList.remove("animate-border");
        });
      }
    });
  },
  {
    threshold: 0.6,
  }
);

sections.forEach((section) => observer.observe(section));


const btnProject = document.querySelectorAll('.bt');
const linkProject = document.querySelectorAll('.link');

btnProject.forEach((btn, i) => {
  const icon1 = document.createElement("i");
  icon1.className = "fa-solid fa-info";
  btn.appendChild(icon1);

  const link = linkProject[i];
  if (link) {
    const icon2 = document.createElement("i");
    icon2.className = "fa-solid fa-link";
    link.appendChild(icon2);
  }
});


const marks = document.querySelectorAll('#hb > li');
marks.forEach( m => {
  m.innerHTML = `<i class="fa-brands fa-yelp"></i>${m.textContent}`;
  m.classList.add('flex', 'gap-2', 'items-center');
})

