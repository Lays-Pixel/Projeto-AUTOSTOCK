using AutoStock.Models;

namespace AutoStock.Models;

public class Entrega
{
    public int Id { get; set; }

    public string Data_Recebimento { get; set; }

    public int FkUsuarioIdResponsavel { get; set; }

    public int FkUsuarioIdReceptor { get; set; }

}