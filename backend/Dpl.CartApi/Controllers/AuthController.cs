using Dpl.CartApi.Core.Entities;
using Dpl.CartApi.Infrastructure.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dpl.CartApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;

        public AuthController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User user)
        {
            var validUser = _userService.ValidateUser(user.UserName, user.Password);
            if (validUser == null)
            {
                return BadRequest(new { message = "Invalid credentials" });
            }

            var token = _userService.GenerateToken(validUser);
            return Ok(new { token });
        }
    }
}
