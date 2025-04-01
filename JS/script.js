/* Preloader animation */
setTimeout(() => {
  document.querySelector(".preloader").style.display = "none";
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

// ================ Technical   ==========================

document.querySelector("#papper-btn").addEventListener("click", function () {
  document.querySelector(".container").style.display = "block";
  document.querySelector(".container").innerHTML = `
<div class="container section-container">

    <a href="tech-eve.html" class="back-button">
      <i class="fa-solid fa-angle-left"></i> Back
    </a>
    <!-- Title -->
    <h2 class=" mb-4">Paper Presentation</h2>

    <hr>

    <div class="row align-items-center">

          
      <div class="col-lg-7" >
      <p class='para'>Paper presentation is an opportunity for students to present their innovative ideas, research work and technical solutions. This event aims to enhance the research orientation and presentation skills of participants.</p>
      <h4><i class="fa-solid fa-list-check"></i>Rules</h4>  
      <ul class="points-list list-styled">
          <li>Team size: Maximum 2 members</li>
          <li>Time limit: 8 minutes presentation + 2 minutes Q&A </li>
          <li>Presentation must be in PowerPoint format</li>
          <li>Abstract submission deadline: April 15, 2025 </li>
          <li>Topics should relate to emerging technologies in Computer Science</li>
        </ul>

          <a href="https://example.com" class="btn btn-light dynamic-btn">Register </a>
      </div>
    </div>

     <div class="cordin">
      <h3><i class="fa-solid fa-people-group"></i> Coordinaters</h3>
      <ul>
        <li>Mridulaa (7695888103)</li>
        <li>Pooja M (9361083662)</li>
        <li>Mohammed Rizhwan (9952720810)</li>
      </ul>
    </div>
</div>
`;
});

// =============  Relay coding     ============

document.querySelector("#relay-coding").addEventListener("click", function () {
  document.querySelector(".container").style.display = "block";
  document.querySelector(".container").innerHTML = `
<div class="container section-container">

    <a href="tech-eve.html" class="back-button">
      <i class="fa-solid fa-angle-left"></i> Back
    </a>
    <!-- Title -->
    <h2 class=" mb-4">Relay Coding & Blind Coding</h2>

    <hr>

    <div class="row align-items-center">

          
      <div class="col-lg-7" >
      <p class='para'>Relay coding is a team event where participants take turns to code a solution within strict time limits. Blind coding challenges participants to write code without being able to see the output until the end.</p>
      <h4><i class="fa-solid fa-list-check"></i>Rules</h4>  
      <ul class="points-list list-styled">
          <li>Relay Coding: Teams of 3 members, each member codes for 10 minutes</li>
          <li>Blind Coding: Individual participation, no testing until submission</li>
          <li>Languages allowed: C, C++, Java, Python</li>
          <li>Internet access is not allowed during the competition</li>
          <li>Topics should relate to emerging technologies in Computer Science</li>
          <li>Judges decision will be final</li>
        </ul>

          <a href="https://example.com" class="btn btn-light dynamic-btn">Register </a>
      </div>
    </div>

     <div class="cordin">
      <h3><i class="fa-solid fa-people-group"></i> Coordinaters</h3>
      <ul>
        <li>Joshiga (8778957458)</li>
        <li>Mythili (6369497320)</li>
        <li>Sasikumar (9342866773)</li>
        <li>Subramaniya Siva (8825470295)</li>
      </ul>
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
    <h2 class=" mb-4">Password Cracking</h2>

    <hr>

    <div class="row align-items-center">

          
      <div class="col-lg-7" >
      <p class='para'>This competition tests your cryptographic skills and understanding of security principles. Participants will need to solve various cryptographic puzzles and break encrypted messages.</p>
      <h4><i class="fa-solid fa-list-check"></i>Rules</h4>  
      <ul class="points-list list-styled">
          <li>Individual participation only</li>
          <li>Multiple rounds with increasing difficulty</li>
          <li>Basic understanding of cryptographic algorithms required</li>
          <li>Time-based scoring system</li>
          
          <li>Bring your own laptop with necessary tools installed</li>
        </ul>

          <a href="https://example.com" class="btn btn-light dynamic-btn">Register </a>
      </div>
    </div>

     <div class="cordin">
      <h3><i class="fa-solid fa-people-group"></i> Coordinaters</h3>
      <ul>
        <li>Rajasree E (6383076735)</li>
        <li>Priyadharshini (7871736671)</li>
        <li>Sachin S (9655370719)</li>
        <li>Madhan V (8072664400)</li>
      </ul>
    </div>
</div>
`;
  });

// ================ Ai Jailbreak ==========================

document.querySelector("#ai-jail").addEventListener("click", function () {
  document.querySelector(".container").style.display = "block";
  document.querySelector(".container").innerHTML = `
<div class="container section-container">

  <a href="tech-eve.html" class="back-button">
    <i class="fa-solid fa-angle-left"></i> Back
  </a>
  <!-- Title -->
  <h2 class=" mb-4">AI Jailbreak</h2>

  <hr>

  <div class="row align-items-center">

        
    <div class="col-lg-7" >
    <p class='para'>This competition challenges participants to find creative ways to "jailbreak" AI systems - making them produce outputs they were designed to avoid. Demonstrate your understanding of AI limitations and prompting techniques.</p>
    <h4><i class="fa-solid fa-list-check"></i>Rules</h4>  
    <ul class="points-list list-styled">
        <li>Individual participation</li>
        <li>Multiple AI systems to challenge</li>
        <li>Ethical guidelines must be followed</li>
        <li>Scoring based on creativity and effectiveness</li>
        <li>Detailed </li>
      </ul>

        <a href="https://example.com" class="btn btn-light dynamic-btn">Register </a>
    </div>
  </div>

   <div class="cordin">
    <h3><i class="fa-solid fa-people-group"></i> Coordinaters</h3>
    <ul>
      <li>Sachiv C (9444299374)</li>
      <li>Abinandudha (9500880409)</li>
      <li>Haridharsini (8838849924)</li>
      <li>Sowmithraa (8438364809)</li>
    </ul>
  </div>
</div>
`;
});

// ================ Ai puzzle solving==========================

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
  <h2 class=" mb-4">AI Puzzle Solving</h2>

  <hr>

  <div class="row align-items-center">

        
    <div class="col-lg-7" >
    <p class='para'>Design and implement AI algorithms to solve various puzzles and optimization problems. Demonstrate your understanding of artificial intelligence concepts through practical applications.</p>
    <h4><i class="fa-solid fa-list-check"></i>Rules</h4>  
    <ul class="points-list list-styled">
        <li>Individual or team of 2 participants</li>
        <li>Multiple rounds with different puzzle types</li>
        <li>Participants must bring their own development environment</li>
        <li>Languages allowed: Python, Java, C++</li>
        <li>Solutions will be judged on effectiveness, efficiency, and innovation </li>
      </ul>

        <a href="https://example.com" class="btn btn-light dynamic-btn">Register </a>
    </div>
  </div>

   <div class="cordin">
    <h3><i class="fa-solid fa-people-group"></i> Coordinaters</h3>
    <ul>
      <li>Dharshini (9789443458)</li>
      <li>Madhumitha (6361739963)</li>
      <li>Janarthanan (9003119904)</li>
      <li>Praveen (8610322907)</li>
    </ul>
  </div>
</div>
`;
  });
// ================ Tech Quiz ==========================

document.querySelector("#tech-quiz").addEventListener("click", function () {
  document.querySelector(".container").style.display = "block";
  document.querySelector(".container").innerHTML = `
<div class="container section-container">

  <a href="tech-eve.html" class="back-button">
    <i class="fa-solid fa-angle-left"></i> Back
  </a>
  <!-- Title -->
  <h2 class=" mb-4">Technical Quiz</h2>

  <hr>

  <div class="row align-items-center">

        
    <div class="col-lg-7" >
    <p class='para'>Compete in this fast-paced quiz on various technical topics including programming languages, algorithms, computer hardware, networking, and technology trends.</p>
    <h4><i class="fa-solid fa-list-check"></i>Rules</h4>  
    <ul class="points-list list-styled">
        <li>Team size: 2 members</li>
        <li>Multiple rounds with varying formats</li>
        <li>Topics include programming, hardware, networking, and tech trends</li>
        <li>No electronic devices allowed during the quiz</li>
        <li>Final decision rests with the quiz master</li>
      </ul>

        <a href="https://example.com" class="btn btn-light dynamic-btn">Register </a>
    </div>
  </div>

   <div class="cordin">
    <h3><i class="fa-solid fa-people-group"></i> Coordinaters</h3>
    <ul>
      <li>Narmatha (6369359396)</li>
      <li>Thillainaragan B (9994484358)</li>
      <li>Rakshana Fathima (8838191447)</li>
      <li>Siddharth (9944650562)</li>
    </ul>
  </div>
</div>
`;
});

// ================ UI and UX ==========================

document.querySelector("#uix-design").addEventListener("click", function () {
  document.querySelector(".container").style.display = "block";
  document.querySelector(".container").innerHTML = `
<div class="container section-container">

  <a href="tech-eve.html" class="back-button">
    <i class="fa-solid fa-angle-left"></i> Back
  </a>
  <!-- Title -->
  <h2 class=" mb-4">UI and UX Design</h2>

  <hr>

  <div class="row align-items-center">

        
    <div class="col-lg-7" >
    <p class='para'>This event challenges participants to create beautiful and functional user interfaces and experiences. Showcase your creativity, design skills, and understanding of user behavior and accessibility principles.</p>
    <h4><i class="fa-solid fa-list-check"></i>Rules</h4>  
    <ul class="points-list list-styled">
        <li>Team size: 1-2 members</li>
        <li>Participants must bring their own design tools/software</li>
        <li>Design brief will be provided at the start of the event</li>
        <li>Time limit: 4 hours</li>
        <li>Presentation of design decisions required</li>
      </ul>

        <a href="https://example.com" class="btn btn-light dynamic-btn">Register </a>
    </div>
  </div>

   <div class="cordin">
    <h3><i class="fa-solid fa-people-group"></i> Coordinaters</h3>
    <ul>
      <li>Rajavaman K (6374666253)</li>
      <li>Abinaya A (6379076960)</li>
      <li>Kavya (9345648054)</li>
      <li>Akhilkarthikeyan (9363180933)</li>
    </ul>
  </div>
</div>
`;
});

// ================ Anime Maker ==========================

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
  <h2 class=" mb-4">Animation Maker</h2>

  <hr>

  <div class="row align-items-center">

        
    <div class="col-lg-7" >
    <p class='para'>Show off your animation skills in this creative competition. Participants will create animated shorts, motion graphics, or interactive animations based on a given theme.</p>
    <h4><i class="fa-solid fa-list-check"></i>Rules</h4>  
    <ul class="points-list list-styled">
        <li>Individual or team of 2 participants</li>
        <li>Animation length: 30-90 seconds</li>
        <li>Theme will be provided at the start of the event</li>
        <li>Judging based on creativity, technical skill, and adherence to theme</li>
  
      </ul>

        <a href="https://example.com" class="btn btn-light dynamic-btn">Register </a>
    </div>
  </div>

   <div class="cordin">
    <h3><i class="fa-solid fa-people-group"></i> Coordinaters</h3>
    <ul>
      <li>Sowndaya A (6383046798)</li>
      <li>SivaPrakash S (9363440752)</li>
      <li>Ajayakumar (9363456438)</li>
      <li>Pragadesh (9994161318)</li>
    </ul>
  </div>
</div>
`;
  });

// +++++++++++++++=============++++++++++++++++=====================++++++++++++++
