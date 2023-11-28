// script.js
let binsData = [];

function renderBins() {
    const binsList = document.getElementById("binsList");
    const binSelect = document.getElementById("binSelect");

    // Clear existing options
    binsList.innerHTML = "";
    binSelect.innerHTML = "";

    binsData.forEach((bin, index) => {
        const binDiv = document.createElement("div");
        binDiv.className = "bin-item";
        binDiv.textContent = `Bin ${index + 1}: ${bin.status}`;

        const binOption = document.createElement("option");
        binOption.value = index;
        binOption.textContent = `Bin ${index + 1}`;

        binsList.appendChild(binDiv);
        binSelect.appendChild(binOption);
    });
}

document.getElementById("addBin").addEventListener("click", function() {
    const newBinName = document.getElementById("newBinName").value;
    if (newBinName.trim() !== "") {
        const newBin = { name: newBinName, status: "Empty" };
        binsData.push(newBin);
        renderBins();
        document.getElementById("newBinName").value = "";
    }
});

document.getElementById("reportForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const binIndex = document.getElementById("binSelect").value;
    const reporterName = document.getElementById("reporterName").value;

    if (binsData[binIndex]) {
        binsData[binIndex].status = "Full";
        alert(`Thanks for Reporting, ${reporterName}! ${binsData[binIndex].name} has been reported as full and we will soon work on it`);
        renderBins();
        document.getElementById("reporterName").value = "";
    }
});

// Initial rendering
renderBins();

const userMessage = [
    ["mentor","team mentor"],
    ["armish saba"],
    ["laxmidhar sahoo"],
    ["what is your idea","idea","tell me about it"],
    ["What is the problem Statement","problem statement","need"],
    ["your team","describe your team","about your team"],
    ["backend developer","who is your backend developer","rahul sharma"],
    ["who is your team leader","team leader","jayprakash biswal"],
    ["hi", "hey", "hello"],
    ["sure", "yes", "no"],
    ["are you genious", "are you nerd", "are you intelligent"],
    ["i hate you", "i dont like you"],
    ["how are you", "how is life", "how are things", "how are you doing"],
    ["how is corona", "how is covid 19", "how is covid19 situation"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you", "who is your creator"],
  
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what call yourself"
    ],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "ok", "okay", "nice", "welcome"],
    ["thanks", "thank you"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["corona", "covid19", "coronavirus"],
    ["you are funny"],
    ["i dont know"],
    ["boring"],
    ["im tired"],
    ["dance"]
  ];
  const botReply = [
    ["Prakash Chandra Sahoo is our Team Mentor who helped us a lot in the support for the Team."],
    ["Armish Saba has a great field of knowledge in Frontend Development, Logic Building and Data analysis"],
    ["Laximdhar Sahoo has a great field of knowledge on UI/UX Designs and Graphic Designing"],
    ["Our team ideally is mainly focussed developing a smart waste bins, with specific functionality of bins performing various operations and sending sensors, whether the bin is full or a alert before the bin is about to be full using the IOT and Database System"],
    ["The Problem Statement mainly focusses on clean and green technology and waste management where the challenge is to develop innovative solutions that address the specific issue of neighbours disposing waste bags and causing litter."],
    ["Our team Techno Teens consists of 6 members, lead by our team leader Jayprakash Biswal and a great technical support by Rahul Sharma.Further our team members are Laximdhar Sahoo who followed by Armish Saba,Amisha Singh and Ankita Kumari"],
    ["Rahul Sharma is our team Backend developer.He is a hardworking person and also very dedicated person to his work"],
    ["Jayprakash Biswal is Our team Leader who has a great field of knowlegde in Full Stack Web Development and is always keen in the hard work for the team"],
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    ["Okay"],
    ["Yes I am! "],
    ["I'm sorry about that. But I like you dude."],
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],
    ["Getting better. There?", "Somewhat okay!", "Yeah fine. Better stay home!"],
  
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually"
    ],
    ["I am always young."],
    ["I am just a bot", "I am a bot. What are you?"],
    ["Sabitha Kuppusamy"],
    ["I am nameless", "I don't have a name"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["You're welcome"],
    ["Briyani", "Burger", "Sushi", "Pizza"],
    ["Dude!"],
    ["Yes?"],
    ["Please stay home"],
    ["Glad to hear it"],
    ["Say something interesting"],
    ["Sorry for that. Let's chat!"],
    ["Take some rest, Dude!"],
    ["Why Not"]
  ];
  
  const alternative = [
    "Same here, dude.",
    "That's cool! Go on...",
    "Dude...",
    "Ask something else...",
    "Hey, I'm listening..."
  ];
  
  const synth = window.speechSynthesis;
  
  function voiceControl(string) {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-aus";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
  }
  
  function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
        inputField.value = "";
      }
    });
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  
    let comparedText = compare(userMessage, botReply, text);
  
    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    //containMessageCheck(string);
    if (item) return item;
    else return containMessageCheck(string);
  }
  
  function containMessageCheck(string) {
    let expectedReply = [
      [
        "Good Bye, dude",
        "Bye, See you!",
        "Dude, Bye. Take care of your health in this situation."
      ],
      ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
      ["Have a pleasant evening!", "Good evening too", "Evening!"],
      ["Good morning, Have a great day!", "Morning, dude!"],
      ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
    ];
    let expectedMessage = [
      ["bye", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  }
  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    voiceControl(product);
  }

const ctx = document.getElementById('wasteChart').getContext('2d');

// Sample data (replace with real data)
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Waste Generation (tons)',
            data: [10, 12, 14, 11, 15, 13],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
    ],
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
};

const wasteChart = new Chart(ctx, config);
