const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

let currentProject = document.querySelector('.project-name');
const currentProjectImage = document.querySelector('.current-project-image');
const projectList = document.querySelector('.project-list');
let github = document.querySelector('.github');
let link = document.querySelector('.arrow');
const openGithub = (href) => {
    window.open(href, '_blank');
}
const openLink = (href) => {
    window.open(href, '_blank');
}
const projectObj = {
    'name' : ['VS Code Redesign','CaesarCrypt','Starrygo','Orrange.in'],
    'imageUrl': ['./assets/imgs/revscode.png', './assets/imgs/caesarcrypt.png','./assets/imgs/starrygo.png','./assets/imgs/orannge.png'],
    'github': ['https://github.com/Adityaj08/VScodeRedesign','https://github.com/Adityaj08/CaesarCrypt','https://github.com/Adityaj08/starrygogh','https://github.com/Adityaj08/orannge.in'],
    'link': ['https://bit.ly/re-vscode','https://caesarcrypt.streamlit.app','https://bit.ly/starrygo','https://bit.ly/Orannge-in']
};

currentProject.innerText = projectObj.name[0];
currentProjectImage.src = projectObj.imageUrl[0];
let githubLink = projectObj.github[0];
let linkLink = projectObj.link[0];
github.addEventListener('click',()=>{
    openGithub(githubLink);
});
link.addEventListener('click',()=>{
    openLink(linkLink);
});
let list = `
<li class="project-list-item"><p>${projectObj.name[0]}</p></li>
<li class="project-list-item"><p>${projectObj.name[1]}</p></li>
<li class="project-list-item"><p>${projectObj.name[2]}</p></li>
<li class="project-list-item"><p>${projectObj.name[3]}</p></li>
`;
projectList.innerHTML = list;
currentProjectImage.src = projectObj.imageUrl[0];

const projectListItems = document.querySelectorAll('.project-list-item');
projectListItems.forEach((item,index)=>{
    projectListItems[0].style.display = "none";
    item.addEventListener('click',()=>{
        projectListItems.forEach((item)=>{
            item.style.display = "block";
        });
        item.style.display = "none";
        currentProject.innerText = projectObj.name[index];
        currentProjectImage.src = projectObj.imageUrl[index];
        console.log(projectObj.github[index]);    
        githubLink = projectObj.github[index];
        linkLink = projectObj.link[index];
        github.addEventListener('click',()=>{
            openGithub(githubLink);
        });
        link.addEventListener('click',()=>{
            openLink(linkLink);
        });
    });
});

//Navbar Shifting in Mobile view
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav = document.querySelector(".mobile-navbar-links");

const toggleNavbar = () =>{
    nav.classList.toggle("active");   
    mobile_nav.classList.toggle("active");
};

const removeNav = () =>{
    nav.classList.remove("active");   
    mobile_nav.classList.remove("active");
};

mobile_nav.addEventListener('click', () => toggleNavbar());
nav.addEventListener('click', () => removeNav());
