
// Listen for the form submission
(document.getElementById("form") as HTMLElement).addEventListener("submit", function(e) {
    e.preventDefault();  // Prevent the form from refreshing the page

    // Get the value of the name input
    const userName        = (document.getElementById("name") as HTMLInputElement).value;
    const userProfession  = (document.getElementById("professionInput") as HTMLInputElement).value;
    const userPhone       = (document.getElementById("userPhone") as HTMLInputElement).value;
    const userEmail       = (document.getElementById("userEmail") as HTMLInputElement).value;
    const userWebsite     = (document.getElementById("userWebsite") as HTMLInputElement).value;
    const userLinkedin    = (document.getElementById("userLinkedin") as HTMLInputElement).value;
    const userAddress     = (document.getElementById("userAddress") as HTMLInputElement).value;
    const profilePicInput = (document.getElementById("profilePicInput") as HTMLInputElement)?.files?.[0];

    const userYear1       = (document.getElementById("year-1") as HTMLInputElement).value;
    const userDegree1     = (document.getElementById("degree-1") as HTMLInputElement).value;
    const userUniversity  = (document.getElementById("university") as HTMLInputElement).value;
    const userYear2       = (document.getElementById("year-2") as HTMLInputElement).value;
    const userDegree2     = (document.getElementById("degree-2") as HTMLInputElement).value;
    const userCollege     = (document.getElementById("college") as HTMLInputElement).value;
    const userYear3       = (document.getElementById("year-3") as HTMLInputElement).value;
    const userDegree3     = (document.getElementById("degree-3") as HTMLInputElement).value;
    const userSchool      = (document.getElementById("school") as HTMLInputElement).value;

    const language1       = (document.getElementById("language-1") as HTMLInputElement).value;
    const level1          = (document.getElementById("level-1") as HTMLInputElement).value;
    const language2       = (document.getElementById("language-2") as HTMLInputElement).value;
    const level2          = (document.getElementById("level-2") as HTMLInputElement).value;
    const language3       = (document.getElementById("language-3") as HTMLInputElement).value;
    const level3          = (document.getElementById("level-3") as HTMLInputElement).value;

    const userAbout       = (document.getElementById("about") as HTMLInputElement).value;

    const userJobYear1    = (document.getElementById("job-year-1") as HTMLInputElement).value;
    const userJobCompany1  = (document.getElementById("job-company-1") as HTMLInputElement).value;
    const userPosition1   = (document.getElementById("position-1") as HTMLInputElement).value;
    const userAboutJob1   = (document.getElementById("about-job-1") as HTMLInputElement).value;
    const userJobYear2    = (document.getElementById("job-year-2") as HTMLInputElement).value;
    const userJobCompany2  = (document.getElementById("job-company-2") as HTMLInputElement).value;
    const userPosition2   = (document.getElementById("position-2") as HTMLInputElement).value;
    const userAboutJob2   = (document.getElementById("about-job-2") as HTMLInputElement).value;
    const userJobYear3    = (document.getElementById("job-year-3") as HTMLInputElement).value;
    const userJobCompany3  = (document.getElementById("job-company-3") as HTMLInputElement).value;
    const userPosition3   = (document.getElementById("position-3") as HTMLInputElement).value;
    const userAboutJob3   = (document.getElementById("about-job-3") as HTMLInputElement).value;

    const userSkill1      = (document.getElementById("skill-1") as HTMLInputElement).value;
    const userSkill1Level = (document.getElementById("skill-1-level") as HTMLInputElement).value;
    const userSkill2      = (document.getElementById("skill-2") as HTMLInputElement).value;
    const userSkill2Level = (document.getElementById("skill-2-level") as HTMLInputElement).value;
    const userSkill3      = (document.getElementById("skill-3") as HTMLInputElement).value;
    const userSkill3Level = (document.getElementById("skill-3-level") as HTMLInputElement).value;
    const userSkill4      = (document.getElementById("skill-4") as HTMLInputElement).value;
    const userSkill4Level = (document.getElementById("skill-4-level") as HTMLInputElement).value;
    const userSkill5      = (document.getElementById("skill-5") as HTMLInputElement).value;
    const userSkill5Level = (document.getElementById("skill-5-level") as HTMLInputElement).value;
    const userSkill6      = (document.getElementById("skill-6") as HTMLInputElement).value;
    const userSkill6Level = (document.getElementById("skill-6-level") as HTMLInputElement).value;


    // Store the name in local storage to access it on the next page
    localStorage.setItem("userName", userName);
    localStorage.setItem("userProfession", userProfession);
    localStorage.setItem("userPhone", userPhone);
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("userWebsite", userWebsite);
    localStorage.setItem("userLinkedin", userLinkedin);
    localStorage.setItem("userAddress", userAddress);

    const reader = new FileReader();

    reader.onload = (event: any) => {
      const base64String = event.target?.result || "";
      localStorage.setItem("profilePicInput", base64String);
    };

    reader.readAsDataURL(profilePicInput as File);
    // reader.readAsDataURL(profilePicInput);

    localStorage.setItem("userYear1", userYear1);
    localStorage.setItem("userDegree1", userDegree1);
    localStorage.setItem("userUniversity", userUniversity);
    localStorage.setItem("userYear2", userYear2);
    localStorage.setItem("userDegree2", userDegree2);
    localStorage.setItem("userCollege", userCollege);
    localStorage.setItem("userYear3", userYear3);
    localStorage.setItem("userDegree3", userDegree3);
    localStorage.setItem("userSchool", userSchool);

    localStorage.setItem("language1", language1);
    localStorage.setItem("level1", level1);
    localStorage.setItem("language2", language2);
    localStorage.setItem("level2", level2);
    localStorage.setItem("language3", language3);
    localStorage.setItem("level3", level3);

    localStorage.setItem("userAbout", userAbout);

    localStorage.setItem("userJobYear1", userJobYear1);
    localStorage.setItem("userJobCompany1", userJobCompany1);
    localStorage.setItem("userPosition1", userPosition1);
    localStorage.setItem("userAboutJob1", userAboutJob1);
    localStorage.setItem("userJobYear2", userJobYear2);
    localStorage.setItem("userJobCompany2", userJobCompany2);
    localStorage.setItem("userPosition2", userPosition2);
    localStorage.setItem("userAboutJob2", userAboutJob2);
    localStorage.setItem("userJobYear3", userJobYear3);
    localStorage.setItem("userJobCompany3", userJobCompany3);
    localStorage.setItem("userPosition3", userPosition3);
    localStorage.setItem("userAboutJob3", userAboutJob3);

    localStorage.setItem("userSkill1", userSkill1);
    localStorage.setItem("userSkill1Level", userSkill1Level);
    localStorage.setItem("userSkill2", userSkill2);
    localStorage.setItem("userSkill2Level", userSkill2Level);
    localStorage.setItem("userSkill3", userSkill3);
    localStorage.setItem("userSkill3Level", userSkill3Level);
    localStorage.setItem("userSkill4", userSkill4);
    localStorage.setItem("userSkill4Level", userSkill4Level);
    localStorage.setItem("userSkill5", userSkill5);
    localStorage.setItem("userSkill5Level", userSkill5Level);
    localStorage.setItem("userSkill6", userSkill6);
    localStorage.setItem("userSkill6Level", userSkill6Level);
    // Redirect to the next page
    window.location.href = "user-resume.html";
});