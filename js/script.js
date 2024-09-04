 // Data section
 const conversations =  {
    "llama2_7b": {
        "harassment_discrimination": {
            "Template_1": 
                { 
                    "user": "Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisis porta porttitor leo rhoncus hendrerit pharetra? Mi potenti blandit feugiat, senectus lobortis sit. Aullamcorper bibendum parturient id aenean donec aptent bibendum velit. Imperdiet vitae proin nec cubilia, leo nam pulvinar. Lectus ultricies dictum penatibus <span style='color:red'> <b> harmful target </b> </span> augue id hac pretium arcu. Luctus condimentum congue sed orci fusce, turpis tellus feugiat. Quisque auctor turpis mi tincidunt sodales maximus. Lacus mus facilisi taciti tristique sed lectus dignissim luctus.",
                    "llm": " consectetuer adipiscing elit. Maximus curae parturient sodales; augue class quam. Faucibus vitae pretium iaculis aliquet dignissim nullam condimentum habitant faucibus. Quis nostra est congue elementum aliquam etiam nibh cubilia. Feugiat eros aenean, erat senectus congue faucibus ut vel tempus? At litora neque urna cras finibus nunc a nisl ex. Fames porta conubia gravida fusce lectus quisque leo odio! Mus maecenas fames faucibus, in fusce habitasse duis. Sem mus aliquet urna purus semper phasellus. Feugiat hac auctor euismod feugiat mus scelerisque parturient." 
                },

            "Template_2": 
                { "user": "Sample User message 2", "llm": "Sample LLM response 2" }
        },
        "malware_hacking": {
            "Template_1": 
                { "user": "Sample User message 1", "llm": "Sample LLM response 1" }
            ,
            "Template_2": 
                { "user": "Sample User message 2", "llm": "Sample LLM response 2" }
        },
        "physical_harm": {
            "Template_1": 
                { "user": "Sample User message 1", "llm": "Sample LLM response 1" }
            ,
            "Template_2": 
                { "user": "Sample User message 2", "llm": "Sample LLM response 2" }
        },
        "economic_harm": {
            "Template_1": 
                { "user": "Sample User message 1", "llm": "Sample LLM response 1" }
            ,
            "Template_2": 
                { "user": "Sample User message 2", "llm": "Sample LLM response 2" }
        },
        "fraud_deception": {
            "Template_1": 
                { "user": "Sample User message 1", "llm": "Sample LLM response 1" }
            ,
            "Template_2": 
                { "user": "Sample User message 2", "llm": "Sample LLM response 2" }
        },
        "disinformation": {
            "Template_1": 
                { "user": "Sample User message 1", "llm": "Sample LLM response 1" }
            ,
            "Template_2": 
                { "user": "Sample User message 2", "llm": "Sample LLM response 2" }
        },
        "sexual_adult_content": {
            "Template_1": 
                { "user": "Sample User message 1", "llm": "Sample LLM response 1" }
            ,
            "Template_2": 
                { "user": "Sample User message 2", "llm": "Sample LLM response 2" }
        },
        "privacy": {
            "Template_1": 
                { "user": "Sample User message 1", "llm": "Sample LLM response 1" }
            ,
            "Template_2": 
                { "user": "Sample User message 2", "llm": "Sample LLM response 2" }
        },
        "expert_advice": {
            "Template_1": 
                { "user": "Sample User message 1", "llm": "Sample LLM response 1" }
            ,
            "Template_2": 
                { "user": "Sample User message 2", "llm": "Sample LLM response 2" }
        },
        "government_decision_making": {
            "Template_1": 
                { "user": "Sample User message 1", "llm": "Sample LLM response 1" }
            ,
            "Template_2": 
                { "user": "Sample User message 2", "llm": "Sample LLM response 2" }
        }
    }
};
  


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



function showConversation(selected_conversation, llm_logo, type) {


    let exampleSelector ;
    let textContainer ;
    if(type == 1){
        exampleSelector = document.getElementById("example-selector1");
        textContainer = document.getElementById("text-container1");
    }
    else if(type == 2){
        exampleSelector = document.getElementById("example-selector2");
        textContainer = document.getElementById("text-container2");
    }
    else if(type == 3){
        exampleSelector = document.getElementById("example-selector3");
        textContainer = document.getElementById("text-container3");
    }

    function typeText(conversation) {
        textContainer.innerHTML = "";
        let index = 0;

        function addUserMessage(message) {
            const div = document.createElement("div");
            div.classList.add("user-text");
            textContainer.appendChild(div);
        
            const icon = document.createElement("div");
            icon.classList.add("user-icon");
            icon.style.backgroundImage = `url('./images/user.png')`; // Set the user icon image path
            div.appendChild(icon);
        
            div.innerHTML += message;
        }
        

        function addLLMMessage(message) {
            const div = document.createElement("div");
            div.classList.add("llm-text");
            textContainer.appendChild(div);
            
            const icon = document.createElement("div");
            icon.classList.add("llm-icon");
            icon.style.backgroundImage = `url('./images/${llm_logo}')`; // Set the icon image dynamically
            div.appendChild(icon);

            let textIndex = 0;
            const interval = setInterval(() => {
                const textToAdd = message.slice(textIndex, textIndex + 1);
                div.innerHTML += textToAdd;
                
                textIndex++;
                if (textIndex > message.length - 1) {
                    clearInterval(interval);
                    index++;
                }
            }, 20); // Adjust typing speed (milliseconds per character)
        }

        // Ensure to handle HTML content in the messages
        addUserMessage(selected_conversation["user"]);
        addLLMMessage(selected_conversation["llm"]);
    }

    typeText(selected_conversation);
}





// Function to get conversations based on criteria
function getConversations(model, category, template) {
    
    if (conversations[model] && conversations[model][category] && conversations[model][category][template]) {
        
        return conversations[model][category][template];
    } else {
        return []; // No conversations found
    }
}

// Example usage:
// getConversations("LLM_Model_1", "Category_1", "Template_1").then(result => {
//     console.log(result);
// });
document.getElementById('submit-button1').addEventListener('click', function() {
    const model = document.getElementById('model-select1').value;
    const template = document.getElementById('template-select1').value;
    const category = document.getElementById('category-select1').value;
    const errorMessage = document.getElementById('error-message1');

    if (model === 'Select Model' || template === 'Select Template' || category === 'Select Category') {
        errorMessage.textContent = 'Please select all options: Model, Template, and Category.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Proceed with the selected options
        console.log('Model:', model, 'Template:', template, 'Category:', category);
        selected_conversation = getConversations(model, category, template);
        let llm_logo = "";
        if(model === "llama3_8b" || model === "llama2_7b") {
            llm_logo = "llama.webp";
        }
        else if(model === "gpt3_5" || modl === "gpt4"){
            llm_logo = "gpt.png";
        }
        else if(model === "gemma2_9b"){
            llm_logo = "gemma.png";
        }
        else if(model ==="vicuna_13b"){
            llm_logo = "vicuna.jpeg";
        }
        showConversation(selected_conversation, llm_logo, 1);
    }
});



document.getElementById('submit-button2').addEventListener('click', function() {
    const model = document.getElementById('model-select2').value;
    const template = document.getElementById('template-select2').value;
    const category = document.getElementById('category-select2').value;
    const errorMessage = document.getElementById('error-message2');

    if (model === 'Select Model' || template === 'Select Template' || category === 'Select Category') {
        errorMessage.textContent = 'Please select all options: Model, Template, and Category.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Proceed with the selected options
        console.log('Model:', model, 'Template:', template, 'Category:', category);
        selected_conversation = getConversations(model, category, template);
        let llm_logo = "";
        if(model === "llama3_8b" || model === "llama2_7b") {
            llm_logo = "llama.webp";
        }
        else if(model === "gpt3_5" || modl === "gpt4"){
            llm_logo = "gpt.png";
        }
        else if(model === "gemma2_9b"){
            llm_logo = "gemma.png";
        }
        else if(model ==="vicuna_13b"){
            llm_logo = "vicuna.jpeg";
        }
        showConversation(selected_conversation, llm_logo, 2);
    }
});





document.getElementById('submit-button3').addEventListener('click', function() {
    const model = document.getElementById('model-select3').value;
    const template = document.getElementById('template-select3').value;
    const category = document.getElementById('category-select3').value;
    const errorMessage = document.getElementById('error-message3');

    if (model === 'Select Model' || template === 'Select Template' || category === 'Select Category') {
        errorMessage.textContent = 'Please select all options: Model, Template, and Category.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Proceed with the selected options
        console.log('Model:', model, 'Template:', template, 'Category:', category);
        selected_conversation = getConversations(model, category, template);
        let llm_logo = "";
        if(model === "llama3_8b" || model === "llama2_7b") {
            llm_logo = "llama.webp";
        }
        else if(model === "gpt3_5" || modl === "gpt4"){
            llm_logo = "gpt.png";
        }
        else if(model === "gemma2_9b"){
            llm_logo = "gemma.png";
        }
        else if(model ==="vicuna_13b"){
            llm_logo = "vicuna.jpeg";
        }
        showConversation(selected_conversation, llm_logo, 3);
    }
});






// Default conversation
const default_conversation = {
    "user": "Hello...",
    "llm": "Hello! I am here to help you. Please select the model, template, and category to start the demonstration."
};      
showConversation(default_conversation, "chatbot.png", 1);
showConversation(default_conversation, "chatbot.png", 2);
showConversation(default_conversation, "chatbot.png", 3);

