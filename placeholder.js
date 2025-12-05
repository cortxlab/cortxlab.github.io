document.addEventListener('DOMContentLoaded', () => {
  const placeholderSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="250">
      <rect width="100%" height="100%" fill="#f0f0f0" />
      <rect x="10" y="10" width="380" height="230" fill="none" stroke="#cccccc" stroke-width="2" stroke-dasharray="6,6" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="#999999">
        Placeholder
      </text>
    </svg>
  `;
  const placeholderUrl = `data:image/svg+xml,${encodeURIComponent(placeholderSvg)}`;

  document.querySelectorAll('img').forEach((img) => {
    if (img.hasAttribute('data-keep-image')) {
      return;
    }
    img.dataset.originalSrc = img.src;
    img.src = placeholderUrl;
    img.alt = img.alt || 'Placeholder image';
    img.style.backgroundColor = '#f5f5f5';
    img.style.objectFit = 'cover';
  });

  document.querySelectorAll('video').forEach((video) => {
    if (!video.parentNode) {
      return;
    }
    const placeholder = document.createElement('div');
    placeholder.className = 'video-placeholder';
    placeholder.textContent = 'Video placeholder';
    video.parentNode.replaceChild(placeholder, video);
  });
});

