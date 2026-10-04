/**
 * OmniQR Studio — Burgundy Elegance Design System
 * Powered by QRCodeStyling with real-time reactive updates
 */

(function () {
  'use strict';

  // SVG Preset Logos (Clean vector Data URIs styled with Burgundy tones)
  // SVG Preset Logos (Clean vector Data URIs styled with Burgundy tones)
  const PRESET_ICONS = {
    globe: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%237A1736" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    link: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%237A1736" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
    github: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23171717"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
    youtube: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%237A1736"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    twitter: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23171717"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    instagram: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%237A1736"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    whatsapp: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%237A1736"><path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.101-.476-.15-.677.151-.2.301-.777.979-.953 1.18-.175.201-.351.226-.652.075-.301-.151-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.131-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.201.05-.377-.025-.527-.075-.151-.677-1.632-.928-2.235-.245-.588-.494-.509-.677-.518-.175-.009-.377-.01-.578-.01-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.201 2.123 3.242 5.143 4.547.719.31 1.28.496 1.718.636.722.23 1.378.198 1.9.12.58-.088 1.78-.727 2.03-1.43.25-.704.25-1.307.175-1.431-.075-.125-.276-.201-.577-.352zm-5.467 7.618a9.96 9.96 0 0 1-5.088-1.391l-.365-.216-3.781.991 1.008-3.687-.237-.377a9.96 9.96 0 1 1 18.423-5.297c0 5.511-4.479 9.977-10 9.977z"/></svg>`,
    wifi: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%237A1736" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`
  };

  // State Management with Burgundy Elegance defaults
  const state = {
    contentType: 'url',
    url: 'https://antigravity.google/',
    width: 270,
    height: 270,
    margin: 10,
    dotType: 'rounded',
    colorType: 'gradient',
    dotColor1: '#7A1736', // Primary Burgundy
    dotColor2: '#541126', // Deep Burgundy
    gradientType: 'linear',
    gradientRotation: 45,
    bgColor: '#ffffff',
    bgTransparent: false,
    cornerSquareType: 'extra-rounded',
    cornerSquareColor: '#7A1736',
    cornerDotType: 'dot',
    cornerDotColor: '#7A1736',
    customCornerColors: true,
    logo: null,
    logoSize: 0.35,
    logoMargin: 3,
    hideBgDots: true,
    errorCorrectionLevel: 'H',
    selectedExportFormat: 'png',
    history: JSON.parse(localStorage.getItem('omni_history') || '[]')
  };

  // DOM Elements
  const el = {
    // Content Types Nav & Panels
    typeNavBtns: document.querySelectorAll('.type-nav-btn'),
    typePanels: document.querySelectorAll('.content-type-panel'),
    contentTypeLabel: document.getElementById('contentTypeLabel'),
    urlStatusPill: document.getElementById('urlStatusPill'),

    // Website / URL Bar
    urlInput: document.getElementById('urlInput'),
    clearUrlBtn: document.getElementById('clearUrlBtn'),
    pasteUrlBtn: document.getElementById('pasteUrlBtn'),
    generateBtn: document.getElementById('generateBtn'),

    // Photo / Image Elements
    imageDropzone: document.getElementById('imageDropzone'),
    imageFileInput: document.getElementById('imageFileInput'),
    imageFilePreview: document.getElementById('imageFilePreview'),
    imageFileThumb: document.getElementById('imageFileThumb'),
    imageFileName: document.getElementById('imageFileName'),
    imageFileMeta: document.getElementById('imageFileMeta'),
    imageUploadStatus: document.getElementById('imageUploadStatus'),
    removeImageFileBtn: document.getElementById('removeImageFileBtn'),
    imageUrlInput: document.getElementById('imageUrlInput'),
    loadImageUrlBtn: document.getElementById('loadImageUrlBtn'),

    // Video Elements
    videoDropzone: document.getElementById('videoDropzone'),
    videoFileInput: document.getElementById('videoFileInput'),
    videoFilePreview: document.getElementById('videoFilePreview'),
    videoPreviewPlayer: document.getElementById('videoPreviewPlayer'),
    videoFileName: document.getElementById('videoFileName'),
    videoFileMeta: document.getElementById('videoFileMeta'),
    videoUploadStatus: document.getElementById('videoUploadStatus'),
    removeVideoFileBtn: document.getElementById('removeVideoFileBtn'),
    videoUrlInput: document.getElementById('videoUrlInput'),
    loadVideoUrlBtn: document.getElementById('loadVideoUrlBtn'),

    // Audio Elements
    audioDropzone: document.getElementById('audioDropzone'),
    audioFileInput: document.getElementById('audioFileInput'),
    audioFilePreview: document.getElementById('audioFilePreview'),
    audioPreviewPlayer: document.getElementById('audioPreviewPlayer'),
    audioFileName: document.getElementById('audioFileName'),
    audioFileMeta: document.getElementById('audioFileMeta'),
    audioUploadStatus: document.getElementById('audioUploadStatus'),
    removeAudioFileBtn: document.getElementById('removeAudioFileBtn'),
    audioUrlInput: document.getElementById('audioUrlInput'),
    loadAudioUrlBtn: document.getElementById('loadAudioUrlBtn'),

    // Document / File Elements
    docDropzone: document.getElementById('docDropzone'),
    docFileInput: document.getElementById('docFileInput'),
    docFilePreview: document.getElementById('docFilePreview'),
    docFileName: document.getElementById('docFileName'),
    docFileMeta: document.getElementById('docFileMeta'),
    docUploadStatus: document.getElementById('docUploadStatus'),
    removeDocFileBtn: document.getElementById('removeDocFileBtn'),
    docUrlInput: document.getElementById('docUrlInput'),
    loadDocUrlBtn: document.getElementById('loadDocUrlBtn'),

    // Wi-Fi Elements
    wifiSsidInput: document.getElementById('wifiSsidInput'),
    wifiPasswordInput: document.getElementById('wifiPasswordInput'),
    wifiEncryptionSelect: document.getElementById('wifiEncryptionSelect'),
    wifiHiddenCheck: document.getElementById('wifiHiddenCheck'),
    applyWifiBtn: document.getElementById('applyWifiBtn'),

    // Contact (vCard) Elements
    vcardNameInput: document.getElementById('vcardNameInput'),
    vcardPhoneInput: document.getElementById('vcardPhoneInput'),
    vcardEmailInput: document.getElementById('vcardEmailInput'),
    vcardOrgInput: document.getElementById('vcardOrgInput'),
    vcardTitleInput: document.getElementById('vcardTitleInput'),
    vcardUrlInput: document.getElementById('vcardUrlInput'),
    applyVcardBtn: document.getElementById('applyVcardBtn'),

    // Plain Text Elements
    plainTextInput: document.getElementById('plainTextInput'),
    plainTextCount: document.getElementById('plainTextCount'),
    applyTextBtn: document.getElementById('applyTextBtn'),

    // QR Code Container
    qrContainer: document.getElementById('qrCodeContainer'),
    qrReadout: document.getElementById('qrUrlReadout'),
    copyReadoutBtn: document.getElementById('copyReadoutBtn'),
    testScannerLink: document.getElementById('testScannerLink'),

    // Download & Actions
    downloadPngBtn: document.getElementById('downloadPngBtn'),
    downloadSvgBtn: document.getElementById('downloadSvgBtn'),
    downloadJpegBtn: document.getElementById('downloadJpegBtn'),
    copyQrBtn: document.getElementById('copyQrBtn'),
    printQrBtn: document.getElementById('printQrBtn'),

    // Tabs
    tabButtons: document.querySelectorAll('.nav-tab-btn'),
    tabPanes: document.querySelectorAll('.tab-pane'),

    // Color Pickers
    colorTypeToggles: document.querySelectorAll('input[name="colorType"]'),
    gradientControls: document.getElementById('gradientControls'),
    dotColor1Input: document.getElementById('dotColor1Input'),
    dotColor1Text: document.getElementById('dotColor1Text'),
    dotColor2Input: document.getElementById('dotColor2Input'),
    dotColor2Text: document.getElementById('dotColor2Text'),
    gradRotationSlider: document.getElementById('gradRotationSlider'),
    gradRotationVal: document.getElementById('gradRotationVal'),
    bgColorInput: document.getElementById('bgColorInput'),
    bgColorText: document.getElementById('bgColorText'),
    bgTransparentCheck: document.getElementById('bgTransparentCheck'),
    paletteButtons: document.querySelectorAll('.palette-btn'),

    // Styles & Shapes
    dotStyleTiles: document.querySelectorAll('.dot-style-tile'),
    cornerSquareTiles: document.querySelectorAll('.corner-square-tile'),
    cornerDotTiles: document.querySelectorAll('.corner-dot-tile'),
    cornerColorsToggle: document.getElementById('cornerColorsToggle'),
    cornerColorControls: document.getElementById('cornerColorControls'),
    cornerSquareColorInput: document.getElementById('cornerSquareColorInput'),
    cornerSquareColorText: document.getElementById('cornerSquareColorText'),
    cornerDotColorInput: document.getElementById('cornerDotColorInput'),
    cornerDotColorText: document.getElementById('cornerDotColorText'),

    // Logo & Branding
    logoPresetBtns: document.querySelectorAll('.logo-preset-btn'),
    logoFileInput: document.getElementById('logoFileInput'),
    logoDropzone: document.getElementById('logoDropzone'),
    logoPreviewBar: document.getElementById('logoPreviewBar'),
    logoThumb: document.getElementById('logoThumb'),
    removeLogoBtn: document.getElementById('removeLogoBtn'),
    logoSizeSlider: document.getElementById('logoSizeSlider'),
    logoSizeVal: document.getElementById('logoSizeVal'),
    logoMarginSlider: document.getElementById('logoMarginSlider'),
    logoMarginVal: document.getElementById('logoMarginVal'),
    hideDotsToggle: document.getElementById('hideDotsToggle'),

    // Advanced & Export
    ecLevelSelect: document.getElementById('ecLevelSelect'),
    qrMarginSlider: document.getElementById('qrMarginSlider'),
    qrMarginVal: document.getElementById('qrMarginVal'),
    exportSizeSelect: document.getElementById('exportSizeSelect'),

    // History
    historyList: document.getElementById('historyList'),
    clearHistoryBtn: document.getElementById('clearHistoryBtn'),

    // Reset button
    themeToggleBtn: document.getElementById('themeToggleBtn'),

    // Toast Container
    toastContainer: document.getElementById('toastContainer')
  };

  // Initialize QR Code Instance
  let qrCode = null;

  function buildQrOptions(exportDimension = null) {
    const size = exportDimension || state.width;
    
    // Dot options
    const dotsOptions = {
      type: state.dotType
    };

    if (state.colorType === 'gradient') {
      const rad = (state.gradientRotation * Math.PI) / 180;
      dotsOptions.gradient = {
        type: state.gradientType,
        rotation: rad,
        colorStops: [
          { offset: 0, color: state.dotColor1 },
          { offset: 1, color: state.dotColor2 }
        ]
      };
    } else {
      dotsOptions.color = state.dotColor1;
    }

    // Corner Square Options
    const cornersSquareOptions = {
      type: state.cornerSquareType
    };
    if (state.customCornerColors) {
      cornersSquareOptions.color = state.cornerSquareColor;
    } else {
      cornersSquareOptions.color = state.dotColor1;
    }

    // Corner Dot Options
    const cornersDotOptions = {
      type: state.cornerDotType
    };
    if (state.customCornerColors) {
      cornersDotOptions.color = state.cornerDotColor;
    } else {
      cornersDotOptions.color = state.dotColor2 || state.dotColor1;
    }

    // Background Options
    const backgroundOptions = {
      color: state.bgTransparent ? 'rgba(0,0,0,0)' : state.bgColor
    };

    // Image options
    const imageOptions = {
      hideBackgroundDots: state.hideBgDots,
      imageSize: state.logoSize,
      margin: state.logoMargin,
      crossOrigin: 'anonymous'
    };

    return {
      width: size,
      height: size,
      type: 'canvas',
      data: state.url || 'https://antigravity.google/',
      margin: state.margin,
      qrOptions: {
        errorCorrectionLevel: state.errorCorrectionLevel
      },
      image: state.logo || undefined,
      imageOptions: imageOptions,
      dotsOptions: dotsOptions,
      cornersSquareOptions: cornersSquareOptions,
      cornersDotOptions: cornersDotOptions,
      backgroundOptions: backgroundOptions
    };
  }

  function initQRCode() {
    if (typeof QRCodeStyling === 'undefined') {
      console.error('QRCodeStyling library is not loaded');
      showToast('QR code engine failed to load', 'warning');
      return;
    }

    el.qrContainer.innerHTML = '';
    qrCode = new QRCodeStyling(buildQrOptions());
    qrCode.append(el.qrContainer);

    updateCheckerboard();
    updateReadout();
  }

  function refreshQRCode(saveHistory = false) {
    if (!qrCode) return;

    const options = buildQrOptions();
    qrCode.update(options);

    updateCheckerboard();
    updateReadout();

    if (saveHistory && state.url) {
      addHistoryItem(state.url);
    }
  }

  function updateCheckerboard() {
    if (state.bgTransparent) {
      el.qrContainer.classList.add('transparent-checker');
    } else {
      el.qrContainer.classList.remove('transparent-checker');
    }
  }

  function updateReadout() {
    const rawVal = (state.url || '').trim();
    let displayTitle = rawVal;
    let pillText = 'Valid Link';
    let pillClass = 'url-status-pill valid';
    let isClickableLink = false;

    if (!rawVal) {
      displayTitle = 'No content specified';
      pillText = 'Empty Payload';
      pillClass = 'url-status-pill empty';
    } else if (rawVal.startsWith('WIFI:')) {
      const matchSsid = rawVal.match(/S:([^;]+)/);
      const ssidName = matchSsid ? matchSsid[1] : 'Network';
      displayTitle = `📶 Wi-Fi Network: ${ssidName}`;
      pillText = 'Wi-Fi Config';
      pillClass = 'url-status-pill valid';
    } else if (rawVal.startsWith('BEGIN:VCARD')) {
      const matchFn = rawVal.match(/FN:([^\n\r]+)/);
      const personName = matchFn ? matchFn[1] : 'Contact';
      displayTitle = `👤 Contact Card: ${personName}`;
      pillText = 'vCard Contact';
      pillClass = 'url-status-pill valid';
    } else if (rawVal.startsWith('data:image/')) {
      displayTitle = `🖼️ Photo / Image (Embedded Data)`;
      pillText = 'Image QR';
      pillClass = 'url-status-pill valid';
    } else if (rawVal.startsWith('blob:') || rawVal.includes('.mp4') || rawVal.includes('youtube.com') || rawVal.includes('youtu.be')) {
      displayTitle = rawVal.length > 55 ? rawVal.substring(0, 52) + '...' : rawVal;
      pillText = state.contentType === 'video' ? 'Video Media' : 'Valid Link';
      pillClass = 'url-status-pill valid';
      isClickableLink = isValidHttpUrl(rawVal);
    } else if (isValidHttpUrl(rawVal)) {
      displayTitle = rawVal;
      pillText = 'Valid URL';
      pillClass = 'url-status-pill valid';
      isClickableLink = true;
    } else {
      displayTitle = rawVal.length > 55 ? rawVal.substring(0, 52) + '...' : rawVal;
      pillText = 'Plain Text / Data';
      pillClass = 'url-status-pill valid';
    }

    if (el.qrReadout) {
      el.qrReadout.textContent = displayTitle;
      el.qrReadout.title = rawVal;
    }

    if (el.testScannerLink) {
      if (isClickableLink) {
        el.testScannerLink.href = rawVal;
        el.testScannerLink.style.display = 'inline-flex';
      } else {
        el.testScannerLink.href = '#';
        el.testScannerLink.style.display = 'none';
      }
    }

    el.urlStatusPill.className = pillClass;
    el.urlStatusPill.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      ${pillText}
    `;
  }

  function isValidHttpUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === 'http:' || url.protocol === 'https:';
  }

  function normalizeUrl(input) {
    let trimmed = input.trim();
    if (!trimmed) return '';
    if (!/^https?:\/\//i.test(trimmed) && /^[\w-]+(\.[\w-]+)+[/#?]?.*$/i.test(trimmed)) {
      return 'https://' + trimmed;
    }
    return trimmed;
  }

  // Toast Notifications
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#750923" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
    } else if (type === 'warning') {
      iconSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A92737" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    } else {
      iconSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#750923" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
    }

    toast.innerHTML = `${iconSvg}<span>${message}</span>`;
    el.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastOut 0.24s ease-in forwards';
      setTimeout(() => toast.remove(), 240);
    }, 2800);
  }

  // Copy to Clipboard
  async function copyQrImageToClipboard() {
    if (!qrCode) return;
    try {
      showToast('Generating clipboard image...', 'info');
      const blob = await qrCode.getRawData('png');
      if (blob && navigator.clipboard && window.ClipboardItem) {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob })
        ]);
        showToast('QR Code copied to clipboard!', 'success');
      } else {
        qrCode.download({ name: 'qrcode', extension: 'png' });
        showToast('Saved as PNG', 'info');
      }
    } catch (err) {
      console.error('Clipboard copy failed:', err);
      showToast('Could not copy image. Downloading PNG.', 'warning');
      qrCode.download({ name: 'qrcode', extension: 'png' });
    }
  }

  // Export handling
  function downloadQR(format = 'png') {
    if (!qrCode) return;
    const targetSize = parseInt(el.exportSizeSelect.value, 10) || 600;
    
    const exportQr = new QRCodeStyling(buildQrOptions(targetSize));
    exportQr.download({
      name: `qrcode-burgundy-${Date.now()}`,
      extension: format
    });

    showToast(`Downloaded QR Code (${format.toUpperCase()})!`, 'success');
    addHistoryItem(state.url);
  }

  // History Management
  function addHistoryItem(url) {
    if (!url || !url.trim()) return;
    const existingIndex = state.history.findIndex(item => item.url === url);
    if (existingIndex > -1) {
      state.history.splice(existingIndex, 1);
    }

    state.history.unshift({
      url: url,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toLocaleDateString()
    });

    if (state.history.length > 8) {
      state.history.pop();
    }

    localStorage.setItem('omni_history', JSON.stringify(state.history));
    renderHistory();
  }

  function renderHistory() {
    if (!el.historyList) return;
    if (state.history.length === 0) {
      el.historyList.innerHTML = `
        <div class="history-empty-state">
          No generated codes yet. Enter a URL above to start!
        </div>
      `;
      return;
    }

    el.historyList.innerHTML = state.history.map((item, index) => `
      <div class="history-item" data-index="${index}">
        <div class="history-item-info">
          <div class="history-item-thumb">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
            </svg>
          </div>
          <div>
            <div class="history-item-url" title="${item.url}">${item.url}</div>
            <div class="history-item-time">${item.timestamp} &bull; ${item.date}</div>
          </div>
        </div>
        <button class="btn-history-del" data-del="${index}" title="Remove item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `).join('');

    el.historyList.querySelectorAll('.history-item').forEach(itemEl => {
      itemEl.addEventListener('click', (e) => {
        if (e.target.closest('.btn-history-del')) return;
        const index = itemEl.getAttribute('data-index');
        const item = state.history[index];
        if (item) {
          el.urlInput.value = item.url;
          state.url = item.url;
          refreshQRCode();
          showToast('Loaded QR from history', 'info');
        }
      });
    });

    el.historyList.querySelectorAll('.btn-history-del').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const index = parseInt(btn.getAttribute('data-del'), 10);
        state.history.splice(index, 1);
        localStorage.setItem('omni_history', JSON.stringify(state.history));
        renderHistory();
      });
    });
  }

  // Setup Event Listeners
  function setupEventListeners() {
    // URL Input
    el.urlInput.addEventListener('input', (e) => {
      state.url = normalizeUrl(e.target.value);
      refreshQRCode();
    });

    el.generateBtn.addEventListener('click', () => {
      const normalized = normalizeUrl(el.urlInput.value);
      el.urlInput.value = normalized;
      state.url = normalized;
      refreshQRCode(true);
      showToast('QR Code Generated!', 'success');
    });

    el.clearUrlBtn.addEventListener('click', () => {
      el.urlInput.value = '';
      state.url = '';
      refreshQRCode();
      el.urlInput.focus();
    });

    el.pasteUrlBtn.addEventListener('click', async () => {
      try {
        const text = await navigator.clipboard.readText();
        if (text) {
          el.urlInput.value = normalizeUrl(text);
          state.url = normalizeUrl(text);
          refreshQRCode(true);
          showToast('Pasted URL from clipboard!', 'success');
        }
      } catch (err) {
        showToast('Clipboard access denied', 'warning');
      }
    });

    // Helper to format file size
    function formatBytes(bytes) {
      if (!bytes || bytes === 0) return '0 B';
      const k = 1024;
      const sizes = ['B', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    }

    // Content Type Selector Tabs
    const typeLabelMap = {
      url: 'Generate QR Code from Website URL',
      image: 'Generate QR Code from Photo / Image',
      video: 'Generate QR Code from Video Link or Media',
      audio: 'Generate QR Code from Audio / Music',
      file: 'Generate QR Code from Document or File',
      wifi: 'Generate Wi-Fi Network Auto-Connect QR',
      vcard: 'Generate Digital Contact Card (vCard) QR',
      text: 'Generate QR Code from Plain Text'
    };

    el.typeNavBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        el.typeNavBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        el.typePanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        const selectedType = btn.getAttribute('data-type');
        state.contentType = selectedType;

        const targetPanel = document.getElementById(`panel-${selectedType}`);
        if (targetPanel) targetPanel.classList.add('active');

        if (el.contentTypeLabel && typeLabelMap[selectedType]) {
          el.contentTypeLabel.textContent = typeLabelMap[selectedType];
        }

        // Auto-refresh based on panel state
        if (selectedType === 'url') {
          state.url = normalizeUrl(el.urlInput.value);
          refreshQRCode();
        } else if (selectedType === 'wifi') {
          syncWifiState();
        } else if (selectedType === 'vcard') {
          syncVcardState();
        } else if (selectedType === 'text') {
          syncTextState();
        } else if (selectedType === 'image') {
          if (state.imageQrUrl) {
            state.url = state.imageQrUrl;
            refreshQRCode();
          }
        } else if (selectedType === 'video') {
          if (state.videoQrUrl) {
            state.url = state.videoQrUrl;
            refreshQRCode();
          }
        } else if (selectedType === 'audio') {
          if (state.audioQrUrl) {
            state.url = state.audioQrUrl;
            refreshQRCode();
          }
        } else if (selectedType === 'file') {
          if (state.docQrUrl) {
            state.url = state.docQrUrl;
            refreshQRCode();
          }
        }
      });
    });

    // --- PHOTO / IMAGE HANDLING ---
    if (el.imageDropzone && el.imageFileInput) {
      el.imageDropzone.addEventListener('click', () => el.imageFileInput.click());

      ['dragenter', 'dragover'].forEach(eventName => {
        el.imageDropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          el.imageDropzone.classList.add('drag-over');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        el.imageDropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          el.imageDropzone.classList.remove('drag-over');
        });
      });

      el.imageDropzone.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files && files.length > 0) handleImageFile(files[0]);
      });

      el.imageFileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) handleImageFile(e.target.files[0]);
      });
    }

    // Universal Mobile File Uploader
    // Why: QR codes have a mathematical maximum capacity of ~2,953 bytes.
    // In addition, local browser blob: URLs only exist inside the desktop PC browser memory
    // and CANNOT be opened by mobile camera scanners across networks.
    // By uploading to a direct cloud link (https://tmpfiles.org/dl/...), any phone camera (iPhone / Android)
    // scanning the QR code can instantly open, stream, or download the photo, video, audio, or document!
    async function uploadMediaForMobile(file, statusEl) {
      if (statusEl) {
        statusEl.style.display = 'flex';
        statusEl.className = 'media-upload-status uploading';
        statusEl.innerHTML = `
          <span class="status-spinner"></span>
          <span>Hosting file for universal mobile scanning (${formatBytes(file.size)})...</span>
        `;
      }

      try {
        const formData = new FormData();
        formData.append('file', file, file.name);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 35000);

        const resp = await fetch('https://tmpfiles.org/api/v1/upload', {
          method: 'POST',
          body: formData,
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (resp.ok) {
          const json = await resp.json();
          if (json && json.data && json.data.url) {
            // Direct download/view link that phone browsers render natively:
            const directUrl = json.data.url.replace('tmpfiles.org/', 'tmpfiles.org/dl/');
            if (statusEl) {
              statusEl.className = 'media-upload-status success';
              statusEl.innerHTML = `
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Mobile Ready: Any phone camera can scan to open</span>
              `;
            }
            state.url = directUrl;
            refreshQRCode(true);
            showToast(`QR Code generated! Scan with any phone to view ${file.name}`, 'success');
            return directUrl;
          }
        }
        throw new Error('Upload server did not return valid URL');
      } catch (err) {
        console.warn('Mobile upload service error:', err);

        // Fallback: If image is under 2.4KB, we can embed it directly into the QR matrix
        if (file.size <= 2400 && file.type && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (statusEl) {
              statusEl.className = 'media-upload-status success';
              statusEl.innerHTML = `
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Embedded Vector / Micro Image (Offline)</span>
              `;
            }
            state.url = e.target.result;
            refreshQRCode(true);
            showToast('Embedded into QR Code!', 'success');
          };
          reader.readAsDataURL(file);
          return;
        }

        if (statusEl) {
          statusEl.className = 'media-upload-status error';
          statusEl.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <span>Upload failed. Check internet connection or paste a link below.</span>
          `;
        }
        showToast('Could not host file for mobile. Please verify internet or paste a link.', 'warning');
      }
    }

    function handleImageFile(file) {
      if (!file.type.startsWith('image/')) {
        showToast('Please select a valid image file (PNG, JPG, WEBP, SVG, GIF, etc.)', 'warning');
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        el.imageFileThumb.src = e.target.result;
        el.imageFileName.textContent = file.name;
        el.imageFileMeta.textContent = `${file.type.replace('image/', '').toUpperCase()} • ${formatBytes(file.size)}`;

        el.imageDropzone.style.display = 'none';
        el.imageFilePreview.style.display = 'flex';
      };
      reader.readAsDataURL(file);

      // Upload for universal phone scanning
      uploadMediaForMobile(file, el.imageUploadStatus);
    }

    if (el.removeImageFileBtn) {
      el.removeImageFileBtn.addEventListener('click', () => {
        if (el.imageFileInput) el.imageFileInput.value = '';
        el.imageFilePreview.style.display = 'none';
        el.imageDropzone.style.display = 'flex';
        el.imageFileThumb.src = '';
        if (el.imageUploadStatus) el.imageUploadStatus.style.display = 'none';
        state.url = 'https://antigravity.google/';
        refreshQRCode();
        showToast('Photo removed', 'info');
      });
    }

    if (el.loadImageUrlBtn) {
      el.loadImageUrlBtn.addEventListener('click', () => {
        const url = normalizeUrl(el.imageUrlInput.value);
        if (url) {
          el.imageFileThumb.src = url;
          el.imageFileName.textContent = url.split('/').pop() || 'Remote Image';
          el.imageFileMeta.textContent = 'Remote Web Image';
          el.imageDropzone.style.display = 'none';
          el.imageFilePreview.style.display = 'flex';
          if (el.imageUploadStatus) {
            el.imageUploadStatus.style.display = 'flex';
            el.imageUploadStatus.className = 'media-upload-status success';
            el.imageUploadStatus.innerHTML = `
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Direct Web Link Active (Scannable on all phones)</span>
            `;
          }
          state.url = url;
          refreshQRCode(true);
          showToast('Image link applied to QR Code!', 'success');
        } else {
          showToast('Please enter a valid image URL', 'warning');
        }
      });
    }

    // --- VIDEO HANDLING ---
    if (el.videoDropzone && el.videoFileInput) {
      el.videoDropzone.addEventListener('click', () => el.videoFileInput.click());

      ['dragenter', 'dragover'].forEach(eventName => {
        el.videoDropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          el.videoDropzone.classList.add('drag-over');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        el.videoDropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          el.videoDropzone.classList.remove('drag-over');
        });
      });

      el.videoDropzone.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files && files.length > 0) handleVideoFile(files[0]);
      });

      el.videoFileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) handleVideoFile(e.target.files[0]);
      });
    }

    function handleVideoFile(file) {
      const blobUrl = URL.createObjectURL(file);
      el.videoPreviewPlayer.src = blobUrl;
      el.videoFileName.textContent = file.name;
      el.videoFileMeta.textContent = `${file.type || 'Video'} • ${formatBytes(file.size)}`;

      el.videoDropzone.style.display = 'none';
      el.videoFilePreview.style.display = 'flex';

      // Upload for universal phone scanning
      uploadMediaForMobile(file, el.videoUploadStatus);
    }

    if (el.removeVideoFileBtn) {
      el.removeVideoFileBtn.addEventListener('click', () => {
        if (el.videoFileInput) el.videoFileInput.value = '';
        el.videoPreviewPlayer.pause();
        el.videoPreviewPlayer.src = '';
        el.videoFilePreview.style.display = 'none';
        el.videoDropzone.style.display = 'flex';
        if (el.videoUploadStatus) el.videoUploadStatus.style.display = 'none';
        state.url = 'https://antigravity.google/';
        refreshQRCode();
        showToast('Video removed', 'info');
      });
    }

    if (el.loadVideoUrlBtn) {
      el.loadVideoUrlBtn.addEventListener('click', () => {
        const url = normalizeUrl(el.videoUrlInput.value);
        if (url) {
          el.videoFileName.textContent = url;
          el.videoFileMeta.textContent = 'Web Video Link';
          el.videoPreviewPlayer.src = url;
          el.videoDropzone.style.display = 'none';
          el.videoFilePreview.style.display = 'flex';
          if (el.videoUploadStatus) {
            el.videoUploadStatus.style.display = 'flex';
            el.videoUploadStatus.className = 'media-upload-status success';
            el.videoUploadStatus.innerHTML = `
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Video Web Link Active (Scannable on all phones)</span>
            `;
          }
          state.url = url;
          refreshQRCode(true);
          showToast('Video link applied to QR Code!', 'success');
        } else {
          showToast('Please enter a video URL', 'warning');
        }
      });
    }

    // --- AUDIO HANDLING ---
    if (el.audioDropzone && el.audioFileInput) {
      el.audioDropzone.addEventListener('click', () => el.audioFileInput.click());

      ['dragenter', 'dragover'].forEach(eventName => {
        el.audioDropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          el.audioDropzone.classList.add('drag-over');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        el.audioDropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          el.audioDropzone.classList.remove('drag-over');
        });
      });

      el.audioDropzone.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files && files.length > 0) handleAudioFile(files[0]);
      });

      el.audioFileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) handleAudioFile(e.target.files[0]);
      });
    }

    function handleAudioFile(file) {
      const blobUrl = URL.createObjectURL(file);
      el.audioPreviewPlayer.src = blobUrl;
      el.audioFileName.textContent = file.name;
      el.audioFileMeta.textContent = `${file.type || 'Audio Track'} • ${formatBytes(file.size)}`;

      el.audioDropzone.style.display = 'none';
      el.audioFilePreview.style.display = 'flex';

      // Upload for universal phone scanning
      uploadMediaForMobile(file, el.audioUploadStatus);
    }

    if (el.removeAudioFileBtn) {
      el.removeAudioFileBtn.addEventListener('click', () => {
        if (el.audioFileInput) el.audioFileInput.value = '';
        el.audioPreviewPlayer.pause();
        el.audioPreviewPlayer.src = '';
        el.audioFilePreview.style.display = 'none';
        el.audioDropzone.style.display = 'flex';
        if (el.audioUploadStatus) el.audioUploadStatus.style.display = 'none';
        state.url = 'https://antigravity.google/';
        refreshQRCode();
        showToast('Audio removed', 'info');
      });
    }

    if (el.loadAudioUrlBtn) {
      el.loadAudioUrlBtn.addEventListener('click', () => {
        const url = normalizeUrl(el.audioUrlInput.value);
        if (url) {
          el.audioFileName.textContent = url;
          el.audioFileMeta.textContent = 'Audio Stream / Music Link';
          el.audioPreviewPlayer.src = url;
          el.audioDropzone.style.display = 'none';
          el.audioFilePreview.style.display = 'flex';
          if (el.audioUploadStatus) {
            el.audioUploadStatus.style.display = 'flex';
            el.audioUploadStatus.className = 'media-upload-status success';
            el.audioUploadStatus.innerHTML = `
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Audio Web Link Active (Scannable on all phones)</span>
            `;
          }
          state.url = url;
          refreshQRCode(true);
          showToast('Audio link applied to QR Code!', 'success');
        } else {
          showToast('Please enter an audio or streaming URL', 'warning');
        }
      });
    }

    // --- DOCUMENT / FILE HANDLING ---
    if (el.docDropzone && el.docFileInput) {
      el.docDropzone.addEventListener('click', () => el.docFileInput.click());

      ['dragenter', 'dragover'].forEach(eventName => {
        el.docDropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          el.docDropzone.classList.add('drag-over');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        el.docDropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          el.docDropzone.classList.remove('drag-over');
        });
      });

      el.docDropzone.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files && files.length > 0) handleDocFile(files[0]);
      });

      el.docFileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) handleDocFile(e.target.files[0]);
      });
    }

    function handleDocFile(file) {
      el.docFileName.textContent = file.name;
      el.docFileMeta.textContent = `${file.type || 'Document File'} • ${formatBytes(file.size)}`;

      el.docDropzone.style.display = 'none';
      el.docFilePreview.style.display = 'flex';

      // Upload for universal phone scanning
      uploadMediaForMobile(file, el.docUploadStatus);
    }

    if (el.removeDocFileBtn) {
      el.removeDocFileBtn.addEventListener('click', () => {
        if (el.docFileInput) el.docFileInput.value = '';
        el.docFilePreview.style.display = 'none';
        el.docDropzone.style.display = 'flex';
        if (el.docUploadStatus) el.docUploadStatus.style.display = 'none';
        state.url = 'https://antigravity.google/';
        refreshQRCode();
        showToast('Document removed', 'info');
      });
    }

    if (el.loadDocUrlBtn) {
      el.loadDocUrlBtn.addEventListener('click', () => {
        const url = normalizeUrl(el.docUrlInput.value);
        if (url) {
          el.docFileName.textContent = url;
          el.docFileMeta.textContent = 'Cloud Document / File Link';
          el.docDropzone.style.display = 'none';
          el.docFilePreview.style.display = 'flex';
          if (el.docUploadStatus) {
            el.docUploadStatus.style.display = 'flex';
            el.docUploadStatus.className = 'media-upload-status success';
            el.docUploadStatus.innerHTML = `
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Document Web Link Active (Scannable on all phones)</span>
            `;
          }
          state.url = url;
          refreshQRCode(true);
          showToast('Document link applied to QR Code!', 'success');
        } else {
          showToast('Please enter a document URL', 'warning');
        }
      });
    }

    // --- WI-FI NETWORK GENERATOR ---
    function buildWifiString() {
      const ssid = (el.wifiSsidInput ? el.wifiSsidInput.value : '').trim();
      const pass = (el.wifiPasswordInput ? el.wifiPasswordInput.value : '').trim();
      const enc = el.wifiEncryptionSelect ? el.wifiEncryptionSelect.value : 'WPA';
      const hidden = el.wifiHiddenCheck ? el.wifiHiddenCheck.checked : false;
      return `WIFI:S:${ssid};T:${enc};P:${pass};H:${hidden ? 'true' : 'false'};;`;
    }

    function syncWifiState(saveHist = false) {
      state.url = buildWifiString();
      refreshQRCode(saveHist);
    }

    if (el.applyWifiBtn) {
      el.applyWifiBtn.addEventListener('click', () => {
        syncWifiState(true);
        showToast('Wi-Fi QR Code configured!', 'success');
      });
    }

    [el.wifiSsidInput, el.wifiPasswordInput, el.wifiEncryptionSelect, el.wifiHiddenCheck].forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          if (state.contentType === 'wifi') syncWifiState(false);
        });
        input.addEventListener('change', () => {
          if (state.contentType === 'wifi') syncWifiState(false);
        });
      }
    });

    // --- VCARD CONTACT GENERATOR ---
    function buildVcardString() {
      const name = (el.vcardNameInput ? el.vcardNameInput.value : '').trim();
      const phone = (el.vcardPhoneInput ? el.vcardPhoneInput.value : '').trim();
      const email = (el.vcardEmailInput ? el.vcardEmailInput.value : '').trim();
      const org = (el.vcardOrgInput ? el.vcardOrgInput.value : '').trim();
      const title = (el.vcardTitleInput ? el.vcardTitleInput.value : '').trim();
      const url = (el.vcardUrlInput ? el.vcardUrlInput.value : '').trim();

      return [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${name}`,
        `TEL:${phone}`,
        `EMAIL:${email}`,
        `ORG:${org}`,
        `TITLE:${title}`,
        `URL:${url}`,
        'END:VCARD'
      ].join('\n');
    }

    function syncVcardState(saveHist = false) {
      state.url = buildVcardString();
      refreshQRCode(saveHist);
    }

    if (el.applyVcardBtn) {
      el.applyVcardBtn.addEventListener('click', () => {
        syncVcardState(true);
        showToast('vCard contact QR Code configured!', 'success');
      });
    }

    [el.vcardNameInput, el.vcardPhoneInput, el.vcardEmailInput, el.vcardOrgInput, el.vcardTitleInput, el.vcardUrlInput].forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          if (state.contentType === 'vcard') syncVcardState(false);
        });
      }
    });

    // --- PLAIN TEXT GENERATOR ---
    function syncTextState(saveHist = false) {
      const val = (el.plainTextInput ? el.plainTextInput.value : '').trim();
      state.url = val || 'Welcome to OmniQR Studio!';
      refreshQRCode(saveHist);
    }

    if (el.plainTextInput) {
      el.plainTextInput.addEventListener('input', () => {
        const val = el.plainTextInput.value;
        const charCount = val.length;
        const byteCount = new Blob([val]).size;
        if (el.plainTextCount) {
          el.plainTextCount.textContent = `${charCount} characters (${byteCount} bytes)`;
        }
        if (state.contentType === 'text') {
          syncTextState(false);
        }
      });
    }

    if (el.applyTextBtn) {
      el.applyTextBtn.addEventListener('click', () => {
        syncTextState(true);
        showToast('Text applied to QR Code!', 'success');
      });
    }

    // Copy readout URL
    if (el.copyReadoutBtn) {
      el.copyReadoutBtn.addEventListener('click', () => {
        if (state.url) {
          navigator.clipboard.writeText(state.url).then(() => {
            showToast('URL copied to clipboard!', 'success');
          });
        }
      });
    }

    // Tab Navigation
    el.tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        el.tabButtons.forEach(b => b.classList.remove('active'));
        el.tabPanes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const tabTarget = btn.getAttribute('data-tab');
        const pane = document.getElementById(tabTarget);
        if (pane) pane.classList.add('active');
      });
    });

    // Color Type Switch
    el.colorTypeToggles.forEach(radio => {
      radio.addEventListener('change', (e) => {
        state.colorType = e.target.value;
        if (state.colorType === 'gradient') {
          el.gradientControls.style.display = 'flex';
        } else {
          el.gradientControls.style.display = 'none';
        }
        refreshQRCode();
      });
    });

    // Color Pickers Sync
    function syncColor(inputPicker, inputText, stateKey) {
      inputPicker.addEventListener('input', (e) => {
        inputText.value = e.target.value;
        state[stateKey] = e.target.value;
        refreshQRCode();
      });
      inputText.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
          inputPicker.value = val;
          state[stateKey] = val;
          refreshQRCode();
        }
      });
    }

    syncColor(el.dotColor1Input, el.dotColor1Text, 'dotColor1');
    syncColor(el.dotColor2Input, el.dotColor2Text, 'dotColor2');
    syncColor(el.bgColorInput, el.bgColorText, 'bgColor');
    syncColor(el.cornerSquareColorInput, el.cornerSquareColorText, 'cornerSquareColor');
    syncColor(el.cornerDotColorInput, el.cornerDotColorText, 'cornerDotColor');

    // Gradient Rotation
    el.gradRotationSlider.addEventListener('input', (e) => {
      state.gradientRotation = parseInt(e.target.value, 10);
      el.gradRotationVal.textContent = `${state.gradientRotation}°`;
      refreshQRCode();
    });

    // Transparent Background
    el.bgTransparentCheck.addEventListener('change', (e) => {
      state.bgTransparent = e.target.checked;
      refreshQRCode();
    });

    // Preset Palettes
    el.paletteButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        el.paletteButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const c1 = btn.getAttribute('data-c1');
        const c2 = btn.getAttribute('data-c2');
        const bg = btn.getAttribute('data-bg');
        const sq = btn.getAttribute('data-sq');
        const dt = btn.getAttribute('data-dt');

        state.dotColor1 = c1;
        state.dotColor2 = c2;
        state.bgColor = bg;
        state.bgTransparent = false;
        el.bgTransparentCheck.checked = false;

        state.cornerSquareColor = sq || c1;
        state.cornerDotColor = dt || c2;

        // Update inputs
        el.dotColor1Input.value = c1;
        el.dotColor1Text.value = c1;
        el.dotColor2Input.value = c2;
        el.dotColor2Text.value = c2;
        el.bgColorInput.value = bg;
        el.bgColorText.value = bg;
        el.cornerSquareColorInput.value = sq || c1;
        el.cornerSquareColorText.value = sq || c1;
        el.cornerDotColorInput.value = dt || c2;
        el.cornerDotColorText.value = dt || c2;

        refreshQRCode();
        showToast('Applied color palette', 'info');
      });
    });

    // Dot Style Tiles
    el.dotStyleTiles.forEach(tile => {
      tile.addEventListener('click', () => {
        el.dotStyleTiles.forEach(t => t.classList.remove('active'));
        tile.classList.add('active');
        state.dotType = tile.getAttribute('data-style');
        refreshQRCode();
      });
    });

    // Corner Square Tiles
    el.cornerSquareTiles.forEach(tile => {
      tile.addEventListener('click', () => {
        el.cornerSquareTiles.forEach(t => t.classList.remove('active'));
        tile.classList.add('active');
        state.cornerSquareType = tile.getAttribute('data-style');
        refreshQRCode();
      });
    });

    // Corner Dot Tiles
    el.cornerDotTiles.forEach(tile => {
      tile.addEventListener('click', () => {
        el.cornerDotTiles.forEach(t => t.classList.remove('active'));
        tile.classList.add('active');
        state.cornerDotType = tile.getAttribute('data-style');
        refreshQRCode();
      });
    });

    // Custom Corner Colors Toggle
    el.cornerColorsToggle.addEventListener('change', (e) => {
      state.customCornerColors = e.target.checked;
      el.cornerColorControls.style.display = state.customCornerColors ? 'grid' : 'none';
      refreshQRCode();
    });

    // Logo Presets
    el.logoPresetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const iconKey = btn.getAttribute('data-icon');
        if (iconKey === 'none') {
          clearLogo();
          el.logoPresetBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          return;
        }

        const iconSvgDataUri = PRESET_ICONS[iconKey];
        if (iconSvgDataUri) {
          el.logoPresetBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          setLogo(iconSvgDataUri, `${iconKey}.svg`);
        }
      });
    });

    // Custom Logo File Upload
    el.logoFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) handleImageFile(file);
    });

    // Drag and Drop
    el.logoDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      el.logoDropzone.classList.add('drag-over');
    });

    el.logoDropzone.addEventListener('dragleave', () => {
      el.logoDropzone.classList.remove('drag-over');
    });

    el.logoDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      el.logoDropzone.classList.remove('drag-over');
      const file = e.dataTransfer.files[0];
      if (file) handleImageFile(file);
    });

    el.removeLogoBtn.addEventListener('click', () => {
      clearLogo();
      el.logoPresetBtns.forEach(b => b.classList.remove('active'));
      const noneBtn = document.querySelector('.logo-preset-btn[data-icon="none"]');
      if (noneBtn) noneBtn.classList.add('active');
    });

    // Logo Sliders
    el.logoSizeSlider.addEventListener('input', (e) => {
      state.logoSize = parseFloat(e.target.value);
      el.logoSizeVal.textContent = `${Math.round(state.logoSize * 100)}%`;
      refreshQRCode();
    });

    el.logoMarginSlider.addEventListener('input', (e) => {
      state.logoMargin = parseInt(e.target.value, 10);
      el.logoMarginVal.textContent = `${state.logoMargin}px`;
      refreshQRCode();
    });

    el.hideDotsToggle.addEventListener('change', (e) => {
      state.hideBgDots = e.target.checked;
      refreshQRCode();
    });

    // Advanced Controls
    el.ecLevelSelect.addEventListener('change', (e) => {
      state.errorCorrectionLevel = e.target.value;
      refreshQRCode();
    });

    el.qrMarginSlider.addEventListener('input', (e) => {
      state.margin = parseInt(e.target.value, 10);
      el.qrMarginVal.textContent = `${state.margin}px`;
      refreshQRCode();
    });

    // Download & Actions (Live Preview)
    if (el.downloadPngBtn) el.downloadPngBtn.addEventListener('click', () => downloadQR(state.selectedExportFormat || 'png'));
    if (el.downloadSvgBtn) el.downloadSvgBtn.addEventListener('click', () => downloadQR('svg'));
    if (el.downloadJpegBtn) el.downloadJpegBtn.addEventListener('click', () => downloadQR('jpeg'));
    if (el.copyQrBtn) el.copyQrBtn.addEventListener('click', copyQrImageToClipboard);

    // Download & Actions (Export Tab)
    const tabPng = document.getElementById('tabDownloadPngBtn');
    const tabSvg = document.getElementById('tabDownloadSvgBtn');
    const tabJpeg = document.getElementById('tabDownloadJpegBtn');
    const tabCopy = document.getElementById('tabCopyQrBtn');

    if (tabPng) tabPng.addEventListener('click', () => downloadQR('png'));
    if (tabSvg) tabSvg.addEventListener('click', () => downloadQR('svg'));
    if (tabJpeg) tabJpeg.addEventListener('click', () => downloadQR('jpeg'));
    if (tabCopy) tabCopy.addEventListener('click', copyQrImageToClipboard);

    if (el.printQrBtn) {
      el.printQrBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // History Clear
    el.clearHistoryBtn.addEventListener('click', () => {
      state.history = [];
      localStorage.removeItem('omni_history');
      renderHistory();
      showToast('History cleared', 'info');
    });

    // Reset button
    el.themeToggleBtn.addEventListener('click', () => {
      state.dotColor1 = '#750923';
      state.dotColor2 = '#2B131F';
      state.cornerSquareColor = '#750923';
      state.cornerDotColor = '#750923';
      state.bgColor = '#ffffff';
      state.bgTransparent = false;
      el.bgTransparentCheck.checked = false;

      el.dotColor1Input.value = '#750923';
      el.dotColor1Text.value = '#750923';
      el.dotColor2Input.value = '#2B131F';
      el.dotColor2Text.value = '#2B131F';
      el.bgColorInput.value = '#ffffff';
      el.bgColorText.value = '#ffffff';
      el.cornerSquareColorInput.value = '#750923';
      el.cornerSquareColorText.value = '#750923';
      el.cornerDotColorInput.value = '#750923';
      el.cornerDotColorText.value = '#750923';

      refreshQRCode();
      showToast('Reset to Burgundy Elegance default', 'info');
    });
  }

  function handleImageFile(file) {
    if (!file.type.startsWith('image/')) {
      showToast('Please upload a valid image file', 'warning');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      setLogo(event.target.result, file.name);
      el.logoPresetBtns.forEach(b => b.classList.remove('active'));
    };
    reader.readAsDataURL(file);
  }

  function setLogo(dataUri, name) {
    state.logo = dataUri;
    el.logoThumb.src = dataUri;
    el.logoPreviewBar.style.display = 'flex';
    document.getElementById('logoFileName').textContent = name || 'Custom Logo';
    refreshQRCode();
    showToast('Logo attached to QR Code!', 'success');
  }

  function clearLogo() {
    state.logo = null;
    el.logoThumb.src = '';
    el.logoPreviewBar.style.display = 'none';
    el.logoFileInput.value = '';
    refreshQRCode();
    showToast('Logo removed', 'info');
  }

  // ===================================================================
  //  INTERACTIVE BURGUNDY SPOTLIGHT CURSOR EFFECT (Desktop Only)
  // ===================================================================
  function initSpotlightCursor() {
    if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) return;
    const spotlight = document.getElementById('cursorSpotlight');
    if (!spotlight) return;

    let mouseX = -999;
    let mouseY = -999;
    let currentX = -999;
    let currentY = -999;
    let isMoving = false;
    let rafId = null;

    function onPointerMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isMoving) {
        isMoving = true;
        spotlight.classList.add('active');
        if (currentX === -999) {
          currentX = mouseX;
          currentY = mouseY;
        }
        renderSpotlight();
      }
    }

    function renderSpotlight() {
      currentX += (mouseX - currentX) * 0.22;
      currentY += (mouseY - currentY) * 0.22;

      spotlight.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0)`;

      if (Math.abs(mouseX - currentX) > 0.1 || Math.abs(mouseY - currentY) > 0.1) {
        rafId = requestAnimationFrame(renderSpotlight);
      } else {
        isMoving = false;
      }
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('mouseleave', () => {
      spotlight.classList.remove('active');
      isMoving = false;
      if (rafId) cancelAnimationFrame(rafId);
    }, { passive: true });

    // Card-level subtle hover illumination
    const cards = document.querySelectorAll('.feature-quad-card, .type-showcase-card, .template-card, .live-preview-card, .ai-tool-card, .learning-item-card, .highlight-metric-card, .story-quote-card, .story-evolution-card, .about-profile-card');
    cards.forEach(card => {
      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--card-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--card-y', `${e.clientY - rect.top}px`);
      }, { passive: true });
    });
  }

  // ===================================================================
  //  SCROLL REVEAL ANIMATIONS (IntersectionObserver)
  // ===================================================================
  function initScrollAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
  }

  // ===================================================================
  //  FLOATING NAVBAR SCROLL SHADOW BEHAVIOR
  // ===================================================================
  function initNavbarScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    function checkScroll() {
      if (window.scrollY > 15) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  }

  // ===================================================================
  //  CURATED TEMPLATES PRESETS HANDLER
  // ===================================================================
  function initTemplatePresets() {
    const templateConfigs = {
      vcard: {
        type: 'vcard',
        c1: '#7A1736',
        c2: '#541126',
        dot: 'rounded',
        cornerSquare: 'extra-rounded',
        cornerDot: 'dot',
        ec: 'H'
      },
      wifi: {
        type: 'wifi',
        c1: '#68152F',
        c2: '#A83D5D',
        dot: 'dots',
        cornerSquare: 'square',
        cornerDot: 'dot',
        ec: 'M'
      },
      menu: {
        type: 'url',
        c1: '#7A1736',
        c2: '#A83D5D',
        dot: 'classy-rounded',
        cornerSquare: 'extra-rounded',
        cornerDot: 'dot',
        ec: 'H'
      },
      portfolio: {
        type: 'url',
        c1: '#541126',
        c2: '#7A1736',
        dot: 'extra-rounded',
        cornerSquare: 'dot',
        cornerDot: 'dot',
        ec: 'H'
      }
    };

    document.querySelectorAll('[data-template-apply]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const key = btn.getAttribute('data-template-apply');
        const config = templateConfigs[key];
        if (!config) return;

        // Apply config to state
        state.dotColor1 = config.c1;
        state.dotColor2 = config.c2;
        state.dotType = config.dot;
        state.cornerSquareType = config.cornerSquare;
        state.cornerDotType = config.cornerDot;
        state.cornerSquareColor = config.c1;
        state.cornerDotColor = config.c2;
        state.errorCorrectionLevel = config.ec;

        // Update inputs
        if (el.dotColor1Input) el.dotColor1Input.value = config.c1;
        if (el.dotColor1Text) el.dotColor1Text.value = config.c1;
        if (el.dotColor2Input) el.dotColor2Input.value = config.c2;
        if (el.dotColor2Text) el.dotColor2Text.value = config.c2;
        if (el.cornerSquareColorInput) el.cornerSquareColorInput.value = config.c1;
        if (el.cornerDotColorInput) el.cornerDotColorInput.value = config.c2;

        // Update active tiles in UI
        document.querySelectorAll('.dot-style-tile').forEach(t => {
          t.classList.toggle('active', t.getAttribute('data-style') === config.dot);
        });
        document.querySelectorAll('.corner-square-tile').forEach(t => {
          t.classList.toggle('active', t.getAttribute('data-style') === config.cornerSquare);
        });
        document.querySelectorAll('.corner-dot-tile').forEach(t => {
          t.classList.toggle('active', t.getAttribute('data-style') === config.cornerDot);
        });

        // Navigate to generator
        window.location.hash = '#/generator';
        setTimeout(() => {
          const typeBtn = document.querySelector(`.type-nav-btn[data-type="${config.type}"]`);
          if (typeBtn) typeBtn.click();
          refreshQRCode();
          showToast(`Applied ${key.toUpperCase()} template preset`, 'info');
        }, 100);
      });
    });
  }

  // ===================================================================
  //  CLIENT-SIDE ROUTER & SECTION SCROLL SPY
  // ===================================================================
  function initRouter() {
    const viewHome = document.getElementById('viewHome');
    const viewGenerator = document.getElementById('viewGenerator');
    const viewAbout = document.getElementById('viewAbout');

    function setActiveNav(targetKey) {
      document.querySelectorAll('.nav-link-btn, .mobile-nav-link').forEach(link => {
        const key = link.getAttribute('data-nav');
        if (key) {
          link.classList.toggle('active', key === targetKey);
        }
      });
    }

    function activateView(path) {
      const isGenerator = path.includes('/generator') || path.includes('generator');
      const isAbout = path.includes('/about') || path.includes('about');
      const isTemplates = path.includes('templates');

      if (isGenerator) {
        if (viewHome) { viewHome.style.display = 'none'; viewHome.classList.remove('active'); }
        if (viewAbout) { viewAbout.style.display = 'none'; viewAbout.classList.remove('active'); }
        if (viewGenerator) { viewGenerator.style.display = 'block'; viewGenerator.classList.add('active'); }
        setActiveNav('generator');
        window.scrollTo({ top: 0, behavior: 'instant' });

        if (!qrCode) {
          setTimeout(() => {
            initQRCode();
            renderHistory();
          }, 30);
        } else {
          setTimeout(() => {
            refreshQRCode();
          }, 30);
        }

        const urlParams = new URLSearchParams(window.location.search);
        const launchType = urlParams.get('type');
        if (launchType) {
          const typeBtn = document.querySelector(`.type-nav-btn[data-type="${launchType}"]`);
          if (typeBtn) typeBtn.click();
        }
      } else if (isAbout) {
        if (viewHome) { viewHome.style.display = 'none'; viewHome.classList.remove('active'); }
        if (viewGenerator) { viewGenerator.style.display = 'none'; viewGenerator.classList.remove('active'); }
        if (viewAbout) { viewAbout.style.display = 'block'; viewAbout.classList.add('active'); }
        setActiveNav('about');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        // Home view
        if (viewGenerator) { viewGenerator.style.display = 'none'; viewGenerator.classList.remove('active'); }
        if (viewAbout) { viewAbout.style.display = 'none'; viewAbout.classList.remove('active'); }
        if (viewHome) { viewHome.style.display = 'block'; viewHome.classList.add('active'); }

        if (isTemplates) {
          setActiveNav('templates');
          const templatesSection = document.getElementById('templates');
          if (templatesSection) {
            setTimeout(() => {
              templatesSection.scrollIntoView({ behavior: 'smooth' });
            }, 60);
          }
        } else {
          setActiveNav('home');
        }
      }
    }

    function handleNavigation(e) {
      const anchor = e.target.closest('a[href]');
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('mailto')) return;

      if (href === '#templates') {
        e.preventDefault();
        closeMobileDrawer();
        const isNotOnHome = (viewGenerator && viewGenerator.classList.contains('active')) ||
                            (viewAbout && viewAbout.classList.contains('active'));
        if (isNotOnHome) {
          window.location.hash = '#templates';
          activateView('#templates');
        } else {
          window.location.hash = '#templates';
          setActiveNav('templates');
          const target = document.getElementById('templates');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      if (href === '#/' || href === '#' || href === '#home') {
        e.preventDefault();
        closeMobileDrawer();
        const wasNotOnHome = (viewGenerator && viewGenerator.classList.contains('active')) ||
                             (viewAbout && viewAbout.classList.contains('active'));
        window.location.hash = '#/';
        activateView('#/');
        window.scrollTo({ top: 0, behavior: wasNotOnHome ? 'instant' : 'smooth' });
        return;
      }

      if (href.startsWith('#/')) {
        e.preventDefault();
        closeMobileDrawer();
        window.location.hash = href;
        activateView(href);
        return;
      }
    }

    document.addEventListener('click', handleNavigation);
    window.addEventListener('hashchange', () => {
      activateView(window.location.hash);
    });

    // ScrollSpy for Home View Sections (Templates vs Home)
    function initScrollSpy() {
      const templatesSection = document.getElementById('templates');
      if (!templatesSection) return;

      function onScroll() {
        if (!viewHome || viewHome.style.display === 'none') return;
        const rect = templatesSection.getBoundingClientRect();
        // If templates section is occupying the top/center of screen
        if (rect.top <= 200 && rect.bottom >= 150) {
          setActiveNav('templates');
        } else if (rect.top > 200) {
          setActiveNav('home');
        }
      }

      window.addEventListener('scroll', onScroll, { passive: true });
    }

    initScrollSpy();

    // Initial load routing
    const currentHash = window.location.hash || '#/';
    activateView(currentHash);
  }

  // ===================================================================
  //  ACCORDION SYSTEM (Progressive Disclosure)
  // ===================================================================
  function initAccordions() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
      const trigger = item.querySelector('.accordion-trigger');
      if (!trigger) return;

      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close all others (optional: only if you want one at a time)
        // accordionItems.forEach(i => i.classList.remove('open'));
        item.classList.toggle('open', !isOpen);
        trigger.setAttribute('aria-expanded', !isOpen);
      });
    });
  }

  // ===================================================================
  //  SCAN QUALITY CALCULATOR
  // ===================================================================
  function calculateScanQuality() {
    // Parse hex to RGB
    function hexToRgb(hex) {
      const clean = hex.replace('#', '');
      return {
        r: parseInt(clean.substring(0, 2), 16),
        g: parseInt(clean.substring(2, 4), 16),
        b: parseInt(clean.substring(4, 6), 16)
      };
    }
    // Relative luminance (WCAG)
    function luminance(rgb) {
      const r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
      const toLinear = c => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
    }
    function contrastRatio(lum1, lum2) {
      const light = Math.max(lum1, lum2), dark = Math.min(lum1, lum2);
      return (light + 0.05) / (dark + 0.05);
    }

    const dotColor = state.dotColor1 || '#000000';
    const bgColor = state.bgTransparent ? '#FFFFFF' : (state.bgColor || '#FFFFFF');

    let dotLum, bgLum;
    try {
      dotLum = luminance(hexToRgb(dotColor));
      bgLum = luminance(hexToRgb(bgColor));
    } catch(e) {
      return 'excellent';
    }

    const contrast = contrastRatio(dotLum, bgLum);
    const logoSize = state.logoSize || 0;
    const ecLevel = state.errorCorrectionLevel || 'H';
    
    // EC weights: H=1, Q=0.85, M=0.7, L=0.5
    const ecWeight = { H: 1, Q: 0.85, M: 0.7, L: 0.5 }[ecLevel] || 1;
    
    // Logo penalty: logo > 35% with non-H EC hurts quality
    const logoPenalty = logoSize > 0.35 && ecLevel !== 'H' ? 0.8 : 1;

    const score = contrast * ecWeight * logoPenalty;

    if (score >= 6 && contrast >= 5.5) return 'excellent';
    if (score >= 3.5 && contrast >= 3) return 'good';
    return 'warning';
  }

  function updateScanQuality() {
    const pill = document.getElementById('scanQualityPill');
    const rating = document.getElementById('scanQualityRating');
    const feedback = document.getElementById('scanQualityFeedback');
    if (!pill || !rating) return;

    const quality = calculateScanQuality();

    pill.className = `scan-quality-pill quality-${quality}`;
    
    const labels = {
      excellent: 'Excellent',
      good: 'Good',
      warning: 'Needs Attention'
    };
    const feedbackTexts = {
      excellent: 'High contrast, optimal error correction, clean scan profile.',
      good: 'Good scanability. Consider increasing contrast for best results.',
      warning: 'Low contrast or large logo. Increase error correction to H for logos.'
    };

    rating.textContent = labels[quality] || 'Excellent';
    if (feedback) feedback.textContent = feedbackTexts[quality] || '';
  }

  // ===================================================================
  //  FORMAT SELECTOR (PNG/SVG/JPG Pills)
  // ===================================================================
  function initFormatSelector() {
    const formatBtns = document.querySelectorAll('.format-pill-btn');
    const downloadBtn = document.getElementById('downloadPngBtn');
    const downloadBtnText = document.getElementById('mainDownloadBtnText');

    formatBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        formatBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.selectedExportFormat = btn.getAttribute('data-format') || 'png';
        
        if (downloadBtnText) {
          const formatLabels = { png: 'Download QR Code (PNG)', svg: 'Download QR Code (SVG)', jpeg: 'Download QR Code (JPG)' };
          downloadBtnText.textContent = formatLabels[state.selectedExportFormat] || 'Download QR Code';
        }
      });
    });

  }

  // ===================================================================
  //  MOBILE HEADER MENU DRAWER
  // ===================================================================
  function initMobileMenu() {
    const toggleBtn = document.getElementById('mobileMenuBtn');
    const drawer = document.getElementById('mobileDrawer');
    if (!toggleBtn || !drawer) return;

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = drawer.classList.contains('open');
      drawer.classList.toggle('open', !isOpen);
      drawer.setAttribute('aria-hidden', String(isOpen));
      toggleBtn.setAttribute('aria-expanded', String(!isOpen));
    });

    // Close when clicking any link inside drawer
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });

    // Close when clicking outside drawer
    document.addEventListener('click', (e) => {
      if (drawer.classList.contains('open') && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
        closeMobileDrawer();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeMobileDrawer();
      }
    });
  }

  function closeMobileDrawer() {
    const drawer = document.getElementById('mobileDrawer');
    if (drawer) {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
    }
    const toggleBtn = document.getElementById('mobileMenuBtn');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
  }

  // ===================================================================
  //  HOME PAGE — TYPE CARD LAUNCH HANDLER
  // ===================================================================
  function initHomeTypeLaunch() {
    document.querySelectorAll('.type-showcase-card[data-launch-type]').forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const launchType = card.getAttribute('data-launch-type');
        // Navigate to generator
        window.location.hash = '#/generator';
        // Slight delay so generator view can mount
        setTimeout(() => {
          const typeBtn = document.querySelector(`.type-nav-btn[data-type="${launchType}"]`);
          if (typeBtn) typeBtn.click();
        }, 80);
      });
    });

    // Hero and CTA buttons that route to generator
    document.querySelectorAll('#heroCreateBtn, #navCtaBtn, #finalCtaBtn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = '#/generator';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  // ===================================================================
  //  PATCH: updateReadout to also update payload-readout-row
  // ===================================================================
  const _originalUpdateReadout = updateReadout;

  function updateReadoutWithPayloadRow() {
    const rawVal = (state.url || '').trim();
    
    // Update the new payload readout row in the preview card
    const readoutEl = document.getElementById('qrUrlReadout');
    if (readoutEl) {
      let displayVal = rawVal;
      if (!rawVal) {
        displayVal = 'No content specified';
      } else if (rawVal.length > 55) {
        displayVal = rawVal.substring(0, 52) + '...';
      }
      readoutEl.textContent = displayVal;
    }

    const testLink = document.getElementById('testScannerLink');
    if (testLink) {
      if (rawVal && (rawVal.startsWith('http://') || rawVal.startsWith('https://'))) {
        testLink.href = rawVal;
        testLink.style.display = 'inline';
      } else {
        testLink.href = '#';
        testLink.style.display = 'none';
      }
    }

    // Update scan quality after any readout change
    updateScanQuality();
  }

  // ===================================================================
  //  OVERRIDE refreshQRCode to update scan quality too
  // ===================================================================
  const _baseRefreshQRCode = refreshQRCode;

  // ===================================================================
  //  Initialize Application
  // ===================================================================
  function init() {
    setupEventListeners();
    initRouter();
    initAccordions();
    initMobileMenu();
    initHomeTypeLaunch();
    initFormatSelector();
    initSpotlightCursor();
    initScrollAnimations();
    initNavbarScroll();
    initTemplatePresets();
    
    // Initialize QR only when on generator page
    const isGeneratorPage = window.location.hash.includes('/generator');
    if (isGeneratorPage) {
      initQRCode();
      renderHistory();
    }
    
    if (el.urlInput) el.urlInput.value = state.url;
    
    // Patch updateReadout to also drive scan quality and payload row
    const origRefresh = refreshQRCode;
    // Hook into refresh to run scan quality update
    const originalUpdateReadout = updateReadout;
    
    // Override updateReadout to additionally update quality pill and payload row
    window.__omni_patchReadout = function() {
      updateReadoutWithPayloadRow();
    };

    // Watch for any QR refresh
    setInterval(() => {
      updateScanQuality();
    }, 800);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
