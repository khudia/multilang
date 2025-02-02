(function () {
  const scriptSrc = document.currentScript.src;
  const params = new URL(scriptSrc).searchParams.get("variants");
  const languages = params ? params.split(",") : ["en"]; 

  const defaultLanguage = languages[0];

  function getLanguage() {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("lang="))
      ?.split("=")[1];
    return cookieValue || defaultLanguage;
  }

  function setLanguage(lang) {
    document.cookie = `lang=${lang}; path=/; max-age=2147483647`; 
    window.multilang = lang; 
    applyLanguage(lang);
  }

  function applyLanguage(lang) {
    const elements = document.querySelectorAll(`[data-multilang${lang}]`);
    elements.forEach((element) => {
      const attribute = `data-multilang${lang}`;
      if (element.hasAttribute(attribute)) {
        element.textContent = element.getAttribute(attribute);
      }
    });
  }

  const currentLang = getLanguage();
  window.multilang = currentLang;
  applyLanguage(currentLang);

  languages.forEach((lang) => {
    const buttons = document.querySelectorAll(`.multilang${lang}`);
    buttons.forEach((button) => {
      button.addEventListener("click", () => setLanguage(lang));
    });
  });
})();
