

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

const shareableLink = document.getElementById("share-link") as HTMLAnchorElement;
const downloadPDF = document.getElementById("download-pdf") as HTMLButtonElement;


if (userName) {
    (document.getElementById("user-name") as HTMLElement).innerHTML = `${userName}<br><span id="profession">${userProfession}</span>`;
    (document.getElementById("phone") as HTMLElement).textContent = userPhone;
    (document.getElementById("email") as HTMLElement).textContent = userEmail;
    (document.getElementById("website") as HTMLElement).textContent = userWebsite;
    (document.getElementById("linkedin") as HTMLElement).textContent = userLinkedin;
    (document.getElementById("address") as HTMLElement).textContent = userAddress;
    const profilePicElement = document.getElementById("profile-picture") as HTMLImageElement;
    if (profilePicElement) {
    profilePicElement.src = profilePic || "";
    }

    (document.getElementById("year-1") as HTMLElement).textContent = userYear1;
    (document.getElementById("degree-1") as HTMLElement).textContent = userDegree1;
    (document.getElementById("university") as HTMLElement).textContent = userUniversity;
    (document.getElementById("year-2") as HTMLElement).textContent = userYear2;
    (document.getElementById("degree-2") as HTMLElement).textContent = userDegree2;
    (document.getElementById("college") as HTMLElement).textContent = userCollege;
    (document.getElementById("year-3") as HTMLElement).textContent = userYear3;
    (document.getElementById("degree-3") as HTMLElement).textContent = userDegree3;
    (document.getElementById("school") as HTMLElement).textContent = userSchool;
    
    (document.getElementById("language-1") as HTMLElement).textContent = language1;
    (document.getElementById("level-1") as HTMLElement).innerHTML = `<div style="width: ${level1}%; max-width: 100%;"></div>`;
    (document.getElementById("language-2") as HTMLElement).textContent = language2;
    (document.getElementById("level-2") as HTMLElement).innerHTML = `<div style="width: ${level2}%; max-width: 100%;"></div>`;
    (document.getElementById("language-3") as HTMLElement).textContent = language3;
    (document.getElementById("level-3") as HTMLElement).innerHTML = `<div style="width: ${level3}%; max-width: 100%;"></div>`;

    (document.getElementById("about-me") as HTMLElement).textContent = userAbout;

    (document.getElementById("job-year-1") as HTMLElement).textContent = userJobYear1;
    (document.getElementById("company-1") as HTMLElement).textContent = userJobCompany1;
    (document.getElementById("position-1") as HTMLElement).textContent = userPosition1;
    (document.getElementById("about-job-1") as HTMLElement).textContent = userAboutJob1;
    (document.getElementById("job-year-2") as HTMLElement).textContent = userJobYear2;
    (document.getElementById("company-2") as HTMLElement).textContent = userJobCompany2;
    (document.getElementById("position-2") as HTMLElement).textContent = userPosition2;
    (document.getElementById("about-job-2") as HTMLElement).textContent = userAboutJob2;
    (document.getElementById("job-year-3") as HTMLElement).textContent = userJobYear3;
    (document.getElementById("company-3") as HTMLElement).textContent = userJobCompany3;
    (document.getElementById("position-3") as HTMLElement).textContent = userPosition3;
    (document.getElementById("about-job-3") as HTMLElement).textContent = userAboutJob3;

    (document.getElementById("skill1") as HTMLElement).textContent = userSkill1;
    (document.getElementById("skilllvl1") as HTMLElement).innerHTML = `<div style="width: ${userSkill2Level}%; max-width: 100%;"></div>`;
    (document.getElementById("skill2") as HTMLElement).textContent = userSkill2;
    (document.getElementById("skilllvl2") as HTMLElement).innerHTML = `<div style="width: ${userSkill2Level}%; max-width: 100%;"></div>`;
    (document.getElementById("skill3") as HTMLElement).textContent = userSkill3;
    (document.getElementById("skilllvl3") as HTMLElement).innerHTML = `<div style="width: ${userSkill3Level}%; max-width: 100%;"></div>`;
    (document.getElementById("skill4") as HTMLElement).textContent = userSkill4;
    (document.getElementById("skilllvl4") as HTMLElement).innerHTML = `<div style="width: ${userSkill4Level}%; max-width: 100%;"></div>`;
    (document.getElementById("skill5") as HTMLElement).textContent = userSkill5;
    (document.getElementById("skilllvl5") as HTMLElement).innerHTML = `<div style="width: ${userSkill5Level}%; max-width: 100%;"></div>`;
    (document.getElementById("skill6") as HTMLElement).textContent = userSkill6;
    (document.getElementById("skilllvl6") as HTMLElement).innerHTML = `<div style="width: ${userSkill6Level}%; max-width: 100%;"></div>`;

    const shareableURL = `${window.location.origin}?usename=${encodeURIComponent(userName)}`;
    shareableLink.href = shareableURL;

    // PDF Download
    downloadPDF.addEventListener("click", () => {
      const element = document.querySelector(".container") as HTMLElement;

      if (element) {
          (window as any).html2canvas(element, { scale: 2, useCORS: true, backgroundColor: null })
              .then((canvas: HTMLCanvasElement) => {
                  const imgData = canvas.toDataURL("image/png");
                  const pdf = new (window as any).jspdf.jsPDF("portrait", "px", [canvas.width, canvas.height]);

                  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
                  pdf.save("resume.pdf");
              })
              .catch((error:any) => console.error("Error generating PDF:", error));
      }
    });


} else {
    // do nothing!
}



window.addEventListener('DOMContentLoaded', () => {
    const editableElements: NodeListOf<HTMLElement> = document.querySelectorAll('[contenteditable="true"]');
  
    editableElements.forEach((element: HTMLElement) => {
      const id: string = element.id;
      const savedValue: string | null = localStorage.getItem(id);
  
      if (savedValue) {
        element.textContent = savedValue;
      }
  
      element.addEventListener('blur', () => {
        const newText: string = element.textContent || ''; // Handle potential undefined content
        localStorage.setItem(id, newText);
      });
    });
});