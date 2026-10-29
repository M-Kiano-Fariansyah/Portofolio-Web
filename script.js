const navToggle = document.getElementById("navToggle");
const primaryNav = document.getElementById("primaryNav");

navToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    primaryNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const projects = [
  {
    title: "Nutrition Detector",
    category: "Fullstack Web Development",
    desc: "Aplikasi untuk mendeteksi kebutuhan nutrisi. Aplikasi ini dapat membantu pengguna untuk mengetahui kebutuhan nutrisi yang sesuai dengan kondisi tubuh mereka. Aplikasi ini juga dapat memberikan rekomendasi makanan yang sesuai dengan kebutuhan nutrisi pengguna.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://nutrition-detector-ten.vercel.app",
    linkText: "Lihat proyek",
  },
  {
    title: "Gravity Simulator",
    category: "Game Development",
    desc: "Game simulasi yang dibuat untuk membantu memahami konsep dasar dalam gravitasi. Game ini memungkinkan pemain untuk mengontrol objek dalam lingkungan simulasi dan mempelajari bagaimana gaya gravitasi mempengaruhi gerakan objek tersebut.",
    tags: ["Scratch"],
    link: "https://scratch.mit.edu/projects/1350271226",
    linkText: "Lihat proyek",
  },
  {
    title: "BMI Calculator",
    category: "Frontend Web Development",
    desc: "Aplikasi kalkulator BMI yang dibuat untuk membantu pengguna menghitung dan mengevaluasi indeks massa tubuh mereka. Aplikasi ini memberikan informasi tentang kategori berat badan berdasarkan hasil perhitungan BMI.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://m-kiano-fariansyah.github.io/BMI-Calculator/",
    linkText: "Lihat proyek",
  },
];

function renderProjects() {
  const list = document.getElementById("project-list");

  if (!projects.length) {
    list.innerHTML = `<p class="project-empty">Belum ada proyek yang ditambahkan.</p>`;
    return;
  }

  list.innerHTML = projects
    .map((project, i) => {
      const index = String(i + 1).padStart(2, "0");
      const tags = (project.tags || [])
        .map((tag) => `<li>${tag}</li>`)
        .join("");
      const link = project.link
        ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener">${project.linkText || "Lihat proyek"}</a>`
        : "";

      return `
        <article class="project-row">
          <span class="project-index">${index}</span>
          <div class="project-body">
            <span class="project-category">${project.category || ""}</span>
            <h3>${project.title}</h3>
            <p class="project-desc">${project.desc || ""}</p>
            ${tags ? `<ul class="project-tags">${tags}</ul>` : ""}
            ${link}
          </div>
        </article>
      `;
    })
    .join("");
}

renderProjects();
