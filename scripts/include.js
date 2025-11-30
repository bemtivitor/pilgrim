function includeHTML() {
  document.querySelectorAll("[data-include]").forEach(async (el) => {
    const file = el.getAttribute("data-include");
    const html = await fetch(file).then((r) => r.text());

    el.innerHTML = html;

    el.querySelectorAll("script").forEach((oldScript) => {
      const newScript = document.createElement("script");

      if (oldScript.src) {
        newScript.src = oldScript.src;
      } else {
        newScript.textContent = oldScript.textContent;
      }

      document.body.appendChild(newScript);
      oldScript.remove();
    });
  });
}

includeHTML();
