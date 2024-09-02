document.addEventListener('DOMContentLoaded', function() {
    // Chart 1
    var ctx1 = document.getElementById('chart1').getContext('2d');
    var chart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
            datasets: [{
                label: 'Sample Data',
                data: [12, 19, 3, 5, 2],
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Chart 2
    var ctx2 = document.getElementById('chart2').getContext('2d');
    var chart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Sample Data',
                data: [65, 59, 80, 81, 56, 55],
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const exampleSelector = document.getElementById("example-selector");
    const textContainer = document.getElementById("text-container");

    const conversations = {
        option1: [
            { type: "user", text: "Hello, I need some help with my project." },
            { type: "llm", text: "Sure, I'd be happy to assist. What specifically do you need help with?" }
        ],
        option2: [
            { type: "user", text: "Can you explain the concept of neural networks?" },
            { type: "llm", text: "Certainly! Neural networks are a subset of machine learning algorithms modeled after the human brain's network of neurons..." }
        ],
        option3: [
            { type: "user", text: "What's the best way to optimize a model?" },
            { type: "llm", text: "Optimizing a model involves various techniques, such as adjusting hyperparameters, using regularization methods, and fine-tuning the training process..." }
        ]
    };

    function typeText(conversation) {
        textContainer.innerHTML = "";
        let index = 0;
        function addMessage() {
            if (index < conversation.length) {
                const message = conversation[index];
                const div = document.createElement("div");
                div.classList.add(message.type === "user" ? "user-text" : "llm-text");

                if (message.type === "llm") {
                    const icon = document.createElement("div");
                    icon.classList.add("llm-icon");
                    div.appendChild(icon);
                }

                textContainer.appendChild(div);

                if (message.type === "llm") {
                    let textIndex = 0;
                    const interval = setInterval(() => {
                        div.innerHTML += message.text[textIndex++];
                        if (textIndex > message.text.length - 1) {
                            clearInterval(interval);
                            index++;
                            addMessage(); // Add next message
                        }
                    }, 10); // Adjust typing speed (milliseconds per character)
                } else {
                    div.innerHTML = message.text;
                    index++;
                    addMessage(); // Add next message
                }
            }
        }
        addMessage();
    }

    exampleSelector.addEventListener("change", function() {
        const selectedOption = exampleSelector.value;
        typeText(conversations[selectedOption]);
    });

    // Initialize with the default selected option
    typeText(conversations[exampleSelector.value]);
});

