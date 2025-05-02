(function () {
  const scriptSrc = document.currentScript.src;
  const params = new URL(scriptSrc).searchParams;
  const userId = params.get("id");

  if (!userId) return console.error("No widget ID provided.");

  fetch(`https://voizly-frontend.vercel.app/api/widgets/${userId}`)
    .then((res) => res.json())
    .then((config) => {
      if (!config) return;

      const container = document.createElement("div");
      container.id = "contact-widget";
      document.body.appendChild(container);

      const shadow = container.attachShadow({ mode: "open" });

      // CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://voizly-frontend.vercel.app/css/widget-iframe.css";
      shadow.appendChild(link);

      // Button to toggle widget

      const toggleBtn = document.createElement("button");
      
      toggleBtn.setAttribute("style", `background-color:${config.brand_color};`)
      toggleBtn.id = "toggle-btn";
      toggleBtn.innerHTML = `<img src="https://voizly-frontend.vercel.app/icons/logo_.png" width="30px"/>`
      // toggleBtn.textContent = "✉️";
      shadow.appendChild(toggleBtn);

  // Floating widget frame
const widgetContainer = document.createElement("div");
widgetContainer.id = "widget-frame-container";
widgetContainer.style.display = "none"; // <-- Ensure it's hidden initially

const iframe = document.createElement("iframe");
iframe.src = `https://voizly-frontend.vercel.app/welcome?id=${userId}`;
widgetContainer.appendChild(iframe);
shadow.appendChild(widgetContainer);


      // Toggle logic
      toggleBtn.addEventListener("click", () => {
        widgetContainer.style.display =
          widgetContainer.style.display === "none" ? "block" : "none";
      });
    })
    .catch((e) => {
      console.error("Widget load error:", e);
    });
})();
