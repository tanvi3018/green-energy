
const solutions = {
    1: {
        title: "SOLAR",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
        image: "./img/solar.png"
    
    },
    2: {
        title: "WIND",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
        image: "./img/wind.png"
    },
    3: {
        title: "COAL",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor." ,
        image: "./img/coal.png"
    }
  };
  

  const buttons = document.querySelectorAll(".button-group button");
  const content = document.querySelector("#content");
  

  buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        buttons.forEach(function(btn) {
            btn.classList.remove("active-button");
        });
        button.classList.add("active-button");
        const id = button.getAttribute("id").slice(-1);
        const solution = solutions[id];
        content.innerHTML = `<h2>${solution.title}</h2><img src="${solution.image}" img><p>${solution.content}</p>`;
    });
  });
  
  buttons[0].classList.add("active-button");
  
  const mediaQuery = window.matchMedia('(min-width: 30rem)');
  const container = document.querySelector('.container');
  const masthead = document.querySelector('.masthead');
  
  function handleMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
    container.style.fontSize = '1.2rem';
    masthead.style.height = '50vh';
  } else {
    container.style.fontSize = '1rem';
    masthead.style.height = '30rem';
  }
  }
  
  handleMediaQuery(mediaQuery);
  mediaQuery.addListener(handleMediaQuery);