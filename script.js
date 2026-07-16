// Romance-themed steps with shifting backgrounds and playful choices
const steps = [
    {
        heading: "Scene 1: The Cafeteria Meet-Cute",
        bgImage: "her1.jpg", 
        options: [
            "Sweet Iced Latte (with lingering eye contact)", 
            "Spiced Chai (with undeniable chemistry)"
        ]
    },
    {
        heading: "Scene 2: The Study Session Plot-Twist",
        bgImage: "her2.jpg",
        options: [
            "Sharing headphones in a quiet library corner", 
            "Sneaking up to the campus rooftop after hours"
        ]
    },
    {
        heading: "Scene 3: The Bold Move",
        bgImage: "her3.jpg",
        options: [
            "An 'accidental' hand brush while walking", 
            "Directly stealing a sip of my drink to be a menace"
        ]
    }
];

let currentStep = 0;
let userSelections = [];

function loadStep() {
    const data = steps[currentStep];
    
    // Change background image dynamically
    document.getElementById("bgContainer").style.backgroundImage = `url('${data.bgImage}')`;
    
    // Update heading
    document.getElementById("section-heading").innerText = data.heading;
    
    // Clear and build options
    const optionsBox = document.getElementById("options-box");
    optionsBox.innerHTML = "";
    
    data.options.forEach(option => {
        const button = document.createElement("button");
        button.className = "menu-btn";
        button.innerText = option;
        button.onclick = () => handleChoice(option);
        optionsBox.appendChild(button);
    });
}

function handleChoice(choice) {
    userSelections.push(choice);
    currentStep++;
    
    if (currentStep < steps.length) {
        loadStep();
    } else {
        showFinalVibe();
    }
}

function showFinalVibe() {
    // Switch to the final background image
    document.getElementById("bgContainer").style.backgroundImage = "url('her1.jpg')";
    
    document.getElementById("menu-title").innerText = "Season Finale Locked!";
    document.getElementById("menu-subtitle").innerText = "Your College Drama Synopsis";
    document.getElementById("section-heading").innerText = "The Script Diagnosis:";

    const drink = userSelections[0];
    const setting = userSelections[1];
    const move = userSelections[2];

    const contentArea = document.getElementById("content-area");
    
    contentArea.innerHTML = `
        <div class="receipt">
            • Order: ${drink}<br>
            • Location: ${setting}<br>
            • Action: ${move}
        </div>
        <p style="margin-bottom: 2rem; font-size: 0.95rem; line-height: 1.5; color: #e6dfd9; font-style: italic;">
            This storyline is highly addictive. 100% chance of butterflies. Zwide recommends moving this from the screen to a real life rehearsal soon. What do you say??.
        </p>
        <button class="menu-btn" style="text-align: center; display: block; width: 100%;" onclick="location.reload()">
            Rewrite the Script?
        </button>
    `;
    
    // Quick layout clean up for the final button
    const lastBtn = contentArea.querySelector('.menu-btn');
    lastBtn.setAttribute('style', 'text-align: center; width:100%; display:block; border-style:solid;');
}

// Kick off the script on load
loadStep();
