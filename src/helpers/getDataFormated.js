const getDataFormated = (answers, field) => answers
  .reduce((acc, current) => {
    const findFieldValue = acc
      .find((answer) => answer[field] === current[field]);

    if (!findFieldValue) {
      const count = answers
        .filter((answer) => answer[field] === current[field])
        .length;

      acc.push({ [field]: current[field], count });
    }
    return acc;
  }, [])
  .sort((a, b) => {
    if(field === 'satisfaction') {
      return a[field] - b[field];
    }
    const numberA = Number(a[field].substring(0, 2));
    const numberB = Number(b[field].substring(0, 2));
    return numberA - numberB;
  });

export default getDataFormated;
