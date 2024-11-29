function generateRecurringDates() {
    const startDateInput = document.getElementById('startDate').value;
    const recurrenceType = document.getElementById('recurrenceType').value;
    const recurringDatesList = document.getElementById('recurringDatesList');
  
    // Clear previous results
    recurringDatesList.innerHTML = '';
  
    // If no date is selected, return early
    if (!startDateInput) {
      alert("Please select a start date.");
      return;
    }
  
    // Convert selected date to Date object
    const startDate = new Date(startDateInput);
    let dates = [startDate];
  
    // Generate recurring dates based on the selected recurrence type
    if (recurrenceType === 'daily') {
      for (let i = 1; i < 10; i++) {
        const nextDate = new Date(startDate);
        nextDate.setDate(startDate.getDate() + i); // Next 9 days
        dates.push(nextDate);
      }
    } else if (recurrenceType === 'weekly') {
      for (let i = 1; i < 10; i++) {
        const nextDate = new Date(startDate);
        nextDate.setDate(startDate.getDate() + i * 7); // Next 9 weeks
        dates.push(nextDate);
      }
    } else if (recurrenceType === 'monthly') {
      for (let i = 1; i < 10; i++) {
        const nextDate = new Date(startDate);
        nextDate.setMonth(startDate.getMonth() + i); // Next 9 months
        dates.push(nextDate);
      }
    }
  
    // Display recurring dates
    dates.forEach(date => {
      const li = document.createElement('li');
      li.textContent = date.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
      recurringDatesList.appendChild(li);
    });
  }
  