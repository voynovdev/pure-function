import { checkHealth } from "../checkHealth.js";
// eslint-disable-next-line
test("Check Health Test1", () => {
	let player = {
		name: "Маг",
		health: 90
	}
	const result = checkHealth(player);
	// eslint-disable-next-line
	expect(result).toBe("Healthy")
})

// eslint-disable-next-line
test("Check Health Test2", () => {
	let player = {
		name: "Маг",
		health: 45
	}
	const result = checkHealth(player);
	// eslint-disable-next-line
	expect(result).toBe("Wounded")
})

// eslint-disable-next-line
test("Check Health Test3", () => {
	let player = {
		name: "Маг",
		health: 7
	}
	const result = checkHealth(player);
	// eslint-disable-next-line
	expect(result).toBe("Critical")
})
