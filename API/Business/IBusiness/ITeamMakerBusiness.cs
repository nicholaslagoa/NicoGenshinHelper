using API.Dtos;

namespace API.Business.IBusiness
{
  public interface ITeamMakerBusiness
  {
    public TeamReadDto GetTeams(string[] characters); 
  }
}
