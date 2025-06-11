
// 📱 মোবাইল মেনু টগল ফাংশন
function toggleMenu() {
  const menu = document.querySelector('.main-menu ul');
  menu.classList.toggle('show-menu');
}

// ✅ বর্তমান পেজ active হাইলাইট
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".main-menu a");
  const current = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});


//About Academic
  function toggleReadMore() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more-text");
    const btnText = document.getElementById("readBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      btnText.innerText = "আরও পড়ুন";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      btnText.innerText = "কম দেখান";
    }
  }

