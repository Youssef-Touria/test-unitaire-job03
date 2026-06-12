const { calculate } = require("../calculator.js");

describe("Tests addition", () => {
  test("3 + 2", () => {
    expect(calculate("3 + 2")).toBe(5);
  });
  test("3 + 0", () => {
    expect(calculate("3 + 0")).toBe(3);
  });
  test("- 3 + 2", () => {
    expect(calculate("- 3 + 2")).toBe(-1);
  });
});

describe("Tests soustraction", () => {
  test("3 - 2", () => {
    expect(calculate("3 - 2")).toBe(1);
  });
  test("3 - 0", () => {
    expect(calculate("3 - 0")).toBe(3);
  });
  test("- 3 - 2", () => {
    expect(calculate("- 3 - 2")).toBe(-5);
  });
});

describe("Tests multiplication", () => {
  test("3 * 2", () => {
    expect(calculate("3 * 2")).toBe(6);
  });
  test("3 * 0", () => {
    expect(calculate("3 * 0")).toBe(0);
  });
  test("- 3 * 2", () => {
    expect(calculate("- 3 * 2")).toBe(-6);
  });
});

describe("Tests division", () => {
  test("4 / 2", () => {
    expect(calculate("4 / 2")).toBe(2);
  });
  test("3 / 1", () => {
    expect(calculate("3 / 1")).toBe(3);
  });
  test("- 6 / 2", () => {
    expect(calculate("- 6 / 2")).toBe(-3);
  });
});

describe("Test division par zero", () => {
  test("3 / 0", () => {
    expect(calculate("3 / 0")).toBe(Infinity);
  });
});

describe("Test priorités", () => {
  test("2 + 3 * 4", () => {
    expect(calculate("2 + 3 * 4")).toBe(14);
  });
  test("2 + 3 * -4", () => {
    expect(calculate("2 + 3 * -4")).toBe(-10);
  });
});

describe("Test parenthèses", () => {
  test("(2 + 3) * 4", () => {
    expect(calculate("(2 + 3) * 4")).toBe(20);
  });
});

describe("Test expressions invalides", () => {
  test("2 + bad", () => {
    // Correction : un seul espace ici pour correspondre parfaitement
    expect(() => calculate("2 + bad")).toThrow("Expression invalide");
  });

  // Correction : On donne un vrai nom au test au lieu d'une chaîne vide
  test("Chaîne vide", () => {
    expect(() => calculate("")).toThrow("Expression invalide");
  });
});