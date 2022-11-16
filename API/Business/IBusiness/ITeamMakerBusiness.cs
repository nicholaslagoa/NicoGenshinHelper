using API.Models.TeamMaker;

namespace API.Business.IBusiness
{
  public interface ITeamMakerBusiness
  {
    public TeamMakerViewModel GetTeams(TeamMakerInputModel input); 
  }
}
