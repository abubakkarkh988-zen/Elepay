// MOBILE NAVIGATION

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {
  const isOpen = navigation.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", String(isOpen));

  menuButton.textContent = isOpen ? "×" : "☰";
});

// CLOSE MENU AFTER CLICKING A NAVIGATION LINK

navigation.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("open");

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.textContent = "☰";
  });
});

// COPY REFERRAL LINK

const copyButton = document.getElementById("copyLink");

copyButton.addEventListener("click", async function () {
  const referralURL = "https://dub.sh/elepay?inviteCode=SxFfPA";

  try {
    await navigator.clipboard.writeText(referralURL);

    copyButton.textContent = "Copied!";

    setTimeout(function () {
      copyButton.textContent = "Copy Link";
    }, 2000);
  } catch (error) {
    window.prompt("Copy your referral link:", referralURL);
  }
});
