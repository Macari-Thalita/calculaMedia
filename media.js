// Exercício Média das notas
// Thalita Regina Macari - RA 8169250

let quantidadeAlunos;

function calculaNota() {

  let accMedia = 0;
  let maiorNota = 0;

  for (let i = 0; i < quantidadeAlunos; i++) {
    let media =
      (parseFloat(document.getElementById(`nota1aluno${i}`).value) +
        parseFloat(document.getElementById(`nota2aluno${i}`).value)) / 2;

    if (media > maiorNota) {
      maiorNota = media
    };
    accMedia = accMedia + media;

    document.getElementById(`mediaaluno${i}`).innerText =`Média: ${media}`;
  };

  document.getElementById(`mediaTotal`).innerHTML = `<div class="mediaDiv">
  A Média geral é: ${
    (accMedia / quantidadeAlunos).toFixed(1)}
    </div>`;

  document.getElementById(`maiorMedia`).innerHTML = `<div class="mediaDiv">
  A Maior média individual é: ${
    maiorNota.toFixed(1)}
    </div>`;
};


function gerarAlunos() {
  let alunos = parseInt(prompt('Informe o número de alunos: '));
  let lista = new Array(alunos);
  
  lista.fill('');
  quantidadeAlunos = alunos;

  const listaInputs = lista.map((element, index) => {
    return `<div class="alunoDiv" id='aluno${index}'>
    <div class="elemento">
    <input 
    placeholder='Primeira nota do aluno 0${index + 1}' id='nota1aluno${index}'/>
    </div>
    <div class="elemento">
    <input
    placeholder='Segunda nota do aluno 0${index + 1}' id='nota2aluno${index}'/>
    </div>
    <div class="elemento">
    <h3 id='mediaaluno${index}'>0</h3>
    </div>
    
    </div>`
  });

  document.querySelector('#result').innerHTML = listaInputs.join('');
  document.getElementById('botaoMedia').style = 'display: inline';
}