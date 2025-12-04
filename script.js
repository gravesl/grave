<head>
  <meta charset="UTF-8">
  <title>‎ ‎ ‎ </title>

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="97dec4d0-9d42-440f-b6e6-7a01ee430d83.png">

  <link href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap" rel="stylesheet">
  <style>

    body {
      margin: 0;
      padding-top: 100px;
      background: black;
      color: red;
      text-shadow: 1px 1px 1px black;
      font-family: 'UnifrakturMaguntia', cursive;
      text-align: center;
      overflow-x: hidden;
      user-select: none;
    }

    .arc-title {
      font-size: 30px;
      animation: pulseRed 2s infinite;
      text-shadow: 0 0 2px white, 0 0 10px red;
    }

    .names {
      margin-top: 80px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      font-size: 22px;
      cursor: pointer;
    }

    .names span {
      transition: opacity 0.3s ease;
    }

    .names span:hover {
      opacity: 0.6;
    }

    .profile {
      display: none;
      margin-top: 60px;
      animation: fadeIn 1s forwards;
    }

    .profile img {
      width: 200px;
      border-radius: 8px;
      border: 2px solid black;
    }

    .profile h2, .profile p {
      margin: 10px 0;
      color: red;
      font-family: monospace;
    }

    .skull {
      margin-top: 60px;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .skull:hover {
      transform: scale(1.1);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .snow {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
    }

    .snowflake {
      position: absolute;
      top: -10px;
      color: red;
      font-size: 1em;
      user-select: none;
      animation: fall linear infinite;
    }

    @keyframes fall {
      0% { transform: translateY(0); }
      100% { transform: translateY(100vh); }
    }

    @keyframes pulseRed {
      0% { text-shadow: 0 0 5px red, 0 0 10px red; }
      50% { text-shadow: 0 0 15px red, 0 0 25px red; }
      100% { text-shadow: 0 0 5px red, 0 0 10px red; }
    }

    /* MUSIC SIDE BAR */
    .music-bar {
      position: fixed;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.8);
      border: 1px solid red;
      padding: 10px 12px;
      font-family: monospace;
      font-size: 11px;
      text-align: left;
      z-index: 9000;
      max-width: 140px;
    }

    .music-title {
      text-transform: uppercase;
      font-size: 10px;
      letter-spacing: 2px;
      margin-bottom: 8px;
      opacity: 0.7;
    }

    .track {
      cursor: pointer;
      margin: 4px 0;
      opacity: 0.6;
      transition: opacity 0.2s ease, transform 0.2s ease;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .track:hover {
      opacity: 1;
      transform: translateX(2px);
    }

    .track.active {
      opacity: 1;
      text-shadow: 0 0 8px red;
    }
  </style>
</head>
<body>

  <!-- MUSIC SIDE BAR -->
  <div class="music-bar">
    <div class="music-title">ـــــــــــــــﮩ٨ـ❤️️</div>
    <div class="track active" data-src="chainsaw_murda (1).mp3">chainsaw</div>
    <div class="track" data-src="grezy.mp3">grezy</div>
    <div class="track" data-src="ty-i-ia.mp3">ty-i-ia</div>
    <div class="track" data-src="Dark is the Night - Soviet WW2 Song.mp3">Dark is the Night</div>



  </div>

  <!-- Skull (click to start/stop music) -->
  <img
    id="music-skull"
    class="skull"
    src="https://i.pinimg.com/736x/45/74/22/4574220bdb8ec123f1443478b98b733c.jpg"
    width="100"
    alt="skull">

  <div class="arc-title">ͯ</div>
  <div class="names">
    <span onclick="showProfile('grave')">ɠrave</span>
    <span onclick="showProfile('swat')">swat</span>
    <span onclick="showProfile('kodachi')">kodachi</span>
    <span onclick="showProfile('purge')">purge</span>
    <span onclick="showProfile('envy')">envy</span>
  </div>

  <!-- Profiles -->
  <div id="grave" class="profile">
    <img src="https://i.pinimg.com/1200x/33/25/98/3325981bbdf309360ff76fb76566364d.jpg" alt="grave">
    <h2>ɠrave</h2>
    <p>Never died, just archived.</p>
  </div>
  
  <div id="swat" class="profile">
    <img src="https://i.pinimg.com/1200x/bb/b7/6a/bbb76a3bf4f181b4f4d611ba719ed124.jpg" alt="swat">
    <h2>swat</h2>
    <p>you notice he's already watching.</p>
  </div>

  <div id="kodachi" class="profile">
    <img src="https://i.pinimg.com/1200x/38/53/c6/3853c670ee6ba27c913c866f7a358489.jpg" alt="kodachi">
    <h2>kodachi</h2>
    <p>Quiet, unreadable.</p>
  </div>

  <div id="purge" class="profile">
    <img src="https://i.pinimg.com/736x/03/df/27/03df2783b8b31000802548bfa16c3616.jpg" alt="pumpkinsmasher">
    <h2>purge</h2>
    <p>There’s no empathy in his code.</p>
  </div>

  <div id="envy" class="profile">
    <img src="https://i.pinimg.com/1200x/59/ea/f5/59eaf5a2d4771cf5f3a064936f3f7410.jpg" alt="envy">
    <h2>envy</h2>
    <p>a breath behind the firewall.</p>
  </div>

  <!-- Profile Display Logic -->
  <script>
    function showProfile(id) {
      document.querySelectorAll('.profile').forEach(p => p.style.display = 'none');
      document.getElementById(id).style.display = 'block';
    }
  </script>

  <!-- Red Snow -->
  <div class="snow"></div>
  <script>
    const snowContainer = document.querySelector('.snow');
    for (let i = 0; i < 80; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.animationDuration = 5 + Math.random() * 5 + 's';
      snowflake.textContent = '*';
      snowContainer.appendChild(snowflake);
    }
  </script>

  <!-- Security: Disable DevTools, Inspect, Selection -->
  <script>
    // Force HTTPS
    if (location.protocol !== 'https:') {
      location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }

    // Disable right-click and selection/drag
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('dragstart', e => e.preventDefault());
    document.addEventListener('selectstart', e => e.preventDefault());

    // Disable key combos
    document.addEventListener('keydown', function(e) {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
      ) {
        window.location.href = "https://google.com";
      }
    });

    // DevTools detection
    let devtoolsOpened = false;
    const detect = () => {
      devtoolsOpened = false;
      const el = new Image();
      Object.defineProperty(el, 'id', {
        get: function () {
          devtoolsOpened = true;
          throw new Error("DevTools detected");
        }
      });
      console.debug(el);
      if (devtoolsOpened) {
        window.location.href = "https://google.com";
      }
    };
    detect();
    setInterval(detect, 1000);
  </script>

  <!-- Hidden Music -->
  <audio id="bg-music" src="chainsaw_murda (1).mp3" loop></audio>

  <!-- Skull + track list logic -->
  <script>
    const bgMusic = document.getElementById('bg-music');
    const skull = document.getElementById('music-skull');
    const tracks = document.querySelectorAll('.track');
    let playing = false;

    // Skull play/pause
    skull.addEventListener('click', () => {
      if (!playing) {
        bgMusic.play().catch(() => {});
        playing = true;
        skull.style.opacity = '0.7';
      } else {
        bgMusic.pause();
        playing = false;
        skull.style.opacity = '1';
      }
    });

    // Track switching
    tracks.forEach(track => {
      track.addEventListener('click', () => {
        const src = track.getAttribute('data-src');

        // Change source if different
        if (bgMusic.getAttribute('src') !== src) {
          bgMusic.setAttribute('src', src);
          bgMusic.load();
        }

        // Highlight active track
        tracks.forEach(t => t.classList.remove('active'));
        track.classList.add('active');

        // Start playing when you click a track
        bgMusic.play().catch(() => {});
        playing = true;
        skull.style.opacity = '0.7';
      });
    });
  </script>

</body>
</html>
