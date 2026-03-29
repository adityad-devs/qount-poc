export const exportToCSV = (data) => {
  const headers = ['Date', 'Description', 'Category', 'Amount'];
  const rows = data.map(row => 
    [row.date, row.description, row.category, row.amount].join(',')
  );
  const csv = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `qount-overview-${new Date().toISOString().split('T')[0]}.csv`;
  link.click();
};

export const validateExportData = (data) => {
  if (!data || data.length === 0) return false;
  if (data.length > 10000) throw new Error('Export limit exceeded');
  return true;
};
