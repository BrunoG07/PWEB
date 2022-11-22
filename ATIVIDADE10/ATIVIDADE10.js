var Aluno1 = {
    ra: '0030482023041',
    nome: 'Bruno Felipe do Amaral Gurgel'
  }
  alert("RA: " + Aluno1.ra + "\nNome: " + Aluno1.nome);
  
  Aluno1.ra = '0030482023056';
  Aluno1.nome = 'Jucimara Alves Florencio';
  alert("RA: " + Aluno1.ra + "\nNome: " + Aluno1.nome);
  
  Aluno1['ra'] = '0030482023087';
  Aluno1['nome'] = 'Biruleibe Leibe do Beibe';
  alert("RA: " + Aluno1.ra + "\nNome: " + Aluno1.nome);