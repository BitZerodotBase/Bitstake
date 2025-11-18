document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('walletModal')) {
    console.log('Wallet modal already exists. Skipping injection.');
    return;
  }

  const modalHTML = `
    <div id="walletModal" class="modal">
      <div class="modal-content terminal-card">
        <div class="card-header">
          <span class="card-title">C:\\CONNECT\\SELECT_PROVIDER</span>
          <span class="close-button" onclick="closeWalletModal()">&times;</span>
        </div>
        <div class="card-body">
          <p>> Select a wallet to connect:</p>
          <div class="wallet-options">
            <button class="wallet-button" onclick="connectMetaMask()">
              <img src="https://raw.githubusercontent.com/BitZerodotBase/bitzerowalletmodal/refs/heads/main/images/metamask.png" alt="MetaMask">
              MetaMask
            </button>
            <button class="wallet-button" onclick="connectOkx()">
              <img src="https://raw.githubusercontent.com/BitZerodotBase/bitzerowalletmodal/refs/heads/main/images/okx-wallet.png" alt="OKX">
              OKX Wallet
            </button>
            <button class="wallet-button" onclick="connectBitget()">
              <img src="https://raw.githubusercontent.com/BitZerodotBase/bitzerowalletmodal/refs/heads/main/images/bitget-wallet.jpg" alt="Bitget">
              Bitget Wallet
            </button>
            <button class="wallet-button" onclick="connectRabby()">
              <img src="https://raw.githubusercontent.com/BitZerodotBase/bitzerowalletmodal/refs/heads/main/images/rabby-wallet.png" alt="Rabby">
              Rabby Wallet
            </button>
            <button class="wallet-button" onclick="connectBase()">
              <img src="https://raw.githubusercontent.com/BitZerodotBase/bitzerowalletmodal/refs/heads/main/images/coinbase-wallet.png" alt="Base/Coinbase Icon">
              Base Wallet (Coinbase)
            </button>
            <a href="https://github.com/BitZerodotBase/bitzerowalletmodal/blob/main/bitzero-wallet-modal.js" target="_blank" title="View bitzerowalletmodal Code">View Code</a>
          </div>
        </div>
      </div>
    </div>
  `;

  const modalContainer = document.createElement('div');
  modalContainer.innerHTML = modalHTML;
  if (modalContainer.firstElementChild) {
    document.body.appendChild(modalContainer.firstElementChild);
  }
});