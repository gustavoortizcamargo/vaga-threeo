using MathOperationsAPI.Models;
using MathOperationsAPI.Requests;
using MathOperationsAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace MathOperationsAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly TokenService _tokenService;
    private readonly UserService _userService;

    public AuthController(TokenService tokenService, UserService userService)
    {
        _tokenService = tokenService;
        _userService = userService;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] UserRequest user)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var existingUser = _userService.GetUser(user.Email, user.Password);

        if (existingUser == null)
        {
            return Unauthorized(new { Message = "Invalid credentials" });
        }

        var token = _tokenService.Create(existingUser);
        return Ok(new { Token = token });
    }
}
