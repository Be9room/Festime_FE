const TEL_REGEXP = /^tel:\+82\d{1,2}\d{3,4}\d{4}$/;
const MAIL_REGEXP = /^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const SHARE_REGEXP = /^share$/;
const HTTPS_REGEXP = /^https?:\/\/.+$/;

const handleNavigation = (to, navigate) => {
  if (TEL_REGEXP.test(to) || MAIL_REGEXP.test(to)) {
    window.location.href = to;
  } else if (HTTPS_REGEXP.test(to)) {
    window.open(to, "_blank");
  } else if (SHARE_REGEXP.test(to)) {
    if (navigator.share) {
      navigator
        .share({
          title: "2024 인하대학교 비룡제",
          url: window.location.href
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else alert("Sharing is not supported in this browser.");
  } else navigate(to);
};

export default handleNavigation;
