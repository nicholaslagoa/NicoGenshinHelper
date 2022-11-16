using API.Business.IBusiness;
using API.Models.TeamMaker;

namespace API.Business
{
  public class TeamMakerBusiness : ITeamMakerBusiness
  {
    public TeamMakerViewModel GetTeams(TeamMakerInputModel input)
    {
      var teste = new TeamViewModel(){
        TeamName = "Teste",
        TeamDescription = "Teste",
        Artifacts = "Teste",
        Rotation = "Teste",
        CharacterNames = new List<string>
        {
          "Teste1", "Teste2", "Teste3", "Teste4"
        }
      };

      var result = new TeamMakerViewModel();
      result.TeamList = new List<TeamViewModel>();

      result.TeamList.Add(teste);

      return result;
    }
  }
}
