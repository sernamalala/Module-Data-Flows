
const apiURL = "https://xkcd.now.sh/?comic=latest";
async function fetchDataAndDisplay() {

    try {
        const response = await fetch(apiURL);
        const result = await response.json();
        console.log(result)

        let content = document.getElementById("content");
        let image = document.createElement("img");
        let title = document.createElement("h1");
        title.textContent = result.title;
        content.appendChild(title);
        image.src = result.img;
        image.alt = result.alt;
        content.appendChild(image);

    } catch (error) {
        alert("There is an error!!");
        console.error("There is an error", error);
    }
}


fetchDataAndDisplay();
