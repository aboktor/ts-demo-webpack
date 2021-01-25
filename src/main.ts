async function run(): Promise<void> {
  console.log('requesting one');
  import('./one').then(m => m.one());
}

function addButton(label:string,onclick: () => void) {
  const button1 = document.createElement('button');
  button1.textContent = label;
  button1.onclick = onclick;
  document.body.appendChild(button1);
}

function choose(): void {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'mycheckbox';
  document.body.appendChild(checkbox);
  addButton('GO', () => {
    const modulePromise = checkbox.checked? import('./dynamic'): import('./static');
    modulePromise.then(m => m.default());
  });
}

choose();

//run();