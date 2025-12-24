let prompt = document.querySelector(".prompt-area");
let chatContainer = document.querySelector(".chat-container");

function createChatBox(html, classes) {
    let div = document.createElement("div");
    div.innerHTML = html;
    div.classList.add(classes);
    return div;
}

function handleChatResponse(message) {
    let html = `
    <div class="user-chat-area">
        <img src="user_img.png" alt="" width="50">
        <span>${message}</span>
    </div>`;

    let userChatBox = createChatBox(html, "chat-box");
    chatContainer.appendChild(userChatBox);
}

prompt.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && prompt.value.trim() !== "") {
        handleChatResponse(prompt.value);
        prompt.value = "";
    }
});