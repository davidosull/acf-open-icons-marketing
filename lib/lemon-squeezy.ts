import {
  LEMON_SQUEEZY_STORE_DOMAIN,
  LEMON_SQUEEZY_CHECKOUT_UUID,
} from './constants';

// Extend Window interface for Lemon Squeezy
declare global {
  interface Window {
    LemonSqueezy?: {
      Url: {
        Open: (url: string) => void;
      };
    };
    createLemonSqueezy?: () => void;
  }
}

/**
 * Loads the Lemon Squeezy script if not already loaded
 */
function loadLemonSqueezyScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Window is not defined'));
      return;
    }

    // Script already loaded
    if (window.LemonSqueezy) {
      resolve();
      return;
    }

    // Check if script is already being loaded
    const existingScript = document.querySelector(
      'script[src="https://assets.lemonsqueezy.com/lemon.js"]'
    );
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve());
      existingScript.addEventListener('error', reject);
      return;
    }

    // Load the script
    const script = document.createElement('script');
    script.src = 'https://assets.lemonsqueezy.com/lemon.js';
    script.defer = true;
    script.async = true;

    script.onload = () => {
      setTimeout(() => {
        if (window.createLemonSqueezy) {
          window.createLemonSqueezy();
        }
        resolve();
      }, 100);
    };

    script.onerror = () => {
      reject(new Error('Failed to load Lemon Squeezy script'));
    };

    document.head.appendChild(script);
  });
}

/**
 * Opens the Lemon Squeezy checkout overlay in a modal/dialog
 * Uses LemonSqueezy.Url.Open() to show overlay instead of redirecting
 */
export async function openLemonSqueezyCheckout() {
  const checkoutUrl = `https://${LEMON_SQUEEZY_STORE_DOMAIN}/buy/${LEMON_SQUEEZY_CHECKOUT_UUID}?embed=1&media=0&desc=0`;

  // Load the script if needed
  await loadLemonSqueezyScript();

  // Wait for LemonSqueezy to be ready
  let attempts = 0;
  const maxAttempts = 20;
  while (attempts < maxAttempts) {
    if (window.LemonSqueezy?.Url?.Open) {
      // Use Url.Open() to show overlay in modal instead of redirecting
      window.LemonSqueezy.Url.Open(checkoutUrl);
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
    attempts++;
  }

  // Fallback: if overlay doesn't work, open in new window
  window.open(checkoutUrl, '_blank');
}
