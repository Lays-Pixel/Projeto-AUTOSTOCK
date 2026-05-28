using Microsoft.EntityFrameworkCore;
using AutoStock.Models;
namespace AutoStock.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Usuario> Usuarios { get; set; }

    public DbSet<Produto> Produtos { get; set; }

    public DbSet<Prateleira> Prateleiras { get; set; }

    public DbSet<Entrega> Entregas { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Entrega>()
            .HasOne(e => e.Responsavel)
            .WithMany()
            .HasForeignKey(e => e.FkUsuarioIdResponsavel)
            .OnDelete(DeleteBehavior.NoAction);

        modelBuilder.Entity<Entrega>()
            .HasOne(e => e.Receptor)
            .WithMany()
            .HasForeignKey(e => e.FkUsuarioIdReceptor)
            .OnDelete(DeleteBehavior.NoAction);
    }
}