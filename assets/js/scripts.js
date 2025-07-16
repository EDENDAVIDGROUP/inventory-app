const transactions = [
  {
    id: 'T001',
    product: 'מצנן ARPO 5500',
    customer: 'BOXMASTER',
    integration: 'API',
    date: '2025-07-08',
    status: 'שודר',
    targetStatus: 'התקבל',
    log: 'POST /api/transactions\nResponse: 200 OK'
  },
  {
    id: 'T002',
    product: 'אוהל לוגיסטי 4X4',
    customer: 'מועדון טוב',
    integration: 'Email',
    date: '2025-07-06',
    status: 'נכשל',
    targetStatus: 'שגיאה',
    log: 'Email sent to orders@modontov.co.il\nError: Attachment missing'
  },
  {
    id: 'T003',
    product: 'מטבח עץ לילדים',
    customer: 'סופר-פארם',
    integration: 'Mirakl',
    date: '2025-07-07',
    status: 'ממתין',
    targetStatus: 'ממתין',
    log: 'Waiting for API confirmation from Mirakl...'
  }
];

function saveChanges() {
  alert("💾 שמירת שינויים (דמו בלבד)");
}

function exportToExcel(filename) {
  const headers = ['מספר עסקה', 'מוצר', 'לקוח', 'אינטגרציה', 'תאריך שידור', 'סטטוס', 'סטטוס יעד'];
  const rows = transactions.map(tx => [tx.id, tx.product, tx.customer, tx.integration, tx.date, tx.status, tx.targetStatus]);
  const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function printPage() {
  window.print();
}