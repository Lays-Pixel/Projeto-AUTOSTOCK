using AutoStock.Data;
using AutoStock.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
    public class   UsuarioController
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public int Senha { get; set; }
        public string Tipo { get; set; }
    }

