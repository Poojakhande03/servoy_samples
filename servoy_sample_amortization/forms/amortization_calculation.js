/**
 *
 * @properties={typeid:24,uuid:"d1877d6b-e59d-4870-8055-079ee1549de5"}
 */
function updateAmortizationSchedule()
{
	// Get a new amortization calculation.
	var c = plugins.amortization.newCalculation();

	plugins.agent.setVisible(true);

	// Sanity checks
	if (!(globals.loan_amount > 0))
	{
		plugins.agent.speak("Please fill in a valid loan amount");
		return;
	}
	if (!globals.loan_date)
	{
		plugins.agent.speak("Please fill in a loan date!");
		return;
	}
	if (!(globals.payment_amount > 0))
	{
		plugins.agent.speak("Please fill in a valid payment amount!");
		return;
	}
	if (!(globals.payment_number > 0))
	{
		plugins.agent.speak("Please fill in a valid payment number!");
		return;
	}
	if (globals.payment_number * globals.payment_amount < globals.loan_amount)
	{
		plugins.agent.speak("The number of payments is not enough to ever repay the loan!");
		return;
	}
	if (!globals.payment_period || !c.isValidPeriod(globals.payment_period))
	{
		plugins.agent.speak("Please enter a valid payment frequency!");
		return;
	}
	if (!globals.payment_start_date)
	{
		plugins.agent.speak("Please enter a valid payment start date!");
		return;
	}
	if (globals.payment_start_date < globals.payment_end_date)
	{
		plugins.agent.speak("Your payment start date should be after your loan date!");
		return;
	}

	plugins.agent.speak("Updating your schedule!");

	// Set the rate to -1 for unknown.
	c.addRateChange(-1, globals.loan_date);

	// Set the compounding period.
	c.addCompoundPeriodChange(globals.payment_period, globals.loan_date);

	// Add the loan and the payments to the schedule.
	c.addLoan(globals.loan_amount, globals.loan_date);
	c.addPayment(globals.payment_amount, globals.payment_start_date, null, globals.payment_period, globals.payment_number);

	// Solve for the interest rate.
	c.solveForUnknown();

	// Get the interest rate and the error in the calculation.
	// which should be small (otherwise the calculation did
	// not converge for some reason.
	var r = c.getUnknown();
	var e = c.getError();

	elements.rate.text = r;
	elements.error.text = e;

	// When there are no unknowns you can calculate the
	// actual amortization schedule.
	c = plugins.amortization.newCalculation();

	// Same as before, use the calculated interest rate.
	c.addRateChange(r, globals.loan_date);
	c.addCompoundPeriodChange(globals.payment_period, globals.loan_date);
	c.addLoan(globals.loan_amount, globals.loan_date);
	c.addPayment(globals.payment_amount, globals.payment_start_date, null, globals.payment_period, globals.payment_number);

	// Calculate the actual amortization schedule.
	c.calculateAmortizationSchedule();

	// Get the amortization schedule (which is a JSDataSet) and
	// convert it to html. This way you can put it on a label.
	// As a JSDataSet you can just get the values stored in
	// the rows and collumns to use in your script.
	globals.amortization_schedule = "<html><font size='-2'>" + c.getAmortizationSchedule().getAsHTML();

	// Get the rest balance, which is the amount left over after
	// the amortization schedule. In our case (since we calculated
	// the rate to have nothing left, it should amount to no more
	// than 1 or 2 cents due to rounding).
	elements.rest_balance.text = c.getRestBalance();
}
