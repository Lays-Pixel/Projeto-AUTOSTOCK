using AutoStock.Data;
using AutoStock.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

    public class ProdutosController
    {
        public int qnt_estoque {  get; set; }
        public string tipo_produto { get; set; }
        public int Id { get; set; }
        public string Nome { get; set; }
    }

