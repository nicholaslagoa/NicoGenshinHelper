using API.Models.Enums;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
  public class Team
  {
    [Key]
    public int Id { get; set; }

    [Required]
    public string? Name { get; set; }

    [Required]
    public DifficultyEnum Difficulty { get; set; }

    [Required]
    public string? Description { get; set; }

    [Required]
    public string? Rotation { get; set; }
  }
}
