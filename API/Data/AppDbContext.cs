using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
  public class AppDbContext : DbContext
  {
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Team> Teams => Set<Team>();
  }
}
