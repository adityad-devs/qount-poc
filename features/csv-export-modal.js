// Export Modal Component
// Shows CSV and PDF format options

export const ExportModal = ({ onDownload, onClose }) => {
  const formats = [
    { id: 'csv', label: 'CSV File', description: 'Best for Excel and accounting tools', active: true },
    { id: 'pdf', label: 'PDF Document', description: 'Coming soon', active: false }
  ];

  return {
    title: 'Export Financial Overview',
    formats,
    onDownload: (format) => {
      if (format === 'csv') onDownload();
    },
    onClose
  };
};
