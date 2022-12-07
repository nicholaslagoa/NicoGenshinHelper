using API.Business.IBusiness;
using API.Dtos;

namespace API.Business
{
  public class TeamMakerBusiness : ITeamMakerBusiness
  {
    public TeamReadDto GetTeams(string[] characters)
    {
      var teste = new TeamReadDto();

      return teste;
    }
  }
}
