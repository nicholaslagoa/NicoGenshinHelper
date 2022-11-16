namespace API.Models.TeamMaker
{
  public class TeamMakerViewModel
  {
    public List<TeamViewModel> TeamList { get; set; }
  }

  public class TeamViewModel
  {
    public string TeamName { get; set; }
    public string TeamDescription { get; set; }
    public List<string> CharacterNames { get; set; }
    public string Rotation { get; set; }
    public string Artifacts { get; set; }
  }
}
