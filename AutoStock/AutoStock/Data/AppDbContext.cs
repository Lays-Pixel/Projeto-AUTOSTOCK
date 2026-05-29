using Microsoft.EntityFrameworkCore;
using AutoStock.Models;
namespace AutoStock.Data
{

    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Usuario> Usuario { get; set; }

        public DbSet<Produto> Produto { get; set; }

        public DbSet<Prateleira> Prateleiras { get; set; }

        public DbSet<Entrega> Entregas { get; set; }


    }
}