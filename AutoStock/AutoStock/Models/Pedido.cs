using System.Collections.Specialized;

namespace AutoStock.Models
{
    public class Pedido
    {
        public int Id { get; set; }

        public string Data_envio { get; set; }

        public string Nome_fornecedor { get; set; }

        public string fk_Usuario_Id { get; set; }

    }
}