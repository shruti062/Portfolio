// Select DOM elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsContainer = document.getElementById('results');
const musicItems = document.querySelectorAll('.music-info');
const progressBar = document.getElementById('progress');

// Music data (can be fetched from a backend or API)
const musicList = [
    { title: "Tune Jo Na Kaha", artist: "Pritam, Mohit Chauhan", src: "m1.jpg", link: "s1.html" },
    { title: "Tumhe Kitna Pyaar Karte", artist: "Arijit Singh, Mithoonr", src: "m2.jpg", link: "s2.html" },
    { title: "Kehna Hi Kya", artist: "K S Chithra", src: "m3.jpg", link: "s3.html" },
    { title: "Aadatein Jaisi Hai Tu Meri", artist: "Javed Ali", src: "m4.jpg", link: "s4.html" },
    { title: "Baadal", artist: "Vishal Dadlani, Shekhar Ravjiani", src: "m5.jpg", link: "s5.html" },
    // Add more songs as needed
];

// Handle search functionality
searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = ''; // Clear previous results
    const filteredSongs = musicList.filter(song =>
        song.title.toLowerCase().includes(query) || 
        song.artist.toLowerCase().includes(query)
    );

    if (filteredSongs.length > 0) {
        filteredSongs.forEach(song => {
            const songElement = `
                <div class="music-info">
                    <div class="music-img">
                        <img src="${song.src}" alt="${song.title}">
                    </div>
                    <div class="music-name">
                        <h6>${song.title}</h6>
                        <p>${song.artist}</p>
                    </div>
                    <a href="${song.link}" class="fa fa-ellipsis-v"></a>
                </div>
                <hr>
            `;
            resultsContainer.innerHTML += songElement;
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    }
});

// Play Music Functionality (Mocked)
let isPlaying = false;
const playButton = document.querySelector('.play-icon .fa-play');

playButton.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playButton.classList.toggle('fa-pause', isPlaying);
    playButton.classList.toggle('fa-play', !isPlaying);
});

// Update Progress Bar (Mocked)
setInterval(() => {
    if (isPlaying && progressBar) {
        progressBar.value = Math.min(progressBar.value + 1, 100);
    }
}, 1000); // Simulates progress update every second
// Script to handle interactivity on the Artist Page

document.addEventListener("DOMContentLoaded", function () {
  // Handle search functionality
  const searchInput = document.querySelector('.fa-search');
  searchInput.addEventListener('click', function () {
      const query = prompt('Enter artist name to search:');
      if (query) {
          searchArtist(query.toLowerCase());
      }
  });

  // Simulate search logic
  function searchArtist(query) {
      const artistBlocks = document.querySelectorAll('.block');
      let found = false;

      artistBlocks.forEach(block => {
          const artistName = block.querySelector('h1').textContent.toLowerCase();
          if (artistName.includes(query)) {
              block.style.display = 'block';
              found = true;
          } else {
              block.style.display = 'none';
          }
      });

      if (!found) {
          alert('No artists found with that name.');
      }
  }

  // Add click listeners to artist blocks (for navigation)
  const artistBlocks = document.querySelectorAll('.block');
  artistBlocks.forEach(block => {
      block.addEventListener('click', function () {
          const artistName = block.querySelector('h1').textContent;
          alert(`Navigating to ${artistName}'s profile page...`);
          // You can add actual navigation logic here
      });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Search functionality
  const searchIcon = document.querySelector('.search-icon');
  searchIcon.addEventListener('click', function () {
      const query = prompt('Enter album name to search:');
      if (query) {
          searchAlbum(query.toLowerCase());
      }
  });

  // Simulated search logic
  function searchAlbum(query) {
      const albumBlocks = document.querySelectorAll('.block');
      let found = false;

      albumBlocks.forEach(block => {
          const albumTitle = block.querySelector('.album-title').textContent.toLowerCase();
          if (albumTitle.includes(query)) {
              block.style.display = 'block';
              found = true;
          } else {
              block.style.display = 'none';
          }
      });

      if (!found) {
          alert('No albums found with that name.');
      }
  }

  // Album click event (optional navigation logic)
  const albumBlocks = document.querySelectorAll('.block');
  albumBlocks.forEach(block => {
      block.addEventListener('click', function () {
          const albumTitle = block.querySelector('.album-title').textContent;
          alert(`Navigating to ${albumTitle}...`);
          // Actual navigation logic can go here
      });
  });
});
