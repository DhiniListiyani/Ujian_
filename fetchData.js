const spreadsheetId = '1juknHyEfH9VBZz8d2RIfVM-5WCxH9z0L9xPihL0QHSQ'; // Ganti dengan ID spreadsheet Anda
const apiKey = 'AIzaSyAt4fRLgcDjkin9yo5f1ZwQcVXHqIODGo0'; // Ganti dengan API Key Anda
const range = 'Sheet1'; // Nama sheet di dalam spreadsheet

fetch(`https://sheets.googleapis.com/v4/spreadsheets/1juknHyEfH9VBZz8d2RIfVM-5WCxH9z0L9xPihL0QHSQ/values/Sheet1?key=AIzaSyAt4fRLgcDjkin9yo5f1ZwQcVXHqIODGo0`)
    .then(response => response.json())
    .then(data => {
        let html = '<table border="1"><tr><th>ID</th><th>Kode</th><th>Nama</th><th>Email</th><th>Alamat</th><th>Jabatan</th></tr>';
        
        data.values.slice(1).forEach(row => {
            html += `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td><td>${row[5]}</td></tr>`;
        });
        
        html += '</table>';
        document.getElementById('data-karyawan').innerHTML = html;
    })
    .catch(error => console.log('Error:', error));
