(function () {
  // 1. Inyectar dependencias (KaTeX y Marked) en segundo plano
  const katexCss = document.createElement("link");
  katexCss.rel = "stylesheet";
  katexCss.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css";
  document.head.appendChild(katexCss);

  function cargarScript(src) {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    document.head.appendChild(s);
  }

  cargarScript("https://cdn.jsdelivr.net/npm/marked/marked.min.js");
  cargarScript("https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js");
  cargarScript("https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js");

  // 2. Construir e inicializar el widget
  function construirWidget() {
    if (document.getElementById("bot-widget")) return;

    const contenedor = document.createElement("div");
    contenedor.id = "bot-widget";
    contenedor.style.cssText = "position: fixed; bottom: 25px; right: 25px; z-index: 9999; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;";
    
    contenedor.innerHTML = `
      <button id="bot-toggle" style="background: #1a73e8; color: white; border: none; border-radius: 50%; width: 56px; height: 56px; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.25); font-size: 26px; display: flex; align-items: center; justify-content: center; outline: none;">💬</button>
      
      <div id="bot-window" style="display: none; width: 360px; height: 500px; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; box-shadow: 0 8px 30px rgba(0,0,0,0.2); flex-direction: column; overflow: hidden; margin-bottom: 12px;">
        <div style="background: #1a73e8; color: white; padding: 14px 16px; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
          <span>Tutor Geología Estructural</span>
          <span id="bot-close" style="cursor: pointer; font-size: 20px; line-height: 1;">&times;</span>
        </div>
        
        <div id="bot-messages" style="flex: 1; padding: 14px; overflow-y: auto; font-size: 13.5px; display: flex; flex-direction: column; gap: 10px; background: #fdfdfd; line-height: 1.5;">
          <div style="align-self: flex-start; background: #f1f3f4; padding: 8px 12px; border-radius: 8px; max-width: 90%; color: #333;">
            Hola, soy el tutor virtual del apunte. ¿Qué tema o duda de geología estructural deseas consultar?
          </div>
        </div>
        
        <div style="display: flex; border-top: 1px solid #e0e0e0; background: white;">
          <input type="text" id="bot-input" placeholder="Escribe tu consulta..." style="flex: 1; border: none; padding: 12px; outline: none; font-size: 14px;">
          <button id="bot-send" style="background: #1a73e8; color: white; border: none; padding: 0 16px; cursor: pointer; font-weight: bold;">➤</button>
        </div>
      </div>
    `;

    document.body.appendChild(contenedor);

    // REEMPLAZAR CON TU URL ACTIVA DE RENDER:
    const API_URL = "https://bot-geologia-estructural.onrender.com";

    const toggleBtn = document.getElementById("bot-toggle");
    const closeBtn = document.getElementById("bot-close");
    const botWindow = document.getElementById("bot-window");
    const sendBtn = document.getElementById("bot-send");
    const input = document.getElementById("bot-input");
    const messages = document.getElementById("bot-messages");

    // Lógica robusta de apertura/cierre
    toggleBtn.addEventListener("click", () => {
      const estaOculto = window.getComputedStyle(botWindow).display === "none";
      botWindow.style.display = estaOculto ? "flex" : "none";
      if (estaOculto) {
        input.focus();
      }
    });

    closeBtn.addEventListener("click", () => {
      botWindow.style.display = "none";
    });

    function renderMatematica(elemento) {
      if (window.renderMathInElement) {
        window.renderMathInElement(elemento, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\[", right: "\\]", display: true },
            { left: "\\(", right: "\\)", display: false }
          ],
          throwOnError: false
        });
      }
    }

    async function enviar() {
      const txt = input.value.trim();
      if (!txt) return;

      const userDiv = document.createElement("div");
      userDiv.style.cssText = "align-self: flex-end; background: #e8f0fe; color: #1967d2; padding: 8px 12px; border-radius: 8px; max-width: 85%; word-break: break-word;";
      userDiv.textContent = txt;
      messages.appendChild(userDiv);
      input.value = "";
      messages.scrollTop = messages.scrollHeight;

      const loadId = "load-" + Date.now();
      const loadDiv = document.createElement("div");
      loadDiv.id = loadId;
      loadDiv.style.cssText = "align-self: flex-start; background: #f1f3f4; color: #666; padding: 8px 12px; border-radius: 8px; font-style: italic;";
      loadDiv.textContent = "Consultando apunte...";
      messages.appendChild(loadDiv);
      messages.scrollTop = messages.scrollHeight;

      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pregunta: txt })
        });
        const data = await res.json();
        document.getElementById(loadId)?.remove();

        const botDiv = document.createElement("div");
        botDiv.style.cssText = "align-self: flex-start; background: #f1f3f4; color: #202124; padding: 10px 14px; border-radius: 8px; max-width: 90%; word-break: break-word;";

        // Renderizar con marked si ya cargó; fallback a texto plano si aún descarga
        if (window.marked && typeof window.marked.parse === "function") {
          botDiv.innerHTML = window.marked.parse(data.respuesta);
        } else {
          botDiv.innerText = data.respuesta;
        }

        renderMatematica(botDiv);
        messages.appendChild(botDiv);
      } catch (e) {
        document.getElementById(loadId)?.remove();
        const errDiv = document.createElement("div");
        errDiv.style.cssText = "align-self: flex-start; background: #fce8e6; color: #c5221f; padding: 8px 12px; border-radius: 8px;";
        errDiv.textContent = "Error al conectar con el servidor.";
        messages.appendChild(errDiv);
      }
      messages.scrollTop = messages.scrollHeight;
    }

    sendBtn.addEventListener("click", enviar);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") enviar();
    });
  }

  // Ejecutar inmediatamente si el DOM ya está listo, o escuchar el evento
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", construirWidget);
  } else {
    construirWidget();
  }
})();