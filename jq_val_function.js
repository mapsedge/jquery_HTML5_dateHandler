(function ($) {
	// Save the original val() method
	const originalVal = $.fn.val;

	// Override val() method
	$.fn.val = function (value) {
		// Helper method to format a date to 'yyyy-mm-dd'
		function toISO(date) {
			if (!(date instanceof Date) || isNaN(date)) return "";
			return date.toISOString().split("T")[0];
		}

		// Helper method to format a date to 'mm/dd/yyyy'
		function toUS(isoDate) {
			const parts = isoDate.split("-");
			if (parts.length !== 3) return "";
			return `${parts[1]}/${parts[2]}/${parts[0]}`;
		}

		if (value === undefined) {
			// Getter: Format the date for date controls as 'mm/dd/yyyy'
			if (this.is("input[type='date']")) {
				const rawValue = originalVal.call(this);
				return toUS(rawValue);
			}
			// Default behavior for non-date inputs
			return originalVal.call(this);
		} else {
			// Setter: Reformat any date to 'yyyy-mm-dd' or set blank on error
			if (this.is("input[type='date']")) {
				let formattedValue = "";
				if (value === "today" || value === "now") {
					formattedValue = toISO(new Date());
				} else if (value === "tomorrow") {
					const tomorrow = new Date();
					tomorrow.setDate(tomorrow.getDate() + 1);
					formattedValue = toISO(tomorrow);
				} else if (value === "yesterday") {
					const yesterday = new Date();
					yesterday.setDate(yesterday.getDate() - 1);
					formattedValue = toISO(yesterday);
				} else if (value === "") {
					formattedValue = "";
				} else if (/^[+-]\d+[dmy]$/.test(value)) {
					const today = new Date();
					const amount = parseInt(value.slice(1), 10);
					const unit = value.slice(-1);

					if (unit === "d") {
						today.setDate(today.getDate() + (value.startsWith("+") ? amount : -amount));
					} else if (unit === "m") {
						today.setMonth(today.getMonth() + (value.startsWith("+") ? amount : -amount));
					} else if (unit === "y") {
						today.setFullYear(today.getFullYear() + (value.startsWith("+") ? amount : -amount));
					}

					formattedValue = toISO(today);
				} else {
					const parsedDate = new Date(value);
					formattedValue = toISO(parsedDate);
				}
				return originalVal.call(this, formattedValue);
			}
			// Default behavior for non-date inputs
			return originalVal.call(this, value);
		}
	};

})(jQuery);
