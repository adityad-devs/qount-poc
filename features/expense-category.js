export const categorizeExpense = (expense) => {
  const categories = ['Housing', 'Food', 'Transportation', 'Entertainment', 'Shopping', 'Others'];
  return {
    ...expense,
    category: categories.includes(expense.category) ? expense.category : 'Others',
    categorizedAt: new Date().toISOString()
  };
};
