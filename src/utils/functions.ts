export const getInputValidations = (required = false, minLength = -Infinity, maxLength = Infinity): object => {
	const validations: { required?: string, minLength?: object, maxLength?: object } = {};

	if (required) validations.required = 'Please fill the input!';
	if (minLength)
		validations.minLength = {
			value: minLength,
			message: `characters should not be less than ${minLength}`,
		};
	if (maxLength)
		validations.maxLength = {
			value: maxLength,
			message: `characters should not be more than ${maxLength}`,
		};

	return validations;
};

export const saveData = (name = "", data = {}) => {
	if (typeof localStorage !== "undefined") {
		localStorage.setItem(name, JSON.stringify(data));
	}
}

export const getData = (name = "") => {
	if (typeof localStorage !== "undefined") {
		const data = localStorage.getItem(name);
		if (data) return JSON.parse(data);
	}

	return null;
}
