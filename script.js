function juro_simples(){
   let capital = perseInt(document.getElementById('capital').value);
   let taxa = perseInt(document.getElementById('juros').value);
   let tempo = perseInt(document.getElementById('tempo').value);
   
   taxa = taxa/100;
   let j = capital * taxa * tempo;
   let montante = j + capital;
   document.getElementById('resultado').textContent = 'resultado:' + montante;
   alert(j);
}