using API.Models.Enums;

namespace API.Dtos
{
  public class TeamReadDto
  {
    public int Id { get; set; }
    public string? Name { get; set; }
    public DifficultyEnum Difficulty { get; set; }
    public string? Description { get; set; }
    public string? Rotation { get; set; }
  }
}
