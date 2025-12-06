function includeHTML() {
  document.querySelectorAll("[data-include]").forEach(async (el) => {
    const file = el.getAttribute("data-include");
    const html = await fetch(file).then((r) => r.text());

    el.innerHTML = html;

    el.querySelectorAll("script").forEach((oldScript) => {
      const newScript = document.createElement("script");

      for (const { name, value } of oldScript.attributes) {
        newScript.setAttribute(name, value);
      }

      if (!oldScript.src) {
        newScript.textContent = oldScript.textContent;
      }

      oldScript.replaceWith(newScript);
    });
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);
