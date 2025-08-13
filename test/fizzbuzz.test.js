import { fizzbuzz } from "../src/fizzbuzz";
import { describe, it, expect, vi } from "vitest";

describe("Fizzbuzz", () => {
  const logSpy =  vi.spyOn(console, "log").mockImplementation(() => {});
  it("Debería imprimir Fizz para múltiplos de 3, Buzz para múltiplos de 5, y FizzBuzz para múltiplos de 3 y 5 ", () => {
      fizzbuzz();
       expect(logSpy).toHaveBeenCalledWith(1);
    expect(logSpy).toHaveBeenCalledWith(2);
    expect(logSpy).toHaveBeenCalledWith('Fizz');
    expect(logSpy).toHaveBeenCalledWith(4);
    expect(logSpy).toHaveBeenCalledWith('Buzz');
    expect(logSpy).toHaveBeenCalledWith('Fizz');
    expect(logSpy).toHaveBeenCalledWith(7);
    expect(logSpy).toHaveBeenCalledWith(8);
    expect(logSpy).toHaveBeenCalledWith('Fizz');
    expect(logSpy).toHaveBeenCalledWith('Buzz');
    expect(logSpy).toHaveBeenCalledWith(11);
    expect(logSpy).toHaveBeenCalledWith('Fizz');
    expect(logSpy).toHaveBeenCalledWith(13);
    expect(logSpy).toHaveBeenCalledWith(14);
    expect(logSpy).toHaveBeenCalledWith('FizzBuzz');
  })
})