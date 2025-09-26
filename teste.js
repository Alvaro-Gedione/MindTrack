const response = await fetch('https://script.google.com/macros/s/AKfycbycScdDY666D624_lBdXk5VHpjoYq1EKCN_FYKdFWGcTb0hB_q_mOrrHmAjx1yhvFVktQ/exec?action=login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: "maria@empresa.com",
    senha: "senha123"
  })
});