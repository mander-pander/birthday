const checkWin = (correct, wrong, word) => {
    let status = 'win';

    // Check for win
    word.split('').forEach(letter => {
      if(!correct.includes(letter)){
        status = '';
      }
    });

    // Check for lose
    if(wrong.length === 4) status = 'lose';

    return status;
}

export default checkWin;
