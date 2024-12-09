using MathOperationsAPI.Enums;
using MathOperationsAPI.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MathOperationsAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CalculateController : ControllerBase
{
    private readonly IMathOperationService _mathOperationService;

    public CalculateController(IMathOperationService mathOperationService)
    {
        _mathOperationService = mathOperationService;
    }

    [HttpGet("")]
    [Authorize] 
    public IActionResult Calculate(double value1, double value2, EMathOperations operation)
    {
        try
        {
            var result = _mathOperationService.Calculate(value1, value2, operation);

            return Ok(new
            {
                Value1 = value1,
                Value2 = value2,
                Operation = operation,
                Result = result
            });
        }
        catch (ArgumentException ex)
        {
            return BadRequest(ex.Message);
        }
    }

}
