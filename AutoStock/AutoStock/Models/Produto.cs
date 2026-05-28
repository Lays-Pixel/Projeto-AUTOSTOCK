namespace AutoStock.Models;

public class Produto
{
    public int Id { get; set; }

    public string Nome { get; set; }

    public int QntEstoque { get; set; }

    public string TipoProduto { get; set; }
}