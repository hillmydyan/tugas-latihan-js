document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const tugasInput = document.getElementById('tugas').value;
    const utsInput = document.getElementById('uts').value;
    const uasInput = document.getElementById('uas').value;

    const tugas = parseFloat(tugasInput);
    const uts = parseFloat(utsInput);
    const uas = parseFloat(uasInput);

    const TUGAS_BOBOT = 0.3;
    const UTS_BOBOT = 0.3;
    const UAS_BOBOT = 0.4;
    const LULUS_BATAS = 60;


    if (isNaN(tugas) || isNaN(uts) || isNaN(uas) || tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
        alert('Masukkan nilai yang valid (0-100) untuk semua komponen.');
        return;
    }


    let rataRata = (tugas * TUGAS_BOBOT) + (uts * UTS_BOBOT) + (uas * UAS_BOBOT);
    let status = '';


    if (rataRata >= 90) {
        status = 'A';
    } else if (rataRata >= 80) {
        status = 'B';
    } else if (rataRata >= 70) {
        status = 'C';
    } else if (rataRata >= 60) {
        status = 'D';
    } else {
        status = 'E';
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Hasil:</h2>
        <p>Nilai Rata-rata: ${rataRata.toFixed(2)}</p>
        <p>Nilai Huruf: ${status}</p>
        <p>Status: ${rataRata >= LULUS_BATAS ? 'Lulus' : 'Tidak Lulus'}</p>
    `;
});
