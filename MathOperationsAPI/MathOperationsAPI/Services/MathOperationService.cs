using MathOperationsAPI.Enums;
using MathOperationsAPI.Interface;

namespace MathOperationsAPI.Services;

public class MathOperationService : IMathOperationService
{
    public double Calculate(double value1, double value2, EMathOperations operation)
    {
        return operation switch
        {
            EMathOperations.Add => value1 + value2,
            EMathOperations.Subtract => value1 - value2,
            EMathOperations.Multiply => value1 * value2,
            EMathOperations.Divide when value2 != 0 => value1 / value2,
            EMathOperations.Divide => throw new ArgumentException("Divisão por zero não é permitida."),
            _ => throw new ArgumentException("Operação inválida. Use: somar, subtrair, multiplicar ou dividir.")
        };
    }
}
