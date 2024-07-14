document.addEventListener('DOMContentLoaded', () => {
  const planets = document.querySelectorAll('.planet');
  const infoPanel = document.getElementById('info-panel');
  const planetName = document.getElementById('planet-name');
  const planetInfo = document.getElementById('planet-info');

  const planetData = {
      mercury: {
          name: 'Mercury',
          info: 'Mercury is the smallest planet in our solar system and closest to the Sun.'
      },
      venus: {
          name: 'Venus',
          info: 'Venus has a thick, toxic atmosphere that traps heat, making it the hottest planet in our solar system.'
      },
      earth: {
          name: 'Earth',
          info: 'Earth is the only planet known to support life, with liquid water covering 70% of its surface.'
      },
      mars: {
          name: 'Mars',
          info: 'Mars is known as the Red Planet due to its reddish appearance caused by iron oxide on its surface.'
      },
      jupiter: {
          name: 'Jupiter',
          info: 'Jupiter is the largest planet in our solar system and has a Great Red Spot, a giant storm.'
      },
      saturn: {
          name: 'Saturn',
          info: 'Saturn is famous for its stunning rings, made of ice and rock particles.'
      },
      uranus: {
          name: 'Uranus',
          info: 'Uranus rotates on its side, making it unique among the planets in our solar system.'
      },
      neptune: {
          name: 'Neptune',
          info: 'Neptune is the farthest planet from the Sun and has strong winds and storms.'
      }
  };

  planets.forEach(planet => {
      planet.addEventListener('click', () => {
          const planetClass = planet.classList[1]; // Get the planet name from the class
          const data = planetData[planetClass];

          planetName.textContent = data.name;
          planetInfo.textContent = data.info;
      });
  });
});
