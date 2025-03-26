/* Preloader animation */
setTimeout(() => {
  
  document.querySelector('.preloader').style.display = 'none';
}, 2000);

function goBack() {
    window.history.back();
  }
  const gridBoxes = document.querySelectorAll(".grid-box");

  gridBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      box.classList.toggle("active");
    });
  });

  document
    .querySelector("#papper-btn")
    .addEventListener("click", function () {
      document.querySelector(".container").style.display = "block";
      document.querySelector(".container").innerHTML = `
      <div class="container section-container">

          <a href="tech-eve.html" class="back-button">
            <i class="fa-solid fa-angle-left"></i> Back
          </a>
          <!-- Title -->
          <h2 class="text-center mb-4">Rules for the Game</h2>

          <div class="row align-items-center">
       
            <div class="col-lg-5">
              <img src="https://www.silicon.co.uk/wp-content/uploads/2017/02/IIoT-684x400.jpg" alt="Feature Image" class="section-img">
            </div>

                
            <div class="col-lg-7">
              <ul class="points-list list-unstyled">
                <li>✅ Keep slides minimal—avoid too much text.</li>
                <li>✅ Use bullet points, diagrams, and charts instead of long paragraphs.</li>
                <li>✅ Ensure your paper’s main idea, problem statement, methodology, and conclusion are clear.</li>
                <li>✅ Stick to the time limit (e.g., 10-15 minutes).</li>
                <li>✅Practice with a timer to stay within the limit.</li>
                <li>✅ Be ready to explain your research, findings, and limitations.</li>
              </ul>
            </div>
          </div>
      </div>
    `;
    });

  // ================ Relay coding  ==========================

  document
    .querySelector("#relay-coding")
    .addEventListener("click", function () {
      document.querySelector(".container").style.display = "block";
      document.querySelector(".container").innerHTML = `
      <div class="container section-container">

          <a href="tech-eve.html" class="back-button">
            <i class="fa-solid fa-angle-left"></i> Back
          </a>
          <!-- Title -->
          <h2 class="text-center mb-4">Rules for the Game</h2>

          <div class="row align-items-center">
       
            <div class="col-lg-5">
              <img src="https://www.silicon.co.uk/wp-content/uploads/2017/02/IIoT-684x400.jpg" alt="Feature Image" class="section-img">
            </div>

                
            <div class="col-lg-7">
              <ul class="points-list list-unstyled">
                <li>✅ Keep slides minimal—avoid too much text.</li>
                <li>✅ Use bullet points, diagrams, and charts instead of long paragraphs.</li>
                <li>✅ Ensure your paper’s main idea, problem statement, methodology, and conclusion are clear.</li>
                <li>✅ Stick to the time limit (e.g., 10-15 minutes).</li>
                <li>✅Practice with a timer to stay within the limit.</li>
                <li>✅ Be ready to explain your research, findings, and limitations.</li>
              </ul>
            </div>
          </div>
      </div>
    `;
    });

  // ================ Password Cracking ==========================

  document
    .querySelector("#password-cracking")
    .addEventListener("click", function () {
      document.querySelector(".container").style.display = "block";
      document.querySelector(".container").innerHTML = `
      <div class="container section-container">

          <a href="tech-eve.html" class="back-button">
            <i class="fa-solid fa-angle-left"></i> Back
          </a>
          <!-- Title -->
          <h2 class="text-center mb-4">Rules for the Game</h2>

          <div class="row align-items-center">
       
            <div class="col-lg-5">
              <img src="https://www.silicon.co.uk/wp-content/uploads/2017/02/IIoT-684x400.jpg" alt="Feature Image" class="section-img">
            </div>

                
            <div class="col-lg-7">
              <ul class="points-list list-unstyled">
                <li>✅ Keep slides minimal—avoid too much text.</li>
                <li>✅ Use bullet points, diagrams, and charts instead of long paragraphs.</li>
                <li>✅ Ensure your paper’s main idea, problem statement, methodology, and conclusion are clear.</li>
                <li>✅ Stick to the time limit (e.g., 10-15 minutes).</li>
                <li>✅Practice with a timer to stay within the limit.</li>
                <li>✅ Be ready to explain your research, findings, and limitations.</li>
              </ul>
            </div>
          </div>
      </div>
    `;
    });

  // ================ Ai Arena ==========================

  document
    .querySelector("#ai-arena")
    .addEventListener("click", function () {
      document.querySelector(".container").style.display = "block";
      document.querySelector(".container").innerHTML = `
      <div class="container section-container">

          <a href="tech-eve.html" class="back-button">
            <i class="fa-solid fa-angle-left"></i> Back
          </a>
          <!-- Title -->
          <h2 class="text-center mb-4">Rules for the Game</h2>

          <div class="row align-items-center">
       
            <div class="col-lg-5">
              <img src="https://www.silicon.co.uk/wp-content/uploads/2017/02/IIoT-684x400.jpg" alt="Feature Image" class="section-img">
            </div>

                
            <div class="col-lg-7">
              <ul class="points-list list-unstyled">
                <li>✅ Keep slides minimal—avoid too much text.</li>
                <li>✅ Use bullet points, diagrams, and charts instead of long paragraphs.</li>
                <li>✅ Ensure your paper’s main idea, problem statement, methodology, and conclusion are clear.</li>
                <li>✅ Stick to the time limit (e.g., 10-15 minutes).</li>
                <li>✅Practice with a timer to stay within the limit.</li>
                <li>✅ Be ready to explain your research, findings, and limitations.</li>
              </ul>
            </div>
          </div>
      </div>
    `;
    });

  // ================ Ai Puzzle solve  ==========================

  document
    .querySelector("#ai-puzzle-solve")
    .addEventListener("click", function () {
      document.querySelector(".container").style.display = "block";
      document.querySelector(".container").innerHTML = `
      <div class="container section-container">

          <a href="tech-eve.html" class="back-button">
            <i class="fa-solid fa-angle-left"></i> Back
          </a>
          <!-- Title -->
          <h2 class="text-center mb-4">Rules for the Game</h2>

          <div class="row align-items-center">
       
            <div class="col-lg-5">
              <img src="https://www.silicon.co.uk/wp-content/uploads/2017/02/IIoT-684x400.jpg" alt="Feature Image" class="section-img">
            </div>

                
            <div class="col-lg-7">
              <ul class="points-list list-unstyled">
                <li>✅ Keep slides minimal—avoid too much text.</li>
                <li>✅ Use bullet points, diagrams, and charts instead of long paragraphs.</li>
                <li>✅ Ensure your paper’s main idea, problem statement, methodology, and conclusion are clear.</li>
                <li>✅ Stick to the time limit (e.g., 10-15 minutes).</li>
                <li>✅Practice with a timer to stay within the limit.</li>
                <li>✅ Be ready to explain your research, findings, and limitations.</li>
              </ul>
            </div>
          </div>
      </div>
    `;
    });

  // ================ Tech Quiz   ==========================

  document
    .querySelector("#tech-quiz")
    .addEventListener("click", function () {
      document.querySelector(".container").style.display = "block";
      document.querySelector(".container").innerHTML = `
      <div class="container section-container">

          <a href="tech-eve.html" class="back-button">
           <i class="fa-solid fa-angle-left"></i> Back
          </a>
          <!-- Title -->
          <h2 class="text-center mb-4">Rules for the Game</h2>

          <div class="row align-items-center">
       
            <div class="col-lg-5">
              <img src="https://www.silicon.co.uk/wp-content/uploads/2017/02/IIoT-684x400.jpg" alt="Feature Image" class="section-img">
            </div>

                
            <div class="col-lg-7">
              <ul class="points-list list-unstyled">
                <li>✅ Keep slides minimal—avoid too much text.</li>
                <li>✅ Use bullet points, diagrams, and charts instead of long paragraphs.</li>
                <li>✅ Ensure your paper’s main idea, problem statement, methodology, and conclusion are clear.</li>
                <li>✅ Stick to the time limit (e.g., 10-15 minutes).</li>
                <li>✅Practice with a timer to stay within the limit.</li>
                <li>✅ Be ready to explain your research, findings, and limitations.</li>
              </ul>
            </div>
          </div>
      </div>
    `;
    });

  // ================  UI and UX  ==========================

  document
    .querySelector("#uix-design")
    .addEventListener("click", function () {
      document.querySelector(".container").style.display = "block";
      document.querySelector(".container").innerHTML = `
      <div class="container section-container">

          <a href="tech-eve.html" class="back-button">
            <i class="fa-solid fa-angle-left"></i> Back
          </a>
          <!-- Title -->
          <h2 class="text-center mb-4">Rules for the Game</h2>

          <div class="row align-items-center">
       
            <div class="col-lg-5">
              <img src="https://www.silicon.co.uk/wp-content/uploads/2017/02/IIoT-684x400.jpg" alt="Feature Image" class="section-img">
            </div>

                
            <div class="col-lg-7">
              <ul class="points-list list-unstyled">
                <li>✅ Keep slides minimal—avoid too much text.</li>
                <li>✅ Use bullet points, diagrams, and charts instead of long paragraphs.</li>
                <li>✅ Ensure your paper’s main idea, problem statement, methodology, and conclusion are clear.</li>
                <li>✅ Stick to the time limit (e.g., 10-15 minutes).</li>
                <li>✅Practice with a timer to stay within the limit.</li>
                <li>✅ Be ready to explain your research, findings, and limitations.</li>
              </ul>
            </div>
          </div>
      </div>
    `;
    });

  // ================ Animation ==========================

  document
    .querySelector("#animation-maker")
    .addEventListener("click", function () {
      document.querySelector(".container").style.display = "block";
      document.querySelector(".container").innerHTML = `
      <div class="container section-container">

          <a href="tech-eve.html" class="back-button">
            <i class="fa-solid fa-angle-left"></i> Back
          </a>
          <!-- Title -->
          <h2 class="text-center mb-4">Rules for the Game</h2>

          <div class="row align-items-center">
       
            <div class="col-lg-5">
              <img src="https://www.silicon.co.uk/wp-content/uploads/2017/02/IIoT-684x400.jpg" alt="Feature Image" class="section-img">
            </div>

                
            <div class="col-lg-7">
              <ul class="points-list list-unstyled">
                <li>✅ Keep slides minimal—avoid too much text.</li>
                <li>✅ Use bullet points, diagrams, and charts instead of long paragraphs.</li>
                <li>✅ Ensure your paper’s main idea, problem statement, methodology, and conclusion are clear.</li>
                <li>✅ Stick to the time limit (e.g., 10-15 minutes).</li>
                <li>✅Practice with a timer to stay within the limit.</li>
                <li>✅ Be ready to explain your research, findings, and limitations.</li>
              </ul>
            </div>
          </div>
      </div>
    `;
    });
