'use client';

import { useEffect } from 'react';

export default function StoreClient({ body }) {
  useEffect(() => {
    window.flashToast = (message) => {
      const toast = document.getElementById('gazu-toast');
      const toastText = document.getElementById('gazu-toast-text');
      if (!toast) return;

      toastText.textContent = message;
      toast.classList.remove('opacity-0', 'translate-y-3', 'pointer-events-none');
      toast.classList.add('opacity-100', 'translate-y-0');
      window.setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', 'translate-y-3', 'pointer-events-none');
      }, 2200);
    };

    window.toggleWishlist = (button) => {
      const icon = button.querySelector('.material-symbols-outlined');
      const isFilled = icon.style.fontVariationSettings?.includes("'FILL' 1");
      if (isFilled) {
        icon.style.fontVariationSettings = "'FILL' 0";
        icon.classList.remove('text-error');
        button.classList.remove('text-error');
      } else {
        icon.style.fontVariationSettings = "'FILL' 1";
        icon.classList.add('text-error');
        button.classList.add('text-error');
        window.flashToast('Saved to Wishlist');
      }
    };

    return () => {
      delete window.flashToast;
      delete window.toggleWishlist;
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: body }} />;
}
