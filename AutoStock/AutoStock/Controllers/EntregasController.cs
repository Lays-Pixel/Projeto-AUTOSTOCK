using AutoStock.Data;
using AutoStock.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace AutoStock.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class EntregasController : ControllerBase
    {

        private readonly AppDbContext _context;

        public EntregasController(AppDbContext context)
        {
            _context = context;
        }


        [HttpPost]
        public IActionResult CadastraEntrega(Entrega entrega)
        {

            var sessaoUsuario = HttpContext.Session.GetString("IdLogado");
            if (sessaoUsuario == null)
            {
                return Unauthorized("Faça login Antes");
            }
            var idLogado = Request.Cookies["IdLogado"];
            if (idLogado != null)

                _context.Add(entrega);
            _context.SaveChanges();
            return Created("", entrega);
        }

        [HttpPut("{id}")]
        public IActionResult AtualizaProduto(int id, Entrega entrega)
        {
            var sessaoUsuario = HttpContext.Session.GetString("IdLogado");
            if (sessaoUsuario == null)
            {
                return Unauthorized("Faça login Antes");
            }

            var entregaDoBanco = _context.Entregas.Find(id);
            if (entregaDoBanco == null)
            {
                return NotFound(" Esta Entrega não existe no banco!");
            }
            entregaDoBanco.Data_Recebimento = entrega.Data_Recebimento;
            entregaDoBanco.FkUsuarioIdResponsavel = entrega.FkUsuarioIdResponsavel;
            entregaDoBanco.FkUsuarioIdReceptor = entrega.FkUsuarioIdReceptor;

            _context.SaveChanges();
            return Ok("Atualizado");
        }
    }
}
