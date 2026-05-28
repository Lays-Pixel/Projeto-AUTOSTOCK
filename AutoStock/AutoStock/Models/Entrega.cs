using AutoStock.Models;

namespace AutoStock.Models;

public class Entrega
{
    public int Id { get; set; }

    public string DataRecebimento { get; set; }

    public int FkUsuarioIdResponsavel { get; set; }

    public int FkUsuarioIdReceptor { get; set; }

    public Usuario Responsavel { get; set; }

    public Usuario Receptor { get; set; }
}