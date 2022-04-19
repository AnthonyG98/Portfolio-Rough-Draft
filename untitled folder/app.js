// const getNYTopStories = async() =>{
//     const res = fetch("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=GpB8GoRIDcaekhMEZbKY7aGGnBtDXkDA")
//     .then(response =>response.json())
//     .then(data => {
//         console.log(data)
//         //Setting center data text
//         const MainHeader = document.getElementById("headline-title");
//         MainHeader.innerText = data.results[0].title;
//         //left data text
//         const leftHeader = document.getElementById("left-title");
//         leftHeader.innerText = data.results[1].title;
//         //right data text
//         const rightHeader = document.getElementById("right-title");
//         rightHeader.innerText = data.results[2].title;
//         //Center Image
//         const mainImg = document.getElementById("main-img");
//         mainImg.style.backgroundImage = `url("${data.results[0].multimedia[0].url}")`;

//         const leftImg = document.getElementById("left-img");
//         leftImg.style.backgroundImage = `url("${data.results[1].multimedia[0].url}")`;

//         const rightImg = document.getElementById("right-img");
//         rightImg.style.backgroundImage = `url("${data.results[2].multimedia[0].url}")`;

//         //set text
//         const MainText = document.getElementById("headline-text");
//         MainText.innerText = data.results[0].abstract;
//         const leftText = document.getElementById("left-text");
//         leftText.innerText = data.results[1].abstract;
//         const rightText = document.getElementById("right-text");
//         rightText.innerText = data.results[2].abstract;

//         //set links
//         const MainLink = document.getElementById("headline-url").href = data.results[0].url;
//         const leftLink = document.getElementById("left-url").href = data.results[1].url;
//         const rightLink = document.getElementById("right-url").href = data.results[2].url;

//     })
// }
// getNYTopStories();

const openMobileLinks = () =>{
    const linksContainer = document.getElementById("mobile-links");
    linksContainer.style.left = "0%";
    linksContainer.style.display = "flex";
}