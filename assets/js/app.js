"use strict";
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // Ensure scrollUp exists and isn't null
    if (scrollUp) {
        // When the scroll is higher than 20px, add the show-scroll class
        window.scrollY >= 20 ? scrollUp.classList.add('show-scroll')
            : scrollUp.classList.remove('show-scroll');
    }
};
// Add scroll event listener
window.addEventListener('scroll', scrollUp);
// Get the user's name from local storage
const userName = localStorage.getItem("userName");
const userProfession = localStorage.getItem("userProfession");
const userPhone = localStorage.getItem("userPhone");
const userEmail = localStorage.getItem("userEmail");
const userWebsite = localStorage.getItem("userWebsite");
const userLinkedin = localStorage.getItem("userLinkedin");
const userAddress = localStorage.getItem("userAddress");
const profilePic = localStorage.getItem("profilePicInput");
const userYear1 = localStorage.getItem("userYear1");
const userDegree1 = localStorage.getItem("userDegree1");
const userUniversity = localStorage.getItem("userUniversity");
const userYear2 = localStorage.getItem("userYear2");
const userDegree2 = localStorage.getItem("userDegree2");
const userCollege = localStorage.getItem("userCollege");
const userYear3 = localStorage.getItem("userYear3");
const userDegree3 = localStorage.getItem("userDegree3");
const userSchool = localStorage.getItem("userSchool");
const language1 = localStorage.getItem("language1");
const level1 = localStorage.getItem("level1");
const language2 = localStorage.getItem("language2");
const level2 = localStorage.getItem("level2");
const language3 = localStorage.getItem("language3");
const level3 = localStorage.getItem("level3");
const userAbout = localStorage.getItem("userAbout");
const userJobYear1 = localStorage.getItem("userJobYear1");
const userJobCompany1 = localStorage.getItem("userJobCompany1");
const userPosition1 = localStorage.getItem("userPosition1");
const userAboutJob1 = localStorage.getItem("userAboutJob1");
const userJobYear2 = localStorage.getItem("userJobYear2");
const userJobCompany2 = localStorage.getItem("userJobCompany2");
const userPosition2 = localStorage.getItem("userPosition2");
const userAboutJob2 = localStorage.getItem("userAboutJob2");
const userJobYear3 = localStorage.getItem("userJobYear3");
const userJobCompany3 = localStorage.getItem("userJobCompany3");
const userPosition3 = localStorage.getItem("userPosition3");
const userAboutJob3 = localStorage.getItem("userAboutJob3");
const userSkill1 = localStorage.getItem("userSkill1");
const userSkill1Level = localStorage.getItem("userSkill1Level");
const userSkill2 = localStorage.getItem("userSkill2");
const userSkill2Level = localStorage.getItem("userSkill2Level");
const userSkill3 = localStorage.getItem("userSkill3");
const userSkill3Level = localStorage.getItem("userSkill3Level");
const userSkill4 = localStorage.getItem("userSkill4");
const userSkill4Level = localStorage.getItem("userSkill4Level");
const userSkill5 = localStorage.getItem("userSkill5");
const userSkill5Level = localStorage.getItem("userSkill5Level");
const userSkill6 = localStorage.getItem("userSkill6");
const userSkill6Level = localStorage.getItem("userSkill6Level");
const shareableLink = document.getElementById("share-link");
const downloadPDF = document.getElementById("download-pdf");
if (userName) {
    document.getElementById("user-name").innerHTML = `${userName}<br><span id="profession">${userProfession}</span>`;
    document.getElementById("phone").textContent = userPhone;
    document.getElementById("email").textContent = userEmail;
    document.getElementById("website").textContent = userWebsite;
    document.getElementById("linkedin").textContent = userLinkedin;
    document.getElementById("address").textContent = userAddress;
    const profilePicElement = document.getElementById("profile-picture");
    if (profilePicElement) {
        profilePicElement.src = profilePic || "";
    }
    document.getElementById("year-1").textContent = userYear1;
    document.getElementById("degree-1").textContent = userDegree1;
    document.getElementById("university").textContent = userUniversity;
    document.getElementById("year-2").textContent = userYear2;
    document.getElementById("degree-2").textContent = userDegree2;
    document.getElementById("college").textContent = userCollege;
    document.getElementById("year-3").textContent = userYear3;
    document.getElementById("degree-3").textContent = userDegree3;
    document.getElementById("school").textContent = userSchool;
    document.getElementById("language-1").textContent = language1;
    document.getElementById("level-1").innerHTML = `<div style="width: ${level1}%; max-width: 100%;"></div>`;
    document.getElementById("language-2").textContent = language2;
    document.getElementById("level-2").innerHTML = `<div style="width: ${level2}%; max-width: 100%;"></div>`;
    document.getElementById("language-3").textContent = language3;
    document.getElementById("level-3").innerHTML = `<div style="width: ${level3}%; max-width: 100%;"></div>`;
    document.getElementById("about-me").textContent = userAbout;
    document.getElementById("job-year-1").textContent = userJobYear1;
    document.getElementById("company-1").textContent = userJobCompany1;
    document.getElementById("position-1").textContent = userPosition1;
    document.getElementById("about-job-1").textContent = userAboutJob1;
    document.getElementById("job-year-2").textContent = userJobYear2;
    document.getElementById("company-2").textContent = userJobCompany2;
    document.getElementById("position-2").textContent = userPosition2;
    document.getElementById("about-job-2").textContent = userAboutJob2;
    document.getElementById("job-year-3").textContent = userJobYear3;
    document.getElementById("company-3").textContent = userJobCompany3;
    document.getElementById("position-3").textContent = userPosition3;
    document.getElementById("about-job-3").textContent = userAboutJob3;
    document.getElementById("skill1").textContent = userSkill1;
    document.getElementById("skilllvl1").innerHTML = `<div style="width: ${userSkill2Level}%; max-width: 100%;"></div>`;
    document.getElementById("skill2").textContent = userSkill2;
    document.getElementById("skilllvl2").innerHTML = `<div style="width: ${userSkill2Level}%; max-width: 100%;"></div>`;
    document.getElementById("skill3").textContent = userSkill3;
    document.getElementById("skilllvl3").innerHTML = `<div style="width: ${userSkill3Level}%; max-width: 100%;"></div>`;
    document.getElementById("skill4").textContent = userSkill4;
    document.getElementById("skilllvl4").innerHTML = `<div style="width: ${userSkill4Level}%; max-width: 100%;"></div>`;
    document.getElementById("skill5").textContent = userSkill5;
    document.getElementById("skilllvl5").innerHTML = `<div style="width: ${userSkill5Level}%; max-width: 100%;"></div>`;
    document.getElementById("skill6").textContent = userSkill6;
    document.getElementById("skilllvl6").innerHTML = `<div style="width: ${userSkill6Level}%; max-width: 100%;"></div>`;
    const shareableURL = `${window.location.origin}?usename=${encodeURIComponent(userName)}`;
    shareableLink.href = shareableURL;
    // PDF Download
    downloadPDF.addEventListener("click", () => {
        const element = document.querySelector(".container");
        if (element) {
            window.html2canvas(element, { scale: 2, useCORS: true, backgroundColor: null })
                .then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const pdf = new window.jspdf.jsPDF("portrait", "px", [canvas.width, canvas.height]);
                pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
                pdf.save("resume.pdf");
            })
                .catch((error) => console.error("Error generating PDF:", error));
        }
    });

    // share link
    shareableLink.addEventListener("click", () => {
        const shareableURL = `${window.location.origin}?usename=${encodeURIComponent(userName)}`;
        shareableLink.href = shareableURL;
    });
}
else {
    // do nothing!
}
window.addEventListener('DOMContentLoaded', () => {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach((element) => {
        const id = element.id;
        const savedValue = localStorage.getItem(id);
        if (savedValue) {
            element.textContent = savedValue;
        }
        element.addEventListener('blur', () => {
            const newText = element.textContent || ''; // Handle potential undefined content
            localStorage.setItem(id, newText);
        });
    });
});
