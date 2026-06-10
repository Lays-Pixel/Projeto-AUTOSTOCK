using System.Collections.Specialized;

namespace AutoStock.Models
{
    public class Pedido
    {
        public int Id { get; set; }

        public string DataRecebimento { get; set; }

        public string alocado_prateleira { get; set; }

        public string Nome_Produto { get; set; }

    }
}