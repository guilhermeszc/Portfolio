document.addEventListener("DOMContentLoaded", function () {
  // Menu Mobile
  // Menu Mobile
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.body;

  menuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("menu-open");
    this.setAttribute("aria-expanded", this.classList.contains("active"));
  });

  // Fecha o menu ao clicar nos links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
        body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Fecha o menu quando um link é clicado
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("active");
        menuToggle.querySelector("i").classList.remove("fa-times");
        menuToggle.querySelector("i").classList.add("fa-bars");
      }
    });
  });

  // Atualiza o ano no footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Dados dos Projetos
  const projects = [
    {
      title: "Dashboard React",
      description: "Interface responsiva com React, Tailwind e Chart.js.",
      image:
        "https://via.placeholder.com/400x200/2563eb/ffffff?text=React+Dashboard",
      link: "#",
    },
    {
      title: "Landing Page",
      description:
        "Landing Page otimizada para dispositivos móveis. Usando HTML, CSS e JavaScript",
      image: "imagens/landingpage1.png",
      link: "https://guilhermeszc.github.io/cafe-landingpage/",
    },
    {
      title: "Buscador de CEP",
      description:
        "Aplicação para buscar informações de CEP usando React e API.",
      image: "imagens/image.png",
      link: "#",
    },
  ];

  // Dados das Habilidades
  const skills = [
    { name: "HTML", icon: '<i class="fab fa-html5"></i>' },
    { name: "CSS", icon: '<i class="fab fa-css3-alt"></i>' },
    { name: "JavaScript", icon: '<i class="fab fa-js"></i>' },
    { name: "React", icon: '<i class="fab fa-react"></i>' },
  ];

  // Renderiza Projetos
  const projectsContainer = document.getElementById("projects-container");
  projects.forEach((project) => {
    const projectHTML = `
      <div class="project-card">
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" class="project-link" target="_blank">Ver Projeto →</a>
        </div>
      </div>
    `;
    projectsContainer.innerHTML += projectHTML;
  });

  // Renderiza Habilidades
  const skillsContainer = document.getElementById("skills-container");
  skills.forEach((skill) => {
    const skillHTML = `
      <li class="skill-item">
        ${skill.icon}
        <span>${skill.name}</span>
      </li>
    `;
    skillsContainer.innerHTML += skillHTML;
  });

  // Scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
