function* Modal({ open, close }) {
  const root = document.createElement('dialog');
  if (open) {
    root.setAttribute('open');
  }

  const header = document.createElement('header');
  const body = document.createElement('div');
  const footer = document.createElement('footer');

  yield header;
  yield body;
  yield footer;

  root.appendChild(header);
  root.appendChild(body);
  root.appendChild(footer);

  return root;
}
