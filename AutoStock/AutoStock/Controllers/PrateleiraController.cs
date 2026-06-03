using AutoStock.Data;
using AutoStock.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;



namespace AutoStock.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class PrateleiraController : ControllerBase
    {

        private readonly AppDbContext _context;

        public PrateleiraController(AppDbContext context)
        {
            _context = context;
        }


        [HttpPost]
        public IActionResult CadastraPrateleira(Prateleira prateleira)
        {

            var sessaoUsuario = HttpContext.Session.GetString("IdLogado");
            if (sessaoUsuario == null)
            {
                return Unauthorized("Faça login Antes");
            }
            var idLogado = Request.Cookies["IdLogado"];
            if (idLogado != null)

                _context.Add(prateleira);
            _context.SaveChanges();
            return Created("", prateleira);
        }

        [HttpPut("{id}")]
        public IActionResult AtualizaProduto(int id, Prateleira prateleira)
        {
            var sessaoUsuario = HttpContext.Session.GetString("IdLogado");
            if (sessaoUsuario == null)
            {
                return Unauthorized("Faça login Antes");
            }

            var prateleiraDoBanco = _context.Prateleira.Find(id);
            if (prateleiraDoBanco == null)
            {
                return NotFound("Esta prateleira não existe no banco!");
            }
            prateleiraDoBanco.Status = prateleira.Status;
            prateleiraDoBanco.Capacidade = prateleira.Capacidade;


            _context.SaveChanges();
            return Ok("Atualizado");
        }

        [HttpDelete("{id}")]
        public IActionResult DeletaProduto(int id)
        {
            var sessaoUsuario = HttpContext.Session.GetString("IdLogado");
            if (sessaoUsuario == null)
            {
                return Unauthorized("Faça login Antes");
            }

            var prateleiraDoBanco = _context.Prateleira.Find(id);
            if (prateleiraDoBanco == null)
            {
                return NotFound("Não encontrado!");
            }
            _context.Remove(prateleiraDoBanco);
            _context.SaveChanges();
            return Ok("Deletado");
        }
    }
}