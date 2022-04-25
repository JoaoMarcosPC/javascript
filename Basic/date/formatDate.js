//----- FORMAT DATES -----
// Tools -> Regex, toLocaledateString, Intl
const date = new Date('2022-01-25 00:00');



//-----Formating using regex
{
  const regex = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|2[0-9]|3[0-1])/

  const [full, year, month, day] = regex.exec(date.toISOString())
  // [
  //   '2022-01-25',
  //   '2022',
  //   '01',
  //   '25',
  //   index: 0,
  //   input: '2022-01-25T03:00:00.000Z',
  //   groups: undefined
  // ]

  const dateBR = `${day}/${month}/${year}`;

  console.log(dateBR);
  console.log('\n');
}



//-----Formating using Native JS functions
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

{
  const dateBR = date.toLocaleDateString('pt-br', options);
  console.log(dateBR);
  console.log('\n');
}

{
  const dateBR = date.toLocaleDateString('pt-br', {
    ...options,
    month: 'numeric'
  });
  console.log(dateBR);
  console.log('\n');
}

{
  const dateBR = new Intl.DateTimeFormat('pt-br').format(date);
  console.log(dateBR);
  console.log('\n');
}

{
  const dateBR = new Intl.DateTimeFormat('pt-br', {
    dateStyle: 'full',
    timeStyle: 'long'
  }).format(date);

  console.log(dateBR);
}
