function checkLogin(event) {
    event.preventDefault(); // Αποτρέπει την ανανέωση της σελίδας
  
    const email = document.getElementById('floatingInput').value;
    const password = document.getElementById('floatingPassword').value;
  
    if (email === '' || password === '') {
      alert('Συμπλήρωσε και τα δύο πεδία.');
      return false;
    }
  
    // Ψευδο-έλεγχος (για demo)
    if (email === 'demo@example.com' && password === '1234') {
      alert('Επιτυχής σύνδεση!');
    } else {
      alert('Λανθασμένα στοιχεία σύνδεσης.');
    }
  
    return false; // Για να μην γίνει reload
  }
  
