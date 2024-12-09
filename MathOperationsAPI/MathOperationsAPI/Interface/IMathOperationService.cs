using MathOperationsAPI.Enums;

namespace MathOperationsAPI.Interface
{
    public interface IMathOperationService
    {
        double Calculate(double value1, double value2, EMathOperations operation);
    }
}
