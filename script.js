
const personalData = {
    fullName: "Ahmad Zaatar",
    birthDate: "1999-10-30",
    title: "Node.js Back-End Developer",
    summary: "Software Engineer with 3+ years of experience specializing in robust server-side architecture, API development, and database management.",
    about: "Dedicated Software Engineer with 3+ years of professional experience focusing on Back-End development using Node.js. Skilled in designing clean database architectures, building scalable RESTful APIs, and implementing high-precision business logic on the server side. Additionally experienced in front-end fundamentals using React.js and Vue.js.",
    emails: [
        "ahmerzaatar1999@gmail.com"
    ],
    phones: [
        "+963 993 577 995",
        "+963 948 528 132"
    ],
    github: "https://github.com/AhmedZaatar",
    githubDisplay: "github.com/AhmedZaatar",
    profileImage: "profile.jpg", 
    currentCompany: {
        name: "Minarets Company",
        role: "Back-End Developer (Node.js)",
        startDate: "01/10/2023",
        endDate: "Present"
    }
};


document.addEventListener("DOMContentLoaded", () => {

    const avatar = document.getElementById("profile-img");
    if (avatar) avatar.src = personalData.profileImage;


    document.getElementById("user-name").textContent = personalData.fullName;
    document.getElementById("user-title").textContent = personalData.title;
    document.getElementById("user-subtitle").textContent = personalData.summary;
    document.getElementById("user-about").textContent = personalData.about;

    document.getElementById("company-name").textContent = personalData.currentCompany.name;
    document.getElementById("company-role").textContent = personalData.currentCompany.role;
    document.getElementById("company-dates").textContent = `${personalData.currentCompany.startDate} - ${personalData.currentCompany.endDate}`;

    
    document.getElementById("user-birth").textContent = personalData.birthDate;
    
    const emailElem = document.getElementById("user-email");
    emailElem.textContent = personalData.emails[0];
    emailElem.href = `mailto:${personalData.emails[0]}`;

    document.getElementById("user-phone-1").textContent = personalData.phones[0];
    document.getElementById("user-phone-2").textContent = personalData.phones[1];

    const githubElem = document.getElementById("user-github");
    githubElem.textContent = personalData.githubDisplay;
    githubElem.href = personalData.github;
    
    document.getElementById("github-btn").href = personalData.github;
});
