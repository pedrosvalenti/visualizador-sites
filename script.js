const htmlInput = document.getElementById('htmlInput');
const cssInput = document.getElementById('cssInput');
const jsInput = document.getElementById('jsInput');
const preview = document.getElementById('preview');
const buildBtn = document.getElementById('buildBtn');

buildBtn.addEventListener('click', () => {
  const html = htmlInput.value;
  const css = `<style>${cssInput.value}</style>`;
  const js = `<script>${jsInput.value}<\/script>`;

  const previewContent = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8" />
      <title>Preview</title>
      ${css}
    </head>
    <body>
      ${html}
      ${js}
    </body>
    </html>
  `;

  preview.srcdoc = previewContent;
});
