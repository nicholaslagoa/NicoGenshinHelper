using API.Business.IBusiness;
using API.Models.TeamMaker;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  [ApiController, Route("api/team-maker")]
  public class TeamMakerController : ControllerBase
  {
    private readonly ITeamMakerBusiness _business;
    public TeamMakerController(ITeamMakerBusiness business)
    {
      _business = business;
    }

    [HttpGet, Route("get-teams")]
    public ActionResult GetTeams([FromQuery] TeamMakerInputModel input)
    {
      var result = _business.GetTeams(input);

      return Ok(result);
    }
  }
}
