(function () {
  // 1. Inyectar estilos de KaTeX
  const katexCss = document.createElement("link");
  katexCss.rel = "stylesheet";
  katexCss.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css";
  document.head.appendChild(katexCss);

  function cargarScript(src, callback) {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = callback;
    document.head.appendChild(s);
  }

  // Carga de versiones seguras para CSP
  cargarScript("https://cdn.jsdelivr.net/npm/marked@12.0.0/marked.min.js");
  cargarScript("https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js");

  // 2. Control de apertura/cierre
  window.alternarChatBot = function () {
    const win = document.getElementById("bot-window");
    if (!win) return;
    if (win.style.display === "none" || win.style.display === "") {
      win.style.display = "flex";
      const inp = document.getElementById("bot-input");
      if (inp) inp.focus();
    } else {
      win.style.display = "none";
    }
  };

  // 3. Parser matemático seguro (sin eval ni auto-render)
  function renderMatematicaSegura(texto) {
    if (!window.katex) return texto;

    // Procesar ecuaciones en bloque: $$...$$
    texto = texto.replace(/\$\$([\s\S]+?)\$\$/g, function (match, ecuacion) {
      try {
        return window.katex.renderToString(ecuacion.trim(), { displayMode: true, throwOnError: false });
      } catch (e) {
        return match;
      }
    });

    // Procesar ecuaciones en línea: $...$
    texto = texto.replace(/\$([^\$\n]+?)\$/g, function (match, ecuacion) {
      try {
        return window.katex.renderToString(ecuacion.trim(), { displayMode: false, throwOnError: false });
      } catch (e) {
        return match;
      }
    });

    return texto;
  }

  function montarUI() {
    if (document.getElementById("bot-widget")) return;

    const div = document.createElement("div");
    div.id = "bot-widget";
    div.style.cssText = "position: fixed; bottom: 25px; right: 25px; z-index: 99999; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;";

    div.innerHTML = `
      <button onclick="window.alternarChatBot()" id="bot-toggle" aria-label="Abrir asistente de geología" style="background: #1a73e8; color: white; border: none; border-radius: 50%; width: 56px; height: 56px; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.3); font-size: 26px; display: flex; align-items: center; justify-content: center; outline: none;">💬</button>
      
      <section id="bot-window" role="dialog" aria-label="Ventana de chat del tutor virtual" style="display: none; width: 360px; height: 490px; background: #ffffff; border: 1px solid #d0d7de; border-radius: 12px; box-shadow: 0 8px 30px rgba(0,0,0,0.25); flex-direction: column; overflow: hidden; margin-bottom: 12px;">
        <header style="background: #1a73e8; color: white; padding: 12px 16px; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
          <span>Tutor Geología Estructural</span>
          <button onclick="window.alternarChatBot()" aria-label="Cerrar ventana de chat" style="background: none; border: none; color: white; cursor: pointer; font-size: 20px; line-height: 1; padding: 0;">&times;</button>
        </header>
        
        <div id="bot-messages" aria-live="polite" style="flex: 1; padding: 14px; overflow-y: auto; font-size: 13.5px; display: flex; flex-direction: column; gap: 10px; background: #fafbfc; line-height: 1.5;">
          <div style="align-self: flex-start; background: #f0f2f5; padding: 8px 12px; border-radius: 8px; max-width: 90%; color: #24292f;">
            Hola, soy el tutor virtual del apunte. ¿Qué tema o duda de geología estructural deseas consultar?
          </div>
        </div>
        
        <form onsubmit="event.preventDefault();" style="display: flex; margin: 0; border-top: 1px solid #d0d7de; background: white;">
          <label for="bot-input" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0;">Escribe tu consulta sobre geología estructural</label>
          <input type="text" id="bot-input" placeholder="Escribe tu consulta..." autocomplete="off" style="flex: 1; border: none; padding: 12px; outline: none; font-size: 14px;">
          <button type="button" id="bot-send" aria-label="Enviar mensaje" style="background: #1a73e8; color: white; border: none; padding: 0 16px; cursor: pointer; font-weight: bold;">➤</button>
        </form>
      </section>
    `;

    document.body.appendChild(div);

    const API_URL = "https://bot-geologia-estructural.onrender.com/api/chat";

    const input = document.getElementById("bot-input");
    const sendBtn = document.getElementById("bot-send");
    const messages = document.getElementById("bot-messages");

    async function enviar() {
      const txt = input.value.trim();
      if (!txt) return;

      const userMsg = document.createElement("div");
      userMsg.style.cssText = "align-self: flex-end; background: #ddf4ff; color: #0969da; padding: 8px 12px; border-radius: 8px; max-width: 85%; word-break: break-word;";
      userMsg.textContent = txt;
      messages.appendChild(userMsg);
      input.value = "";
      messages.scrollTop = messages.scrollHeight;

      const loadId = "load-" + Date.now();
      const loadMsg = document.createElement("div");
      loadMsg.id = loadId;
      loadMsg.style.cssText = "align-self: flex-start; background: #f0f2f5; color: #57606a; padding: 8px 12px; border-radius: 8px; font-style: italic;";
      loadMsg.textContent = "Consultando apunte...";
      messages.appendChild(loadMsg);
      messages.scrollTop = messages.scrollHeight;

      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pregunta: txt })
        });
        const data = await res.json();
        document.getElementById(loadId)?.remove();

        const botMsg = document.createElement("div");
        botMsg.style.cssText = "align-self: flex-start; background: #f0f2f5; color: #24292f; padding: 10px 14px; border-radius: 8px; max-width: 90%; word-break: break-word;";

        let respuestaProcesada = data.respuesta;
        respuestaProcesada = renderMatematicaSegura(respuestaProcesada);

        if (window.marked && typeof window.marked.parse === "function") {
          botMsg.innerHTML = window.marked.parse(respuestaProcesada);
        } else {
          botMsg.innerHTML = respuestaProcesada;
        }

        messages.appendChild(botMsg);
      } catch (err) {
        document.getElementById(loadId)?.remove();
        const errMsg = document.createElement("div");
        errMsg.style.cssText = "align-self: flex-start; background: #ffebe9; color: #cf222e; padding: 8px 12px; border-radius: 8px;";
        errMsg.textContent = "Error al conectar con el servidor.";
        messages.appendChild(errMsg);
      }
      messages.scrollTop = messages.scrollHeight;
    }

    sendBtn.onclick = enviar;
    input.onkeydown = (e) => { if (e.key === "Enter") enviar(); };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", montarUI);
  } else {
    montarUI();
  }
})();